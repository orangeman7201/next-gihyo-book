// import { ApiContext, User } from 'types'
import { fetcher } from '../../utils'

export type GetUserParams = {
  id: number
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

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   サンプルレスポンス
   {
     'id': '1',
     'username': 'taketo',
     'displayName': 'Taketo Yoshida',
     'email': 'taketo@example.com',
     'profileImageUrl': '/users/1.png',
     'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
   }
  */

  return await fetcher(`${context.apiRootUrl.replace(/\$/g, '')}/user/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getUser
