---
id: lem-relaxed-euclidean-squared-norm
kind: lemma
title: Relaxed inequalities for squared Euclidean norms
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix B, Lemma 3"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

For vectors $u,v\in\mathbb R^d$ and $a>0$,
$$ \|u+v\|_2^2\le(1+a)\|u\|_2^2+(1+a^{-1})\|v\|_2^2, \qquad 2|\langle u,v\rangle|\le a\|u\|_2^2+a^{-1}\|v\|_2^2. $$
For $m\ge1$ vectors $u_1,\ldots,u_m\in\mathbb R^d$,
$$ \left\|\sum_{j=1}^m u_j\right\|_2^2\le m\sum_{j=1}^m\|u_j\|_2^2. $$

## Facts & Assumptions

**Given:** The standard Euclidean inner product and norm on $\mathbb R^d$, with $\|x\|_2^2=\langle x,x\rangle$.

[A1] The real inner product is symmetric and bilinear, and squared norms are nonnegative.

## Proof

1.1 Expanding the first inequality's right side minus its left side gives [given]
$$ a\|u\|_2^2+a^{-1}\|v\|_2^2-2\langle u,v\rangle =\|\sqrt a\,u-a^{-1/2}v\|_2^2\ge0. $$
Replacing $v$ by $-v$ gives the same bound with
$+2\langle u,v\rangle$; together these two bounds yield both displayed
two-vector inequalities. [given, A1, algebra]

1.2 Expanding each squared difference and collecting diagonal and cross terms [given]
gives
$$ m\sum_{j=1}^m\|u_j\|_2^2-\left\|\sum_{j=1}^m u_j\right\|_2^2 =\sum_{1\le i<j\le m}\|u_i-u_j\|_2^2\ge0. $$
This proves the finite-sum inequality, including $m=1$, when the right
difference is zero. [A1, algebra] ∎
