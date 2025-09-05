import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { type TeaserBlockDataFragment, TeaserBlockDataFragmentDoc } from "@/gql/graphql";

export const TeaserBlockComponent: CmsComponent<TeaserBlockDataFragment> = ({
    data: {
        heading = "",
        shortDescription = "",
        image = null,
        link = null,
    } = {},
    ctx,
    contentLink,
    inEditMode,
}) => (
    <div className="teaser-block p-6 rounded shadow bg-white">
        <CmsEditable
            as="h3"
            cmsFieldName="heading"
            className="text-xl font-semibold mb-2"
            ctx={ctx}
        >
            {heading ?? ""}
        </CmsEditable>
        <CmsEditable
            as="p"
            cmsFieldName="Description"
            ctx={ctx}
        >
            {shortDescription ?? ""}
        </CmsEditable>
        {image && (
            <CmsEditable
                as="img"
                cmsFieldName="Image"
                src={image.url.default || ""}
                alt={heading || ""}
                className="mb-4 w-full h-auto"
                ctx={ctx}
            />
        )}
        {link && (
            <CmsEditable
                as="a"
                cmsFieldName="Link"
                href={link.default || "#"}
                className="text-blue-600 underline"
                ctx={ctx}
            >
                {link.text || "Read more"}
            </CmsEditable>
        )}
    </div>
);

TeaserBlockComponent.displayName = "Teaser Block";
TeaserBlockComponent.getDataFragment = () => [
    "TeaserBlockData",
    TeaserBlockDataFragmentDoc,
];

export default TeaserBlockComponent;