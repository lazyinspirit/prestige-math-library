---
id: cex-threefold-classification-is-not-global
kind: counterexample
title: "The elliptic-parabolic-hyperbolic trichotomy is not a global taxonomy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-tricomi-equation-changes-type,
       rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement refuted

Every partial differential equation belongs globally to exactly one of the
three classes elliptic, parabolic, or hyperbolic.

## Facts & Assumptions

**Given:** The Tricomi operator and the fourth-order biharmonic operator
$\Delta^2$.

[L1] The Tricomi equation changes type across $y=0$
([[ex-tricomi-equation-changes-type]]).

[L2] The threefold classification on this page is only for scalar real
second-order principal symbols ([[rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the single operator $y\,u_{xx}+u_{yy}$ is elliptic on one open region, hyperbolic on another, and degenerate on the separating line, so even within second order one operator need not belong globally to just one of the three names. [L1]

2.1 The biharmonic equation $\Delta^2u=0$ has order $4$, so [L2] says the second-order trichotomy does not classify it at all; the claimed global taxonomy therefore fails both because some operators change type from point to point and because others lie outside the stated second-order scope. [L2, step 1.1] ∎
