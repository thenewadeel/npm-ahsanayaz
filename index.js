#!/usr/bin/env node

const {
  white,
  bold,
  blueBright,
  green,
  red,
  greenBright,
} = require("colorette");

const work = greenBright(`Software Engineer @ ${red('Home Sweet Home <3')}`)
//const gde = `${blueBright('  Google Developers Expert')} ${white('in Angular')}`
const twitter = blueBright('https://twitter.com/thenewadeel')
const linkedIn = blueBright('https://linkedin.com/in/thenewadeel')
const github = blueBright('https://github.com/thenewadeel')
const slides = blueBright('https://slides.com/thenewadeel')
const medium = blueBright('https://medium.com/@thenewadeel')
const npx = green('npx thenewadeel')

const newline = '\n'
const heading = `${white('  Muhammad Adeel Shahid ')}`
const working = `${white(bold('     Work:'))}  ${work}`
const linkedining = `${white(bold('  LinkedIn:'))} ${linkedIn}`
const twittering = `${white(bold('  Twitter:'))}  ${twitter}`
const githubing = `${white(bold('   GitHub:'))}  ${github}`
const slidesing = `${white(bold('   Slides:'))}  ${slides}`;
const mediuming = `${white(bold('   Medium:'))}  ${medium}`;
const carding = `${white(bold('     Card:'))}  ${npx}`

let output = `${newline} ${newline} ${heading} ${newline} ${newline}  ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline} ${slidesing} ${newline} ${mediuming} ${newline} ${newline} ${carding} ${newline} ${newline}`;

console.log(output)
