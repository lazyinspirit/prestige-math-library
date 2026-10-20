---
id: def-multihead-self-attention
kind: definition
title: "Multi-head attention and self-attention"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-scaled-dot-product-attention
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Vaswani et al., Attention Is All You Need, §3.2.2"
      url: "https://arxiv.org/pdf/1706.03762"
    - title: "Dive into Deep Learning, §11.5.1 Multi-Head Attention"
      url: "https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html"
---

## Definition

Let $h,d_q,d_k,d_v,d_h,d_{vh},d_o,n_q,n_k$ be positive integers. For query, key, and value matrices $Q\in\mathbb R^{n_q\times d_q}$, $K\in\mathbb R^{n_k\times d_k}$, and $V\in\mathbb R^{n_k\times d_v}$, choose matrices $W_i^Q\in\mathbb R^{d_q\times d_h}$, $W_i^K\in\mathbb R^{d_k\times d_h}$, and $W_i^V\in\mathbb R^{d_v\times d_{vh}}$ for each head $i=1,\ldots,h$, and choose $W^O\in\mathbb R^{h d_{vh}\times d_o}$. The $i$-th head is

$$
H_i=\operatorname{Attn}(QW_i^Q,KW_i^K,VW_i^V)\in\mathbb R^{n_q\times d_{vh}},
$$

where $\operatorname{Attn}$ is scaled dot-product attention, with any chosen mask applied to its score matrix. Multi-head attention is

$$
\operatorname{MHA}(Q,K,V)=\operatorname{Concat}_{\rm feature}(H_1,\ldots,H_h)W^O\in\mathbb R^{n_q\times d_o}.
$$

Self-attention is the specialization $Q=K=V=X$ for a single token matrix $X\in\mathbb R^{n\times d}$; each row is one token representation. Unmasked self-attention permits every query row to use every key row. Masked self-attention applies one specified mask to every head.

## Definition references

[Vaswani et al., §3.2.2: learned head projections, parallel attention heads, concatenation, and output projection](https://arxiv.org/pdf/1706.03762)

[Dive into Deep Learning, §11.5.1: multi-head query/key/value projections and output shape](https://www.d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html)

[[def-scaled-dot-product-attention]]: row-softmax weighted-value formula and nonempty-mask-row condition.
