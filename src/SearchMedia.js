import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

import { Collapse, Spin } from 'antd';

import {
  Action,
  Container,
  Content,
  PageTitle,
  SearchForm,
  Separator
} from './ui';

import './App.css';

const Panel = Collapse.Panel;

class SearchMedia extends Component {
  renderTitle() {
    if (!this.props.main.state.data.info) return null;
    return (
      <div
        style={{
          padding: 16,
          width: 480,
          fontWeight: '600',
          fontSize: 24
        }}
      >
        <span>{this.props.main.state.data.info.title}</span>
      </div>
    );
  }

  renderThumbnail() {
    if (!this.props.main.state.data.embed) return null;
    return (
      <div
        style={{
          padding: 16
        }}
      >
        <img
          alt="thumbnail"
          src={this.props.main.state.data.embed[0].thumbnail_url}
        />
      </div>
    );
  }

  renderDescription() {
    if (!this.state.data.embed) return null;
    return (
      <div
        style={{
          padding: 16,
          width: 480
        }}
      >
        <span>{this.props.main.state.data.embed[0].description}</span>
      </div>
    );
  }

  renderViewCount() {
    if (!this.props.main.state.data.info) return null;
    return (
      <div
        style={{
          padding: 16,
          width: 480,
          fontWeight: '600'
        }}
      >
        <span>
          Views :{' '}
          {new Intl.NumberFormat().format(
            this.props.main.state.data.info.view_count
          )}
        </span>
      </div>
    );
  }

  renderHeaders() {
    if (!this.props.main.state.data.headers) return null;
    return (
      <Panel header="HTTP Headers" key="1">
        <ReactJson name="headers" src={this.props.main.state.data.headers} />
      </Panel>
    );
  }

  renderEmbed() {
    if (!this.props.main.state.data.embed) return null;
    return (
      <Panel header="Embed" key="2">
        <ReactJson name="embed" src={this.props.main.state.data.embed} />
      </Panel>
    );
  }

  renderInfo() {
    if (!this.props.main.state.data.info) return null;
    return (
      <Panel header="Media Options" key="3">
        <ReactJson name="info" src={this.props.main.state.data.info} />
      </Panel>
    );
  }

  renderFile() {
    if (!this.props.main.state.data.file) return null;
    return (
      <Panel header="Media Info" key="4">
        <ReactJson name="file" src={this.props.main.state.data.file} />
      </Panel>
    );
  }

  renderFingerprint() {
    if (!this.props.main.state.data.fingerprint) return null;
    return (
      <Panel header="Fingerprint" key="5">
        {this.props.main.state.data.fingerprint ? (
          <Action href={this.props.main.state.data.fingerprint}>
            Download
          </Action>
        ) : null}
      </Panel>
    );
  }

  renderMatches() {
    if (!this.props.main.state.data.matches) return null;
    return (
      <Panel header="Matches" key="6">
        <ReactJson name="matches" src={this.props.main.state.data.matches} />
      </Panel>
    );
  }

  renderErrors() {
    if (!this.props.main.state.data.errors) return null;
    const filteredArr = this.props.main.state.data.errors.filter(err => {
      return Object.keys(err).length;
    });

    return (
      <Panel
        header={`Errors${filteredArr ? ': ' + filteredArr.length : ''}`}
        key="X"
      >
        <ReactJson name="errors" src={filteredArr} />
      </Panel>
    );
  }

  renderResult(match) {
    if (match.duration === 0) return null;

    const uid = match.source.replace('.afpt', '').replace('_tva', '');
    const clipStart = match.time;
    const clipEnd = match.time + match.duration;
    const mp4Url = `https://archive.org/download/${uid}/${uid}.mp4?t=${clipStart}/${clipEnd}`;
    const comicUrl = `TranscriptView?${uid}/${clipStart}/${clipEnd}`;

    return (
      <li key={mp4Url}>
        <span>
          {uid.replace(/_/g, ' ')} ({match.duration}s)
        </span>
        <video className="video" width="300" height="254" controls>
          <source src={mp4Url} />
        </video>
        <span>
          <Link to={comicUrl}>transcriptview </Link>
        </span>
      </li>
    );
  }

  // renderCollapse() {
  //   console.log('In renderCollapse()');
  //   if (Object.keys(this.props.main.state.data).length === 0) return null;
  //   console.log('Object.keys present...');
  //   return [
  //     this.renderWrappedResults(),
  //     <Collapse style={{ marginTop: 14 }}>
  //       {this.renderHeaders()}
  //       {this.renderEmbed()}
  //       {this.renderInfo()}
  //       {this.renderFile()}
  //       {this.renderFingerprint()}
  //       {this.renderMatches()}
  //       {this.renderErrors()}
  //     </Collapse>
  //   ];
  // }

  handleChange(e) {
    this.props.main.handleChange.bind(this)(e);
    this.setState({ searchKey: e.target.value });
    console.log('THIS PROPS', this.props);
    console.log('THIS STATE', this.state);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.main.handleSearch.bind(this)(this.state.searchKey);
  }

  render() {
    const { main } = this.props;
    /* this.renderTitle() */
    /* this.renderThumbnail() */
    /* this.renderDescription() */
    /* this.renderViewCount() */

    const hasFetchedResults = Object.keys(main.state.data).length > 0;
    const hasFingerprint = this.props.main.state.data.fingerprint !== undefined;
    const hasMatches = this.props.main.state.data.matches !== undefined;
    const isStillSearching = main.state.status === 'process';

    console.log('—— hasFetchedResults: ', hasFetchedResults);
    console.log('—— hasFingerprint: ', hasFingerprint);
    console.log('—— hasMatches: ', hasMatches);
    console.log('—— isStillSearching: ', isStillSearching);

    const SearchResults = styled(Container.withComponent('ul'))`
      display: flex;
      & > li {
        background: yellow;
      }
    `;

    const renderForm = () => {
      return (
        <Container limit="m">
          <PageTitle display="h1">
            Source-check questionable media. <br />Stand by reputable sources.
          </PageTitle>
          <Separator dir="h" silent size="m" />
          <SearchForm
            handleSubmit={data => main.handleSearch.bind(this)(data)}
          />
        </Container>
      );
    };

    const renderResults = () => {
      if (isStillSearching) {
        return <Spin size="large" />;
      }
      return (
        <Container>
          <PageTitle display="h2">
            Here the <strong>199 possible matches</strong> I found:
          </PageTitle>
          <SearchResults dir="row" limit="m">
            {main.state.data.matches.map(this.renderResult)}
          </SearchResults>
        </Container>
      );
    };

    return (
      <Content dir="row" align="center">
        {hasFingerprint && hasFetchedResults && hasMatches
          ? renderResults()
          : renderForm()}
      </Content>
    );
  }
}

export default SearchMedia;
