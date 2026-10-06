---
id: def-morphism-and-fibre-products-of-algebraic-spaces
kind: definition
title: "Morphisms, products and fibre products of algebraic spaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
justified_by: []
aliases: []
deps:
  - def-algebraic-space-as-fppf-sheaf
  - def-representable-morphism-of-presheaves
  - def-fibre-product-schemes-universal-property
  - def-presheaf-representable-functor-and-representation
  - def-open-immersion-schemes
  - def-closed-immersion-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Sections 65.6-65.7"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Definition 65.6.3 (tag 0260) and Lemmas 65.7.1-65.7.3 (tags 02X0-02X2), morphisms, products and fibre products of algebraic spaces"
---

## Definition

**Morphisms of algebraic spaces** over $S$ are the natural transformations of
their underlying presheaves ([[def-algebraic-space-as-fppf-sheaf]]); the
category of algebraic spaces over $S$ is a full subcategory of the presheaves
on $(\mathit{Sch}/S)_{fppf}$, so a morphism is a morphism of sheaves and
composition is composition of natural transformations.

For algebraic spaces $F,G,H$ and morphisms $F\to H$, $G\to H$, the **fibre
product of presheaves** $F\times_HG$ is computed objectwise by
$$(F\times_HG)(T)=F(T)\times_{H(T)}G(T)$$
([[def-fibre-product-schemes-universal-property]],
[[def-presheaf-representable-functor-and-representation]]); it is again an
algebraic space over $S$ and represents the fibre product in the category of
algebraic spaces. Indeed $F\times_HG$ is an fppf sheaf, since limits of sheaves are computed objectwise. For a scheme $T$ and two sections of $F\times_HG$ over $T$, their equality locus is the fibre product over $T$ of the scheme-valued equality loci of their $F$- and $G$-components. These loci are schemes by representability of $\Delta_F$ and $\Delta_G$, so the diagonal of $F\times_HG$ is representable. Choose etale scheme covers $U_F\to F$ and $U_G\to G$. The sheaf $W=U_F\times_HU_G$ is a scheme: it is the pullback of the representable diagonal $\Delta_H$ along $U_F\times_SU_G\to H\times H$. The map $W\to F\times_HG$ is representable, etale and surjective. To check this on a scheme $T\to F\times_HG$, its base change is the product over $T$ of the etale surjective schemes $T\times_FU_F$ and $T\times_GU_G$; their product is etale and surjective over $T$. Thus $W$ is the required cover. These constructions use only scheme fibre products and the three given diagonals; no lifts to a chosen cover of $H$ are required. In particular **products** $F\times_SG$ over the terminal algebraic
space $S$ are algebraic spaces over $S$. The **diagonal**
$\Delta\colon F\to F\times_SF$ is a morphism between algebraic spaces,
representable by schemes by condition 2 of the definition of an algebraic
space, and more generally a morphism of algebraic spaces has property
$\mathcal P$ when it is representable and every base change to a scheme has
$\mathcal P$ ([[def-representable-morphism-of-presheaves]]): in particular it
is **separated** when its diagonal is a closed immersion
([[def-closed-immersion-schemes]]), **etale** when it is representable etale,
and an **open immersion** when it is representable by open immersions
([[def-open-immersion-schemes]]).
