import { describe, it,expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';



describe('App Routing Tests',()=>{
    it('should render the Home component and display search bar for the "/" route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
              <App />
            </MemoryRouter>
          );
        expect(screen.getByTestId('search-bar-container')).toBeInTheDocument();
    });

    it('should render the Home component for the "/Home" route', () => {
        render(
          <MemoryRouter initialEntries={['/Home']}>
            <App />
          </MemoryRouter>
        );
    
        expect(screen.getByTestId('search-bar-container')).toBeInTheDocument();
      });

      it('should render the PageNotFound component for an invalid route', () => {
        render(
          <MemoryRouter initialEntries={['/invalid-path']}>
            <App />
          </MemoryRouter>
        );
    
        // The PageNotFound component should be rendered
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
      });
})