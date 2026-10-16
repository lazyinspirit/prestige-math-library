# Step 3a reader report — batch 59

Run: `quantum-computing-algorithms-60-2026-10-15`  
Scope: batch `59`

## Opened inventory

Assigned pages:

- A page: `library/quantum-algorithms/quantum-communication-and-fingerprinting.md`
- B page: `library/quantum-algorithms/quantum-communication-and-fingerprinting-examples.md`

Assigned A-page items, in manifest order:

1. `def-qa-35-finite-probability-entropy-and-stochastic-matrices`
2. `lem-qa-35-log-tangent-bound`
3. `lem-qa-35-kl-event-separation`
4. `lem-qa-35-smp-prior-message-decomposition`
5. `lem-qa-35-smp-entropy-drop`
6. `def-qa-35-swap-test-effect`
7. `lem-qa-35-identity-matrix-packing`
8. `lem-qa-35-trace-norm-tensor-density-identity`
9. `thm-qa-35-swap-test-measurement-effect`
10. `def-qa-35-finite-communication-protocol`
11. `def-qa-35-equality-promise`
12. `def-qa-35-code-fingerprint-state`
13. `lem-qa-35-private-coin-error-reduction`
14. `thm-qa-35-deterministic-smp-equality-lower-bound`
15. `thm-qa-35-quantum-fingerprint-message-lower-bound`
16. `lem-qa-35-random-code-existence-nonuniform`
17. `thm-qa-35-code-fingerprint-state-properties`
18. `thm-qa-35-private-coin-equality-lower-bound`
19. `alg-qa-35-swap-test-fingerprint`
20. `rem-qa-35-private-coin-lower-bound-unresolved`
21. `thm-qa-35-fingerprint-correctness-and-cost`

Assigned B-page items:

- `cex-qa-35-public-vs-private-randomness`
- `ex-qa-35-length-eight-fingerprints`

External dependency items opened for the assigned claims:

- `def-finite-probability-space-and-event`, `def-non-negative-and-positive-operator`, `def-promise-problem`, `def-qc-circuit-cost-model`, `def-qc-density-operator`, `def-qc-dirac-notation-conversion`, `def-qc-povm-and-outcome-law`, `def-qc-pure-state-and-ray`, `def-qc-register-and-computational-basis`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `def-qc-toffoli-and-fredkin`, `def-qc-trace-distance`, `def-qc-trace-norm`, `def-self-adjoint-and-normal-endomorphism`, `def-trace-of-an-endomorphism`, `lem-chernoff-bound-for-bernoulli-trials`, `lem-qc-tensor-product-basis-and-dimension`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-qc-computational-basis-orthonormal`, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-projective-measurement-outcome-law`, `thm-qc-ray-projector-well-defined-and-bijective`, `thm-qc-tensor-map-composition-and-adjoint`, `thm-qc-trace-norm-spectral-formula`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, and `thm-trace-of-ab-equals-trace-of-ba`.
- Additional transitive context opened: `def-qc-projective-measurement`, `thm-qc-helstrom-binary-discrimination`, and `thm-qc-hermitian-trace-norm-positive-negative-parts`.

I opened `research/quantum-computing-algorithms-60-2026-10-15-batch-59.proof-contracts.json` and `research/quantum-computing-algorithms-60-2026-10-15-batch-59.source-evidence.json`. The local Newman–Szegedy PDF at `research/quantum-computing-algorithms-60-2026-10-15-batch-59-sources/newman-szegedy-1996.pdf`, §4.1–4.2, PDF pp. 4–9, was read for the private-coin matrix-packing argument. The author's source is [Newman and Szegedy, *Public vs. Private Coin Flips in One Round Communication Games*](https://cs.haifa.ac.il/~ilan/online-papers/mario-cc.ps). Its Theorem 2 states the identity-matrix packing bound (N=m^{O(\log m)}); §4.2 proves the conditioning and entropy steps used as the local proof route. The official ACM PDF endpoint returned HTTP 403 when opened.

