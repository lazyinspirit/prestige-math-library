# Focused published-supplier proof repair

Run: `quantum-computing-algorithms-60-2026-10-15`. Item: `thm-non-negative-operator-characterisations`.

Confirmed the actual native alerts in batch 1, batch 4, and batch 7 Step-5 context digests. Each identifies the same nonfatal proof-local assumption leak: Proof 2.1 refers to an eigenbasis constructed in Proof 1.1 under claim 1, while asserting the implication from claim 2 to claim 3. The theorem itself is sound; no new hypothesis or supplier is needed.

Read the full actual supplier and all its declared dependencies: the nonnegative-operator definition, real operator/form positivity correspondence, complex normal spectral theorem, real self-adjoint spectral theorem, and scalar square-root theorem. Under claim 2, self-adjointness directly supplies the real eigenbasis through L1. Over the complex field it implies normality by TT*=T*T, so L2 supplies the eigenbasis. Its diagonal entries are the eigenvalues and therefore are nonnegative reals by the same claim-2 hypothesis. The empty-dimensional case gives the empty eigenbasis and vacuous diagonal condition. This establishes 2=>3 without using claim 1. The remaining displayed implications 1=>2, 3=>4, and 4=>1 still establish the full equivalence.

Changed only Proof 2.1 to state that argument and cite L1/L2. Statement, Facts, title, dependency list, metadata, interfaces, and all other source bytes are unchanged. The exact current source was archived before editing at `before/thm-non-negative-operator-characterisations.md`; a byte comparison immediately before the replacement required it to equal that archive. Root separately confirmed published-repair ownership before authorizing the edit.

Consumer disposition: all native batch-1/4/7 alerts are resolved by this same supplier proof correction; the original native digests are untouched. The supplier's mathematical interface and every equivalence remain unchanged, so no downstream claim or source repair follows from this correction and no Statement/Definition consumer-closure expansion is triggered. The following is a discovered direct item-reference inventory, not a claim of independently rereading these consumers' full proofs. Existing frontier reviewers retain their own review duties.

- `def-qc-fidelity`
- `lem-qa-15-branch-density-degree`
- `lem-qa-16-finite-sdp-strong-duality`
- `lem-qa-16-schur-product-psd`
- `lem-qa-30-normalized-sdp-strong-duality`
- `lem-qa-35-trace-norm-tensor-density-identity`
- `lem-qc-faithful-state-dominates-positive-operator`
- `lem-qc-fidelity-classical-measurement-minimum`
- `lem-qc-optimal-cloner-attains-bound`
- `lem-qc-pauli-measurement-projectors`
- `lem-qc-positive-choi-matrix-yields-kraus-operators`
- `lem-qc-positive-marginals-imply-joint-support`
- `lem-qc-zero-probability-branch`
- `prop-non-negative-square-root-is-a-polynomial-in-the-operator`
- `thm-non-negative-square-root-exists-and-is-unique`
- `thm-qa-16-dual-vector-characterization`
- `thm-qa-21-taylor-simulation-error-and-cost`
- `thm-qa-34-channel-hybrid-bound`
- `thm-qa-34-product-state-error-bound`
- `thm-qc-bloch-positivity-ball`
- `thm-qc-bloch-purity-sphere`
- `thm-qc-channel-diamond-norm-one`
- `thm-qc-density-spectral-ensemble`
- `thm-qc-fidelity-range-equality-and-products`
- `thm-qc-helstrom-binary-discrimination`
- `thm-qc-hermitian-trace-norm-positive-negative-parts`
- `thm-qc-instrument-outcome-law-normalizes`
- `thm-qc-measurement-variation-at-most-trace-distance`
- `thm-qc-pattern-branch-probabilities-and-zero-branches`
- `thm-qc-povm-probabilities-normalize`
- `thm-qc-projective-measurement-outcome-law`
- `thm-qc-singular-pair-no-broadcasting`
- `thm-qc-trace-distance-channel-contractivity`
- `thm-qc-trace-distance-range-and-equality`
- `thm-qc-trace-norm-rank-one-formula`
- `thm-qc-trace-norm-spectral-formula`
- `thm-qc-trace-norm-unitary-invariance-and-positive-formula`
- `thm-qc-zero-probability-branch-has-no-conditioned-state`
- `thm-singular-value-decomposition`

Changed mathematical source: `items/thm-non-negative-operator-characterisations.md` only. Evidence: this review and the exact before archive. No tests, gates, formatting, hashes, stamps, metadata, ledger, native artifacts, or frontier source edits were performed. Root owns the mechanical checks and published-repair receipt. Source writes are frozen after this repair.
