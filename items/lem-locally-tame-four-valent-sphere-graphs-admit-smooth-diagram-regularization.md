---
id: lem-locally-tame-four-valent-sphere-graphs-admit-smooth-diagram-regularization
kind: lemma
title: "Locally tame four-valent sphere graphs admit smooth diagram regularization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-compact-surface-admits-a-finite-triangulation
  - lem-jordan-schoenflies-extension-for-plane-curves
  - lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the actual Jordan facial augmentation, relative ear redraw and corner-rounding suppliers. Cycle decomposition, angular interpolation and isotopy extension in a supplied collar are finite explicit constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces, Appendix E, polygonal redraw; augmentation and relative matching are supplied in the local triangulation proof"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
    - title: "Carsten Thomassen, The Jordan–Schönflies Theorem and the Classification of Surfaces, finite plane graph redraw"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
---

## Statement

Assume full AC. Let $G$ be a connected nonempty finite topological graph embedded in a smoothly parametrized two-sphere. Require ordinary supplied line charts along open edges. Every vertex has valence four, with a supplied disk chart in which the four arms are radial, except for auxiliary degree-two subdivision vertices. All four-valent vertices are marked. Vertex-free circle components are allowed. At each four-valent vertex mark the two opposite pairs in its cyclic order.

There is a surface homeomorphism, isotopic to the identity, carrying $G$ to the image of a smooth immersion of finitely many circles whose only multiple points are transverse double points at the marked vertices, with the chosen opposite pairs as the smooth branches. It preserves the cyclic order and any labels on edges and sectors. For a sphere supplied with a smooth product collar in a smooth three-manifold, the surface isotopy extends to an ambient topological isotopy supported in any smaller chosen product neighborhood of that sphere and preserving the sphere. No overcrossing heights or link equivalence are asserted.

## Statement references

[[def-axiom-of-choice]]

[[lem-compact-surface-admits-a-finite-triangulation]]

## Facts & Assumptions

**Given:** Full AC, the finite embedded graph with its local star charts, the smooth sphere parameter, the opposite pairings, and a product collar when ambient extension is requested.

