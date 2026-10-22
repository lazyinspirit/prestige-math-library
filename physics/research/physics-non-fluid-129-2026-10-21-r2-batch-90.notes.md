# Batch 90 — Classical Potts random clusters and planar loop transfer

Run: physics-non-fluid-129-2026-10-21-r2  
Role: beta  
Pages: csm-frontier-fk-loop-algebra / csm-frontier-fk-loop-algebra-examples

## Scope, design, and plan reconciliation

The current plan inventory assigns the A/B pair in the classical-statistical-mechanics category, library physics, with A order 877. The assigned design section is in research/plan-classical-statistical-mechanics-frontier-expansion-track.md L115 and the complete model-specific treatment is in research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md L195–231. The owner-authoring-direction file is absent.

The detailed design lists csm-frontier-large-deviation-ensembles as the earlier page. The current plan-spec.json and dispatched batch-90 manifest require both csm-frontier-large-deviation-ensembles and temperley-lieb-diagram-algebra-and-catalan-basis. The plan controls; both page requirements are retained. The B page requires the A page.

The detailed design calls the root Temperley–Lieb definition and category-laws items drafts. Their current imported carriers are published and their SHA-256 values match the current math-imports.json pins. The exact Statements/Definitions and relevant complete law proof were inspected. The definition fixes noncrossing matchings, left-factor-above-right stacking, and a factor delta for each removed cycle; the laws establish well-defined associative strict-monoidal composition for every commutative coefficient ring and delta. The batch uses only these conventions and laws. It makes no semisimplicity, Hecke, Yang–Baxter, trace, representation-faithfulness, or categorification claim.

The design requires both free and wired boundary variants for the strip transfer but its five reserved items do not separately define boundary wiring. A local A-page definition, def-csm-frontier-fk-boundary-wiring, was added before the transfer consumer. It defines boundary identifications as an equivalence relation, the wired component count, and the finite wired partition polynomial. The transfer proof handles its free specialization and wired terminal cleanup. The medial-loop identity remains explicitly free-boundary, with the exterior dual face counted once.

## Inventory, dependencies, and levels

The A page contains six items; the B page has one example. Every item is mathematical, uses only mathematical dependencies, has library physics and physical_scope null. All declared dependency roles are mathematical-premise. The only added item beyond the five reserved A items is the explicit wired-boundary definition needed by the assigned design scope.

| Item | Page | Level | Direct suppliers |
|---|---|---:|---|
| def-csm-frontier-finite-potts-fk | A | 0 | def-finite-simple-graph |
| def-csm-frontier-fk-boundary-wiring | A | 1 | def-csm-frontier-finite-potts-fk |
| thm-csm-frontier-edwards-sokal | A | 1 | def-csm-frontier-finite-potts-fk |
| alg-csm-frontier-fk-connectivity-transfer | A | 2 | def-csm-frontier-finite-potts-fk; def-csm-frontier-fk-boundary-wiring |
| thm-csm-frontier-fk-transfer-correct | A | 3 | alg-csm-frontier-fk-connectivity-transfer; def-csm-frontier-finite-potts-fk; def-csm-frontier-fk-boundary-wiring |
| lem-csm-frontier-medial-loop-normalization | A | 1 | def-csm-frontier-finite-potts-fk; def-plane-graph-face-and-boundary; def-plane-dual-multigraph; thm-plane-dual-exists-and-double-dual-recovers-primal; cor-euler-formula-for-disconnected-plane-graphs; def-temperley-lieb-diagram-category; thm-temperley-lieb-diagram-category-laws |
| ex-csm-frontier-potts-two-vertices | B | 2 | thm-csm-frontier-edwards-sokal; def-csm-frontier-finite-potts-fk |

The scoped item-dependency calculation over the seven manifest items has no errors and gives levels 0, 1, 1, 2, 3, 1, 2 respectively. Suppliers are authored before their consumers. The current saved run scheduling snapshot lists batch 90 at level 2 with batch 88 as its prerequisite.

The current batch-88 LDP page carrier is draft. Its four item carriers and their complete relevant interfaces were inspected, and loadStep1Record plus step1Decision currently close all four records as ready. A draft label alone is not a missing prerequisite. The current run-level batch-dependency check cannot recompute from the full scaffold: loadStep3 encounters unfinished bare-ID inventories in other batch manifests and reports Duplicate item undefined. The saved scheduler snapshot was left untouched for the owner/engine drained join. This does not affect the scoped seven-item dependency calculation or the verified batch-90-to-88 page edge.

## Mathematical scope and proof decisions

The finite Potts/FK definition uses finite simple graphs, integer Q at least 2, finite nonnegative edge activities, finite edge subsets, and counts isolated components. Its finite normalizers are positive, including at zero activities. The Edwards–Sokal proof derives both marginals and the color/connectivity identity by finite sums; it is a mathematical identity, with no measurement or empirical claim.

