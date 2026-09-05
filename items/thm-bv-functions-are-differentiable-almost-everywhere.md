---
id: thm-bv-functions-are-differentiable-almost-everywhere
kind: theorem
title: "Every function of bounded variation is differentiable almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-variation-and-total-variation, thm-jordan-decomposition-for-bv-functions, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 14.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Every real-valued function of bounded variation on a compact interval is
differentiable almost everywhere.

## Facts & Assumptions

**Given:** Countable choice and a bounded-variation function $f : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 By [[thm-jordan-decomposition-for-bv-functions]], write $f = G-H$ with $G$ and $H$ increasing. The monotone differentiability theorem [[thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]] shows that both $G'$ and $H'$ exist almost everywhere. [given]

2.1 On the common full-measure set where both derivatives exist, $f' = G' - H'$ exists as well. Therefore $f$ is differentiable almost everywhere. [step 1.1]

3.1 Steps 1.1 and 2.1 prove the theorem. [step 1.1, step 2.1] ∎
