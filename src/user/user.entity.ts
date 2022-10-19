import {Column,Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    age: number;
    @Column()
    address: string;
    @Column()
    dob: Date;
    @Column()
    verified: Boolean;
}

