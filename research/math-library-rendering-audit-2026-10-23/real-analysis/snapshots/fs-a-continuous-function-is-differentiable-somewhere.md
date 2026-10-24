---
id: fs-a-continuous-function-is-differentiable-somewhere
kind: false-statement
title: "FALSE: every continuous real function is differentiable somewhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-uniform-limit-of-smooth-functions-need-not-be-differentiable]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, historical introduction and Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

**False claim:** every continuous function $f:\mathbb R\to\mathbb R$ is
differentiable at at least one real point.

## Facts & Assumptions

**Given:** The universal claim in the Statement.

[L1] There is a sequence of smooth functions converging uniformly on $\mathbb R$ to a continuous function which is differentiable at no real point ([[cor-uniform-limit-of-smooth-functions-need-not-be-differentiable]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every continuous real function is differentiable somewhere. [assume-contra]

1.2 Let $W$ be the continuous nowhere-differentiable function whose existence is asserted by [L1]. [L1, choose]

2.1 The assumption in step 1.1 makes $W$ differentiable at some real point, contradicting [L1]. Therefore the universal claim is false. [step 1.1, step 1.2, L1, discharge-contradiction] ∎
