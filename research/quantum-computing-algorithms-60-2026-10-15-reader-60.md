# Step 3a reader report — batch 60

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Coverage: batch `60`

## Opened inventory

### Pages

- `adiabatic-computation-and-circuit-equivalence` (A), draft.
- `adiabatic-computation-and-circuit-equivalence-examples` (B), draft.

### Assigned items

The A page contains 16 assigned items:

- `thm-qa-36-finite-cheeger-bound`
- `lem-qa-36-clock-penalty-gap-perturbation`
- `lem-qa-36-partial-trace-contracts-trace-distance`
- `def-qa-36-finite-adiabatic-path-model`
- `lem-qa-36-gapped-projection-regularity`
- `def-qa-36-adiabatic-resource-model`
- `lem-qa-36-jrs-finite-band-estimates`
- `thm-qa-36-jrs-finite-adiabatic-bound`
- `alg-qa-36-discretized-path-simulation`
- `alg-qa-36-five-local-history-path`
- `lem-qa-36-history-state-ground-and-output`
- `lem-qa-36-history-path-ground-vector-monotonicity`
- `lem-qa-36-history-path-restricted-gap`
- `thm-qa-36-adiabatic-path-to-circuit-simulation`
- `lem-qa-36-history-path-full-gap`
- `thm-qa-36-circuit-to-adiabatic-simulation`

The B page contains three assigned items:

- `ex-qa-36-two-level-avoided-crossing`
- `cex-qa-36-gap-closing-failure`
- `ex-qa-36-two-gate-history-state`

### Dependency material opened

I opened these claim-bearing dependency definitions and statements:

