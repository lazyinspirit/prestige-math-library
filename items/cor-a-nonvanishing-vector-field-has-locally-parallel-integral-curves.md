---
id: cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves
kind: corollary
title: "A nonvanishing vector field has locally parallel integral curves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-flow-box-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Near any point where a smooth vector field does not vanish, its integral curves
are the parallel coordinate lines of a flow-box chart.

## Facts & Assumptions

**Given:** A smooth vector field $X$ and a point $p$ with $X_p\neq 0$.

[L1] Near $p$ there are coordinates in which $X=\partial/\partial u^1$ ([[thm-flow-box-theorem]]).

## Proof

**Proof technique:** direct.

1.1 In the coordinates given by [L1], the integral-curve equation for $X$ is $$ \dot u^1=1,\qquad \dot u^2=\cdots=\dot u^n=0. $$ [L1, given]

2.1 Therefore the integral curves are exactly the lines $$ t\mapsto (t+c_1,c_2,\dots,c_n), $$ which are parallel to the $u^1$-axis. [step 1.1]

3.1 So a nonvanishing vector field has locally parallel integral curves. [step 2.1] ∎
