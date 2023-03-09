import { render, screen } from "@testing-library/react";
import { About } from "../../pages/About"; 

describe("About Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<About />); 
    });

    // snapshot test 
    test("matches snapshot", () => {
        const { asFragment } = render(<About />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByAltText 
    test("img tag has attribute for screen readers", () => {
        render(<About />); 
        const altText = screen.getByAltText("sailing yacht in ocean"); 
        expect(altText).toBeInTheDocument(); 
    });

    // getByText h2 
    test("h2 tag correctly renders text", () => {
        render(<About />); 
        const textElement = screen.getByText("Why"); 
        expect(textElement).toBeInTheDocument(); 
        expect(textElement).not.toBe("Hello World"); 
    });

    // getByText p
    test("p tag renders text-intro", () => {
        render(<About />); 
        const textElement = screen.getByText("Sailing allows one to escape from the hustle and bustle", { exact: false }); 
        expect(textElement).toBeInTheDocument(); 
    });
}); 