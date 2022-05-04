export default function Custom404() {
    return (<></>);
  }
  
  export const getStaticProps = () => {
    return {
      redirect: {
        destination: '/',
      },
    };
  };