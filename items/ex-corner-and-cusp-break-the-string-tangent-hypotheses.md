---
id: ex-corner-and-cusp-break-the-string-tangent-hypotheses
kind: example
title: "A corner has no unique tangent and a cusp gives a zero centered chord"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-image-string-method
  - lem-centered-chord-and-unequal-step-tangent-error
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(4): the string tangent and normal projection require a regular path"
---

## Example

Two elementary paths show why regularity and nondegenerate centered chords are explicit hypotheses. The corner path is $R_c(s)=(s,0)$ for $s\le0$ and $R_c(s)=(0,s)$ for $s\ge0$. The cusp path is $R_u(s)=(s^2,0)$. For equal samples at $-h$ and $h$, the centered chord is $R(h)-R(-h)$.

## Facts & Assumptions

**Given:** The two displayed paths and any $h>0$ small enough that their samples lie in the stated parameter intervals.

[F1] [[lem-centered-chord-and-unequal-step-tangent-error]] assumes a regular $C^3$ curve and a nonzero centered chord before normalizing it.

[F2] [[alg-finite-image-string-method]] returns `geometry-failure` if an interior centered chord is zero.

## Proof

**Given:** The paths and sample spacing in the Example.

1.1 For the corner, the one-sided derivatives at $0$ are $R_c'(0^-)=(1,0)$ and $R_c'(0^+)=(0,1)$. They are distinct, so there is no single tangent at the corner. The centered chord is $R_c(h)-R_c(-h)=(h,h)$, whose unit direction is $(1,1)/\sqrt2$; it agrees with neither one-sided tangent. [given, algebra]

1.2 For the cusp, $R_u(h)=R_u(-h)=(h^2,0)$, so its centered chord is exactly zero. Also $R_u'(0)=(0,0)$, so the path is not regular there. [given, algebra]

2.1 The corner violates the differentiability/unique-tangent hypotheses of [F1], while the cusp violates regularity and makes the algorithmic centered direction undefined. By [F2], a finite string update encountering this zero chord must return `geometry-failure`; neither example can be covered by the second-order normalized-tangent estimate of [F1]. [F1, F2, step 1.1, step 1.2] ∎
