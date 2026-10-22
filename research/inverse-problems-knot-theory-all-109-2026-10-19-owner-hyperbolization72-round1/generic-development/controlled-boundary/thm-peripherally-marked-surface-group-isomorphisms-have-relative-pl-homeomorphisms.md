---
id: thm-peripherally-marked-surface-group-isomorphisms-have-relative-pl-homeomorphisms
kind: theorem
title: Peripherally marked surface group isomorphisms have relative PL homeomorphisms
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - thm-seifert-van-kampen
  - thm-relative-simplicial-approximation-after-subdivision
  - thm-covering-maps-inject-fundamental-groups
  - thm-covering-space-lifting-criterion
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: Lemma1.4.3 printed61; the actual surface-map classification is supplied by the local proved prerequisite, and the missing relative map is constructed below
---

## Statement

Assume AC. Let $A,B$ be compact connected oriented finite PL surfaces, each with nonempty boundary and negative Euler characteristic. Supply a PL homeomorphism $b:\partial A\to\partial B$, a vertex $a_0\in\partial A$, and a group isomorphism
$$\alpha:\pi_1(A,a_0)\longrightarrow\pi_1(B,b(a_0)).$$
For each component $C_i$ of $\partial A$ choose a vertex $a_i\in C_i$, a path $\sigma_i:a_0\to a_i$ in $A$, and a path $\eta_i:b(a_0)\to b(a_i)$ in $B$, with constant paths on the distinguished component. Suppose for every based loop $\ell$ in $C_i$ that
$$\alpha([\sigma_i\ell\sigma_i^{-1}])=[\eta_i b(\ell)\eta_i^{-1}].$$
Then a PL homeomorphism $h:A\to B$ exists with $h|_{\partial A}=b$, $h_*=\alpha$, and $h(\sigma_i)\simeq\eta_i$ relative endpoints for every $i$. Thus full peripheral boundary and path compatibility, rather than an unmarked free-group isomorphism alone, gives the marked surface homeomorphism.

## Facts & Assumptions

**Given:** The finite oriented surfaces, boundary homeomorphism, group isomorphism and exact conjugating-path compatibility. In particular the boundary components are bijected, with their parametrized maps and signs already supplied.

[F1] A PL map of compact oriented finite PL surface pairs with nontrivial source group and injective induced group map is homotopic as a pair either to a finite PL covering or to an annular boundary collapse; if its boundary restriction is locally a homeomorphism, the homotopy fixes that boundary pointwise. [[thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses]]

[F2] Edge loops generate the fundamental group and two-cell attaching loops give its relations; paths can be moved into the one-skeleton relative endpoints. [[thm-cellular-approximation-for-maps-of-cw-pairs]], [[thm-seifert-van-kampen]] Relative simplicial approximation keeps a prescribed PL subcomplex fixed. [[thm-relative-simplicial-approximation-after-subdivision]] Coverings inject groups; paths and homotopies have unique lifts from a specified initial point. [[thm-covering-maps-inject-fundamental-groups]], [[thm-covering-space-lifting-criterion]]

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 We first construct an actual map, so that [F1] is not being applied to an abstract group marking. Use a finite triangulation with the boundary a subcomplex and move each $\sigma_i$ to an edge path by [F2]. Choose a spanning tree of the one-skeleton containing a spanning tree in each boundary circle with one edge deleted. Let $\tau_v$ be its path from $a_0$ to a vertex $v$. Put $$\zeta_i=\alpha([\tau_{a_i}\sigma_i^{-1}])\eta_i.$$ Choose a representative for its initial based loop, so this is an actual target path. For $v\in C_i$ use the reference path $r_v=\zeta_i b(\tau_{a_i}^{-1}\tau_v)$, cancelling the common tree prefix so the latter segment lies in $C_i$. At other vertices use the point $b(a_0)$ and its constant reference path. For a nonboundary edge $e:u\to v$ select a loop $c_e$ representing $\alpha([\tau_u e\tau_v^{-1}])$ and map the edge to $r_u^{-1}c_e r_v$. Keep $b$ on every boundary edge. The given compatibility says exactly that a boundary edge has the same prescribed based class in this tree gauge. Cancellation along successive edges now gives the induced map $\alpha$ on every edge loop and gives the path class $\eta_i$ on each $\sigma_i$. Only finitely many representatives were selected. [F2, A1, given, construct, algebra]

2.1 Each nonboundary two-simplex has attaching loop trivial in $\pi_1(A)$, so its edge image is trivial in $\pi_1(B)$ by step 1.1 and extends to a continuous disk map. Choose those finitely many fillings and paste them to the unchanged boundary map. This produces a continuous pair map $f:A\to B$ inducing $\alpha$ and realizing all $\eta_i$. There are no higher-dimensional cells to fill and no target asphericity assumption is needed. Relative simplicial approximation gives a PL map homotopic to $f$ relative to $\partial A$; its induced based group map and all those relative-endpoint path classes are unchanged. [F2, step 1.1, construct]

3.1 Apply [F1] to this actual PL pair map. Negative Euler characteristic excludes its annular-collapse alternative, so the resulting map is a finite PL covering $h:A\to B$, reached by a homotopy fixing the entire boundary. Its group image remains the whole group, since it is $\alpha$. For any point $a$ of the fiber over $b(a_0)$ choose a path $u:a_0\to a$ in $A$. Its projection is a based loop in $B$. Surjectivity supplies a based loop $v$ in $A$ whose image is based-homotopic to that projection. Unique lifting of this homotopy from $a_0$ equates the endpoints of $u$ and $v$, so $a=a_0$. This fiber is a singleton; path lifting bijects fibers over different target points, so the covering has degree one. A one-sheeted covering is a homeomorphism, and the supplied PL covering structure makes it a PL homeomorphism. The fixed-boundary homotopy preserves the based homomorphism and every $\eta_i$ path class, proving all claims. Neither a missing boundary bijection nor its conjugating paths have been inferred from an unmarked group isomorphism. [F1, F2, step 2.1, given, algebra] ∎

## Application boundary

This is initial offcanonical proof development for the consolidated model-to-marking chain. Its surface-map prerequisite has an independent complete review; this new consequence has not yet had independent review. It constructs no Kleinian representation, geometric model, peripheral correspondence or original knot-exterior boundary data. Those actual inputs remain obligations in the original hyperbolization proof.
