---
id: thm-left-derived-functors-form-a-homological-delta-functor
kind: theorem
title: "Left derived functors form a homological delta functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homological-delta-functor, def-connecting-map-for-left-derived-functors, lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts, thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, cor-the-long-exact-homology-sequence-is-natural]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, let $P$ be supplied
projective resolution data on all objects of $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be an additive right exact functor. Then the additive functors
$$L_n^PF:\mathcal A\to\mathcal B,\qquad n\geq 0,$$
together with the connecting maps of
[[def-connecting-map-for-left-derived-functors]], form a homological delta
functor on $\mathcal A$. Moreover $L_0^PF$ is naturally isomorphic to $F$.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ in $\mathcal A$ and
an integer $n>0$.

[L1] Each $L_n^PF$ is an additive functor
([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L2] Item 9 supplies connecting maps from a chosen horseshoe construction, and
item 10 makes them independent of that choice
([[def-connecting-map-for-left-derived-functors]],
[[lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts]]).

[L3] The long exact homology sequence of a short exact sequence of complexes is
natural
([[cor-the-long-exact-homology-sequence-is-natural]]).

[L4] The zeroth left derived functor of a right exact functor recovers the
original functor
([[thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]]).

[L5] A homological delta functor is exactly the data listed in
[[def-homological-delta-functor]].

## Proof

**Proof technique:** direct.

1.1 By [L2], choose any horseshoe middle resolution for the given short exact sequence and define the connecting maps from its long exact homology sequence. Using [L3], that horseshoe sequence yields an exact long sequence $$\cdots\to L_n^PF(A')\to L_n^PF(A)\to L_n^PF(A'')\xrightarrow{\partial_n}L_{n-1}^PF(A')\to\cdots,$$ and item 10 ensures that this sequence depends only on the original short exact sequence, not on the auxiliary horseshoe data. [L2, L3, given, construct]

2.1 For a morphism of short exact sequences in $\mathcal A$, the generalized comparison assertion in [L2] supplies a compatible morphism between chosen horseshoe sequences. Apply [L3] to it. The connecting squares commute on the horseshoe level, and [L2] transports that naturality to the fixed datum $P$. Together with the additivity from [L1], this is exactly the homological delta-functor structure required by [L5]. [L1, L2, L3, L5, step 1.1, algebra]

3.1 The degree-zero term is naturally isomorphic to $F$ by [L4]. Hence the left derived functors form a homological delta functor with degree zero equal to the original right exact functor. [L4, step 2.1] ∎
