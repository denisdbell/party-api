import { Module } from "@nestjs/common";
import { UserContoller } from "./user.controller";

@Module({
    controllers: [UserContoller]
})
export class UserModule {}