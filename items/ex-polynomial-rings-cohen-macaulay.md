---
id: ex-polynomial-rings-cohen-macaulay
title: Polynomial rings are Cohen--Macaulay
kind: example
status: published
origin: pipeline
deps: [thm-polynomial-extension-of-cohen-macaulay-rings]
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

For every field $k$ and every integer $n\ge0$, the polynomial ring
$k[X_1,\ldots,X_n]$ is a
Cohen--Macaulay ring. At the homogeneous maximal ideal
$\mathfrak m=(X_1,\ldots,X_n)$, the variables form a regular system of
parameters of the local ring.

## Facts & Assumptions

**Given:** a field is a zero-dimensional Cohen--Macaulay ring.

## Verification

**Proof technique:** direct.

1.1 Iterating `thm-polynomial-extension-of-cohen-macaulay-rings` shows that $k[X_1,\ldots,X_n]$ is globally Cohen--Macaulay. [given]

2.1 In the localization at $\mathfrak m$, multiplication by $X_i$ remains injective after quotienting by the preceding variables, and the terminal quotient is $k$. Thus the displayed variables are a regular parameter system of length $n$. [step 1.1, algebra] ∎
