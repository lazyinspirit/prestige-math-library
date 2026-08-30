---
id: fs-constant-rank-at-one-point-implies-constant-rank-nearby
kind: false-statement
title: "Rank at one point need not determine nearby rank"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank, lem-derivative-of-a-power, thm-total-derivative-computes-directional-and-partial-derivatives]
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

## Statement

**False claim:** if a smooth map has rank $r$ at one point, then it has rank
$r$ on some neighbourhood of that point.

## Facts & Assumptions

**Given:** The smooth map $f:\mathbb R\to\mathbb R$, $f(x)=x^2$.

[L1] The derivative of $x^2$ is $2x$
([[lem-derivative-of-a-power]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L2] Local constancy of rank requires a neighbourhood conclusion stronger than a
single-point rank computation
([[prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank]]).

## Refutation
**Proof technique:** direct.

1.1 By [L1], $df_0=0$, so the rank at $0$ is $0$. [L1, given]

2.1 For every $x\neq0$, the derivative is $2x\neq0$, so the rank at $x$ is $1$. Thus every neighbourhood of $0$ contains points of rank $1$. [L1, step 1.1]

3.1 Therefore the rank at $0$ does not persist locally, which refutes the claim and shows why the extra maximal-rank hypothesis in [L2] matters. [L2, step 1.1, step 2.1] ∎