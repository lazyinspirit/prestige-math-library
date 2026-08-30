---
id: cex-a-rank-drop-at-a-point-need-not-persist-locally
kind: counterexample
title: "A rank drop at one point need not persist locally"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-constant-rank-at-one-point-implies-constant-rank-nearby, lem-derivative-of-a-power, thm-total-derivative-computes-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Maps of Constant Rank"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement refuted

If a smooth map has rank $r$ at one point, then it has rank $r$ on some
neighbourhood of that point.

## Facts & Assumptions

**Given:** The map $f(x)=x^2$ on $\mathbb R$.

[F1] The displayed claim is the false statement under discussion
([[fs-constant-rank-at-one-point-implies-constant-rank-nearby]]).

[L1] The derivative of $x^2$ is $2x$
([[lem-derivative-of-a-power]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Counterexample
**Proof technique:** direct.

1.1 By [L1], the derivative at $0$ is $0$, so the rank at $0$ is $0$. [L1, given]

2.1 For every $x\neq0$, the derivative is $2x\neq0$, so the rank is $1$ at $x$. Thus no neighbourhood of $0$ has constant rank $0$. [L1, step 1.1]

3.1 Hence $f$ refutes the claim in [F1]. [F1, step 1.1, step 2.1] ∎