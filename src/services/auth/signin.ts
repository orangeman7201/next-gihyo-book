// import { ApiContext, User } from 'types'
import { fetcher } from '../../utils'

export type SigninParams = {
  username: string
  password: string
}

// 以下の2つの方はエラー解消のため記述したもの。
// 後ほど別モジュールで定義して以下の2つの型は削除する
type ApiContext = {
  apiRootUrl: string
}

type User = {
  name: string
  password: string
}

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(`${context.apiRootUrl.replace(/\$/g, '')}/auth/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}

export default signin
