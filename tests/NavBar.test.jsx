import { describe, it, expect } from 'vitest';
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';    
import NavBar from "../src/components/NavBar.jsx";
 

 
describe('NavBar component', () => {
  it('renders the NavBar component', () => {
    render(
      <MemoryRouter>
        <NavBar cartItems={[]} />
      </MemoryRouter>
    );
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("displays correct cart item count", () => {
    render(
      <MemoryRouter>
        <NavBar cartItems={[{}, {}, {}, {}]} />
      </MemoryRouter>
    );

    expect(screen.getByText("4")).toBeInTheDocument();
  });
});