I also opened [Buhrman, Cleve, Watrous, and de Wolf, *Quantum Fingerprinting*](https://arxiv.org/pdf/quant-ph/0102001), §2, PDF pp. 2–4. It gives the code-fingerprint construction and the Hadamard/controlled-swap circuit, with antisymmetric probability ((1-|\langle\psi|\phi\rangle|^2)/2). The local state, circuit, tensor-product, and error arguments were checked in the assigned items.

I opened [Ronald de Wolf, *Quantum Computing: Lecture Notes*](https://arxiv.org/pdf/1907.09415), Chapter 16 §16.1 for communication and private/public-coin context, and §16.6, PDF pp. 151–153, for quantum fingerprint states and the SWAP-test probability. The assigned items had cited §§16.1–16.3 for this fingerprint material; the v6 PDF places it in §16.6, so I corrected that locator in 17 assigned items. The final theorem now cites §16.6, PDF pp. 151–153.

## Review and edits

- The entropy and matrix-packing chain is sound: the posterior decomposition gives the stated acceptance bounds, the entropy-drop argument uses the (0.06/0.94) separation lemma, and the packing iteration and constants imply (N\le \exp(60(\ln m)^2)). The private-coin lower-bound reduction then uses a fixed odd repetition count and the correct transcript alphabet bound.
- The deterministic-SMP lower bound correctly derives injectivity and handles both fixed-length and bounded variable-length messages.
- The quantum message lower-bound proof initially showed pairwise trace-distance separation only for Alice's messages. I added the fixed-Alice comparison and the product-eigenbasis calculation for the trace norm with the fixed density factor first. This establishes the stated bound for Bob's messages as well. I updated its derivation row and citation uses in the batch proof contract.
- In `thm-qa-35-fingerprint-correctness-and-cost`, the all-symmetric probability expression had an unclosed exponent in `\Omega^{\otimes r`. I added the missing brace and separated the circuit/state construction, joint measurement probability, and error/cost conclusion into individually tagged proof steps. I updated the proof contract with the new derivations and the Fredkin fact use.
- I corrected the de Wolf Chapter 16 source locator in 17 assigned items: the fingerprint material is in §16.6 in the opened v6 PDF, while §16.1 covers SMP and equality context. No proof claim was imported from this source.
- All 18 changed item paths were reflowed; reflow reported `unchanged`. Precheck passed for every proof-bearing changed item; definitions, the algorithm, and the remark returned `0 checked, 0 failing`. The final `proof-layout` command included all 18 changed item paths and reported `18 items, 29 steps, 0 defects`.
- No changed item had a `verification.judge` record to remove. No library page prose was edited. No defect was confirmed in the opened dependencies, and no proposed withdrawal was removed.

## Page verdicts

- **`quantum-communication-and-fingerprinting` — pass.** The summary accurately describes the communication models, resource assumptions, entropy/matrix-packing proof route, nonuniform code existence, and separation between transmitted qubits and local/referee costs.
- **`quantum-communication-and-fingerprinting-examples` — pass.** The summary accurately describes the public/private seed contrast and the length-eight overlap and swap-test computation.

## Unedited defects

None identified. All confirmed defects were in assigned in-flight items and were repaired.

## Blockers and coverage limitation

There is no batch-59 mathematical blocker. The latest autopilot status still reports a run-level spec blocker: the prerequisite graph has an invalid construction-scheduling identity in batch 12 (`def-qc-effective-unitary-matrix-input`), and a 3a-split dispatch for batch 56 failed three times. These are outside batch 59 and were not edited.

I opened every assigned page and item and the listed dependency context above. I began with assigned items in manifest order before opening some external suppliers, so the strict supplier-first file-opening order was not maintained. I checked the supplier statements and relevant proofs before reaching final verdicts; this order deviation is the coverage limitation for this review.
