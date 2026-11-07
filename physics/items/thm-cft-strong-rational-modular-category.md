---
id: thm-cft-strong-rational-modular-category
kind: theorem
title: Modular tensor category from strong rationality
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
deps:
  - lem-cft-strong-rational-fixed-torus-loop-nondegeneracy
  - def-cft-strong-rational-voa
  - thm-cft-hlz-braided-tensor-category
  - def-modular-ribbon-category-and-hopf-link-data
  - lem-cft-finite-braided-rigidity-and-contragredient-duals
dependency_roles:
  lem-cft-strong-rational-fixed-torus-loop-nondegeneracy: mathematical-premise
  def-cft-strong-rational-voa: mathematical-premise
  thm-cft-hlz-braided-tensor-category: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  lem-cft-finite-braided-rigidity-and-contragredient-duals: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yi-Zhi Huang, Rigidity and modularity of vertex tensor categories"
      url: "https://arxiv.org/pdf/math/0502533v2"
      locator: "Theorem 1.1; §§3–4, rigidity, ribbon structure and nondegeneracy proof."
verification:
  precheck: pending
---

## Statement

Let $V$ be a simple VOA of CFT type, self-contragredient, rational in the admissible-module convention and $C_2$-cofinite. Assume also the exact Huang hypothesis that every $\mathbb N$-gradable weak $V$-module is completely reducible. Then the category of grading-restricted generalized $V$-modules is a modular tensor category in the finite semisimple rigid ribbon and invertible Hopf-link-matrix convention of [[def-modular-ribbon-category-and-hopf-link-data]]. The extra complete-reducibility hypothesis is stated explicitly: deriving it from the five strongly-rational conditions uses the regularity result below.

## Statement references

[[def-cft-strong-rational-voa]]

[[def-modular-ribbon-category-and-hopf-link-data]]

## Facts & Assumptions

**Given:** All original hypotheses, including the separately stated complete-reducibility condition.

[F1] [[def-cft-strong-rational-voa]] fixes the first five hypotheses.

[F2] [[lem-cft-strong-rational-fixed-torus-loop-nondegeneracy]]: those five hypotheses construct the full grading-restricted ordinary-intertwiner tensor category, restricted-contragredient rigidity, the exponential ribbon twist and the invertible categorical Hopf matrix. Its proof supplies genuine whole-category admission and a finite-complex-coset analytic argument; no generic reverse Zhu implication is used.

[F3] [[def-modular-ribbon-category-and-hopf-link-data]] fixes the finite semisimple rigid ribbon and invertible Hopf-link convention.

## Proof

1.1 The first five hypotheses are exactly F1; the additional complete-reducibility condition is Given. [given, F1, algebra]

2.1 Apply F2 to the full category of grading-restricted generalized modules. It constructs its ordinary-intertwiner tensor products and all coherent braided structure with contragredient duals. [F2, step 1.1, construct]

3.1 F2 proves the compatible twist exp(2 pi i L(0)) and categorical Hopf-link nondegeneracy by the fixed-torus two-point loop calculation, without assuming a global modular functor or Hopf/character comparison. [F2, step 2.1, algebra]

4.1 The category is finite semisimple, rigid and ribbon, with simple unit V and invertible Hopf-link matrix. These are exactly F3's requirements. [F2, F3, step 3.1, algebra]

5.1 Therefore the full category in the unchanged Statement is a modular tensor category. The extra reducibility condition has not been removed or deduced through a held reverse Zhu criterion. [given, F2, F3, step 4.1, algebra] ∎
