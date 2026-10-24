---
id: lem-multiscale-primitive-map-to-continuous-cdfs
kind: lemma
title: The multiscale primitive map is continuous into C[0,1]
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-multiscale-coefficient-space-m0w
  - def-negative-sobolev-space-for-white-noise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §4.1
      url: https://arxiv.org/pdf/1310.2484
    - title: Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, proof of Theorem 7.3.20
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
dependency_level: 2
---

## Statement

Let $(\psi_{lk})$ be a compactly supported wavelet basis of [[def-negative-sobolev-space-for-white-noise]]. The Haar basis with its finite scaling coordinate, as specified in [[def-multiscale-coefficient-space-m0w]], is also allowed. Assume each level-$l$ wavelet for $l\ge l_0$ has zero integral, uniformly bounded overlap, support length at most $C_0 2^{-l}$, and $\|\psi_{lk}\|_1\le C_0 2^{-l/2}$. Let $M_0(w)$ be as in [[def-multiscale-coefficient-space-m0w]], and suppose
$$S_w:=\sum_{l\ge l_0}w_l2^{-l/2}<\infty.$$
For $x\in M_0(w)$ define
$$Jx(t):=\sum_{l,k}x_{lk}\langle 1_{[0,t]},\psi_{lk}\rangle_{L^2},\qquad 0\le t\le1.$$
Then this series converges absolutely and uniformly in $t$, $Jx\in C([0,1])$, and $\|Jx-Jy\|_\infty\le C S_w\|x-y\|_{M(w)}$ after adding the finite coarsest-level constant to $C S_w$. If $x$ is the coefficient sequence of $f\in L^2$, then $Jx(t)=\int_0^t f(u)\,du$.

## Facts & Assumptions

**Given:** The wavelet geometry, summability condition, and multiscale space in the Statement.

[F1] [[def-multiscale-coefficient-space-m0w]]: $\|x\|_{M(w)}=\sup_l w_l^{-1}\max_k|x_{lk}|$.

[F2] [[def-negative-sobolev-space-for-white-noise]]: $(\psi_{lk})$ is a complete orthonormal basis of $L^2([0,1])$; finite orthogonal projections converge in $L^2$.

## Proof




1.1 For fixed $t$ and level $l\ge l_0$, a wavelet whose support lies wholly on one side of $t$ contributes zero: it is either disjoint from $[0,t]$ or its entire support is integrated and its mean is zero. Only supports meeting $t$ can contribute. Uniformly bounded overlap bounds their number by a constant, and each coefficient has magnitude at most $\|\psi_{lk}\|_1\le C_0 2^{-l/2}$. Thus $\sup_t\sum_k|\langle1_{[0,t]},\psi_{lk}\rangle|\le C_1 2^{-l/2}$. The finitely many coarsest levels have a finite uniform sum as well. [given, algebra]

2.1 By [F1] and step 1.1, the absolute sum of all terms at levels $l\ge l_0$ is at most $C_1\|x\|_{M(w)}\sum_{l\ge l_0}w_l2^{-l/2}$, uniformly over $t$. Its tails tend uniformly to zero because $S_w<\infty$. Each finite-level sum is continuous in $t$, since $t\mapsto\int_0^t\psi_{lk}(u)du$ is continuous for an $L^1$ function. The uniform limit is continuous. Applying the same estimate to $x-y$ proves the stated operator-norm bound. [F1, given, step 1.1, algebra]

3.1 If $x_{lk}=\langle f,\psi_{lk}\rangle$ for $f\in L^2$, the finite orthogonal projections converge to $f$ in $L^2$ by [F2]. The map $f\mapsto\int_0^t f(u)du=\langle f,1_{[0,t]}\rangle$ is a continuous $L^2$ functional because $\|1_{[0,t]}\|_2\le1$. Applying it to the finite projections shows that their coefficient sums converge to $\int_0^t f$, while step 2.1 identifies the same limit with $Jx(t)$. [F2, step 2.1, algebra] ∎
