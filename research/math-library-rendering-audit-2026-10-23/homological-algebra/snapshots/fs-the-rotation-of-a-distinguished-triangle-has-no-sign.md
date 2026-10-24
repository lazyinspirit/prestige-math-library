---
id: fs-the-rotation-of-a-distinguished-triangle-has-no-sign
kind: false-statement
title: "The rotation of a distinguished triangle has no sign"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rotation-of-a-triangle, rem-triangulated-sign-convention]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Statement

The left rotation of $X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]$
ends in $f[1]$ without a sign.

## Refutation

**Given:** The displayed data.

1.1 The declared left rotation ends in $-f[1]$, not $f[1]$. [given]

2.1 Accordingly the unrolled translate sequence has alternating signed translated arrows; omitting the sign changes the fixed library convention and cannot be used in its cone formulas. [step 1.1, given] ∎
