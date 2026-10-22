---
id: def-barnatan-tangle-cobordism-category
kind: definition
title: "The Bar-Natan cobordism category"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §§3–4 and 7"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1450–1458 and 1470–1471; cobordisms, local relations, and the Frobenius TQFT"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, §5"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
      locator: "PDF pp.18–22; surface-cobordism state category and the four-tube, sphere, and torus relations"
---

## Definition

Let an object be a finite disjoint union of smooth embedded circles in the oriented plane \(\mathbb R^2\), including the empty union. A cobordism from \(C_0\) to \(C_1\) is a compact smooth orientable surface properly embedded in \(\mathbb R^2\times[0,1]\), with boundary \(C_0\times\{0\}\sqcup C_1\times\{1\}\), product collars at those boundaries, and no other boundary. Surfaces are identified up to ambient isotopy fixed on the boundary collars. Compose cobordisms by gluing along their common boundary circles; the identity of \(C\) is \(C\times[0,1]\), and disjoint union gives the monoidal product. Let \(\mathsf{Cob}_3\) be this additive monoidal category before imposing local relations.

Take the free abelian group on these isotopy classes of cobordisms and quotient by the following local relations, which are required to hold inside every surrounding cobordism. A sphere component is zero (the S relation). Adding a disjoint torus component multiplies a cobordism by \(2\) (the T relation). For four disjoint disk patches numbered \(1,2,3,4\), write \(S_{ij}\) for the surface obtained by deleting the interiors of patches \(i,j\) and joining their boundary circles by an orientable tube; the four-tube relation is \(S_{12}+S_{34}=S_{13}+S_{24}\). The resulting additive monoidal category is denoted \(\mathsf{Cob}_{BN}\).

## Definition references

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§3–4 and 7](https://arxiv.org/pdf/math/0410495v2)

[Kauffman, *An Introduction to Khovanov Homology*, §5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)
