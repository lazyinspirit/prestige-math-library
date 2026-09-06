---
id: lem-charpit-flow-preserves-the-pde-constraint
kind: lemma
title: "The Charpit flow preserves the PDE constraint"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lagrange-charpit-characteristic-system, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

Along a Charpit curve,

$$\frac d{ds}F(X,Z,P)=0.$$

Consequently an initial point in $F=0$ remains in $F=0$ while the curve exists.

## Facts & Assumptions

**Given:** A $C^1$ Charpit curve for a $C^2$ function $F$.

## Proof

**Proof technique:** direct.

1.1 The chain rule gives $\dot F=F_x\cdot\dot X+F_z\dot Z+F_p\cdot\dot P$. [given, algebra]

2.1 Substitute $\dot X=F_p$, $\dot Z=P\cdot F_p$, and $\dot P=-F_x-PF_z$; the three terms cancel pairwise. [step 1.1, given, algebra]

3.1 Hence $F(X,Z,P)$ is constant, so an initial zero stays zero. [step 2.1, given] ∎