The exact transfer introduces endpoints, branches each edge into absent and present choices through I+v_e J_uv, and multiplies by Q only when a connectivity block closes. Boundary relation xi is initialized as the active partition; free boundary is discrete xi, and wired classes remain represented until closure. The invariant also closes isolated wired boundary classes at terminal cleanup. The FK join J_i is an idempotent partition operation, not a Temperley–Lieb cup-cap generator.

For each free edge subset A in a finite connected simple plane graph, the loop proof establishes the face/dual-component correspondence, applies disconnected-plane Euler to G_A, counts complementary regions of the medial boundary loops with Euler, and derives 2k(A)=|V|-|A|+ell(A). This gives

$$Z_{FK}=Q^{|V|/2}\sum_{A\subseteq E}(\sqrt Q)^{\ell(A)}\prod_{e\in A}\frac{v_e}{\sqrt Q}.$$

The exterior dual face is counted once. No exterior wiring, torus/cylinder correction, or wired-boundary loop formula is asserted. The final proof needs no Jordan-curve dependency: each disjoint boundary loop is subdivided as a cycle and the imported disconnected-plane Euler corollary counts its regions. The local smoothing figure fixes the pairings, while the proof itself uses component and region counts rather than visual inference.

The two-vertex B example enumerates both edge subsets and all Q-squared spin assignments, checking the zero-activity endpoint and the Edwards–Sokal same-color formula.

## Full-text source work and retrieval

Per-item locators, support, limitations, dispositions, failed routes, and stamps are recorded in the coverage file and research/physics-non-fluid-129-2026-10-21-r2-batch-90-sources/source-reading.md.

- Grimmett, The Random-Cluster Model: complete 46-page author-hosted review, §§2.2–2.3. The full finite joint law, both marginals, cluster-color conditional and correlation/connection argument were read. Its common-coupling convention is extended locally to edge-dependent activities.
- Duminil-Copin, Geometric Representations of Lattice Spin Models: complete 107-page Cours Peccot notes. Chapters 3.1–3.2 and 4.1 were read for finite FK weights, coupling and the free-boundary loop convention. Its square-lattice scope is not used to replace the local proof for general finite connected simple plane graphs.
- Grans-Samuelsson et al., The action of the Virasoro algebra in the two-dimensional Potts and loop models at generic Q: complete 38-page article, §3.2. The frontier partition and FK/loop conventions were read. Its cylinder/torus caveat is preserved; no periodic-topology formula is claimed.

The full-text fetch check with --stamp reports 3/5 source rows fetched and hash-stamped, 5/5 resolved, with two documented drops and no new stamps on the final pass. Grimmett: 646142 bytes, 46 pages, SHA prefix 6ef160a9841219a3. Grans-Samuelsson et al.: 891417 bytes, 38 pages, prefix 29787c2e3b11d28b. Duminil-Copin: 1741151 bytes, 107 pages, prefix 0e09a4e510a96691. Each Jacobsen-hosted Potts PDF URL timed out on its initial fetch and all five retries. Both entries are dropped retrieval routes only, not source content; the successful full lecture notes and complete local proofs supply the mathematical coverage. sourceResolutionErrors returns no errors for either dropped route. A Cambridge-hosted chapter candidate also timed out once in the web reader; the complete Grimmett review was retrieved and read as the alternative.

## Readiness and scoped checks

The seven current Step 1 records load as ready after rechecking with loadStep1Record and step1Decision. They bind the current carrier, direct/transitive dependencies, and unique page placement. Readiness is authoring evidence, not independent proof approval.

- item dependency levels: 7 items, levels match, 0 errors.
- proof-layout on the seven explicitly changed items: 19 steps, 0 defects.
- normative precheck on four proof-bearing items: 4 checked, 0 failing.
- rendercheck on seven items and both pages: all 9 files passed math, delimiter and YAML rendering.
- content-policy on the batch-90 manifest: 7 items, 0 errors, 0 warnings.
- strict proof-contract check: 7/7 items, 0 errors, 0 warnings. Contracts include actual numbered steps, exact current supplier excerpts, mapped citations, boundary worksheets and finite checks.
- focused depcheck on all seven items: 0 errors, 0 warnings; selected prerequisite closure covers 431 items and 108 pages.
- statement inspection on all seven authored items: 0 defects. The run-local statement-first policy file is absent, so the run-wide statement-first adapter reports Missing run-local statement-first policy; no policy was fabricated.
- source-fetch-check: 3/5 fetched and stamped, 5/5 resolved, 2 documented route drops. Source-resolution validation: 0 errors.

Page-layout was not run because WORKFLOW.md assigns page_layout: compact-v1 at the drained construction join; both page bodies are currently frontmatter-only and were included in rendercheck. No mathematical prerequisite or assigned-item readiness gap remains.

## Cross-batch interface

The cross-batch dependency file contains one verified row: the A page to batch-88 csm-frontier-large-deviation-ensembles page. The exact current page interface and all four current Step 1 supplier records were inspected. The external imported Temperley–Lieb page edge remains in the page manifest and is documented above; it is not an in-run batch edge. The B-to-A page dependency is within batch 90.
