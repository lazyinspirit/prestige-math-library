# Step 3a Reader Report — Batch 25

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `25`  
Role: independent reader

## Opened inventory

All nine assigned items are current draft artifacts for this run. They were reviewed in the manifest's dependency order:

1. `def-qkd-finite-authenticated-protocol`
2. `lem-qkd-classical-key-copy-map-is-channel`
3. `lem-qkd-trace-norm-adds-over-classical-blocks`
4. `def-qkd-abort-aware-composable-security`
5. `lem-qkd-copy-replacement-distance-is-correctness-error`
6. `lem-qkd-abort-aware-ideal-output-is-state`
7. `thm-qkd-composable-secrecy-sum-bound`
8. `ex-qkd-abort-weighted-secrecy-distance`
9. `ex-qkd-secrecy-and-correctness-are-independent`

Opened both assigned pages: A-page `quantum-key-distribution-and-composable-secrecy` and B-page `quantum-key-distribution-and-composable-secrecy-examples`. Also opened the A-page prerequisites `secrecy-and-information-privacy` and `quantum-relative-entropy-data-processing-and-strong-subadditivity`. For the secrecy-definition cross-check, opened `def-it-weak-and-strong-secrecy`, `def-it-information-leakage-and-equivocation`, `def-it-finite-mutual-information`, and `def-it-finite-conditional-entropy`.

Opened the directly used quantum-information suppliers: `def-qc-density-operator`, `def-qc-quantum-channel`, `def-qc-instrument-and-conditional-state`, `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-instrument-conditional-state-is-density`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `def-qc-tensor-register-and-permutation`, `def-qc-completely-positive-map`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-qc-kraus-map-completely-positive`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`, `def-qc-trace-norm`, `def-singular-values-of-an-endomorphism`, `thm-qc-trace-norm-spectral-formula`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-self-adjoint-and-normal-endomorphism`, `def-real-and-complex-inner-product-space`, `def-qc-trace-distance`, `thm-qc-trace-norm-unitary-invariance-and-positive-formula`, `thm-qc-trace-norm-duality-and-norm-properties`, `def-non-negative-and-positive-operator`, and `thm-non-negative-operator-characterisations`.

Read the current batch proof-contract file and compared its scope, cited-source IDs, and derivation step labels with the current items. Its unresolved supplier note for the secrecy page said that the page was absent. The page and its finite leakage definitions are present in the current tree; I reviewed them. The wiretap-page definitions use finite mutual information, with weak secrecy `I(M;Z^n)/n → 0` and strong secrecy `I(M;Z^n) → 0`; they do not define an abort-weighted quantum trace-distance criterion. This is a distinct convention, not a conflict or a premise of the QKD proof.

## Mathematical review

The local proofs are sound under their stated finite-dimensional hypotheses. The key-copy Kraus operators satisfy `sum_k L_k†L_k = I`, so the map is trace-preserving as well as completely positive; its displayed action is only asserted on classical key blocks. The classical block trace-norm identity follows from the spectral theorem. In the replacement lemma, off-diagonal key blocks contribute the mismatch mass once and the diagonal blocks contribute it a second time, which is canceled by the factor `1/2` in trace distance. The abort-aware ideal state has total trace one; when acceptance probability is zero, positivity and zero trace force every accepted block to vanish. The sum theorem then follows by canceling the common abort branch, comparing the accepted states, and applying the triangle inequality. Its uniform-strategy conclusion follows pointwise for every allowed strategy.

Both computations are correct. In the first example, the deterministic accepted key has normalized secrecy distance `1/2`; weighting by acceptance `3/4` gives `3/8`, which is also the real-ideal distance, with zero correctness error. In the second, the uniformly random mismatched key has secrecy error zero, correctness error one, and real-ideal distance one; the deterministic shared key has correctness error zero and secrecy and real-ideal distances `1/2`.

The definitions preserve the stated domains, finite alphabets, abort convention, transcript register, and adversary system. The A-page summary accurately states the ideal-authentication assumption and does not claim security for a concrete implementation. The B-page summary matches the two examples. Proof steps, tags, and displayed block calculations are correctly formatted in the current items.

## Source checks

- Portmann and Renner, [*Cryptographic Security of Quantum Key Distribution*](https://arxiv.org/pdf/1409.3525), §3.2 (protocol resources) and §§4.1–4.3 (PDF pp. 18–22): Eve's view includes her quantum information and the public post-processing transcript (§4.1); Eqs. (14)–(15) define unconditional mismatch correctness and acceptance-weighted conditional trace-distance secrecy; Theorem 4.1 proves the real-ideal trace-distance bound by correctness plus secrecy.
- Renes, [*Quantum Information Theory*](https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf), §8.3, Eqs. (8.7)–(8.10) and Proposition 8.3.1 (PDF pp. 134–135): the same abort-weighted trace-distance secrecy and correctness decomposition is stated and proved.
- Ben-Or et al., [*The Universal Composable Security of Quantum Key Distribution*](https://arxiv.org/pdf/quant-ph/0409078), §§4.1–4.3: ideal authentication, abort as a zero-length key, Eve's combined quantum/classical view, and the real/ideal key functionality are described.
- Watrous, [*The Theory of Quantum Information*](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), §1.1.3, especially Eq. (1.181): the trace norm is `tr sqrt(A†A)` and equals the sum of singular values, supporting the finite block calculations.

## Edits, remaining defects, and verdicts

Edits: none. No confirmed defect was found, so no item or page prose was changed. Reflow, precheck, and proof-layout were not run because no item changed.

Uneditable defects: none. The contract's stale note about the absent secrecy prerequisite is resolved by the current page and definitions reviewed above; it exposes no unsupported assumption in the assigned QKD claims.

- A-page `quantum-key-distribution-and-composable-secrecy`: pass; summary and stated scope accurately reflect its items.
- B-page `quantum-key-distribution-and-composable-secrecy-examples`: pass; summary accurately reflects both calculations.

Blocker: none.
