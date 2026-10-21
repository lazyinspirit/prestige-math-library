---
id: lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
kind: lemma
title: "Connected-complement surfaces have independent mod-two homology classes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-coordinate-ball-classes-identify-local-homology-stalks
  - lem-compatible-local-orientation-classes-exist-over-compact-subsets
  - thm-excision-for-singular-homology
  - thm-long-exact-sequence-in-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Mod-two local orientations are canonical, and the compact fundamental classes use the choice-free finite-support orientation supplier. The jump computation uses one standard divided cube and its finite face matrices, not general Poincare duality or an ambient triangulation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7, printed p.12, independence of the nonseparating surfaces; the proof here gives a local singular-chain jump argument requiring no simultaneous ambient triangulation."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Local homology and orientations, pp.233–238, through the fully read local coordinate-ball and compact-support orientation suppliers."
---

## Statement

Let $N$ be a connected Hausdorff topological three-manifold without boundary. Let $S_1,\ldots,S_m$ be finitely many disjoint compact connected locally flat embedded surfaces without boundary. They may be one-sided and nonorientable. If $N\setminus\bigcup_j S_j$ is connected, their canonical mod-two fundamental classes have linearly independent images in $H_2(N;\mathbb F_2)$. The manifold may be noncompact and nonorientable, and the family may be empty. No choice axiom or ambient triangulation is assumed.

## Facts & Assumptions

**Given:** The connected manifold and finite disjoint locally flat surface family with connected complement.

[F1] For a compact coordinate ball, its supported top homology maps isomorphically to every interior point stalk, compatibly on smaller chart balls. These comparisons require no choice. [[lem-coordinate-ball-classes-identify-local-homology-stalks]]

[F2] A supplied continuous local orientation section over a boundaryless manifold has a unique compatible class supported on any compact subset. The construction and local-stalk injectivity are choice-free. Over $\mathbb F_2$ each local stalk has the unique nonzero element, which is a canonical continuous orientation section, including for a nonorientable manifold. Applied to compact $S_j$ itself this supplies $[S_j]\in H_2(S_j;\mathbb F_2)$ with the prescribed generator in every local surface stalk. [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]]

[F3] Excision and the pair exact sequences are natural. The short exact sequence of relative chain complexes for $C\subset B\subset X$ has connecting map $H_3(X,B)\to H_2(B,C)$ represented by taking the boundary of a relative chain. [[thm-excision-for-singular-homology]] [[thm-long-exact-sequence-in-homology]] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F4] Finite convex cell decompositions have compatible triangulations. Simplicial homology with coefficients $\mathbb F_2$ agrees naturally with singular homology; applying the pair exact sequences and the five lemma gives the same comparison for finite subcomplex pairs. Thus finite divided-cube boundary matrices compute the connecting maps in [F3]. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]] [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

## Proof

1.1 The empty family is independent. Otherwise suppose a relation $\sum_j\lambda_j(i_j)_*[S_j]=0$, with $\lambda_j\in\mathbb F_2$. Choose fundamental cycles $z_j$ on the finitely many $S_j$. By the meaning of homology there is a finite singular three-chain $c$ in $N$ with $\partial c=\sum_j\lambda_j(i_j)_\#z_j$. For $x$ outside the surface union this is a relative cycle in $(N,N\setminus\{x\})$. Write $a(x)\in\mathbb F_2$ for its point-local class in the canonical generator coordinate from [F2]. This function is locally constant on that complement. Indeed a small closed coordinate ball $K$ disjoint from the surfaces contains no point of $\operatorname{supp}\partial c$, so the same chain represents a class in $H_3(N,N\setminus K;\mathbb F_2)$. All its point restrictions over $\operatorname{Int}K$ have the same coordinate by [F1]. Since the complement is connected, $a$ is constant there. The only selections so far are finitely many cycle representatives and a single chain. [F1, F2, given, construct, algebra]

2.1 Fix $j$ and a point on $S_j$. Local flatness and separation from the other finitely many compact surfaces give a chart $U=(-2,2)^3$ in which the surface union is exactly $\{x_3=0\}$. Put $K=[-1,1]^3$ and $D=K\cap\{x_3=0\}$. Set $C=N\setminus\operatorname{Int}K$ and $B=C\cup\bigcup_iS_i$. The chain $c$ is a cycle modulo $B$. Its image under [F3]'s connecting map is represented by $\partial c$ modulo $C$. Excision removes the closed set $N\setminus U$, contained in the interior of $C$, for all three relative complexes. Radial retraction $x\mapsto x/\max(1,\lVert x\rVert_\infty)$, with its straight radial homotopy, then identifies the triple with $(K,\partial K\cup D,\partial K)$. It preserves the plane $x_3=0$ and sends the outside of $\operatorname{Int}K$ to $\partial K$. Consequently the local boundary map is $H_3(K,\partial K\cup D)\to H_2(\partial K\cup D,\partial K)$, and the image of $\partial c$ is $\lambda_j[D]$. Here $[D]$ is its relative generator: the compact fundamental cycle of $S_j$ restricts to that generator by [F2], and the other surface cycles are absent from $U$. [F2, F3, step 1.1, construct]

3.1 Compute this map in the standard divided cube, not by an unproved global duality assertion. Triangulate its two closed half-cubes compatibly with $D$ and $\partial K$ by [F4]. In the relative degree-three kernel, coefficients of tetrahedra must agree across every interior face outside $D$. The tetrahedra in each half-cube are joined through such faces; for example a generic polygonal path between their interiors crosses faces and avoids the finite codimension-two skeleton. There is no constraint between the halves, since $D$ is omitted in the relative complex. There are no degree-four simplices. Hence the relative group is $\mathbb F_2^2$, with generators the sums of all tetrahedra in the upper and lower half-cube. Each restricts to the nonzero local generator at points in its own open half and to zero in the other; this is the coordinate-ball comparison [F1], after a radial convex-ball parameter for that half-cube. In the relative boundary modulo $\partial K$, either sum has boundary the sum of the triangles of $D$. The target is $\mathbb F_2[D]$, by the same disk-relative finite computation. Thus the connecting map sends $(b_+,b_-)$ to $(b_++b_-)[D]$. The natural relative comparison in [F4] gives exactly this same formula for singular chains. [F1, F3, F4, step 2.1, construct, algebra]

4.1 Take one point in each open half-cube. The two coordinates $b_+,b_-$ of the localized class of $c$ are respectively its point degrees $a(x_+),a(x_-)$. Steps 2.1–3.1 therefore give $\lambda_j=a(x_+)+a(x_-)$. But both points lie in the connected complement, where step 1.1 made $a$ constant. Their sum is zero. This holds for every $j$, so every coefficient in the original relation vanishes. The argument used only local flat charts, canonical mod-two orientations, finite chains and one finite cube calculation at a time. In particular it permits a one-sided surface, whose two local sides simply belong to the same global complement, and makes no orientability, smoothing, triangulation-existence or choice assertion. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎
