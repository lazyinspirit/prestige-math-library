---
id: lem-two-signs-detect-an-operator-increment
kind: lemma
title: "Two signs detect an operator increment"
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
deps: [def-bounded-linear-operator]
justified_by: []
forward_refs: []
external_refs: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Sokal, A really simple elementary proof of the uniform boundedness theorem"
      url: "https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf"
---

## Statement

Let $T:X\to Y$ be a bounded linear operator between normed spaces over the same field $\mathbb K\in\{\mathbb R,\mathbb C\}$. For all $x,u\in X$,
$$\max\{\|T(x+u)\|,\|T(x-u)\|\}\ge\|Tu\|.$$
No completeness or choice principle is assumed.

## Facts & Assumptions

**Given:** $T:X\to Y$ as above and $x,u\in X$.

[F1] A bounded linear operator is in particular linear, and its domain and codomain have the scalar homogeneity and triangle inequality of normed spaces ([[def-bounded-linear-operator]]).

## Proof

1.1 By linearity, $T(x+u)-T(x-u)=(Tx+Tu)-(Tx-Tu)=2Tu$. [F1, given, algebra]

2.1 Consequently $2\|Tu\|=\|T(x+u)-T(x-u)\|\le\|T(x+u)\|+\|T(x-u)\|\le2\max\{\|T(x+u)\|,\|T(x-u)\|\}$. Division by the positive real number $2$ proves the claim, including $u=0$, $T=0$, and zero spaces. [F1, step 1.1, algebra] ∎

## Remarks

This is the algebraic estimate in [Sokal, printed p.2, equation (2)](https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf), written independently of the surrounding local-ball lemma. Boundedness is part of the operator interface; the calculation needs only linearity.
