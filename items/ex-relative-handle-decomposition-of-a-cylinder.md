---
id: ex-relative-handle-decomposition-of-a-cylinder
kind: example
title: "The relative handle decomposition of a cylinder"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-smooth-cobordism-triad-for-morse-theory, def-handle-decomposition-relative-to-the-incoming-boundary, lem-product-cobordisms-have-critical-point-free-presentations, def-smooth-manifold, def-smooth-map-between-manifolds-with-boundary]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "direct check of the empty presentation"
---

## Example

Assume $\mathrm{AC}_\omega$. For a compact smooth manifold $M$ without boundary, the cylinder $W=M\times[0,1]$ with faces
$M_0=M\times\{0\}$ and $M_1=M\times\{1\}$ has the empty handle decomposition
relative to $M_0$: no handles are attached, and $W$ is the collar
$M_0\times[0,1]$ with the projection $\pi$ as adapted critical-point-free Morse
function.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$ without boundary, $\mathrm{AC}_\omega$, and the cylinder $W=M\times[0,1]$ with the faces $M_0=M\times\{0\}$ and $M_1=M\times\{1\}$.

[F1] [[def-smooth-cobordism-triad-for-morse-theory]]: A smooth cobordism triad $(W;M_0,M_1)$ is a compact smooth manifold with boundary $W$ together with, for $n\ge1$, closed embedded $(n-1)$-submanifolds $M_0,M_1\subseteq\partial W$ with $\partial W=M_0\sqcup M_1$ and fixed collars; for $n=0$ both faces and collar domains are empty, with their unique collar maps; either face may be empty and no orientation is needed.

[F2] [[def-handle-decomposition-relative-to-the-incoming-boundary]]: A finite handle decomposition of $(W;M_0,M_1)$ relative to $M_0$ is a finite ordered list of indices with attaching embeddings such that $W$ is diffeomorphic, relative to $M_0$, to the manifold obtained from the collar $M_0\times[0,\varepsilon]$ by successively attaching the handles with corners rounded. The empty list is allowed and presents the collar itself.

[F3] [[lem-product-cobordisms-have-critical-point-free-presentations]]: Assume $\mathrm{AC}_\omega$. For a compact smooth manifold $M$ without boundary the projection $\pi:M\times[0,1]\to[0,1]$ is an adapted Morse function with no critical points, $W$ has the empty handle decomposition relative to $M_0$, and $W$ is diffeomorphic to the collar $M_0\times[0,1]$; the hypothesis requires $\partial M=\varnothing$.

[F4] [[def-smooth-manifold]] applies to the boundaryless factor $M$ and its faces. The cylinder $W=M\times[0,1]$ is a manifold with boundary in the category of [F1], with product boundary charts; its smooth maps and diffeomorphisms are read in [[def-smooth-map-between-manifolds-with-boundary]].

## Verification

**Proof technique:** direct.

1.1 The projection $\pi:W\to[0,1]$, $\pi(x,t)=t$, is smooth, and its differential is $dt$, which is nowhere zero; hence $\pi$ has no critical point and is a Morse function with empty critical set, and the condition of excellence is vacuous. It satisfies $\pi^{-1}(0)=M\times\{0\}=M_0$ and $\pi^{-1}(1)=M_1$, and it is constant on each face, so it is adapted (with the boundary collar containing no critical point since there are none). [F1, F4, given]

2.1 For every $\varepsilon>0$, the map $W\to M_0\times[0,\varepsilon]$, $(x,t)\mapsto((x,0),\varepsilon t)$, is a diffeomorphism of manifolds with boundary, with inverse $((x,0),s)\mapsto(x,s/\varepsilon)$. It fixes $M_0$ pointwise and carries the projection to the rescaled collar coordinate. Thus the initial collar stage already presents the whole cylinder up to the required relative diffeomorphism. [F2, F4, step 1.1, construct, algebra]

3.1 By [F2] the empty ordered list is an allowed handle decomposition: it presents the collar $M_0\times[0,\varepsilon]$ itself. By step 2.1 the cylinder is that collar, so the empty list is a handle decomposition of $W$ relative to $M_0$ in which no handle is attached; and by [F3] this is exactly the critical-point-free presentation whose Morse function is the projection. [F2, F3, step 1.1, step 2.1, algebra] ∎
