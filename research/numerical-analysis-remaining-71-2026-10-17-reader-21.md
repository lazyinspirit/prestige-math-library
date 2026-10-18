# Reader report — batch 21

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `21`  
Role: Step 3a reader

## Scope and inventory

Opened both assigned pages:

- A page: `library/numerical-linear-algebra-and-approximation/alternating-tensor-optimization-and-effective-eigenproblems.md`
- B page: `library/numerical-linear-algebra-and-approximation/alternating-tensor-optimization-and-effective-eigenproblems-examples.md`

Opened all 13 assigned items. The A-page items were read in dependency order:

1. `lem-na-finite-hermitian-ground-vector-with-deterministic-tie`
2. `lem-na-normalized-rayleigh-energy-perturbation`
3. `def-na-finite-mps-state-and-hermitian-hamiltonian`
4. `lem-na-periodic-mps-to-open-tt`
5. `lem-na-mixed-canonical-qr-gauge-preserves-state`
6. `lem-na-mps-environment-isometry-and-effective-hamiltonian`
7. `prop-na-exact-local-dmrg-update-does-not-increase-energy`
8. `alg-na-alternating-tensor-optimization-and-effective-eigenproblems`
9. `thm-na-dmrg-sweep-truncation-energy-increase-bound`
10. `thm-na-convergent-exact-dmrg-sweeps-are-coordinatewise-stationary`

Opened the B-page examples after their suppliers:

- `ex-na-two-site-spin-chain-exact-local-solve`
- `ex-na-degenerate-local-ground-state-tie-break`
- `ex-na-two-site-tt-truncation-can-increase-energy`

Also reviewed the batch-21 proof contracts, coverage record, cross-batch dependency record, and batch notes as evidence, not as verdicts.

## Dependencies reviewed

Reviewed the current-run batch-10 suppliers used by assigned items:

- `def-finite-tensor-arrays-and-frobenius-inner-product`
- `def-tensor-train-cores-bond-ranks-and-canonical-gauges`
- `alg-tensor-train-rounding`
- `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error`

For the TT error theorem, also opened its suppliers `lem-tensor-unfoldings-are-frobenius-isometries`, `thm-best-rank-k-frobenius-matrix-approximation`, and `alg-sequential-tensor-train-svd`.

Reviewed the published direct dependencies used by the assigned proofs and definitions:

