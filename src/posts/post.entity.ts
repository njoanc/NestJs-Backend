import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Post')
class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column('text', { array: true })
  public paragraphs: string[];
}

export default Post;
