# Step 3a reader report — batch 35

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `35`

## Opened inventory

Reviewed both assigned pages:

- A page `recurrent-and-state-space-networks`.
- B page `recurrent-and-state-space-networks-examples`.

Opened all 15 A-page items in dependency order: `def-recurrent-neural-network`, `def-linear-state-space-model`, `alg-radix-two-fft`, `lem-woodbury-dplr-bilinear-inverse`, `def-lstm-cell`, `def-s4-dplr-parameterization`, `lem-roots-of-unity-fft-complexity`, `alg-cauchy-matvec-at-roots-of-unity`, `thm-hippo-leg-matrices-have-low-rank-structure`, `alg-s4-state-space-recurrence-and-convolution`, `thm-cauchy-matvec-at-roots-of-unity-exact-cost`, `thm-dplr-discretized-step-linear-cost`, `lem-s4-convolution-root-of-unity-reduction`, `thm-cauchy-root-grid-matvec-numerical-cost`, and `thm-s4-convolution-filter-complexity`.

Opened all 3 B-page examples after their suppliers: `ex-lstm-scalar-gates`, `ex-s4-scalar-recurrent-and-convolutional-views`, and `ex-s4-filter-cost-excludes-training`.

Opened the published suppliers used to check definitions and proofs: `def-countable-choice`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-absolutely-continuous-function`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-borel-sets-are-lebesgue-measurable`, and `lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn`.

All assigned statement/definition/example sections were uninterrupted by hyperlinks; their references were kept in the immediately following references sections. The `T=2` RNN TikZ unrolling has the stated input, state, map-occurrence, and shared-parameter edges. No other assigned diagrams needed review or addition.

## Repairs made

- In `def-linear-state-space-model`, the definition restricted Lebesgue measure to an arbitrary interval without establishing that the interval is measurable. Added the published box-measure supplier to `deps` and made the derivation explicit: bounded intervals are measurable, arbitrary intervals are countable unions of bounded intersections with `[-n,n]`, and the measurable sets form a sigma-algebra. The restriction to `I` is therefore defined.
- In `alg-radix-two-fft`, the inverse procedure used `\overline\omega` at `M=1`, although the definition had assigned `\omega` only for `M>1`. Defined `\omega=1` for `M=1`; the base-case forward and inverse transforms are now fully specified.
- In `thm-s4-convolution-filter-complexity`, the numerical Cauchy supplier is stated on `e^{2\pi i j/M}`, while the filter procedure uses `e^{-2\pi i k/M}`. Added the bijective reindexing `j=-k mod M`; it preserves the maximum error and separation bounds and costs `O(M)` operations and words.

Updated the affected entries in `research/machine-learning-all-101-2026-10-19-batch-35.proof-contracts.json`. The three repaired items had no `verification.judge` record to remove.

Evidence checked in the cited sources: Gu, Goel, and Ré, *Efficiently Modeling Long Sequences with Structured State Spaces*, §3.3 Theorems 1–3 and Appendices C.1–C.3 (including Proposition 5); Pan, *Fast Approximate Computations with Cauchy Matrices and Polynomials*, §6.1 Lemma 6.1, §6.3 Lemma 6.3, and §6.4 Theorems 6.2–6.3. The local numerical proof supplies the stated separation and variable-precision qualifications; the source's generic Cauchy bound was not treated as a fixed-word or bit-complexity guarantee.

## Required checks

- `reflow.mts` and `precheck.mts` were run for each changed item. Reflow reported all three unchanged; precheck reported no failures (the definition/algorithm checks had no phase proofs; the theorem passed its direct proof check).
- Ran `node tools/proof-layout.mjs items/def-linear-state-space-model.md items/alg-radix-two-fft.md items/thm-s4-convolution-filter-complexity.md` once after the final edits: 3 items, 9 steps, 0 defects.

## Uneditable defects

None found.

## Page verdicts

- `recurrent-and-state-space-networks`: pass. Its A-page inventory matches the assigned items; the frontmatter-only page has an empty body and preserves `page_layout: compact-v1`.
- `recurrent-and-state-space-networks-examples`: pass. Its example inventory matches the assigned items; the frontmatter-only page has an empty body and preserves `page_layout: compact-v1`. The scalar LSTM and S4 examples agree with their suppliers, and the training-cost example preserves the theorem's scope and qualifications.

## Blocker and coverage note

Batch 35 has no blocker. The live autopilot status at `2026-10-19T11:37:22Z` showed the run still active and an unrelated `3a-split` blocker for `split-8` (batch 8, failed three times); it is outside this assignment and was not changed.

I checked the direct published suppliers used by the assigned claims and consulted the exact cited sections above. I did not independently re-audit every transitive foundation beneath those published suppliers. No defect in those suppliers was identified in the portions needed for this batch.
