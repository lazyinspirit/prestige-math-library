---
id: cex-rational-points-in-unit-square-have-no-jordan-content
kind: counterexample
title: "The rational points of $[0,1]^2$ form a bounded null set that is not Jordan measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jordan-boundary-criterion, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, thm-rationals-countable, thm-n-cross-n-countable, def-countable, lem-q-and-irrationals-dense-r, def-metric-interior-closure-boundary, lem-compact-null-iff-content-zero-in-rn, thm-jordan-content-and-indicator-integrability, ex-unit-box-volume-and-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "A. Treibergs, MATH 3225 final solutions"
      url: "https://www.math.utah.edu/~treiberg/M3225_Final_Solutions.pdf"
pipeline_run: null
---

## Statement refuted

Every bounded null subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** $E=(\mathbb Q\cap[0,1])^2$.

[L1] $\mathbb Q$ and $\mathbb N^2$ are countable ([[thm-rationals-countable]], [[thm-n-cross-n-countable]], [[def-countable]]).

[L2] Rationals and irrationals are dense ([[lem-q-and-irrationals-dense-r]]).

[L3] Jordan measurability is equivalent to a null boundary ([[thm-jordan-boundary-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $E$ is countable by [L1]. Enumerate its points and cover the $j$-th singleton by a square with volume below $\varepsilon2^{-j-1}$; countable-union closure gives nullity.   [L1, given]

1.2 By [L2], both $E$ and its complement are dense at every point of the unit square, so $\partial E=[0,1]^2$.   [L2, given]

2.1 The unit square has content $1$, by [[ex-unit-box-volume-and-integral]] and [[thm-jordan-content-and-indicator-integrability]], hence is not null ([[lem-compact-null-iff-content-zero-in-rn]]).  [step 1.2]

3.1 The boundary criterion [L3] makes $E$ non-Jordan-measurable, despite nullity.  [step 1.1, step 2.1, L3] ∎
