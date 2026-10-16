# Step 3a reader report — batch 24

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Label: `reader-24`

## Opened inventory

Assigned pages, opened in full:

- `library/quantum-computing/state-preparation-isometry-synthesis-and-limits.md` (A)
- `library/quantum-computing/state-preparation-isometry-synthesis-and-limits-examples.md` (B)

Assigned items, read in dependency order (21 total):

- Level 0: `lem-qc-countable-compact-null-union`, `lem-qc-open-cube-is-not-null`.
- Levels 2–4: `def-qc-projective-chord-distance`, `def-qc-projective-space-atlas`, `lem-qc-projective-chord-distance-formula`, `thm-qc-projective-chart-dimension`, `lem-qc-signed-ray-packing-code`.
- Level 9: `def-qc-clean-ancilla-output-projection`, `def-qc-state-preparation-cost-model`.
- Level 10: `alg-qc-isometry-unitary-completion`, `alg-qc-state-preparation`, `thm-qc-continuous-parameter-state-preparation-lower-bound`, `thm-qc-finite-width-topology-count`.
- Levels 11–12: `lem-qc-prefix-norm-rotation-identities`, `thm-qc-discrete-alphabet-approximate-preparation-lower-bound`, `thm-qc-finite-alphabet-exact-nonuniversality`, `thm-qc-isometry-completion-and-synthesis`, `thm-qc-state-preparation-rotation-level-upper-bound`.
- Level 13: `thm-qc-amplitude-table-precision-and-compilation`, `thm-qc-state-preparation-cost`, `ex-qc-amplitude-table-state-preparation-cost`.

The A-page’s ten prerequisite pages were also opened: `approximate-universality-and-solovay-kitaev`, `circuit-syntax-denotational-semantics-and-measurement`, `clifford-t-exact-and-approximate-synthesis`, `continuous-gate-universality-and-exact-synthesis`, `controlled-gates-phase-and-entanglement`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `reversible-computation-ancillas-and-coherent-oracles`, and `sard-theorem-and-transversality`.

Relevant dependency statements and constructions opened included: `def-null-and-content-zero-in-rn`, `thm-heine-borel-rn`, `def-multidimensional-rectangle-and-volume`, `thm-binomial-theorem`, `def-finite-sum`, `def-series`, `lem-finite-sum-laws`, `thm-nonnegative-series-bounded-partial-sums`, `thm-recursion`, `thm-well-ordering-principle`, `def-nat-addition`, `def-nat-order`, `thm-nat-linear-order`, `thm-rationals-countable`, `thm-n-cross-n-countable`, `lem-rat-embeds-dense`, `def-integer-power`, `thm-compactness-under-continuous-maps`, `thm-morse-sard-for-euclidean-maps`, `thm-r-uncountable`, `thm-rank-nullity`, `cor-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-triangle-inequality-for-inner-product-norm`, `def-real-and-complex-inner-product-space`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-qc-pure-state-and-ray`, `thm-qc-ray-projector-well-defined-and-bijective`, `def-qc-dirac-notation-conversion`, `def-qc-elementary-circuit-resources`, `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `def-qc-ordered-bitstring-encoding`, `def-qc-clean-and-dirty-ancillas`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-controlled-unitary-access`, `def-qc-pauli-matrices`, `def-qc-toffoli-and-fredkin`, `thm-qc-axis-rotation-pauli-formula`, `thm-qc-computational-basis-orthonormal`, `thm-polar-form-with-unique-principal-argument`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-qc-finite-width-topology-count`, `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`, `thm-qc-two-qubit-unitary-three-cnot-synthesis`, `lem-qc-multiplexed-axis-rotation-gray-code`, `lem-qc-two-unitary-block-demultiplexing`, `thm-qc-cosine-sine-block-decomposition`, `thm-qc-one-qubit-euler-decomposition`, `lem-qc-terminal-diagonal-migration`, `lem-qc-recursive-qsd-central-cz-absorption`, `thm-qc-fixed-arity-unitary-error-budget`, `alg-qc-solovay-kitaev-unitary-compiler`, `thm-qc-solovay-kitaev-error-and-resource-bound`, `def-qc-inverse-closed-dense-su2-gate-set`, `lem-qc-compact-su2-base-net`, `lem-qc-su2-balanced-commutator`, and `lem-qc-commutator-error-cancellation`.

Additional relevant dependency sections opened for the norm, calculus, and compilation steps: `def-inner-product-space`, `def-inner-product-norm`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `thm-logarithm-derivative-and-integral`, `cor-mean-value-theorem`, `thm-natural-logarithm-laws`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `cor-differentiable-implies-continuous`, `def-derivative`, `def-function-limit`, `thm-closed-unit-ball-compact-iff-finite-dimensional`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `def-non-negative-and-positive-operator`, `thm-of-square-roots`, `def-natural-logarithm`, `lem-integer-part`, `lem-qc-su2-near-identity-logarithm`, `lem-qc-pauli-vector-multiplication`, and `thm-sine-and-cosine-derivatives`.

