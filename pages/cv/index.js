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

export default () => (
  <Layout>
    <article>
      <h1>Theodor Vararu's Résumé</h1>

      <section>
        <h2>Experience</h2>
        <GDS />
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
