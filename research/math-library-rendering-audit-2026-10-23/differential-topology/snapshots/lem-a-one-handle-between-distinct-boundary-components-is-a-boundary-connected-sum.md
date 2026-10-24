---
id: lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum
kind: lemma
title: "A one-handle between distinct manifold components is a boundary connected sum"
status: published
origin: pipeline
dependency_level: 0
deps: [def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-collar-neighborhood-theorem, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, def-countable-choice, def-choice-function, def-countable]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 2.6-2.7, printed pp. 59-67, and Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
proof_strategy: "model straightening of the split handle"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N_1,N_2$ be smooth $n$-manifolds with boundary,
let $D_i\subseteq\partial N_i$ be embedded closed disks, and let $Y$ be obtained
from $N_1\sqcup N_2$ by attaching a $1$-handle $D^1\times D^{n-1}$ whose
attaching region $\{\pm1\}\times D^{n-1}$ is mapped onto $D_1$ and $D_2$
(with corners rounded). Then $Y$ is diffeomorphic to the boundary connected sum
$N_1\natural N_2$ formed by gluing $N_1$ to $N_2$ along the same identification
$D_1\cong D_2$, and $\partial Y$ is obtained from
$\partial N_1\sqcup\partial N_2$ by deleting the interiors of the two disks and
gluing the resulting boundary spheres along their common collar.

## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary, and let $k$ be an integer with $0\leq k\leq n$. Attach the handle of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]] by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from [[thm-collar-neighborhood-theorem]] to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.

[F2] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: For integers $0\le k\le n$, the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$. Its core is $D^k\times\{0\}$, its cocore is $\{0\}\times D^{n-k}$, its attaching region is $S^{k-1}\times D^{n-k}$, and its attaching sphere is $S^{k-1}\times\{0\}$. The outgoing region is $D^k\times S^{n-k-1}$ and the belt sphere is $\{0\}\times S^{n-k-1}$. Here $D^j$ is the closed unit disk, $D^0$ is a point, and $S^{-1}=\varnothing$. For $n=0$ both boundary regions are empty.

[F3] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F4] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: For fixed attaching and product-collar data, two compatible smooth monotone roundings of a handle attachment are diffeomorphic by an isotopy supported in that collar. The diffeomorphism is the identity outside the collar.

[F5] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement.

> For every family $(X_n)_{n\in\mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n)\in X_n$ for every $n\in\mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most countable family of nonempty sets ([[def-countable]]) has a choice function.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Write $h_-,h_+$ for the two feet of the handle, so that the disk identification in the statement is $h_+\circ h_-^{-1}$. Cut the handle at $M=\{0\}\times D^{n-1}$. The cut pieces have corners along $\partial M$; they are not yet smooth manifolds with boundary. Use the product seam collars of [F1] and the boundary collars of [F3] throughout. Introduce a corner in $N_i$ along $\partial D_i$, making $D_i$ a distinguished boundary face, and denote the resulting cornered manifold by $N_i^{\angle}$. Use a corner model that preserves the given disk coordinates at the edge: with $r=\sqrt{s^2+t^2}$, set $(z_1,z_2)=((s^2-t^2)/r,2st/r)$ for $r>0$ and $(z_1,z_2)=(0,0)$ at the vertex. This doubles the polar angle and preserves the radius, carrying the quadrant $s,t\ge0$ homeomorphically onto the half-plane. It is a diffeomorphism off the vertex and restricts to $(s,0)$ on the disk face and $(-t,0)$ on the other face. Its inverse defines the cornered smooth structure; it is not asserted to be smooth at the vertex in the original structure. In particular the original disk coordinate is $z_1=s$, so the handle foot remains smooth up to its edge. A collar of $\partial D_i$ inside $\partial N_i$, followed by the boundary collar, supplies these product coordinates. The face $D_i$ then has a product collar, including its edge. Gluing on the corresponding half-cylinder prolongs that face collar and gives a cornered piece $Z_i$ whose free end is $M$. The coordinate comparison extends smoothly across each attaching seam away from its edge: in the handle-side sector $-\pi/2\le\theta\le0$, use a smooth increasing angular map $b$ with $b(\theta)=\theta/2$ near $0$ and $b(\theta)=\theta$ near $-\pi/2$, preserving the radius. Such a $b$ is obtained by integrating a positive function, equal to $1/2$ near $0$ and to $1$ near $-\pi/2$, whose total integral is $\pi/2$. It matches the inverse disk-face cornerization across the seam and fixes the outgoing ray. A radial cutoff interpolates its positive angular derivative to that of the identity outside the edge chart. Thus the comparison is a diffeomorphism off the original edge and preserves the given disk parametrization there and at the edge. [F1, F2, F3, F5, given, construct]

