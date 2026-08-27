---
id: fs-punctured-domain-functions-must-be-unbounded
kind: false-statement
title: "FALSE: every holomorphic function on a punctured several-variable domain is unbounded near the puncture"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.6"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $m\ge2$ and $f$ is holomorphic on a punctured neighborhood of
$0\in\mathbb C^m$, then $f$ must be unbounded near $0$.

## Facts & Assumptions

**Given:** The bounded coordinate function $f(z)=z_1$ on
$\Delta_1^m\setminus\{0\}$ with $m\ge2$.

[L1] A holomorphic function on a punctured several-variable domain extends
holomorphically across the missing point
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

## Refutation

**Proof technique:** direct.

1.1 The function $f(z)=z_1$ is holomorphic on $\Delta_1^m\setminus\{0\}$ and satisfies $|f(z)|\le1$ there, so it is bounded near the puncture. [given, algebra]

2.1 Step 1.1 already contradicts the displayed claim, and [L1] explains why no singularity is hiding here: the function extends holomorphically across $0$ as the same coordinate function. [step 1.1, L1] ∎
