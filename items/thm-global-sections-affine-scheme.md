---
id: thm-global-sections-affine-scheme
kind: theorem
title: "Global functions on Spec A recover A"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sections-basic-open-affine-scheme]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.4"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

The canonical map $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is an
isomorphism, including when $A=0$.

## Facts & Assumptions

**Given:** The basic-open section calculation.

## Proof

**Proof technique:** direct.

1.1 $D(1)=\operatorname{Spec}A$. [given]

2.1 The basic-open calculation gives $\Gamma(D(1),\mathcal O)=A_1$. [step 1.1]

3.1 The canonical map $A\to A_1$ is an isomorphism, also for $A=0$. [step 2.1] ∎
