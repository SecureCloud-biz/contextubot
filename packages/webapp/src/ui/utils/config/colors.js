import { darken, lighten } from 'polished';

export const colors = {
  black: '#1c1c1c',
  white: '#fff',

  coffeeWt: lighten(0.22, '#a16927'),
  coffeeHL: lighten(0.165, '#a16927'),
  coffeeLt: lighten(0.11, '#a16927'),
  coffeeLLt: lighten(0.055, '#a16927'),
  coffeeM: '#a16927',
  coffeeHD: darken(0.055, '#a16927'),
  coffeeD: darken(0.11, '#a16927'),
  coffeeLD: darken(0.165, '#a16927'),
  coffeeBlk: darken(0.22, '#a16927'),

  redWt: lighten(0.22, '#c2000b'),
  redHL: lighten(0.165, '#c2000b'),
  redLt: lighten(0.11, '#c2000b'),
  redLLt: lighten(0.055, '#c2000b'),
  redM: '#c2000b',
  redHD: darken(0.055, '#c2000b'),
  redD: darken(0.11, '#c2000b'),
  redLD: darken(0.165, '#c2000b'),
  redBlk: darken(0.22, '#c2000b'),

  blueWt: lighten(0.22, '#3a5cb1'),
  blueHL: lighten(0.165, '#3a5cb1'),
  blueLt: lighten(0.11, '#3a5cb1'),
  blueLLt: lighten(0.055, '#3a5cb1'),
  blueM: '#3a5cb1',
  blueHD: darken(0.055, '#3a5cb1'),
  blueD: darken(0.11, '#3a5cb1'),
  blueLD: darken(0.165, '#3a5cb1'),
  blueBlk: darken(0.22, '#3a5cb1'),

  greyWt: lighten(0.22, '#bfbfbf'),
  greyHL: lighten(0.165, '#bfbfbf'),
  greyLt: lighten(0.11, '#bfbfbf'),
  greyLLt: lighten(0.055, '#bfbfbf'),
  greyM: '#bfbfbf',
  greyHD: darken(0.055, '#bfbfbf'),
  greyD: darken(0.11, '#bfbfbf'),
  greyLD: darken(0.165, '#bfbfbf'),
  greyBlk: darken(0.22, '#bfbfbf'),

  flareWt: 'rgba(255,255,255,.07)',
  flareHL: 'rgba(255,255,255,.17375)',
  flareLt: 'rgba(255,255,255,.2775)',
  flareLLt: 'rgba(255,255,255,.38125)',
  flareM: 'rgba(255,255,255,.485)',
  flareHD: 'rgba(255,255,255,.58875)',
  flareD: 'rgba(255,255,255,.6925)',
  flareLD: 'rgba(255,255,255,.79625)',
  flareBlk: 'rgba(255,255,255,.9)',

  shadowWt: 'rgba(0,0,0,.07)',
  shadowHL: 'rgba(0,0,0,.17375)', // 0,07+((0,83/8)*1)
  shadowLt: 'rgba(0,0,0,.2775)',
  shadowLLt: 'rgba(0,0,0,.38125)',
  shadowM: 'rgba(0,0,0,.485)',
  shadowHD: 'rgba(0,0,0,.58875)',
  shadowD: 'rgba(0,0,0,.6925)',
  shadowLD: 'rgba(0,0,0,.79625)',
  shadowBlk: 'rgba(0,0,0,.9)'
};

export const color = colors;
