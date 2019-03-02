import { MigrationInterface, QueryRunner } from 'typeorm';

export class Category1541519608559 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('category')
      .values([
        {
          id: 1,
          name: 'Ăn uống',
        },
        {
          id: 2,
          name: 'Hoá đơn & Tiện ích',
        },
        {
          id: 3,
          name: 'Di chuyển',
        },
        {
          id: 4,
          name: 'Mua sắm',
        },
        {
          id: 5,
          name: 'Bạn bè & Người yêu',
        },
        {
          id: 6,
          name: 'Giải trí',
        },
        {
          id: 7,
          name: 'Du lịch',
        },
        {
          id: 8,
          name: 'Sức khoẻ',
        },
        {
          id: 9,
          name: 'Giáo dục',
        },
        {
          id: 10,
          name: 'Kinh doanh',
        },
        {
          id: 11,
          name: 'Khác',
        },
        {
          id: 12,
          name: 'Ăn uống',
        },
        {
          id: 13,
          name: 'Nhà hàng',
          parentId: 1,
        },
        {
          id: 14,
          name: 'Cà phê',
          parentId: 1,
        },
        {
          id: 15,
          name: 'Xăng dầu',
          parentId: 3,
        },
        {
          id: 16,
          name: 'Quần áo',
          parentId: 4,
        },
        {
          id: 17,
          name: 'Giày dép',
          parentId: 4,
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
