# Step 3a reader report — batch 94

Run: `machine-learning-all-101-2026-10-19`  
Review date: 2026-10-20

## Verdict

No confirmed mathematical, citation, statement-formatting, contract, or page defect was found in the assigned batch. No item or page was edited, so there is no repair evidence or stale judge record to remove, and no reflow, precheck, or proof-layout command was needed. There are no uneditable findings.

The A page, `exact-tiled-attention-and-memory-aware-differentiation`, contains only its YAML frontmatter, preserves its inventory and `page_layout: compact-v1`, and has no summary body. Its item dependencies and three required pages match the current assignment. No page defect found.

The B page, `exact-tiled-attention-and-memory-aware-differentiation-examples`, contains only its YAML frontmatter, preserves its example inventory and `page_layout: compact-v1`, and has no summary body. It requires the assigned A page. No page defect found.

## Opened inventory

Assigned pages:

- `library/machine-learning/exact-tiled-attention-and-memory-aware-differentiation.md`
- `library/machine-learning/exact-tiled-attention-and-memory-aware-differentiation-examples.md`

Direct prerequisite pages inspected for their dependency inventories:

- `library/machine-learning/attention-and-transformer-expressivity.md`
- `library/machine-learning/automatic-differentiation-and-backpropagation.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/automatic-differentiation-and-computational-graphs.md`

Assigned items, reviewed in the batch's supplier-to-consumer order:

- `def-attention-block-summary`
- `alg-exact-tiled-softmax-attention`
- `thm-tiled-attention-exactness`
- `thm-tiled-attention-workspace-and-work`
- `rem-attention-io-model-and-roundoff`
- `ex-tiled-attention-one-key`
- `ex-tiled-attention-empty-first-masked-block`
- `ex-tiled-attention-two-merge-orders`
- `ex-tiled-attention-replay-dropout-mask`

Current-run dependency items inspected for the direct claims:

- `def-scaled-dot-product-attention` (batch 36)
- `alg-backpropagation-through-shared-parameter-recurrence` (batch 38)
- `thm-shared-parameter-backpropagation-gradient-formula` (batch 38)

Published mathematical suppliers inspected for the derivative arguments:

- `def-finite-straight-line-computational-program`
- `def-c-one-map-and-local-inverse`
- `def-total-derivative-in-euclidean-space`
- `def-euclidean-linear-map`
- `lem-euclidean-linear-maps-have-matrices-and-are-bounded`
- `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`
- `thm-chain-rule-for-total-derivatives`
- `alg-reverse-mode-automatic-differentiation`
- `lem-finite-straight-line-program-defines-c1-map`
- `thm-reverse-mode-computes-gradient`

I inspected the batch 94 proof-contract rows for all nine assigned items and the run-local source-coverage/source-evidence records. The task-specific dispatch did not provide a separate rendered reader bundle; I used those records as navigation and checked the current item and supplier carriers directly.

## Mathematical review and source evidence

The block-summary definition handles the empty set separately and restricts maxima and numeric coordinates to nonempty finite subsets. For disjoint blocks, the merge rescales each shifted normalizer and weighted-value sum to the common maximum; direct substitution gives the summary of the union. The algorithm skips empty blocks, copies the first nonempty summary, and then merges disjoint blocks. Since every allowed row is nonempty and the key blocks partition the key indices, each final normalizer is positive and every output is defined.

The reverse formulas are correct for the stated fixed mask, scale, and upstream matrix. Direct differentiation of the dense masked softmax gives score pullback

`p_ij (G_i · V_j − G_i · Y_i)`,

value pullback `p_ij G_i`, and score derivatives `c K_j` and `c Q_i` for the query and key coordinates. The theorem proves that the tiled statistics recover the dense probabilities, differentiates the smooth dense graph rather than the maximum-shift computation, and uses the shared-parameter recurrence supplier to add contributions at repeated key/value inputs. This justifies the fixed-shift rule even at tied maxima. I found no missing hypothesis, unsupported inference, or discrepancy in the one-key, empty-first-block, merge-order, or replayed-dropout calculations.

The workspace theorem counts input/output arrays and row statistics as `O(n(d+v))`, block scores and summary vectors as `O(b+v)`, and at most `n²` query-key pairs at `O(d+v)` work per pair. Its mask-access and unit-cost assumptions are stated. The remark correctly separates this scalar real-arithmetic bound from the paper's hardware I/O model and finite-precision behavior.

The in-run shared-parameter algorithm's TikZ graph has arrows from the common parameter to the initial map, each transition, and the loss, with state arrows in forward order. It matches the prose; the proof does not rely on the diagram. No assigned item or page requires an additional diagram for its argument.

Authoritative source passages checked:

- Vaswani et al., *Attention Is All You Need*, §3.2.1, PDF p. 3, gives the scaled dot-product formula and query/key/value dimensions: <https://arxiv.org/pdf/1706.03762>. Dive into Deep Learning, §11.3.3, gives the matrix formula with query, key, and value shapes: <https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html>. These support the current `def-scaled-dot-product-attention` formula; its nonempty-mask condition is stated locally.
- Dao et al., *FlashAttention*, §3.1, Algorithm 1 and Theorem 1, and the complete Appendix C proof (PDF pp. 22–24), establish the online max/normalizer/value invariant and the paper's own exact output and arithmetic/memory result. Appendix B.2, equations (3)–(6), and Algorithms 2 and 4 in B.3–B.4 (PDF pp. 20–21) give the recomputed backward formulas and RNG-state replay. §3.2, Theorem 2, and Appendix C's Proposition 3 proof state the separate SRAM/HBM range and the all-memory-sizes lower-bound argument: <https://arxiv.org/pdf/2205.14135>. The local proofs explicitly extend the formulas to their stated dimensions and arbitrary fixed allowed-key sets.
- Milakov and Gimelshein, *Online normalizer calculation for softmax*, §3, Algorithm 3 and Theorem 1 with its induction proof, establishes the running maximum and shifted normalizer (PDF pp. 2–4). §3.1 states associativity and commutativity of its parallel merge while omitting their proofs; the local merge-invariant proof does not rely on those omitted arguments: <https://arxiv.org/pdf/1805.02867>.
- MIT OCW 18.S096, *Matrix Calculus for Machine Learning and Beyond*, Chapter 8 §§8.3–8.3.1 (PDF pp. 56–60), explains path products and reverse accumulation as the sum of contributions from downstream uses. The JMLR survey by Baydin et al., §§3.1–3.2 (PDF pp. 8–12), and MIT OCW Lecture 5 Part 3, §§8.3–8.4 (PDF pp. 6–11), support the general reverse-mode and shared-input accumulation conventions used by the batch 38 suppliers.

The source statements and locators agree with the local claims. The local proofs supply the mask, arbitrary-scale, finite-dimension, and fixed-realization details rather than treating the citations as substitute proofs.

## Edits and uneditable defects

- Edits: none.
- Confirmed defects not editable in this scope: none.
- Unresolved mathematical uncertainty: none.

## Blocker

There is no blocker for batch 94. The live autopilot status showed no active writer and an unrelated `3a-collect` blocker for batch 57 (`collect-57` failed three times); that run-level issue does not prevent this review report.

## Coverage note

I checked all assigned items, both assigned pages, the direct current-run suppliers, and the published mathematical suppliers used in the assigned arguments. I did not recursively audit every foundation beneath those already published suppliers. No separate rendered bundle was present in the dispatch artifacts; the batch source records and current carriers were available. No mathematical source uncertainty remains.
