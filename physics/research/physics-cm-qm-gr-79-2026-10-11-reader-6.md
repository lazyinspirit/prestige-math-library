# Step 3a reader report — batch 6

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: read-only reader  
Batch: `6`

## Scope and opened inventory

Pages opened:

- `cm-math-canonical` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-canonical.md`
- `cm-math-canonical-examples` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-canonical-examples.md`

All 23 item carriers listed by the current batch-6 page manifest were opened and reviewed in dependency order.

The canonical page items were:

- `def-cm-phase-domain-and-standard-symplectic-two-form`
- `def-cm-finite-regularity-canonical-calculus`
- `lem-cm-standard-symplectic-form-is-closed-and-nondegenerate`
- `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart`
- `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity`
- `cor-cm-hamiltonian-flow-preserves-phase-volume`
- `prop-cm-canonical-map-tests-and-hamiltonian-transport`
- `def-cm-generating-function-of-the-first-and-second-kind`
- `prop-cm-generating-functions-yield-canonical-maps`
- `prop-cm-canonical-map-locally-has-a-generating-function`
- `prop-cm-time-dependent-generating-function`
- `prop-cm-cylinder-shift-has-no-global-generating-function`
- `def-cm-hamilton-jacobi-equation-and-complete-integral`
- `thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral`
- `rem-cm-scope-of-canonical-methods`
- `lem-cm-closed-two-form-radial-primitive`
- `thm-cm-liouville-arnold-action-angle-repaired`
- `cor-cm-action-angle-radian-scaling`
- `rem-cm-scope-of-complete-integrability-and-action-angle`

The examples page items were:

- `ex-cm-free-particle-hamilton-jacobi-complete-integral`
- `ex-cm-linear-shear-generating-function`
- `ex-cm-cylinder-shift-obstruction-checks`
- `ex-cm-flow-derivative-of-the-isotropic-oscillator`

I reviewed the current contract file for all 17 proof-bearing carriers and compared its derivation/citation rows with the source items. I also opened the four current-run cross-batch dependencies used by the Hamiltonian-flow items and the compact-continuation theorem in their dependency chain:

- `def-cm-local-flow-of-an-autonomous-system`
- `lem-cm-local-flow-composition-law`
- `thm-cm-smooth-dependence-and-the-variational-equation`
- `cor-cm-flow-domain-open-and-flow-is-c1`
- `thm-cm-compact-continuation-for-locally-lipschitz-odes`

The 87 distinct external direct supplier IDs in the assigned item dependencies were reviewed at the exact Definition/Statement sections needed to check their uses. This includes the suppliers listed above that are not part of batch 6. I also checked `def-operator-norm-on-a-finite-dimensional-inner-product-space` while tracing an undefined norm, and opened `thm-liouville-arnold-action-angle-theorem` because the assigned local item cites it in a nonlogical remark. The latter is not in the logical dependency closure of the assigned items.

## Review findings

No assigned item or page prose was edited. The read-only assignment leaves the findings below for owner disposition.

### `thm-cm-liouville-arnold-action-angle-repaired`

- **Facts & Assumptions [F2]; Proof 1.1 and 8.1 — unlicensed inference, nonfatal.** [F2] asserts without a derivation or exact supplier that each regular common level is an embedded (n)-dimensional Lagrangian manifold and that the Hamiltonian fields (X_{F_i}) are tangent, independent, and span its tangent space. The cited Lagrangian definition only defines the term; the proof then uses the asserted level-set facts to construct the fibre action and compare the two-forms. Close this with a local derivation from the submersion normal form, involution (omega(X_{F_i},X_{F_j})=0), and nondegeneracy, or cite the exact regular-level theorem with its hypotheses. The cited Cannas da Silva text states that a regular integrable level is Lagrangian immediately before Theorem 18.12, Lecture 18, pp. 109–111 ([source PDF](https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf)); the item does not identify that statement in [F2].
- **Proof 3.2 and 5.1 — unlicensed inference, nonfatal.** The proof uses (d(sigma^*\omega)=\sigma^*(d\omega)), (d(\pi^*\alpha)=\pi^*(d\alpha)), and the analogous identity for (\beta_i), without identifying the pullback-naturality result in its facts or steps. `thm-the-exterior-derivative-commutes-with-pullback` gives the needed statement (d(F^*\eta)=F^*(d\eta)); it occurs only indirectly in this item's dependency closure through the Poincaré-lemma chain. Name that supplier and apply it here, or prove the required coordinate identity locally.
- **Proof 9.1 — unlicensed inference, nonfatal.** The proof asserts that every smooth function constant on the fibres factors as (G\circ\pi) with (G) smooth. This is not derived or cited. Use the local projection charts from `cor-local-normal-form-for-submersions` to construct the local smooth factors and show they agree on overlaps.

