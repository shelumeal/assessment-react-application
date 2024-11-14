import { describe, it } from "vitest";
import SearchContainer from '../../components/SearchContainer/SearchContainer'; 
import { render, screen } from "@testing-library/react";

describe('SearchContainer',()=>{
    it('render Search container',()=>{
        render(<SearchContainer/>);
    })
})