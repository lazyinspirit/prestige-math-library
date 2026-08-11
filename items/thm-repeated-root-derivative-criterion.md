---
id: thm-repeated-root-derivative-criterion
kind: theorem
title: 'A root is repeated exactly when it is also a root of the formal derivative'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-repeated-root-and-separable-polynomial, prop-formal-derivative-laws, cor-factor-theorem-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Proposition 1.2'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F\subseteq E$ be a field extension, let $0\ne f\in F[x]$, and let $a\in E$ be a root of $f$. Then $a$ is a repeated root of $f$ if and only if $f'(a)=0$.

## Facts & Assumptions

**Given:** A field extension $F\subseteq E$, a nonzero polynomial $f\in F[x]$, and a root $a\in E$ of $f$.

[L1] The root $a$ is repeated exactly when $(x-a)^2$ divides the image of $f$ in $E[x]$ ([[def-repeated-root-and-separable-polynomial]]).

[L2] Formal differentiation is linear and satisfies $(uv)'=u'v+uv'$ and $(x-a)'=1$ ([[prop-formal-derivative-laws]]).

[L3] A polynomial over a commutative ring vanishes at $a$ exactly when it is divisible by $x-a$ ([[cor-factor-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $a$ is repeated, [L1] gives $f=(x-a)^2q$, and [L2] gives $f'=2(x-a)q+(x-a)^2q'$, so evaluation at $a$ yields $f'(a)=0$. [given, L1, L2, L3]

1.2 Conversely, [L3] gives $f=(x-a)q$; [L2] gives $f'=q+(x-a)q'$, so $f'(a)=q(a)$, and the assumption $f'(a)=0$ with [L3] gives $q=(x-a)h$. [given, L2, L3, algebra]

2.1 Substituting the factorization from step 1.2 gives $f=(x-a)^2h$, so [L1] makes $a$ repeated; together with step 1.1 this proves the biconditional. [step 1.1, step 1.2, L1] ∎
