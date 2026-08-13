---
id: fs-circumference-to-radius-ratio-is-pi
kind: false-statement
title: "False: circumference divided by radius equals pi"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-circle-circumference-diameter-ratio-is-pi, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every circle of radius $r>0$, its circumference $C(r)$ satisfies $C(r)/r=\pi$.

## Facts & Assumptions

**Given:** A radius $r>0$.

[L1] A circle of radius $r>0$ satisfies $C(r)=2\pi r$, has diameter $d(r)=2r$, and obeys $C(r)/d(r)=\pi$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

[L2] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

## Refutation

**Proof technique:** direct.

1.1 Since $r>0$, division in [L1] gives $C(r)/r=2\pi$. [given, L1, algebra]

1.2 By [L2], $2\pi\ne\pi$, so the asserted ratio is false. [L2, algebra]

2.1 The valid normalization is circumference divided by diameter: [L1] gives $C(r)/(2r)=\pi$. The false statement omits this factor of $2$. [step 1.1, step 1.2, L1, algebra] ∎
