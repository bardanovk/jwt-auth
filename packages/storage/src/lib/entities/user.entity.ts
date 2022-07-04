import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'login', type: 'varchar', nullable: false, unique: true })
    login: string;

    @Column({ name: 'password', type: 'varchar', nullable: false })
    password: string;
}