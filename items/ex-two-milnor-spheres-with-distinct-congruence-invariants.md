---
id: ex-two-milnor-spheres-with-distinct-congruence-invariants
kind: example
title: "Two Milnor spheres with distinct congruence invariants"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven, def-axiom-of-choice, cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven, thm-milnor-lambda-invariant-is-well-defined-modulo-seven]
justified_by: []
aliases: []
landmark: false
dependency_level: 21
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 404, the arithmetic distinguishing two of the constructed manifolds"
---

## Example

Assume the Axiom of Choice and countable choice. For $(h,j)=(1,0)$ we have
$h+j=1$ and $k=h-j=1$, so
$$\lambda(M_{1,0})=(h-j)^2-1=1-1=0\pmod 7,$$
while for $(h,j)=(2,-1)$ we have $h+j=1$ and $k=h-j=3$, so
$$\lambda(M_{2,-1})=(h-j)^2-1=9-1=8\equiv1\pmod 7 .$$
The displayed values follow from
[[thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven]].
Both manifolds are homeomorphic to $S^7$ by
[[cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven]],
and the invariant is preserved under orientation-preserving diffeomorphism
and negated under orientation reversal by
[[thm-milnor-lambda-invariant-is-well-defined-modulo-seven]], so no diffeomorphism
between them exists in either orientation. Thus $M_{1,0}$ and $M_{2,-1}$ are
two closed smooth seven-manifolds with distinct congruence invariants.
