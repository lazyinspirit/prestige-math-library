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

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]] fixes the two-block arrow and change-of-basis conventions. Step 1.2 of [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]] constructs relative Grassmannians with their Plucker equations and pivot charts. The arbitrary ordered-flag and induced-variety geometry needed here is constructed in step 1.1 below; it is not an additional conclusion of the two-block correspondence statement.

[F2] [[def-intrinsic-quotient-stack-borel-moore-grading]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]: the intrinsic finite-stage index is $i+2\dim U$, and the ordinary/fixed-GL-product proper and smooth operations have coherent traces, complex orientations, composition and base change.

[F3] [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]: fixed finite collections of bounded constructible objects and morphisms have faithful bounded-Hom comparison on sufficiently large GL-product frame resolutions, with coherent product comparisons. No uniform bound for all degrees is claimed.

[F4] [[lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences]]: locally trivial associated frame bundles with acyclic fibres have the bounded-Hom comparison; its proof requires finite constructible local-product charts and applies to those supplied below.

[F5] [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]]: locally algebraically split principal-bundle Cech nerves give constructible derived descent and coherent identifications. Every extra principal chart required here is constructed in the proof.

[F6] [[lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap]]: products of general linear frame spaces have cohomology gaps tending to infinity, also when the same space's free action is restricted to an embedded Levi.

[A1] [[def-axiom-of-choice]]: AC is inherited through these constructible, finite-model and properness suppliers; the explicit matrix charts and identifications make no further choice.

## Proof

**Proof technique:** direct.



1.1 Write the ordered decomposition as $V_i=\bigoplus_{r=1}^s V_i^r$ and put $d_i^r=\dim V_i^r$. At each vertex, the partial flag variety is the closed incidence locus in $\prod_{r=1}^{s-1}\operatorname{Gr}(\sum_{j\le r}d_i^j,V_i)$: adjacent inclusions are the zero loci of the tautological subbundle maps to the next quotient bundle. It is projective by the relative Plucker construction of [F1]. On the open locus of flags transverse to an opposite coordinate block flag, successive elimination gives a unique block lower unitriangular adapted matrix; its entries are regular ratios of the invertible pivot minors. Its columns give an algebraic section of $G\to G/P$. Permuting the coordinate pivots gives finitely many such charts covering all flags. The incidence locus of pairs consisting of a representation and a preserved flag is closed in $\operatorname{Rep}_Q(\mathbf d)\times G/P$, since each arrow's map from a flag subbundle to the corresponding quotient must vanish. The adapted-frame sections identify it locally with the product of the flag chart and the upper-block vector space $Y$, with transition action $P$; hence it is $S=G\times_PY$, a separated quasi-projective finite-type variety. The space $G/L$ is the open locus of tuples of subspaces of ranks $d_i^r$ whose direct sum is $V_i$, in the corresponding product of Grassmannians. Taking the normalized pivot frame in each summand gives algebraic local sections of $G\to G/L$. The incidence locus in $\operatorname{Rep}_Q(\mathbf d)\times G/L$ requiring preservation of each cumulative sum is closed there; these sections identify it with $T=G\times_LY$. Thus $T$ too is separated, quasi-projective and finite type. The quotient equivalences $[S/G]\simeq[Y/P]$ and $[T/G]\simeq[Y/L]$ extend and reduce principal bundles; the section charts show that these constructions are inverse, including their equivariant maps. Zero ranks and repeated flag stages impose no extra condition; omit their factors. Empty products are points. [F1, given, construct]

2.1 We need a graded identification B_*([T/G]) = B_*([Y/L]) (2) with the same intrinsic convention of [F2] on both sides. On a G-frame model U, T x_G U = Y x_L U. To compare this with a usual L-frame model V, use R=(Y x U x V)/L. The projections to (Y x U)/L and (Y x V)/L are locally trivial fibrations with fibres V and U. The first quotient is locally split because an L-torsor is a tuple of frames of vector bundles, trivialized on their finite algebraic frame charts; for the second quotient the same fact holds directly. The spaces and their fibrations are algebraic, separated and finite type. Restricted to L, U is still a free action because L embeds in G; U has precisely the same ordinary cohomology gap as before. The acyclic-fibre lemma therefore gives the bounded-Hom comparisons on both projections. To see their coefficient identification, pull back to the common principal L-bundle Y x U x V. Both pullbacks are the given coefficient on Y; their descent data are identical L-actions. The locally split Cech descent theorem gives the canonical comparison. On a triple product both identifications are the identity on that same principal bundle, so the cocycle follows. This explicitly verifies the extra model hypotheses; it does not infer stabilization from freeness. [F2, F3, F4, F5, F6, step 1.1, construct]

3.1 The projections from R are smooth of relative dimensions dim V and dim U. Their smooth BM pullbacks shift by twice those dimensions. The intrinsic index of [F2] on the first quotient is i+2 dim U, on the second i+2 dim V, and on R it is i+2 dim U+2 dim V. Thus the comparison has intrinsic degree zero. The same principal-bundle identity shows compatibility with external products and every equivariant morphism of Y. Proper maps remain proper on the associated quotients; smooth maps remain smooth, and ordinary base change identifies their operations on the common model. Thus (2) is a natural comparison of operations, not just a vector-space isomorphism. Exactly this argument handles any two induction presentations used in flags, with their common frame products. There is no parabolic category silently substituted for the proved GL-product category: parabolics are represented by the actual induced varieties S with acting group G. [F2, F3, F4, F5, step 2.1]

4.1 Steps 1.1–3.1 prove the induced-variety descriptions, the canonical degree-preserving comparison, its product-resolution cocycle and naturality for the stated operations. AC enters only through [A1]. [A1, step 1.1, step 2.1, step 3.1] ∎
