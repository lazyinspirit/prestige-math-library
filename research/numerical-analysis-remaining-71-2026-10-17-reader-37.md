# Step 3a reader report — batch 37

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader (`reader-37`)  
Verdict: no defect found; no edits made.

## Opened inventory

Pages:

- `library/numerical-pdes-and-spatial-discretization/well-balanced-balance-laws-and-wet-dry-fronts.md`
- `library/numerical-pdes-and-spatial-discretization/well-balanced-balance-laws-and-wet-dry-fronts-examples.md`

Assigned items, read in supplier/dependency order:

- Level 0: `def-pe05-shallow-water-balance-law`.
- Level 1: `def-pe05-hydrostatic-hll-scheme`; `lem-pe05-strong-l1-limit-preserves-dry-admissibility`; `prop-pe05-shallow-water-admissible-state-set-is-convex`; `cex-pe05-centered-source-produces-spurious-current`.
- Level 2: `lem-pe05-hll-depth-flux-decomposition`; `thm-pe05-hydrostatic-reconstruction-is-well-balanced`; `lem-pe05-source-quadrature-consistency`; `lem-pe05-discrete-weak-identity-with-source`; `lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1`.
- Level 3: `lem-pe05-hll-dry-face-direction-and-zero-flux`; `thm-pe05-strong-limit-satisfies-smooth-bed-balance-law`; `ex-pe05-lake-at-rest-over-a-dry-crest`.
- Level 4: `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility`.
- Level 5: `ex-pe05-hll-dam-break-wets-dry-cell`.

Direct prerequisites opened for verification:

- `def-pe03-convex-invariant-domain` (draft supplier for the convexity proposition).
- `def-countable-choice`, `thm-dominated-convergence`, `thm-l-one-convergence-implies-convergence-in-measure`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-riesz-subsequence-theorem-for-convergence-in-measure`, and `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` (published suppliers for the face-flux convergence lemma).

## Review and evidence

The shallow-water definition consistently fixes the conserved state, admissible wet/dry set, dry velocity and flux values, balance-law source, and lake-at-rest convention. The hydrostatic HLL definition specifies the reconstructed states, wave speeds, all HLL branches, one-sided corrections, update, source decomposition, and face-specific CFL. The equality-speed branches are compatible with the stated dry all-zero case.

The HLL depth-flux decomposition gives nonnegative inflow/outflow coefficients with the strict outgoing bound on wet reconstructed states. The dry-face lemma checks both orientations and the equality-speed cases. These facts support the cellwise nonnegative-depth and dry-momentum argument in the update theorem; its shared mass fluxes also give the stated periodic and boundary water balances. The rest-state theorem’s common reconstructed depths and pressure corrections cancel cell by cell.

The source-quadrature estimate has the stated uniform first-order error: the adjacent bed increments differ by (b'(x_i)d+O(d^2)), and the positive-part pressure remainder is (O(d^2)) uniformly for bounded depths. The exact discrete weak identity has the correct time, face, initial, and source signs. In the conditional weak-limit theorem, the assumptions provide the local bounds, strong limits, initial trace, and source/flux convergence used in the passage to the limit; no entropy or compactness conclusion is claimed.

The convexity proposition directly checks the only zero-depth case. The assigned counterexample’s `Statement refuted` is intentionally the false preservation claim; its calculation gives (m_0^+=-\Delta t/16\ne0), so the claim is refuted as intended. The five-cell dry-crest example and one-step dam-break example have consistent reconstructed fluxes, CFL checks, and updates.

Literature checks:

- [Audusse et al., *A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows*](https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf), §2.1, equations (2.5)–(2.16) and Theorem 2.1(ii)–(iii), printed pp. 2052–2055, supports the max-bed reconstruction, pressure corrections, lake-at-rest balance, and smooth consistency. Proposition 2.2, §2.2, printed pp. 2056–2057, has a separate homogeneous-flux positivity hypothesis; the assigned fully discrete HLL positivity result is proved locally and does not import that proposition.
- [Bouchut, *Shallow water problem – Hydrostatic reconstruction scheme*](https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf), §III, equations (19)–(24), PDF pp. 8–11, matches the balance law and hydrostatic reconstruction/corrected-flux framework.
- [Ketcheson, LeVeque, and del Razo, Chapter 12](https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html), HLL derivation and implementation, lines 367–426, gives the middle-state conservation formula. Its HLLE wave-speed selection and positivity discussion, lines 374–385 and 518–552, are not treated as proofs for the assigned speed rule; the assigned arguments establish the required facts directly.
- [Guermond and Popov](https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf), §2.2, Definitions 2.3–2.4, PDF pp. 3–4, supports the convex/invariant-domain terminology used by the prerequisite.
- [De Sterck and Ullrich, Chapter 3](https://climate.ucdavis.edu/AM452.pdf), §§3.4.1 and 3.4.3, PDF pp. 94–99, and [Seibold, Lecture 19](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf), pp. 1–2, support the cell-average finite-volume recurrence and shared-flux cancellation. The exact source-bearing weak identity is derived in the assigned item.

## Edits and unresolved defects

No item or page prose was changed. No proof contract, judge record, reflow, precheck, or proof-layout run was needed. No confirmed or suspected defect remains in the assigned items or pages, and there are no proposed withdrawals from this batch.

## Page verdicts

- `well-balanced-balance-laws-and-wet-dry-fronts` (A): sound as authored. Its summary accurately describes the dry convention, hydrostatic HLL update, well-balancing, admissibility, source consistency, and conditional weak-limit result.
- `well-balanced-balance-laws-and-wet-dry-fronts-examples` (B): sound as authored. Its summary matches the dry-crest calculation, wetting step, and the specified centered-flux counterexample.

## Blocker and coverage note

No batch-37 blocker. The live run status checked at `2026-10-18T00:37:02Z` reported a separate `3a-collect` blocker for batch 7 (`collect-7 failed 3x`); it does not block this reader review.

All assigned pages and items and the direct prerequisites needed for their claims were opened. The local statements/proofs of published measure-theory prerequisites were reviewed as suppliers; their own upstream proof closures were not independently re-audited. No mathematical uncertainty remained in batch 37.