[F1] The actual finite surface triangulation proof contains the following planar construction. Inside a fixed outer Jordan circle, finitely many Jordan circle pieces with only finitely many mutual intersection points and no shared subarcs can be augmented to a finite two-connected graph containing the outer circle. Its exposed-face construction adds one connector for a one-point contact and two for a disjoint circle, avoiding every unprocessed piece. A rooted ear induction then gives an ambient plane homeomorphism, the identity outside the outer disk, carrying the whole graph to a polygonal drawing. Each ear is replaced inside its Jordan face by a polygonal ear with the same ordered endpoints; relative Jordan–Schönflies extensions on the two split disks give the actual homeomorphism. These are the constructive contents of that proof, not just its triangulation Statement. ([[lem-compact-surface-admits-a-finite-triangulation]], [[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] A regular two-sided graph corner can be rounded by convolution in a graph chart. A sufficiently small graph displacement $\Delta$ extends to the compactly supported fiber homeomorphism $(x,y)\mapsto(x,y+\chi((y-f(x))/a)\Delta(x))$, with positive fiber derivative greater than $1/2$. Multiplying the displacement by $t\in[0,1]$ gives a continuous homeomorphism isotopy. This uses the actual corner-rounding proof formulas. ([[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]])

## Proof

1.1 Every vertex of the finite graph has even degree, counting a loop twice. Partition its edges into simple cycles by starting with an unused edge, following unused edges until a vertex repeats, removing the resulting cycle, and continuing. At each removal every residual degree remains even, so a nonempty residual component contains another cycle. Splitting a closed walk at repeated vertices gives simple cycles, and each removal decreases the finite edge count. A loop is already a simple circle; insert auxiliary vertices if required for a simple graph presentation. Their embedded images are Jordan circles, have no common edge interiors, and meet only at the finite graph vertices. At an edge point the supplied local line chart has a point off $G$; choose such a point as stereographic pole in the smooth sphere parameter. The graph is then a compact planar drawing. Enclose it in a large round circle $C$ disjoint from it. [given, construct]

2.1 Apply the actual construction [F1] to $C$ and these finitely many Jordan circles. Its hypotheses hold even at a cut vertex: intersections are finite points, and no two cycle pieces share an open edge. The exposed-face one- and two-connector stages supply a two-connected root graph containing every cycle before any ear redraw is used. The relative ear induction maps this entire augmentation to a finite polygonal drawing by a plane homeomorphism $\Phi$ equal to the identity outside the disk bounded by $C$. Consequently its subgraph $G$ is polygonal too. This inference retains the actual facial pairing from the ear induction; no uniqueness theorem for abstract planar embeddings is assumed. The homeomorphism is isotopic to the identity relative to $C$: after identifying that round disk with the unit disk use $\Phi_t(x)=t\Phi(x/t)$ for $|x|\le t$, and $\Phi_t(x)=x$ otherwise, with $\Phi_0$ the identity. The boundary formulas agree, the inverse uses $\Phi^{-1}$, and displacement is at most $2t$ at the shrinking center. [step 1.1, F1, construct]

3.1 Choose disjoint small round disks about the polygonal four-valent vertices, containing only the four initial straight segments and no other graph bend. Their outgoing rays are distinct, since equal rays would share a nontrivial initial segment, contradicting the embedded drawing. In positive cyclic order write their angles as $\theta_0<\theta_1<\theta_2<\theta_3<\theta_0+2\pi$, and let $\psi$ be the increasing piecewise-affine circle homeomorphism taking them to four equally spaced angles $\phi_j=\phi_0+j\pi/2$. Choose increasing degree-one lifts and a smooth radial cutoff $\eta$ equal to one near the center and zero near the disk boundary. The map $(r,\theta)\mapsto(r,(1-\eta(r))\theta+\eta(r)\psi(\theta))$, extended at the center, is a disk homeomorphism: every angular map is increasing, the inverse is continuous, and unchanged radius proves continuity at zero. Its image arms are smooth regular radial graphs, straight near the center and unchanged near the boundary. The marked opposite pairs now join as two perpendicular smooth diameters. Replacing $\eta$ by $t\eta$ gives a boundary-fixed isotopy. [step 2.1, construct, algebra]

4.1 There are finitely many remaining degree-two polygonal bends away from the protected crossing disks. At each choose a disjoint small plane chart containing just its two incident segments. Their outgoing rays are distinct; projection along their difference gives opposite signed transverse components, hence a graph on the two sides of its corner. Apply [F2], with support in that chart and a cutoff equal to one near the bend. The new arc is smooth, equals the old straight segments near the support boundary, and remains embedded. The smooth transition arms from step 3.1 already agree with the old edges on open collars and need no rounding. Thus the resulting drawing is smooth along all open edges, and through each chosen opposite vertex pair, with precisely transverse double points at the marked vertices. Smoothing a vertex-free polygonal circle gives a smooth embedded circle by the same finite construction. [step 2.1, step 3.1, F2, construct]

5.1 Resolve the marked four-valent vertices according to their opposite pairs in the abstract graph. Every resulting vertex has degree two, so its finite components are circles. The smooth local diameters and the smooth edges from steps 3.1–4.1 give smooth regular parametrizations of these circles, for example by positive arclength; local derivatives are nonzero, and opposite rays form one straight diameter near each crossing. Their image is exactly the regularized graph, and its only coincident image points are the two distinct preimages of each four-valent vertex. Every map used was a surface homeomorphism, so labels and cyclic orders are transported with it. Compose the finitely many isotopies from steps 2.1–4.1, with continuous time reparametrizations at joins, to obtain a surface isotopy $h_t$ from the identity to this regularization. [step 2.1, step 3.1, step 4.1, construct]

6.1 In a supplied product collar $S^2\times(-\delta,\delta)$ choose a scalar cutoff $\beta(u)$ equal to one near zero and zero near the collar ends. For each $t$ define the ambient map $(s,u)\mapsto(h_{\beta(u)t}(s),u)$ and take the identity outside the collar. This is a homeomorphism: it preserves $u$ and its inverse is $(s,u)\mapsto(h_{\beta(u)t}^{-1}(s),u)$. Joint continuity of both maps follows from the surface isotopy and compactness of its time and surface parameters. It agrees with the identity near the collar boundary and restricts to $h_t$ on the sphere. Choosing a thinner supplied collar gives the requested support. This proves the ambient extension without a smooth isotopy extension assertion for the original topological graph. [given, step 5.1, construct] ∎
