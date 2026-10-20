---
id: ex-position-free-vs-position-encoded-token-order
kind: example
title: "Position-free versus position-encoded token order"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-positional-encoding-and-causal-mask
  - thm-transformer-permutation-equivariance-without-position
  - thm-fixed-width-transformer-lp-universality
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Yun et al., Theorems 2–3 and Appendix A"
      url: "https://arxiv.org/pdf/1912.10077"
---

## Example

Let $X=(x_1,x_2)\in[0,1]^{1\times2}$ and define the constant ordered-output map $f(X)=(0,1)$. A position-free unmasked self-attention stack followed by shared tokenwise maps must permute its two output entries when the two input tokens are exchanged, whereas a trainable positional matrix can distinguish the first and second token positions. On the compact square $[0,1]^2$, the position-encoded fixed-length theorem therefore approximates $f$ in integrated $L_p$ error for every $1\le p<\infty$.

## Example references

[Yun et al., Appendix A: permutation equivariance without positional encoding](https://arxiv.org/pdf/1912.10077)

[Yun et al., Theorem 3: trainable positional encodings on a compact domain](https://arxiv.org/pdf/1912.10077)

## Facts & Assumptions

**Given:** The two-token input $X$, the coordinate-swap permutation $P$, the constant map $f$, and position-free or position-encoded Transformer stacks as in the Example.

[F1] Every finite composition of unmasked position-free self-attention layers and shared tokenwise maps satisfies $T(XP)=T(X)P$ ([[thm-transformer-permutation-equivariance-without-position]]).

[F2] For fixed sequence length and embedding dimension, a two-head, head-size-one Transformer with width-four ReLU feedforward layers and a trainable positional matrix approximates every continuous map on a compact domain in integrated $L_p$ error, for $1\le p<\infty$ ([[thm-fixed-width-transformer-lp-universality]]).

## Proof

1.1 Let $P$ swap the two columns. Since $f$ is constant, $f(XP)=(0,1)$, while $f(X)P=(1,0)$. Hence $f(XP)\ne f(X)P$, so $f$ is not permutation equivariant. By [F1], no position-free stack can equal $f$ on both $X$ and $XP$. [given, F1, algebra]

1.2 The map $f$ is continuous on the compact square. Applying [F2] with any prescribed $\varepsilon>0$ gives a position-encoded stack whose integrated $L_p$ error from $f$ is less than $\varepsilon$. Thus positional tags remove the equivariance restriction for this fixed-length approximation problem. [given, F2] ∎
