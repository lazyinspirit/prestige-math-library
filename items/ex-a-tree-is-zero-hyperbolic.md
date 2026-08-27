---
id: ex-a-tree-is-zero-hyperbolic
kind: example
title: "Every tree is 0-hyperbolic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-cayley-trees-are-zero-hyperbolic]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Example

Every tree is $0$-hyperbolic.

## Facts & Assumptions

**Given:** A tree $T$.

[L1] Cayley trees are $0$-hyperbolic
([[prop-cayley-trees-are-zero-hyperbolic]]).

## Verification

**Proof technique:** direct.

1.1 The proposition [L1] states exactly that every tree is $0$-hyperbolic. [L1]

2.1 Therefore $T$ is a model example of a hyperbolic space with the best possible constant $\delta=0$. [step 1.1] ∎ 