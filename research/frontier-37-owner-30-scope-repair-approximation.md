# Step 3a scope repair — approximation algorithms and gap reductions

- Run: `frontier-37-owner-30`
- Pair: `approximation-algorithms-and-gap-reductions` / `approximation-algorithms-and-gap-reductions-examples`
- Batch: 17
- Scope: batch 17 manifest, coverage, notes, and this repair record only

## Repair applied

The Step3a report correctly compared the old 18 A / 3 B scaffold against binding TC-36 §49. The manifest now preserves the original 18 A and 3 B items and adds all six omissions. The A page has 22 items and all six §49 `requires`; the B page has five items and still requires only the A page. No scope item was deferred.

Added A IDs:

- `def-harmonic-number-for-set-cover-analysis`
- `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`
- `lem-euler-double-tree-shortcutting-does-not-increase-cost`
- `def-apx-hardness-and-apx-completeness`

Added B IDs:

- `ex-conditional-expectation-for-a-small-max-cut-instance`
- `ex-double-tree-shortcutting-for-a-metric-tsp-instance`

The metric-TSP proof is split into two usable scaffold suppliers: deletion of one optimal-tour edge proves the MST lower bound; the published Euler-circuit construction plus triangle-inequality segment bounds proves first-visit shortcutting. The double-tree theorem consumes both local lemmas and published `thm-kruskals-minimum-spanning-tree-algorithm`. Exact published prerequisites used by the new TSP work are `def-weighted-graph-and-minimum-spanning-tree`, `thm-eulers-euler-circuit-characterisation`, and `thm-kruskals-minimum-spanning-tree-algorithm`; the local item prerequisites are `def-metric-tsp`, `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`, and `lem-euler-double-tree-shortcutting-does-not-increase-cost`.

The APX definition explicitly selects L-reductions as a local convention: every problem in the defined APX class must L-reduce to an APX-hard target, and APX-completeness additionally requires target membership in APX. It does not present this as the only convention in the literature, and no concrete target is claimed APX-hard or APX-complete without a reduction theorem. The transfer lemma gives the relative-error calculation, zero-optimum case, and composition of constants. A gap reduction or no-PTAS theorem alone is not treated as APX-hardness.

## Source and uncertainty record

The FPTAS citation now points to Williamson–Shmoys §3.1, Definition 3.4 and Theorem 3.5, printed pp. 68–69. The fetched 500-page PDF matched the existing SHA-256 prefix `f890311c5c9f5e6b`; I inspected those pages with `mutool`. The other four existing sources retain their verified full-text stamps and detailed coverage rows. Coverage now explicitly maps the added harmonic/TSP/Max-Cut/example material.

The Papadimitriou–Yannakakis 1991 article is recorded as a dropped source after the initial attempt and five recovery retries. The three earlier records document a metadata-only DOI response, an unauthorized text-mining response, and a 403 for the distinct 1988 ACM version; the three retries through the 1991 DOI each returned an 11-character HTML error body, below the full-text floor. `source-fetch-check --stamp --timeout-sec 35` therefore produced no stamp. Google Scholar and alternative-source searches found no authoritative accessible text that establishes the selected APX/L-reduction convention. I inspected the author-hosted full text of Crescenzi, Kann, Silvestri, and Trevisan, “Structure in Approximation Classes”; it cautions that L-reductions are not a general completeness notion for computational classes such as APX, so I rejected it as support for a canonical convention. The batch makes no such canonicality claim. Instead, it defines APX from the local finite-instance optimization model, defines APX-hardness under the explicitly chosen L-reduction, and proves the transfer and composition route from the accessible Williamson–Shmoys L-reduction definition and the listed local dependencies. The complete source-drop rationale, six attempts, searches, and dependency-backed alternatives are in the coverage record.

## Canonical plan follow-up for root

Plan §49 already lists the six required A-page prerequisites. Its earlier §44 states that §§45–52 supersede conflicting earlier material. The run's `research/plan-spec.json` A-page metadata still lists only the four older prerequisites. Root should add these two IDs to that plan-spec A-page entry:

- `trees-forests-and-spanning-trees`
- `eulerian-and-hamiltonian-graphs`

No track-prose change is needed. The batch-17 cross-batch dependency file remains empty because every added prerequisite is either published or in batch 17.

## Dependency levels and review handoff

Batch-local levels are consistent with the full run DAG: harmonic definition 0; TSP lemmas 2; double-tree theorem 3; APX definition 3; L-reduction transfer lemma 4; deepest A level 4; deepest B level 5. The new B examples depend only on A items. Root owns refreshed stable readiness and the scope decision; the historical Step3a receipt still records `insufficient` for the old scope hash.
