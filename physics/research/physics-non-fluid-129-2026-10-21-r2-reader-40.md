# Step 3a reader report — batch 40

Run: **physics-non-fluid-129-2026-10-21-r2**  
Role: independent reader  
Scope: batch **40**

## Opened inventory

The assigned pages were read in full:

- A page **gr-fx12-covariant-phase-space** at **library/general-relativity/gr-fx12-covariant-phase-space.md**.
- B page **gr-fx12-covariant-phase-space-examples** at **library/general-relativity/gr-fx12-covariant-phase-space-examples.md**.

The assigned items were read in dependency order:

1. **def-gr-fx-covariant-field-variations**
2. **lem-gr-fx-star-shaped-poincare-homotopy**
3. **lem-gr-fx-differentiation-under-finite-chain-integral**
4. **def-gr-fx-covariant-presymplectic-current**
5. **lem-gr-fx-variation-commutator-identity**
6. **prop-gr-fx-field-space-closedness**
7. **prop-gr-fx-on-shell-current-closure**
8. **prop-gr-fx-potential-ambiguity**
9. **prop-gr-fx-diffeomorphism-current-identity**
10. **def-gr-fx-admissible-phase-reduction**
11. **def-gr-fx-surface-charge-integrability**
12. **ex-gr-fx12-1**
13. **ex-gr-fx12-2**

The eight page prerequisites named by the A page were also opened. Each has a canonical published page carrier: **gr-einstein-and-matter**, **gr-local-and-global-energy**, **hamiltonian-mechanics-and-completely-integrable-systems**, **symplectic-manifolds-moser-stability-and-darboux-weinstein-theory**, **smooth-vector-bundles-and-sections**, **line-integrals-and-the-gradient-theorem**, **singular-cochains-mayer-vietoris-and-smooth-singular-comparison**, and **the-riemann-integral-in-rn-and-jordan-content**. No reverse requires edge to either assigned page appears in these carriers; the B page requires the A page. These page prerequisites supply context rather than unstated premises in the mathematical proofs. The batch-40 cross-batch dependency file is empty.

The 29 direct published mathematical item suppliers were read at their exact statements and proof-status fields:

- **def-smooth-fibre-bundle-and-local-trivialization**; **def-c-r-and-smooth-maps-between-smooth-manifolds**; **def-star-shaped-open-subset-of-rn**; **def-smooth-differential-k-form**; **def-pullback-of-a-differential-form**; **thm-the-exterior-derivative-commutes-with-pullback**; **thm-differentiation-under-the-integral-sign-on-a-compact-rectangle**; **thm-newton-leibniz-with-interior-derivative**.
- **def-smooth-singular-chain-and-cochain-complexes**; **def-integral-of-a-form-over-a-smooth-singular-simplex**; **def-riemann-integral-over-a-jordan-set**; **def-multidimensional-darboux-integral**; **def-multidimensional-rectangle-and-volume**; **thm-heine-borel-rn**; **thm-heine-cantor-metric**.
- **def-exterior-derivative-by-the-invariant-vector-field-formula**; **thm-the-exterior-derivative-squares-to-zero**; **thm-stokes-theorem-for-smooth-singular-chains**; **thm-cartans-magic-formula**; **def-lie-derivative-of-a-differential-form**; **def-lie-derivative-of-a-tensor-field**.
- **def-symplectic-form-and-symplectic-manifold**; **prop-symplectic-reduction-of-a-coisotropic-vector-subspace**; **def-hamiltonian-vector-field-and-hamiltonian-function**; **def-poisson-bracket-on-a-symplectic-manifold**; **def-immersion-submersion-and-constant-rank-map**; **def-wedge-product-of-differential-forms**; **thm-the-exterior-derivative-is-a-graded-derivation**; **thm-local-coordinate-formula-for-the-exterior-derivative**.

All 29 are marked published with audited verification, and their current raw item hashes match **research/math-imports.json**. Additional transitive context inspected where needed included **def-standard-orientation-of-the-affine-simplex**, **def-symplectic-vector-space**, **cor-volume-under-a-continuous-graph-over-a-jordan-base**, **thm-continuous-functions-on-compact-jordan-sets-are-integrable**, and **thm-invertible-matrix-theorem**. The latter's current physics snapshot, root original, and import record all match SHA-256 **1286785cdca44b1faf70f2c24d971d1510c06a1ff97c98f2a2849af423a49d51**; the earlier batch note's import-drift observation is no longer current.

The cited local full-text sources were read at the sections used by the items:

