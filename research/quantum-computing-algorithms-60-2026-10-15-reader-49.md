# Step 3a reader report — batch 49

Run: quantum-computing-algorithms-60-2026-10-15  
Reader: reader-49  
Review date: 2026-10-16

## Opened inventory

### Assigned pages

- A page, qubitization-and-optimal-hamiltonian-simulation: opened the complete page. Verdict: pass. Its summary accurately describes the exact Hermitian signal subspaces, complex Chebyshev simulation procedure and clean-input guarantee, small-time identity branch, both sparse-access modes, and the sparse-oracle scope of the lower bound. I updated the sparse-construction summary to reflect the supplied entry bound.
- B page, qubitization-and-optimal-hamiltonian-simulation-examples: opened the complete page. Verdict: pass. The three summaries match their matrix, parity-path, and degree-two Chebyshev examples.

### Assigned items

All 21 assigned items were opened and reviewed in dependency-level order:

1. lem-qa-25-isometry-error-implies-trace-distance
2. lem-qa-25-clean-subspace-unitary-hybrid
3. lem-qa-25-parity-path-transfer
4. def-qa-25-qubitization-access-model
5. def-qa-25-hamiltonian-simulation-polynomial
6. lem-qa-25-hermitian-block-encoding-signal-subspaces
7. thm-qa-25-qubitization-signal-sequence
8. ex-qa-25-two-dimensional-block-encoding
9. thm-qa-25-bounded-error-parity-query-lower-bound
10. lem-qa-25-sorted-xor-sparse-access-isometries
11. alg-qa-25-sparse-hamiltonian-block-encoding
12. thm-qa-25-sparse-no-fast-forwarding-lower-bound
13. thm-qa-25-sparse-hamiltonian-block-encoding-correctness
14. alg-qa-25-qubitized-hamiltonian-simulation
15. ex-qa-25-parity-no-fast-forwarding
16. alg-qa-25-small-time-aware-simulator
17. lem-qa-25-jacobi-anger-truncation
18. ex-qa-25-chebyshev-truncation
19. thm-qa-25-qubitized-simulation-correctness
20. thm-qa-25-small-time-aware-simulator-correctness
21. thm-qa-25-qubitized-simulation-resource-bound

### Claim-critical dependencies opened

I checked the statements or definitions used in the assigned arguments, including:

- Linear algebra and norm facts: thm-singular-value-decomposition, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-finite-dimensional-orthogonal-decomposition, cor-operator-norm-submultiplicative-and-t-star-t-identity, cor-triangle-inequality-for-inner-product-norm, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, and def-qc-dirac-notation-conversion.
- Matrix dynamics and exponentials: def-qa-19-finite-matrix-dynamics, thm-qa-19-matrix-exponential-unitary-properties, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, and thm-complex-exponential-is-entire-with-derivative-itself.
- Block encodings, QSP and QSVT: def-qa-22-block-encoding, def-qa-22-block-encoding-access-model, def-qa-23-qsp-signal-sequence, def-qa-23-qsp-admissible-polynomial-pair, thm-qa-23-qsp-phase-factorization, alg-qa-23-qsp-phase-synthesis, thm-qa-23-qsp-synthesis-correctness, thm-qa-23-qsp-phase-implementation-error, lem-qa-23-hermitian-signal-convention-conversion, def-qa-24-pue-svd-data, def-qa-24-singular-value-transform, lem-qa-24-pue-svd-invariant-subspaces, alg-qa-24-qsvt, thm-qa-24-qsvt-singular-space-action, thm-qa-24-qsvt-query-count, thm-qa-24-qsvt-error-and-resource-bound, lem-qa-24-qsvt-robustness-amplitude-bound, thm-qa-24-projector-phase-implementation, and lem-qa-21-robust-one-step-oaa-isometry.
- Sparse access, circuit and query models: def-qa-20-sparse-hamiltonian-oracle-model, def-qc-state-preparation-cost-model, thm-qc-state-preparation-rotation-level-upper-bound, alg-qc-state-preparation, def-promise-problem, def-qc-uniform-circuit-family, def-qc-coherent-function-oracle, thm-qc-reversible-xor-oracle-unitary, def-qc-controlled-unitary-access, def-qc-inverse-unitary-access, def-qc-reflection, thm-qc-reflection-unitary-involution, and def-qc-circuit-cost-model.

The batch dependency-closure record lists 84 transitive in-run suppliers. I reviewed the claim-critical cited supplier statements and definitions used here; I did not audit every unrelated supplier proof in that closure. No standalone reader-49 rendered evidence bundle was present in the run runtime directory, so I used the assigned manifest, current authored files, and proof contracts.

## Authoritative source checks

