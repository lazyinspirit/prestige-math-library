---
id: thm-polynomial-ring-on-a-family-is-a-commutative-ring
kind: theorem
title: "Finite convolution makes $R[x_i:i\\in I]$ a commutative ring containing $R$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-on-a-family-of-indeterminates, def-monomials-on-an-index-set, lem-finite-sum-reindexing-and-fubini, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Statement

For every commutative ring $R$ and set $I$, the addition and convolution of
[[def-polynomial-ring-on-a-family-of-indeterminates]] make $R[x_i:i\in I]$ a
commutative ring. The constant map $R\to R[x_i:i\in I]$ is an injective ring
homomorphism. If $I=\varnothing$, it is an isomorphism.

## Facts & Assumptions

**Given:** A commutative ring $R$, a set $I$, and finitely supported coefficient families $c,d,e:\mathcal M(I)\to R$.

[L1] Finite sums may be reindexed by bijections, split over disjoint unions, and evaluated in either order over a finite product ([[lem-finite-sum-reindexing-and-fubini]]).

[L2] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

[L3] The coefficient families, pointwise addition, convolution, and constants are those of [[def-polynomial-ring-on-a-family-of-indeterminates]].

[L4] For the empty index set, the monomial set consists only of the zero monomial ([[def-monomials-on-an-index-set]]).

## Proof

**Proof technique:** direct.

1.1 For a fixed $u\in\mathcal M(I)$, only pairs $(a,b)\in\operatorname{supp}(c)\times\operatorname{supp}(d)$ with $a+b=u$ contribute to $(cd)_u$, so the coefficient sum is finite; moreover $\operatorname{supp}(cd)$ is contained in the finite image of $\operatorname{supp}(c)\times\operatorname{supp}(d)$ under $(a,b)\mapsto a+b$. Thus convolution is a finitely supported coefficient family. [L3]

1.2 Pointwise addition makes the coefficient families an abelian group, with the zero family as identity and pointwise negatives. [L3, algebra]

1.3 Reindexing $(a,b)$ by $(b,a)$ proves $cd=dc$, and reindexing triples together with finite Fubini proves $(cd)e=c(de)$ coefficient by coefficient. [L1, L3]

1.4 Splitting a finite sum proves $c(d+e)=cd+ce$, while the coefficient family supported at the zero monomial with value $1_R$ is a multiplicative identity. [L1, L3]

1.5 The constant map preserves addition, multiplication, and $1$ by the convolution formula, so it is a ring homomorphism by [L2]; its zero-monomial coefficient recovers the original scalar, hence it is injective. [L2, L3, algebra]

2.1 When $I=\varnothing$, [L4] gives only the zero monomial, so every coefficient family is constant and the constant embedding is surjective. [L3, L4] ∎
