import React from 'react'
import Urikaktrn from './components/Urikaktrn'

// ReactRouter関連のimport
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Apollo-Client関連のimport
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'

function App() {

  // キャッシュ
  const cache = new InMemoryCache()

  // GraphQLのエンドポイント
  const httpLink = new HttpLink({
    uri: 'https://daiei-apollo-one.now.sh/',
  })

  // Apollo-Clientの設定
  const client = new ApolloClient({
    link: httpLink,
    cache,
  })

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Urikaktrn} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )

}

export default App
