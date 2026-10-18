# Step 3a reader report — batch 29

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader (`reader-29`)  
Review date: 2026-10-18

## Verdict

No confirmed defect was found in either assigned page, any of the 11 assigned items, or the batch-28 suppliers used by those items. No carrier was edited. No uneditable finding or blocker remains. This is a reader report, not a proof stamp or certification.

### Page verdicts

- `monotone-finite-volume-entropy-convergence` (A; draft): no defect found. Its summary accurately describes the invariant-interval CFL estimate, local compactness and trace argument, local convergence conclusion, and exclusions of global-tail, system, and entropy-process claims.
- `monotone-finite-volume-entropy-convergence-examples` (B; draft): no defect found. Its summary matches the two flux examples, the stationary Godunov entropy shock, and the nonmonotone expansion-shock counterexample.
- Prerequisite page `conservative-finite-volume-weak-limits` (current-run batch 28; draft): its summary correctly limits the theorem to a conditional weak-limit result and distinguishes that result from compactness and entropy admissibility.
- Its published page prerequisite `scalar-conservation-laws-and-entropy-solutions`: opened for context; no issue was found in the items used by this batch.

## Opened inventory

### Assigned pages and items

- `library/numerical-pdes-and-spatial-discretization/monotone-finite-volume-entropy-convergence.md`
- `library/numerical-pdes-and-spatial-discretization/monotone-finite-volume-entropy-convergence-examples.md`
- Dependency order for the A page: `def-bounded-bv-data-on-line`; `def-monotone-finite-volume-entropy-scheme`; `def-piecewise-linear-fv-time-interpolant`; `lem-monotone-fv-update-preserves-range-and-tvd`; `lem-monotone-fv-discrete-kruzhkov-inequality`; `lem-monotone-fv-local-compactness-and-trace`; `thm-monotone-finite-volume-entropy-convergence`.
- B examples reviewed after their suppliers: `cex-nonmonotone-fv-scheme-selects-expansion-shock`; `ex-godunov-fv-monotone-under-cfl`; `ex-lax-friedrichs-fv-monotone-under-cfl`; `ex-godunov-fv-captures-stationary-burgers-shock`.
- All 11 batch-29 item proof contracts were inspected, including citation mappings, derivations, boundary cases, and finite-smoke entries. The contract derivations match the current item arguments; finite-smoke lists are empty.

### Current-run suppliers used by batch 29

Read in dependency order, along with the required A page:

- `library/numerical-pdes-and-spatial-discretization/conservative-finite-volume-weak-limits.md`
- Batch-28 items: `def-conservative-finite-volume-scheme`; `def-locally-bounded-distributional-weak-solution`; `def-finite-volume-space-time-reconstruction`; `def-godunov-flux-for-burgers`; `lem-godunov-flux-for-burgers-is-continuous-and-consistent`; `lem-finite-volume-discrete-summation-by-parts`; `lem-conservative-fv-face-fluxes-converge-in-l1loc`; `thm-conservative-finite-volume-weak-limit`.

The local definitions and proofs supply the precise interfaces used in batch 29: the shared-flux recurrence, the local weak identity, the reconstructions, the Burgers Godunov flux and its consistency, the discrete summation identity, local face-flux convergence, and the conditional weak-limit conclusion. No defect was found in those interfaces or their proofs.

### Published item dependencies

The exact statements/definitions reached by the assigned proofs were opened:

`cor-finite-nonnegative-integral-implies-finite-almost-everywhere`; `cor-mean-value-theorem`; `def-countable-choice`; `def-dependent-choice`; `def-distributional-weak-solution-of-a-scalar-conservation-law`; `def-kruzhkov-entropy-solution`; `def-l-infinity-on-a-measure-space`; `def-l-p-space-as-a-quotient-by-null-functions`; `def-locally-integrable-function-on-r-n`; `def-measure`; `def-scalar-conservation-law-and-flux`; `lem-q-and-irrationals-dense-r`; `lem-schwartz-cutoffs-from-the-standard-smooth-step`; `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`; `prop-measure-monotonicity`; `thm-bolzano-weierstrass`; `thm-dominated-convergence`; `thm-existence-of-bounded-kruzhkov-entropy-solutions`; `thm-extreme-value-metric`; `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`; `thm-heine-borel-rn`; `thm-heine-cantor-metric`; `thm-kruzhkov-local-l1-contraction`; `thm-monotone-convergence-for-the-integral`; `thm-rankine-hugoniot-jump-condition`; `thm-rationals-countable`; `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`.

## Review evidence

- The translation-variation definition of `BV_b(R)` is well-defined on a.e. classes and permits bounded nonintegrable data. The finite-volume update proof derives the initial discrete variation estimate, order preservation, invariant range, TVD, and the time-increment bound from the full CFL condition.
- The Crandall–Majda flux formula gives the stated diagonal entropy flux and one-step inequality for levels inside the invariant interval; the proof also verifies exact cancellation for levels outside it.
- The compactness proof uses the stated spatial variation and time modulus to extract a local-in-time (L^1) limit, proves the initial cell-average trace from translation bounds, and controls the difference between affine and piecewise-constant reconstructions. The diagonal and summability steps use the cited real-analysis statements; the remaining Cauchy, Fubini, and dominated-convergence details close directly.
- The batch-28 weak-limit supplier has the required hypotheses for the convergence theorem: strong local convergence, local uniform bounds through the initial face, consistent fluxes, and the initial boundary term. It does not supply compactness or entropy admissibility, and batch 29 proves those separately.
- In the main convergence theorem, the discrete entropy inequality passes to every fixed Kruzhkov level and interior test. The initial trace follows from the compactness limit. The (L^1) branch uses the imported existence theorem under DC; the non-(L^1) branch gets existence from the local finite-volume limit. Local contraction gives uniqueness under the stated ACω and flux-Lipschitz hypotheses.
- The polynomial counterexample is consistent, has negative first-coordinate derivative at ((-1,0)), preserves the aligned ((-1,1)) expansion shock exactly, and has a negative (k=0) entropy pairing. The Godunov and Lax–Friedrichs examples use valid coordinate monotonicity and Lipschitz bounds for their stated CFL conditions. The aligned (1)-to-(-1) Godunov shock has zero Rankine–Hugoniot speed and satisfies each Kruzhkov inequality.
- The cited primary lecture notes were checked at the relevant locations: Droniou, §§2.2.2–2.2.3 (PDF pp. 15–18), Propositions 2.3.1 and 2.3.3 (pp. 19–21), Proposition 2.3.6 (pp. 21–22), and Theorem 2.3.9 (pp. 22–23), [PDF](https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf); Mishra, Fjordholm, and Abgrall, §4.4.4 (PDF pp. 49–50), Lemma 4.10 (§4.5.2, pp. 50–51), Lemmas 4.13–4.14 (§§4.5.3–4.5.4, pp. 53–54), and Theorems 4.18–4.19 (§4.6, pp. 55–57), [PDF](https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf). The cited convergence arguments concern integrable (BV(R)) data and use tail control; the nonintegrable (BV_b(R)) branch is supplied by the local proof here.

## Edits, uneditable defects, and blocker

- Edits: none; no item required repair.
- Uneditable defects: none found in the current-run or published dependencies used by the assigned claims.
- Blocker: none.
- No item changed, so item reflow, precheck, and proof-layout were not run.

## Coverage limitation

Published dependencies were checked at the exact statement/definition interfaces used by batch 29. Their unrelated proof sections and dependencies outside those interfaces were not re-audited.
