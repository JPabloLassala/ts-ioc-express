import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { UserService } from './services';
import { TYPES } from './constants';
import './controllers/user.controller';

dotenv.config();

const container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserService);

const server = new InversifyExpressServer(container);
const app = server.build();
const port = process.env.PORT;

app.listen(3000);

console.log(`[server]: Server is running at https://localhost:3000`);
