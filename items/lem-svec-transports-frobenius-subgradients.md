---
id: lem-svec-transports-frobenius-subgradients
kind: lemma
title: "Symmetric vectorization transports closed convex domains and subgradients"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-symmetric-matrix-frobenius-isometry
  - def-subgradient-and-subdifferential
  - def-euclidean-inner-product
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - def-metric-ball
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, Foundations and Trends in Machine Learning 8(3–4) (2015)"
      url: "https://arxiv.org/pdf/1405.4980"
    - title: "Dimitri P. Bertsekas, Convex Analysis and Optimization, MIT 6.253 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Let $C\subseteq\mathbb S^d$ be a closed convex set of real symmetric matrices in the Frobenius metric, let $F:C\to\mathbb R$ be convex, let $\operatorname{svec}:\mathbb S^d\to\mathbb R^m$ be the symmetric vectorization isometry, and define $C'=\operatorname{svec}(C)$ and $f:C'\to\mathbb R$ by $f(z)=F(\operatorname{svec}^{-1}(z))$. Then $C'$ is closed and convex and $f$ is convex. If $G$ is a Frobenius subgradient of $F$ at $M\in C$, meaning $F(N)\ge F(M)+\langle G,N-M\rangle_F$ for every $N\in C$, then $\operatorname{svec}(G)$ is a Euclidean subgradient of $f$ at $\operatorname{svec}(M)$.

## Statement references

[[lem-symmetric-matrix-frobenius-isometry|Symmetric vectorization preserves inner products and distances]]

[[def-subgradient-and-subdifferential|Subgradient inequality on a convex domain]]

[[def-euclidean-inner-product|Euclidean inner product in coordinates]]

[[def-convex-and-strictly-convex-functions-on-euclidean-sets|Convex functions]]

[[def-convex-subset-of-euclidean-space|Convex sets]]

[[def-metric-topology|Closed sets and open complements in a metric topology]]

[[def-metric-ball|Metric balls]]

[Bubeck, §3.1, printed pp. 262–266](https://arxiv.org/pdf/1405.4980)

[Bertsekas, MIT 6.253 Lecture 15, printed pp. 200–205](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf)

## Facts & Assumptions

**Given:** A closed convex set $C\subseteq\mathbb S^d$, a convex function $F:C\to\mathbb R$, a point $M\in C$, and a Frobenius subgradient $G$ at $M$.

[F1] The map $\operatorname{svec}$ is a linear bijection and preserves inner products and distances ([[lem-symmetric-matrix-frobenius-isometry]]).

[F2] A function is convex when it satisfies the convex-combination inequality, and a set is convex when it contains every convex combination of its points ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]], [[def-convex-subset-of-euclidean-space]]).

[F3] A set is closed when its complement is open, and an open set contains a positive-radius ball around each of its points ([[def-metric-topology]], [[def-metric-ball]]).

[F4] A subgradient supplies a global supporting affine lower bound on the convex function ([[def-subgradient-and-subdifferential]]).

## Proof

1.1 If $z_0,z_1\in C'$, choose $M_0,M_1\in C$ with $z_i=\operatorname{svec}(M_i)$. For $t\in[0,1]$, linearity gives $tz_0+(1-t)z_1=\operatorname{svec}(tM_0+(1-t)M_1)$, and the matrix on the right is in $C$ by [F2]. Thus $C'$ is convex. [given, F1, F2, construct]

1.2 Let $z\notin C'$ and set $M=\operatorname{svec}^{-1}(z)\notin C$. Since $C$ is closed, [F3] gives $r>0$ such that $B_F(M,r)\subseteq\mathbb S^d\setminus C$, where $B_F(M,r)=\{A\in\mathbb S^d:\|A-M\|_F<r\}$. For any $w\in B_2(z,r)$, isometry [F1] gives $\operatorname{svec}^{-1}(w)\in B_F(M,r)$, hence $w\notin C'$. Therefore $B_2(z,r)\subseteq\mathbb R^m\setminus C'$, so the complement of $C'$ is open and $C'$ is closed. [given, F1, F3]

1.3 For $z_0,z_1\in C'$ with preimages $M_0,M_1$, linearity yields $\operatorname{svec}^{-1}(tz_0+(1-t)z_1)=tM_0+(1-t)M_1$. Applying convexity of $F$ from [given] proves $f(tz_0+(1-t)z_1)\le t f(z_0)+(1-t)f(z_1)$, so $f$ is convex. [given, F1, F2, algebra]

2.1 Let $z=\operatorname{svec}(M)$ and take any $w\in C'$, with preimage $N\in C$. The assumed subgradient inequality gives $f(w)=F(N)\ge F(M)+\langle G,N-M\rangle_F$. By inner-product preservation [F1], this equals $f(z)+\langle\operatorname{svec}(G),w-z\rangle_2$; hence $\operatorname{svec}(G)$ is a Euclidean subgradient by [F4]. [given, F1, F4] ∎
