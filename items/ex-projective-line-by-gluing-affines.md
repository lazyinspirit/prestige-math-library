---
id: ex-projective-line-by-gluing-affines
kind: example
title: "The projective line from two affine charts"
status: published
verification:
  audited: 2026-09-07
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-gluing-affine-schemes, def-open-immersion-schemes]
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 5.5.4"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Example

Let $k$ be a field. Let $U=\operatorname{Spec}k[t]$ and $V=\operatorname{Spec}k[u]$. Their
principal opens $D(t)$ and $D(u)$ have coordinate rings $k[t,t^{-1}]$ and
$k[u,u^{-1}]$. The isomorphism $u\mapsto t^{-1}$ glues $U$ and $V$ along these
opens. With two charts there is no nontrivial triple-overlap cocycle; the
resulting scheme is, by definition in this construction, the projective line
$\mathbf P^1_k$; equivalently, the notation here names precisely this
two-chart gluing.
