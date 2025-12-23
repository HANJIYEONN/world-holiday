import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n';

export default createMiddleware({
  // 지원하는 언어 목록
  locales,
  
  // 기본 언어 (URL에 언어 코드가 없을 때 사용)
  defaultLocale: 'ko'
});

export const config = {
  // 모든 경로에 대해 미들웨어 실행 (정적 파일 제외)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

