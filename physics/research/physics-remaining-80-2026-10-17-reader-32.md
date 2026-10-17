# Step 3a reader report — batch 32

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `32`

## Opened inventory

The batch manifest and `research/physics-remaining-80-2026-10-17-batch-32.proof-contracts.json` were used as navigation and contract evidence, not as verdicts.

Assigned pages opened:

- `library/classical-statistical-mechanics/csm-collision-transport.md` (A page).
- `library/classical-statistical-mechanics/csm-collision-transport-examples.md` (B page).

All ten assigned items opened:

- `def-csm-dk-reflection-collision-gain`
- `lem-csm-dk-reflection-measure-and-gain-identities`
- `def-csm-dk-kinetic-macroscopic-fields`
- `post-csm-dk-selected-cutoff-kinetic-model`
- `lem-csm-dk-gaussian-mixture-regularity`
- `thm-csm-dk-exact-kinetic-moments`
- `thm-csm-dk-global-cutoff-collision-evolution`
- `thm-csm-dk-regular-collision-h-and-equality`
- `pthm-csm-dk-qualified-kinetic-entropy`
- `cex-csm-dk-moments-do-not-close-stress`

The direct published mathematical suppliers opened for the item claims were `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-gaussian-integral`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-banach-fixed-point`.

The five prerequisite pages named in the batch manifest were also opened: `library/real-analysis/improper-and-parameter-dependent-multiple-integrals.md`, `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md`, `library/thermodynamics-mathematics/td-math-mixture-dynamics-and-shells.md`, `library/measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md`, and `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`. For the A-page summary review, I additionally opened the companion `td-math-mixture-dynamics-and-shells-examples` page and the published items `def-tdmath-elastic-collision-kernel` and `thm-tdmath-regular-collision-entropy`.

## Edits and evidence

1. In `items/lem-csm-dk-reflection-measure-and-gain-identities.md`, the signed parameter-integral argument in step 2.1 now selects a finite Borel representative before applying Fubini over the angular variable. This supplies the joint measurability required by the product theorem. Step 4.1 now makes the same representative reduction for the merely Lebesgue-measurable test function in the Statement, identifies the null exceptional sets for incoming and reflected variables, and applies the fixed-normal change of variables only for almost every normal where the integrand is integrable. These additions close the measurability and integrability gap for the stated test class. The exact cited hypotheses are in the local Facts [F2]–[F4]; the affected proof-contract derivations and use mappings were updated. No `verification.judge` record was present.

2. In `items/cex-csm-dk-moments-do-not-close-stress.md`, the title and refuted statement now identify `u` as a vector-valued mean velocity and `n,e` as scalar fields. Step 1.1 chooses covariance bounds `a_* = min{alpha,beta,gamma}` and `b_* = max{alpha,beta,gamma}`; positivity and `alpha != beta` ensure `0 < a_* < b_*` and both covariance matrices belong to the Gaussian supplier's stated `K_{a_*,b_*}`. The witness calculations in step 2.1 give the same `n`, `u`, and `e` but distinct `Pi`. The proof contract's witness derivations and finite check were updated. No `verification.judge` record was present.

3. In `library/classical-statistical-mechanics/csm-collision-transport.md`, the final summary paragraph had described the thermodynamics mathematics page as still planned and said the assigned reflection measure lacked the particle-pair symmetries required by its collision-entropy theorem. The current page is published. Its theorem, `thm-tdmath-regular-collision-entropy`, assumes a symmetric weak collision identity; the published kernel definition lists incoming-pair, outgoing-pair, and incoming/outgoing exchange symmetries. The assigned reflection item proves the orthogonal pre/post involution in step 1.1, particle-exchange symmetry in step 3.1, and the corresponding weak identity in step 4.1. The summary now records that evidence and accurately distinguishes related context from a proof prerequisite.

4. Numbered proof steps in the seven changed proof-bearing items were separated by blank lines as required. The proof bodies were otherwise preserved apart from the repairs above.

The two source citations in the selected-model and entropy items were checked against their cited primary sources. Tong's *Kinetic Theory*, §§2.2.1–2.2.3, printed pp. 20–32, covers the Boltzmann collision formulation, molecular-chaos assumption, and elastic-scattering context used by the postulate; §2.3, printed pp. 33–35, presents the H-theorem under that model's assumptions. Fitzpatrick's “Boltzmann H-Theorem,” equations (3.123)–(3.144), covers the homogeneous collision equation, entropy-production identity, and Maxwellian form. These sources provide context for the adopted model and local derivation; neither is treated as evidence that nature follows the selected phenomenological law. [Tong PDF](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf), [Fitzpatrick section](https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html).

## Validation

- Reflow was run on all seven changed items; each was unchanged by the formatter.
- Precheck passed for all seven changed items: `lem-csm-dk-reflection-measure-and-gain-identities`, `lem-csm-dk-gaussian-mixture-regularity`, `thm-csm-dk-exact-kinetic-moments`, `thm-csm-dk-global-cutoff-collision-evolution`, `thm-csm-dk-regular-collision-h-and-equality`, `pthm-csm-dk-qualified-kinetic-entropy`, and `cex-csm-dk-moments-do-not-close-stress`.
- Final proof-layout check: 7 items, 35 steps, 0 defects.

## Page verdicts

- `csm-collision-transport`: pass after the summary correction. The assigned model is explicitly restricted and phenomenological; its physical theorem is conditional on that adoption and uses no empirical premise.
- `csm-collision-transport-examples`: pass. The page prose accurately presents the counterexample as mathematical, and its assigned witness now matches the definitions and covariance-class hypotheses.

## Uneditable findings and blockers

None. No remaining defect was identified in the assigned pages or items. The imported published suppliers were reviewed at their exact statements and hypotheses; their full transitive proof closures were not re-audited in this batch. No measurements or statistical claims are present, and no blocker remains.
