# Inverse-problems scaffold handoff receipt

**Status:** author draft complete and frozen for independent audit. This is a
planning receipt; it does not certify any proposed theorem or proof.

## Frozen artifact set

- Prose scaffold: `research/plan-inverse-problems-track.md`
- Machine-readable registration projection:
  `research/inverse-problems-planning-2026-10-18/proposed-registration-delta.json`
- Source integration index:
  `research/inverse-problems-planning-2026-10-18/source-integration.md`
- Reader reports: `research/inverse-problems-planning-2026-10-18/sources/reader-1.md`
  through `reader-6.md`, each with a matching `.json` report.

The frozen prose hash is
`27235ab0d245611090cc314115ba72377718436445a0e7380c0a87a43ca58d37`.
The generated registration-projection hash is
`93da7593da28e048fee12a88329dd34e412b5fc9fee20c03be19fcc9cd020591`.
The source-index hash is
`d7c6eba5038c4628de19e283e36e810d03baef0b747fac1c0df47a4d8a90c511`.
These hashes identify the author snapshot. The reviewer owns subsequent
repairs and must refresh the projection if its source prose changes.

## Structural coverage

The prose defines 52 ordered A/B pairs, 104 proposed pages, and 160 A-item
IDs, with explicit contracts, assumptions, proof routes, examples, source
locators, and supplier references. The JSON contains 104 page-row
projections, all 52 complete pair prose sections, 106 pair-level prerequisite
edges, 6 proposed pathway parts, and exact published page-path mappings
where named in the prose. The 52 page edges point only to earlier pairs, so
the pair-level order is acyclic. Pair IP-52 explicitly marks its earlier
frontier references as context only; open-problem items are terminal and are
not logical suppliers.

This JSON is a complete review projection, not a plan-spec splice. It records
A-item IDs and kinds with prose pointers; it deliberately does not invent
item-level `deps`, item titles, or B-item IDs that the prose does not specify.
The B leaves are transcribed in the projection so the reviewer can assign
example IDs from the actual designs. Shared `research/plan-spec.json` and
category registry were not edited.

## Evidence and proof limits for the reviewer

Six source dossiers cover 19 complete-text reading instances, 18 distinct
works, and 759 unique PDF pages; Clason's 137-page notes were independently
read in two lanes. The six dossiers preserve exact versions, retrieval and
hash metadata, coverage, theorem hypotheses, proof outlines, local supplier
IDs, and stated limitations. Root's artifact check is recorded at
`.autopilot/scaffold-refresh-2026-10-18/source-artifact-check.json`.

The reader-4 annex adds 13 precise proof-module contracts across IP-39–41.
They remain proposed local work: the analytic FBI/FIO foundations and
continuation, variable-metric wave IBVP estimates, full Gaussian-beam
residual/patching estimates, product Carleman solvability and CGO remainder
bounds, conductivity DN conjugacy, and small-data cubic DN differentiability
are not accepted as proven by citations. The IP-40 simple-geometry GO route
has source proof detail and explicit residual correction bounds; the broader
Gaussian-beam route remains a separately specified local proof obligation.

Other source-access or proof gates retained in the prose include the
inaccessible detailed supplement for IP-10 (with a local likelihood-ratio
proof route), the absent original proof for the reported network-tomography
criterion at IP-13, and the lack of a full sparse-recovery source for IP-33–34
(which therefore have direct local NSP proof contracts and no imported RIP
claim). Brandt–Horn and flow matching are treated as unreviewed preprints
within their stated finite-model assumptions. Benchmark results remain
empirical; the EIT neural-operator theorem is existential and supplies no
training, sample-complexity, or calibrated-uncertainty guarantee. General
inverse-problem coverage, arbitrary-geometry Calderón uniqueness, and robust
limited-data stability remain open or outside the stated theorem scopes.

No live pages or items were created, no engine was launched or controlled,
no tests were run, and no shared registry or plan-spec file was changed.

## Audit successor handoff

The author snapshot above is historical. The substantive audit successor has 55 A/B pairs, 110 pages, 209 A-item proposals and 56 B-item proposals (265 total; 10 terminal open questions), 66 exact current published supplier imports, 116 pair dependencies and 2,417 candidate proposed item-dependency edges. The successor JSON has full canonical plan-row fields and honest empty live item inventories, plus the complete proposed item graph and seven pathway parts. Audit changes and remaining proof/source obligations are recorded in `audit/repair-report.md`; reproducible projection is `audit/build-registration.py`; scoped structural observations are `audit/structural-verification.json`. Final owned artifact hashes and allowlist are in `audit/artifact-hashes.json`. Root alone performs actual registry integration.

Successor prose SHA256: `b01c8c6162787374b7d1dca2ef30d32f4d351f8a90d8f12d34d732d93ba31338`.
Successor delta SHA256: `110cbd4b18b828b47511cb69525f17d820b3c27dc0f9d320b9c5c195b36e5e58`.

This completes research design repair and integration preparation, not production proof acceptance. No live carrier, shared registry, engine, test, commit or push was performed by this agent.

All 55 pair sections now have explicit `ip-XX` anchors matching item contract pointers. Candidate dependency supersets remain for author refinement; they are not authored/minimal claims and do not impose Hilbert assumptions on IP01.