## Repairs and evidence

1. In `lem-qc-countable-compact-null-union` and `lem-qc-open-cube-is-not-null`, the enlargement estimate invoked the binomial formula without listing or citing its supplier. Added `thm-binomial-theorem` to each dependency list and recorded the exact formula as a fact used in the respective expansion steps.
2. In `thm-qc-state-preparation-cost`, “using $D-1$ variable-control rotations” was too strong: `alg-qc-state-preparation` skips a rotation whenever the prefix radius is zero. Changed the claim and derivation to “at most $D-1$,” matching `thm-qc-state-preparation-rotation-level-upper-bound`.
3. In `thm-qc-continuous-parameter-state-preparation-lower-bound`, Step 3.1 applied compact-image preservation to rational closed cubes without establishing that the cubes are compact. Added `thm-heine-borel-rn` as a dependency and fact, cited it in Step 3.1, and corrected F10: rational open cubes form the countable basis, while rational closed cubes contained in the open parameter domain give the compact cover.
4. In `thm-qc-isometry-completion-and-synthesis`, the width-zero synthesis clause relied on the QSD supplier’s unsupported general scalar case. Added the circuit syntax and denotation prerequisites and clarified that when $w=0$, the matrix completion remains valid but an exact zero-wire circuit exists only for $V=I$.

Updated the batch proof contracts for all five edited items. Reflow reported each item unchanged; precheck passed for all five. The final batched proof-layout run reported `5 items, 21 steps, 0 defects`.

## Uneditable finding

`thm-qc-exact-arbitrary-unitary-qsd-upper-bound` is a draft supplier in another current-run batch (batch 11). Its statement and Step 5.1 include the $n=0$ scalar-unitary case as requiring no CNOT synthesis. But `def-qc-circuit-syntax-and-register-order` gives every gate positive arity, and `def-qc-circuit-denotational-semantics` makes every zero-wire circuit denote the identity. Thus the supplied syntax cannot synthesize a nonidentity scalar on $\mathbb C$. Close this by restricting the zero-wire case to the identity or by defining a zero-arity scalar/global-phase operation and its cost. The observed source remains current at split: SHA-256 `b1e6add9328bbe06652b541464ea9cccef647979f6e9126af491299756687058`. The assigned consumer is `thm-qc-isometry-completion-and-synthesis`; its width-zero wording was repaired as above, but the supplier finding remains for routing.

## Page verdicts

- **A — State Preparation, Isometry Synthesis, and Limits:** Pass. Its overview accurately distinguishes ray geometry, exact continuous-angle state preparation, finite-alphabet approximation, classical table input, workspace, and the continuous-parameter and discrete-alphabet lower bounds. The zero-width isometry synthesis caveat is now explicit in the assigned theorem and does not contradict the page overview.
- **B — State Preparation, Isometry Synthesis, and Limits — Examples:** Pass. The four amplitudes have total squared norm $1$; the prefix radii give three $\pi/2$ rotations; the single relative phase is $i$ on $|01\rangle$; and the stated dense input length is $8b$ bits for $b\ge2$.

## External source checks

- The Euclidean Sard threshold was checked against Azagra, Ferrera, and Gómez-Gil, [“The Morse-Sard theorem revisited”](https://arxiv.org/pdf/1511.05822v5), §1 introduction (classical $C^k$ threshold, pp. 1–2) and Theorem 1.1 (open-domain version). This matches $r>\max\{m-n,0\}$ after translating source/target dimension names.
- The exact QSD CNOT formula was checked against Shende, Bullock, and Markov, [“Synthesis of Quantum Logic Circuits”](https://arxiv.org/pdf/quant-ph/0406176v5), Introduction, result bullets on pp. 2–3; the paper states the same $\frac{23}{48}4^n-\frac32 2^n+\frac43$ bound for arbitrary $n$-qubit operators. This confirms the positive-width bound, not the local zero-wire circuit convention.
- The Solovay–Kitaev operator-norm rate and the $3.97$ word-length exponent were checked against Dawson and Nielsen, [“The Solovay-Kitaev Algorithm”](https://arxiv.org/pdf/quant-ph/0505030v2), Theorem 1 and §4.1–4.2.

## Blocker

No batch-24 blocker remains. The current autopilot status still reports the run-level `1-scaffold` spec blocker: invalid construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. It is outside this assignment and remains unresolved here.
