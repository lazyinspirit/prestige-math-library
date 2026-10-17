# Independent reader report — batch 46

Run: `physics-remaining-80-2026-10-17`  
Batch: `46`  
Role: Step 3a reader

## Scope and opened inventory

Assigned pages opened:

- `library/quantum-statistical-mechanics/qsm-interacting-exact-models.md`
- `library/quantum-statistical-mechanics/qsm-interacting-exact-models-examples.md`

All thirteen assigned item carriers were opened in supplier-before-consumer order:

- Mathematical supports: `def-qsm-pauli-two-qubit-conventions`, `def-qsm-finite-two-qubit-state-and-separability`, `lem-qsm-pauli-dimer-spectrum`, `lem-qsm-qubit-bloch-ball`, `lem-qsm-pauli-separable-correlation-bound`, `lem-qsm-pauli-boundary-mixture`.
- Mathematical threshold theorem: `thm-qsm-models-dimer-entanglement`.
- Physical theorems: `pthm-qsm-interacting-dimer-gibbs`, `pthm-qsm-commuting-lattice-countermodels`, `pthm-qsm-onsite-interacting-atoms`.
- Examples: `ex-qsm-interacting-dimer-gibbs`, `ex-qsm-commuting-lattice-countermodels`, `ex-qsm-onsite-interacting-atoms`.

I opened the exact current statements and proofs of all 32 unique direct item suppliers. For compactness, they are grouped here:

- `def-complex-metric-convergence-and-continuity`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `thm-nth-roots-exist`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-countable-choice`.
- `def-natural-logarithm`, `def-real-exponential-function-and-e`, `def-hyperbolic-functions`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`, `thm-exponential-beats-every-polynomial`, `thm-natural-logarithm-laws`, `thm-chain-rule`.
- `def-real-analytic-function`, `def-real-analytic-germ-in-several-variables`, `thm-power-series-sums-are-real-analytic`, `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`, `thm-real-analytic-inverse-and-implicit-function-theorems`, `thm-power-series-define-holomorphic-functions-in-several-variables`, `thm-absolute-convergence-of-complex-series`, `thm-geometric-series`, `thm-direct-comparison-test`.
- `post-qsm-models-statistics-and-preparation`, `lem-qsm-fock-occupation-basis-and-car-relations`, `lem-qsm-models-diagonal-occupation-trace`, `pthm-csm-ising-ring-correlation`, `pthm-csm-nonadditive-phase-countermodel`, `thm-tdmath-grand-response-covariance`, `thm-tdmath-ising-chain-limit`.

For the relevant Fock and preparation context, I also opened `def-qsm-identical-particle-fock-sectors`, `lem-nrqm-composites-permutation-sector-projections`, and the state/preparation clauses of `post-nrqm-framework-state-and-composition`. The three assigned A-page prerequisites were inspected at page level: `qsm-bose-fermi-gases`, `csm-fluctuations-countermodels`, and the imported published mathematics page `holomorphic-functions-of-several-variables` at `library/complex-analysis/holomorphic-functions-of-several-variables.md`.

I read the current batch manifest, the batch-46 cross-batch dependency and dependency-input records, proof contracts, coverage notes, and check-results as navigation/evidence only. I did not adopt author verdicts as review conclusions. I compared the current contract derivation step IDs with current proof paragraphs: all eleven proof-bearing carriers have matching step sets, while the two definitions correctly have no proof derivations; all thirteen contracts record eight boundary cases with `checked` or `not_applicable` dispositions.

## Item review and verdicts

| Item | Independent review |
|---|---|
| `def-qsm-pauli-two-qubit-conventions` | The finite spaces, ordered bases, linear-first inner products, adjoint, tensor action, trace, Pauli matrices, and dimensionless exchange matrix are explicit. The displayed exchange matrix and Hermiticity claims check by direct multiplication. |
| `def-qsm-finite-two-qubit-state-and-separability` | Positivity, trace one, product states, finite convex separability, and entanglement are defined. The two positive-semidefinite $2\times2$ cases used to justify tensor-product positivity are handled, including a zero diagonal entry. |
| `lem-qsm-pauli-dimer-spectrum` | The matrix and eigenvectors yield the stated singlet eigenvalue (-3) and triplet eigenvalue (1); the four displayed vectors form an orthonormal basis. |
| `lem-qsm-qubit-bloch-ball` | The coordinates and trace identities are computed explicitly. The quadratic-form argument proves positivity exactly for $\lVert a\rVert\le1$, including the boundary and zero-pivot cases. |
| `lem-qsm-pauli-separable-correlation-bound` | Product expectations reduce to the real Bloch-vector dot product, Cauchy–Schwarz supplies the bound, and finite convexity extends it to every state under the stated separability convention. |
| `lem-qsm-pauli-boundary-mixture` | The six product-state witness is normalized, each factor is a density matrix, and expansion gives exactly \(\frac14(I_4-C/3)\). |
| `thm-qsm-models-dimer-entanglement` | The singlet weight and exchange expectation give the necessary entanglement test; the explicit convex decomposition proves the converse and includes the equality state. The theorem is purely mathematical and uses only its declared finite-state convention. |
| `pthm-qsm-interacting-dimer-gibbs` | The finite Hamiltonian, domain, joule units, inverse-energy parameter, and positive-trace Gibbs preparation are explicit. The common eigenbasis gives the energy levels and trace. The zero-field threshold, zero-temperature multiplicities, and finite-temperature analyticity follow conditionally; no measured or material-specific behavior is claimed. |
| `pthm-qsm-commuting-lattice-countermodels` | The product basis diagonalizes the periodic model with the same indexed-bond convention as the cited ring result, including $N=2$. The separate direct-sum countermodel has explicit multiplicities, shell, and finite law; its global non-product-additive scope is preserved. The limit claims use the exact hypotheses of the opened suppliers. |
| `pthm-qsm-onsite-interacting-atoms` | The Bose/Fermi spaces, energy parameters, maximal diagonal domains, and \(\mathrm{AC}_\omega\) premise are specified. The quadratic Bose tail proves finite trace; consecutive energy increments prove the plateaus and two-state boundary; the entropy tail bound establishes the stated limits. The two-mode Fermi trace and covariance factorization check algebraically. The compact envelope supports the response derivative. |
| `ex-qsm-interacting-dimer-gibbs` | The example is a direct specialization of the exact threshold and distinguishes the state-property boundary from analyticity of the finite dimer. |
| `ex-qsm-commuting-lattice-countermodels` | At the specified finite parameters, the canonical middle-sector probability is $1/9$, while the stated singleton shell gives probability $1$; it keeps the finite and limiting claims separate. |
| `ex-qsm-onsite-interacting-atoms` | The Fermi covariance and the (r=1) Bose boundary are correctly substituted from the theorem, with the countable-choice premise retained. |

