---
id: cor-infinite-dimensional-closed-unit-ball-is-not-compact
kind: corollary
title: "In an infinite-dimensional normed space the closed unit ball is not compact"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-closed-unit-ball-compact-iff-finite-dimensional]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space that admits no ordered basis of finite length. Then
its closed unit ball

$$\overline B_X:=\{x\in X:\|x\|\le1\}$$

is not compact.

## Facts & Assumptions

**Given:** A normed space $X$ with no ordered basis of finite length.

[L1] The closed unit ball is compact if and only if the space admits an ordered
basis of finite length
([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

## Proof

**Proof technique:** direct.

1.1 If $\overline B_X$ were compact, [L1] would force $X$ to admit an ordered basis of finite length. [L1, assume-contra]

2.1 That contradicts the hypothesis, so $\overline B_X$ is not compact. [step 1.1, discharge-contradiction] ∎
