---
id: def-abelianisation-of-a-group
kind: definition
title: 'The abelianisation $G^{\mathrm{ab}}:=G/[G,G]$ and its canonical map'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutator-and-commutator-subgroup, lem-commutator-subgroup-is-normal, def-quotient-group, prop-canonical-quotient-map]
justified_by: []
aliases: [def-abelianization-of-a-group]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
    - title: "Encyclopedia of Mathematics, Commutator subgroup"
      url: "https://encyclopediaofmath.org/wiki/Commutator_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group. Its **abelianisation** is the quotient

$$G^{\mathrm{ab}}:=G/[G,G],$$

where $[G,G]$ is the commutator subgroup of
[[def-commutator-and-commutator-subgroup]]. This subgroup is normal by
[[lem-commutator-subgroup-is-normal]], so the quotient is defined. The
**abelianisation map** is the canonical surjective homomorphism

$$q_G:G\longrightarrow G^{\mathrm{ab}},\qquad q_G(g)=g[G,G],$$

of [[prop-canonical-quotient-map]].

