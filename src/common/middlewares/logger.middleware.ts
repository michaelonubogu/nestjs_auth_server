import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    throw new Error("Method not implemented.");
  }
  resolve(name: string): MiddlewareFunction {
    return (req, res, next) => {
      try {
        var offuscateRequest = JSON.parse(JSON.stringify(req.body));
        if (offuscateRequest && offuscateRequest.password) offuscateRequest.password = "*******";
        if (offuscateRequest && offuscateRequest.newPassword) offuscateRequest.newPassword = "*******";
        if (offuscateRequest && offuscateRequest.currentPassword) offuscateRequest.currentPassword = "*******";
        if (offuscateRequest != {}) console.log(new Date().toString() + ' - [Request] ' + req.baseUrl + " - " + JSON.stringify(offuscateRequest));
      } catch (error) { }
      next();
    };
  }
}