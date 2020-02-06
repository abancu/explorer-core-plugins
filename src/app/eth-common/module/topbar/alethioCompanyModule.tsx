import React from "react";
import { IModuleDef } from "plugin-api/IModuleDef";
import { MobileMenuItem } from "@alethio/ui/lib/layout/topbar/MobileMenuItem";
import { ITranslation } from "plugin-api/ITranslation";
import { Link } from "plugin-api/component/Link";
import { ToolbarIconButton } from "@alethio/ui/lib/layout/toolbar/ToolbarIconButton";
import { BriefcaseIcon } from "@alethio/ui/lib/icon/BriefcaseIcon";

interface IAlethioCompanyProps {
    translation: ITranslation;
}

export const alethioCompanyModule: (alethioCompanyUrl: string) => IModuleDef<IAlethioCompanyProps, {}> =
(alethioCompanyUrl) => ({
    contextType: {},
    dataAdapters: [],
    getContentComponent: async () => (props) => (
        <MobileMenuItem title={props.translation.get("toolbar.company.label")}>
            <Link to={alethioCompanyUrl}>
                <ToolbarIconButton Icon={BriefcaseIcon} />
            </Link>
        </MobileMenuItem>
    ),
    getContentProps : data => data
});
