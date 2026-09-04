---
id: def-open-set-category-topological-space
kind: definition
title: "The category of open subsets of a topological space"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-topological-space]
verification:
  audited: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 2"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $X$ be a topological space ([[def-topological-space]]).

The **open-set category** $\operatorname{Open}(X)$ has:

- objects: the open subsets $U \subseteq X$;
- morphisms: for opens $V,U$, a unique morphism $V \to U$ when $V \subseteq U$,
  and no morphism otherwise.

Composition is forced by transitivity of inclusion, and identity morphisms are
the inclusions $U \subseteq U$. Thus $\operatorname{Open}(X)$ is a category
([[def-category]]).

The arrows point in the same direction as inclusion. Therefore a contravariant
functor on $\operatorname{Open}(X)$ sends an inclusion $V \subseteq U$ to a
restriction map from the larger open set to the smaller one.
