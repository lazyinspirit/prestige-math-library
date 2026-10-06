---
id: lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
kind: lemma
title: "The holonomy germ is independent of the foliation chart chain"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
  - lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
  - def-local-transversal-to-a-regular-foliation
  - def-regular-foliation-atlas
  - def-flat-chart-for-a-distribution
  - def-plaque-of-a-flat-chart
  - def-leafwise-path-and-leafwise-homotopy
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - thm-lebesgue-number-lemma
  - def-countable-choice
  - thm-smooth-inverse-function-theorem-on-manifolds
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). In the
situation of
[[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]], the germ
$h_a:(T,x)\to(T',y)$ depends only on the leafwise path $a$ and the endpoint
transversals $T,T'$: it is unchanged by passing to a refinement of the chart
chain, by changing the subdivision points, and by changing the auxiliary
intermediate transversals $T_1,\dots,T_{N-1}$. Consequently $h_a=h_a(T',T)$ is
a well-defined germ of a local diffeomorphism from $(T,x)$ to $(T',y)$.

## Facts & Assumptions

**Given:** A leafwise path $a$ from $x$ to $y$ in a regular foliation $F$ of $M$, endpoint transversals $T$ at $x$ and $T'$ at $y$, and two finite chart chains as in [[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]], together with the chart-wise transport germs of that lemma.

[F1] In a foliation chart $\varphi=(x,y):U\to\mathbb R^k\times\mathbb R^q$ the plaques are the connected components of the level sets of $y$, the plaques are integral manifolds of $D=TF$, and a leafwise path segment contained in $U$ lies in a single plaque; the transport between local transversals inside $U$ matches points with equal transverse coordinates ([[def-regular-foliation-atlas]], [[def-flat-chart-for-a-distribution]], [[def-plaque-of-a-flat-chart]], [[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]]).

[F3] A local transversal $T$ at $p$ satisfies $T_pM=D_p\oplus T_pT$ and meets each nearby plaque in exactly one nearby point, so the transport germ across a plaque between two transversals is well defined ([[def-local-transversal-to-a-regular-foliation]]).

[F4] Two representatives of a germ of local diffeomorphisms agree on some neighbourhood of the source point ([[def-germ-of-a-local-diffeomorphism-at-a-point]]).

[F5] Every open cover of the compact metric space $[0,1]$ has a Lebesgue number, so a sufficiently fine subdivision has every subinterval mapped into a member of the cover ([[thm-lebesgue-number-lemma]]).

[F6] A smooth map with invertible differential is a diffeomorphism on sufficiently small neighborhoods ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 **Inside a single chart the transport is a coordinate matching.** Let $U$ be a foliation chart with coordinates $(x,y)$ containing the image of a subinterval, and let $S,S'$ be local transversals at the two subinterval endpoints $p,p'$, which lie in a common plaque of $U$. Then the transport germ $S\to S'$ constructed in the single-chart case of [[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]] is the map $u\mapsto$ (the point of $S'$ with the same transverse coordinate as $u$) near $p$. Consequently it is unchanged if an intermediate transversal $S''$ at an interior point $q$ of the subinterval is inserted or replaced: the composite of the transports $S\to S''$ and $S''\to S'$ matches transverse coordinates in the same chart and hence agrees near $p$ with the direct transport, since all three maps send a point to the point with the same $y$-coordinate. [F1, F3, F4]

2.1 **Comparison on small overlaps.** Around each point of a path segment contained in $U\cap U'$, choose a smaller product foliation box whose closure need not be fixed, with domain contained in $U\cap U'$. There the transition has transverse part $y'=r(y)$ by [F1]. Its differential is invertible: the full transition differential is block triangular and invertible, so its transverse diagonal block is invertible. By [F6], after shrinking $r$ is injective near the transverse value, and therefore matching $y$ is equivalent to matching $y'$ for transversals with endpoints in this small box. The transports computed in $U$ and $U'$ consequently agree as germs on that piece. Compactness and [F5] give a finite subdivision of the common segment into these boxes; composing and using step 1.1 proves equality over the entire segment. This comparison uses the transverse transitions on neighborhoods, not only equality of the central plaque germs. [F1, F3, F4, F5, F6, step 1.1]

3.1 **Two chains compute the same germ.** Let two finite chart chains with subdivisions be given. By step 1.1 the computed germ changes neither when a subinterval is subdivided inside one of the given charts nor when intermediate transversals are inserted, so we may refine both chains. The images of sufficiently small subintervals of a common refinement lie in a single chart of the first chain and a single chart of the second chain simultaneously; by [F5] finitely many such subintervals suffice to cover $[0,1]$, and by step 2.1 the transport over each such subinterval is the same germ whichever of the two charts is used to compute it. Composing the germs over the common refinement, both chains give the same composite germ from $(T,x)$ to $(T',y)$. [F5, step 1.1, step 2.1]

3.2 **Changing intermediate transversals.** At a subdivision point $a(t_i)$ both adjacent charts $U_i,U_{i+1}$ contain $a(t_i)$ (each contains the closed subinterval adjacent to the point), so $U_i\cap U_{i+1}$ is a neighbourhood of $a(t_i)$; shrinking the subdivision around $t_i$ and applying steps 1.1 and 2.1 to the transport across the resulting small subinterval shows that the composite is unchanged when the auxiliary transversal $T_i$ at $a(t_i)$ is replaced by another local transversal. [F3, step 1.1, step 2.1]

4.1 **Conclusion.** By steps 3.1 and 3.2 the composed germ does not depend on the displayed chain, the subdivision or the auxiliary transversals; only the leafwise path and the endpoint transversals remain. Hence $h_a=h_a(T',T)$ is a well-defined germ of a local diffeomorphism $(T,x)\to(T',y)$, as claimed. [F4, step 3.1, step 3.2] ∎
