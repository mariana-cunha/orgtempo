import { render, renderHook, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer component", () => {
    const footer = <Footer />;

    it("is an object", () => {
        expect(typeof(footer)).toBe("object")
    })

    it("renders", () => {
        render(footer)
    })

})