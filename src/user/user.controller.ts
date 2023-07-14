import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get("list")
    getList() {
      return [
        {
          //ここがレスポンスこれをユーザーの情報にする!!
          title: "牛乳を買いに行く",
          due_on: "2022-12-24",
          done: false
        }
      ]
    }

}

