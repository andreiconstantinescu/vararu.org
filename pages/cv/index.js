// @flow
import redirect from 'next-redirect'

const CV = () => null
CV.getInitialProps = async (ctx: Object) =>
  redirect(ctx, 'https://tvararu.github.io/cv/')

export default CV
