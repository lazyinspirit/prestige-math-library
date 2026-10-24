---
id: lem-m0w-separable-and-projection-tails
kind: lemma
title: The multiscale coefficient space is separable and has vanishing projection tails
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-multiscale-coefficient-space-m0w
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §2.1"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §5.2.2"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

For every weight sequence in [[def-multiscale-coefficient-space-m0w]], $M_0(w)$ is a separable Banach space. If $P_J$ retains exactly the coefficients at levels $l\le J$, then $\|P_Jx\|_{M(w)}\le\|x\|_{M(w)}$ and $\|x-P_Jx\|_{M(w)}\to0$ for each $x\in M_0(w)$. Every square-summable coefficient sequence belongs to $M_0(w)$.

## Facts & Assumptions

**Given:** The finite level sets $K_l$, weights $w_l\ge1$, and the vanishing-tail definition of $M_0(w)$.

[F1] [[def-multiscale-coefficient-space-m0w]]: the detail norm is $D(x)=\sup_l w_l^{-1}\max_{k\in K_l}|x_{lk}|$. Without an extra scaling coordinate the norm is $D(x)$; in the Haar convention, writing $x_*$ for that coordinate, it is $\max(|x_*|,D(x))$. Membership in $M_0(w)$ means the normalized detail maximum tends to zero. As in that definition, every $P_J$ retains the finite coarsest coordinates, including $x_*$ when present.

## Proof

1.1 Let $(x^{(m)})$ be Cauchy in $M_0(w)$. Each coordinate is Cauchy because $|x^{(m)}_{lk}-x^{(n)}_{lk}|\le w_l\|x^{(m)}-x^{(n)}\|_{M(w)}$. In the Haar case also $|x_*^{(m)}-x_*^{(n)}|\le\|x^{(m)}-x^{(n)}\|_{M(w)}$. Let $x_{lk}$ and, when present, $x_*$ be the scalar limits. The uniform Cauchy bound passes to every finite collection of coordinates and then to the supremum, so $x^{(m)}\to x$ in the weighted supremum norm. To see $x\in M_0(w)$, fix $\varepsilon>0$, choose $m$ with $\|x-x^{(m)}\|_{M(w)}<\varepsilon$, then choose $J$ so the normalized tail of $x^{(m)}$ is below $\varepsilon$; for $l>J$ the normalized tail of $x$ is at most $2\varepsilon$. Thus $M_0(w)$ is complete. [F1, given, choose, algebra]

1.2 Finite-support sequences with rational coordinates are countable and dense: first choose $J$ to make the tail of any $x\in M_0(w)$ small, then approximate its finitely many coordinates through level $J$, including the scaling coordinate when present, by rationals. Hence $M_0(w)$ is separable. The formula for the norm shows $P_J$ is a contraction, and the defining tail limit gives $\|x-P_Jx\|_{M(w)}\to0$. [F1, given, choose, algebra]

2.1 If $x\in\ell^2$, then $w_l\ge1$ implies $w_l^{-1}\max_k|x_{lk}|\le(\sum_k|x_{lk}|^2)^{1/2}$. The right side tends to zero because its squares are level blocks of a convergent nonnegative series. Its supremum and the absolute scaling coordinate, when present, are at most $\|x\|_{\ell^2}$, so $x\in M_0(w)$. [F1, given, algebra] ∎