- `def-self-adjoint-and-normal-endomorphism`
- `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`
- `def-rayleigh-quotient`
- `thm-courant-fischer-min-max-principle`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
- `thm-complex-spectral-theorem-for-normal-endomorphisms`
- `thm-finite-dimensional-orthogonal-decomposition`
- `def-operator-norm-on-a-finite-dimensional-inner-product-space`
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`
- `thm-gram-schmidt-orthonormalisation`
- `thm-singular-value-decomposition`
- `cor-triangle-inequality-for-inner-product-norm`
- `lem-reverse-triangle-inequality-in-a-normed-space`

Also opened `thm-operator-norm-is-the-largest-singular-value` to check the existence claim used by the operator-norm definition.

## Mathematical review

The finite Hermitian ground-vector lemma correctly handles both real and complex fields. The real and complex spectral branches establish the least Rayleigh value and its minimizers; the finite basis scan and phase normalization make the tie choice nonzero and deterministic. The normalized Rayleigh-energy perturbation estimate follows from the two-term expansion, the operator-norm bound, and Cauchy–Schwarz.

The finite MPS/TT conventions match the batch-10 finite-array and core definitions. The periodic-to-open conversion expands the trace over its closure index and preserves each entry, including the order-two case. The rank-revealing QR argument preserves the contraction while removing only dependent directions. The prefix and suffix interface recurrences use the stated matricization orientations and give the center embedding identity (E^*E=I); the pulled-back Hamiltonian is Hermitian.

The local energy proposition follows from the isometric embedding and the finite Hermitian ground-vector result. The algorithm specifies finite sweep loops, window order, exact local solves, exact SVD splits, optional rank-cap rounding, and the τ<1 normalization branch. Its normalization and energy statements are consistent with the supplier lemmas. No correctness, complexity, finite-precision, or convergence guarantee is claimed by the algorithm.

The post-sweep theorem correctly combines monotonicity before truncation, the TT root-sum-square tail estimate, the reverse triangle inequality, and the normalized-state perturbation bound. The strict τ<1 condition is used to prove the rounded tensor is nonzero; it makes no normalized-output claim for τ≥1. The stationarity theorem is valid under its explicit fixed-rank, common-gauge stagewise convergence hypothesis and does not assert convergence or global optimality.

All three example computations check out: the spin Hamiltonian is diagonal with entries ((-3,1,1,1)); the (Z\otimes Z) ground-space scan selects |01⟩; and the reflection-state example has tail (1/3), raises energy by (2/9), and satisfies the stated (4\|H\|_{\mathrm{op}}\tau) bound.

## Source checks

I checked the relevant cited source sections directly:

- Ulrich Schollwöck, *The density-matrix renormalization group in the age of matrix product states*, <https://arxiv.org/pdf/1008.3477>: §4.4.1, printed p. 43, equations (135)–(136), reshapes/SVDs a core and absorbs the remaining factor while producing a left-canonical core; §§6.2–6.3, printed pp. 61–66, describe the mixed center, effective local Rayleigh problem, lowest-eigenvalue update, and the identity norm matrix in canonical gauge; §6.4, printed p. 71 onward, describes one-/two-site sweep updates.
- Grégoire Misguich, *Introduction to matrix-product states and tensor networks*, <https://arxiv.org/pdf/2606.24803>: §2.1, PDF p. 8, equation (2), gives the periodic trace-product presentation; §2.4.1, PDF p. 13, gives successive QR construction; §2.4.3, PDF pp. 14–15, states orthonormality of canonical left/right environments; §2.7, PDF pp. 25–26, equations (39)–(42), gives the two-site quadratic forms, lowest-eigenvalue local solve, and (N=I) in mixed-canonical form.
- Ivan V. Oseledets, *Tensor-Train Decomposition*, <https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf>: §2, Theorem 2.2 and proof, printed pp. 2298–2299, gives the TT-SVD root-sum-square error estimate; §3, printed pp. 2302–2304, describes the right-to-left orthogonalization/compression sweep.
- Mark D. Dupuy, *Tensor Train Decomposition*, <https://msdupuy.github.io/teaching/TT_lectures_2026.pdf>: §1.2.4, Theorem 1.2.14 and proof, PDF pp. 20–22, gives the truncated TT-SVD tail estimate; §1.2.5, Algorithm 1.3, PDF p. 22, gives the TT-rounding sweep.

These sources support the MPS/TT and local-optimization context. The assigned items supply their exact local extensions and proofs; I did not treat the sources as substitutes for those proofs. I inspected the relevant sections, not the complete source documents, despite broader full-document descriptions in the inherited batch notes.

## Uneditable finding

`def-operator-norm-on-a-finite-dimensional-inner-product-space` is a published dependency of `lem-na-normalized-rayleigh-energy-perturbation`. Its Definition uses a maximum over unit vectors and says that the next theorem proves the maximum exists, but its frontmatter does not record the well-definedness result in `justified_by`. The published `thm-operator-norm-is-the-largest-singular-value` has the definition in `deps` and proves attainment in steps 2.1–3.1, so the mathematical argument is present; the missing well-definedness relation leaves the published definition ill-formed under the schema. Record `thm-operator-norm-is-the-largest-singular-value` in the definition's `justified_by` relation (without adding a reverse dependency). I did not edit the published item.

No other defect was found in the opened assigned carriers or dependencies.

## Edits, checks, verdicts, and blocker

- Edits: none. No confirmed defect occurred in an in-flight assigned item or the assigned A-page prose. No item repair, contract update, `verification.judge` removal, reflow, precheck, or proof-layout run was therefore required.
- A page verdict: the page summary and all ten listed items accurately describe the reviewed conditional results. One nonfatal, uneditable published dependency metadata finding remains as recorded above.
- B page verdict: the page summary and all three examples accurately describe their computations.
- Blocker: none for completing the batch-21 reader review. The published dependency finding remains for its owner to resolve.
