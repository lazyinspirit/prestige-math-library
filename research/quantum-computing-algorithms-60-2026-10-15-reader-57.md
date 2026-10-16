# Step 3a reader report — batch 57

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Coverage: batch `57`

## Opened inventory

Assigned pages:

- `qma-verification-and-local-hamiltonian` — `library/quantum-algorithms/qma-verification-and-local-hamiltonian.md` (draft).
- `qma-verification-and-local-hamiltonian-examples` — `library/quantum-algorithms/qma-verification-and-local-hamiltonian-examples.md` (draft).

Assigned items (all 30 carriers opened):

```text
def-qa-33-effective-finite-matrix-encoding
lem-qa-33-bernstein-square-root-bound
lem-qa-33-near-unitary-polar-correction
lem-qa-33-projection-lemma
lem-qa-33-normalized-clifford-t-su2-package-dense
def-qa-33-k-local-hamiltonian-promise
def-qa-33-witness-verifier-interface
lem-qa-33-finite-dimensional-unitary-synthesis
lem-qa-33-algebraic-term-rationalization
lem-qa-33-fixed-arity-local-measurement-synthesis
lem-qa-33-uniform-programmed-circuit-interpreter
lem-qa-33-witness-acceptance-effect
def-qa-33-qma-promise-class
alg-qa-33-qma-parallel-majority-amplification
def-qa-33-feynman-kitaev-history-hamiltonian
def-qa-33-qma-completeness
thm-qa-33-pure-witness-suffices
lem-qa-33-feynman-propagation-path-gap
lem-qa-33-kkr-legal-clock-restriction
thm-qa-33-qma-amplification-entangled-witness-soundness
lem-qa-33-feynman-input-output-penalties
lem-qa-33-kkr-one-qubit-propagation-restriction
thm-qa-33-local-hamiltonian-in-qma
lem-qa-33-geometric-soundness-bound
lem-qa-33-kkr-two-qubit-propagation-restriction
lem-qa-33-unary-clock-locality
lem-qa-33-kkr-initial-state-restriction
thm-qa-33-5-local-hamiltonian-qma-complete
thm-qa-33-2-local-hamiltonian-qma-complete
ex-qa-33-one-qubit-history-energy
```

