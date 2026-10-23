# Batch 15 authoring notes

Run: `fluid-dynamics-all-47-2026-10-23`  
Scope: `fd-mf04` and `fd-mf04-examples` only.  
Date: 2026-10-23.

## Plan and controlling design

The controlling design is `research/plan-fluid-dynamics-refresh-track.md` §`fd-mf04` (the assigned location at L489). Its 2026-10-18 refresh explicitly supersedes the older `research/plan-fluid-dynamics-track.md` §`fd-mf04` (assigned location at L451); the older section still reserves the same A/B IDs. The current owner direction also names the refresh track as controlling. The live `research/plan-spec.json` row agrees on A/B IDs, order 389/390, category, library, title, and page requirements. No conflict in those pair-level fields was found. The owner addendum’s correction is for `fd-s01`, not this pair.

The refresh inventory was retained except for two dependency dispositions recorded below. The A-page item inventory is `def-fd-nonnewtonian-laws`, `lem-fd-generalized-newtonian-dissipation`, `lem-fd-bingham-monotone-graph`, and `lem-fd-conformation-storage`; the B-page item is `ex-fdmath-bingham-zero-rate-stress`. No other pair was edited.

## Dependency order and current interfaces

Batch 15 is level 1, after batch 2. Item levels recomputed from current in-run edges are:

| Item | Level | Direct mathematical dependencies |
|---|---:|---|
| `def-fd-nonnewtonian-laws` | 1 | `def-fd-smooth-motion`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-determinant-multiplicative` |
| `lem-fd-generalized-newtonian-dissipation` | 2 | `def-fd-nonnewtonian-laws`; `lem-fd-observer-calculus` |
| `lem-fd-bingham-monotone-graph` | 2 | `def-fd-nonnewtonian-laws` |
| `lem-fd-conformation-storage` | 2 | `def-fd-nonnewtonian-laws`; `lem-fd-observer-calculus`; `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`; `prop-a-fundamental-matrix-is-invertible`; `thm-derivative-of-matrix-inversion`; `thm-chain-rule-for-total-derivatives`; `thm-algebra-of-derivatives`; `thm-determinant-differential-and-jacobis-formula`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-determinant-multiplicative`; `thm-logarithm-derivative-and-integral`; `thm-integral-logarithm-product-law`; `lem-cm-positive-definite-matrix-square-roots`; `thm-derivative-of-exponential`; `cor-exponential-reciprocal-and-positivity` |
| `ex-fdmath-bingham-zero-rate-stress` | 3 | `lem-fd-bingham-monotone-graph` |

The arithmetic is zero without an in-run supplier and one plus the largest in-run supplier level otherwise. The motion definition is batch 2 level 0; the observer lemma is batch 2 level 1. Same-batch levels follow the chain `def-fd-nonnewtonian-laws` → each A-page consumer, then Bingham lemma → example. No cycle was found.

The five exact claims and their proof locations are:

- `def-fd-nonnewtonian-laws`: defines the SI kinematics, incompressible generalized-Newtonian/Carreau/power laws, Frobenius-normalized Bingham graph, and adopted conformation equation/stress/storage. The definition records the Carreau `n=1` constant case, the zero-rate power-stress extension, and the Bingham invariant-normalization caveat. Its non-empirical scope is explicit.
- `lem-fd-generalized-newtonian-dissipation`: proves nonnegative stress power, Carreau finiteness and all three exponent regimes, regularized finiteness/positivity, continuity of the unregularized stress extension, and objectivity. The direct calculations are steps 1.1–3.1.
- `lem-fd-bingham-monotone-graph`: for the stated finite-dimensional Frobenius space, proves the explicit potential’s convexity, equality of its supporting-inequality subdifferential with the Bingham graph, monotonicity, nonnegative power, and rotation equivariance. The graph equality is proved locally in steps 1.1–3.2.
- `lem-fd-conformation-storage`: proves forward positivity from `C(0)`, nonnegative stored energy with equality exactly at `I`, observer covariance, and the pointwise storage/dissipation identity along the stated trajectory. It asserts no backward positivity or PDE existence. The complete route is steps 1.1–6.1.
- `ex-fdmath-bingham-zero-rate-stress`: verifies the explicit nonzero trace-free boundary tensor in the closed zero-rate stress ball, so zero strain rate need not give zero deviatoric stress in this set-valued model.

