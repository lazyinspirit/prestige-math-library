---
id: cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor
kind: counterexample
title: "A nonnatural choice of connecting maps does not form a delta functor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-homological-delta-functor, prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws, thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact, prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]
proof_strategy: direct
verification:
  audited: 2026-09-12
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement refuted

A family of additive functors together with arbitrary exact connecting maps is
automatically a homological delta functor.
## Facts & Assumptions

**Given:** The ordinary homology delta functor on complexes and the canonical cone sequence of the identity on the stalk complex $\mathbb Z[0]$.

[L1] A homological delta functor requires both exactness and naturality of the connecting maps ([[def-homological-delta-functor]]).

[L2] Homology of complexes is a genuine homological delta functor ([[prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws]]).

[L3] [[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]] makes the cone sequence of $1_{\mathbb Z[0]}$ short exact, while [[prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]] identifies its map $H_1(\mathbb Z[1])\to H_0(\mathbb Z[0])$ with $\pm1:\mathbb Z\to\mathbb Z$, hence nonzero.

## Counterexample
1.1 Start with the homology delta functor from [L2]. Keep every functor $H_n$ unchanged and keep every connecting map unchanged except on one chosen short exact sequence with nonzero connector from [L3], where replace $\partial$ by $-\partial$. Each individual long exact sequence remains exact. [L2, L3, given, construct]

2.1 Choose a distinct isomorphic copy of the cone sequence in [L3], and alter the connector on only the original sequence. The chosen isomorphism of short exact sequences induces isomorphisms on the two homology groups. Before the alteration, naturality identifies the two routes around the connecting square with the same map $\pm1:\mathbb Z\to\mathbb Z$. After changing exactly one connector to its negative, the two routes are opposite maps $\pm1$ and $\mp1$, which are unequal over $\mathbb Z$. Hence this naturality square fails, and [L1] shows that the altered family is not a homological delta functor. [L1, L2, L3, step 1.1, algebra] ∎
