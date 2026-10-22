---
id: lem-string-link-exterior-homology-and-meridian-maps
kind: lemma
title: "String-link exterior homology and end-meridian maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-excision-for-singular-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - cor-homology-of-spheres
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-singular-chain-complex-and-singular-homology
  - thm-cellular-homology-computes-singular-homology
  - thm-fundamental-group-of-finite-wedge-of-circles
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§2 and Lemma 2, PDF pp. 2–3"
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26)"
---

## Statement

Use integral homology. Let $L=K_1\cup\cdots\cup K_r$ be a nonempty labeled oriented smooth link in $S^3$ with chosen pairwise disjoint product tubes and exterior $E_L$. Then $H_1(E_L;\mathbb Z)\cong\mathbb Z^r$, with the positive meridians as its ordered basis. Each boundary torus $T_i$ has a product basis consisting of its positive meridian and a degree-one section. There is a unique degree-one class on $T_i$ whose image has zero $i$th meridian coordinate; this class is primitive and has a simple closed representative.

Let $\tau$ be an $r$-component string link with chosen disjoint product tubes in $D^2\times[0,1]$, exterior $X_\tau$, and bottom and top punctured disks $P_-$ and $P_+$. Then each $\pi_1(P_\pm)$ is free on the positive endpoint meridians, $H_1(P_\pm;\mathbb Z)\cong\mathbb Z^r$, and $H_2(P_\pm;\mathbb Z)=0$. The exterior satisfies $H_1(X_\tau;\mathbb Z)\cong\mathbb Z^r$ and $H_2(X_\tau;\mathbb Z)=0$. Each end inclusion sends its ordered positive meridian basis to the ordered positive meridian basis of $H_1(X_\tau;\mathbb Z)$. Consequently both induced homomorphisms on $H_1$ are isomorphisms and both induced homomorphisms on $H_2$ are surjective.

## Statement references

[[def-based-string-link-and-labeled-link-peripheral-system|Chosen string-link tubes, ends, and meridian orientations]]

[[thm-excision-for-singular-homology|Relative homology excision]]

[[thm-long-exact-sequence-of-a-pair-in-singular-homology|Long exact sequence of a pair]]

## Facts & Assumptions

**Given:** The link and string-link tube data specified in the statement.

[F1] Excision identifies relative homology after removing a subset whose closure lies in the interior of the subspace. [[thm-excision-for-singular-homology]]

[F2] Each pair of spaces has its long exact singular-homology sequence, natural for maps of pairs. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F3] A circle has $H_1(S^1;\mathbb Z)\cong\mathbb Z$; $S^3$ has $H_1(S^3;\mathbb Z)=H_2(S^3;\mathbb Z)=0$. [[cor-homology-of-spheres]]

[F4] The tube and positive-meridian orientations are those in the based peripheral definition. [[def-based-string-link-and-labeled-link-peripheral-system]], [[def-knot-meridian-and-preferred-longitude]]

[F5] The fundamental group of a wedge of $r$ circles is free on the $r$ once-around loops. [[thm-fundamental-group-of-finite-wedge-of-circles]]

[F6] Homotopic maps induce the same singular-homology map, and a point has homology $\mathbb Z$ in degree zero and zero in higher degrees. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], [[def-singular-chain-complex-and-singular-homology]]

[F7] The cellular chain complex computes singular homology for CW complexes and cellular maps. [[thm-cellular-homology-computes-singular-homology]]

## Proof

**Given:** The chosen tubes and oriented meridian conventions.

1.1 For either endpoint punctured disk $P$, choose pairwise disjoint arcs from the $r$ inner boundary circles to the outer boundary and cut along them. Such a finite cut system exists by triangulating the compact planar surface and taking a spanning tree in its finite dual graph. The cut surface is a disk; reversing the cuts exhibits a graph spine with one cycle around each inner boundary. Thus $P$ deformation retracts to a wedge of $r$ circles, and [F5] identifies its fundamental group as free on the based positive boundary loops. [F5, given, construct]

1.2 Let $D_i^+$ be disjoint disks slightly larger than the removed endpoint tube disks. The closed complement of their interiors lies in the interior of $P$ relative to $D^2$. By [F1], $H_*(D^2,P)$ is the direct sum of the relative groups of the $r$ disk pairs $(D_i^+,D_i^+\setminus\operatorname{int}D_i)$. Radial collars identify each pair with $(D^2,S^1)$. By [F2], [F3], and [F6], the relative group of this disk pair is $\mathbb Z$ in degree $2$ and zero in every other degree. Its boundary map sends the relative disk to the positive endpoint meridian. Applying [F2] to $(D^2,P)$, with $D^2$ contractible by radial contraction, therefore gives $H_1(P)\cong\mathbb Z^r$ with that basis and $H_2(P)=0$. [F1, F2, F3, F4, F6, step 1.1]

