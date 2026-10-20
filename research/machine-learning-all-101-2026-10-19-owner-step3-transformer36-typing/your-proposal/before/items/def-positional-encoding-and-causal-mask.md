---
id: def-positional-encoding-and-causal-mask
kind: definition
title: "Positional encodings and causal masks"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §§3.2.3 and 3.5"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §§11.6.3 and 11.7.5"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html"
---

## Definition

For a sequence of length $n$ with $d$-dimensional token representations, a positional encoding is a fixed or trainable matrix $P\in\mathbb R^{n\times d}$ added rowwise to the token matrix $X\in\mathbb R^{n\times d}$, giving $X+P$. One fixed choice, with positions $s\in\mathbb N_0$ and coordinates indexed from $0$, is $P_{s,2r}=\sin(s/10000^{2r/d})$ and $P_{s,2r+1}=\cos(s/10000^{2r/d})$ whenever the indicated coordinate is less than $d$.

For decoder self-attention on $n$ positions, the causal mask is $M\in(\mathbb R\cup\{-\infty\})^{n\times n}$ with $M_{ij}=0$ when $j\le i$ and $M_{ij}=-\infty$ when $j>i$. Thus query position $i$ can use keys at positions $1,\ldots,i$ and cannot use a future position; every row has an allowed key because $M_{ii}=0$.

## Definition references

[Vaswani et al., §3.5: positional encodings added to embeddings and sinusoidal formula](https://arxiv.org/pdf/1706.03762)

[Vaswani et al., §3.2.3: masking illegal decoder connections before softmax](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.6.3: absolute and relative positional information](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html)

[Dive into Deep Learning, §11.7.5: autoregressive decoder mask](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)