The 12 page prerequisites listed by the assigned A page were opened: `uniform-circuit-families-promise-problems-and-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `the-polynomial-hierarchy-and-relativization`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `registers-tensor-products-and-partial-trace`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `approximate-universality-and-solovay-kitaev`, `randomized-complexity-and-amplification`, `matrices-and-the-matrix-of-a-linear-map`, and `effective-numberings-reductions-resources-and-randomness`.

Current-run supplier items opened:

```text
alg-qc-solovay-kitaev-unitary-compiler
def-qc-circuit-cost-model
def-qc-circuit-denotational-semantics
def-qc-circuit-syntax-and-register-order
def-qc-clean-and-dirty-ancillas
def-qc-cnot-and-control-target-order
def-qc-controlled-unitary-access
def-qc-density-operator
def-qc-dirac-notation-conversion
def-qc-effective-unitary-matrix-input
def-qc-inverse-closed-dense-su2-gate-set
def-qc-one-qubit-gate-alphabet-and-rotations
def-qc-ordered-bitstring-encoding
def-qc-partial-trace
def-qc-pauli-matrices
def-qc-povm-and-outcome-law
def-qc-promise-computation-model
def-qc-register-and-computational-basis
def-qc-tensor-map
def-qc-tensor-register-and-permutation
def-qc-two-level-unitary
def-qc-uniform-circuit-family
lem-qc-clifford-t-projective-density
lem-qc-commutator-error-cancellation
lem-qc-compact-su2-base-net
lem-qc-disjoint-layer-order-independence
lem-qc-fixed-dimension-interval-arithmetic
lem-qc-irrational-rotation-dense-on-circle
lem-qc-local-gate-wire-embedding
lem-qc-pauli-vector-multiplication
lem-qc-su2-balanced-commutator
lem-qc-su2-near-identity-logarithm
lem-qc-tensor-product-basis-and-dimension
lem-qc-two-axis-su2-generation
thm-qc-axis-rotation-pauli-formula
thm-qc-computational-basis-orthonormal
thm-qc-one-qubit-euler-decomposition
thm-qc-partial-trace-characterization-and-basis-independence
thm-qc-povm-probabilities-normalize
thm-qc-solovay-kitaev-bit-complexity
thm-qc-solovay-kitaev-error-and-resource-bound
```

Published supplier items opened:

```text
def-deterministic-one-tape-turing-machine
def-dtime-ntime-dspace-and-nspace
def-effective-binary-encoding-and-decoder
def-logspace-uniform-circuit-family
def-natural-logarithm
def-partial-function-computed-by-a-machine
def-promise-preserving-reduction
def-promise-problem
def-trace-of-an-endomorphism
def-worst-case-time-and-space-complexity
def-binomial-coefficient
lem-chernoff-bound-for-independent-bernoulli-trials
lem-polynomial-time-computations-have-logspace-uniform-circuits
prop-trace-is-linear
thm-binomial-theorem-over-a-commutative-ring
thm-cauchy-schwarz-and-the-euclidean-norm
thm-complex-spectral-theorem-for-normal-endomorphisms
thm-operator-norm-is-the-largest-singular-value
thm-trace-of-ab-equals-trace-of-ba
```

The transitive foundation of every supplier was not independently audited.

## Source checks

- Julia Kempe, Alexei Kitaev, and Oded Regev, *The Complexity of the Local Hamiltonian Problem*, `https://arxiv.org/pdf/quant-ph/0406180`: §3 Lemma 1, PDF pp. 3–5, states the penalty estimate used by the projection lemmas; §5, PDF pp. 9–15, gives the all-pairs illegal-clock penalty, the one-qubit propagation terms, the controlled-phase restriction, and the block-history path form in Eq. (10). These passages corroborate the local derivations; the current items state their own constants and prove their bounds.
- Dorit Aharonov and Tomer Naveh, *Quantum NP — A Survey*, `https://arxiv.org/pdf/quant-ph/0210077`: §4, PDF pp. 12–18, gives the history-state energy, geometric soundness argument, and unary-clock penalty. In particular, the illegal-clock check forbids adjacent `01` pairs (PDF pp. 17–18).
- John Watrous, *Quantum Computational Complexity*, `https://arxiv.org/pdf/0804.3401`: §V.3, PDF pp. 21–23, describes weak parallel repetition, separate witness blocks, and the need to analyze entangled blocks. The assigned amplification item proves the entangled soundness bound locally.
- Christopher M. Dawson and Michael A. Nielsen, *The Solovay–Kitaev Algorithm*, `https://arxiv.org/pdf/quant-ph/0505030`: §4.1–§4.2, PDF pp. 8–10, gives the balanced commutator construction and error cancellation. The finite-precision and bit-cost conditions used here are checked against the current-run compiler statement.

## Repairs made

- `def-qa-33-k-local-hamiltonian-promise`: specified that a term with support size $r$ is a Hermitian $2^r\times2^r$ matrix in the support's increasing-index computational basis, with identity action on the complement. Without this dimension/order condition, the stated embedding into the full $n$-qubit space is not defined. I checked the affected assigned consumers `lem-qa-33-algebraic-term-rationalization`, `lem-qa-33-fixed-arity-local-measurement-synthesis`, `def-qa-33-feynman-kitaev-history-hamiltonian`, `thm-qa-33-local-hamiltonian-in-qma`, and the 5-local and 2-local completeness proofs; their uses remain valid. Updated the copied definition excerpts in the batch proof contracts.

