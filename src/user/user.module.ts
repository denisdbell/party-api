import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserContoller } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserContoller],
    providers: [UserService]
})
export class UserModule {}