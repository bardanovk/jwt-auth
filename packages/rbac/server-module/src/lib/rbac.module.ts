import { Module } from '@nestjs/common';
import { RbacService } from './rbac.service';

@Module({
  controllers: [],
  providers: [RbacService],
  exports: [],
})
export class RbacServerModule { }