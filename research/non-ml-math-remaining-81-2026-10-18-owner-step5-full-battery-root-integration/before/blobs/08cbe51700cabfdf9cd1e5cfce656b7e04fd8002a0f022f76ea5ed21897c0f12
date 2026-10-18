---
id: lem-daha-a1-bernstein-quotients-are-laurent
kind: lemma
title: "The rank-one DAHA Bernstein quotients are Laurent polynomials"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-daha-a1-root-datum-and-parameter-conventions]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, Definition 4.1, PDF pp. 20–21: the rank-one Bernstein cross-relations."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§7.13, PDF p. 58: the root-system DAHA cross-relations."
---

## Statement

With the root data and $B_{i,m}$ from [[def-daha-a1-root-datum-and-parameter-conventions]], for every integer $m$,

$$
B_{1,m}=\frac{z^m-z^{-m}}{1-z^{-2}},\qquad B_{0,m}=\frac{z^m-q^{-2m}z^{-m}}{1-q^2z^2}
$$

as elements of $K[z,z^{-1}]$. In particular, the rank-one Bernstein cross-relations use actual Laurent polynomials and require no localization of the coefficient algebra.

## Facts & Assumptions

**Given:** The field $K=\mathbb Q(q,t)$, the Laurent variable $z$, the actions $s_0(z^m)=q^{-2m}z^{-m}$ and $s_1(z^m)=z^{-m}$, and the finite sums defining $B_{i,m}$.

[F1] [[def-daha-a1-root-datum-and-parameter-conventions]]: for $m>0$, $B_{1,m}=\sum_{j=0}^{m-1}z^{m-2j}$ and $B_{0,m}=-\sum_{j=0}^{m-1}q^{-2j-2}z^{m-2-2j}$; negative indices are defined by the corresponding finite sums there.

## Proof

1.1 For $m>0$, multiplying $\sum_{j=0}^{m-1}z^{m-2j}$ by $1-z^{-2}$ cancels all intermediate terms and leaves $z^m-z^{-m}$. The negative-index formula is its negative, so it gives $(z^{-m}-z^m)/(1-z^{-2})$; the case $m=0$ has zero numerator. Hence the first quotient equals $B_{1,m}$ for every integer $m$. [F1, given, algebra]

2.1 For $m>0$, the geometric identity $z^{2m}-q^{-2m}=(z^2-q^{-2})\sum_{j=0}^{m-1}z^{2(m-1-j)}q^{-2j}$ and $1-q^2z^2=-q^2(z^2-q^{-2})$ give $\frac{z^m-q^{-2m}z^{-m}}{1-q^2z^2}=-\sum_{j=0}^{m-1}q^{-2j-2}z^{m-2-2j}=B_{0,m}$. For $m=-r<0$, $z^{-r}-q^{2r}z^r=z^{-r}(1-(q^2z^2)^r)$, so division by $1-q^2z^2$ gives $\sum_{j=0}^{r-1}q^{2j}z^{-r+2j}=B_{0,-r}$. The zero case is again zero. Thus the second quotient is Laurent for every integer $m$. [F1, given, algebra] ∎
