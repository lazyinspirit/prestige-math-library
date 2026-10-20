# Step 3a reader report — batch 36

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `36`

## Opened inventory

Assigned pages:

- `library/machine-learning/attention-and-transformer-expressivity.md`
- `library/machine-learning/attention-and-transformer-expressivity-examples.md`

Assigned A-page items, read in dependency order:

- `lem-2dyck-pcfg-prefix-mass-positive`
- `def-scaled-dot-product-attention`
- `def-positional-encoding-and-causal-mask`
- `lem-paired-crossentropy-mixture-bound`
- `def-multihead-self-attention`
- `def-hahn-hard-soft-attention-sequence-model`
- `def-transformer-encoder-decoder-layer`
- `lem-hard-attention-depth-reduction`
- `thm-hard-attention-languages`
- `lem-soft-attention-one-symbol-influence`
- `thm-soft-attention-parity-chance-limit`
- `alg-transformer-forward-pass`
- `thm-transformer-permutation-equivariance-without-position`
- `lem-soft-2dyck-crossentropy-gap-paired-prefixes`
- `thm-transformer-formal-language-limits`
- `lem-yun-transformer-grid-lookup`
- `lem-dense-attention-cost-and-path-length`
- `thm-fixed-width-transformer-lp-universality`

Assigned B-page examples:

- `ex-two-token-causal-next-token-mask`
- `ex-position-free-vs-position-encoded-token-order`
- `ex-fixed-length-vs-unbounded-sequence-limits`

Required page dependency inspected: `library/machine-learning/feedforward-networks-and-universal-approximation.md`; logical item supplier inspected: `def-feedforward-neural-network` (current draft, batch 31). The fixed-width proof uses the feedforward-network definition; it does not use the separate single-hidden-layer universal-approximation theorem.

Other opened item suppliers for the assigned proofs:

- Hard-attention restriction chain: `thm-asymmetric-lovasz-local-lemma`, `lem-local-lemma-conditional-probability-bound`, `thm-conditional-probability-multiplication-and-chain-rules`, `lem-of-sign-rules`, `def-dependency-digraph-for-finite-events`, `def-pairwise-and-mutual-independence-of-events`, `def-multigraph-loop-and-digraph`, `def-finite-simple-graph`, `rem-finite-simple-graph-convention`, `def-finite-cardinality`, `def-finite-probability-space-and-event`, `def-conditional-probability`, `def-ordered-field`, `def-field`, `lem-of-mult-neg`, `lem-of-zero-mult`, and `lem-of-inverse-unique`.
- Fixed-width measure/topology suppliers: `def-countable-choice`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-borel-sets-are-lebesgue-measurable`, `thm-heine-cantor-metric`, `thm-continuity-from-above-for-measures`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `def-elementary-set-in-rn`, `def-function`, `def-finite-sum`, and `thm-reals-ordered-field`.

## Review and source evidence

The attention formulas, masks, multi-head projections, residual sublayers, positional encodings, and dense-attention cost claim agree with Vaswani et al., §§3.1–3.5 and §4/Table 1 (`https://arxiv.org/pdf/1706.03762`), and the relevant Dive into Deep Learning Chapter 11 sections. The encoder/decoder diagram matches its prose: the cross-attention receives decoder states as queries and encoder output `E` as keys and values; each residual branch reaches the corresponding Add & LN node.

For the fixed-width construction, the source passages consulted were Yun et al., §2, Theorems 2–3, Appendix A, Appendix B.4–B.5, and Appendix C.1–C.3 (`https://arxiv.org/pdf/1912.10077`). In particular, Appendix B.5 defines its selective-shift lookup with uniform hardmax, while the Transformer class in §2 uses softmax. The assigned theorem explicitly supplies a finite-grid hardmax/ReLU approximation argument to bridge that difference. The fixed-width claim is for fixed `d,n` and integrated `L_p` error; it does not claim one network works uniformly across sequence lengths.

For the sequence limits, the passages consulted were Hahn, §3, §5.1, Theorem 1/Corollary 2, Lemma 5 and its proof, and §6/Theorem 6 and footnote 4 (`https://aclanthology.org/2020.tacl-1.11.pdf`). Hahn's §5 model uses an end marker at the final input position. The local PCFG item directly proves the stated cylinder law and positive paired-prefix mass, including its separate all-`p` stream and termination-conditioned cases; the local extension is not attributed to Hahn. The source's finite-mean Markov-chain sketch is not used as the proof of the local mass bound.

