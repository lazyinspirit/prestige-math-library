---
id: def-nagata-quasi-domination
kind: definition
title: Quasi-domination and an admissible blowup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-open-immersion-schemes
  - def-closed-immersion-schemes
  - def-proper-morphism
  - lem-nagata-admissible-blowup-universal-property-and-properness
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Definition2.1 and Section1 admissible blowup convention, internal pp.5 and11–12, read in full.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Definition1.1, printed p.664, read in full.
---

## Definition

Let $S$ be a scheme and let $X,Y$ be $S$-schemes, with $Y\to S$ separated. A **quasi-domination of $X$ over $Y$** is a pair $(T,f)$, where $T\subseteq X$ is a dense open subscheme and $f:T\to Y$ is an $S$-morphism whose graph is a closed subscheme of the full product $X\times_SY$. Density here is topological unless schematic density is expressly stated. The graph carries its full scheme structure.

This quasi-domination is **proper** if the actual map $f:T\to Y$ is proper. It **extends** a given map $f_0:T_0\to Y$, with $T_0\subseteq X$ open, when $T_0\subseteq T$ and $f|_{T_0}=f_0$. An extension is required to keep this actual map and its original domain unchanged.

For a Noetherian $X$ and an open $U\subseteq X$, a **$U$-admissible blowup** is a morphism $\operatorname{Bl}_{\mathcal J}(X)\to X$ defined by a coherent ideal $\mathcal J$ whose center is disjoint from $U$, equivalently $\mathcal J|_U=\mathcal O_U$. It is the identity over $U$ by the finite-chart blowup construction. The center is part of this description: a unit ideal gives the identity blowup, and distinct center ideals can describe isomorphic blowup morphisms. No choice principle is assumed by these definitions.

## Definition references

[[def-open-immersion-schemes]]

[[def-closed-immersion-schemes]]

[[def-proper-morphism]]

[[lem-nagata-admissible-blowup-universal-property-and-properness]]

[Conrad, Definition2.1, internal pp.11–12](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)