- Andrew M. Childs, Lecture Notes on Quantum Algorithms, §28.1, equations (28.1)–(28.3), printed pp. 139–140: the parity path uses weights \(\sqrt{i(n-i+1)}/n\), and the symmetric hypercube subspace has the corresponding tridiagonal transitions. I checked this against the locally proved path transfer and norm. [Author-hosted notes](https://www.cs.umd.edu/~amchilds/qa/qa.pdf)
- The same notes, §29.2–§29.4, equations (29.25)–(29.34), printed pp. 146–147: a Hermitian block encoding has paired signal subspaces and alternates \(U,U^*\) between projector phases. These conventions agree with the assigned signal-subspace lemma and QSP lift. [Author-hosted notes](https://www.cs.umd.edu/~amchilds/qa/qa.pdf)
- András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §3.3, Lemma 22, PDF p. 22: the perturbation bound is \(4d\sqrt{\|A-\widetilde A\|}\), matching the robustness bound used in the simulation proof. [Paper](https://arxiv.org/pdf/1806.01838)
- The same paper, §5.1, Lemma 57 and proof, PDF pp. 49–50: the Jacobi–Anger Chebyshev expansion and factorial Bessel-tail estimate support the assigned local expansion; Theorem 58 and Corollary 60, PDF pp. 50–52, give the matching near-optimal simulation-degree regime. [Paper](https://arxiv.org/pdf/1806.01838)
- Ronald de Wolf, Quantum Computing: Lecture Notes, §11.2, printed pp. 90–91: a \(q\)-query quantum algorithm induces an output polynomial of degree at most \(2q\). The assigned parity theorem supplies the further Fourier-orthogonality contradiction locally. [Author-hosted notes](https://arxiv.org/pdf/1907.09415)

## Edits and evidence

- items/alg-qa-25-sparse-hamiltonian-block-encoding.md: made the supplied-permutation interface executable by stating the action of \(O_r\) and \(O_c\) on each valid row/slot and column/slot basis state, and requiring their full reversible extensions, inverses, and costs. The algorithm now also requires an exact reversible value-decoding query and its inverse, explicitly handles invalid/sentinel values, and accepts any certified \(h\ge h_{\max}\). It uses normalization \(d_Hh\); \(h=0\) is the zero matrix branch. The QA20 dependency supplies total XOR row-location/value functions, not these in-place permutations or their semantics. The downstream QA27 consumer's use of the known bound \(h=1\) is now covered without assuming the unknown maximum entry.
- items/thm-qa-25-sparse-hamiltonian-block-encoding-correctness.md: proved the normalization prerequisite for the supplied-permutation mode. For any vector, weighted Cauchy–Schwarz bounds each row contribution; summing and using Hermiticity to bound column sums gives \(\|H\|_{\rm op}\le d_Hh\). The theorem now states the \(d_Hh\) normalization and zero-bound case.
- items/lem-qa-25-sorted-xor-sparse-access-isometries.md: added the same row/column-sum argument for its supplied bound \(h\), including \(\|H\oplus0\|=\|H\|\), to establish that \(d h\) is a valid block-encoding normalization.
- items/thm-qa-25-qubitized-simulation-resource-bound.md and the assigned A-page: updated the sparse resource statement and summary to use a supplied \(h\ge h_{\max}\), with \(h=h_{\max}\) identified as the tight choice and the \(h=0\), normalization-1 branch stated separately.
- items/def-qa-25-hamiltonian-simulation-polynomial.md: corrected the absolute-convergence sentence. At \(\tau=0\), consecutive zero summands have no defined ratio; the revised text handles this case directly and retains the ratio test only for \(\tau\ne0\).
- research/quantum-computing-algorithms-60-2026-10-15-batch-49.proof-contracts.json: synchronized the affected source quotes and proof derivations, including the sparse correctness step establishing \(\|H\|_{\rm op}\le d_Hh\). No changed item had a verification.judge record to remove. Existing hash-bound boundary-review records were retained as historical evidence and were not restamped.

The sparse normalization and interface changes were checked against their assigned direct and indirect consumers: the sparse-block correctness theorem, the parity-path example, the qubitized resource theorem, and the QA27 simulator procedure. Those consumers remain consistent with the generalized certified-bound input. The polynomial-definition correction was checked against the qubitized simulator, the Jacobi–Anger lemma, and the Chebyshev example; their claims and boundary cases remain valid. The previously recorded parity-path correction is present in the current source, whose time rescaling I rechecked; I made no edit to that item.

## Validation

- Reflow: unchanged for all five changed items.
- Precheck: all three proof-bearing items passed (1 checked, 0 failing each); both definition/algorithm items reported 0 checked and 0 failing.
- Proof layout: one batched run over all five changed item paths reported 5 items, 16 proof steps, 0 defects.

## Uneditable defects

None identified.

## Page verdicts

- qubitization-and-optimal-hamiltonian-simulation (A): pass.
- qubitization-and-optimal-hamiltonian-simulation-examples (B): pass.

## Blockers

No mathematical blocker remains within batch 49. The refreshed run status still reports an unrelated invalid 1-scaffold prerequisite graph involving def-qc-effective-unitary-matrix-input in batch 12, and a 3a-collect failure for batch 36 after three attempts. Batch 49 is currently listed as missing from 3a-read and 3a-split; these are run-level issues outside this review's edit scope.
