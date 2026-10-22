---
id: thm-fixed-finite-type-cofinite-surface-models-uniformly-contract-cyclic-cover-pushforwards
kind: theorem
title: Fixed finite-type cofinite surface models uniformly contract cyclic-cover pushforwards
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
  - lem-cw-quotients-and-collapse-of-a-contractible-subcomplex
  - thm-fundamental-group-of-finite-wedge-of-circles
  - thm-induced-fundamental-group-map-functoriality
  - thm-cyclic-and-trivial-surface-cover-subgroups-have-common-positive-expansion
  - thm-common-covering-expansion-gives-a-uniform-quadratic-pushforward-contraction
  - thm-covering-space-lifting-criterion
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curt McMullen, Amenability, Poincaré series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Entire actual34-page article previously read; the finite-type surface-model and fixed-cover-family bridge is proved below
---

## Statement

Assume AC. Supply a connected finite-type Riemann surface $X=\overline X\setminus P$, where $\overline X$ is compact and $P$ is finite, together with an actual complete finite-area cofinite Fuchsian model $X\cong\mathbb H^2/\Gamma$ for discrete torsion-free $\Gamma$. Fix finitely many based loops generating $\pi_1(X)$.

There are $\gamma>0$ and $0\le c<1$, depending on this fixed marked surface and generating system, such that every connected unbranched holomorphic cover $p:Y\to X$ with cyclic or trivial image subgroup $p_*\pi_1(Y)\le\pi_1(X)$ has monodromy vertex expansion at least $\gamma$ and quadratic pushforward norm at most $c$. Thus for any countable collection of these actual covers the sum of their quadratic pushforwards from the $\ell^1$ direct sum has norm at most the same $c$.

Both compact closed surfaces and punctured surfaces are included. Neither regularity nor finite degree of the covers is required. The cofinite uniformization and the cyclic-or-trivial subgroup property are actual supplied data; neither is inferred here from a three-manifold boundary. There is no uniformity over varying complex structures on $X$.

## Facts & Assumptions

**Given:** AC, the fixed compactified finite-type Riemann surface and its actual finite-area Fuchsian model, generating loops, and covers with the specified subgroup property.

[A1] Full choice is [[def-axiom-of-choice]], and in particular supplies the countable-choice hypotheses of the smooth compact-core supplier.

[F1] A connected compact smooth surface with nonempty boundary has an actual finite disk-and-band presentation. [[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]]

[F2] Collapsing a contractible nonempty CW subcomplex is a homotopy equivalence; the fundamental group of a finite wedge of $r$ circles is free of rank $r$, with its stated basis. Homotopy equivalences induce fundamental-group isomorphisms, with based transport if necessary. [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[thm-fundamental-group-of-finite-wedge-of-circles]], [[thm-induced-fundamental-group-map-functoriality]]

[F3] Cyclic and trivial subgroup coset graphs have a common positive expansion for a fixed finite free-group basis of rank at least two, with the bound transferable to any fixed generating system. The same holds for a fixed compact Fuchsian model with arbitrary fixed finite generators. [[thm-cyclic-and-trivial-surface-cover-subgroups-have-common-positive-expansion]]

[F4] A common positive expansion for covers of one finite-type surface gives one strict quadratic pushforward bound for all those covers and their countable sum. [[thm-common-covering-expansion-gives-a-uniform-quadratic-pushforward-contraction]]

