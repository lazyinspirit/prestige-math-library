---
id: thm-finite-orientable-pl-three-manifolds-have-prime-connected-sum-decompositions
kind: theorem
title: "Finite orientable PL three-manifolds have prime connected-sum decompositions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-marked-separating-pl-sphere-systems-have-a-finite-kneser-bound
  - thm-finite-pl-schoenflies-in-dimension-three
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - cor-seifert-van-kampen-simply-connected-overlap
  - thm-normal-form-for-free-products
  - thm-fundamental-group-of-the-circle
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free for the supplied finite PL manifold and its finite parameters. No existence of a PL structure on a TOP manifold is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.4 and existence part of Theorem1.5, printed pp.4–7, full actual passage read; uniqueness is not claimed here."
---

## Statement

Let $M$ be a compact connected orientable PL three-manifold supplied with a finite PL triangulation, possibly with nonempty boundary. There are finitely many compact connected orientable PL three-manifolds $P_1,\ldots,P_q$, $q\ge1$, each **prime**, and a finite PL connected-sum presentation
$$M\cong P_1\mathbin\#\cdots\mathbin\# P_q.$$
Here prime means that a PL connected-sum factorization has a standard PL three-sphere as one factor. Connected sum removes interiors of parametrized PL balls and glues their boundary spheres by supplied finite PL maps. The presentation supplies the cut spheres, cap-ball parameters and gluing maps, and identifies every original boundary component of $M$ with its boundary component in exactly one factor. Original sphere boundary components are allowed; their ball factors are not discarded. The presentation can be chosen with non-irreducible factors only standard $S^1\times S^2$; every other prime factor is PL irreducible.

This is existence in an already supplied finite PL manifold. No uniqueness, TOP triangulation, TOP-to-PL compatibility, Poincare conjecture, or statement that an arbitrary TOP ball is a PL ball is asserted. No choice axiom is required.

## Statement references

[[lem-marked-separating-pl-sphere-systems-have-a-finite-kneser-bound]] — the finite separating-system bound with original boundary marks.

[[thm-finite-pl-schoenflies-in-dimension-three]] — the standard PL sphere and ball facts.

## Facts & Assumptions

**Given:** The finite compact connected orientable PL manifold of the Statement.

[F1] In a finite PL manifold where every interior sphere separates, a sphere system with no unmarked punctured PL sphere component has bounded cardinality. Its proof supplies finite disk-cutting and ball parameters. [[lem-marked-separating-pl-sphere-systems-have-a-finite-kneser-bound]]

[F2] Standard PL three-spheres satisfy finite PL Schoenflies. Prescribed sphere-boundary maps extend over parametrized balls by finite coning; marked boundary-window ball attachments are parametrized balls. [[thm-finite-pl-schoenflies-in-dimension-three]] [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]

[F3] The finite boundary collars used to cut, cap and enlarge ball neighborhoods exist in the given PL structure. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[F4] A finite disjoint closed-surface family with connected total complement has independent mod-two homology classes, allowing noncompact ambient interiors. Finite simplicial homology and an inward boundary-collar push identify the relevant interior group with the finite-dimensional group of the compact manifold. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]] [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]] [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]

[F5] A simply connected overlap gives the free-product form of van Kampen. Reduced syllable normal form makes both factors injective and makes the commutator of two nonidentity elements from different factors nonidentity. The circle has fundamental group $\mathbb Z$. [[cor-seifert-van-kampen-simply-connected-overlap]] [[thm-normal-form-for-free-products]] [[thm-fundamental-group-of-the-circle]]

## Proof

1.1 We first specify finite cap-ball avoidance, used several times. A supplied interior parametrized ball has a slightly larger parametrized ball neighborhood by its finite outside boundary collar [F3]. In its convex parameter, choose a point in its interior off a given finite surface. Finite chart point pushes move a cone center there: on a small convex chart ball cone the boundary triangulation to the old center and send it to the new nearby center, fixing the boundary. A finite path gives a finite composition. Shrink the inner ball about that center, extending across the surrounding shell by compatible face-cone maps between convex prisms, fixed on the outer boundary. The resulting finite PL ambient homeomorphism sends the whole original ball into a small ball missing the surface. For finitely many disjoint cap balls use disjoint exterior collars and do this separately. Pulling the surface back makes it disjoint from the original cap balls. Thus an embedded sphere in a capped piece can be moved off all its cap balls without changing its separating or connected-sum property. This uses actual ball parameters, not an unmarked regular-neighborhood or TOP smoothing theorem. [F2, F3, construct]

1.2 Standard PL $S^3$ is prime by [F2]. Standard PL $S^1\times S^2$ is also prime. First, a sphere is simply connected: approximate a loop in its finite triangulation by a finite edge path using a finite subdivision subordinate to vertex stars; the small star homotopies preserve its loop class. The finite polygonal loop misses a point of the sphere, whose complement is a plane, so contracts. The same finite-product argument and [F5] give $\pi_1(S^1\times S^2)=\mathbb Z$. For a separating sphere with complementary closures $V,W$, collars turn this splitting into an open cover with simply connected overlap homotopy equivalent to $S^2$. Thus [F5] gives $\mathbb Z\cong\pi_1(V)*\pi_1(W)$. Both factors cannot be nontrivial because their nonidentity elements would have a nontrivial reduced commutator in an abelian group. Suppose $\pi_1(V)$ is trivial. The inclusion of $V$ lifts to the explicit cover $\mathbb R\times S^2$, by finite continuation of the circle coordinate along paths; independence of paths follows from simple connectivity. The lift is embedded and compact, with one sphere boundary. The cover is PL homeomorphic to $\mathbb R^3\setminus\{0\}$: use successive polyhedral radial shells of radii $2^j$, triangulated by finite face coning on each compact subcollection. By [F2], the lifted boundary bounds a parametrized ball. The compact lifted three-manifold must be exactly the bounded closed side, since its interior is open and closed in the complementary component and its boundary is that sphere. It is a ball. Hence $V$ is a PL ball, proving primeness. [F2, F3, F5, construct, algebra]

