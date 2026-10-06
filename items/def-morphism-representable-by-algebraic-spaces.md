---
id: def-morphism-representable-by-algebraic-spaces
kind: definition
title: "Morphisms representable by algebraic spaces"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
justified_by: []
aliases: []
deps:
  - def-fppf-sheaf-and-sheafification
  - def-representable-morphism-of-presheaves
  - def-algebraic-space-as-fppf-sheaf
  - def-fibre-product-schemes-universal-property
  - def-descent-data-and-stack-in-groupoids
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - def-natural-transformation
  - def-axiom-of-choice
  - lem-scheme-functor-is-algebraic-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Chapter 80 (Algebraic Spaces over Algebraic Stacks), Section 80.3, and Chapter 65 (Algebraic Spaces)"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 80.3.1 (tag 04Y7) and Section 101.3 (representable morphisms by algebraic spaces)"
    - title: "The Stacks Project, Chapter 94 (Algebraic Stacks), Sections 94.10-94.12"
      url: "https://stacks.math.columbia.edu/download/algebraic.pdf"
      locator: "Definition 94.12.1 (tag 026N) together with the representability discussion of Sections 94.10-94.11"
---

## Definition

Let $F\to G$ be a morphism of presheaves of sets on
$(\mathit{Sch}/S)_{fppf}$ ([[def-fppf-sheaf-and-sheafification]],
[[def-natural-transformation]]). It is **representable by algebraic spaces**
when for every $S$-scheme $T$ and every morphism $T\to G$ the fibre product
$F\times_GT$ is an algebraic space over $S$
([[def-algebraic-space-as-fppf-sheaf]],
[[def-fibre-product-schemes-universal-property]]). This generalizes
representability by schemes
([[def-representable-morphism-of-presheaves]]), under the Axiom of Choice
([[def-axiom-of-choice]]) of [[lem-scheme-functor-is-algebraic-space]]:
every morphism representable
by schemes is representable by algebraic spaces, because a scheme is an
algebraic space, and the fibre products agree. A property of morphisms of
algebraic spaces that is stable under base change
([[def-morphism-and-fibre-products-of-algebraic-spaces]]) is attributed
fibrewise to such a morphism: it **has property $\mathcal P$** when every base
change $F\times_GT\to T$ is a morphism of algebraic spaces with
$\mathcal P$. In this way one speaks of representable etale, smooth, flat,
surjective, open-immersion and closed-immersion morphisms of presheaves.

A **1-morphism of stacks in groupoids**
$f\colon\mathcal X\to\mathcal Y$ over $(\mathit{Sch}/S)_{fppf}$
([[def-descent-data-and-stack-in-groupoids]]) is **representable by algebraic
spaces** when for every $S$-scheme $T$ and every 1-morphism
$T\to\mathcal Y$ — equivalently, by the 2-Yoneda lemma, for every object
$x\in\mathcal Y_T$ — the 2-fibre product
$\mathcal X\times_{\mathcal Y,T}$ is equivalent to the stack in setoids
$\mathcal S_Z$ of an algebraic space $Z$ over $T$. Smooth, etale, surjective
and other fibrewise properties are then defined by base change to schemes, so
the definition specializes to the presheaf case when $\mathcal X,\mathcal Y$
are stacks in setoids of presheaves of sets.
