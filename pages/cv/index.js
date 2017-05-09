// @flow
import React from 'react'
import Layout from '../../components/layout'

const B = ({children}: {children?: React$Element<*>}) => <strong>{children}</strong>

const GOVUK = () => <a href='https://www.gov.uk' target='_blank'>GOV.UK</a>
const GaaP = () => <a href='https://governmentasaplatform.blog.gov.uk/' target='_blank'>GaaP</a>
const MigrationProgramme = () => (
  <a href='https://insidegovuk.blog.gov.uk/2016/06/30/migration-update-june-2016/' target='_blank'>
    Migration programme
  </a>
)
const GOVUKExperience = () => (
  <li>
    Rebuild GOV.UK formats as part of the <MigrationProgramme /> team, moving from
    the legacy monolith publisher to a <B>microservices</B> pipeline. <B>Ruby on Rails</B>
    , <B>TDD</B>, <B>Agile</B>.
  </li>
)
const WebchatAlpha = () => <a href='https://github.com/alphagov/webchat-alpha' target='_blank'>Webchat Alpha</a>
const WebchatBlogPost = () => (
  <a href='https://accessibility.blog.gov.uk/2016/12/09/patterns-for-accessible-webchats/' target='_blank'>
    blog posts
  </a>
)
const ViewTransformationDependencies = () => (
  <a href='https://github.com/alphagov/transformation-dependencies' target='_blank'>
    view digital transformation dependencies
  </a>
)
const CountryPicker = () => (
  <a href='https://github.com/alphagov/openregister-location-picker' target='_blank'>
    reusable country picker component
  </a>
)
const AccessibleAutocomplete = () => (
  <a href='https://github.com/alphagov/accessible-typeahead' target='_blank'>Accessible Autocomplete component</a>
)
const SuggestionEngine = () => (
  <a href='https://github.com/alphagov/openregister-picker-engine' target='_blank'>suggestion engine</a>
)
const DAC = () => <a href='http://www.digitalaccessibilitycentre.org/' target='_blank'>Digital Accessibility Centre</a>

const GDS = () => (
  <section>
    <h3>Government Digital Service, Developer / Senior Developer, March 2016 - August 2017</h3>
    <ul>
      <li>
        GDS builds <GOVUK />, <GaaP />, and other digital transformation services.
      </li>
      <li>
        Lead development of a <CountryPicker />. Talk to service teams to learn about their needs, prototype
        initial implementation, build an <AccessibleAutocomplete /> and a <SuggestionEngine />. Take the component
        to user research, with abled users and with users with access needs, and an accessibility audit from
        the <DAC />. <B>Preact.js</B>, <B>TDD</B>, <B>Selenium testing</B>, <B>accessibility testing</B>
        , <B>progressive enhancement</B>.
      </li>
      <li>
        Lead development of the <WebchatAlpha /> project, building user research prototypes and testing with users.
        Focus on <B>accessibility</B> of webchat interfaces. Attend user research sessions, conduct on-site
        interviews with departments using webchat. Released findings as presentations, <WebchatBlogPost />
        . <B>Node.js</B>, <B>React.js</B>, <B>Socket.io</B>, <B>accessibility testing</B>.
      </li>
      <li>
        Lead development of a <B>data visualisation</B> prototype to <ViewTransformationDependencies />
        . <B>Node.js</B>, <B>React.js</B>, <B>D3.js</B>, <B>Google Sheets API</B>.
      </li>
      <GOVUKExperience />
      <li>
        Present talks about <B>React.js</B> and <B>accessibility</B>. Provide mentoring to apprentices,
        line manage 2 developers.
      </li>
    </ul>
  </section>
)

const Timecounts = () => (
  <section>
    <h3>Timecounts, Senior Full Stack Developer, May 2015 - February 2016</h3>
    <ul>
      <li>
        Timecounts builds a volunteer and community management tool for charities and non-profits.
      </li>
      <li>
        Build product features, collaborating with the stakeholders to define specifications. <B>Node.js</B>
        , <B>React.js</B>, <B>TDD</B>, <B>Ruby on Rails</B>
      </li>
      <li>
        Major features shipped include a calendar view and date picker component, CSV import validation, landing and
        marketing pages, <B>animations</B>, improvements to the build process, backend support fixes.
      </li>
      <li>
        Help the team refine their <B>Agile</B> processes, implement code review and issue tracking methods.
        Champion <B>functional programming</B> and linting.
      </li>
    </ul>
  </section>
)

const Workangel = () => (
  <section>
    <h3>Workangel, Lead Front End Developer, September 2014 - April 2015</h3>
    <ul>
      <li>
        Workangel builds an employee benefits, engagement and retention platform.
      </li>
      <li>
        Build product features on the admin panel and user facing application, two <B>Angular.js 1</B> single page
        applications.
      </li>
      <li>
        Ship a <B>responsive web design</B> rebuild and <B>animations</B> for inter-page transitions and more,
        both not scoped or factored into estimations but delivered to extremely favourable reception.
      </li>
      <li>
        Dramatically improve the build process by <B>optimising the performance</B> of tasks and embracing modern best
        practices: template minification, linting, unit and Selenium integration testing, continuous integration,
        load testing.
      </li>
      <li>
        Defined Jade, Stylus, and JavaScript styleguides. Provided mentoring and coaching to new developers.
      </li>
    </ul>
  </section>
)

export default () => (
  <Layout>
    <article>
      <h1>Theodor Vararu's Résumé</h1>

      <section>
        <h2>Experience</h2>
        <GDS />
        <Timecounts />
        <Workangel />
      </section>

      <section>
        <h2>Education</h2>
      </section>

      <section>
        <h2>Projects</h2>
      </section>

      <section>
        <h2>Technologies</h2>
      </section>

      <section>
        <h2>Hobbies</h2>
      </section>
    </article>
  </Layout>
)
