---
id: lem-based-heegaard-splittings-admit-a-common-auxiliary-protected-unknot
kind: lemma
title: "Based Heegaard splittings admit a common auxiliary protected unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
  - lem-neatly-bridged-compression-data-admit-adapted-morse-endpoints
  - lem-neat-marked-morse-endpoints-glue-across-a-heegaard-surface
  - lem-adapted-knot-morse-endpoints-admit-a-common-protected-germ
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - cor-every-smooth-manifold-admits-a-riemannian-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Section2.1, Proposition2.2 and complete Lemma2.3–2.4 proofs, printed5–7; the based relative function and disk transport arguments are supplied locally"
---

## Statement

Let $Y$ be any closed connected oriented smooth three-manifold, with two actual pointed Heegaard diagrams and specified complete compression-disk systems as in the closed-manifold definition. Assume Countable Choice. Up to orientation-preserving ambient transports of the diagrams, their marked points may be identified with one point $z$. Each diagram can then be equipped with an auxiliary oriented unknot $K$ and a second point $w$ so that $K$ crosses its splitting surface exactly at $w,z$, each half is a neat trivial arc disjoint from its compression disks, and it has explicit simultaneous bridge witnesses. After further ambient transports fixing $z$, both diagrams have the SAME auxiliary $K,w,z$.

There exist Morse function and descending-field endpoints on $Y$ realizing the two transported diagrams up to attaching-curve isotopies avoiding both marks. Each endpoint has one minimum and one maximum on $K$, its remaining critical points have indices one and two on the respective sides of the middle level, and the two endpoints agree with one fixed function and field germ on a common tube about $K$. All other critical points and the actual lower stable and upper unstable compression systems are retained through the final common-germ modification. No hypothesis on the homology or fundamental group of $Y$ is imposed. This is auxiliary geometric data, not an analytic basepoint insertion or a comparison of Floer complexes.

## Facts & Assumptions

[F1] The input handlebodies are smooth regular neighborhoods of finite connected graphs, with actual complete compression disks and one basepoint off their boundaries. ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]])

[F2] In a handlebody embedded in $S^3$, broad proper compression disks with ball cuts admit same-boundary neat replacements and actual standard smooth rounded cut balls. The replacement is supported in arbitrarily small disk-boundary collars and may avoid specified disjoint compact data. ([[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]])

[F3] Actual neat ball, compression and bridge data give adapted Morse endpoints on any compact oriented three-manifold with boundary. Their prescribed disks are tracked by the relative one-handle cocore comparisons. One-sided endpoints glue across a surface in any closed oriented three-manifold, changing attaching curves only by marked isotopies. Already adapted endpoints tangent to one marked circle admit a common protected germ on any such manifold. ([[lem-neatly-bridged-compression-data-admit-adapted-morse-endpoints]], [[lem-neat-marked-morse-endpoints-glue-across-a-heegaard-surface]], [[lem-adapted-knot-morse-endpoints-admit-a-common-protected-germ]])

