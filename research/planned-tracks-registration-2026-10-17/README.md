# Complete planned-track registration — 2026-10-17

Owner request: include the seven previously independent prerequisites in Machine
Learning, register every current proposed A/B pair, and show both libraries in
the owner plan view with live publication updates.

The splice appends 189 A/B pairs (378 pages): 90 Machine Learning, 24 Information
Theory, three Quantum Computing, one Quantum Algorithms, 27 Numerical Linear
Algebra and Approximation, and 44 Numerical PDEs and Spatial Discretization.
The complete numerical category totals are 51, 37, 55 and 35. No separate
178-pair comprehensive category is registered: that run was superseded by the
four categories. All 2,489 pre-existing rows are preserved as JSON values,
including the live 107-pair numerical frontier. Physics already has all 289
pairs registered in its independent plan; no physics source or state changed.

The math plan now has 1,431 A/B pairs; the combined app view has 1,720 pairs.
Machine Learning owns 90 pairs, including the seven prerequisite pairs.
Five other independently registered prerequisite homes remain unchanged.

`report.json` records source hashes and the exact new page selection. The
page-plan validator passed for all 378 added pages, with the entire plan retained
as prerequisite context. These are structurally registered page plans. Source
reading, native item scaffolding, dependency/proof checks and all workflow gates
remain required; registration grants no proof acceptance or publication.

To register future additions to these research inventories:

    python3 tools/register-planned-tracks.py
    node tools/validate-plan.mjs research/planned-tracks-registration-2026-10-17/preview.json --pages-file research/planned-tracks-registration-2026-10-17/pages.json
    python3 tools/register-planned-tracks.py --apply

The tool rejects unresolved labels, missing page suppliers, B-page suppliers
and cycles; it appends in dependency order without rewriting existing rows.
An unchanged rerun leaves the canonical plan and original receipt untouched.
The preview file is generated and ignored. The native engine remains responsible
for every build transition; registration does not start or alter a run.

The sibling app's `web/lib/library-plan.ts` reads both canonical plans and page
frontmatter on every owner request. Its ten-second visible-page refresh reflects
plan additions and publication changes without a content rebuild or snapshot
reset. Deploy app code once and keep both content workspaces available through
the existing read-only content mount. The owner will deploy/rebuild on the VPS.