[F5] Covering path lifting and its uniqueness hold; the upper half-plane is simply connected and has metric $Y^{-2}(dx^2+dY^2)$. A nonidentity discrete torsion-free Möbius element is parabolic or loxodromic. [[thm-covering-space-lifting-criterion]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

## Proof

1.1 If $P$ is empty, the supplied Fuchsian quotient is compact. Its deck group is identified with $\pi_1(X)$ by unique lifting to the simply connected upper half-plane. The compact Fuchsian clause of [F3] immediately gives one expansion bound for all cyclic or trivial subgroup coset actions in the specified generators. This handles the closed case directly, rather than wrongly treating its fundamental group as a free group. Henceforth assume $P\ne\varnothing$. [F3, F5, given, construct, algebra]

1.2 Choose finitely many disjoint closed coordinate discs about the punctures, with the chosen basepoint outside them, and remove their interiors to obtain a connected compact smooth surface $F$ with nonempty boundary. It is connected because paths in the original connected surface can be detoured around the finitely many discs within their annular coordinate collars. The punctured surface deformation retracts onto $F$: in each removed punctured disc of radius $\epsilon$ use $re^{i\theta}\mapsto((1-t)r+t\epsilon)e^{i\theta}$, $0<r\le\epsilon$, and use identity outside those discs. The formulas agree on their boundary circles, avoid the missing punctures and fix $F$ and the chosen basepoint. Thus $\pi_1(X)\cong\pi_1(F)$. [A1, F2, given, construct, algebra]

2.1 We derive the finite free group assertion from the actual [F1] disk-and-band data. These pieces have a finite compatible topological triangulation: choose finitely many boundary vertices at every attaching-interval endpoint and use a finite triangular decomposition of each rectangle. On each disk choose a boundary homeomorphism matching the finitely many prescribed interval parameters and extend it radially from its center; coning the resulting finite boundary subdivision triangulates that disk. If a later band attaches along earlier band sides, refine those finitely many boundary subdivisions at the new interval endpoints and match their interval parameters before extending the finite triangulations; all attachments are finite and embedded boundary intervals, so this requires only finite refinement. Thus the attachment maps agree on shared subdivided edges, giving a finite triangular surface model of $F$ without invoking a general triangulation theorem. The triangle dual graph is connected: a path between interior points can be perturbed off the finitely many vertices and read as a finite chain of crossed edges. Add an outside root adjacent along one actual boundary edge and choose a spanning tree. Order its triangles from that root outwards and collapse each across the edge towards its parent. This edge is free when its turn comes: its only other incident triangle was already removed, and a parent's collapse removes only the parent's own free edge, retaining all edges towards its children. In barycentric coordinates $(\lambda_0,\lambda_1,\lambda_2)$, collapsing a triangle across its free edge opposite vertex zero has the explicit homotopy $(\lambda_0+2tm,\lambda_1-tm,\lambda_2-tm)$ with $m=\min(\lambda_1,\lambda_2)$. It fixes its other two edges and extends by identity to every other triangle. After finitely many collapses a connected finite graph remains. Collapse its maximal tree by [F2]; the quotient is a finite wedge of circles. Consequently $\pi_1(X)$ is free of some finite rank $r$, with a basis obtained from the graph's nontree edges. [F1, F2, step 1.2, construct, algebra]

3.1 This rank is at least two. The supplied model identifies $\Gamma\cong\pi_1(X)$ by [F5]. A rank-zero group gives the full upper half-plane, of infinite area. A rank-one group would be cyclic parabolic or cyclic loxodromic by [F5]. In the parabolic normalization $z\mapsto z+\ell$ a fundamental region is $0\le x<\ell$, $Y>0$, whose area $\int_0^\ell dx\int_0^\infty Y^{-2}dY$ is infinite. In the loxodromic normalization $z\mapsto az$, $a>1$, a fundamental region is $1\le Y<a$, $x\in\mathbb R$, since a unique integer power reduces its positive height into that interval; its area is again infinite. These contradict the supplied finite-area model. Hence $r\ge2$. Apply the free-group clause of [F3] and its generating-set comparison to the free basis from step 2.1 and the original fixed generating loops. It gives one positive expansion independent of the cyclic or trivial subgroup. [F3, F5, step 2.1, given, construct, algebra]

4.1 For each actual connected cover, lifting a based loop sends a chosen fiber point to its endpoint; connectedness makes this action transitive. Its stabilizer is exactly $p_*\pi_1(Y)$: a loop closes at that fiber point if and only if its lift closes, and the converse implication follows by projecting the lifted loop. Two loop words give the same endpoint exactly when their corresponding right cosets agree, by concatenating one with the reverse of the other and unique path lifting. Thus the monodromy graph is the coset graph used in [F3]. Steps 1.1 and 3.1 therefore give a common $\gamma>0$ for the entire actual covering family, in both the closed and punctured cases. Apply [F4] to this fixed $X$, its fixed generating loops and that one $\gamma$. It gives one $c<1$, which may be chosen nonnegative because operator norms are nonnegative, and also gives the countable sum assertion. No separately strict covering constants were maximized and no varying-surface compactness was assumed. This proves every assertion. [F3, F4, F5, step 1.1, step 3.1, given, algebra] ∎

## Actual supplier reading and scope

The complete actual disk-and-band three-step proof, five-step CW-collapse proof, five-step finite-wedge fundamental-group proof, five-step induced-map proof and the complete new common-expansion and uniform-cover-contraction proofs were read. The current disk-and-band source is frozen raw SHA256 d40e8f8627397b42d47794c98a055256cfaeb1e76fbd23c28c653d5ca18ad298; its author confirms no repair underway but standalone root readiness has not been assumed. The graph-spine/free-group consequence, not literally its Statement, is proved locally in step 3.1. The actual covering and geometric model suppliers were read during the preceding development.

This closes the fixed finite-type surface-model bridge once a cofinite model and cyclic or trivial subgroup images are supplied. It does not supply a pared boundary model, the topological intersection-subgroup assertion, or any uniform estimate during moduli degeneration. Those remain separate obligations for original generic hyperbolization.
