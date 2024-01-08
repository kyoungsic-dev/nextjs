import { NextRequest } from 'next/server';

export function middleware(req: NextRequest){
  console.log('미들웨어가 실행되고 있음... 체크 중...')
}