2.1 In $\operatorname{Int}M$ choose a largest finite disjoint sphere family whose total complement is connected. Such a maximum exists: the empty family is permitted, and [F4] bounds every such cardinality by $\dim H_2(M;\mathbb F_2)$. Cut along its $r$ members and cap the $2r$ new sphere boundaries by parametrized balls. The resulting manifold $N$ is connected. Every sphere in $N$ separates. Otherwise step 1.1 moves a nonseparating sphere off its cap balls; deleting finitely many balls from its connected complement does not disconnect it, since paths crossing a ball can be rerouted along its connected boundary sphere. That sphere would enlarge the original connected-complement family, a contradiction. All cuts, caps, boundary marks and finite triangulations here use the original PL charts and [F3]. [F3, F4, step 1.1, construct]

3.1 Undoing one such nonseparating cut is connected sum with standard $S^1\times S^2$. For the explicit local description take a product collar of its sphere and an embedded PL arc joining the two outside boundary copies in their connected complement. A narrow rectangular-prism neighborhood of the arc joins two parametrized disk windows. Normalize the two disk windows independently by finite boundary chart point pushes and shrinks, and then adjust their disk maps. An orientation-preserving boundary-circle map is joined to the identity by the finite annulus-strip interpolation of [F1], keeping its cyclic order; extend across the disk by coning. A disk map fixed on its boundary has the jointly PL Alexander isotopy: in a convex disk model use $t h(x/t)$ on the $t$-scaled disk and the identity outside. On the finite cone over a cell where $h(x)=Ax+b$, the expression is $Ax+tb$, hence is affine; its seams match and its inverse is constructed in the same way. Extend these isotopies through the small boundary collars. Thus both attaching disk maps become the standard ones; orientability selects the untwisted handle attachment. The resulting standard sphere collar with one handle is exactly $S^1\times S^2$ minus a small product ball: split $S^1$ into a long closed interval and its short complementary interval, retain the whole sphere over the long interval and a small disk times the short interval. Their common end disks are the two windows, and the removed complementary disk times the short interval is a parametrized ball. This is a finite product-cell identification, not an assertion about arbitrary sphere mapping tori. The other capped factor is exactly the cut-and-capped manifold: there the two cap balls joined by the chosen arc prism form a parametrized ball by the tree of disk-window attachments in [F2]. Removing and replacing that ball is neutral by coning its boundary map. Reversing all $r$ cuts therefore gives a finite PL presentation $M\cong N\#r(S^1\times S^2)$, retaining the original boundary marks. [F1, F2, F3, step 2.1, construct]

3.2 If $N$ is a standard PL sphere there is nothing further to split. Otherwise the empty separating system in $N$ has no unmarked punctured-sphere component: with no cut boundaries, such an unmarked component would be $N=S^3$. By [F1], there is a maximum cardinality $m$ among finite sphere systems in $N$ having no unmarked punctured PL sphere component; all spheres separate by step 2.1. Choose one of that cardinality and cap its cut components to give $P_1,\ldots,P_s$. The dual graph is a finite tree, so reversing its edges gives a finite connected-sum presentation of $N$ with the actual cap parameters. Different cap boundary identifications give equivalent finite PL presentations, since their sphere maps extend by coning. Every original boundary is retained on its own cut component. [F1, F2, step 2.1, construct]

4.1 Each $P_i$ is prime. If not, take a separating sphere in it giving two factors neither of which is standard PL $S^3$. Move this sphere off its finitely many cap balls by step 1.1 and view it in the corresponding unfilled cut component. Inserting it into the system increases its cardinality by one. Neither new cut component can be an unmarked punctured PL sphere: capping its boundaries would make the corresponding new factor standard PL $S^3$. Every other component is unchanged, contradicting maximality in step 3.2. This includes components with original sphere boundaries: they remain marked, so a ball factor with such a boundary is retained rather than incorrectly identified with an unmarked sphere factor. [F1, F2, step 1.1, step 3.2, construct, contradiction]

5.1 A prime orientable PL manifold having a nonseparating sphere is standard $S^1\times S^2$: the explicit neighborhood in step 3.1 splits off that factor, and primeness makes its other capped factor standard $S^3$. On the other hand every separating sphere in a prime manifold bounds a parametrized PL ball on one side, since its capped factor is standard $S^3$ and [F2] identifies the complement of the cap ball as another ball. Thus a prime with no nonseparating sphere is irreducible. The $P_i$ from step 3.2 have no nonseparating spheres: a sphere avoiding their cap balls would be nonseparating in $N$ as well, by adding back the connected other components along its boundary spheres, contradicting step 2.1. They are therefore irreducible. Together with the $r$ standard prime factors of step 1.2, these give exactly the asserted presentation of $M$. Every operation was finite, each maximum was bounded by a finite-dimensional homology group or [F1], and no TOP manifold was assigned a PL structure. [F1, F2, step 1.1, step 2.1, step 3.1, step 1.2, step 3.2, step 4.1, construct] ∎
