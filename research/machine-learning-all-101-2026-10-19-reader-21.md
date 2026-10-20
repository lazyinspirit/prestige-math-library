# Step 3a reader report — batch 21

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-21`)  
Scope: batch `21`  
Date: 2026-10-19

## Opened inventory

Assigned pages:

- `ml02-spectral-clustering` — draft A page; eight assigned items, empty body.
- `ml02-spectral-clustering-examples` — draft B page; four assigned examples, empty body.

Assigned items, read in dependency order:

- Level 0: `def-finite-weighted-graph-laplacian`, `lem-finite-trace-minimization`, `lem-deterministic-eigenspace-basis`.
- Level 1: `def-ratio-cut-and-normalized-cut`, `lem-weighted-graph-laplacian-quadratic-form-and-kernel`.
- Level 2: `lem-ratio-cut-indicator-trace-identities`, `ex-knn-symmetrization-changes-ratio-cut`.
- Level 3: `thm-weighted-ratio-and-normalized-cut-relaxations`.
- Level 4: `alg-weighted-spectral-clustering`.
- Level 5: `ex-disconnected-weighted-components-spectral-clustering`, `ex-isolated-vertex-in-normalized-cut`, `ex-concentric-circles-spectral-embedding`.

Direct and supporting item dependencies opened for verification:

- Current-run batch 20: `def-k-means-objective`, `alg-lloyd-k-means`, and `thm-lloyd-objective-monotonicity-and-termination`.
- Published: `thm-least-squares-solutions-and-normal-equation`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, `def-rayleigh-quotient`, `thm-courant-fischer-min-max-principle`, `def-orthogonal-projection`, and `thm-orthogonal-projection-is-the-unique-nearest-point`.
- Page prerequisites opened: `algebraic-and-spectral-graph-theory`, `ml02-clustering-mixtures`, and `the-spectral-theorem-and-singular-value-decomposition`.

The batch manifest, current batch proof contracts, coverage record, cross-batch dependency record, and batch notes were consulted as evidence and checked against the current carriers. All twelve assigned item statements/definitions are uninterrupted by hyperlinks; their links are in the immediately following references sections. Both assigned page bodies are empty. All TikZ diagrams were checked against their graph descriptions: the KNN diagrams show the stated union and mutual edges, the weighted-components and isolate diagrams have the stated supports, and the concentric-ring drawing is a reflected layout of the stated coordinates with the same undirected cycle supports.

## Edits and evidence

- In `items/alg-weighted-spectral-clustering.md`, Step 5 now seeds Lloyd at the row with smallest vertex index among vertices selected in Step 2. The previous phrase “smallest active vertex index” could leave the seed unspecified in ratio mode when the valid input graph has no positive-degree vertices, even though ratio mode embeds all of `V`. The replacement selects a row in both modes: all vertices in ratio mode and `V_+` in normalized mode.
- Updated the batch proof contract for the algorithm’s seed convention, removed its two hash-bound template-review records tied to the pre-edit carrier, and refreshed the exact algorithm excerpts cited by the three assigned examples. There was no `verification.judge` record on the algorithm item. I rechecked all three consumers: each selects vertex 1 as its first row, so the verified calculations and outputs remain unchanged.
- Required repair checks passed: `reflow` reported the item unchanged; `precheck` reported `0 checked, 0 failing`; the final `proof-layout` pass reported `1 item, 0 steps, 0 defects`.

## Defect not edited

- `lem-ratio-cut-indicator-trace-identities` proof contract, `research/machine-learning-all-101-2026-10-19-batch-21.proof-contracts.json` lines 418 and 433: the `zero` boundary evidence cites nonexistent Proof steps `2.2`, and the `endpoints` evidence cites nonexistent step `3.1`. The current proof has steps `1.1`–`1.4` and `2.1` only. Its mathematical trace identities are proved in those existing steps; this is a stale, nonfatal contract-evidence defect. I left it for the owner because the reader repair scope authorizes item carriers and assigned A-page prose, not a standalone contract repair.

No other item, diagram, or page defect was found in the assigned scope.

## Page verdicts

- `ml02-spectral-clustering`: page metadata and its eight-item inventory match the manifest; its three required pages resolve; the body is empty. No page defect found.
- `ml02-spectral-clustering-examples`: page metadata and its four-example inventory match the manifest; its A-page prerequisite resolves; the body is empty. No page defect found.

## Source checks

- Ulrike von Luxburg, “A Tutorial on Spectral Clustering,” [full PDF](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf): §2.1 (weighted graph, degree and volume); §2.2 (union versus mutual kNN); §3, Propositions 1–2 (weighted quadratic form and component kernel); §4 (unnormalized and normalized procedures); §§5.2–5.3 (indicator traces and spectral relaxations); §5.4 (no general rounding-quality guarantee). The local weighted extensions, isolate domains, eigenspace rule, and deterministic Lloyd details are established in the assigned items.
- Jean Gallier, “Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts,” [arXiv full text](https://arxiv.org/html/1311.2492): Chapter 2, Propositions 2.2–2.3 (weighted quadratic form and component kernel); Chapter 3 §§3.1–3.2 (spectral graph drawings); Chapter 4 §§4.1–4.3 (cut and normalized-cut formulations); Appendix A, Theorem A.4 (Courant–Fischer). Its normalized-cut discussion assumes positive degrees; the assigned items state and prove their active-vertex convention locally.
- The official authors’ [ESL book page](https://hastie.su.domains/ElemStatLearn/main.html) confirms the second edition and corrected 12th printing. The browser could not open the full PDF endpoint, so I did not independently reread §14.5.3 during this review. No mathematical conclusion here depends solely on that section; the algorithm interface and graph-cut results were checked against the local proofs and the accessible sources above.

## Blockers and limits

- `alg-weighted-spectral-clustering` and its three dependent examples still rely on draft batch-20 `alg-lloyd-k-means` and `thm-lloyd-objective-monotonicity-and-termination`. Their current bodies and exact call interface were reviewed, and no mathematical defect was found. I did not establish a current owner acceptance/readiness record for those draft suppliers, so readiness remains owner-held.
- The live run status at handoff remains `running`. The current status reports an unrelated `3a-split` blocker: batch 8 failed three times. I did not intervene outside batch 21.
- I checked the direct suppliers needed for this batch; I did not re-audit the entire transitive proof closure of the published spectral and projection suppliers.
