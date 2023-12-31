import { IngredientsModule } from './core/modules/ingredients/ingredients.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './core/modules/database/database.module';
import { UsersModule } from './core/modules/users/users.module';
import { DataSource } from 'typeorm';
import { databaseConfig } from './core/modules/database/database.config';
import { ProductModule } from './core/modules/products/products.module';
import { AuthModule } from './core/modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    IngredientsModule,
    ProductModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
