---
id: fs-every-hausdorff-compactification-is-stone-cech
kind: false-statement
title: "FALSE: every Hausdorff compactification has the Stone–Čech extension property"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compactification-of-a-tychonoff-space, def-stone-cech-compactification, def-one-point-compactification, thm-one-point-compactification-properties, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

Every Hausdorff compactification has the Stone–Čech extension property.

## Facts & Assumptions

**Given:** The discrete naturals, their one-point compactification $\mathbb N^*$, and the parity map $p:\mathbb N\to[0,1]$.

[L1] The one-point compactification of a locally compact Hausdorff noncompact space is a compact Hausdorff space in which the original space is dense ([[thm-one-point-compactification-properties]]).

## Refutation

**Proof technique:** contradiction.

1.1 Discrete $\mathbb N$ is locally compact, Hausdorff, and noncompact, so [L1] makes $\mathbb N^*$ a Hausdorff compactification. [L1]

1.2 Suppose it had the Stone–Čech property. Its parity map would then extend continuously to $\mathbb N^*$. [assume-contra]

2.1 The same cofinite-neighbourhood argument as follows directly from [[def-one-point-compactification]]: continuity at $\infty$ would make $p$ eventually lie in an interval of radius $1/3$, while arbitrarily large even and odd naturals have values $0$ and $1$. This is impossible. [step 1.2]

3.1 Therefore this Hausdorff compactification is not Stone–Čech, refuting the displayed statement. [step 1.1, step 2.1, discharge-contradiction] ∎
