# Batch 16 authoring notes — `emg-mm03`

## Scope, plan, and inventory

This batch owns one A/B pair: `emg-mm03` (order 467) and `emg-mm03-examples` (order 468). The active plan requires `emg-c01`, `emg-mm01`, and `rpm-external-charge` on the A page. The original design reservation at `research/plan-einstein-maxwell-models-track.md` L549 names the three reserved A results and B examples but omits `rpm-external-charge` from that reservation's prerequisite list, although its explanatory prose uses the external-particle result. The current `plan-spec.json` controls; the A page retains all three current requirements.

The design's reserved A inventory is `lem-emg-controlled-maxwell-wkb`, `lem-emg-source-and-test-scaling`, and `thm-emg-weak-slow-test-lorentz-limit`; the reserved B examples are `ex-emgmath-ml-b07` and `ex-emgmath-ml-b08`. The present A page adds `lem-emg-potential-maxwell-wave-identity`, a complete local mathematical intermediate required for the WKB residual. This gives four A items and two B examples, well below the 100-item page cap. Item frontmatter, the batch manifest, both library pages, contracts, coverage, and cross-batch evidence agree.

## Mathematical scope and dependency reconciliation

The local wave-identity lemma proves the exact covector commutator/Ricci-sign identity from the inspected curvature definition, curvature symmetries, dual connection, and torsion-free metric connection. The design's broad planned `thm-gr-lorentz-curvature-bianchi-and-jacobi` carrier is absent/stale; no authored conclusion relies on it. The complete local lemma supplies exactly the needed interface. The old draft's generic real-supremum, real-metric, metric-nonnegativity, explicit-power, sequence-limit, and boundaryless-completeness edges are likewise unnecessary: the WKB proof uses the current compact-chart component norm and `thm-extreme-value-metric`, integer powers of epsilon, and local pointwise Lorentzian arguments. These seven removed edges have individual evidence rows in the cross-batch array.

Recomputed item dependency levels in supplier-first order are:

- `lem-emg-potential-maxwell-wave-identity`: 0
- `lem-emg-controlled-maxwell-wkb`: 1
- `lem-emg-source-and-test-scaling`: 2
- `thm-emg-weak-slow-test-lorentz-limit`: 1
- `ex-emgmath-ml-b07`: 3
- `ex-emgmath-ml-b08`: 3

The run-wide item-level computation returns those same six values with zero batch-16 item errors. The scoped cross-batch array contains 57 verified current page/item edges and seven removed edges; it is a dependency-interface record, not independent proof approval. There are no open edges. The three batch-15 draft suppliers used here (`def-emg-matter-formal-systems`, `thm-emg-selected-matter-energy-conditions`, and `thm-emg-charged-dust-projection`) were checked through the repository's current snapshot-aware Step 1 reader and all three return `ready/current`.

The run-wide `item-dependency-levels.mjs check` still reports 42 empty scaffold inventories on unrelated planned pages outside this batch; it reports no batch-16 item error. `batch-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` reports that the shared batch-level graph is stale. The graph was left unchanged under the instruction to leave shared engine state to the owner. The six local item levels were recomputed from the current full run manifest and match their stored values; the owner must refresh the shared run-level graph.

## Claims and limitations

- `lem-emg-controlled-maxwell-wkb` proves exact finite-epsilon field and divergence identities, conditional compact-chart component bounds, affine null phase rays, amplitude transport, and the transverse polarization quotient. Its four ansatz constraints are assumptions; it makes no WKB convergence, global transport, caustic, or exact-solution error claim.
- `lem-emg-source-and-test-scaling` distinguishes exact fixed-metric Maxwell stress scaling from a nearby coupled-solution estimate; it separately proves the positive-density dust/current scaling and the finite Coulomb-annulus energy formula. It makes no point-source or general coupled-family claim.
- `thm-emg-weak-slow-test-lorentz-limit` is conditional on explicit metric and field remainders, speed control, existence, and common compact containment on the finite scaled interval. It does not solve Maxwell or Einstein equations for the prescribed background and does not establish a coupled family.
- B07 directly differentiates an exact transverse plane-wave potential and checks both source-free Maxwell equations. Its nonzero field on unchanged Minkowski space is explicitly not called a coupled Einstein–Maxwell solution.
- B08 explicitly solves the prescribed constant-magnetic relativistic orbit and comparison orbit, verifies the reconstructed timelike worldline, and proves finite-time errors. It uses no self-field or radiation-reaction term.

These are mathematical conditionals, not postulate adoption, reported observations, measurements, or statistical inference.

## Sources

The detailed source record is in `research/physics-remaining-80-2026-10-17-batch-16.coverage.json`, `research/physics-remaining-80-2026-10-17-batch-16-sources/source-reading.md`, and `source-manifest.json`. Six complete PDFs were retrieved; the A page has independent full lecture-note treatments from Reall and Tong and further checks from Carroll, Harte, Meinel–Hütten, and Poisson–Pound–Vega. The full relevant reasoning at each recorded locator was inspected. Source conventions are compared, not silently imported: Gaussian or geometrized normalizations are not used in local SI arguments, and the point-particle own-field warning is retained as a limitation. Every one of the 24 harvested results has an item-level disposition. `source-fetch-check --stamp` verified 10/10 coverage entries across the two pages (six distinct URLs; repeated source entries for the B page), with zero new stamps on the final check. There were no retrieval failures, recovery retries, source drops, or source-resolution escalations.

## Scoped checks and Step 1 records

- Precheck: 6 items checked, 0 failures.
- Proof layout: 6 items, 38 phase steps, 0 defects.
- Rendercheck: the six items and both pages pass KaTeX, delimiter, frontmatter, and link checks.
- Strict proof contracts: 6/6 items, 56 exact supplier citations, 38 mapped proof steps, 0 errors, 0 warnings.
- Coverage checklist: 2 pages, 24 harvested results, 0 errors, 0 warnings.
- Manifest dependencies: 6 items, 0 missing dependency arrays, 0 errors.
- Authored content policy: 6 scoped items, 0 errors, 0 warnings.
- Focused depcheck: 6 assigned items pass; selected prerequisite/page cycle checks cover 1,284 items and 372 pages.
- Source fetch: 10/10 page/source entries verified and resolved, 0 documented drops.
- All six assigned items have current Step 1 `ready` records. The local intermediate is ready before the WKB consumer; B07 and B08 are ready against their now-current in-batch suppliers. These records document authoring readiness, not independent proof approval or publication.
- The run-wide dependency checks retain the owner-level caveats above: 42 empty inventories outside this batch and a stale shared batch-level graph. No unrelated pages, shared plan, engine state, verdict, or published content was modified.