2.1 Absorb each prolonged face collar before straightening any cut corner. In coordinates $D_i\times[0,\ell)$ the prolonged collar is $D_i\times[-L,\ell)$, where the free end is $t=-L$. Choose a smooth increasing bijection $\alpha:[-L,\ell)\to[0,\ell)$ with $\alpha(-L)=0$, positive derivative, and $\alpha(t)=t$ near $\ell$, choosing the same $\alpha$ on both halves and $\alpha(t)=a(t+L)$ near $-L$ for a constant $a>0$; integration of a positive smooth scalar function with the required total integral constructs such an $\alpha$. The product map $(x,t)\mapsto(x,\alpha(t))$ is a diffeomorphism of manifolds with corners, including the side face $\partial D_i\times[-L,\ell)$, and extends by the identity at the inner collar edge. Hence $(Z_i,M)\cong(N_i^{\angle},D_i)$ as cornered pairs, preserving the disk coordinates. This is face-collar absorption, not a diffeomorphism from an unrounded cut piece to smooth $N_i$. [F1, F3, step 1.1, construct, algebra]

3.1 Glue the two cornered pairs of step 2.1 along their distinguished faces using their disk coordinates and signed product collars. The result is precisely $N_1^{\angle}\cup_{h_+\circ h_-^{-1}}N_2^{\angle}$, the boundary connected sum. At the common edge the two quadrants joined along the distinguished face have coordinates $(s,\tau)$ with $s\ge0$ and signed normal coordinate $\tau\in\mathbb R$. Near that edge the comparison of step 2.1 is $(s,\tau)\mapsto(s,a\tau)$, hence is smooth with smooth inverse, including on the boundary. The same disk coordinates give exactly the specified identification, without any square-root change. Away from that edge the comparison is already a product-collar diffeomorphism. To compare with the original attachment, round the original attaching seams inside the product edge charts before applying their coordinate changes: the rounded profiles avoid the vertices, where the radius-preserving map was singular. On these profiles and their inner sides it is a smooth diffeomorphism. The new smooth side may likewise be pushed inward inside its collar to such a profile and restored by a positive-derivative collar-interval map, so this comparison does not use smoothness at a corner vertex. Thus the glued model is diffeomorphic to a compatible rounded attachment; [F4] compares any other compatible rounding at the original attaching seams. No unrounded cut piece is treated as smooth. Finally the exposed boundary of the handle is $D^1\times S^{n-2}$, joining $\partial D_1$ to $\partial D_2$, while the two attaching disks disappear from $\partial N_1\sqcup\partial N_2$. Absorbing this intervening boundary collar gives exactly the boundary description in the statement. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 Edge cases deserve the stated conventions. For $n=1$ the disks $D_i$ are single boundary points, the $1$-handle is an interval glued at its two ends, and $\partial N_i$ loses exactly that point; no sphere is glued because $S^{-1}=\varnothing$, and the conclusion still holds verbatim. For $n=0$ there are no disks and no handles, so the assertion is vacuous. For $n\ge2$ the attaching regions are genuine disks and the displayed boundary computation applies. [F2, step 3.1, algebra] ∎
