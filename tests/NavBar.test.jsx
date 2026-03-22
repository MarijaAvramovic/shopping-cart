import { describe, it, expect } from 'vitest';
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Outlet } from 'react-router-dom';    
import NavBar from "../src/components/NavBar.jsx";
import Home from "../src/components/Home.jsx";
import App from "../src/App.jsx";
 

 
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

describe('NavBar component', () => {
  afterEach(() => {
    cleanup();
  });

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

describe('Home component', () => {
  it('renders the Home component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>       
    );
    const headingElement = screen.getByRole('heading', { name: /Discover Your Style/i });
    expect(headingElement).toBeInTheDocument();
    expect(screen.getByText(/Shop the latest trends with unbeatable prices. Upgrade your wardrobe today./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Shop Now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Cart/i })).toBeInTheDocument();
  });
});

 vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Outlet: () => <div>Mocked Outlet</div>,
  };
}); 
describe('app component', () => {
  it('renders the app component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>       
    ); 
    expect(screen.getByText(/Mocked Outlet/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 The Odin Project/i)).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });
} );

