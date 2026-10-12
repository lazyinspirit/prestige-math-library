---
id: "def-equivariant-constructible-derived-category-for-complex-algebraic-varieties"
kind: definition
title: "Equivariant constructible derived category of complex varieties"
status: draft
origin: session
deps: ["def-algebraically-constructible-complex-of-analytic-field-sheaves", "lem-field-module-sheaves-have-injective-derived-models"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
justified_by: ["lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom"]
---

## Definition

Assume AC. For a separated finite-type complex variety $X$, an algebraic action of a product $G$ of general linear groups, and a field $k$ of characteristic zero, form the analytic action nerve $G^p\times X$. In the abelian category of all simplicial $k$-sheaves on this nerve, take its bounded derived category. The full subcategory $D^b_{G,c}(X;k)$ consists of complexes whose cohomology sheaves are Cartesian under every nerve structure map and whose restrictions to $X$ are algebraically constructible with finite-dimensional stalks. Boundedness is uniform cohomological boundedness in that simplicial category. Morphisms are morphisms in that ambient derived category, not morphisms in the derived category of naive equivariant sheaves. Set $\operatorname{Ext}_G^m(A,B)=\operatorname{Hom}(A,B[m])$ with ordinary cochain shift. Restriction to the degree-zero space $X$ is the forgetful functor. The named construction supplier establishes the derived model, local-smallness and finite-resolution comparisons.
