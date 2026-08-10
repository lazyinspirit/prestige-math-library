---
id: thm-monic-polynomial-division
kind: theorem
title: 'Division by a monic polynomial over a commutative ring'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-polynomial-degree-laws-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, thm-strong-induction]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.14'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $g\in R[x]$ be monic. For every $f\in R[x]$ there are unique $q,r\in R[x]$ such that

$$ f=qg+r,\qquad r=0\ \text{or}\ \deg r<\deg g. $$

This includes the zero dividend and a constant monic divisor.

## Facts & Assumptions

**Given:** A commutative ring $R$, a monic polynomial $g$ of degree $d$, and a polynomial $f$.

[L1] For nonzero polynomials over a commutative ring, degrees of sums and products are at most the corresponding support bounds, and the coefficient at the sum of the degrees is the product of leading coefficients ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L2] A monic polynomial has leading coefficient $1$, and the zero polynomial has no degree ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] Strong induction allows the case at degree $n$ once all smaller degrees have been established ([[thm-strong-induction]]).

## Proof

**Proof technique:** direct.

1.1 If $f=0$ or $f\ne0$ with $\deg f<d$, take $q=0$ and $r=f$; if $d=0$, monicity gives $g=1$, so take $q=f$ and $r=0$. [given, L1, L2, construct]

2.1 Otherwise write $n=\deg f\ge d$ and $a=\operatorname{lc}(f)$; the polynomial $f_1=f-a x^{n-d}g$ has its degree-$n$ coefficient cancelled and is zero or has degree below $n$, so strong induction using [L3] gives $f_1=q_1g+r$ with $r=0$ or $\deg r<d$, whence $f=(q_1+a x^{n-d})g+r$; together with step 1.1 this proves existence. [step 1.1, L1, L2, L3, construct]

3.1 If $f=qg+r=q'g+r'$ are two such expressions, then $(q-q')g=r'-r$; if $q-q'\ne0$, the leading coefficient of $(q-q')g$ equals the nonzero leading coefficient of $q-q'$ because $g$ is monic, so [L1] gives degree at least $d$, whereas $r'-r$ is zero or has degree below $d$, a contradiction. Thus $q=q'$ and then $r=r'$, proving uniqueness. [step 2.1, L1, L2, algebra] ∎
