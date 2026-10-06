---
id: lem-holonomy-respects-path-concatenation-and-reversal
kind: lemma
title: "Holonomy respects path concatenation and reversal"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - def-leafwise-path-and-leafwise-homotopy
  - lem-germs-of-local-diffeomorphisms-form-a-group
  - def-plaque-of-a-flat-chart
  - def-regular-foliation-atlas
  - def-local-transversal-to-a-regular-foliation
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
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

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $a$
be a leafwise path from $x$ to $y$, let $b$ be a leafwise path from $y$ to $z$,
and let $T,S,R$ be local transversals at $x,y,z$
([[def-local-transversal-to-a-regular-foliation]]). Then, with $a*b$ the
concatenation (traverse $a$, then $b$),
$$h_{a*b}(R,T)=h_b(R,S)\circ h_a(S,T).$$
Also $h_{a^{-1}}(T,S)=\bigl(h_a(S,T)\bigr)^{-1}$, where $a^{-1}$ is the reversed
leafwise path.

## Facts & Assumptions

**Given:** Leafwise paths $a$ from $x$ to $y$ and $b$ from $y$ to $z$ in a regular foliation $F$ of $M$, local transversals $T$ at $x$, $S$ at $y$, $R$ at $z$, and the concatenation $a*b$ and reversal $a^{-1}$ of leafwise paths.

[F1] The holonomy germ $h_a(T',T):(T,x)\to(T',y)$ of a leafwise path is well defined, independent of the chart chain, the subdivision and the auxiliary transversals, and in a single foliation chart it is the germ matching points of the transversals with equal transverse coordinates ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[def-plaque-of-a-flat-chart]], [[def-regular-foliation-atlas]]).

[F2] Concatenation and reversal of leafwise paths are leafwise paths: the concatenation traverses $a$ on the first half and $b$ on the second, the reversal traverses $a$ backwards; both lie in the common leaf ([[def-leafwise-path-and-leafwise-homotopy]]).

[F3] Germs of local diffeomorphisms at a point form a group under composition, so germs have inverses and composites of germs are germs; two germs are equal when representatives agree near the source point ([[lem-germs-of-local-diffeomorphisms-form-a-group]], [[def-germ-of-a-local-diffeomorphism-at-a-point]]).

## Proof

**Proof technique:** direct.

1.1 **Single-chart computation.** Suppose that both $a$ and $b$ have images in a single foliation chart $U$ with coordinates $(x,y)$; then so does $a*b$, and $x,y,z$ lie in one plaque of $U$ because a leafwise path segment in a chart stays in a plaque. By [F1] each of the three transports matches transverse coordinates in $U$: $h_a(S,T)$ sends $u\in T$ to the point of $S$ with the same $y$-coordinate, $h_b(R,S)$ sends that point to the point of $R$ with the same $y$-coordinate, and $h_{a*b}(R,T)$ sends $u$ directly to the point of $R$ with the same $y$-coordinate. The composite therefore agrees with the direct transport on a neighbourhood of $x$, so their germs are equal by [F3]. Similarly, traversing $a$ backwards exchanges source and target and inverts the coordinate matching, so $h_{a^{-1}}(T,S)$ is the inverse germ of $h_a(S,T)$. [F1, F2, F3]

1.2 **General chain computation.** Choose a chart chain for $a$ with endpoint transversals $T,S$ and a chart chain for $b$ with endpoint transversals $S,R$. Concatenating the two chains and the two subdivisions at the middle time gives a chart chain for $a*b$ with endpoint transversals $T,R$ and the intermediate transversal $S$ at the middle point. By definition of the holonomy germ as the composite of the chart-wise transports, the germ obtained from this concatenated chain is exactly $h_b(R,S)\circ h_a(S,T)$; by chain independence [F1] it equals the intrinsic germ $h_{a*b}(R,T)$. [F1, F2]

2.1 **Reversal.** Choose a chart chain for $a$; reading the same charts and subdivision backwards gives a chart chain for $a^{-1}$ with the endpoint transversals exchanged. In each chart the reversed transport is the inverse of the forward transport by step 1.1, and by the group law for germs [F3] the composite of the inverses is the inverse of the composite, so $h_{a^{-1}}(T,S)=(h_a(S,T))^{-1}$ by [F1]. [F1, F3, step 1.1]

3.1 **Conclusion.** Steps 1.2 and 2.1 give $h_{a*b}(R,T)=h_b(R,S)\circ h_a(S,T)$ and $h_{a^{-1}}(T,S)=(h_a(S,T))^{-1}$ for arbitrary leafwise paths $a,b$ and endpoint transversals. [step 1.2, step 2.1] ∎