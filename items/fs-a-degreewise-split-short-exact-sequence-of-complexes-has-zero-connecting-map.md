---
id: fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map
kind: false-statement
title: "FALSE: a degreewise split short exact sequence of complexes has zero connecting map"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact,
       prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]
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

## Statement

Every degreewise split short exact sequence of complexes has zero connecting
map.

## Facts & Assumptions

**Given:** The degreewise split cone sequence of the identity map on $\mathbb Z[0]$.

[A1] The statement refuted is: every degreewise split short exact sequence of complexes has zero connecting map.

[L1] Every canonical cone sequence is degreewise split short exact ([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L2] For the identity map, the connecting morphism of the canonical cone sequence is the shifted identity up to sign ([[prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the cone sequence of $1_{\mathbb Z[0]}$ is degreewise split short exact. [L1, given]

2.1 The stalk complex $\mathbb Z[0]$ has $\mathbb Z$ in degree $0$ and $0$ elsewhere, so $H_0(\mathbb Z[0])\cong\mathbb Z$. Likewise $H_1(\mathbb Z[1])\cong\mathbb Z$. Under these identifications, [L2] says the connecting morphism is $\pm1$ on $\mathbb Z$, hence nonzero. [L2, step 1.1, algebra]

3.1 This gives a degreewise split short exact sequence whose connecting morphism is nonzero, contradicting [A1]. Therefore not every degreewise split short exact sequence has zero connecting map. [A1, step 1.1, step 2.1, algebra] ∎
