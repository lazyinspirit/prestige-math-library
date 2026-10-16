# Step 3a reader report — batch 43

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `43`  
Role: independent reader

## Opened inventory

Assigned pages:

- A page `continuous-time-quantum-walks` — `library/quantum-algorithms/continuous-time-quantum-walks.md`.
- B page `continuous-time-quantum-walks-examples` — `library/quantum-algorithms/continuous-time-quantum-walks-examples.md`.

Assigned A-page items, opened in dependency order:

1. `def-qa-19-finite-matrix-dynamics`
2. `lem-qa-19-hadamard-uniform-state-preparation`
3. `def-qa-19-graph-generator-conventions`
4. `thm-qa-19-matrix-exponential-unitary-properties`
5. `def-qa-19-continuous-time-walk`
6. `thm-qa-19-measurement-distribution`
7. `lem-qa-19-single-outcome-probability-stability`
8. `def-qa-19-hamiltonian-access-cost-model`
9. `alg-qa-19-hypercube-state-transfer`
10. `thm-qa-19-hypercube-transfer-correctness`
11. `alg-qa-19-complete-graph-spatial-search`
12. `thm-qa-19-complete-graph-search-correctness`
13. `thm-qa-19-continuous-walk-resource-accounting`

Assigned B-page items:

- `cex-qa-19-adjacency-laplacian-sign-conventions`
- `ex-qa-19-hypercube-for-n-one-and-two`
- `ex-qa-19-complete-graph-search-matrix`

I opened all 38 unique direct item dependencies (24 published and 14 draft items from this run). The dependency IDs were: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-mean-value-theorem`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-complex-exponential`, `def-complex-integer-powers`, `def-factorial-and-falling-factorial`, `def-functional-calculus-for-a-normal-endomorphism`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-qc-circuit-cost-model`, `def-qc-coherent-function-oracle`, `def-qc-controlled-unitary-access`, `def-qc-dirac-notation-conversion`, `def-qc-inverse-unitary-access`, `def-qc-projective-measurement`, `def-qc-pure-state-and-ray`, `def-qc-register-and-computational-basis`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `def-qc-uniform-circuit-family`, `def-real-and-complex-inner-product-space`, `def-self-adjoint-and-normal-endomorphism`, `def-sine-and-cosine-by-power-series`, `def-trace-of-an-endomorphism`, `thm-algebra-of-derivatives`, `thm-alternating-series-test`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-operator-norm-is-the-largest-singular-value`, `thm-qc-computational-basis-orthonormal`, `thm-qc-projective-measurement-outcome-law`, `thm-qc-ray-projector-well-defined-and-bijective`, `thm-quarter-turn-values-and-shift-formulas`, and `thm-sine-cosine-zero-sets-and-fundamental-period`.

