# Step 3a reader report — batch 21

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `21`

## Opened inventory

Read `briefs/reader.md`, the batch-21 manifest, and the batch-21 proof contracts. Read both assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/numerical-boundary-value-problems.md` (A page)
- `library/numerical-differential-equations-and-stochastic-dynamics/numerical-boundary-value-problems-examples.md` (B page)

Read the assigned items in supplier order:

- `alg-centered-difference-dirichlet-bvp`
- `lem-centered-difference-dirichlet-inverse-maxnorm`
- `lem-centered-difference-dirichlet-truncation-residual`
- `thm-centered-difference-dirichlet-second-order-error`
- `ex-centered-difference-dirichlet-quadratic-exact`
- `ex-first-order-neumann-closure-causes-first-order-bvp-error`
- `ex-dirichlet-inverse-infinity-norm-tight-at-n3`

Read the direct published item suppliers `cor-taylor-remainder-bound` and `lem-of-triangle-inequality`, and the relevant Taylor/absolute-value/order argument chain: `cor-taylor-lagrange-and-cauchy-remainders`, `thm-taylor-schlomilch-roche-remainder`, `lem-cauchy-mean-value-quotient-form`, `thm-cauchy-mean-value`, `thm-rolle`, `def-taylor-polynomial-and-remainder`, `lem-taylor-polynomial-derivatives`, `def-integer-power`, `lem-derivative-of-a-power`, `lem-finite-sum-laws`, `lem-of-abs-value`, `lem-of-add-order`, `def-ordered-field`, `def-abs-value`, `lem-of-mult-neg`, `lem-of-sign-rules`, `def-field`, `def-canonical-natural`, `def-factorial-and-falling-factorial`, and `lem-of-naturals-positive`. Also opened the prerequisite pages `darboux-lhopital-and-taylor` and `foundations-of-the-real-numbers`.

## Review and repair

The algorithm's forward pivots satisfy `p_j=(j+1)/j`; its right-hand-side elimination and back substitution solve the stated tridiagonal equations. The inverse lemma's discrete maximum principle and barrier argument give positivity preservation and the uniform `1/8` inverse bound. The Taylor expansions apply at the first and last interior nodes, and the imposed endpoint residuals are zero. The theorem's residual identity gives the stated `Mh²/96 + ||ρ_h||∞/8` bound. The quadratic example is exact, the mixed-boundary example has full-grid error `h/2`, and the `N=3` inverse computation has row sums `6/64, 8/64, 6/64`.

Repaired one proof dependency omission in `items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md`: step 1.1 used the scalar triangle inequality entrywise to establish the row-sum triangle axiom but did not cite its supplier. Added `lem-of-triangle-inequality` to `deps`, recorded it as [F3], and cited [F3] in step 1.1. Updated the assigned proof contract's citation and derivation input for that step. The cited lemma was opened; its statement and ordered-field proof supply the scalar inequality for real entries. No stale `verification.judge` record was present on the edited item.

Required checks on the edited item:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md` — 1 item, 5 steps, 0 defects.

## Source checks

Opened the cited Seibold MIT OCW Lecture 5 PDF: page 5 presents the one-dimensional Poisson finite-difference stencil and first-order Neumann closure, and warns that the `O(h)` boundary approximation can reduce global accuracy to `O(h)` (PDF text lines 348–373). Lecture 6 page 1 presents the general linear second-order equation and its finite-difference matrix (lines 3–20). The accessible FNC author page, section 10.4, describes finite-difference BVP collocation, exact endpoint conditions, and the resulting linear system (lines 128–168), with accuracy/stability discussion in section 10.4 (from line 229).

The pinned raw FNC source URL in the item bibliography returned a web-cache miss, so I could not verify that exact revision's contents. The accessible author page and both cited MIT lectures corroborate the relevant method and boundary-closure context. The local proofs supply the reviewed estimates and exact constants.

## Page verdicts

- `numerical-boundary-value-problems` (A): **accept**. Its claims about the grid, solvability, stability bound, residual, and error constant follow from the assigned algorithm and proved lemmas/theorem. Its caveat excludes broader collocation and variable-coefficient claims.
- `numerical-boundary-value-problems-examples` (B): **accept**. Its three summaries match the verified example calculations, including the changed Neumann closure in the second example.

## Uneditable defects and blockers

None found. No blocker remains. One defect was repaired in the assigned example; no uneditable finding remains.
