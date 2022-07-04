import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';
import { Logger } from "@nestjs/common";


export default ((): TypeOrmModuleOptions => {
    // const location = path.join(__dirname, 'dev.db');
    // Logger.log(location);
    return {
        type: 'sqljs',
        location: './dev.db',
        autoLoadEntities: true,
        autoSave: true,
        synchronize: true,
        retryAttempts: 1,
        logger: 'file',
        logging: 'all'
    }
})();