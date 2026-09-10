---
id: cex-identity-on-two-points-is-not-ergodic
kind: counterexample
title: A preserving identity need not be ergodic
deps: [def-ergodic-measure-preserving-system]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Sarig Definition 1.4, p.5; explicit finite witness
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
  scraped: []
status: draft
origin: pipeline
generation:
  role: counterexample
proof_strategy: direct
---

## Statement refuted

The assertion “every measure-preserving probability transformation is ergodic” is false.

## Facts & Assumptions

[F1] Every strictly invariant set in an ergodic system must be null or conull [[def-ergodic-measure-preserving-system]].

## Counterexample

**Given:** The objects and hypotheses in the statement.

1.1 Take $X=\{0,1\}$ with all subsets measurable, $\mu(E)=|E|/2$, and $T(x)=x$. The measure is countably additive because a disjoint family has at most two nonempty members. Its total mass is one. For every subset E, $T^{-1}E=E$, so T is measurable and preserves probability. [given]

2.1 The set $E=\{0\}$ is strictly invariant and has $\mu(E)=\mu(X\setminus E)=1/2>0$. It is neither null nor conull, contradicting the ergodicity requirement. The specified T is therefore a counterexample. [F1, step 1.1] ∎
