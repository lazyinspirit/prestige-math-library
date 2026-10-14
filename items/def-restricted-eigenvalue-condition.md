---
id: def-restricted-eigenvalue-condition
kind: definition
title: "Restricted eigenvalue condition on the Lasso cone"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-euclidean-spheres-and-closed-balls
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Section 2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 3"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Definition

Let $n,d\ge1$, $1\le s\le d$, and $X\in\mathbb R^{n\times d}$. For $S\subseteq\{1,\ldots,d\}$, let $v_S$ be the vector agreeing with $v\in\mathbb R^d$ on $S$ and equal to zero off $S$; write $\|v\|_1=\sum_j|v_j|$ and use the Euclidean norm $\|\cdot\|_2$ of [[def-euclidean-spheres-and-closed-balls]]. The cone associated to $S$ is
$$\mathcal C(S)=\{v\in\mathbb R^d:\|v_{S^c}\|_1\le3\|v_S\|_1\}.$$
The design satisfies the restricted eigenvalue condition with constant $\kappa^2>0$ at sparsity $s$ when
$$\frac{\|Xv\|_2^2}{n}\ge\kappa^2\|v_S\|_2^2$$
for every $S$ with $|S|\le s$ and every nonzero $v\in\mathcal C(S)$. The denominator is the norm of the supported component; this condition does not assert a lower bound for all vectors in $\mathbb R^d$.