[F4] A smooth auxiliary Riemannian metric exists under Countable Choice. Parameterized Euclidean local inverses, compactly supported smooth flows on a compact time interval and finite compact-set cutoffs are available. ([[cor-every-smooth-manifold-admits-a-riemannian-metric]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[A1] Only Countable Choice is assumed. All chart, graph, collar and handle selections added below are finite. ([[def-countable-choice]])

## Proof

**Given:** The data and Countable Choice in the Statement.

1.1 Move distinct basepoints to a common point if necessary. In a connected manifold any two points are joined by a finite chain of coordinate balls: the points reachable by such a chain form an open set whose complement is also open. Inside each ball join successive centers by a smooth coordinate path with compact interior track. A smooth time-dependent field equal to its velocity on a small neighborhood of the moving point, extended by a cutoff, transports that point by its flow. A finite composition gives an orientation-preserving ambient isotopy carrying one basepoint to the other. Transport its whole diagram, compression disks and splitting at the same time. This is an allowed embedded-diagram isomorphism, not a claim that its analytic action is the identity. Henceforth both basepoints are $z$. [F1, F4, A1, given, construct]

2.1 In a positive coordinate ball at $z$ straighten the splitting surface to $x_3=0$ and label its lower side $x_3<0$. Choose the ball disjoint from the entire finite compression-disk family: the disks are compact and none contains $z$, since their boundaries avoid it and their interiors are interior to their respective handlebodies. For sufficiently small $r>0$ put $$K_r(\theta)=(r(1-\cos\theta),0,r\sin\theta),\qquad 0\le\theta\le2\pi.$$ Its two surface crossings are $z$ and $w=(2r,0,0)$ and are transverse. Its lower arc is oriented $w\to z$ and its upper arc $z\to w$. The two planar half-disks between its semicircles and the interval $[z,w]$ are explicit smooth corner bridge witnesses, neat at the surface edge. They miss all compression disks because their entire coordinate ball does. Each half arc belongs to the sole cut ball of its side. The full circle bounds the displayed planar disk in the ball, so it is an auxiliary local unknot with no global knot-type assertion needed. [F1, F4, step 1.1, construct, algebra]

3.1 The local round models from two positive charts based at the SAME $z$ are ambient isotopic fixing $z$, with their ordered $w,z$ and oriented circles carried along. Here are the germ and support details. Shrinking $r$ through positive radii gives an isotopy of the circle fixing $z$; a radial vector field, cut off outside a larger coordinate ball, extends it. For two coordinate germs fixing zero the transition $h$ is positive and smooth. The germs $h_a(x)=a^{-1}h(ax)$ extend smoothly at $a=0$ to $Dh(0)x$, by the integral formula $h_a(x)=\int_0^1Dh(sa x)x\,ds$. They are local diffeomorphisms on one uniform smaller ball, because their derivatives are uniformly close to the invertible $Dh(0)$. A positive matrix has a path to the identity: Gram–Schmidt gives a positive upper triangular factor, joined to its positive diagonal and then to the identity by straight interpolation; its orthogonal factor lies in $SO(3)$ and is a finite product of plane rotations. Thus the transition germ is joined to the identity through positive germs fixing zero. The velocity $\partial_a h_a\circ h_a^{-1}$ vanishes at zero. Extend it by a cutoff equal to one on the compact track of a sufficiently small model circle and zero outside the coordinate ball. The resulting flow fixes zero and agrees with the germ path on that track by uniqueness. Combine the shrinkings, this germ extension and inverse shrinkings. This carries one marked oriented local circle to the other while fixing $z$; $w$ is carried as its labelled other marked point. Carry each entire diagram and its disk and bridge data by this ambient map. We now have one actual $K,w,z$ for both endpoints. No simultaneous transport is said to preserve the old surface pointwise. [F4, step 2.1, construct, algebra]

4.1 Prepare compression witnesses without assuming $Y$ embeds in $S^3$. Each handlebody is a smooth regular neighborhood of a finite graph. A spanning tree of that graph has a standard smooth ball neighborhood, obtained by repeatedly absorbing a leaf ball and its joining tube through disk collars. Every edge outside the tree supplies one framed one-handle. Conversely attaching these finitely many handles to a ball gives a smooth parametrization of the original regular neighborhood, by the same product edge and vertex charts. A ball with these finitely many handles has a standard embedding in $\mathbb R^3\subset S^3$: use disjoint small foot disks and disjoint arches, at distinct heights, for the remaining edges. Thus the abstract handlebody, independently of its embedding in $Y$, has a smooth parametrization into this standard model. Transport its actual auxiliary disks there, apply [F2], and pull the replacements and smooth cut-ball parameters back. This application is within $S^3$ only for the auxiliary model; it makes no Schoenflies assertion about a sphere in $Y$. Its supports may miss the local bridge witnesses, since those witnesses and disks were already disjoint in the local round-circle construction and remain disjoint after its ambient alignment. All attaching curves, actual arcs and surface marks are retained. The supplied complete system still cuts into ONE smoothly parametrized ball. [F1, F2, F4, step 2.1, step 3.1, construct]

5.1 Apply [F3]'s one-sided construction to each actual cut ball with its single auxiliary arc, its explicit neat bridge half-disk and its transported face collars. It gives one lower minimum, the prescribed number of lower index-one points and their actual stable compression disks; the upper construction is dual. Glue them across the splitting by [F3]. The one-sided collar transports fix the surface, and the subsequent field interpolation changes the curves by its finite-time collar holonomy isotopies fixing $w,z$. Thus the endpoint diagram is the original transported diagram up to those allowed curve isotopies. Choose the ordinary critical heights distinct by the one-at-a-time finite handle order. There is no same-index trajectory: a lower index-one stable disk reaches the middle level as a compact disk and cannot terminate backwards at another index-one point; the upper assertion is dual. Index increase is excluded by the separated lower/upper groups and the empty outgoing or incoming spheres for extrema. [F3, step 4.1, construct]

6.1 Choose the auxiliary smooth metric by [F4] and use the common-germ clause of [F3] on the two resulting pairs, with the SAME actual oriented $K,w,z$ from the local-model alignment. Its ambient maps preserve $K$ and fix the marks. Transport the surfaces and disk systems too. At the final field blend choose its common tube smaller than the distance to BOTH finite compact transported lower stable and upper unstable disk systems. These systems are disjoint from $K$: its trajectories end at the protected extrema. The blend is therefore absent on every one of those actual systems and on all other critical charts. Each retained invariant disk still has its original local critical model; uniqueness of trajectories proves it is still the full truncated stable or unstable disk. No endpoint same-index trajectory has been introduced. The endpoint functions and fields now agree near $K$, with exactly one protected minimum and maximum and no other tube critical point. Every endpoint change has been an explicit allowed ambient transport or a marked curve isotopy. All auxiliary objects can be forgotten after a geometric comparison; no chain-map assertion has been made. [F3, F4, step 3.1, step 5.1, construct] ∎
