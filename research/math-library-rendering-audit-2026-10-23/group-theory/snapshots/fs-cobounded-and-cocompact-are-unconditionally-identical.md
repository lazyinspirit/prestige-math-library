---
id: fs-cobounded-and-cocompact-are-unconditionally-identical
kind: false-statement
title: "FALSE: cobounded and cocompact are identical without extra hypotheses"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-isometric-proper-and-cobounded-actions-on-metric-spaces, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Statement

Cobounded and cocompact are identical without extra hypotheses.

## Facts & Assumptions

**Given:** The trivial action of the trivial group on the open interval $(0,1)$ with its usual metric. Here cocompact means that the orbit space of the action is compact.

[L1] Coboundedness means that some bounded subset has orbit-union equal to the whole space ([[def-isometric-proper-and-cobounded-actions-on-metric-spaces]]).

[L2] The absolute-value metric makes $\mathbb R$ a metric space, hence its open interval $(0,1)$ inherits the usual metric ([[lem-real-line-is-a-metric-space]]).

## Refutation

**Proof technique:** direct.

1.1 The interval $(0,1)$ is bounded, so for the trivial action its single orbit already covers the space. Thus the action is cobounded by [L1]. [L1, L2]

1.2 The orbit space is again $(0,1)$, which is not compact: the open cover $U_n := (0,1-1/n)$ for $n \ge 2$ covers it, but every finite subfamily misses points sufficiently close to $1$. So the action is not cocompact. [L2, algebra]

2.1 Step 1.1 gives coboundedness while step 1.2 denies cocompactness, refuting the statement. [step 1.1, step 1.2] ∎
