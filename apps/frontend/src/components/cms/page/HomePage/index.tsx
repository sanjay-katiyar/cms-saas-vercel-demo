import "server-only";
import { CmsEditable, RichText, CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { type HomePageDataFragment, HomePageDataFragmentDoc } from "@gql/graphql";

export const HomePage: OptimizelyNextPage<HomePageDataFragment> = ({
    contentLink,
    inEditMode,
    data: {
        Title = "",
        MainContentArea = [],
    } = {},
    ctx
}) => (
    <div className="outer-padding">
        <section className="container mx-auto py-16">
            <CmsEditable
                as="h1"
                cmsFieldName="Title"
                className="text-5xl font-bold mb-4"
                ctx={ctx}
            >
                {Title || "+ Add Heading"}
            </CmsEditable>
            <CmsContentArea
                fieldName="MainContentArea"
                items={MainContentArea ?? []}
                className="grid gap-8 md:grid-cols-2"
                ctx={ctx}
            />
        </section>
    </div>
);

HomePage.displayName = "HomePage";
HomePage.getDataFragment = () => [
    "HomePageData",
    HomePageDataFragmentDoc,
];

export default HomePage;