The PCFG paired-prefix calculation, mixture-entropy inequality, one-symbol influence induction, parity target law, 2DYCK excess-loss bound, permutation-equivariance argument, forward-pass instructions, and cost/path-length estimates were checked from the opened item statements and proofs. No diagram is used as a proof premise. The feedforward-network diagram correctly depicts the stated two-input/two-hidden-node scalar-output instance.

## Repair

In `items/lem-hard-attention-depth-reduction.md`, the statement previously allowed a restriction to assign content-alphabet symbols to every model input position, including the final end marker. The cited sequence-model definition fixes that last position to `eos`, so the old restriction hypothesis also allowed completions outside the model's input domain. The statement now fixes `eos` at position `n`, permits restrictions only on the first `n-1` content positions, and says free-position counts refer only to those content positions. The proof still counts all `n` model positions for supports, queries, and keys; the end-marker activation has no free content input. The direct consumer `thm-hard-attention-languages` and indirect consumer `thm-transformer-formal-language-limits` were checked against this clarified convention: both keep the end marker fixed, and their free positions are word positions. The example `ex-fixed-length-vs-unbounded-sequence-limits` uses the unchanged theorem conclusion.

Updated the lemma's proof-contract reader note and synchronized the direct consumer `thm-hard-attention-languages` Statement citation mirror with the clarified restriction convention. The indirect consumer `thm-transformer-formal-language-limits` remains consistent. No consumer item text needed repair, and no `verification.judge` record was present to remove.

Required item checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-hard-attention-depth-reduction.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-hard-attention-depth-reduction.md` — pass, 1 proof checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-hard-attention-depth-reduction.md` — 1 item, 10 steps, 0 defects.

## Uneditable findings

The following published suppliers are outside this batch's write scope. Their complete statements, definitions, or prose remarks contain hyperlinks instead of moving those links to the immediately following references section required by the uninterrupted-statement rule. These are nonfatal presentation defects; they do not change the cited mathematical conclusions. The exact subjects, locations, and routed assigned consumers are in the returned JSON.

For the hard-attention dependency closure, the affected carriers are `lem-of-sign-rules`, `lem-of-mult-neg`, `lem-of-zero-mult`, `lem-of-inverse-unique`, `def-ordered-field`, `def-field`, `def-multigraph-loop-and-digraph`, `def-finite-simple-graph`, `rem-finite-simple-graph-convention`, `def-finite-cardinality`, `def-function`, `def-finite-sum`, and `thm-reals-ordered-field`; the assigned consumer is `lem-hard-attention-depth-reduction`.

For the fixed-width measure/topology dependency closure, the affected carriers are `def-countable-choice`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-borel-sets-are-lebesgue-measurable`, `thm-heine-cantor-metric`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, and `def-elementary-set-in-rn`; the assigned consumer is `thm-fixed-width-transformer-lp-universality`.

No mathematical defect was found in the opened supplier claims needed by this batch. The published items above were not edited.

## Page verdicts

- `attention-and-transformer-expressivity`: pass. Draft status, item inventory, required feedforward page, empty body, and `page_layout: compact-v1` agree with the manifest and page policy.
- `attention-and-transformer-expressivity-examples`: pass. Draft status and example inventory agree with the manifest; the body is empty and `page_layout: compact-v1` is present.
- Required dependency page `feedforward-networks-and-universal-approximation`: inspected as prerequisite context; its draft status, compact layout, and listed supplier inventory are present. It is outside batch 36 and was not edited.

## Blockers and coverage limits

No blocker prevented review of batch 36. The opened `batch-36.dependency-inputs.json` records a scheduling-input hash conflict and omits the manifest-assigned `lem-2dyck-pcfg-prefix-mass-positive` from its `item_dependency_levels`; the manifest and proof-contract scope include that item, and this review followed the manifest. Run status also showed an unrelated `3a-split` blocker for batch 8.

All 21 manifest-assigned items and both assigned pages were read. The required feedforward page was opened, but its full listed item inventory was not audited item-by-item; only the actual logical supplier `def-feedforward-neural-network` was needed for the assigned claims. Foundational ancestry beneath the opened published supplier results was not re-audited wholesale.
