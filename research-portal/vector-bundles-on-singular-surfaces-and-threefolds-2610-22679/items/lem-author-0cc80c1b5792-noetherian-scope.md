---
id: lem-author-0cc80c1b5792-noetherian-scope
kind: lemma
title: General equicharacteristic scope and the standing filtration restriction
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - thm-author-98a750efd0cc-motivic-filtration-input
  - lem-author-0cc80c1b5792-valuative-conventions
  - thm-author-0cc80c1b5792-valuation-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  thm-author-98a750efd0cc-motivic-filtration-input: mathematical-premise
  lem-author-0cc80c1b5792-valuative-conventions: mathematical-premise
  thm-author-0cc80c1b5792-valuation-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice. Every nonempty finite-dimensional Noetherian equicharacteristic scheme in EM’s sense lies in the source filtration’s finite-valuative-dimension domain: its structure map factors through a prime field $F=\mathbb Q$ or $\mathbb F_p$, it is qcqs, and its source valuative dimension equals its finite Krull dimension. Define its motivic filtration by the same source prime-field filtered algebra. On schemes over the standing field this is exactly the completed local filtration, including the actual stage maps to $K$.

## Facts & Assumptions
**Given:** The Axiom of Choice and a finite-dimensional Noetherian scheme $X$ with the stated global prime-field factorization, or its standing-field specialization.

**Goal:** Preserve the full equicharacteristic domain instead of silently restricting the theorem to one fixed base field.

[F1] [[thm-author-98a750efd0cc-motivic-filtration-input]] supplies the actual source filtered algebra for every prime field. [[def-motivic-filtration]] defines its standing-field version by actual restriction from that source.

[F2] [[lem-author-0cc80c1b5792-valuative-conventions]] and [[thm-author-0cc80c1b5792-valuation-input]] give the source convention and equality for locally Noetherian schemes.

[F3] The assumed [[math:def-axiom-of-choice]] discharges the Choice premise of the selected filtration in [[def-motivic-filtration]] when its common-family perfect-complex realization and essentially small nonconnective-functor domain are invoked. No additional Choice step is needed for the geometric domain check.

## Proof
1.1 For nonempty $X$, a Noetherian scheme has a finite affine cover. Every intersection of two affine opens is a Noetherian open and therefore quasi-compact; hence $X$ is qcqs. Its chosen prime-field factorization places it in the domain of [F1]. Since it is locally Noetherian, [F2] gives $\dim_vX=\dim X<\infty$. [F1, F2, given]

2.1 Under the assumed Choice premise in [F3], evaluate the actual prime-field filtered algebra of [F1] on $X$, with its source augmentation to stagezero $K(X)$. If $X$ carries a structure over the standing field, [F1] says its locally defined filtration is precisely this source functor precomposed with forgetting to the prime field. Thus stages, transitions, multiplication and augmentation are the same restricted diagram. There is no independently selected filtration to compare, and no finite-type or fixed-field condition was inserted into step 1.1. [F1, F2, F3, step 1.1] ∎
