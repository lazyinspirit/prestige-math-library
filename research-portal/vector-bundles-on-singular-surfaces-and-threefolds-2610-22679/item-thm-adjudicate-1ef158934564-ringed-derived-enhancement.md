---
title: Derived enhancements of module sheaves on ringed spaces
status: draft
research_item: thm-adjudicate-1ef158934564-ringed-derived-enhancement
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and fix suitable universes. For any ringed space $(X,\mathcal O_X)$, the category $\mathrm{Mod}(\mathcal O_X)$ of all module sheaves is Grothendieck abelian. Its unbounded derived infinity-category $\mathcal D(X)$ is stable and presentable and is the infinity-localization of complexes at quasi-isomorphisms. Its homotopy category is the ordinary unbounded derived category.

## External input
Import the Grothendieck-category assertion from Stacks 079Q and the derived construction from Higher Algebra at the exact locators above. A ringed space is a ringed site via its category of opens, so the hypothesis applies without quasi-coherence or finiteness. Choice is retained for these resolution/model-category inputs. Their foundational constructions are imported, not reconstructed. The universal property of localization carries degreewise exact additive functors and their natural transformations to the derived localizations; zero objects and mapping cones give exactness. This last application uses the actual functors, rather than only functors on homotopy categories.
