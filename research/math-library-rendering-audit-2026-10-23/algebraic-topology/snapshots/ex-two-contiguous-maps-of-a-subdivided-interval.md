---
id: ex-two-contiguous-maps-of-a-subdivided-interval
kind: example
title: "Two contiguous maps of a subdivided interval"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-contiguous-simplicial-maps, lem-contiguous-simplicial-maps-have-homotopic-realizations, thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 02: Homotopy"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
---

## Example

Let $K$ be the subdivided interval with vertices $x_0,x_1,x_2$ and edges
$\{x_0,x_1\}$ and $\{x_1,x_2\}$. Let $L$ be the full $2$-simplex on vertices
$a,b,c$. Define simplicial maps $f,g:K \to L$ by
$$f(x_0)=a,\qquad f(x_1)=b,\qquad f(x_2)=c,$$
$$g(x_0)=a,\qquad g(x_1)=a,\qquad g(x_2)=c.$$

For the edge $\{x_0,x_1\}$, the union of the image vertex sets is
$\{a,b\}$; for $\{x_1,x_2\}$ it is $\{a,b,c\}$. Both are simplices of $L$, and
the same is clear for the vertices, so $f$ and $g$ are contiguous. Their
realizations are therefore homotopic, and they induce the same map on every
simplicial homology group.
