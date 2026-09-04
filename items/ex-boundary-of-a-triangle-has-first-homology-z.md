---
id: ex-boundary-of-a-triangle-has-first-homology-z
kind: example
title: "The boundary of a triangle has first homology Z"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simplicial-cycles-boundaries-and-homology, def-orientation-of-a-simplex]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Example

Let $K$ have vertices $v_0,v_1,v_2$ and edges $e_{01},e_{12},e_{20}$, with no
2-simplex. Then $C_2(K)=0$ and $C_1(K)\cong \mathbb Z^3$. If the edges are
oriented cyclically, the boundary map is
$$\partial_1(e_{01},e_{12},e_{20}) = (v_1-v_0,\ v_2-v_1,\ v_0-v_2).$$
The sum $e_{01}+e_{12}+e_{20}$ is a $1$-cycle, and every $1$-cycle is an
integer multiple of this one because the three vertex equations force the three
edge coefficients to agree. Since $C_2(K)=0$, one has $B_1(K)=0$, so
$$H_1^{\mathrm{simp}}(K)\cong \mathbb Z.$$
The complex is connected, so $H_0^{\mathrm{simp}}(K)\cong \mathbb Z$, and all
higher homology groups vanish.
