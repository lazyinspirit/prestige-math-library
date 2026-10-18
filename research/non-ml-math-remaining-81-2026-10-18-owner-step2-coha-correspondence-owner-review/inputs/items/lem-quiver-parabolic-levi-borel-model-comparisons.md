---
id: lem-quiver-parabolic-levi-borel-model-comparisons
kind: lemma
title: Parabolic and Levi Borel models for quiver extension and flag stacks
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
- def-axiom-of-choice
- def-intrinsic-quotient-stack-borel-moore-grading
- def-quiver-representation-stacks-and-exact-sequence-correspondences
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- def-equivariant-borel-moore-homology-and-correspondence-convolution
- thm-constructible-six-functors-proper-base-change-and-verdier-duality
- lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
- lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences
- lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent
- lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential
      Hodge structures and motivic Donaldson-Thomas invariants
    url: https://arxiv.org/pdf/1006.2706v2
    locator: Sections 2.1–2.3, PDF pp. 8–11; ordinary construction and flag associativity,
      read in full; the model and normalization proofs here are local expansions.
proof_strategy: direct
---

## Statement

Assume AC. Let $G=G_{\mathbf d}$, let $P\subset G$ be a block upper parabolic associated to a finite ordered dimension-vector decomposition, and let $L$ be its block-diagonal Levi. Let $Y$ be the variety of arrow matrices preserving that block flag. The induced spaces $S=G\times_PY$ and $T=G\times_LY$ are separated quasi-projective finite-type complex varieties, with quotient equivalences $[S/G]\simeq[Y/P]$ and $[T/G]\simeq[Y/L]$. With the intrinsic grading of [[def-intrinsic-quotient-stack-borel-moore-grading]], the latter equivalence gives a canonical degree-preserving comparison
$$\mathbb H_*([T/G])\cong\mathbb H_*([Y/L]).$$
It is natural for proper and smooth maps of these induced presentations, compatible with external products, and its comparisons on common product frame models satisfy the cocycle. All assertions include zero block ranks and empty products.

## Facts & Assumptions

**Given:** the finite quiver, ordered block decomposition and its block arrow locus, with rational coefficients.

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]] and [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]: the block matrices, parabolic and Levi, invariant flag varieties and their pivot charts give the indicated finite-type geometry.

[F2] [[def-intrinsic-quotient-stack-borel-moore-grading]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]: the intrinsic finite-stage index is $i+2\dim U$, and the ordinary/fixed-GL-product proper and smooth operations have coherent traces, complex orientations, composition and base change.

[F3] [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]: fixed finite collections of bounded constructible objects and morphisms have faithful bounded-Hom comparison on sufficiently large GL-product frame resolutions, with coherent product comparisons. No uniform bound for all degrees is claimed.

[F4] [[lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences]]: locally trivial associated frame bundles with acyclic fibres have the bounded-Hom comparison; its proof requires finite constructible local-product charts and applies to those supplied below.

[F5] [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]: locally algebraically split principal-bundle Cech nerves give constructible derived descent and coherent identifications. Every extra principal chart required here is constructed in the proof.

[F6] [[lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap]]: products of general linear frame spaces have cohomology gaps tending to infinity, also when the same space's free action is restricted to an embedded Levi.

[A1] [[def-axiom-of-choice]]: AC is inherited through these constructible, finite-model and properness suppliers; the explicit matrix charts and identifications make no further choice.

## Proof

**Proof technique:** direct.



1.1 Let G be the product GL of a total dimension vector, P its block upper parabolic, L the block-diagonal Levi. Let Y be the upper-block arrow locus and Z the product of its diagonal representation spaces. The following are actual varieties: S=G x_P Y, T=G x_L Y, v:Y -> Z. Indeed S is the vector bundle of upper-block arrow matrices over the product partial flag variety G/P. Over a standard nonzero pivot-minor flag chart choose an adapted basis by Gaussian elimination; this gives an algebraic section of G -> G/P. The transition matrices lie in P, so the local affine Y-bundles glue to S. For G/L, the extra data are ordered complementary subspaces; this is an open locus in a product of Grassmannians with algebraic adapted-frame sections on pivot charts. The same construction gives T. These are separated quasi-projective varieties of finite type. All rank-zero factors are omitted; the empty product is a point. The quotient-stack equivalences [Y/P] = [S/G], [Y/L] = [T/G] are given on principal bundles by extension/reduction of structure group; extending a reduction and then restricting it recovers that reduction, so the two functors and their natural isomorphisms are actual inverses. [F1, F2, given, construct]

2.1 We need a graded identification B_*([T/G]) = B_*([Y/L]) (2) with the same intrinsic convention of [F2] on both sides. On a G-frame model U, T x_G U = Y x_L U. To compare this with a usual L-frame model V, use R=(Y x U x V)/L. The projections to (Y x U)/L and (Y x V)/L are locally trivial fibrations with fibres V and U. The first quotient is locally split because an L-torsor is a tuple of frames of vector bundles, trivialized on their finite algebraic frame charts; for the second quotient the same fact holds directly. The spaces and their fibrations are algebraic, separated and finite type. Restricted to L, U is still a free action because L embeds in G; U has precisely the same ordinary cohomology gap as before. The acyclic-fibre lemma therefore gives the bounded-Hom comparisons on both projections. To see their coefficient identification, pull back to the common principal L-bundle Y x U x V. Both pullbacks are the given coefficient on Y; their descent data are identical L-actions. The locally split Cech descent theorem gives the canonical comparison. On a triple product both identifications are the identity on that same principal bundle, so the cocycle follows. This explicitly verifies the extra model hypotheses; it does not infer stabilization from freeness. [F2, F3, F4, F5, F6, step 1.1, construct]

3.1 The projections from R are smooth of relative dimensions dim V and dim U. Their smooth BM pullbacks shift by twice those dimensions. The intrinsic index of [F2] on the first quotient is i+2 dim U, on the second i+2 dim V, and on R it is i+2 dim U+2 dim V. Thus the comparison has intrinsic degree zero. The same principal-bundle identity shows compatibility with external products and every equivariant morphism of Y. Proper maps remain proper on the associated quotients; smooth maps remain smooth, and ordinary base change identifies their operations on the common model. Thus (2) is a natural comparison of operations, not just a vector-space isomorphism. Exactly this argument handles any two induction presentations used in flags, with their common frame products. There is no parabolic category silently substituted for the proved GL-product category: parabolics are represented by the actual induced varieties S with acting group G. [F2, F3, F4, F5, step 2.1]

4.1 Steps 1.1–3.1 prove the induced-variety descriptions, the canonical degree-preserving comparison, its product-resolution cocycle and naturality for the stated operations. AC enters only through [A1]. [A1, step 1.1, step 2.1, step 3.1] ∎
