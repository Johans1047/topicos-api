import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("task")
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar" })
    title!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "timestamp" })
    dueBy!: Date;

    @Column({ type: "timestamp" })
    createdAt!: Date;

    @Column({ type: "bit" })
    important!: boolean;

    @Column({ type: "bit" })
    completed!: boolean;
}