---
id: ex-gauges-of-norm-balls-and-ellipsoids
kind: example
title: Gauges of norm balls and finite-dimensional ellipsoids
status: published
origin: pipeline
deps: [def-minkowski-functional, lem-balanced-gauge-is-a-seminorm]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §5.1 examples
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Example

For $B(0,r)=\{x:\|x\|<r\}$, $p_B(x)=\|x\|/r$.  For a positive-definite
real quadratic form $q$ on $\mathbb R^n$ and $E=\{x:q(x)<1\}$,
$p_E(x)=\sqrt{q(x)}$.  Both are norms: the first is a positive scalar
multiple of the given norm, and the second is the norm induced by the
inner product associated with the positive-definite quadratic form $q$.

## Facts & Assumptions

**Given:** A radius $r>0$ and a positive-definite quadratic form $q$.

[F1] The gauge of an absorbing set is the infimum of its admissible positive dilates ([[def-minkowski-functional]]).

## Verification

**Proof technique:** direct.

1.1 $x\in tB(0,r)$ exactly when $\|x\|<tr$, whose infimum over $t>0$ is $\|x\|/r$. [F1, given, algebra]

2.1 Likewise $x\in tE$ exactly when $q(x)<t^2$, so the infimum is $\sqrt{q(x)}$. Positive definiteness gives zero only at $x=0$, and the displayed formulas give norm homogeneity and triangle inequality. [F1, given, algebra] ∎
