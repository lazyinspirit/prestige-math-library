---
id: def-attention-block-summary
kind: definition
title: "Stable summary of an attention key block"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-scaled-dot-product-attention
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §3.1 and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
    - title: "Maxim Milakov and Natalia Gimelshein, Online normalizer calculation for softmax, §3"
      url: "https://arxiv.org/pdf/1805.02867"
---

## Definition

Let $n,d,v$ be positive integers, let $Q,K\in\mathbb R^{n\times d}$ and $V\in\mathbb R^{n\times v}$, let $c\in\mathbb R$, and for each query row $i\in\{1,\ldots,n\}$ let $A_i\subseteq\{1,\ldots,n\}$ be a nonempty set of allowed keys. Write $q_i$ for row $i$ of $Q$, $k_j$ for row $j$ of $K$, $v_j$ for row $j$ of $V$, and $s_{ij}=c\sum_{r=1}^{d}Q_{ir}K_{jr}$ for $j\in A_i$. For a nonempty finite set $S\subseteq A_i$, its attention summary is

$$
\Sigma_i(S)=(m_i(S),\ell_i(S),z_i(S)),\qquad m_i(S)=\max_{j\in S}s_{ij},\quad \ell_i(S)=\sum_{j\in S}e^{s_{ij}-m_i(S)},\quad z_i(S)=\sum_{j\in S}e^{s_{ij}-m_i(S)}v_j.
$$

The empty set has the separate state $\bot$ and has no maximum or numeric summary coordinates. For disjoint nonempty $S,T\subseteq A_i$, define their merge by

$$
m'=\max(m_i(S),m_i(T)),\qquad \ell'=e^{m_i(S)-m'}\ell_i(S)+e^{m_i(T)-m'}\ell_i(T),\qquad z'=e^{m_i(S)-m'}z_i(S)+e^{m_i(T)-m'}z_i(T).
$$

and set $\Sigma_i(S)\star\Sigma_i(T)=(m',\ell',z')$. This summary stores the maximum score, a positive shifted normalizer, and the correspondingly shifted weighted value sum; dividing its third coordinate by its second gives the attention output on $S$.

## Definition references

[[def-scaled-dot-product-attention|Masked row-softmax attention and its nonempty-row convention]]

[Dao et al., §3.1 and Appendix C: online maximum, normalizer, and weighted-value summaries](https://arxiv.org/pdf/2205.14135)

[Milakov and Gimelshein, §3: online maximum and softmax normalizer](https://arxiv.org/pdf/1805.02867)