The exact arguments, step inputs and supplier excerpts are in the proof-contract file. The detailed source-to-item locators and harvested dispositions are in the coverage file.

`loadStep1Record` finds the current batch-2 carriers `def-fd-smooth-motion` and `lem-fd-observer-calculus` on `fd-mf01`; `step1Decision` reports their Step-1 records missing. Both items are draft, and the observer item has a complete current proof. Their actual statements and complete relevant proof arguments were read and matched against this batch’s use. The motion definition supplies the C² orientation-preserving motion, inverse labels, C¹ Eulerian velocity, and kinematic notation used here. The observer lemma assumes C² `Q,c`, `Q(t)∈SO(3)`, and proves the exact velocity, gradient, and strain transformations used here. No interface mismatch or missing mathematical argument was found. The missing authoring records and draft status alone do not invalidate the actual current carriers; consumer readiness records bind their current bytes. This records input readiness only, not independent proof acceptance.

The current `fd-mf01` page and its A/B manifests exist, and the A page contains the motion and observer carriers. The four cross-batch edges (page `fd-mf04`→`fd-mf01`, and the three item edges to the two batch-2 suppliers) are recorded `verified` after this scoped interface check. “Verified” here describes the dependency edge only; it is not an independent review verdict.

## Design dependency dispositions

1. The planned Bingham edge to `thm-tdmath-finite-dimensional-biconjugation` (the design’s TD-M13 reference) does not supply the needed Bingham graph statement: its current published statement/proof concern finite-dimensional biconjugation. The current `def-tdmath-fenchel-transform-and-subgradient` was also inspected. Rather than imply either item proves the Bingham graph identity, the lemma defines the finite-dimensional supporting-inequality subdifferential of its explicit potential and proves both graph inclusions, monotonicity, nonnegative power, and rotation equivariance locally. Accordingly, the lemma has no direct TD-M13 item dependency. The planned page prerequisite `td-math-nonsmooth-equilibrium` is preserved on the A page.
2. The design’s `NR-E2` conformation supplier is a research-only ODE interface, not a current item carrier. The trajectory proof instead uses the exact published, imported matrix-ODE existence/uniqueness and fundamental-matrix invertibility results, plus the listed published calculus, determinant, logarithm, spectral, square-root, and exponential results. Their statements and relevant complete proofs were inspected; the consumer states the exact continuous-coefficient ODE hypotheses. No shared plan or imported mathematical file was changed.

## Sources and harvested results

The full source fetches and inspected locators are recorded in `fluid-dynamics-all-47-2026-10-23-batch-15.coverage.json`. Four independent full-text retrievals succeeded on their first recorded attempt; there were no failed retrievals, source drops, or recovery searches. `source-fetch-check --stamp` verified and stamped all 4/4 sources; the later non-stamping check again verified 4/4.

