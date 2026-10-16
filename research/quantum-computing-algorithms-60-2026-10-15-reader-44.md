# Step 3a reader report — batch 44

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Verdict: reviewed; one in-scope proof prerequisite was made explicit; no unedited findings remain.

## Opened inventory

Assigned pages:

- A: `library/quantum-algorithms/hamiltonian-simulation-and-product-formulas.md`
- B: `library/quantum-algorithms/hamiltonian-simulation-and-product-formulas-examples.md`

Assigned A-page items, read before their consumers:

- `def-qa-20-simulation-error-and-cost-model`
- `def-qa-20-term-list-access-model`
- `def-qa-20-sparse-hamiltonian-oracle-model`
- `def-qa-20-first-order-product-formula`
- `def-qa-20-symmetric-second-order-formula`
- `rem-qa-20-higher-order-formula-proof-obligations`
- `thm-qa-20-first-order-commutator-error`
- `alg-qa-20-first-order-term-list-simulation`
- `thm-qa-20-second-order-conservative-error`
- `alg-qa-20-suzuki-recursive-product-formula`
- `thm-qa-20-first-order-resource-bound`
- `lem-qa-20-suzuki-order-cancellation`
- `thm-qa-20-suzuki-conservative-error-and-resources`

Assigned B-page items:

- `ex-qa-20-commuting-two-term-simulation`
- `cex-qa-20-sparse-oracle-does-not-give-term-list`
- `ex-qa-20-noncommuting-pauli-error`

Direct supplier items opened for the assigned claims and proofs:

- `def-qa-19-finite-matrix-dynamics`
- `def-operator-norm-on-a-finite-dimensional-inner-product-space`
- `def-inner-product-norm`
- `cor-triangle-inequality-for-inner-product-norm`
- `def-self-adjoint-and-normal-endomorphism`
- `cor-operator-norm-submultiplicative-and-t-star-t-identity`
- `thm-operator-norm-is-the-largest-singular-value`
- `thm-singular-value-decomposition`
- `thm-qa-19-matrix-exponential-unitary-properties`
- `thm-nth-roots-exist`
- `lem-power-monotone`
- `def-qc-circuit-cost-model`
- `def-qc-controlled-unitary-access`
- `def-qc-inverse-unitary-access`
- `def-qc-uniform-circuit-family`
- `def-qc-clean-and-dirty-ancillas`
- `def-qc-circuit-denotational-semantics`
- `def-qc-coherent-function-oracle`
- `thm-qc-reversible-xor-oracle-unitary`

Required page summaries opened:

- `library/quantum-algorithms/continuous-time-quantum-walks.md`
- `library/quantum-computing/uniform-circuit-families-promise-problems-and-complexity.md`
- `library/quantum-computing/controlled-gates-phase-and-entanglement.md`
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`
- `library/quantum-computing/reversible-computation-ancillas-and-coherent-oracles.md`

Primary source passages opened:

- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, Chapter 27 §27.3, printed pp. 134–135: commuting and noncommuting product formulas, finite-step error context; §27.4, printed pp. 135–136: sparse Hamiltonian access and simulation. <https://www.cs.umd.edu/~amchilds/qa/qa.pdf>
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, Chapter 9 §§9.1–9.2, printed pp. 71–74: operator-norm simulation and first-order product formulas; §9.4 Example 2, printed pp. 76–77: sparse entry-value and location oracles; Exercise 1, printed p. 78: the Pauli $X,Z$ product differs from the exponential of their sum; Exercise 4, printed p. 78, Eq. (9.7): the symmetric two-term formula has a local $O(\eta^3)$ error. <https://arxiv.org/pdf/1907.09415>

## Edits and evidence

The Suzuki recursion and cancellation lemma used $\rho_q<4$ to conclude that $p_j>1/4$ and the central coefficient $1-4p_j$ is negative. The previously cited root-existence theorem supplies the nonnegative root but does not state monotonicity of powers. I added the published supplier `lem-power-monotone` to the `deps` of `alg-qa-20-suzuki-recursive-product-formula` and `lem-qa-20-suzuki-order-cancellation`; the algorithm now cites monotonicity in its negative-time instruction, and the lemma records it as Fact [F7] and uses it in proof step 1.2. The supplier gives strict increase of $x\mapsto x^q$ on nonnegative reals and increase of $4^q$ for $q>1$. With $\rho_q^q=4$ and $q\ge3$, this proves $\rho_q<4$, hence the required negative signed-time access condition.

Regenerated the proof-contract entries for `lem-qa-20-suzuki-order-cancellation` and its consumer `thm-qa-20-suzuki-conservative-error-and-resources` from the current item text using `tools/regen-contract-entries.mjs`. The latter entry's citation now reflects the updated algorithm definition. Neither changed item had a `verification.judge` record to remove.

Source locator review confirmed the existing de Wolf locator corrections in the current items: Exercise 1 and Exercise 4 are on printed p. 78, and Eq. (9.7) is the cited symmetric second-order local-error statement. Childs §27.3 and §27.4, and de Wolf §9.4 Example 2, support the stated product-formula and sparse-access context. No citation edits were needed in this review.

Validation after the repair:

- `reflow` on both changed items: `unchanged`.
- `precheck` on `alg-qa-20-suzuki-recursive-product-formula`: 0 proof sections checked, 0 failures (definition-like algorithm).
- `precheck` on `lem-qa-20-suzuki-order-cancellation`: pass, 1 proof checked, 0 failures.
- Final batched `proof-layout` on both changed paths: 2 items, 3 steps, 0 defects.

## Defects not edited

None identified in the assigned carriers or the dependency statements opened for this review.

The short norm manipulations in `thm-qa-20-first-order-commutator-error` steps 2.1, 3.1, and 4.1; `thm-qa-20-second-order-conservative-error` steps 3.1 and 4.1; `thm-qa-20-first-order-resource-bound` steps 2.1 and 3.1; `thm-qa-20-suzuki-conservative-error-and-resources` steps 1.1, 3.1, and 4.1; and `ex-qa-20-noncommuting-pauli-error` steps 2.1 and 4.1 follow from the maximum-over-unit-vectors definition, homogeneity, and the vector triangle inequality. Those norm axioms are supplied by `def-inner-product-norm` and `cor-triangle-inequality-for-inner-product-norm`; the one-line applications are nonfatal. The used unitary norm identities follow from the spectral diagonal form in `thm-qa-19-matrix-exponential-unitary-properties` step 2.1 and its coefficient calculation in step 3.1 (the reverse product is the same finite sum of orthogonal projections).

## Page verdicts

- `hamiltonian-simulation-and-product-formulas` (A): pass after the in-scope repair. The summary matches the finite-dimensional model, the distinction between term-list and sparse access, the proved error/resource claims, and the explicit access-cost caveats.
- `hamiltonian-simulation-and-product-formulas-examples` (B): pass. The commuting identity, Pauli commutator calculation, and diagonal sparse-oracle witness support the summary and its stated limitation to the canonical term list.

## Blocker and coverage limit

At review start, the live run status reported a global `1-scaffold` blocker: invalid construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. It also showed reader 44's earlier three failed attempts in `3a-read`. Neither prevented this review; this task report and findings file record the current review result. These run-level statuses are outside batch 44.

I reviewed every assigned page and item, the five required page summaries, the direct item suppliers listed above, and the cited source passages. I did not audit every deeper prerequisite in the full transitive closures of those suppliers or every item listed on their required pages.
