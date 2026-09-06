---
id: lem-sokal-local-operator-norm-lower-bound
kind: lemma
title: "A nonzero bounded linear operator is large on one of two nearby points"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-operator-norm]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Sokal, A Really Simple Elementary Proof of the Uniform Boundedness Theorem, p. 1"
      url: "https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf"
---

## Statement

Let $T:X\to Y$ be nonzero and bounded ([[def-bounded-linear-operator]]), let $x\in X$,
and let $r>0$. There is a $y\in B(x,r)$ such that

$$\|Ty\|>\tfrac{2r}{3}\|T\|,$$

where $\|T\|$ is [[def-operator-norm]].

## Facts & Assumptions

**Given:** A nonzero bounded linear operator $T$, $x\in X$, and $r>0$.

## Proof

**Proof technique:** direct.

1.1 The unit-ball definition of the operator norm supplies $z$ with $\|z\|\le1$ and $\|Tz\|>8\|T\|/9$. [given, choose]

2.1 Put $w=(3r/4)z$. Then both $x+w$ and $x-w$ lie in $B(x,r)$, and $\|Tw\|>2r\|T\|/3$. [step 1.1, algebra]

3.1 The triangle inequality applied to $T(x+w)-T(x-w)=2Tw$ gives $$\max\{\|T(x+w)\|,\|T(x-w)\|\}\ge\|Tw\|>\tfrac{2r}{3}\|T\|.$$ [step 2.1, algebra]

4.1 Choosing the corresponding one of $x+w,x-w$ proves the claim. [step 2.1, step 3.1] ∎
