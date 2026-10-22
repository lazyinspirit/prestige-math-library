---
id: lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy
kind: lemma
title: "Ideal gluing equations and trivial peripheral linear holonomy give a complete structure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-pared-hyperbolic-structures-and-volume
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-tetrahedron-shape-parameter-relations
  - lem-ideal-torus-cusp-holonomy-criterion
  - lem-horocusp-truncation-has-finite-volume
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.1–4.5, ideal tetrahedra, edge equations and cusp completeness"
    - title: "Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem"
      url: "https://arxiv.org/pdf/math/9901045"
      locator: "Theorem 0.1 and §§1–3, ideal triangulations, edge equations, cusp completeness and finite volume"
verification:
  precheck: pending
---

## Statement

Let an oriented finite ideal triangulation of the interior of a compact connected orientable three-manifold have $k\ge1$ ideal vertices, each with torus link. Assign a positive ideal-tetrahedron shape to every tetrahedron. Suppose that around every finite edge the product of its incident complex shape parameters is $1$ and the sum of its dihedral angles is $2\pi$. For each ideal vertex $v$, choose a basis $(\alpha_v,\beta_v)$ of the fundamental group of its torus link and suppose the cusp multipliers satisfy $H(\alpha_v)=H(\beta_v)=1$. Then the face gluings define a complete finite-volume hyperbolic metric on the manifold interior, with one rank-two cusp for each ideal vertex.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)

## Diagram

Opposite edges of a normalized ideal tetrahedron carry the same shape parameter. The horospherical link at $\infty$ is the Euclidean triangle with vertices $0,1,z$: its corner parameters are $z$ at $0$, $z'=1/(1-z)$ at $1$, and $z''=(z-1)/z$ at $z$. The wire drawing records these edge labels; all edge classes, products and angle sums in the proof are computed from the given face pairings, not from the drawing.

