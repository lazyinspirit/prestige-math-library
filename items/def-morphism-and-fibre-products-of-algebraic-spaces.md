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
  - def-etale-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Sections 65.6-65.7"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Definition 65.6.3 (tag 0260) and Lemmas 65.7.1-65.7.3 (tags 02X0, 04T9, 02X2), morphisms, products and fibre products of algebraic spaces"
    - title: "The Stacks Project, Properties of Algebraic Spaces, Section 66.16"
      url: "https://stacks.math.columbia.edu/tag/03FQ"
      locator: "Definition 66.16.2 and Lemma 66.16.3 (tags 03FR and 03FS), general etale morphisms and their scheme-chart characterization"
    - title: "The Stacks Project, Morphisms of Algebraic Spaces, Section 67.22"
      url: "https://stacks.math.columbia.edu/download/spaces-morphisms.pdf"
      locator: "Types of morphisms etale local on source-and-target; Lemma 67.22.1 and Definition 67.22.2; exact corresponding TeX source read at https://raw.githubusercontent.com/stacks/stacks-project/master/spaces-morphisms.tex, section-local-source-target"
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
$\Delta_F\colon F\to F\times_SF$ is a morphism of algebraic spaces
representable by schemes, by condition 2 of
[[def-algebraic-space-as-fppf-sheaf]].

Let $\mathcal P$ be a property of scheme morphisms stable under base change.
For a morphism $f\colon F\to G$ **representable by schemes**, the
**representable property $\mathcal P$** means that every base change
$F\times_GT\to T$ to a scheme has $\mathcal P$
([[def-representable-morphism-of-presheaves]]). In particular, an **open
immersion** is a morphism representable by open immersions
([[def-open-immersion-schemes]]). A morphism $f$ is **separated** when its
relative diagonal $\Delta_f\colon F\to F\times_GF$ is a closed immersion
([[def-closed-immersion-schemes]]); this diagonal is representable by
schemes, being a base change of $\Delta_F$.

If $\mathcal P$ is local in the etale topology on both source and target,
it extends to arbitrary morphisms of algebraic spaces by scheme charts:
$f\colon F\to G$ **has property $\mathcal P$** when for every commutative
square with top arrow $h\colon U\to V$, bottom arrow $f$, and representable
etale vertical arrows $U\to F$ and $V\to G$ from schemes, $h$ has
$\mathcal P$. Thus $f$ is **etale** when these scheme morphisms $h$ are
etale ([[def-etale-morphism-schemes]]). For properties additionally stable
under base change and fppf-local on the target, this chart definition agrees
with the preceding fibrewise definition whenever $f$ is representable by
schemes. In particular **representable etale** requires both scheme
representability and etaleness; a general etale morphism of algebraic spaces
need not be representable by schemes.
