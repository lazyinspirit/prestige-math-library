---
id: lem-quadratic-likelihood-optimization-is-fisher-distance
kind: lemma
title: "Quadratic likelihood optimization is squared Fisher distance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-fisher-information-metric-distance
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-metric-topology
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Steven G. Self and Kung-Yee Liang, Asymptotic Properties of Maximum Likelihood Estimators and Likelihood Ratio Tests Under Nonstandard Conditions"
      url: "https://www.stat.cmu.edu/~brian/763-2015/week06/papers/self-liang-1987.pdf"
---

## Statement

Let $d\ge1$, let $I$ be an invertible real symmetric matrix such that $v^TIv>0$ for every nonzero $v\in\mathbb R^d$, let $z\in\mathbb R^d$, and let $C\subseteq\mathbb R^d$ be nonempty and closed in the Euclidean metric. Define $q_z(h):=z^Th-\tfrac12h^TIh$. Then there is a constant $\lambda>0$ such that $h^TIh\ge\lambda\|h\|_2^2$ for all $h$, $q_z$ attains its maximum on $C$, and

$$\sup_{h\in C}q_z(h)=\tfrac12z^TI^{-1}z-\tfrac12d_I^2(I^{-1}z,C).$$

## Facts & Assumptions

**Given:** $d\ge1$, $I$, $z$, and $C$ as in the Statement.

[F1] The Euclidean inner product is $\langle u,v\rangle=u^Tv$ and its norm is $\|u\|_2=\sqrt{u^Tu}$ ([[def-euclidean-inner-product]]).

[F2] A Euclidean closed ball is $\overline B_2(c,r)=\{x:\|x-c\|_2\le r\}$, and the unit sphere is $S^{d-1}=\{x:\|x\|_2=1\}$ ([[def-euclidean-spheres-and-closed-balls]]).

[F3] Closed means that the complement is open in the metric topology ([[def-metric-topology]]).

[F4] In finite-dimensional Euclidean space, a set is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F5] A continuous real-valued function on a nonempty compact metric space attains its maximum and minimum ([[thm-extreme-value-metric]]).

[F6] $|u^Tv|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F7] For symmetric positive-definite $I$, $d_I(x,C)=\inf_{c\in C}\sqrt{(x-c)^TI(x-c)}$ ([[def-fisher-information-metric-distance]]).

## Proof

**Given:** The matrix, vector and set in the Statement.

1.1 On the unit sphere $S^{d-1}$ of [F2], the function $u\mapsto u^TIu$ is continuous and strictly positive. The sphere is nonempty, closed and bounded, hence compact by [F4]; [F5] gives a minimum $\lambda>0$, since a zero minimum would be attained at a unit vector and contradict positive definiteness. Rescaling any nonzero $h$ to the unit sphere gives $h^TIh\ge\lambda\|h\|_2^2$, also valid for $h=0$. [F1, F2, F4, F5, given]

1.2 Completing the square gives $q_z(h)=\tfrac12z^TI^{-1}z-\tfrac12(h-I^{-1}z)^TI(h-I^{-1}z)$. By [F1] and [F6], $q_z(h)\le\|z\|_2\|h\|_2-\tfrac12\lambda\|h\|_2^2$, which tends to $-\infty$ as $\|h\|_2\to\infty$. [F1, F6, given, algebra]

2.1 Choose $c_0\in C$. By step 1.2 there is $R>\|c_0\|_2$ such that $q_z(h)<q_z(c_0)$ whenever $\|h\|_2\ge R$. The set $C\cap\overline B_2(0,R)$ is nonempty, closed and bounded, hence compact by [F2]–[F4]. The continuous quadratic $q_z$ attains a maximum there by [F5]; values outside are below $q_z(c_0)$, so this is a global maximum on $C$. [F2, F3, F4, F5, step 1.2, given, choose]

3.1 The identity of step 1.2 says that maximizing $q_z$ over $C$ is equivalent to minimizing $(h-I^{-1}z)^TI(h-I^{-1}z)$. Step 2.1 proves that this minimum is attained; by [F7] it equals $d_I^2(I^{-1}z,C)$. Substitution gives the stated supremum formula. [F7, step 1.2, step 2.1] ∎
