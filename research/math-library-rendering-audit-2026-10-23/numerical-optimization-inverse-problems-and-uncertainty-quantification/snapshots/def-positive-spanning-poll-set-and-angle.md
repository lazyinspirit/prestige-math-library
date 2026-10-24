---
id: def-positive-spanning-poll-set-and-angle
kind: definition
title: "Positive-spanning poll sets"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-finite-sum
  - lem-finite-set-has-max
  - def-max-min
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6 and Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $n\ge1$ and let $D=(d_1,\ldots,d_m)$ be a nonempty finite ordered list in $\mathbb R^n$. For coefficients $\lambda_1,\ldots,\lambda_m$, the finite vector sum $\sum_{i=1}^m\lambda_i d_i$ means the vector whose $k$th coordinate is $\sum_{j<m}\lambda_{j+1}(d_{j+1})_k$ for each $k<n$; this is the finite real sum of [[def-finite-sum]]. The list is **positive spanning** if every $w\in\mathbb R^n$ has such a representation with $\lambda_i\ge0$. Keep the order to make a deterministic poll. Define the directional score $\psi_D(v)=\max_{1\le i\le m}(-\langle v,d_i\rangle)$ for unit $v$, and the largest poll norm $D_{\max}=\max_{1\le i\le m}\|d_i\|_2$. These maxima exist because their indexing sets are nonempty and finite ([[lem-finite-set-has-max]], [[def-max-min]]). A positive uniform lower bound for $\psi_D$ is a separate theorem, not part of this definition.
