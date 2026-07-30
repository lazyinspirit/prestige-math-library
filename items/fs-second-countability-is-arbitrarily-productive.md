---
id: fs-second-countability-is-arbitrarily-productive
kind: false-statement
title: "Assuming choice and countable choice, refuted: arbitrary products of second countable spaces are second countable"
status: published
origin: session
deps: [lem-large-cantor-cubes-are-not-separable, thm-second-countable-implies-separable, def-standard-topologies, def-product-topology]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
## Statement
Assuming choice and countable choice, arbitrary products of second countable spaces are second countable.
## Facts & Assumptions
**Given:** Choice, countable choice, and an index set $I$ with $|I|>2^{\aleph_0}$.

[L1] The two-point discrete space is second countable, and the product topology on the family of those factors is the Cantor cube $2^I$ ([[def-standard-topologies]], [[def-product-topology]]).

[L2] The Cantor cube $2^I$ is not separable when $|I|>2^{\aleph_0}$ ([[lem-large-cantor-cubes-are-not-separable]]).

[L3] Assuming countable choice, every second countable space is separable ([[thm-second-countable-implies-separable]]).
## Refutation

**Proof technique:** direct.

1.1 For each $i\in I$, let $X_i=\{0,1\}$ with the discrete topology; each $X_i$ is second countable. [L1]

1.2 Their product is the Cantor cube $2^I$ by [L1]. [L1]

2.1 The product $2^I$ is not separable by [L2]. [step 1.2, L2]

3.1 If $2^I$ were second countable, [L3] would make it separable, contradicting step 2.1; hence this product of second countable spaces is not second countable. [step 2.1, L3]

4.1 This family of factors refutes the claimed arbitrary-product principle. [step 1.1, step 3.1] ∎
