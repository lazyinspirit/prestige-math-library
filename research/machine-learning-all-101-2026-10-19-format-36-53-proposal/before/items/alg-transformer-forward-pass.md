---
id: alg-transformer-forward-pass
kind: algorithm
title: "Transformer encoder-decoder forward pass"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-transformer-encoder-decoder-layer
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §§3.1–3.5"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §§11.7.1–11.7.7"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html"
---

## Definition

**Inputs:** A nonempty source token sequence $(x_1,\ldots,x_n)$, a target prefix $(y_0,\ldots,y_{m-1})$ with $m\ge1$ and a start token $y_0$, source and target embedding maps into $\mathbb R^d$, positional encoding matrices of compatible shapes, a finite encoder stack, a finite decoder stack, and a linear output map to a finite vocabulary of logits. Each layer has the parameters and conventions in the transformer encoder/decoder definition. All self-attention and cross-attention masks must leave at least one allowed key in every query row.

**Procedure:**

1. Embed each source token and add its positional vector to form $X\in\mathbb R^{n\times d}$.
2. Apply the encoder layers in order to $X$ and call the final matrix $E\in\mathbb R^{n\times d}$.
3. Embed each target-prefix token and add its positional vector to form $U\in\mathbb R^{m\times d}$.
4. Apply each decoder layer in order. In every decoder layer, use the causal mask on decoder self-attention, use the current decoder rows as queries and $E$ as keys and values for cross-attention, and then apply the positionwise feedforward sublayer.
5. Apply the output linear map to each final decoder row and apply softmax over vocabulary coordinates. Return the encoder matrix $E$, the final decoder hidden matrix, and the rowwise next-token probability matrix.

**Outputs:** The source representations, decoder representations, and one probability vector for each target-prefix position. At position $i$, the decoder self-attention calculation uses only target-prefix positions $j\le i$; the encoder cross-attention may use every source position.

## Definition references

[Vaswani et al., §3.1: encoder/decoder stacks and shifted autoregressive targets](https://arxiv.org/pdf/1706.03762)

[Vaswani et al., §§3.2.3–3.5: cross-attention, causal mask, feedforward maps, and positional encodings](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §§11.7.1–11.7.7: encoder-decoder model and forward computation](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html)

[[def-transformer-encoder-decoder-layer]]: exact residual, normalization, attention, and feedforward layer conventions.
