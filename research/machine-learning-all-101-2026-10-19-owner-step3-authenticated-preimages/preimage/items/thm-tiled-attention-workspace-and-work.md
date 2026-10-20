---
id: thm-tiled-attention-workspace-and-work
kind: theorem
title: "Tiled attention uses linear retained memory and quadratic arithmetic"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-exact-tiled-softmax-attention
  - def-attention-block-summary
  - thm-tiled-attention-exactness
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §3.1, Appendix B.2–B.4, and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
    - title: "Maxim Milakov and Natalia Gimelshein, Online normalizer calculation for softmax, §3"
      url: "https://arxiv.org/pdf/1805.02867"
---

## Statement

In the unit-cost real-arithmetic model where scalar arithmetic, exponential evaluation, comparisons, and one allowed-key membership query each cost $O(1)$, the forward and reverse procedures of the exact tiled softmax attention algorithm use $O(n^2(d+v))$ arithmetic operations. The forward procedure retains the $Q,K,V$ inputs, the $n\times v$ output, and two scalar statistics per query, requiring $O(n(d+v))$ stored input and output scalars, with at most $O(b+v)$ additional live scalars for one block's scores and weighted-value summary. The reverse procedure additionally takes $G$ and returns $dQ,dK,dV$; counting these as input and output arrays, it also uses $O(n(d+v))$ stored input and output scalars and at most $O(b+v)$ additional live scalars. Neither procedure materializes an $n\times n$ score or probability array. Storage for a caller-owned mask representation is input storage and is not part of the additional workspace; if it is a dense array, its own $O(n^2)$ entries must be counted separately. The exactness of the forward and reverse outputs is the assertion of the tiled-attention exactness theorem. No hardware I/O or floating-point operation count is asserted.

## Statement references

[Dao et al., §3.1 and Appendix C: forward arithmetic and extra-memory count](https://arxiv.org/pdf/2205.14135)

[Dao et al., Appendix B.2–B.4: recomputed reverse pass and its linear extra-memory claim](https://arxiv.org/pdf/2205.14135)

[[thm-tiled-attention-exactness|Exact forward output and reverse-mode derivatives]]

## Facts & Assumptions

**Given:** The positive integers $n,d,v,b$, fixed allowed-key sets, and the two procedures of the exact tiled softmax attention algorithm.

[F1] [[alg-exact-tiled-softmax-attention]]: the forward procedure processes one query row and one key block at a time, while the reverse procedure recomputes each permitted score and accumulates gradients into output arrays.

[F2] [[def-attention-block-summary]]: a nonempty block summary stores one scalar maximum, one scalar normalizer, and one vector in $\mathbb R^v$; an empty block stores no numeric state.

[F3] [[thm-tiled-attention-exactness]]: the two procedures return the dense masked attention and its exact vector-Jacobian product.

[F4] [[alg-exact-tiled-softmax-attention]]: the reverse procedure recomputes each block's scores and does not store a full score or probability matrix.

[A1] The mask membership accessor is read-only, has $O(1)$ query cost, and any storage for its representation is caller-owned input storage rather than algorithmic scratch.

[A2] The operation count is scalar arithmetic, exponential evaluation, comparisons, and mask membership queries; all are unit cost in this model.

## Proof

**Proof technique:** count the live arrays, block workspace, and operations in the explicit loops.

1.1 The forward procedure retains $Q,K,V,Y$ and $(m_i,\ell_i)_{i=1}^n$. Their scalar counts are $nd+nd+nv+nv+2n=O(n(d+v))$ because $d,v\ge1$. At any query and key block it stores at most $b$ scores and the current and block weighted-value vectors of length $v$, plus a constant number of scalars. This is $O(b+v)$ extra live storage, and it discards the block workspace before moving to the next block. [F1, F2, A1, given, algebra]

1.2 The forward loops examine at most $n^2$ query-key pairs. For each pair, the score dot product uses $O(d)$ operations; its normalized exponential and weighted-value contribution use $O(1+v)$ operations. Block maxima, merges, and loop overhead add at most $O(n^2)$ operations since $b\ge1$. Thus forward arithmetic is $O(n^2(d+v))$. Only one block's scores and weighted-value summaries are live, so no $n\times n$ score or probability array is allocated. [F1, F2, A2, given, algebra]

1.3 The reverse procedure's retained arrays are $Q,K,V,Y,G,dQ,dK,dV$ and the $2n$ row statistics. Their scalar counts are all $O(n(d+v))$. For one row and one key it recomputes one score and one probability, forms scalar inner products, and updates entries in the already allocated gradient arrays; it needs only a constant number of additional scalars, which is within $O(b+v)$. It does not store the recomputed probabilities across pairs. [F4, A1, given, algebra]

2.1 Each query-key pair in the reverse pass costs $O(d+v)$ operations: one score, one inner product with $V_j$, and vector updates with lengths $d$ and $v$. There are at most $n^2$ pairs, and the finite loop overhead is at most $O(n^2)$, so reverse arithmetic is $O(n^2(d+v))$. Since scores and probabilities are recomputed one at a time, this pass also creates no $n\times n$ array. The separate exactness claim is supplied by [F3]. [F3, F4, A2, given, algebra] ∎