- `lem-qa-33-bernstein-square-root-bound`: replaced the unsupported “factorial definition” attribution for the factorial-moment identities with explicit double counts of subsets with one marked element and ordered pairs of distinct marked elements. The cited `def-binomial-coefficient` defines binomial coefficients as counts and expressly does not define them by factorial quotients (Definition, lines 57–69). The $d=1$ second-moment case is now handled directly, avoiding an undefined negative lower index. Updated fact F2 and the step 1.1 proof contract.

- `lem-qa-33-finite-dimensional-unitary-synthesis`: changed negative-control handling to flip the zero-valued control wire before computing the conjunction and undo it after uncomputation. The former text placed the $X$ words around the target operation, which does not invert a control. Also capped the internal Solovay–Kitaev request at the fixed base-net radius $\eta_0$; the cited compiler requires $0<\epsilon\le\eta_0$ (its Statement, lines 43–63). Updated fact F3 and the step 1.1 and 4.1 proof-contract claims.

- `lem-qa-33-fixed-arity-local-measurement-synthesis`: aligned the proof's final controlled target with the Statement by specifying the synthesized block diagonal matrix $I\oplus U_{acc}$. The Statement defines $U_{acc}= (X_{flag}\otimes I)U_0$; the proof previously named $I\oplus U$ at that point. Updated the step 3.1 proof-contract claim.

- `lem-qa-33-unary-clock-locality`: separated the projection-error bound for arbitrary $g>0$ from the polynomial-size conclusion. Since the sufficient weight contains $K^2/g$, polynomial size requires both $K$ and $g^{-1}$ to be polynomially bounded. The assigned 5-local consumer uses $g=1/(2N^3)$ and a polynomial $K$, so its application remains valid. Updated the nonempty-choice evidence in the proof contract.

- `thm-qa-33-5-local-hamiltonian-qma-complete` and `thm-qa-33-2-local-hamiltonian-qma-complete`: added `thm-qa-33-pure-witness-suffices` to each dependency list and cited it when choosing the history-state input vector. The QMA interface allows a density-operator witness, whereas the history-state construction requires a vector. The existing completeness arguments supply an accepting density; the assigned pure-witness theorem supplies a pure witness at the same threshold. Updated facts F12/F11 and the corresponding proof-contract citations and derivations.

Updated the affected `research/quantum-computing-algorithms-60-2026-10-15-batch-57.proof-contracts.json` records. No changed carrier had a `verification.judge` entry, so there was no stale judge record to remove.

Checks after the final edits:

- `reflow` reported unchanged for all seven changed items.
- `precheck` passed for the six items with proofs; the one definition carrier had zero proof sections to check.
- Final `node tools/proof-layout.mjs` on all seven changed item paths: 7 items, 18 steps, 0 defects.

## Defect not edited

`qma-verification-and-local-hamiltonian-examples`, body lines 12–13: a raw carriage-return byte (`0x0D`) follows `|0` in the intended `|0\rangle` ket notation, splitting the inline expression so the source no longer encodes the claimed input ket. The B-page prose is outside reader edit permission; the owner should replace that byte with the TeX command `\rangle`. This is a nonfatal page-formatting defect and is the sole finding in the JSON output.

## Page verdicts

- `qma-verification-and-local-hamiltonian`: pass. Its summary matches the current QMA verifier, local-measurement, entangled-amplification, 5-local, and 2-local arguments.
- `qma-verification-and-local-hamiltonian-examples`: defect remains. The one-gate energy calculation is sound, but its ket notation is split by the raw carriage return described above.

## Blocker and coverage note

At the latest on-disk status check, the run was still running, `3a-read` was 57/60 with batches 42, 54, and 57 missing, and no worker was in flight, even though this report and its findings file are now present. The stage-spec blocker remains: `1-scaffold` reports invalid construction-scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. This is outside batch 57 and was not changed.

I opened every assigned page and item, the direct suppliers used in their proofs, and the cited primary sections needed for the quantum-complexity and Solovay–Kitaev arguments. The initial file-opening sequence followed assigned manifest levels before all cross-batch suppliers had been opened; I then checked the dependent arguments against the supplier contents. I did not independently audit every transitive foundational proof or every cited textbook page.
