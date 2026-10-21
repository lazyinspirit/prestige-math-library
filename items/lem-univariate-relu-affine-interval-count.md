---
id: lem-univariate-relu-affine-interval-count
kind: lemma
title: "A univariate ReLU network with H hidden layers has a product bound on affine intervals"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matus Telgarsky, Representation Benefits of Deep Feedforward Networks, Lemma 2.1"
      url: "https://arxiv.org/pdf/1509.08101"
      locator: "Lemma 2.1 and proof, piecewise-linear interval count by layer."
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, proof of Theorem 6"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Theorem 6 proof, pp. 25–26; affine-piece count for fixed depth."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Let a scalar-input ReLU network have $H\ge0$ hidden layers of widths $n_1,\ldots,n_H$ and an affine output. On any interval, its output is affine on at most $\prod_{\ell=1}^H(n_\ell+1)$ subintervals. In particular, if it has $U=\sum_\ell n_\ell$ hidden units, the number of affine intervals is at most $(1+U/H)^H$ for $H\ge1$, and is $1$ when $H=0$.

## Statement references

[Telgarsky, Lemma 2.1: univariate piecewise-linear interval count](https://arxiv.org/pdf/1509.08101)

[Yarotsky, proof of Theorem 6: fixed-depth affine-piece count](https://arxiv.org/pdf/1610.01145)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** A scalar-input ReLU network as in [[def-relu-network]], hidden widths $n_1,\ldots,n_H$, and an interval $I\subseteq\mathbb R$.

[F1] Every hidden unit applies ReLU to an affine combination of earlier values, and the final output is affine ([[def-relu-network]]).

## Proof

1.1 Before any hidden layer, the input is affine on $I$. Suppose all values through layer $\ell-1$ are affine on each of $M$ subintervals. On any one such interval, every preactivation in layer $\ell$ is affine, and each has at most one zero unless it is identically zero. The at most $n_\ell$ zeros divide that interval into at most $n_\ell+1$ subintervals on each of which all ReLU outputs are affine. [given, F1, induction]

2.1 Induction over the hidden layers gives at most $\prod_{\ell=1}^H(n_\ell+1)$ intervals; the affine output adds no breakpoints. For $H\ge1$, AM–GM gives $\prod(n_\ell+1)\le(1+H^{-1}\sum n_\ell)^H=(1+U/H)^H$. With no hidden layer the output is affine on the entire interval. [step 1.1, algebra] ∎
