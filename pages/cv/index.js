// @flow
import redirect from 'next-redirect'

const Index = () => null
Index.getInitialProps = async (ctx: Object) =>
  redirect(ctx, 'https://tvararu.github.io/cv/')

export default Index
