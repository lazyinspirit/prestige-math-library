---
id: cex-polynomial-division-fails-for-a-nonunit-leading-coefficient
kind: counterexample
title: "Division with a degree-small remainder can fail over Z when the divisor's leading coefficient is not a unit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-monic-polynomial-division, thm-int-comm-ring, lem-units-of-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, discussion after Theorem 23.14'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement refuted

For every commutative ring $R$ and every nonzero $g\in R[x]$, each $f\in R[x]$ can be written $f=qg+r$ with $r=0$ or $\deg r<\deg g$.

## Facts & Assumptions

**Given:** The polynomials $f=x$ and $g=2x+1$ in $\mathbb Z[x]$.

[L1] Division is guaranteed over a commutative ring when the divisor is monic ([[thm-monic-polynomial-division]]).

[L2] The integers form a commutative ring ([[thm-int-comm-ring]]).

[L3] The only units of $\mathbb Z$ are $1$ and $-1$ ([[lem-units-of-z]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $x=q(2x+1)+r$ with $r=0$ or $\deg r<1$. If $q$ had positive degree $m$ and leading coefficient $c\ne0$, then $q(2x+1)$ would have nonzero coefficient $2c$ in degree $m+1>1$, which the constant remainder could not cancel. Thus $q$ is a constant integer. [assume-contra, given, L2, algebra]

2.1 Comparing coefficients of $x$ then gives $1=2q$, which has no integer solution because $2$ is not a unit by [L3]. This does not contradict the monic-division theorem [L1], since $2x+1$ is not monic; hence the claimed division statement fails. [step 1.1, L1, L2, L3, discharge-contradiction] ∎
