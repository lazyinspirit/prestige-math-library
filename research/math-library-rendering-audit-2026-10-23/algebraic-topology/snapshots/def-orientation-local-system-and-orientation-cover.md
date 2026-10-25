---
id: "def-orientation-local-system-and-orientation-cover"
kind: "definition"
title: "Orientation local system and orientation cover"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-coordinate-ball-classes-identify-local-homology-stalks","thm-local-homology-detects-interior-points-boundary-points-and-dimension","prop-relative-homology-is-functorial-for-maps-of-pairs","thm-heine-borel-rn","thm-lebesgue-number-lemma"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3, pp.233–235
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $M$ be a boundaryless $n$-manifold. Its **orientation local system** has fiber
$$\mathcal O_x=H_n(M,M\setminus\{x\};\mathbb Z)$$
at $x$. Each fiber is infinite cyclic by [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]. We specify its topology and transport, rather than treating the pointwise groups alone as a local system.

For a closed coordinate ball $K$ lying in a larger chart ball, put $G_K=H_n(M,M\setminus K;\mathbb Z)$ and write $r_{Kx}:G_K\to\mathcal O_x$ for restriction, $x\in\operatorname{int}K$. These maps are isomorphisms by [[lem-coordinate-ball-classes-identify-local-homology-stalks]]. For every $c\in G_K$, form the section $s_{K,c}(x)=r_{Kx}(c)$ over $\operatorname{int}K$. On the disjoint union $\mathcal O=\coprod_{x\in M}\mathcal O_x$, use the images of these sections, restricted to open subsets of their domains, as basic open sets.

Here is the basis and compatibility verification. Every fiber element belongs to such a section because $r_{Kx}$ is onto. If $s_{K,c}$ and $s_{L,d}$ agree at $x$, choose a smaller closed coordinate ball $J$ with $x\in\operatorname{int}J$ and $J\subset\operatorname{int}K\cap\operatorname{int}L$. Such a ball exists by restricting any chart at $x$ to a sufficiently small ball in this open intersection. The two classes restrict to equal classes in $G_J$: their images in $\mathcal O_x$ agree and $r_{Jx}$ is injective. For every $y\in\operatorname{int}J$, functoriality of relative restriction, [[prop-relative-homology-is-functorial-for-maps-of-pairs]], then gives $r_{Ky}(c)=r_{Jy}(c|_J)=r_{Jy}(d|_J)=r_{Ly}(d)$. Thus two sections meeting at a point agree on a neighborhood, which is exactly the basis-intersection property.

It follows also that over $\operatorname{int}K$ the map
$$\operatorname{int}K\times G_K^{\mathrm{disc}}\longrightarrow\mathcal O|_{\operatorname{int}K},\qquad(x,c)\longmapsto r_{Kx}(c)$$
is a homeomorphism. It is bijective fiberwise; each sheet is open by the basis construction, and intersection with any other basic section is open by the compatibility just proved. These observations prove continuity in both directions. Fiber addition and negation become the usual operations on the discrete group $G_K$ in these coordinates. This locally trivial family of discrete groups, with these group-compatible charts, is the orientation local system.

The **orientation cover** $\widetilde M\subset\mathcal O$ is the subset of generators of the fibers, with the subspace topology and projection $\pi:\widetilde M\to M$. Each $G_K$ has exactly two generators $c,-c$, which are distinct in an infinite cyclic group. Thus $\pi^{-1}(\operatorname{int}K)$ is the disjoint union of their two open sheets, each mapped homeomorphically to $\operatorname{int}K$. This proves directly that $\pi$ is a two-sheeted covering map. No global selection of one of its sheets is part of the construction.

Transport along a path $\gamma:[0,1]\to M$ is defined as follows. The inverse images of all ball interiors form an open cover of $[0,1]$. Compactness of the interval and of the square follows from [[thm-heine-borel-rn]], and [[thm-lebesgue-number-lemma]] gives a finite subdivision such that each closed subinterval maps into one ball interior. For a segment with endpoints $a,b$ in that ball, use $r_{Kb}r_{Ka}^{-1}$. Compose these finitely many isomorphisms in the order of the path.

To verify independence, insertion of a subdivision point in the same ball changes nothing: $r_{Kc}r_{Kb}^{-1}r_{Kb}r_{Ka}^{-1}=r_{Kc}r_{Ka}^{-1}$. For two different ball assignments on a segment, cover its image by interiors of smaller closed balls inside the intersection of the assigned ball interiors. Pull this cover back to the segment and subdivide again by the Lebesgue number lemma. On each smaller piece the nested-ball identity above identifies both transport rules with that of the smaller ball. After common refinement this proves agreement of any two finite constructions. A constant path gives the identity, reversing a path inverts its transport, and concatenation composes the two transports, by the same refinement rule.

For a homotopy of paths fixing both endpoints, pull the ball cover back to $[0,1]^2$. Choose a square grid with each cell's diameter smaller than a Lebesgue number. The image of each cell lies in one ball interior, so transport along its bottom then right edges equals transport along its left then top edges: both equal the ball's endpoint identification. Successive exchanges across the finitely many cells compare the lower and upper boundary paths, with the outside vertical edges contributing identities because endpoints are fixed. Transport therefore depends only on the endpoint-fixed homotopy class. It preserves generators, so restricts to transport in the orientation cover; in a ball chart the transported element is constant in the discrete coordinate, giving the corresponding continuous lifted path.

For $n=0$, singleton chart balls give discrete fibers $\mathbb Z$ and two generator points over each point of $M$; the same construction applies. Empty $M$ gives the empty local system and empty cover. Disconnected manifolds are handled by the identical local construction on every component. Zero in a stalk is included in $\mathcal O$ but is never in $\widetilde M$. Every selection needed for a specified path or homotopy is finite; the system itself uses all balls and all their classes. No AC is required.
