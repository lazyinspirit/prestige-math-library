---
id: fs-ccc-spaces-are-separable
kind: false-statement
title: "Assuming choice, refuted: every ccc space is separable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-cubes-are-ccc, lem-large-cantor-cubes-are-not-separable]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Countable chain condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_chain_condition"
    - title: "Cantor cube (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_cube"
pipeline_run: null
---
## Statement
Every ccc space is separable.
## Facts & Assumptions
**Given:** The Axiom of Choice and an index set $I$ with $|I|>2^{\aleph_0}$.

[L1] Under choice every Cantor cube $2^I$ satisfies ccc ([[thm-cantor-cubes-are-ccc]]).

[L2] Under choice, $|I|>2^{\aleph_0}$ implies that $2^I$ is not separable ([[lem-large-cantor-cubes-are-not-separable]]).

## Refutation

**Proof technique:** direct.

1.1 Let $X=2^I$ with its product topology. [given]

1.2 The space $X$ satisfies the hypothesis of the proposed implication because it is ccc by [L1]. [L1]

2.1 The same space fails the proposed conclusion because it is not separable by [L2]. [step 1.1, L2]

3.1 Thus $X$ is a ccc nonseparable space, which refutes the statement. [step 1.2, step 2.1] ∎
