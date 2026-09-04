---
id: cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact
kind: corollary
title: "On an infinite-dimensional normed space, the identity operator is not compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bounded-linear-operator,
       cor-infinite-dimensional-closed-unit-ball-is-not-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space that admits no ordered basis of finite length, and let
$I_X:X\to X$ be the identity map. Then $I_X$ is bounded, but it does not carry
the closed unit ball of $X$ to a compact subset of $X$. In that standard sense,
the identity operator is not compact.

## Facts & Assumptions

**Given:** A normed space $X$ with no ordered basis of finite length, its closed
unit ball $\overline B_X$, and the identity map $I_X$.

[L1] A bounded linear operator is a linear map satisfying one global norm bound
([[def-bounded-linear-operator]]).

[L2] In this setting the closed unit ball is not compact
([[cor-infinite-dimensional-closed-unit-ball-is-not-compact]]).

## Proof

**Proof technique:** direct.

1.1 The identity map is linear and satisfies $\|I_Xx\|=\|x\|$ for every $x\in X$, so [L1] makes it a bounded linear operator. [L1, algebra]

2.1 One has $I_X[\overline B_X]=\overline B_X$. By [L2], that set is not compact. Therefore the identity operator does not send the closed unit ball to a compact subset of $X$. [L2, step 1.1] ∎

## Remarks

- This item uses only the unit-ball criterion. It does not depend on a separate
  compact-operator definition item.
