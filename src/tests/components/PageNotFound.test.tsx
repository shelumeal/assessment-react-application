import { describe, it } from "vitest";
import PageNotFound from '../../pages/PageNotFound/PageNotFound'; 
import { render, screen } from "@testing-library/react";

describe('PageNotFound',()=>{
    it('render page not found',()=>{
        render(<PageNotFound/>);
    })
})