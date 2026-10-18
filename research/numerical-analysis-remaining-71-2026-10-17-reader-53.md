# Step 3a reader report — batch 53

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `53`  
Run status at review start: `running`; no worker was in flight.

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/discontinuous-galerkin-methods.md` (A page).
- `library/numerical-pdes-and-spatial-discretization/discontinuous-galerkin-methods-examples.md` (B page).

Assigned items, in the batch manifest:

- `lem-sipdg-physical-simplex-trace-green`
- `def-sipdg-jump-average-convention`
- `def-sipdg-bilinear-form-and-energy-norm`
- `lem-sipdg-discrete-flux-inverse-bound`
- `lem-sipdg-energy-seminorm-is-a-norm`
- `lem-sipdg-boundedness-augmented-norm`
- `thm-sipdg-exact-consistency`
- `lem-sipdg-adjoint-consistency-h2`
- `thm-sipdg-coercivity-large-penalty`
- `thm-sipdg-l2-error-under-adjoint-regularity`
- `thm-sipdg-energy-error-estimate`
- `ex-sipdg-broken-function-is-not-h1`
- `ex-sipdg-one-dimensional-interior-jump`
- `ex-sipdg-small-penalty-loses-coercivity`

Unique direct item dependencies opened:

- `def-matching-affine-simplicial-meshes`
- `lem-affine-pullback-weak-derivatives-and-scaling`
- `lem-smooth-density-on-reference-simplex`
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
- `thm-holder-inequality-for-integrals`
- `thm-reference-simplex-trace-and-gauss-green`
- `lem-affine-simplex-gauss-green-formula`
- `def-countable-choice`
- `def-broken-and-conforming-polynomial-spaces`
- `def-sobolev-space-wkp-and-its-norm`
- `thm-polynomial-inverse-and-discrete-trace-estimates`
- `thm-cauchy-schwarz-and-the-euclidean-norm`
- `def-wkp-zero-as-a-sobolev-closure`

Also inspected `research/numerical-analysis-remaining-71-2026-10-17-batch-53.proof-contracts.json`, including the derivations, citation maps, and boundary records for all 14 assigned items. All listed direct suppliers were published items. The assigned item proofs were checked against their exact supplier statements; the proofs and claims were not accepted solely from the contracts or author decisions.

## Source review

The cited DG references were opened at the sections relevant to the assigned claims:

- Jean-Luc Guermond, *Discontinuous Galerkin*, [Part VIII, Chapter 38](https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf): §38.2.1, printed pp. 192–194, defines oriented interior jumps and averages, the one-sided boundary convention, the SIP form (38.4), the $\gamma_0/h_F$ penalty, and proves consistency in Lemma 38.2. §38.2.2, printed pp. 194–195, gives the discrete trace estimate and the sufficient coercivity threshold in Lemma 38.6. §38.3, printed pp. 197–198, gives face-aware boundedness (Lemma 38.9) and the Strang-type estimate (Theorem 38.10). Theorem 38.12, printed p. 199, gives the conditional duality estimate for $s\in(1/2,1]$.
- Arnold, Brezzi, Cockburn, and Marini, *Unified Analysis of Discontinuous Galerkin Methods for Elliptic Problems*, [SIAM J. Numer. Anal. 39(5) (2002)](https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_2002.pdf): §§3.1–3.2, printed pp. 1756–1758, set out trace/jump/average conventions and primal forms; §3.3, pp. 1758–1759, gives consistency and adjoint consistency; §§4.1–4.2, pp. 1763–1766, give boundedness and large-penalty stability; §5.1, pp. 1767–1768, explains the duality argument for the $L^2$ error.

These passages support the local formulation and the conditional nature of the error claims. The assigned proofs were checked directly; the citations were not used in place of local proofs.

## Repairs and evidence

1. `items/def-sipdg-jump-average-convention.md`, Definition: fixed the previously unbound polynomial degree as $k\in\mathbb N_0$ before defining $V_h^{\rm br}$. Its supplier `def-broken-and-conforming-polynomial-spaces` defines the polynomial family with this degree range; the SIP bilinear-form definition later specializes to $k\ge1$. The corresponding contract boundary evidence and all direct contract quotations of this Definition were refreshed.

2. `items/ex-sipdg-broken-function-is-not-h1.md`, Verification step 2.1: replaced the unconstructed “choose a fixed smooth bump” with an explicit normalized bump supported in $[-1/2,1/2]$, and stated why its zero extension is smooth. The scaling and Cauchy–Schwarz contradiction are unchanged. The step-2.1 contract derivation now records the explicit witness.

3. `items/ex-sipdg-one-dimensional-interior-jump.md`, Facts & Assumptions: specified the full one-dimensional symmetric form, including the interior normal flux, outward endpoint fluxes, face set, penalty, and counting measure. This makes the displayed value $a_h(v,v)=1$ follow from an explicit definition. The step-2.1 contract derivation was updated to record substitution into that form.

4. `items/ex-sipdg-small-penalty-loses-coercivity.md`, Facts & Assumptions: specified the same one-dimensional form and the energy expression used in the coercivity counterexample. Direct substitution gives $\|v\|_{DG}^2=3/2$ and $a_h(v,v)=-1/2$, so the witness refutes positive coercivity. Both relevant contract derivations were updated.

The four edited items had no `verification.judge` records to remove. No page prose or published item was changed.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts ...` ran for each of the four changed items; all reported `unchanged`.
- `node tools/tsx-run.mjs tools/precheck.mts ...`: the definition reported `0 checked, 0 failing`; each of the three examples passed with `1 checked, 0 failing`.
- Final layout check, in one command: `node tools/proof-layout.mjs items/def-sipdg-jump-average-convention.md items/ex-sipdg-broken-function-is-not-h1.md items/ex-sipdg-one-dimensional-interior-jump.md items/ex-sipdg-small-penalty-loses-coercivity.md` reported `4 items, 6 steps, 0 defects`.

## Unedited defects and page verdicts

- Unedited defects: none found in the assigned pages, assigned items, or the reviewed direct suppliers.
- A page `discontinuous-galerkin-methods`: pass. Its summary accurately limits the model to scalar elliptic diffusion on finite matching shape-regular affine simplex meshes, identifies the coefficient and weak Dirichlet assumptions, states the penalty threshold as sufficient rather than universal, and keeps the $L^2$ result conditional on the adjoint and face-aware approximation assumptions.
- B page `discontinuous-galerkin-methods-examples`: pass after the item repairs. Its summary accurately describes the separate 1D convention and the explicit jump, energy, and negative-form calculations.
- Batch 53 review blocker: none.
- Run-level blocker observed at handoff: autopilot reports `3a-collect` blocked because `collect-11` failed three times (covers batch 11; timestamp `2026-10-18T00:54:56.716Z`). This is outside batch 53 and was not resolved in this reader task.

## Coverage note

All assigned pages and items, the 13 unique declared direct dependencies, their relevant proofs/statements, the batch-53 proof-contract rows, and the cited DG source sections above were inspected. I did not independently re-audit every transitive dependency behind the published direct suppliers; no claim of whole-library dependency-closure coverage is made.
