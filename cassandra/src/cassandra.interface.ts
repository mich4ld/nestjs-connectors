import { ModuleMetadata } from '@nestjs/common';
import { Client, DseClientOptions } from 'cassandra-driver';

export interface CassandraOptions extends DseClientOptions {
    onReady?: (client: Client) => any | Promise<any>;
    beforeShutdown?: (client: Client) => any | Promise<any>;
    noConnect?: boolean;
}

export interface CassandraModuleOptions extends CassandraOptions {
    clientName?: string;
}

export interface CassandraModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    clientName?: string;
    useFactory: (...args: any) => CassandraOptions | Promise<CassandraOptions>;
    inject?: any[];
}