```tikz
\begin{tikzpicture}[scale=1.0,line cap=round,line join=round]
  \coordinate (a) at (0,0);
  \coordinate (b) at (2,0);
  \coordinate (c) at (1,1.7);
  \coordinate (d) at (1,0.65);
  \draw[thick] (a)--(b)--(c)--cycle;
  \draw[thick,dashed] (d)--(a) (d)--(b) (d)--(c);
  \node[below left] at (a) {$0$};
  \node[below right] at (b) {$1$};
  \node[above] at (c) {$\infty$};
  \node[right] at (d) {$z$};
  \node at (1,-0.35) {$z''$ on $01,\infty z$};
  \node at (2.9,0.95) {$z$ on $0\infty,1z$};
  \node at (1.0,2.05) {$z'$ on $1\infty,0z$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite face-paired ideal triangulation, its positive shapes, all edge equations and angle sums, and a homology basis on each torus vertex link.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]]: a positive shape determines a nondegenerate ideal tetrahedron in $\mathbb H^3$, its corner factors, and the cusp multiplier $H(\gamma)$ along a path in a torus vertex link.

[F2] [[lem-ideal-tetrahedron-shape-parameter-relations]]: the argument of each positive shape parameter is the corresponding dihedral angle.

[F3] [[lem-ideal-torus-cusp-holonomy-criterion]]: for one torus vertex, edge products $1$, angle sums $2\pi$, and cusp multipliers $1$ on a fundamental-group basis imply a complete hyperbolic cusp.

[F4] [[lem-horocusp-truncation-has-finite-volume]]: a rank-two translation-lattice horocusp with Euclidean cross-section area $A$ has volume $A/2$.

[F5] [[def-pared-hyperbolic-structures-and-volume]]: a hyperbolic structure is a curvature $-1$ metric on the manifold interior, and a torus cusp is a horoball quotient by its peripheral subgroup.

## Proof


1.1 For each tetrahedron, [F1] supplies a nondegenerate ideal simplex. The prescribed bijection of the three ideal vertices of any paired faces extends uniquely to an isometry of their ideal triangular faces: normalize the source and target triples to $0,1,\infty$ by Möbius transformations and restrict the resulting hyperbolic isometry to the face. Around a finite edge, the product equation makes the accumulated complex similarity the identity, while the angle sum $2\pi$ makes the total rotation one full turn. Thus the simplices glue to a smooth curvature $-1$ metric away from the ideal vertices. [given, F1, F2, construct]

2.1 Fix an ideal vertex $v$ and let $T_v$ be its torus link. Truncate the corners at $v$ by small horospheres. The resulting finite collection of Euclidean corner triangles triangulates $T_v$, and the face identifications restrict to Euclidean similarities. At a vertex of this link triangulation, corresponding to an incident edge of the ideal triangulation, the edge-shape product equation makes the accumulated complex similarity equal to $1$, while the $2\pi$ angle sum makes the total cone angle exactly $2\pi$. Thus the link similarity structure has no cone singularities. For a loop $\gamma$ on $T_v$, the linear part of its similarity holonomy is the multiplier $H_v(\gamma)$: crossing a corner contributes its shape factor or reciprocal according to the side traversed. The two assumed basis multipliers are $1$, so this linear part is the identity for every loop in $\pi_1(T_v)$. [given, F1, F2, step 1.1, construct]

3.1 Fix a Euclidean metric in one link chart and transport it through the similarity charts. The metric is independent of the transport path, because every loop has identity linear holonomy and translations preserve the Euclidean metric. This gives a global flat metric $g_v$ on the compact torus $T_v$, hence a complete one. Its lift to the universal cover is complete as well: any geodesic projects to a geodesic on the complete torus, extends there, and the extension lifts through the covering. The lifted Euclidean charts develop to a local isometry into $\mathbb R^2$. Every finite straight segment starting at a point in the image lifts to its endpoint: a partial lift has finite length, is therefore Cauchy, and extends from its limit by the local isometry. Hence the development is onto. For a small Euclidean ball about any point, lifting its radial segments from each preimage gives disjoint isometric copies of that ball; lifting the reverse radial segments shows these copies exhaust its preimage. Thus the development is a covering, and since $\mathbb R^2$ is simply connected it is an isometry. Deck transformations have identity linear part by the trivial link holonomy, so act by translations. Compactness of $T_v$ makes their translation vectors a rank-two lattice $\Lambda_v$. The assembled end is therefore the quotient of a horoball by $\Lambda_v$, with metric $dr^2+e^{-2r}g_v$ in horospherical depth $r$. A path escaping toward the ideal vertex has length at least the change in $r$, so the end is complete. Repeating this argument at each of the finitely many vertices proves completeness at every end. This is the local cusp argument underlying [F3], carried out separately on every link; the one-vertex Statement of [F3] is not applied to the full triangulation. [given, F1, F2, F3, step 2.1, construct]

3.2 A horospherical truncation of each ideal tetrahedron is compact and has finite volume because its smooth hyperbolic volume density is bounded on that compact region. Each removed vertex tail is contained in a rank-two horocusp and has finite volume by [F4]. There are finitely many tetrahedra and vertices, so the glued manifold has finite total volume. [given, F1, F4, step 2.1, algebra]

4.1 The part left after truncating all cusp ends is compact. Let $(x_n)$ be Cauchy. If infinitely many terms lie in this compact part, a subsequence converges there, and the Cauchy property forces the whole sequence to the same limit. Otherwise $(x_n)$ is eventually in the union of the finitely many cusp ends. Distinct cusp boundary tori are disjoint compact subsets of the compact core, so their pairwise distances have a positive minimum; every path between different ends crosses the corresponding boundary tori. Hence a Cauchy tail cannot switch ends and eventually lies in one cusp $T^2\times[0,\infty)$. Fix a term $x_N$ in this tail. Any path from $x_N$ to a point at cusp depth $t$ has length at least $|t-t(x_N)|$ if it stays in the cusp and at least $t+t(x_N)$ if it exits through the boundary. Since the tail stays within bounded distance of $x_N$, its depths are bounded. It is therefore contained in a compact truncation $T^2\times[0,R]$, where a Cauchy sequence converges. Thus the full metric is complete. Together with step 3.2 and the curvature $-1$ charts from step 1.1, this is a complete finite-volume hyperbolic structure as defined in [F5]. [F3, F5, step 1.1, step 2.1, step 3.2, construct] ∎

## Sources

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)
