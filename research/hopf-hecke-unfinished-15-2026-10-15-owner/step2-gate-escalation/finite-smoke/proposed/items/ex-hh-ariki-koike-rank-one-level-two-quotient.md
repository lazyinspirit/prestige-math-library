---
id: ex-hh-ariki-koike-rank-one-level-two-quotient
kind: example
title: "The rank-one level-two cyclotomic quotient"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - lem-hh-rank-one-cyclotomic-quotient-monic-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $F$ be a field, let $q,a,b\in F^\times$, and take level $r=2$ and rank $n=1$ with cyclotomic parameters $u_1=a,u_2=b$. The algebra is $F[X^{\pm1}]/((X-a)(X-b))$, has basis $1,X$, and satisfies

$$X^2=(a+b)X-ab,\qquad X^{-1}=\frac{a+b-X}{ab}.$$

## Facts & Assumptions

**Given:** A field $F$, units $q,a,b\in F^\times$, and the rank-one level-two multiplicative presentation.

[F1] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the rank-one presentation uses an invertible generator $X$.

[F2] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the rank-one quotient imposes $p(X)=\prod_a(X-u_a)=0$.

[F3] [[lem-hh-rank-one-cyclotomic-quotient-monic-basis]]: for rank one, $1,X,\ldots,X^{r-1}$ is a basis of the quotient by $p(X)$.

## Verification

**Given:** $r=2$, $n=1$, $u_1=a$, and $u_2=b$ as in the example.

1.1 Here $p(X)=X^2-(a+b)X+ab$ by [F2]. The equation $p(X)=0$ gives $X^2=(a+b)X-ab$. Multiplying $p(X)=0$ by the unit $X^{-1}$ from [F1] gives $X-(a+b)+abX^{-1}=0$, hence $X^{-1}=(a+b-X)/(ab)$. [F1, F2, algebra]

2.1 The rank-one basis lemma [F3] with $r=2$ gives exactly the two basis vectors $1,X$, so the displayed quotient and formulas have the claimed rank and normal form. [F3, step 1.1] ∎
