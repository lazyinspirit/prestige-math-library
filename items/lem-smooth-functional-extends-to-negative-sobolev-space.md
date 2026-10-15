---
id: lem-smooth-functional-extends-to-negative-sobolev-space
kind: lemma
title: Smooth functionals extend continuously to the white-noise topology
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-sobolev-linear-functional-for-white-noise
  - def-negative-sobolev-space-for-white-noise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2 and §2.3.1"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Let $H(\delta)$ be the coefficient Hilbert space of [[def-negative-sobolev-space-for-white-noise]], with weights $w_l=a_l^{-1}(\log a_l)^{-2\delta}$. If $g\in H^s_2$ for some $s>1/2$, then the pairing $L_g(x)=\sum_{l,k}x_{lk}g_{lk}$, where $g_{lk}=\langle g,\psi_{lk}\rangle$, converges absolutely for every $x\in H(\delta)$ and is continuous, with
$$|L_g(x)|\le C_{s,\delta}\|g\|_{H^s_2}\|x\|_{H(\delta)}.$$
On $L^2([0,1])$ this extension agrees with the usual inner product $\langle f,g\rangle_{L^2}$.

## Facts & Assumptions

**Given:** The wavelet coefficient weights and the Sobolev coefficient norm in the Statement.

[F1] [[def-sobolev-linear-functional-for-white-noise]]: $g\in H^s_2$ means $\sum_{l,k}a_l^{2s}|g_{lk}|^2<\infty$, and its pairing with an $L^2$ function is the $L^2$ inner product.

[F2] [[def-negative-sobolev-space-for-white-noise]]: $\|x\|_{H(\delta)}^2=\sum_{l,k}w_l|x_{lk}|^2$, where $w_l=a_l^{-1}(\log a_l)^{-2\delta}$ and the coarsest level has finite multiplicity.

## Proof




1.1 Since $s>1/2$, the level factor $a_l^{1-2s}(\log a_l)^{2\delta}$ is bounded: it tends to zero as $a_l\to\infty$, because a positive power of $a_l$ dominates every fixed power of $\log a_l$, and the finitely many coarsest levels have finite weights. Thus $w_l^{-1}\le C_{s,\delta}^2a_l^{2s}$ after increasing a finite constant. [F1, F2, given, algebra]

2.1 Weighted Cauchy–Schwarz gives $\sum_{l,k}|x_{lk}g_{lk}|\le(\sum_{l,k}w_l|x_{lk}|^2)^{1/2}(\sum_{l,k}w_l^{-1}|g_{lk}|^2)^{1/2}\le C_{s,\delta}\|x\|_{H(\delta)}\|g\|_{H^s_2}$. The same bound applied to $x-y$ proves continuity and absolute convergence of the series. [F1, F2, step 1.1, algebra]

3.1 If $x$ is the coefficient sequence of $f\in L^2$, its finite orthonormal projections converge to $f$ in $L^2$ because $(\psi_{lk})$ is a complete orthonormal basis. Their inner products with $g$ are the finite partial sums of the displayed pairing, and converge to $\langle f,g\rangle_{L^2}$ by continuity of the inner product. Step 2.1 identifies the same limit with $L_g(x)$. [F1, F2, step 2.1, algebra] ∎
