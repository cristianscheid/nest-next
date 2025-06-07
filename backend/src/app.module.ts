import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DbModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
