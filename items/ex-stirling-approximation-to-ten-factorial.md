---
id: ex-stirling-approximation-to-ten-factorial
kind: example
title: "Stirling's approximation for 10!"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-gamma-factorial-values,
       thm-stirling-formula-gamma]
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
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §6"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

Using Stirling's leading term at $z=11$ gives

$$10!=\Gamma(11)\approx \sqrt{2\pi}\,11^{21/2}e^{-11}\approx 3.60\times10^6,$$

while the exact value is $3{,}628{,}800$.

## Facts & Assumptions

**Given:** Stirling's asymptotic and the factorial values of Gamma.

[L1] $\Gamma(n+1)=n!$ for integers $n\ge0$ ([[cor-gamma-factorial-values]]).

[L2] Stirling's formula for Gamma is $\Gamma(z)\sim\sqrt{2\pi}\,z^{z-1/2}e^{-z}$ on the positive real axis as part of the sectorial asymptotic ([[thm-stirling-formula-gamma]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $10!=\Gamma(11)$. [L1, given]

2.1 Applying [L2] at $z=11$ gives the displayed leading-term approximation. The comparison with the exact factorial from step 1.1 shows the scale and the size of the first neglected correction. [step 1.1, L2, algebra] ∎
