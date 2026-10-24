---
id: lem-hh-rank-one-cyclotomic-quotient-monic-basis
kind: lemma
title: "The rank-one cyclotomic quotient has a monic basis"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n)"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§2 and §6: the multiplicative cyclotomic quotient presentation and the G(d,1,n) rank-one normal-form context; the monic quotient and repeated-root claim are proved here."
    - title: "Andrew Mathas, Cyclotomic quiver Hecke algebras of type A (lecture notes)"
      url: "https://arxiv.org/pdf/1310.2142"
      locator: "§1.1: the distinction between multiplicative Ariki–Koike and degenerate cyclotomic presentations; the rank-one quotient calculation is proved here."
---

## Statement

Let $F$ be a field, let $q,u_1,\ldots,u_r\in F^\times$, and let $A_{r,1}(F;q,u_1,\ldots,u_r)$ be the rank-one specialization of the multiplicative cyclotomic presentation [[def-hh-multiplicative-cyclotomic-hecke-algebra]], with $Q\mapsto q$ and $X_1\mapsto X$. Then

$$A_{r,1}(F;q,u_1,\ldots,u_r)\cong F[X]/\left(\prod_{a=1}^r(X-u_a)\right),$$

and $1,X,\ldots,X^{r-1}$ is an $F$-basis. If $r\ge2$ and $u_1=\cdots=u_r=c\ne0$, the change of variable $\varepsilon=X-c$ identifies this algebra with $F[\varepsilon]/(\varepsilon^r)$. In that case $\varepsilon$ is a nonzero nilpotent.

## Facts & Assumptions

**Given:** A field $F$, units $q,u_1,\ldots,u_r\in F$, and the rank-one multiplicative cyclotomic presentation.

[F1] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the rank-one affine presentation includes the invertible generator $X_1$.

[F2] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the cyclotomic quotient imposes $p(X_1)=\prod_{a=1}^r(X_1-u_a)=0$.

## Proof

**Given:** $F$, $q,u_1,\ldots,u_r$, and $A_{r,1}(F;q,u_1,\ldots,u_r)$ as in the statement.

1.1 Write $e_k$ for the $k$th elementary symmetric polynomial in $u_1,\ldots,u_r$ and $e_r=u_1\cdots u_r\ne0$. By [F1] and [F2], the rank-one presentation is $F[X^{\pm1}]/(p(X))$. Expanding $p(X)=0$ gives $X^r-e_1X^{r-1}+\cdots+(-1)^re_r=0$, so in $F[X]/(p)$ the element $X$ has inverse $(-1)^{r+1}e_r^{-1}(X^{r-1}-e_1X^{r-2}+\cdots+(-1)^{r-1}e_{r-1})$. Thus the natural map $F[X]/(p)\to F[X^{\pm1}]/(p)$ is onto, and the assignment of $X^{-1}$ to this polynomial defines its inverse. [F1, F2, algebra]

2.1 Since $p$ is monic of degree $r$, division by $p$ writes every polynomial uniquely as a multiple of $p$ plus a polynomial of degree below $r$. Uniqueness follows because a nonzero multiple $g p$ over the field $F$ has degree $\deg(g)+r\ge r$. Therefore the residue classes $1,X,\ldots,X^{r-1}$ are a basis of $F[X]/(p)$ and hence of the Laurent quotient in step 1.1. [step 1.1, algebra]

3.1 If all $u_a=c$, then $p(X)=(X-c)^r$. Substitution $\varepsilon=X-c$ is an invertible change of polynomial variable, so it induces an isomorphism $F[X]/((X-c)^r)\cong F[\varepsilon]/(\varepsilon^r)$. Because $r\ge2$, step 2.1 gives the nonzero basis vector $\varepsilon$; its $r$th power is zero in this quotient. [step 2.1, algebra] ∎
