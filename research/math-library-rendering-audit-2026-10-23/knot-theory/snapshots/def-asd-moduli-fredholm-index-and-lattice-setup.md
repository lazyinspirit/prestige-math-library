---
id: def-asd-moduli-fredholm-index-and-lattice-setup
kind: definition
title: Sign-fixed self-dual moduli and deformation setup
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
  - def-smooth-principal-g-bundle
  - def-connection-on-a-smooth-vector-bundle
  - def-curvature-of-a-vector-bundle-connection
  - def-hodge-star-on-an-oriented-inner-product-space
  - def-gauge-group-of-a-smooth-principal-bundle
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§I.2 and II.1, printed pp. 282–287; sign convention $F_A^-=0$ and $c_2(P)[X]=-1$
---

## Definition

Let $X$ be a closed oriented Riemannian four-manifold and let $P\to X$ be a smooth principal $SU(2)$-bundle with $c_2(P)[X]=-1$. The Hodge star on two-forms is $*$, and $F_A^-=(F_A-*F_A)/2$ denotes the anti-self-dual projection of the curvature of a connection $A$. The equation used in this item is $F_A^-=0$, so the curvature is self-dual; this convention and the negative second Chern number are fixed together for the positive-definite orientation. The self-dual moduli set is the set of smooth connections satisfying $F_A^-=0$, modulo the action of smooth gauge transformations of $P$. At a solution, the deformation complex is $0\to\Omega^0(X;\operatorname{ad}P)\xrightarrow{d_A}\Omega^1(X;\operatorname{ad}P)\xrightarrow{d_A^-}\Omega^-(X;\operatorname{ad}P)\to0$, and its gauge-fixed operator is $D_A=d_A^*\oplus d_A^-$. For index calculations, $D_A$ is completed from the first Sobolev space of one-forms to the direct sum of the zeroth Sobolev spaces of zero-forms and anti-self-dual two-forms.

## Definition references

[[def-smooth-principal-g-bundle|Smooth principal bundle and its adjoint bundle]]

[[def-connection-on-a-smooth-vector-bundle|Connection and covariant derivative]]

[[def-curvature-of-a-vector-bundle-connection|Curvature of a connection]]

[[def-hodge-star-on-an-oriented-inner-product-space|Hodge star and self-dual projections]]

[[def-gauge-group-of-a-smooth-principal-bundle|Gauge transformations acting on connections]]

