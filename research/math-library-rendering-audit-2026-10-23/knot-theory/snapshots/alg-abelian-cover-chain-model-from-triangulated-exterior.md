---
id: alg-abelian-cover-chain-model-from-triangulated-exterior
kind: algorithm
title: "Build the maximal-abelian-cover chain complex from a marked triangulated exterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-maximal-abelian-cover-alexander-module
  - lem-maximal-abelian-cover-cellular-chain-model
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4, pp. 4–5"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §2.2, Theorem 2.35"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Definition

**Inputs.** A nonempty oriented $r$-component link $L$; its compact exterior $E_L$; a finite oriented simplicial triangulation $K$ of $E_L$ with connected 1-skeleton, an ordering of its vertices and simplices, and least vertex $v_0$ as the based point used to classify the cover; one certified positive-meridian edge loop in the boundary triangulation for each component, each loop oriented as the boundary of a normal disk whose positive tangent followed by its positive normal basis agrees with the orientation of $S^3$; and a label $\ell(e)\in\mathbb Z^r$ for every oriented edge $e$ of $K$.

**Admissible input conditions.** The input is admissible when edge reversal gives $\ell(\bar e)=-\ell(e)$, the sum of the labels around every oriented 2-simplex is zero, and the sum around the $i$th certified positive meridian loop is the standard basis vector $e_i\in\mathbb Z^r$. The last check verifies the marking: by the Alexander-dual meridian basis and the compact-exterior retraction, these loops give the standard basis of $H_1(E_L;\mathbb Z)$, so their evaluations determine the full abelianization. The edge labels define a covering model by assigning to each oriented edge $e:v\to w$ the transition $(v,g)\mapsto(w,g+\ell(e))$ on vertex exponents $g\in\mathbb Z^r$; the face check makes all simplex lifts compatible. The procedure takes the geometric status of the supplied triangulation and peripheral curves as input data; it does not recognize a 3-manifold or discover meridians.

**Output.** Either `invalid-labeling`, or the finite free graded $\Lambda_r=\mathbb Z[t_1^{\pm1},\ldots,t_r^{\pm1}]$ modules with one basis element per simplex orbit and the prescribed Laurent-polynomial boundary matrices. The main theorem on this page proves that these matrices make the output a chain complex and that its first homology is $A_L$.

**Instructions.**

1. Check the edge-reversal rule, each oriented 2-simplex sum, and each meridian-loop evaluation. Return `invalid-labeling` if any check fails.
2. Order the 1-simplices by their supplied simplex order. Start with no tree edges and with each vertex in its own component. Scan the edges in that order, adding an edge exactly when its endpoints lie in different current components and then merging those components. Because the 1-skeleton is connected, this finite scan produces the lexicographically first spanning tree. Use the least-ordered based vertex $v_0$ as root, assign its lift to the identity deck element, and assign every other vertex lift by summing edge labels along its unique tree path from the root.
3. For each oriented simplex $\sigma$, choose its least-ordered vertex as anchor and use the label sums along edges of $\sigma$ to determine the lift incident to the already chosen anchor lift. For each oriented face $\tau$ of $\sigma$, compute the unique deck exponent $g(\sigma,\tau)\in\mathbb Z^r$ taking the chosen lift of $\tau$ to that face of the chosen lift of $\sigma$.
4. If $\tau$ occurs with incidence sign $\epsilon(\sigma,\tau)\in\{-1,1\}$ in $\partial\sigma$, place the coefficient $\epsilon(\sigma,\tau)t_1^{g_1(\sigma,\tau)}\cdots t_r^{g_r(\sigma,\tau)}$ in the corresponding matrix entry. Repeat for every simplex and dimension.
5. Return the chain groups and boundary matrices in the input simplex order. Coning a closed edge path in a simplex to its anchor expresses it as a sum of triangular face boundaries, so the face-sum check makes its edge-path sum independent of path; the meridian checks ensure the deck group is the prescribed full abelianization.

The following triangle records the local consistency check. Each arrow is oriented as drawn and its label lies in $\mathbb Z^r$. The face check in instruction 1 is exactly the equation $g_{01}+g_{12}+g_{20}=0$.

```tikz
\begin{tikzpicture}[scale=1.1]
  \coordinate (v0) at (0,0);
  \coordinate (v1) at (3,0);
  \coordinate (v2) at (1.5,2);
  \draw[->] (v0) -- (v1) node[midway,below] {$g_{01}$};
  \draw[->] (v1) -- (v2) node[midway,right] {$g_{12}$};
  \draw[->] (v2) -- (v0) node[midway,left] {$g_{20}$};
  \fill (v0) circle (1.5pt) node[below left] {$v_0$};
  \fill (v1) circle (1.5pt) node[below right] {$v_1$};
  \fill (v2) circle (1.5pt) node[above] {$v_2$};
\end{tikzpicture}
```

## Definition references

[[def-maximal-abelian-cover-alexander-module]]

[[lem-maximal-abelian-cover-cellular-chain-model]]

