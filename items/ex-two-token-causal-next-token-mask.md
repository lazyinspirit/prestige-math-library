---
id: ex-two-token-causal-next-token-mask
kind: example
title: "A two-token causal next-token mask"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-transformer-forward-pass
  - def-positional-encoding-and-causal-mask
  - def-scaled-dot-product-attention
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §3.2.3"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §11.7.2"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html"
---

## Example

For two scalar token states $x_1=1$ and $x_2=3$, take query and key projections equal to zero, value projection equal to the identity, and the causal additive mask
$$
M=\begin{pmatrix}0&-\infty\\0&0\end{pmatrix}.
$$
Row-softmax attention assigns the first query all weight to token $1$ and the second query equal weight to tokens $1$ and $2$, so the output states are $(1,2)$.

## Example references

[Vaswani et al., §3.2.3: decoder masking of future positions](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.7.2: decoder self-attention with causal masking](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)

## Facts & Assumptions

**Given:** Two scalar token states, zero query and key projections, identity value projection, row softmax, and the causal mask in the Example.

[F1] Masked attention replaces disallowed logits by $-\infty$, requires at least one allowed key in each row, and normalizes each allowed row by softmax ([[def-scaled-dot-product-attention]]).

[F2] The decoder's causal mask permits key positions $j\le i$ for query position $i$ ([[def-positional-encoding-and-causal-mask]]).

## Verification

1.1 Both unmasked logits are zero. In the first row the mask leaves logits $(0,-\infty)$, whose row-softmax is $(1,0)$; multiplying by values $(1,3)^{\mathsf T}$ gives output $1$. [given, F1, algebra]

2.1 In the second row the mask leaves logits $(0,0)$, whose row-softmax is $(1/2,1/2)$; multiplying by $(1,3)^{\mathsf T}$ gives output $2$. Both rows have at least one allowed key, so the masked attention is defined. [given, F1, F2, algebra] ∎