I also opened the ten A-page prerequisite summaries named in the manifest and the B page’s A-page and finite-dimensional-matrix prerequisites. Those page IDs are `uniform-circuit-families-promise-problems-and-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `the-complex-exponential-and-eulers-formula`, `inner-product-spaces-and-orthogonality`, `registers-tensor-products-and-partial-trace`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `controlled-gates-phase-and-entanglement`, and `reversible-computation-ancillas-and-coherent-oracles`.

## Source passages reviewed

- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, Ch. 17 §17.1, PDF pp. 81–82 (printed p. 74 on PDF p. 82), supports the finite graph-Hamiltonian evolution and generator context. Ch. 17 §17.2, PDF p. 82, gives the hypercube adjacency as the sum of one-qubit Pauli-X terms and the opposite-corner transfer. I opened the author-hosted PDF at those passages: <https://www.cs.umd.edu/~amchilds/qa/qa.pdf>.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, Ch. 9 §9.1, PDF pp. 83–84 (printed pp. 71–72), gives the finite Hermitian evolution (e^{-iHt}), the spectral functional-calculus convention, and the separate circuit-simulation question. Ch. 2 §2.1.2 gives the one-qubit Hadamard matrix at PDF p. 21 and the (H^{\otimes n}|0^n\rangle) identity at PDF p. 26, Eq. (2.1). I opened those author-hosted PDF passages: <https://arxiv.org/pdf/1907.09415>.

The general-(N) complete-graph calculation, the probability-stability estimate, and the resource account are proved locally; the citations do not replace those proofs.

## Mathematical review and repair

The finite Hermitian evolution definition is well-defined, including the zero-space convention. The exponential theorem establishes real eigenvalues, unitarity, the group law, the differential equation, and uniqueness. The basis-measurement proof correctly converts the rank-one projector trace to a squared coordinate modulus and normalizes the probabilities by Parseval. The probability-stability lemma correctly bounds the coordinate difference by operator norm, applies Bessel to amplitudes, and obtains the (2\rho) bound by reverse triangle inequality.

The Hadamard preparation handles (n=0), gives the uniform amplitudes and norm, and conditions gate counts on whether (H) is primitive. The graph convention definition states the loop and degree rules and restricts normalized adjacency to positive-degree vertices. The Hamiltonian-access definition keeps matrix descriptions, access contracts, simulator certificates, precision and costs separate. The hypercube algorithm gives exact whole-operation and local-operation branches; its correctness proof verifies the tensor factorization and phase ((-i)^n), including the empty-register case. The resource theorem charges the branches separately and does not infer simulation cost from a matrix.

The complete-graph algorithm specifies an injective encoding, a total marked predicate on encoded and unused labels, a supplied preparation, explicit Hamiltonian access, and a `FAIL` result for unused measured strings. Its two-dimensional matrix calculation, shifted square (K^2=I/N), marked-state amplitude, and (N=2) example check out. I repaired one insufficient justification in `thm-qa-19-complete-graph-search-correctness`:

- **Location:** Proof steps 1.1 and 3.1.
- **Defect:** Step 1.1 computed the invariant block but had not established that the full algorithm-defined (H=-A/N-P_w) was self-adjoint, as required to define (U_H(t)). Step 3.1 then applied the full-space spectral functional calculus on the two-dimensional invariant subspace without establishing the block decomposition.
- **Repair and evidence:** Step 1.1 now observes that (A) has a real symmetric matrix in the full orthonormal computational basis and that (P_w) is diagonal with one (1); the adjoint identity in `def-adjoint-of-a-linear-map-between-inner-product-spaces` gives (H=H^*). It also proves (A) and (P_w), hence (H), vanish on (S^\perp). Step 3.1 now identifies the global spectral resolution as the block on (S=\operatorname{span}\{|w\rangle,|r\rangle\}) together with the zero block, so the formula for (U_H(t)|_S) follows from the finite-matrix functional calculus. I added the adjoint and ordered-tensor-register dependencies and updated proof-contract facts and derivations F11–F12. The pre-existing theorem carrier had no `verification.judge` record to remove.

The B-page counterexample verifies distinct K2 measurement laws for the opposite Laplacian signs and distinct P3 minimum target-ray times for adjacency and normalized adjacency. The two examples correctly compute the (n=1,2) hypercube amplitudes and the complete-graph invariant block and gap, including (N=2) and the (N=2,4) preparation checks. No other mathematical defect was confirmed.

## Page verdicts

- **A page — pass.** Its summary accurately separates mathematical evolution from implementation cost and states the proven exact hypercube and complete-graph claims without asserting efficiency from a matrix alone.
- **B page — pass.** Its examples support the stated generator-convention failures and finite calculations; the page is a logical leaf as claimed.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qa-19-complete-graph-search-correctness.md` — completed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qa-19-complete-graph-search-correctness.md` — pass, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-43.proof-contracts.json --items thm-qa-19-complete-graph-search-correctness --strict` — 1 checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs items/thm-qa-19-complete-graph-search-correctness.md` — 1 item, 5 steps, 0 defects.

## Uneditable findings and blockers

No confirmed defect remains in an uneditable assigned subject or dependency. The current batch notes mention an earlier dependency-level gap for controlled and inverse unitary access; the current carriers have `dependency_level: 6` and `7`, and I found no associated mathematical defect.

At the final live status check, the run remained in `3a-read` with no worker in flight, and the status snapshot still listed batch 43 as missing before this response was ingested. The run-wide blockers were the invalid batch-12 prerequisite identity reported under `1-scaffold` and a `3a-split` failure for batch 29 after three attempts. Neither is a batch-43 mathematical blocker, and I did not change run state.

## Coverage note

All 16 assigned items, both assigned pages, 38 unique direct item dependencies, ten required prerequisite pages, and the cited source passages were opened. I inadvertently reopened `def-complex-conjugate-real-imaginary-part-and-modulus` while batching; this did not leave any required claim unchecked.
