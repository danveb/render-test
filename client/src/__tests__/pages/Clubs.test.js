import { render, screen } from "@testing-library/react";
import { Clubs } from "../../pages/Clubs"; 

describe("Clubs Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Clubs />); 
    });

    // snapshot test 
    // "cannot log after tests are done... axios error?"
    test("matches snapshot", () => {
        const { asFragment } = render(<Clubs />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByPlaceholderText
    // test("renders the correct placeholder", () => {
    //     const placeholderText = screen.getByPlaceholderText("Search Club by Name or City"); 
    //     expect(placeholderText).toBeInTheDocument(); 
    // });

    // getByAltText 
    test("img tag has attribute for screen readers", () => {
        render(<Clubs />); 
        const altText = screen.getByAltText("sailing yacht in ocean"); 
        expect(altText).toBeInTheDocument(); 
    });

    // getByText h2 
    test("h2 tag correctly renders text", () => {
        render(<Clubs />); 
        const textElement = screen.getByText("Sailing Clubs"); 
        expect(textElement).toBeInTheDocument(); 
        expect(textElement).not.toBe("Clubs Sailing"); 
    });

    // getByText p
    test("p tag renders text-intro", () => {
        render(<Clubs />); 
        const textElement = screen.getByText("Visit your nearest sailing club to learn more about sailing resources, support, camaraderie and events to become part of the sailing community.", { exact: true }); 
        expect(textElement).toBeInTheDocument(); 
    });
}); 