2.1 For each string component, enlarge its chosen product tube by a small radial collar. The complement of these enlarged tubes has closure in the interior of $X_\tau$; excising it by [F1] reduces $(D^2\times[0,1],X_\tau)$ to the disjoint union of tube pairs. In each pair, the radial collar deformation retracts the pair to $([0,1]\times D^2,[0,1]\times S^1)$: the endpoint cap annuli retract to their boundary circles and the lateral shell retracts to the original tube boundary. Contracting the interval factor identifies this pair with $(D^2,S^1)$. By [F2], [F3], and [F6], each pair has relative homology $\mathbb Z$ in degree $2$ and zero in every other degree. Therefore $H_2(D^2\times[0,1],X_\tau)\cong\mathbb Z^r$ and its relative homology vanishes in degrees $1$ and $3$. [F1, F2, F3, F6, given, step 1.2, construct]

2.2 The ambient cylinder is contractible, so its positive-degree homology vanishes by [F6]. Its pair long exact sequence from [F2], together with step 2.1, gives $H_2(X_\tau)=0$ from the segment $H_3(B,X_\tau)\to H_2(X_\tau)\to H_2(B)$, and gives an isomorphism $\partial:H_2(B,X_\tau)\to H_1(X_\tau)$ from the segment $H_2(B)\to H_2(B,X_\tau)\xrightarrow{\partial}H_1(X_\tau)\to H_1(B)$. Thus $H_1(X_\tau)\cong\mathbb Z^r$. [F2, F6, step 2.1, algebra]

3.1 For each endpoint, map the pair $(D^2,P)$ into $(B,X_\tau)$ using the endpoint disk and its product tube. Naturality of the connecting map in [F2] sends the relative class of the $i$th endpoint disk to the relative cross-sectional disk class of the $i$th tube. By step 2.2 those classes map to the ordered basis of $H_1(X_\tau)$. By step 1.2 their boundaries are the positive meridian basis of $H_1(P_\pm)$. Each end inclusion therefore induces the asserted $H_1$ isomorphism. Since $H_2(P_\pm)=H_2(X_\tau)=0$, it also induces the asserted $H_2$ epimorphism. [F2, F4, step 1.2, step 2.2, construct]

4.1 For a closed link, enlarge each solid torus tube by a small radial collar and apply [F1] to the pair $(S^3,E_L)$; the collar deformation retracts the enlarged-tube pair to $(S^1\times D^2,S^1\times S^1)$. The product torus has a CW structure with one vertex, two edges, and one face attached by a commutator, so [F7] gives $H_1(S^1\times S^1)\cong\mathbb Z^2$ with meridian and section basis. The solid torus retracts to its core circle, so [F3, F6] give $H_2(S^1\times D^2)=0$ and $H_1(S^1\times D^2)\cong\mathbb Z$, with the meridian mapping to zero and the section to a generator. The pair sequence [F2] therefore identifies $H_2(S^1\times D^2,S^1\times S^1)$ with the kernel generated by the meridian. Excision gives $H_2(S^3,E_L)\cong\mathbb Z^r$. By [F2] and [F3], the boundary homomorphism $H_2(S^3,E_L)\to H_1(E_L)$ is an isomorphism. Each relative generator is a normal disk and its boundary is the positive meridian by [F4]. Hence the positive meridians form the ordered basis of $H_1(E_L)$. [F1, F2, F3, F4, F6, F7, construct]

4.2 The product torus $T_i$ has $H_1(T_i)\cong\mathbb Z^2$ with basis the positive meridian and the chosen degree-one section. Write the image of the section in the basis from step 4.1 and let $k_i$ be its $i$th coordinate. Subtracting $k_i$ times the meridian gives the unique degree-one class with zero $i$th coordinate. Its coordinates in the product basis are $(-k_i,1)$, so it is primitive; the curve $t\mapsto(e^{2\pi it},e^{-2\pi i k_i t})$ in product coordinates is an embedded representative. [F3, F4, step 4.1, algebra, construct] ∎

## Remarks

The diagram shows a cut system for the case $r=3$. The proof uses the finite cut-and-collapse argument in step 1.1, not the drawing.

~~~tikz
\begin{tikzpicture}[scale=1.0]
\draw[thick] (0,0) circle (2);
\draw[thick] (-0.85,0.55) circle (0.28);
\draw[thick] (0.85,0.55) circle (0.28);
\draw[thick] (0,-0.75) circle (0.28);
\draw[dashed,->] (-0.85,0.27) -- (-1.35,-1.45);
\draw[dashed,->] (0.85,0.27) -- (1.35,-1.45);
\draw[dashed,->] (0,-1.03) -- (0,-1.95);
\node at (-0.85,0.55) {$p_1$};
\node at (0.85,0.55) {$p_2$};
\node at (0,-0.75) {$p_3$};
\end{tikzpicture}
~~~
