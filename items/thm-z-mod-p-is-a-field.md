---
id: thm-z-mod-p-is-a-field
kind: theorem
title: "For every prime $p$, the two operations on $\\mathbb{Z}/p$ make it a field"
status: published
origin: session
deps: [thm-integers-modulo-n-basic-algebra, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-prime, def-field, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, the operations of addition and multiplication on
$\mathbb Z/p$ make it a field ([[def-field]]).

## Facts & Assumptions

**Given:** A prime integer $p$.

[L1] Modular addition makes $\mathbb Z/p$ an abelian group, modular multiplication makes it a commutative monoid, and both distributive laws hold ([[thm-integers-modulo-n-basic-algebra]]).

[L2] A prime satisfies $p>1$, and if $p\nmid a$ then $\gcd(a,p)=1$ ([[def-prime]], [[lem-prime-not-dividing-is-coprime]]).

[L3] For positive modulus $p$, $[a]_p$ is invertible exactly when $\gcd(a,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L4] Equality $[a]_p=[b]_p$ is equivalent to $a\equiv b\pmod p$, which means $p\mid(a-b)$ ([[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]]).

[L5] A field is a commutative ring with $0\ne1$ in which every nonzero element is multiplicatively invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], all additive, multiplicative, identity, inverse, commutativity, associativity and distributive field axioms already hold except possibly $[0]_p\ne[1]_p$ and invertibility of nonzero classes. [L1, L5]

1.2 Since $p>1$, it does not divide $1$, so [L4] gives $[0]_p\ne[1]_p$. [L2, L4]

1.3 If $[a]_p\ne[0]_p$, then $p\nmid a$ by [L4]. Hence $\gcd(a,p)=1$ by [L2], and [L3] makes $[a]_p$ invertible. [L2, L3, L4]

2.1 Steps 1.1 through 1.3 verify every clause of [L5], so $\mathbb Z/p$ is a field. [step 1.1, step 1.2, step 1.3, L5] ∎
