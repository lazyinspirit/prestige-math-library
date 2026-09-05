---
id: lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor
kind: lemma
title: "The horseshoe construction stays short exact after applying a right exact functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-exact-and-right-exact-functor, thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive, def-short-exact-sequence-of-complexes, thm-horseshoe-lemma-for-projective-resolutions, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise]
proof_strategy: direct
verification:
  audited: 2026-09-05
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

Let $F:\mathcal A\to\mathcal B$ be a right exact functor between abelian
categories, and let
$$0\to A'\to A\to A''\to0$$
be a short exact sequence in $\mathcal A$. If
$$0\to P'_\bullet\to H_\bullet\to P''_\bullet\to0$$
is a horseshoe short exact sequence of projective resolutions of
$A',A,A''$, then
$$0\to F(P'_{\bullet,\mathrm{del}})\to F(H_{\bullet,\mathrm{del}})\to F(P''_{\bullet,\mathrm{del}})\to0$$
is a short exact sequence of complexes in $\mathcal B$.
## Facts & Assumptions

**Given:** A horseshoe short exact sequence of projective resolutions over
$0\to A'\to A\to A''\to0$.

[L1] A right exact functor is additive
([[thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive]]).

[L2] The horseshoe lemma produces a degreewise split short exact sequence of
projective resolutions
([[thm-horseshoe-lemma-for-projective-resolutions]]).

[L3] Additive functors apply degreewise to complexes and chain maps
([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L4] Exactness of a sequence of complexes is equivalent to exactness in each
degree, and that is the definition of a short exact sequence of complexes
([[cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise]],
[[def-short-exact-sequence-of-complexes]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], each degree of the horseshoe row is a split short exact sequence $$0\to P'_n\to H_n\to P''_n\to0.$$ Because $F$ is additive by [L1], it preserves the biproduct decomposition carried by that split sequence, so each degree remains exact after applying $F$. [L1, L2, given, algebra]

2.1 By [L3], the degreewise images from step 1.1 assemble into a sequence of chain maps $$0\to F(P'_{\bullet,\mathrm{del}})\to F(H_{\bullet,\mathrm{del}})\to F(P''_{\bullet,\mathrm{del}})\to0.$$ Since it is exact in every degree, [L4] identifies it as a short exact sequence of complexes. [L3, L4, step 1.1, construct] ∎