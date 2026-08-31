---
id: ex-a-degreewise-split-sequence-with-nonzero-connecting-map
kind: example
title: "A degreewise split sequence with nonzero connecting map"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign,
       thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Take the identity map $1_{\mathbb Z[0]}:\mathbb Z[0]\to\mathbb Z[0]$. Its
canonical cone sequence
$$0\to \mathbb Z[0]\to \operatorname{Cone}(1_{\mathbb Z[0]})\to \mathbb Z[1]\to0$$
is degreewise split short exact, but its connecting morphism
$$H_1(\mathbb Z[1])\to H_0(\mathbb Z[0])$$
is nonzero.

## Facts & Assumptions

**Given:** The identity map on the stalk complex $\mathbb Z[0]$.

[L1] Every canonical cone sequence is degreewise split short exact ([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L2] For the identity map, the connecting morphism agrees with the shifted identity up to sign ([[prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]]).

## Verification

**Proof technique:** direct.

1.1 The displayed cone sequence is degreewise split by [L1]. [L1, given]

2.1 The source $H_1(\mathbb Z[1])$ and target $H_0(\mathbb Z[0])$ are both isomorphic to $\mathbb Z$, and [L2] identifies the connecting map with $\pm1$ on that group. Hence it is nonzero. [L2, step 1.1, algebra] ∎

