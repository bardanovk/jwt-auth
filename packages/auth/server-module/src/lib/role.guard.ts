import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from '@nestjs/jwt';
import { Observable } from "rxjs";
import { ROLES_KEY } from "./role-auth.decorator";


export class RoleGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly reflector: Reflector
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {

            const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);
            const req = context.switchToHttp().getRequest()

            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if (bearer !== 'Bearer' || !token)
                throw new UnauthorizedException();

            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        }
        catch (e) {
            throw new UnauthorizedException()
        }
    }
}