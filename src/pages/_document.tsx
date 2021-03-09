import Document ,{ Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
       
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&display=swap" rel="stylesheet" />
           
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>


      </Html>
    )
  }
}