- Markov, spectral, and norm suppliers: `def-transition-matrix-and-n-step-transition-probabilities`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-reversible-measure-and-detailed-balance`, `def-self-adjoint-and-normal-endomorphism`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, and `def-functional-calculus-for-a-normal-endomorphism`.
- Linear-algebra and ODE suppliers: `def-linear-map`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `prop-adjoint-algebra`, `def-non-negative-and-positive-operator`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`, and `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`.
- State, trace, tensor, and measurement suppliers: `def-qc-pure-state-and-ray`, `def-qc-density-operator`, `def-qc-trace-distance`, `def-qc-trace-norm`, `thm-qc-trace-norm-spectral-formula`, `thm-qc-trace-norm-duality-and-norm-properties`, `lem-qc-pure-state-trace-distance`, `thm-qc-trace-distance-range-and-equality`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `lem-qc-tensor-product-basis-and-dimension`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`, `thm-qc-projective-measurement-outcome-law`, and `thm-qc-povm-probabilities-normalize`.
- Circuit and simulation suppliers: `def-qc-circuit-cost-model`, `def-qc-uniform-circuit-family`, `def-qa-20-simulation-error-and-cost-model`, `def-qa-20-term-list-access-model`, `def-qa-20-first-order-product-formula`, `thm-qa-20-first-order-commutator-error`, and `def-qa-19-finite-matrix-dynamics`.

I checked the relevant proofs of the draft partial-trace results, the measurement-outcome laws, the trace-norm duality result, the pure-state trace-distance result, and the first-order commutator-error theorem.

## Review and edits

### Confirmed repairs

1. **`def-qa-36-finite-adiabatic-path-model`, Definition.** The original path family did not state its parameter domain, although the same definition used endpoints and a uniform gap on `[0,1]`. I made both `H(s)` and the followed projection `P(s)` families indexed by `s ∈ [0,1]`. I also typed the supplied comparison state and output measurements on `V`, so the trace-distance and outcome-law expressions have matching spaces. The finite-dimensional path, the propagator endpoints, and the trace-distance definition supply these requirements. Its proof status is not applicable; no `verification.judge` record was present.

2. **`alg-qa-36-discretized-path-simulation`, Definition and title.** The access model permits either full-list circuit-family providers or named exact-oracle calls, while the original output unconditionally said “uniform circuit.” The repo’s full-list family definition has a fixed finite gate syntax. I changed the output to a finite access schedule which records the declared provider and its cost, and changed the title to “Discretized adiabatic path simulation schedule.” The exact call order and error budget are unchanged.

3. **`alg-qa-36-five-local-history-path`, Definition.** I aligned its output with the discretization algorithm: it now returns an evolution access schedule using the declared circuit-family or named-oracle provider for each term call. The construction, Hamiltonian terms, and output-register procedure are unchanged.

4. **`thm-qa-36-adiabatic-path-to-circuit-simulation`, Statement and Proof.** The former statement conflated the unitary evolution with its composition after the preparation isometry, whose domain is `C^m`. I separated the operator-norm guarantee for the simulated evolution block from the composed-map guarantee after `A_0`. I made the circuit-family conclusion conditional on circuit providers and polynomial circuit generation; named-oracle use remains an explicitly charged query schedule. Step 4.1 now records the isometry composition bound, and step 5.1 states the resulting output type. The title now reads “Finite adiabatic path simulation from term access.”

5. **`thm-qa-36-circuit-to-adiabatic-simulation`, Facts & Assumptions and Proof.** I updated Fact F6 and step 4.1 to use the repaired access-schedule result. The statement’s error and resource bounds are unchanged.

For the material edits, I refreshed the affected source quotations and proof-step derivations in `research/quantum-computing-algorithms-60-2026-10-15-batch-60.proof-contracts.json`. I also refreshed its current trace-norm-duality quotation so the contract matches the dependency’s present Statement. The scoped proof-contract check passed with 0 errors and 0 warnings. No stale `verification.judge` record was present on a changed item.

### Mathematics checked

- The finite reversible Cheeger proof uses the algebraic gap and does not claim an absolute gap or aperiodicity. Its layer-cake, median, and Rayleigh-quotient arguments give the stated `φ²/2` bound.
- The clock-penalty lemma’s Schur complement, inertia argument, min–max bounds, leakage estimate, and degenerate-compressed-space counterexample are valid under its stated hypotheses.
- The partial-trace contraction proof establishes the Hermitian trace-norm dual formula it uses, then applies the trace-pairing identity and the self-adjoint contraction bound.
- The Riesz-projection regularity, reduced-resolvent estimates, finite JRS bound, Duhamel discretization, first-order product-formula budget, and term-call telescoping estimates check out with their stated operator and error conventions.
- The five-local history-path terms are positive semidefinite and have the claimed local supports. The history-state kernel, input selection, clock penalty, and padded output mixture are correct.
- The monotone ground-vector recurrence and the reversible path-chain conductance proof give the restricted clock gap `1/(48N²)`. The input penalty and illegal-clock penalty transfer it to the full-space bound greater than `3Δ₀/4` with the stated `J`.
- The avoided-crossing gap and integral, the diagonal gap-closing counterexample, and the padded two-gate history vector are correct.

I cross-checked the finite-rank adiabatic estimate against [Jansen, Ruskai, and Seiler, Theorem 3 and its derivative-estimate lemmas](https://arxiv.org/pdf/quant-ph/0603175), especially the endpoint and gap terms (PDF pp. 4–12). The source allows a band of possibly degenerate eigenvalues and gives the same gap-dependent structure; using the band rank in place of the number of distinct band eigenvalues is a valid upper bound here. I also checked [Aharonov et al., Theorem 2.5](https://arxiv.org/pdf/quant-ph/0405098) (conductance bound, PDF p. 10), their restricted history-path gap and monotonicity argument (Lemma 3.5 and Claims 3.7–3.8, PDF pp. 12–14), and their clock-penalty transfer (Lemma 3.17, PDF pp. 18–19). Those sources support the cited mechanisms; the assigned local proofs establish the sharper constants stated in this batch.

## Unedited defects

None. No assigned A-page or B-page prose defect was found. No suspected defect remains in an uneditable dependency.

## Page verdicts

- **`adiabatic-computation-and-circuit-equivalence` — pass.** Its summary accurately describes the proved Cheeger bound, finite JRS estimate, history-path restricted and full gaps, and term-access simulation. No page prose edit was needed.
- **`adiabatic-computation-and-circuit-equivalence-examples` — pass.** Its summary accurately describes the three checked examples. No B-page prose edit was made.

## Validation and blocker

- Reflow: all five changed item paths reported unchanged.
- Precheck: the three definition/algorithm items reported 0 checked proofs and 0 failures; each theorem reported `PASS` with 0 failures.
- Proof-contract check: 2 affected theorem contracts checked, 0 errors and 0 warnings.
- Final `node tools/proof-layout.mjs` on all five changed item paths: 5 items, 12 steps, 0 defects.
- Blocker: none.

## Coverage note

All 19 assigned items and both assigned pages were opened. The initial file-opening sequence was not strictly topological for every supplier: I read some consumers before opening the dependency statements they cited, then checked those suppliers before finalizing the mathematical verdicts. Claim-bearing dependency statements were opened, and the draft supplier proofs whose details were used were checked. I did not independently re-prove unrelated transitive published linear-algebra results; their cited statements were sufficient for the batch arguments and no deficiency was found in those uses.
