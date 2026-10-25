---
id: "def-classical-dominant-morphism-and-rational-map"
kind: "definition"
title: "Dominant classical morphisms and rational maps"
status: published
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "lem-classical-morphism-inverse-image-of-closed-is-closed", "def-classical-rational-map", "lem-classical-rational-map-equivalence-transitive"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.34 p. 72 and §§5k–l pp. 116–117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

A morphism $\phi:U\to Y$ from a nonempty open in an affine variety to an affine variety is dominant when $\overline{\phi(U)}=Y$. A rational map is dominant when one representative is dominant. This does not depend on the representative. Indeed, if $\phi$ is dominant and $W\subseteq U$ is nonempty open, then for each nonempty open $T\subseteq Y$, $\phi^{-1}(T)$ is a nonempty open in $U$ by [[lem-classical-morphism-inverse-image-of-closed-is-closed]] and dominance. It meets $W$ by [[lem-classical-affine-variety-nonempty-opens-dense]], so $\phi(W)$ meets every such $T$, proving $\phi|_W$ dominant. If two representatives agree on a nonempty common open, restricting a dominant one to that open gives a dense image contained in the image of the other. Thus every representative is dominant. Conversely, if any restriction is dominant, the original image contains a dense subset and is dominant.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.34 p. 72 and §§5k–l pp. 116–117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
