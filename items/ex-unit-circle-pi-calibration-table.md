---
id: ex-unit-circle-pi-calibration-table
kind: example
title: "One unit circle gives semicircle length pi, circumference 2 pi, diameter 2, and disc area pi"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-unit-semicircle-arc-length-is-pi, thm-circle-circumference-diameter-ratio-is-pi, thm-disc-area-is-pi-r-squared]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Example

For the unit circle and its enclosed unit disc, the geometric quantities calibrated by $\pi$ are

| quantity | value | normalization giving $\pi$ |
|---|---:|---:|
| semicircle length | $\pi$ | the length itself |
| circumference | $2\pi$ | circumference divided by diameter |
| diameter | $2$ | used as the denominator above |
| disc area | $\pi$ | area divided by the square of the radius |

## Facts & Assumptions

**Given:** A circle and disc of radius $1$.

[L1] Every once-traversed unit semicircle has length $\pi$ ([[thm-unit-semicircle-arc-length-is-pi]]).

[L2] A circle of radius $r>0$ has circumference $2\pi r$, diameter $2r$, and circumference-to-diameter ratio $\pi$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

[L3] A disc of radius $r>0$ has area $\pi r^2$ ([[thm-disc-area-is-pi-r-squared]]).

## Verification

**Proof technique:** direct.

1.1 At $r=1$, [L1] gives semicircle length $\pi$. [given, L1]

1.2 At $r=1$, [L2] gives circumference $2\pi$ and diameter $2$, so their ratio is $\pi$. [given, L2, algebra]

1.3 At $r=1$, [L3] gives disc area $\pi$. [given, L3, algebra]

2.1 These three substitutions give every entry and normalization in the table. [step 1.1, step 1.2, step 1.3] ∎
