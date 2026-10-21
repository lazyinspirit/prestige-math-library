---
id: thm-fibered-knot-has-rank-one-top-knot-floer-homology
kind: theorem
title: "A fibered knot has rank-one top knot Floer homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-axiom-of-choice
  - lem-ni-holomorphic-disk-and-jsj-analytic-inputs
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
  - lem-marked-fiber-admits-a-sutured-surface-diagram
  - lem-permissible-surface-niceification-preserves-admissibility
  - lem-fiber-outer-grading-and-integral-cut-euler-matrix
  - lem-signed-outer-summand-cut-comparison-with-zero-periodic-cut
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is required by the imported integral sutured analytic and signed diagram-move suppliers used in the actual product-diagram comparison. No weaker-choice version is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed p.2; the top group of a fibered knot is a single copy of Z"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorem 1.5 and §9"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.2–3 and 31–38; top knot Floer group as sutured Floer homology and the product criterion"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorem 2.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; the S3 fibered-knot rank-one equivalence"
---

## Statement

Assume full AC. Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, and suppose $Y\setminus K$ fibers over $S^1$ with connected fiber a Seifert surface $F$ of genus $g$. Then the integral top Alexander group is one copy of the integers:

$$\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)\cong\mathbb Z.$$

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral Alexander grading and Seifert class]]

[[def-balanced-taut-sutured-manifold-and-product-region|The product sutured manifold obtained by cutting along a fiber]]

[Ni, *Knot Floer homology detects fibred knots*, §1](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, Theorem 1.5](https://arxiv.org/pdf/math/0609779v3)

## Facts & Assumptions

[F1] [[lem-marked-fiber-admits-a-sutured-surface-diagram]] constructs the actual meridionally marked exterior diagram and identifies its fiber cut with the marked product.

[F2] [[lem-permissible-surface-niceification-preserves-admissibility]] gives a finite admissible adapted nice diagram.

[F3] [[lem-relative-sutured-diagrams-have-signed-move-equivalences]] gives the signed comparison for the specified transported orientation class and computes the product by the empty diagram.

[F4] [[lem-fiber-outer-grading-and-integral-cut-euler-matrix]] fixes the absolute Chern anchor: the outer summand has Alexander degree g.

[F5] [[lem-signed-outer-summand-cut-comparison-with-zero-periodic-cut]] identifies the entire outer differential with the cut differential over the integers when the cut periodic group vanishes.

## Proof

**Given:** Full AC, a null-homologous knot K in the stated general closed oriented Y and its connected fiber F of genus g, with the meridional boundary trivialization in the definition of the integral Alexander grading. [[def-axiom-of-choice]] supplies AC.

1.1 Use the actual binding bridge and drilling construction to represent the exterior with two meridional sutures, carrying the actual page longitude and the class of F. The adapted surface cut is literally the result of cutting this mapping torus along its fiber, hence is F times an interval with its product sutures. Apply the finite permissible niceification. Signed relative diagram moves compare the resulting complex to the chosen defining complex, with its specified coherent orientation class transported. No restriction on Y or change of coefficient ring is made. [F1, F2, F3]

2.1 In this marked adapted diagram the local Euler obstruction is minus 2g plus twice the number of interior polygon coordinates when evaluated on minus F. Therefore the Alexander degree is g minus that number: degree g is precisely the outer generator set, and no higher degree occurs. The product cut has zero periodic-domain group, either directly from its empty product diagram and the relative handle description, or from its vanishing relative integral homology. The signed cut comparison consequently identifies the whole degree-g differential with the cut differential, after harmless changes of generator signs. [F4, F5, step 1.1]

3.1 The empty diagram of the actual product has one empty-tuple generator and no nonconstant disk, so its integral chain complex is Z with zero differential. The signed relative move equivalences identify its homology with that of the actual cut diagram. Combining with the full top-summand chain identification gives the asserted integral group isomorphism. The exterior orientation character restricts trivially to the zero-periodic cut, so this conclusion holds for the specified defining class without asserting equivalence of arbitrary orientation systems on the uncut exterior. [F3, step 2.1] ∎

