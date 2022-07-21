import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import {App} from "../src/App";

describe("render App", () => {
    it('should rendeer App', function () {
        render(<App />)
        expect(screen.getByText("Hello world")).toBeInTheDocument()
    });
})