---
id: thm-cft-strongly-rational-module-category-is-modular
kind: theorem
title: Modular fusion category induced by strongly rational conformal blocks
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 14
domain: mathematics
library: mathematics
deps:
  - lem-cft-strong-rational-fixed-torus-loop-nondegeneracy
  - def-cft-strong-rational-voa
  - thm-cft-conformal-blocks-form-modular-functor
  - def-modular-ribbon-category-and-hopf-link-data
  - lem-cft-finite-braided-rigidity-and-contragredient-duals
dependency_roles:
  lem-cft-strong-rational-fixed-torus-loop-nondegeneracy: mathematical-premise
  def-cft-strong-rational-voa: mathematical-premise
  thm-cft-conformal-blocks-form-modular-functor: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  lem-cft-finite-braided-rigidity-and-contragredient-duals: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/2507.05845v2
      locator: Sections 5.1–5.4, especially Theorem 5.3.1 and its full proof; Section 5.4 on the comparison with the Huang–Lepowsky tensor structure.
    - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories and Modular Functors
      url: https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz
      locator: Sections 3.1–3.2 for the modular ribbon fusion category and Hopf-link conventions.
---

## Statement

Let $V$ satisfy the shared strongly rational hypotheses, and suppose the conformal-block modular functor of [[thm-cft-conformal-blocks-form-modular-functor]] has been constructed. Its genus-zero sewing and braiding data induce a finite semisimple ribbon fusion category $\mathcal C_V$ whose Hopf-link matrix is nondegenerate, hence a modular fusion category in the convention of [[def-modular-ribbon-category-and-hopf-link-data]]. This is the category induced by that modular functor; no identification with the Huang–Lepowsky intertwining-operator tensor structure is asserted without a separate comparison.

## Statement references

[[def-cft-strong-rational-voa]]

[[thm-cft-conformal-blocks-form-modular-functor]]

[[def-modular-ribbon-category-and-hopf-link-data]]

## Facts & Assumptions

**Given:** The original strongly rational hypotheses and the constructed conformal-block modular functor required by the Statement.

[F1] [[def-cft-strong-rational-voa]] fixes the five VOA hypotheses.

[F2] [[lem-cft-strong-rational-fixed-torus-loop-nondegeneracy]]: those hypotheses construct the full finite semisimple rigid ribbon ordinary-intertwiner category and prove Hopf nondegeneracy; its final conditional assertion identifies the category induced by the given conformal-block modular functor's genus-zero data with this category by the actual three-point representing property and sewing contractions.

[F3] [[def-modular-ribbon-category-and-hopf-link-data]] specifies the required categorical convention.

## Proof

1.1 F1 supplies the five hypotheses of F2. The modular functor is separately Given, as in the unchanged Statement. [given, F1, algebra]

2.1 The final assertion of F2 reconstructs the category from those genus-zero three-point blocks: their Ward/intertwiner identification gives the same representing objects, and actual sewing and exchange give the tensor comparisons and braiding. [given, F2, step 1.1, construct]

3.1 Its comparison preserves the restricted duality, the full-turn exponential ribbon twist and their categorical traces. Thus F2's invertible Hopf matrix is the Hopf matrix of the induced category, up to the change of simple representatives. [F2, step 2.1, algebra]

4.1 F2 also gives finite semisimplicity, rigidity and simple unit. Together with step 3.1 these are precisely the modularity requirements of F3. [F2, F3, step 3.1, algebra]

5.1 Hence the category induced by the assumed conformal-block modular functor is a modular fusion category. This proves the original conditional Statement without proving or assuming away any missing construction of the global modular functor itself. [given, F2, F3, step 4.1, algebra] ∎
