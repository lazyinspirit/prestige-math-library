---
id: def-rt-state-spaces
kind: definition
title: "RT state spaces from a modular category"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-modular-ribbon-category-and-hopf-link-data, def-fusion-and-multifusion-category, def-rigid-object-and-rigid-monoidal-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §5.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §8.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Fix a complex modular ribbon fusion category as in [[def-modular-ribbon-category-and-hopf-link-data]], with finite simple-label set $I$, tensor unit $\mathbf1$, and dual label $i^*$ for each $i$. Define the **handle object**

$$H=\bigoplus_{i\in I}i\otimes i^*.$$

For an oriented marked surface $\Sigma$ of genus $g$ with ordered marked points labeled by objects $W_1,\ldots,W_n$, fix a parametrization and the standard handle decomposition used to read its labels. The associated algebraic state space is

$$V(\Sigma;W_1,\ldots,W_n)=\operatorname{Hom}_{\mathcal C}\!\left(\mathbf1,\, W_1\otimes\cdots\otimes W_n\otimes H^{\otimes g}\right).$$

The empty tensor product is $\mathbf1$ and $H^{\otimes0}=\mathbf1$. Reversing the orientation of a marked boundary circle replaces its label $W$ by the left dual $W^*$. This formula defines a vector space only; mapping-class operators, bordism maps, independence of parametrization, and gluing are not asserted here.

## Facts & Assumptions

**Given:** A modular ribbon fusion category, a parametrized genus-$g$ marked surface, and its ordered boundary labels.

[F1] The category is complex linear, finite semisimple, has finite-dimensional morphism spaces, finitely many simple labels, and chosen left duals ([[def-modular-ribbon-category-and-hopf-link-data]], [[def-fusion-and-multifusion-category]], [[def-rigid-object-and-rigid-monoidal-category]]).

## Proof

**Given:** The data in the Statement.

1.1 The direct sum defining $H$ is finite because $I$ is finite. Each tensor product in the displayed target is an object of $\mathcal C$, and finite semisimplicity makes its Hom space from the unit a finite-dimensional complex vector space. Thus the formula is a well-defined finite-dimensional vector space for the fixed parametrization and label order. [F1, given, algebra]

2.1 The formula at $g=n=0$ is $\operatorname{Hom}(\mathbf1,\mathbf1)=\mathbb C$, since the fusion category has simple unit and $\operatorname{End}(\mathbf1)=\mathbb C$. Reversing a boundary orientation uses the chosen dual object, so every label in the formula has a specified domain and codomain. [F1, given, step 1.1, algebra] ∎
