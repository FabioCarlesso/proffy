import Knex from 'knex';

export async function up(knex: Knex){
    //create table
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //foreign key from users (teacher)
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    //rollback
    return knex.schema.dropTable('classes');
}
