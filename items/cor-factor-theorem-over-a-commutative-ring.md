---
id: cor-factor-theorem-over-a-commutative-ring
kind: corollary
title: 'Factor theorem over a commutative ring'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-monic-polynomial-division, def-polynomial-evaluation-and-root, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Corollary 17.8'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.14'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $a\in R$, and $f\in R[x]$. Then $f(a)=0$ if and only if $x-a$ divides $f$ in $R[x]$.

More precisely, there is a unique $q\in R[x]$ such that $f=q(x-a)+f(a)$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an element $a\in R$, and a polynomial $f\in R[x]$.

[L1] Division by the monic polynomial $x-a$ gives unique $q,r$ with $f=q(x-a)+r$ and $r=0$ or $\deg r<1$ ([[thm-monic-polynomial-division]]).

[L2] Evaluation at $a$ is the finite coefficient sum defining $f(a)$ ([[def-polynomial-evaluation-and-root]]).

[L3] Evaluation at $a$ is a unital ring homomorphism and sends $x$ to $a$ ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1]; the remainder $r$ is zero or constant, and applying [L3] to $f=q(x-a)+r$ gives $f(a)=q(a)(a-a)+r=r$, so $f=q(x-a)+f(a)$. [given, L1, L2, L3]

2.1 If $f(a)=0$, step 1.1 gives $f=q(x-a)$; conversely, if $f=q(x-a)$, applying [L3] gives $f(a)=q(a)(a-a)=0$, proving the biconditional. [step 1.1, L3, algebra] ∎
