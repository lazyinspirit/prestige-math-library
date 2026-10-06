---
id: ex-universal-thom-class-steenrod-operation
kind: example
title: "A Steenrod operation on the universal Thom class"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-stable-squares-on-universal-thom-classes
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 16: the Thom identity relating Steenrod squares of the Thom class to Stiefel–Whitney classes."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. In stable mod-two Thom cohomology, Sq³(U)=w₃U. At rank 3, Sq³(u₃)=w₃(γ₃)u₃; at rank 2 the component is zero because w₃(γ₂)=0 and Sq³(u₂)=0 by instability.

## Facts & Assumptions

**Given:** AC; the stable mod-two Thom cohomology module with its stable class $U$ and component classes $u_r$; the stable squares $Sq^i(U)=w_iU$; and the ranks $2$ and $3$.

[F1] The stable-square lemma identifies every component of $Sq^i(U)$ with $w_i(\gamma_r)u_r$ and proves compatibility under the inverse-system maps ([[lem-stable-squares-on-universal-thom-classes]]); the top-square formula and instability govern the degree-two class $u_2$, and $w_3(\gamma_2)=0$ for rank reasons.

## Verification

1.1 The stable-square supplier identifies every component of Sq^i(U) with w_i(γ_r)u_r and proves compatibility under the inverse-system maps. The rank bound makes w₃(γ₂)=0; instability kills Sq³ on the degree-2 class u₂. [given, F1]

2.1 At rank 3 the top-square formula agrees with the Thom identity. [step 1.1, F1] ∎