- J. N. Reddy, *An Introduction to Continuum Mechanics*, 2nd ed., Chapter 6, §§6.5.15 and 6.6.1–6.6.2.3, PDF pp. 24–26 (44-page chapter), https://courses.washington.edu/mengr503/Chapter_6.pdf. Supports the generalized-Newtonian stress normalization, invariant-dependent viscosity, power-law and Carreau models, and Bingham model; harvested definition material is included. The item explicitly records the Frobenius normalization and the needed parameter-conversion caveat.
- MIT OpenCourseWare, *Lecture Notes on Fluid Dynamics* (1.63J/2.21J), complete §1.6.2 and equations (1.6.13)–(1.6.18), four-page PDF, https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf. Supports Bingham simple-shear and three-dimensional invariant formulations; included in the definition item.
- J. W. Barrett and S. Boyaval, *Existence and Approximation of a (Regularized) Oldroyd-B Model*, arXiv:0907.4066v2, full 52-page PDF, §1.1, https://arxiv.org/pdf/0907.4066. Supports the adopted conformation equation and stress/conformation mapping; included in the definition item. No PDE existence conclusion is imported into the local trajectory result.
- S. Boyaval, T. Lelièvre, and C. Mangoubi, *Free-energy-dissipative schemes for the Oldroyd-B model*, ESAIM: M2AN 43 (2009), full 39-page PDF, §2.1.1 eq. (2.2), §2.1.2 Theorem 2.2 and complete proof (eqs. (2.3)–(2.8), PDF pp. 4–7), and Appendix B Lemma 2.1 and complete proof (PDF p. 27), https://www.numdam.org/item/10.1051/m2an/2009008.pdf. Harvested positivity and free-energy results are included inline as source comparison. Those source results have smooth PDE hypotheses; the local proof independently establishes only the stated trajectory-level result.

Canonical harvested results are separately recorded in coverage: generalized-Newtonian nonnegative power, objectivity, and parameter regimes; Bingham graph/subdifferential identity and monotonicity; forward conformation positivity and pointwise storage identity under its exact trajectory hypotheses; and the explicit nonzero zero-rate Bingham stress example. Their disposition is `included`. No measurement or experimental precision is asserted.

## Authoring and validation record

- A page has four items and B page one item (under the 100-item cap). Both page files are frontmatter only; no page summary or body was added. Domain and library remain mathematical, all dependency roles are mathematical premises, and `physical_scope` remains `null`.
- Statements are complete without inline hyperlinks. Their source and supplier links are in immediately following sections named for the statement class plus “references.” Proof and Facts links remain in place.
- Proof contracts are generated from the final arguments and contain every numbered step, every linked fact’s exact supplier excerpt, boundary dispositions, and symbolic finite checks. The contract file is `fluid-dynamics-all-47-2026-10-23-batch-15.proof-contracts.json`.
- Scoped checks after final content edits: proof layout on all five items, 0 defects; strict proof-contract check, 5/5 items and 0 errors/warnings; content policy, 5/5 items and 0 errors/warnings; render check, 7 files and 0 errors/warnings; scoped depcheck, 0 errors/warnings; coverage checklist, 15 harvested results and 0 errors/warnings; source fetch, 4/4 verified. The statement-hyperlink, empty-page-body, and manifest-count check found five clean statements, two empty page bodies, and counts 4/1.
- The assigned item-level computation gives exactly 1, 2, 2, 2, 3, with no batch-15 errors. The whole-run checker has 42 findings in unrelated batches (empty inventories and level mismatches); no out-of-scope item or manifest was changed. These findings are retained for the owner.
- Final batch-level recomputation and check passed for 47 batches (maximum level 5; batch 15 at level 1 after batch 2). Intermediate attempts saw batch 17 mid-write and a later manifest update from another batch; after those writes completed, the final recompute/check succeeded. No out-of-scope manifest was edited.
- All five local native Step-1 rows were recorded `ready` with `owner:false`, exact direct dependency ID lists, and current input hashes. A post-record `loadStep1Record`/`step1Decision` check found all five closed and current. This records authored prerequisite readiness, not independent proof approval.
- Strict proof-contract validation passes all five assigned items, and a scoped manifest-to-contract coverage check confirms all five are represented. The run-wide `proof-contract-coverage` tool was also attempted, but it stops before contract comparison because unrelated page `fd-f03` has an empty frontier inventory (`Empty or invalid frontier page inventory fd-f03`). This out-of-scope inventory was not changed.
