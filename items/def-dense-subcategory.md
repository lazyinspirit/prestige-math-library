---
id: def-dense-subcategory
kind: definition
title: "Dense subcategory"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-density-as-a-self-kan-extension-for-a-small-category, thm-yoneda-embedding-is-fully-faithful, def-pointwise-kan-extension-by-the-comma-category-formula, def-category-of-elements, def-full-faithful-and-essentially-surjective-functor, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 5.4.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., §6.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $i:\mathcal A\to\mathcal C$ be a fully faithful functor with $\mathcal A$
small and $\mathcal C$ locally small
([[def-full-faithful-and-essentially-surjective-functor]],
[[def-small-locally-small-and-large-category]]).
The functor $i$ is **dense** when the identity functor
$1_{\mathcal C}:\mathcal C\to\mathcal C$ is a pointwise left Kan extension of
$i$ along $i$ in the sense of
[[def-pointwise-kan-extension-by-the-comma-category-formula]].

Equivalently, for each object $c$ of $\mathcal C$, the canonical diagram
indexed by the category of elements of the presheaf $\mathcal C(i-,c)$
([[def-category-of-elements]]) has colimit $c$. The model case is the Yoneda
embedding: it is fully faithful by
[[thm-yoneda-embedding-is-fully-faithful]] and satisfies the pointwise
self-extension property by
[[thm-density-as-a-self-kan-extension-for-a-small-category]].

When $\mathcal A$ is identified with a full subcategory of $\mathcal C$ and
$i$ is the inclusion, one also says that $\mathcal A$ is a **dense
subcategory** of $\mathcal C$.
