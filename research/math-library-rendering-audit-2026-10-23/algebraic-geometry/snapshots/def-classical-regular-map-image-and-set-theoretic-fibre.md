---
id: "def-classical-regular-map-image-and-set-theoretic-fibre"
kind: "definition"
title: "Images and set-theoretic fibres of classical regular maps"
status: published
origin: "pipeline"
deps: ["def-classical-affine-variety-morphism"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2j pp. 49–50"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

For a morphism $\phi:U\to Y$, its image is $\phi(U)=\{\phi(x):x\in U\}$, and its fibre over $y\in Y$ is the set $\phi^{-1}(\{y\})=\{x\in U:\phi(x)=y\}$. These are set-theoretic notions. A fibre can be empty. No assertion that images are closed is part of this definition; a fibre here is not a scheme fibre or an ideal quotient.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2j pp. 49–50. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
