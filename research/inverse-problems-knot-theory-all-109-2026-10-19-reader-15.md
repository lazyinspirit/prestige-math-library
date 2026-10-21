# Step 3a reader report — batch 15

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Reader: `reader-15`  
Opened on: 2026-10-21  
Result: complete for assigned carriers; no blocker.

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch-15 manifest, coverage record, cross-batch dependency record, notes, and proof contracts. The live autopilot status showed `3a-read` open and no reader result for batch 15 before this review.

Assigned pages opened:

- `library/inverse-problems/function-space-priors-and-random-regularity.md` (A page)
- `library/inverse-problems/function-space-priors-and-random-regularity-examples.md` (B page)

All seven assigned items opened:

- `items/lem-ip-weighted-coefficient-spaces-are-hilbert.md`
- `items/lem-ip-coordinate-vectors-form-a-basis-of-ell-two.md`
- `items/def-ip-prior-on-a-forward-domain.md`
- `items/lem-ip-gaussian-series-prior-regularity.md`
- `items/ex-ip-prior-misses-uniform-ellipticity-domain.md`
- `items/ex-ip-trace-class-gaussian-has-full-support.md`
- `items/ex-ip-gaussian-series-at-besov-threshold.md`

The in-run supplier `items/def-ip-forward-map-and-solution-classes.md` and its metric-space supplier `items/def-metric-space.md` were opened. Published supplier bodies opened for the proof checks were:

- Choice, Hilbert, separability, and measurable-space interfaces: `def-countable-choice`, `def-axiom-of-choice`, `def-hilbert-space`, `def-separable-space`, `def-banach-space`, `def-polish-space`, `def-borel-sigma-algebra`, `def-measurable-space`, `def-probability-measure`, `def-borel-probability-law-on-a-polish-space`, and `def-measurable-function-between-measurable-spaces`.
- Orthonormal and square-summable interfaces: `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `lem-square-summable-sequences-form-a-hilbert-space`, and the relevant cited statements from `def-square-summable-family-on-an-arbitrary-index-set`, `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`, and `thm-parseval-equivalences-for-a-complete-orthonormal-family` in the batch-15 rendered proof-contract excerpts.
- Gaussian, covariance, and integration interfaces: `def-borel-gaussian-random-element-on-a-separable-banach-space`, `lem-density-normal-laws-and-square-summable-gaussian-series`, `thm-riesz-representation-for-hilbert-space`, `thm-monotone-convergence-for-the-integral`, `def-banach-gaussian-covariance-operator-and-rkhs`, `thm-banach-gaussian-covariance-rkhs-is-well-defined`, `thm-fernique-integrability-for-separable-banach-gaussian-law`, and `thm-bounded-linear-maps-commute-with-bochner-integration`.
- Domain, support, and ellipticity interfaces: `def-standard-normal-and-normal-laws`, `prop-measure-monotonicity`, `thm-every-borel-probability-on-a-polish-space-is-tight`, and `thm-support-of-banach-gaussian-is-closure-of-rkhs`.
- Besov-threshold interfaces: `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-standard-normal-fourth-moment`, `def-identically-distributed-and-iid-random-variables`, `cor-iid-finite-variance-strong-law`, its cited `cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances` supplier, `lem-measurable-functions-preserve-independence`, and `cor-continuous-functions-are-borel-measurable`.

Bibliographic source passages checked against the cited PDFs:

- Dashti and Stuart, [*The Bayesian Approach to Inverse Problems*](https://arxiv.org/pdf/1302.6989): §1.3, equations (1.9)–(1.10); §2.3, Theorems 2.5–2.6 and proofs; §2.4, Theorem 2.10 and proof, Remarks 2.11; §§3.2 and 3.4.
- Giné and Nickl, [*Mathematical Foundations of Infinite-Dimensional Statistical Models*](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf): §§1.1.2 and 1.2.2; §2.6; §§4.2, 4.3.4–4.3.5; §4.4.1, printed pp. 379–380. The book leaves completion of the periodic wavelet characterization at Exercise 4.3.8; the assigned Besov example defines its coefficient norm explicitly and proves its threshold claim directly, so it does not rely on that exercise.
- Teschl, *Topics in Real and Functional Analysis*, §2.1; Bühler and Salamon, Definition 2.62 and Exercise 2.64, for orthonormal bases and coordinate expansions.

## Edits and evidence

1. In `lem-ip-weighted-coefficient-spaces-are-hilbert`, the old enumeration assigned level `(0,0)` to coordinate `m+1`, leaving coordinate `m` unused. That made the claimed map into `ell^2` non-surjective and invalidated the Hilbert-space conclusion from that proof. The enumeration and inverse construction now use `m+(2^ell-1)+k`, so the level blocks start at `m` and fill every remaining coordinate. The corresponding two proof-contract derivations were updated.

2. In `lem-ip-gaussian-series-prior-regularity`, the covariance proof asserted square-summability of the Hilbert-basis coefficients without deriving it. The proof now applies the finite Pythagorean identity to obtain `sum_{j<=N}|<f_j,z>|^2 <= ||z||^2`; combined with summability of `lambda_j w_j`, this proves convergence of the covariance vector series. The corresponding proof-contract derivation was updated.

3. In `ex-ip-prior-misses-uniform-ellipticity-domain`, the title called the law a “prior” even though the example proves `mu(D)<1`, contrary to the assigned definition of a prior on that domain. The title now calls it a Gaussian coefficient law with mass outside the domain.

4. Corrected bibliographic locators in assigned items while retaining the source links and attribution. Dashti–Stuart equation (1.8) is the noisy observation equation; the restricted forward map is in (1.9), with its positivity domain in (1.10). The relevant Gaussian Hilbert-scale result is Theorem 2.10 with Remarks 2.11, not the old Theorem 2.4/Remarks 2.5 locator. The Besov prior regularity results are Theorems 2.5–2.6; the assigned wavelet scaling corresponds to source smoothness parameter `s+1/2` when `q=2,d=1`. The Giné–Nickl locator for the prior definition was changed from §6.1.1 (likelihoods and information) to §§1.1.2 and 1.2.2 (indirect observations and nonparametric Gaussian models).

No assigned statement or definition was changed. No `verification.judge` record was present on the six edited items, so none required removal. Page inventories and metadata were left unchanged.

## Validation

- Reflow: ran on each of the six changed item paths; all six reported unchanged and exited successfully.
- Precheck: five proof-bearing items passed. The assigned prior definition reported 0 checked and 0 failing, with precheck not applicable.
- Final proof-layout command: all six changed paths were checked together; result was `6 items, 23 steps, 0 defects`.
- No TikZ/tikzcd diagrams were present in the assigned items or pages.

## Page verdicts

- `function-space-priors-and-random-regularity`: valid A-page frontmatter with empty Markdown body, preserved item inventory and `page_layout: compact-v1`; no summary is present.
- `function-space-priors-and-random-regularity-examples`: valid B-page frontmatter with empty Markdown body, preserved example inventory and `page_layout: compact-v1`; no summary is present.

## Defects not repaired and blocker

No mathematical, statement, definition, title, proof, or page defect remains unedited in the assigned carriers. `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-15.coverage.json` and `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-15.notes.md` still cite the older Dashti–Stuart theorem numbers noted above. Those artifacts are outside the assigned item/A-page write scope and were left untouched; the in-scope item locators now point to the passages checked directly.

There is no blocker in batch 15. One initial access-order deviation occurred: the prior-domain definition file was opened before its in-run forward-map supplier. I opened and checked that supplier before completing the dependent mathematical review. No dependency needed for a final claim remains unread.
