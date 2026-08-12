---
id: def-yoneda-embedding
kind: definition
title: "The Yoneda assignment and the small-source Yoneda functor, traditionally called the Yoneda embedding"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-presheaf-representable-functor-and-representation,
       thm-hom-assignment-is-a-bifunctor, def-functor-category,
       prop-size-of-functor-categories, def-embedding-of-categories]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Corollary 2.2.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Definition 4.1.21"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be locally small. The **Yoneda assignment** $y$ sends an object
$a$ to the representable presheaf

$$y(a):=\mathcal C(-,a):\mathcal C^{\mathrm{op}}\to\mathbf{Set}$$

and sends a morphism $f:a\to b$ to the natural transformation
$y(f):y(a)\Rightarrow y(b)$ whose component at $c$ is postcomposition by $f$:

$$y(f)_c:\mathcal C(c,a)\longrightarrow\mathcal C(c,b),\qquad g\longmapsto f\circ g.$$

The functoriality and naturality of these formulas are instances of the
hom-bifunctor [[thm-hom-assignment-is-a-bifunctor]].

When $\mathcal C$ is small, [[def-functor-category]] and
[[prop-size-of-functor-categories]] form the presheaf category and the assignment
is the functor

$$y:\mathcal C\longrightarrow[\mathcal C^{\mathrm{op}},\mathbf{Set}],$$

traditionally called the **Yoneda embedding**. For an arbitrary large locally
small $\mathcal C$, the same formulas are called the Yoneda assignment; no
large-source functor category is silently formed. Full faithfulness is proved
in [[thm-yoneda-embedding-is-fully-faithful]]. Under the terminology of
[[def-embedding-of-categories]], a fully faithful functor is a full embedding
only if its object map is also injective.
