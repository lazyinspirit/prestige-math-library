---
id: lem-torus-in-ball-is-compressible
kind: lemma
title: "Every embedded torus in a ball is compressible"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-compact-topological-three-manifolds-admit-finite-pl-triangulations
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - thm-fundamental-group-of-the-circle
  - thm-fundamental-group-of-a-product
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and supplies both the proved TOP finite-triangulation bridge for the cut pieces and coset transversals in the amalgam argument. The disk transported back to the original ball is asserted TOP, without a silent PL or smooth marking upgrade."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.1, Alexander's theorem and irreducibility; §3.1, Loop Theorem, printed pp.1–2 and 45–48"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, incompressible tori and irreducible pieces, PDF pp.2–4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $B$ be a compact piecewise linear $3$-ball with a finite compatible triangulation, and let $T\subset\operatorname{int}B$ be a two-sided embedded torus, where two-sided means that $T$ has a product neighborhood with its given central inclusion. Then there is an embedded compressing disk $D\subset\operatorname{int}B$ with $D\cap T=\partial D$ and $\partial D$ essential on $T$. The disk is properly embedded in the closure of one component of $B\setminus T$: its boundary lies on that component's copy of $T$ and its interior lies in the interior of the component.
## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.1 and §3.1](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, the finite PL ball and the original unqualified two-sided embedded torus with product neighborhood. No PL or smooth compatibility of that torus is assumed.

[A1] Full AC is [[def-axiom-of-choice]]. It permits coset transversals for the possibly untriangulated cut-piece groups below.

[F1] Two-sidedness and a compressing disk have the geometric product-neighborhood and essential-boundary conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]]. A torus with a topological product neighborhood is locally flat, by its intrinsic surface charts crossed with the interval.

[F2] Under full AC every compact TOP3-manifold, boundary allowed, has a finite compatible PL triangulation with its boundary a subcomplex. The finite PL Loop theorem applies to any connected boundary component with nontrivial inclusion kernel. [[thm-compact-topological-three-manifolds-admit-finite-pl-triangulations]] [[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

[F3] Van Kampen gives the pushout for spaces glued along the connected torus product collar. When both side maps are injective, amalgam normal form with coset transversals supplied by [A1] embeds the torus group. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]]

[F4] A compact locally flat closed surface with connected complement in a boundaryless three-manifold has nonzero mod-two class, without choice or an ambient triangulation. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]] A contractible space has the homology of a point. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] For mod-two chains on a point, $\partial_2$ is multiplication by $3=1$, so its second homology is zero.

[F5] The torus group is $\mathbb Z^2$ by the circle and product computations. [[thm-fundamental-group-of-the-circle]] [[thm-fundamental-group-of-a-product]]

## Proof

1.1 The interior of the parametrized PL ball is a contractible boundaryless topological three-manifold. Its second mod-two homology is zero by [F4]. Hence [F1] and [F4] show that its complement of $T$ cannot be connected. The same is true in $B$: push its outer boundary collar slightly inward, fixing the compact interior torus; if $B\setminus T$ were connected, its connected pushed image and the collar homotopy would make the interior complement connected. There are exactly two components. Indeed the two open product-collar sides of connected $T$ are connected, and every complementary component must meet one: otherwise its closure misses $T$ and it is open and closed in connected $B$. More explicitly, at any point of $T$ in the closure of a component, a local flat chart puts some collar-side patch in that component; the connected full side collar then belongs to it. Thus there are at most two components. Their closures $W_1,W_2$ are compact orientable topological three-manifolds, with the corresponding copies of $T$ in their boundaries. [F1, F4, given, construct]

2.1 If both maps $\pi_1(T)\to\pi_1(W_i)$ were injective, choose their coset transversals by [A1]. The given topological product collar gives the connected-overlap van Kampen cover, and [F3] expresses $\pi_1(B)$ as their amalgam with $\pi_1(T)$ embedded. By [F5] this would embed $\mathbb Z^2$ into the trivial group of the ball, a contradiction. Thus one side boundary map has nontrivial kernel. This conclusion is topological and has required no triangulation of the cut pieces. [A1, F3, F5, step 1.1, construct, algebra]

3.1 Apply [F2]'s ACTUAL TOP triangulation theorem to that compact orientable side $W_i$, using [A1]. Let $q:|L|\to W_i$ be its resulting finite manifold triangulation. The preimage $q^{-1}(T)$ of the whole boundary component is a connected PL boundary surface subcomplex; no pre-existing compatibility of the original embedded torus with the original ball triangulation was needed. Conjugating by $q$ identifies its inclusion kernel with the nontrivial kernel from step 2.1. Apply finite PL Loop with that entire boundary component and normal subgroup $1$. It supplies a proper embedded PL disk in $|L|$ with boundary representing a nonidentity element of its torus group. Transport it by $q$ and then by the cut-side inclusion into $B$. These maps are homeomorphisms on the disk: the disk meets only this single boundary face and its interior misses all boundary faces. Hence its image $D$ is a TOP embedded disk in $\operatorname{int}B$, with $D\cap T=\partial D$ and essential boundary on $T$. It is proper in the cut side, as the Statement requires. This completes the unqualified TOP two-sided torus case with the original full AC hypothesis. [A1, F1, F2, F5, step 2.1, construct] ∎

## Remarks

The triangulation used in the proof is on the TOP cut side. Neither the original torus nor its transported disk has been asserted PL or smooth for the originally supplied ball triangulation. The distinct explicitly PL torus lemma remains the precise supplier for its finite PL consumers.
