import { PropsWithChildren, useEffect, useState } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

/**
 * React Router for the App.
 * @description Either uses a BrowserRouter or a Memory Router, depending on the hosting (server / static file). Useful for environments like Electron.
 * @param props Props with Children
 * @returns Component
 */
export const Router = (props: PropsWithChildren) => {
    const [supportsUrl, setSupportsUrl] = useState(true);

    useEffect(() => {
        if(location.protocol)
            setSupportsUrl(location.protocol === "file:");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.protocol]);

    return (
        supportsUrl ?
            <BrowserRouter>{props.children}</BrowserRouter> :
            <MemoryRouter>{props.children}</MemoryRouter>
    );
};
