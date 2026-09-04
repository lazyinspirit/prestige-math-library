---
id: ex-simplicial-homology-of-the-tetrahedron-boundary
kind: example
title: "The simplicial homology of the tetrahedron boundary"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-zero-th-simplicial-homology-is-free-on-connected-components, thm-euler-poincare-formula-for-a-finite-simplicial-complex, def-simplicial-cycles-boundaries-and-homology]
verification:
  audited: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Example

Let $K$ be the boundary of a tetrahedron. It has $4$ vertices, $6$ edges, and
$4$ triangular faces. The complex is connected, hence
$H_0^{\mathrm{simp}}(K)\cong \mathbb Z$.

Orient the faces as $[v_0,v_1,v_2]$, $[v_0,v_1,v_3]$, $[v_0,v_2,v_3]$, and
$[v_1,v_2,v_3]$. The alternating sum
$$[v_1,v_2,v_3]-[v_0,v_2,v_3]+[v_0,v_1,v_3]-[v_0,v_1,v_2]$$
is a $2$-cycle because every edge appears twice with opposite signs. Since
$C_3(K)=0$, this gives a nonzero class in $H_2^{\mathrm{simp}}(K)$.

The three face boundaries
$$\partial[v_0,v_1,v_2],\qquad \partial[v_0,v_1,v_3],\qquad \partial[v_0,v_2,v_3]$$
are linearly independent in $C_1(K)$ because the edges $[v_1,v_2]$,
$[v_1,v_3]$, and $[v_2,v_3]$ occur in only one of them. Thus
$\operatorname{rank} B_1(K)\geq 3$. On the other hand,
$\operatorname{rank} C_1(K)=6$ and $\operatorname{rank} \partial_1=3$ because
$H_0^{\mathrm{simp}}(K)\cong\mathbb Z$ and $C_0(K)\cong\mathbb Z^4$, so
$\operatorname{rank} Z_1(K)=6-3=3$. Hence $B_1(K)=Z_1(K)$ and
$H_1^{\mathrm{simp}}(K)=0$.

Now $\operatorname{rank}\partial_2=\operatorname{rank} B_1(K)=3$, so
$\operatorname{rank} Z_2(K)=4-3=1$. Since $Z_2(K)\subseteq C_2(K)\cong\mathbb
Z^4$ and already contains a nonzero cycle, it follows that
$H_2^{\mathrm{simp}}(K)=Z_2(K)\cong\mathbb Z$. Thus
$$H_0^{\mathrm{simp}}(K)\cong \mathbb Z,\qquad H_1^{\mathrm{simp}}(K)=0,\qquad H_2^{\mathrm{simp}}(K)\cong \mathbb Z,$$
and $H_n^{\mathrm{simp}}(K)=0$ for $n \geq 3$.
