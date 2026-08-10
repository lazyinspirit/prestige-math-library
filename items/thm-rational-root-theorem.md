---
id: thm-rational-root-theorem
kind: theorem
title: 'Rational root theorem'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-evaluation-and-root, def-coprime, lem-coprime-divides-product, def-polynomial-degree-leading-coefficient-and-monic, thm-rat-field, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.15'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.8(3)'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $f=a_nx^n+\cdots+a_1x+a_0\in\mathbb Z[x]$ with $a_n\ne0$. If a reduced rational number $r/s$, where $r,s\in\mathbb Z$, $s>0$, and $\gcd(r,s)=1$, is a root of $f$, then

$$ r\mid a_0\qquad\text{and}\qquad s\mid a_n. $$

## Facts & Assumptions

**Given:** An integer polynomial $f=a_nx^n+\cdots+a_0$ with $a_n\ne0$ and a root $r/s\in\mathbb Q$ with $s>0$ and $\gcd(r,s)=1$.

[L1] Evaluation substitutes the chosen ring element into the finite coefficient expression, and a root has value zero ([[def-polynomial-evaluation-and-root]]).

[L2] Coprime integers have gcd $1$ ([[def-coprime]]).

[L3] If $a,b$ are coprime and $a\mid bc$, then $a\mid c$ ([[lem-coprime-divides-product]]).

[L4] The leading coefficient is the nonzero coefficient at the degree of a nonzero polynomial ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L5] The rational numbers form a field, so multiplication by the nonzero denominator power preserves the root equation ([[thm-rat-field]]).

[L6] The induction principle permits iteration of a divisibility implication through a positive power ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L5], multiplying $f(r/s)=0$ by $s^n$ gives $a_nr^n+a_{n-1}r^{n-1}s+\cdots+a_1rs^{n-1}+a_0s^n=0$. [given, L1, L4, L5, algebra]

2.1 The equation shows $r\mid a_0s^n$; [L2], [L3], and [L6] remove the coprime factor $s$ one power at a time and give $r\mid a_0$, including $r=0$, when the root equation itself gives $a_0=0$. [step 1.1, L2, L3, L6]

3.1 The same equation shows $s\mid a_nr^n$; [L2], [L3], and [L6] remove the coprime factor $r$ one power at a time and give $s\mid a_n$, proving both conclusions. [step 1.1, L2, L3, L4, L6] ∎
