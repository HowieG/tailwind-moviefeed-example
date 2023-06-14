import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";
import Movie from "./Movie";

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/new" isActive>
          New Releases
        </NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  );
}