- Iyer and Wald, *Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy*: §3, equations (40)–(48), and §4, equations (49)–(51), in **research/physics-non-fluid-129-2026-10-21-r2-batch-40-sources/raw/iyer-wald-1994.pdf** ([source](https://arxiv.org/pdf/gr-qc/9403028)).
- Compère and Fiorucci, *Advanced Lectures on General Relativity*: Lecture 1, §§1.3.1–1.3.3 and §1.4.2, in **research/physics-non-fluid-129-2026-10-21-r2-batch-40-sources/raw/compere-fiorucci-2019.pdf** ([source](https://arxiv.org/pdf/1801.07064)).
- Harlow and Wu, *Covariant phase space with boundaries*: §§2.2–2.4 and §3.2, in **research/physics-non-fluid-129-2026-10-21-r2-batch-40-sources/raw/harlow-wu-2020.pdf** ([source](https://arxiv.org/pdf/1906.08616)).

## Review and repairs

The covariant-current definition initially did not require smooth dependence of the chosen Euler functional and potential on the field and variation jets, although later definitions differentiate both in parameter directions. Its Definition now makes them smooth finite-order local differential expressions, linear in the variation jets, with smooth dependence on spacetime coordinates, fields and fixed backgrounds. The direct and indirect consumers on this page were checked; their field families and local potentials meet this condition. No outside item or page consumer was found in the current items/ or library/ content.

The Statement and Facts & Assumptions of **prop-gr-fx-on-shell-current-closure** now require a smooth two-parameter family with commuting coordinate variations. They define the linearized equation as the vanishing of the coefficient derivative of the Euler functional on every fixed smooth test variation. This is the exact hypothesis used by **lem-gr-fx-variation-commutator-identity**. Both examples provide such families and satisfy the strengthened condition.

The Statement of **prop-gr-fx-potential-ambiguity** now requires the ambiguity forms to be smooth finite-order local expressions and requires the variation dependence of Y to be linear. These conditions license the displayed parameter derivatives. The Iyer–Wald reference locator was narrowed to equations (40)–(44), which state the potential ambiguity and current order used here. The local derivation in step 2.1 gives the displayed corner sign. In the source, equation (47) prints the opposite sign for the integrated ambiguity despite equations (43)–(44); the item now records this discrepancy explicitly and does not use equation (47) for its sign.

**lem-gr-fx-differentiation-under-finite-chain-integral** now states that the smooth simplex pullback coefficients are integrable on the compact Jordan simplex. Its proof step 1.1 cites that premise before using Darboux linearity and zero extension. This follows from the inspected definition of the smooth-simplex integral and its audited well-definedness suppliers, including the continuous-on-compact-Jordan integrability result.

In **ex-gr-fx12-1**, Verification step 3.1 now verifies exact singular-chain cancellation: adjacent coordinate-order sectors have identical ordered face maps and opposite coefficients, while opposite cube faces have identical ordered maps after translation and the quotient map, with opposite induced orientations.

**ex-gr-fx12-2** had an ill-formed determinant product in Verification's Given paragraph: it used undefined ell-zero and omitted ell-four. The product is now ell-one through ell-four. Verification step 1.2 proves the coordinate-order triangulation, internal-face cancellation, top and bottom cut chains, and side-face orientations. The explicit scalar-current calculation, cut integral, side flux, and balance identity all check:

- The current is $(x^2-t^2)\,dx\wedge dy\wedge dz-2tx\,dt\wedge dy\wedge dz$, and $d\omega=0$.
- The cut integral is $L^3/3-Lt^2$, so the cut difference is $-L(t_2^2-t_1^2)$.
- The oriented side flux is $L(t_2^2-t_1^2)$, with signs matching the outward-normal-first convention and Stokes' identity.

The TikZ diagram in **ex-gr-fx12-2** is a correct t–x projection of the box: it labels the constant-time cuts and the x-side faces, identifies the suppressed y,z directions in its caption, and is consistent with the stated orientation convention. The proof is independent of the diagram.

The remaining mathematical claims were reviewed without further source changes. The smooth-family variation definition has the required bundle map and regularity data; the star-shaped homotopy proof handles the endpoints and all $1\le k\le n$; the variation-commutator sign matches the Iyer–Wald ordering; field-space closedness follows from finite-chain differentiation and $d_P^2=0$; the diffeomorphism-current identity is conditional on the stated smooth lift and covariance; the phase-reduction definition requires an actual quotient submersion and descended symplectic form; and surface-charge integrability correctly distinguishes local primitives from global exactness. As recorded above, the star-shaped lemma's new remark clarifies that the cited GR sources use local exactness for their Noether currents, while the general k-form homotopy formula is proved in the displayed local argument.

The proof-contract file was updated with current supplier-section quotes and changed proof derivations, including the new example-2 step. No edited item had a stale verification.judge record.

## Page verdicts

- **Pass — gr-fx12-covariant-phase-space.** Draft physics page metadata, its 11 assigned A-page placements, published prerequisites, and the mathematical scope of its items are coherent. The assigned repairs close the identified local regularity and hypothesis gaps.
- **Pass — gr-fx12-covariant-phase-space-examples.** Draft physics B page requires the A page and places the two examples as examples. Both calculations and the diagram are correct after the chain and determinant repairs.

## Validation

- Reflow and precheck were run for all seven changed items. Each precheck passed; the definition item reported 0 proof steps checked and 0 failing, as expected.
- Final batched proof-layout: 7 items, 25 proof steps, 0 defects.
- No page edits or dependency-metadata changes were made.

## Remaining findings and blockers

No uneditable in-scope defects remain. There is no blocker.

## Coverage limitation

I checked the actual statements and hypotheses of every direct mathematical supplier and inspected transitive items where needed to resolve a use. I did not independently re-audit every proof in the much larger transitive foundations of the published mathematics library.
