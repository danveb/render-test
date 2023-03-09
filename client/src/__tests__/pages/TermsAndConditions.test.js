import { render, screen } from "@testing-library/react";
import { TermsAndConditions } from "../../pages/TermsAndConditions"; 

describe("Clubs Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<TermsAndConditions />); 
    });

    // snapshot test 
    test("matches snapshot", () => {
        const { asFragment } = render(<TermsAndConditions />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText p
    test("returns correct h1 tag", () => {
        render(<TermsAndConditions />); 
        const textElement = screen.getByText("Terms And Conditions", { exact: true }); 
        expect(textElement).toBeInTheDocument(); 
    });

    // getByText p
    test("renders correct p tag", () => {
        render(<TermsAndConditions />); 
        const textElement = screen.getByText("Welcome to SAIL.LY!", { exact: false }); 
        expect(textElement).toBeTruthy(); 
    });

    // getByTestId for divs
    test("renders main div at terms and conditions page", () => {
        render(<TermsAndConditions />); 
        const div = screen.getByTestId("terms"); 
        expect(div).toBeInTheDocument(); 
    });
}); 