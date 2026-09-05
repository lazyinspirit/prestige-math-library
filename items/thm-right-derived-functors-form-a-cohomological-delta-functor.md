---
id: thm-right-derived-functors-form-a-cohomological-delta-functor
kind: theorem
title: "Right derived functors form a cohomological delta functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cohomological-delta-functor, thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, thm-horseshoe-lemma-for-injective-resolutions, thm-horseshoe-lemma-for-projective-resolutions, thm-long-exact-sequence-in-cohomology, thm-naturality-of-the-cohomology-connecting-morphism, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, let $I$ be supplied
injective resolution data on all objects of $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be an additive left exact functor. Then the additive functors
$$R_I^nF:\mathcal A\to\mathcal B,\qquad n\geq 0,$$
admit connecting maps that make them into a cohomological delta functor on
$\mathcal A$, and $R_I^0F$ is naturally isomorphic to $F$.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ in $\mathcal A$ and
an integer $n\geq 0$.

[L1] Each $R_I^nF$ is an additive functor
([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L2] The injective horseshoe is obtained by dualizing the projective horseshoe;
the latter fits into a degreewise split short exact sequence of augmented
complexes. Consequently the injective horseshoe also carries the dual
degreewise split short exact sequence of cochain complexes
([[thm-horseshoe-lemma-for-injective-resolutions]],
[[thm-horseshoe-lemma-for-projective-resolutions]]).

[L3] Applying $F$ to a short exact sequence of injective resolution complexes
produces a long exact sequence in cohomology, natural under morphisms of such
sequences
([[thm-long-exact-sequence-in-cohomology]],
[[thm-naturality-of-the-cohomology-connecting-morphism]]).

[L4] Replacing the supplied injective resolution datum at one object changes
the derived functor only by natural isomorphism
([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

[L5] The zeroth right derived functor of a left exact functor recovers the
original functor
([[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]]).

[L6] A cohomological delta functor is exactly the data listed in
[[def-cohomological-delta-functor]].

[L7] Different injective comparison extensions of the same object morphism
induce the same maps on cohomology
([[lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose the injective horseshoe from [L2]. Its degreewise split short exact sequence remains split exact after applying the additive functor $F$, so it becomes a short exact sequence of cochain complexes in $\mathcal B$. Now [L3] gives its long exact cohomology sequence, and [L4] transports the middle cohomology groups to the fixed datum $I$. This defines connecting maps $$\partial^n:R_I^nF(A'')\to R_I^{n+1}F(A').$$ [L2, L3, L4, given, construct]

2.1 Given a morphism of short exact sequences, use the degreewise biproduct form of the two injective horseshoes and construct compatible comparison maps by the dual comparison induction: injectivity extends the off-diagonal correction at each degree. By [L7], different comparison extensions induce the same maps on cohomology. Naturality of the cohomology connecting morphism in [L3] then makes the connecting squares commute, and [L1] supplies additivity. Therefore [L6] identifies $(R_I^nF,\partial^n)$ as a cohomological delta functor on $\mathcal A$. [L1, L2, L3, L4, L6, L7, step 1.1, construct]

3.1 The degree-zero term is naturally isomorphic to $F$ by [L5]. [L5, step 2.1] ∎
