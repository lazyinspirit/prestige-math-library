---
id: ex-reflection-formula-at-one-half
kind: example
title: "Checking the reflection formula at z=1/2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-gamma-one-half-value,
       thm-euler-reflection-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

At $z=1/2$, the reflection formula reads $\Gamma(1/2)^2=\pi$.

## Facts & Assumptions

**Given:** The reflection formula and the value of Gamma at one half.

[L1] $\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$
([[thm-euler-reflection-formula]]).

[L2] $\Gamma(1/2)=\sqrt{\pi}$ ([[cor-gamma-one-half-value]]).

## Verification

**Proof technique:** direct.

1.1 Substituting $z=1/2$ into [L1] gives $\Gamma(1/2)^2=\pi/\sin(\pi/2)=\pi$. [L1, given]

2.1 This agrees with [L2], since $(\sqrt{\pi})^2=\pi$. [step 1.1, L2, algebra] ∎