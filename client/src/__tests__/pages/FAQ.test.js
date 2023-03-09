import { render, screen } from "@testing-library/react";
import { FAQ } from "../../pages/FAQ"; 

describe("Clubs Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<FAQ />); 
    });

    // snapshot test 
    test("matches snapshot", () => {
        const { asFragment } = render(<FAQ />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByAltText
    test("returns correct alt text", () => {
        render(<FAQ />); 
        const altText = screen.getByAltText("sailing yacht in ocean"); 
        expect(altText).toBeTruthy(); 
    });
}); 