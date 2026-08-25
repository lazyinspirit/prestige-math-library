---
id: def-power-and-copower-by-a-set
kind: definition
title: "The power and the copower of an object by a set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-set-weighted-limit-and-weighted-colimit, def-hom-functors-and-hom-bifunctor, prop-sets-and-functions-form-category-set, def-small-locally-small-and-large-category, def-the-set-of-functions-from-one-set-to-another, def-category]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.42) and (3.44)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 2.2.3"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Definition

Let $\mathcal M$ be a locally small category
([[def-small-locally-small-and-large-category]], [[def-category]]), let $c$ be
an object of $\mathcal M$ and let $S$ be a set. Write $\mathbf 1$ for the
category with one object and only its identity morphism, and
$D_c:\mathbf 1\to\mathcal M$ for the diagram picking out $c$. A natural
transformation between two functors $\mathbf 1\to\mathcal A$ is a single
morphism in the target category $\mathcal A$ between their values, since the
only naturality equation is at an identity. When $\mathcal A=\mathbf{Set}$ that
morphism is a function.

The **power** of $c$ by $S$, written $c^{S}$ or $S\pitchfork c$, is the
weighted limit of the one-object diagram at the constant weight $S$
([[def-set-weighted-limit-and-weighted-colimit]]): an object with a bijection

$$\mathcal M(m,c^{S})\;\cong\;\mathbf{Set}\bigl(S,\mathcal M(m,c)\bigr)$$

natural in $m$, where the right-hand side is the set of functions
$S\to\mathcal M(m,c)$ ([[def-the-set-of-functions-from-one-set-to-another]],
[[prop-sets-and-functions-form-category-set]],
[[def-hom-functors-and-hom-bifunctor]]).

The **copower** of $c$ by $S$, written $S\cdot c$, is the corresponding
weighted colimit: an object with a bijection

$$\mathcal M(S\cdot c,m)\;\cong\;\mathbf{Set}\bigl(S,\mathcal M(c,m)\bigr)$$

natural in $m$. Neither object need exist.

The **counit** of the power is the family
$\mathrm{pr}_s:c^{S}\to c$ indexed by $s\in S$, obtained by applying the
bijection to the identity of $c^{S}$; dually the copower carries injections
$\mathrm{in}_s:c\to S\cdot c$.

## Remarks

Both are instances of the weighted limit and colimit of a diagram on a
one-object index category, so nothing new is being defined: what is new is only
the name and the notation, and the reason for having them is that the two
constructions occur constantly once weights are allowed.

The enriched literature calls these the cotensor and the tensor of an object by
an object of the base. Those names belong with the enriched development and are
not used here; the $\mathbf{Set}$-enriched names **power** and **copower** are
the ones in force on this page.
