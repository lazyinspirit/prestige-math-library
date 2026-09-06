---
id: def-scheme-over-base
kind: definition
title: "Schemes and morphisms over a base"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, thm-gluing-affine-schemes]
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 7.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Definition

An **$S$-scheme** is a scheme $X$ equipped with a morphism $X\to S$. An
**$S$-morphism** $X\to Y$ is a scheme morphism commuting with the maps to $S$.
For $n\geq0$, choose an affine open cover
$S=\bigcup_i\operatorname{Spec}A_i$. Over each chart take
$\operatorname{Spec}A_i[t_1,\ldots,t_n]$. On overlaps, localization in the
coefficients gives canonical isomorphisms that fix the variables; these
satisfy the cocycle condition and glue by `thm-gluing-affine-schemes`. The
result, independent of the cover up to the unique $S$-isomorphism respecting the coefficient maps and the ordered coordinate functions $t_1,\ldots,t_n$, is the relative affine
space $\mathbf A^n_S$. Its structure morphism is affine, although its total
scheme need not be affine when $S$ is not. For $n=0$ it is $S$; for $S=\varnothing$ the construction gives the empty scheme. The uniqueness assertion concerns these coordinate-compatible identifications, not arbitrary $S$-isomorphisms.
