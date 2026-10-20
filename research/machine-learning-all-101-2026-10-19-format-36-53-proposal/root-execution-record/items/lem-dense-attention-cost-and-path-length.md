---
id: lem-dense-attention-cost-and-path-length
kind: lemma
title: "Dense full-attention interaction cost and path length"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-transformer-forward-pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, Table 1 and §4"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §11.6.2 Comparing CNNs, RNNs, and Self-Attention"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html"
---

## Statement

Use the standard dense self-attention interaction with $n$ token rows, model width $d$, and $h$ heads whose total query/key/value width is $d$ (for example, $h$ heads of width $d/h$ when $h$ divides $d$). Counting scalar multiply-add operations in the direct matrix implementation, forming all query-key scores and applying the resulting dense weight matrix to all value rows costs $O(n^2d)$ per attention sublayer; row softmax adds $O(n^2)$. Every query position has a direct value path from every key position, so one unmasked self-attention sublayer gives path length one between any input token value and any output token. A fixed stack of $L$ such layers has a position-to-position path of at most $L$ attention edges, independent of $n$.

If each query, key, value, and output projection is a dense $d\times d$ linear map and the tokenwise feedforward width is $d_{\rm ff}$, those operations add $O(nd^2+ndd_{\rm ff})$ work per full Transformer layer. Thus the $O(n^2d)$ claim concerns the dense all-pairs attention interaction used in the source comparison; it does not assert that projections or the feedforward sublayer have that cost, and it makes no claim about sparse attention, linear attention, training work, memory traffic, or hardware speed.

## Statement references

[Vaswani et al., Table 1 and §4: self-attention interaction complexity, sequential operations, and maximum path length](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.6.2: scaled-attention matrix multiplications and direct token connections](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html)

## Facts & Assumptions

**Given:** Positive integers $n,d$, the dense multi-head self-attention dimensions in the Statement, and the direct matrix implementation.

[F1] The forward pass forms scaled query-key scores, applies row softmax, and multiplies the resulting attention weights by values ([[alg-transformer-forward-pass]]).

## Proof

1.1 For one head of width $d_h$, the score product has dimensions $(n\times d_h)(d_h\times n)$ and therefore uses $O(n^2d_h)$ scalar multiply-adds. The value product has dimensions $(n\times n)(n\times d_h)$ and also uses $O(n^2d_h)$ operations. [given, F1, algebra]

1.2 Summing over $h$ heads with total width $\sum_{a=1}^h d_h^{(a)}=d$ gives $O(n^2d)$ score and value work. Normalizing $n$ rows of $n$ scores costs $O(n^2)$, which is at most $O(n^2d)$ because $d\ge1$. [step 1.1, algebra]

2.1 For finite real scores, every softmax weight is strictly positive, so each output row uses the value row of every input position. This is one direct attention edge; composing $L$ layers yields at most one such edge per layer, hence at most $L$ attention edges independent of $n$. [F1, given, algebra]

2.2 A dense projection of an $n\times d$ matrix by a $d\times d$ matrix costs $O(nd^2)$, and a two-map positionwise feedforward network of hidden width $d_{\rm ff}$ costs $O(ndd_{\rm ff})$. Adding these separate terms gives the full-layer operation count stated in the Statement. [given, F1, algebra] ∎