The proof's central construction is consistent with the cited action-angle result's hypotheses: compact connected regular fibre, commuting integrals, and a proper submersion over a regular-value neighbourhood. Meinrenken's Theorem 6.21 states the proper-integrable-system action-angle conclusion and its affine torus-bundle scope at §§6.2–6.3, pp. 72–74 ([source PDF](https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf)). The open obligations above concern the authored proof's local inferences.

### `cor-cm-action-angle-radian-scaling`

- **Statement defining (\theta^{\mathrm{rad}}); Proof 1.1 — ill-formed, nonfatal.** The earlier `def-action-and-angle-coordinates` makes (\theta_i\) a class in (\mathbb R/\mathbb Z). The formula (2\pi\theta_i) has no declared target quotient, and scalar multiplication on (\mathbb R/\mathbb Z) is not the asserted coordinate map. Define the target as (\mathbb R/(2\pi\mathbb Z)) and the induced map ([x]\mapsto[2\pi x]); then state the corresponding smooth quotient charts.
- **Proof 2.1 — false claim, nonfatal.** For arbitrary (n\), the chain-rule line (\partial\tilde h/\partial I_i^{\mathrm{rad}}=2\pi h'(2\pi I_i^{\mathrm{rad}})) supplies a scalar argument to (h\), although (h) is a function on an (n)-dimensional action domain. The correct coordinate formula is (\partial_i\tilde h(I^{\mathrm{rad}})=2\pi(\partial_i h)(2\pi I^{\mathrm{rad}})). The preceding Hamilton-equation derivation still gives the claimed equation, but this stated consistency computation is invalid for general (n\).

### `cor-cm-hamiltonian-flow-preserves-phase-volume`

- **Title and Remarks, final bullet — overstrong title/statement, nonfatal.** The stated result is limited to bounded Borel (A\) with (\overline A\subseteq D_t\). The title reads as unrestricted measure preservation, and the final remark says the identity for arbitrary Lebesgue-measurable (A\) follows by exhausting with bounded Borel sets. A non-Borel Lebesgue-measurable set is not a union of Borel subsets equal to itself; the item gives no null-set-preservation argument for the (C^1) diffeomorphism. Prove the measurable-set extension using the change-of-variables theorem and a local null-set argument, or keep the title and remark within the stated Borel, relatively compact class.

### `prop-cm-cylinder-shift-has-no-global-generating-function`

- **Statement, opening paragraph — ill-formed, fatal.** The item takes (C=(\mathbb R/\mathbb Z)\times\mathbb R) using quotient topology, then uses “smooth forms”, a (C^\infty) diffeomorphism, and pullbacks of forms on (C). The cited torus and quotient-topology definitions supply a topological quotient, not a smooth atlas or a proof that (\pi:\mathbb R^2\to C) is a local diffeomorphism. Define the quotient smooth structure (for example with intervals of length less than one as covering charts) and justify descent/uniqueness of the invariant forms before using these operations.

### `def-action-and-angle-coordinates` (published dependency)

- **Definition, target (B\times(\mathbb R/\mathbb Z)^n) — ill-formed, fatal.** This published definition calls the target of a “diffeomorphism” (B\times(\mathbb R/\mathbb Z)^n), but does not state a smooth structure on the quotient torus. Its only logical dependency is the symplectic-manifold definition; `def-the-one-dimensional-torus-and-normalized-haar-integral` describes the quotient topology. The cited Meinrenken Definitions 6.16 and 6.18, pp. 72–74, construct action-angle coordinates through the smooth quotient (T^*B/\Lambda), but that smooth structure is not stated in this definition ([source PDF](https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf)). Add the standard quotient smooth structure and its chart construction. Assigned consumer: `thm-cm-liouville-arnold-action-angle-repaired`.

### `cor-cm-flow-domain-open-and-flow-is-c1` (current-run dependency)

- **Proof 1.1 — ill-formed, nonfatal.** The proof defines (H=\{z:\operatorname{dist}(z,K)\le\delta\}), then uses attainment of distance and that (H) is closed and bounded. No dependency defines point-to-set distance or proves these tube properties. Define (\operatorname{dist}(z,K)=\inf_{k\in K}\|z-k\|_2) and give the Lipschitz/compact-neighbourhood argument, or cite an exact result. The current source SHA-256 is `2bc03a3845a687cce09d762ec560dd85731143e8b58cb5c33b9cdaeba8cf917f`.
- **Proof 1.1 — ill-formed, fatal.** The proof also sets (L=\sup_H\|DF\|) and uses this operator norm in (hL\le1/2), but neither `def-jacobian-matrix-and-gradient` nor the direct dependencies define the operator norm on (DF(x):\mathbb R^n\to\mathbb R^n). Add the exact finite-dimensional operator-norm definition and the Euclidean norm convention. Assigned consumer: `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity`. Current source SHA-256: `2bc03a3845a687cce09d762ec560dd85731143e8b58cb5c33b9cdaeba8cf917f`.

### `thm-cm-smooth-dependence-and-the-variational-equation` (current-run dependency)

- **Statement line 51; Facts [F1], [F7], and estimates using (L) — ill-formed, fatal.** The statement defines (L=\sup\|DF\|) “with its operator norm” but cites only `def-jacobian-matrix-and-gradient`, which defines the Jacobian and gradient, not the operator norm. The proof uses this (L) for the Lipschitz and variational estimates. Add `def-operator-norm-on-a-finite-dimensional-inner-product-space` (and the Euclidean inner-product norm convention), or define the matrix norm and prove the bounds locally. Assigned consumer: `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity`. Current source SHA-256: `3a293015d3366fe24e0f962c4779922041cca5fe9f9f188f428d2765b62818c4`.

### Page summary: `cm-math-canonical`

- **Body paragraph beginning “The integrability layer is closed as follows” — overstrong title/statement, nonfatal.** The summary says the local Liouville–Arnold item gives a “complete local proof”; the current item leaves the regular-level facts, pullback naturality, and smooth fibre-constant factorization cited above unstated. Narrow that description or close those local proof obligations.

## Page verdicts

- `cm-math-canonical`: **Not accepted.** The page's mathematical scope and dependency ordering are coherent, but the action-angle proof and the current-run flow dependencies retain the findings above; its “complete local proof” summary is too strong as currently written.
- `cm-math-canonical-examples`: **Not accepted.** The free-particle, linear-shear, and oscillator computations check out. The cylinder-shift example inherits the missing smooth quotient structure from its assigned proposition.

## Edits, validation, and blocker

- Edits: none; this assignment is read-only.
- Reflow/precheck/proof-layout and other validators: not run; there were no authorized item edits.
- Blocker: none. The required findings and report were writable in this workspace.

The published `thm-liouville-arnold-action-angle-theorem` was opened because an assigned remark cites it. Its step 5.2 does invoke the one-form Poincaré lemma for a closed two-form, as the assigned remark says. It is not in the logical dependency closure of the assigned carriers, so it is not routed as a published-dependency finding from this batch.

## Coverage note

All two assigned pages, all 23 assigned items, the 17 proof-contract entries, the exact statements/definitions of the 87 distinct external direct suppliers, and the current-run suppliers needed for the flow claims were inspected. I did not independently re-audit every imported published supplier proof, run mechanical checks, or alter any assigned carrier. The source check focused on the cited action-angle passages and exact statements relevant to the reviewed claims.
