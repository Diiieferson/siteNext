import Head from 'next/head';
import Menu from '../components/Menu';
import { Button } from '@material-ui/core';


function Home() {
  return (
    <div>
      <Menu/>
      Página Home
      <Head>
        <meta charSet='utf-8' />
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

export default Home