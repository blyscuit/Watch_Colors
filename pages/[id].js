const Post = props => {
}

export async function getStaticPaths() {

    return {
        paths: [],
      fallback: true
    }
  }

export async function getStaticProps(context) {
    return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
  }

  export default Post;
  