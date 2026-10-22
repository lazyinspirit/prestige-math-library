# Step 3a reader report — batch 11

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-11`)  
Batch: `11`

## Opened inventory

- Read the assigned A page `emx-compatible-matrix-evolution` and B page `emx-compatible-matrix-evolution-examples`.
- Read all six assigned items: `def-emx-matrix-maxwell-system`, `thm-emx-matrix-energy-constraints`, `alg-emx-staggered-leapfrog`, `thm-emx-leapfrog-cfl`, `cex-emx-explicit-euler-growth`, and `cex-emx-cfl-endpoint`.
- Read the direct mathematical suppliers used by those claims: `thm-finite-dimensional-orthogonal-decomposition`, `lem-xd-finite-matrix-exponential-series`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `def-riemann-integral-over-a-jordan-set`, `def-jordan-inner-and-outer-content`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `thm-multidimensional-integral-properties`, `cor-zero-derivative-implies-constant`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-singular-value-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`.
- For the matrix-exponential supplier, also read its relevant matrix, norm, power and series suppliers: `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-induced-matrix-p-norm`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums`, `thm-matrix-multiplication-laws`, `def-group-power`, `thm-induction-principle`, `def-factorial-and-falling-factorial`, `def-real-exponential-function-and-e`, and `lem-exponential-series-has-infinite-radius`.
- Read the six published page prerequisites named in the batch manifest: `discrete-de-rham-complexes-and-edge-elements`, `finite-generator-master-equations-and-uniformization`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `the-riemann-integral-in-rn-and-jordan-content`, and `the-derivative-and-mean-value-theorems`.
- Read the batch notes, coverage record, cross-batch dependency record, and proof contracts as review evidence. The cross-batch dependency record is empty.
- Checked the cited source locators in Gilbert Strang, *The Wave Equation and Staggered Leapfrog*, §5.3, PDF pp. 3–10 (`https://math.mit.edu/classes/18.086/2006/am53.pdf`), and Marco Zank, *Topics in Finite Elements, Part I: Wave Equation*, ch. 2 §2.3, PDF pp. 13–17 (`https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf`). Strang's notes cover the scalar/grid-specific CFL condition, symmetric first-order energy flux calculation, staggered electric/magnetic updates, and Maxwell example. Zank's Definition 2.9, Lemma 2.10, Theorem 2.12, and Theorem 2.14 concern a finite-element wave discretization with mesh, inverse-inequality and CFL hypotheses. These sources support the method context; the batch's matrix claims are proved locally and do not import the source-specific mesh or continuum hypotheses.

The opened-item scope was the assigned carriers, their direct mathematical suppliers and the named page prerequisites. I did not re-audit every upstream dependency in the full transitive foundations of the published mathematical suppliers.

## Review and page verdicts

- `def-emx-matrix-maxwell-system`: the real matrix dimensions, symmetry/positivity conditions, zero-dimensional conventions, equations, energy, constraint vector, and conditional kernel/image characterization are explicit. Its invertibility and orthogonal-complement arguments follow from the cited finite-dimensional decomposition result.
- `thm-emx-matrix-energy-constraints`: the variation-of-constants construction, coordinatewise integral argument on compact subintervals, uniqueness argument on the full interval, energy cancellation, constraint conservation, and weak-divergence derivative are supported by the stated assumptions and suppliers. No claim about a continuum field or physical observation is made.
- `alg-emx-staggered-leapfrog`: inputs, solve, finite loop, outputs, empty-dimension cases, and exact-solve convention are stated. Its timing diagram correctly places electric states at integer indices and magnetic states at half-integer indices; the proof obligations are handled by the separate theorem.
- `thm-emx-leapfrog-cfl`: the root transformations, invariant modified energy, strict lower bound, constraint preservation, and supercritical two-dimensional recurrence check out. The initial “expanding singular mode” wording was underdefined; see the repair below.
- `cex-emx-explicit-euler-growth`: the one-dimensional data satisfy the matrix hypotheses and the energy multiplier is exactly $1+h^2>1$ for every nonzero initial state and $h>0$.
- `cex-emx-cfl-endpoint`: the stated scalar endpoint gives the displayed nilpotent part $J\ne0$, $J^2=0$, and a state with growth unbounded in the finite horizon. It remains a valid counterexample after the theorem clarification: it uses only the definition of $K$ and the endpoint threshold.

**A-page verdict — `emx-compatible-matrix-evolution`: pass.** The frontmatter-only page has the correct assigned item placement and prerequisite links. Its listed source context does not replace the local proofs.

**B-page verdict — `emx-compatible-matrix-evolution-examples`: pass.** Both assigned counterexamples are correctly placed and their witnesses and computations are valid. No B-page prose was edited.

## Repair and validation

In `items/thm-emx-leapfrog-cfl.md`, replaced the undefined phrase “an expanding singular mode exists” with an explicit supercritical statement: unit vectors $v,u$ satisfy $Kv=\sigma u$ and $K^Tu=\sigma v$ for $\sigma=\lVert K\rVert_2$; the coefficient update is the displayed matrix $T_\sigma$; and its real eigenvalue $|\lambda|>1$ gives the stated growth. Proof step 3.2 now directly derives that conclusion from trace $<-2$ and determinant $1$. The only current item consumer of the theorem statement, `cex-emx-cfl-endpoint`, was checked and remains valid.

Updated the matching step 3.2 derivation and risk note in `research/physics-non-fluid-129-2026-10-21-r2-batch-11.proof-contracts.json`, and refreshed the endpoint counterexample's F2 quote to the current supplier statement. The endpoint item itself is unchanged. The repaired item had no stale `verification.judge` record.

Required checks after the repair:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-emx-leapfrog-cfl.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-emx-leapfrog-cfl.md` — PASS, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/thm-emx-leapfrog-cfl.md` — 1 item, 7 steps, 0 defects.

The batch's assigned `alg-emx-staggered-leapfrog` TikZ diagram was checked against its procedure. The named `discrete-de-rham-complexes-and-edge-elements` prerequisite page's tikzcd was also checked in context: the degree-raising field and coboundary arrows and the vertical $J^k$ maps agree with the page summary. No diagram defect or missing diagram was found; the published prerequisite was read-only.

## Unedited findings and blocker

No confirmed or suspected defect remains unedited in the assigned pages or items. No blocker remains. The published suppliers and root mathematics files were read-only throughout.
