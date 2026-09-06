---
id: ex-zero-dimensional-rings-cohen-macaulay
title: A zero-dimensional local ring is Cohen--Macaulay
kind: example
status: published
origin: pipeline
deps: [cor-zero-dimensional-local-modules-are-cohen-macaulay]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

Let $A=k[\varepsilon]/(\varepsilon^2)$. This nonreduced local Artinian ring
is Cohen--Macaulay of dimension $0$.

## Facts & Assumptions

**Given:** the unique prime and maximal ideal of $A$ is $(\varepsilon)$.

## Verification

**Proof technique:** direct.

1.1 Since $\operatorname{Spec}(A)$ has one point, $\dim A=0$. The element $\varepsilon$ is a zero divisor, so no positive-length regular sequence lies in the maximal ideal and $\operatorname{depth}A=0$. [given]

2.1 Thus depth equals dimension. Equivalently, apply the general zero-dimensional corollary to the finite $A$-module $A$. [step 1.1, algebra] ∎
