import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from "../src/Button";

describe("render button" , ()=>{
    it('should render button', function () {
        render(<Button>Load user</Button>)
        expect(screen.getByRole("button")).toBeInTheDocument()
    });

    it('should click button', function () {
        const handleButtonMock = jest.fn();
        render(<Button handleClick={handleButtonMock}>Load user</Button>)
        fireEvent.click(screen.getByRole("button"))
        expect(handleButtonMock).toHaveBeenCalled();
    });
})