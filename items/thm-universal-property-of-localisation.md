---
id: thm-universal-property-of-localisation
kind: theorem
title: 'Universal property of localisation: maps that invert $S$ factor uniquely through $S^{-1}R$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-equivalence-and-ring-laws, prop-localisation-zero-equality-and-kernel-criteria, def-ring-homomorphism, lem-ring-units-form-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Proposition 10.9.3'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement

Let $f:R\to A$ be a unital homomorphism of commutative rings such that $f(s)$ is a unit for every $s\in S$. There is a unique unital ring homomorphism $\widetilde f:S^{-1}R\to A$ satisfying $\widetilde f\circ\lambda_S=f$, namely
$$ \widetilde f(r/s)=f(r)f(s)^{-1}. $$

## Facts & Assumptions

**Given:** A multiplicative subset $S$ of a commutative ring $R$ and a unital ring homomorphism $f:R\to A$ taking every element of $S$ to a unit.

[F1] Fraction equality means that $u(rs'-r's)=0$ for some $u\in S$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F2] Units form a group under multiplication, so products and inverses of units are units and inverses are unique ([[lem-ring-units-form-a-group]]).

[F3] Localisation arithmetic is $r/s+r'/s'=(rs'+r's)/(ss')$ and $(r/s)(r'/s')=rr'/(ss')$ ([[thm-localisation-equivalence-and-ring-laws]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\widetilde f(r/s)=f(r)f(s)^{-1}$. If $r/s=r'/s'$, [F1] gives $u(rs'-r's)=0$ for some $u\in S$. Applying $f$ and cancelling the unit $f(u)$ yields $f(r)f(s')=f(r')f(s)$; multiplying by $f(s)^{-1}f(s')^{-1}$ proves the definition is independent of representatives. [F1, F2, construct]

1.2 Using [F3] and the homomorphism laws for $f$, direct calculation shows that $\widetilde f$ preserves addition, multiplication, zero, and one. Also $\widetilde f(r/1)=f(r)f(1)^{-1}=f(r)$, so $\widetilde f\circ\lambda_S=f$. [F2, F3, algebra]

2.1 If $g:S^{-1}R\to A$ is another such homomorphism, then $g(r/1)=f(r)$ and $g(s/1)=f(s)$. Since $(s/1)(1/s)=1$, uniqueness of inverses gives $g(1/s)=f(s)^{-1}$; hence $g(r/s)=g(r/1)g(1/s)=\widetilde f(r/s)$ for every fraction. [F2, step 1.2]

3.1 If $0\in S$, the hypothesis says that $f(0)=0$ is a unit of $A$, so $A$ is the zero ring. The construction and uniqueness above still apply, with the unique map between zero rings. [F2, step 1.1, step 1.2, step 2.1, discharge-construct] ∎
