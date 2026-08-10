---
id: def-linear-isomorphism-and-invertible-linear-map
kind: definition
title: 'Invertible linear maps, linear isomorphisms, and inverse linear maps'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, Definition 21'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to W$ be linear. It is **invertible** when there is a linear map
$S:W\to V$ such that

$$S\circ T=\operatorname{id}_V,\qquad T\circ S=\operatorname{id}_W.$$

Such an $S$ is the **inverse linear map** of $T$, denoted $T^{-1}$. The two
inverse equations make $T$ bijective and determine $T^{-1}$ uniquely. An
invertible linear map is also called a **linear isomorphism**, and $V$ and $W$
are **linearly isomorphic**, written $V\cong W$, when such a map exists.
