import { render, screen } from "@testing-library/react";
import { PrivacyPolicy } from "../../pages/PrivacyPolicy"; 

describe("Clubs Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<PrivacyPolicy />); 
    });

    // snapshot test 
    test("matches snapshot", () => {
        const { asFragment } = render(<PrivacyPolicy />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText p
    test("returns correct h1 tag", () => {
        render(<PrivacyPolicy />); 
        const textElement = screen.getByText("Privacy Policy", { exact: true }); 
        expect(textElement).toBeInTheDocument(); 
    });

    // getByText p
    test("renders correct p tag", () => {
        render(<PrivacyPolicy />); 
        const textElement = screen.getByText("we do not collect any of the following personal information:", { exact: false }); 
        expect(textElement).toBeTruthy(); 
    });

    // getByTestId for divs
    test("renders correct div", () => {
        render(<PrivacyPolicy />); 
        const div = screen.getByTestId("privacy__top"); 
        expect(div).toBeInTheDocument(); 
    });
}); 