No assigned item has a confirmed false claim, undefined essential object, missing hypothesis, or proof gap requiring a finding. The physical items consistently distinguish adopted model assumptions from derived conclusions and make no empirical claim. I found no inaccurate item link or source attribution used as a logical premise.

## Page verdicts

- `qsm-interacting-exact-models`: **No defect found.** The A page lists its ten assigned items. Its summary accurately states the Pauli dimer units and exact finite-state scope, then separately limits the commuting Ising, global countermodel, and onsite calculations. The level sketch identifies its scale and does not supply proof evidence.
- `qsm-interacting-exact-models-examples`: **No defect found.** The B page lists all three assigned examples, and its summary characterizes them as conditional finite-model calculations without presenting observations.

## Edits and uneditable findings

No item or page was edited. There is no uneditable scientific defect to route, so the findings array is empty. No validator or proof-layout command was run by this reader; the source files were unchanged. The previously recorded author checks were treated as evidence only.

## Source and dependency evidence

The local proofs carry the exact deductions. As source-convention checks, Cohen’s §2.3 states the two-spin Pauli exchange $H=\epsilon\,\sigma_a\cdot\sigma_b$, gives singlet/triplet energies $-3\epsilon$ and $\epsilon$, and writes the corresponding partition function ([Cohen, *Lecture Notes in Statistical Mechanics and Mesoscopics*, §2.3](https://arxiv.org/pdf/1107.0568#page=10)). Markham et al., Example 1, Eqs. (8)–(10), use the same zero-field Pauli exchange convention and give the threshold $T=4J/(k_B\log3)$, equivalently $\beta J=\log3/4$; they note this matches the exact result they cite ([Markham et al., *Survival of entanglement in thermal states*, Example 1](https://arxiv.org/pdf/quant-ph/0606103#page=4)). Their displayed criterion is a sufficient condition; the assigned local proof independently establishes the exact iff statement and separability at equality.

The cited formal contexts also match their stated use: Watrous §2.1.2 defines density operators ([PDF p. 5](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf#page=5)) and §2.1.3 defines product states ([PDF p. 8](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf#page=8)); Bloch, Dalibard, and Zwerger §IV.A discusses the Bose-Hubbard model with on-site repulsion ([PDF p. 22](https://arxiv.org/pdf/0704.3011#page=22)) and §IV.E the single-band two-spin fermion Hubbard model ([PDF p. 30](https://arxiv.org/pdf/0704.3011#page=30)). These references contextualize the ideal models; the assigned finite trace, covariance, and threshold deductions are proved locally.

The current cross-batch suppliers were checked in their source items: batch 34's published `thm-tdmath-ising-chain-limit`; batch 35's draft `pthm-csm-ising-ring-correlation` and `pthm-csm-nonadditive-phase-countermodel`; and batch 45's `post-qsm-models-statistics-and-preparation`, `lem-qsm-models-diagonal-occupation-trace`, and `lem-qsm-fock-occupation-basis-and-car-relations`. No defect was found in the interfaces used by batch 46.

## Blockers and coverage limits

There is no scientific blocker to this review. The stored batch-46 dependency-input evidence marks run-level schedule reconciliation as owner work because the current graph includes batch 34 as a direct supplier. The live shared schedule row I inspected now lists batch 46 at level 3 with requirements `[34, 35, 45]`; I did not recompute or recertify the shared scheduling input. This metadata observation does not affect the mathematical review of the present published supplier.

Coverage was limited to the thirteen assigned items, both assigned pages, their 32 direct item suppliers, and the specific Fock/QSM upstream context stated above. I did not inspect the full transitive item closure or independently retrieve every source listed in the authored coverage file. No conclusion about those uninspected indirect carriers is made; this review checks batch 46's uses against the exact statements and proofs of its directly opened suppliers.
