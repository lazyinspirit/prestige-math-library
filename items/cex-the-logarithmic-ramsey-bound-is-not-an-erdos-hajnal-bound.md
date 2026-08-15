---
id: cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound
kind: counterexample
title: "The universal logarithmic Ramsey guarantee cannot be replaced by any universal positive power"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-random-graph-logarithmic-homogeneous-set-upper-bound, thm-logarithm-slower-than-every-positive-power, thm-logarithm-change-of-base]
aliases: []
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement refuted

There is a universal exponent $\epsilon>0$ such that every nonempty finite graph $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$.

## Facts & Assumptions

**Given:** An arbitrary real exponent $\epsilon>0$.

[L1] For every $n\ge16$, some $n$-vertex graph $G$ satisfies $\operatorname{hom}(G)<3\log_2n$ ([[thm-random-graph-logarithmic-homogeneous-set-upper-bound]]).

[L2] For every $a>0$, $\log x/x^a\to0$ as $x\to+\infty$ ([[thm-logarithm-slower-than-every-positive-power]]).

[L3] For $x>0$, $\log_2x=\log x/\log2$ ([[thm-logarithm-change-of-base]]).

## Counterexample

**Proof technique:** constructive.

1.1 By [L2] and [L3], choose an integer $n\ge16$ with $3\log_2n<n^\epsilon$. [given, L2, L3, choose]

2.1 By [L1], choose an $n$-vertex graph $G$ with $\operatorname{hom}(G)<3\log_2n<n^\epsilon$. [step 1.1, L1, choose, construct]

3.1 Thus every proposed positive universal exponent has a finite counterexample, so the statement is false. [given, step 2.1, discharge-construct] ∎
