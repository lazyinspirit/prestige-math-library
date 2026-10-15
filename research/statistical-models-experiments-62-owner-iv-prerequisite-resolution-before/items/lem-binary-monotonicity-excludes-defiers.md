---
id: lem-binary-monotonicity-excludes-defiers
kind: lemma
title: "Binary monotonicity excludes defiers"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: [def-instrumental-variable-potential-outcomes, def-principal-strata-and-late]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.4 and Technical Point 16.7, printed pp. 217–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Monotonicity-Based IV Assumptions and Compliance Types"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Statement

In the binary setup of [[def-principal-strata-and-late]], assume monotonicity
$A(1)\ge A(0)$ almost surely. Then the always-taker, never-taker and complier
events are pairwise disjoint and cover $\Omega$ up to a null set; the defier
event has probability zero.

## Facts & Assumptions

**Given:** $A(0),A(1)\in\{0,1\}$ and $A(1)\ge A(0)$ almost surely. Prove the
principal-stratum partition.

[A1] The potential treatments are binary and satisfy monotonicity almost
surely. ([[def-instrumental-variable-potential-outcomes]])

[F1] The four principal-stratum events are defined by the four possible pairs
$(A(0),A(1))$. ([[def-principal-strata-and-late]])

## Proof

1.1 Since each coordinate is either $0$ or $1$, the pair $(A(0),A(1))$ has only the four values $(0,0),(0,1),(1,0),(1,1)$. Monotonicity in [A1] excludes $(1,0)$ outside a null set. By [F1], the remaining three events are exactly the never-taker, complier and always-taker events. [given, A1, F1, algebra]

2.1 Distinct ordered pairs define disjoint events, and every pair outside the null exceptional set belongs to one of the three remaining events. Therefore these three strata form a partition up to a null set and the defier event is null. [step 1.1, F1] ∎

