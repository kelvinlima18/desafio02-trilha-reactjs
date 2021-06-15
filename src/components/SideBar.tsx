import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  genres: GenreResponseProps[];
  genreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, genreId, handleClickButton }: SidebarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genreId === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}