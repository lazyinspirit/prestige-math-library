---
id: cex-excision-fails-without-the-closure-inside-interior-hypothesis
kind: counterexample
title: "Excision fails without closure inside interior"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 2.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement refuted

The condition $\overline Z\subseteq\operatorname{int}(A)$ cannot be omitted
from excision. Take $G=\mathbb Z$, $X=[0,1]$, and $A=Z=\{0\}$.

## Counterexample

**Given:** The indicated $X,A,Z$.

**Proof technique:** direct.

1.1 The excised pair is $((0,1],\varnothing)$, whose $H_0$ is $\mathbb Z$; the original pair has $H_0([0,1],\{0\})=0$ by its pair sequence. [given, construct]

2.1 Hence the inclusion cannot induce an isomorphism in degree zero. Here $\overline Z=\{0\}$ is not contained in the empty interior of $A$, exposing the missing hypothesis. [step 1.1, algebra] ∎
