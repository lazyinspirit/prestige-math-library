---
id: ex-gamma-values-at-half-integers-and-negative-half-integers
kind: example
title: "Half-integer and negative-half-integer values of Gamma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-gamma-one-half-value,
       thm-gamma-functional-equation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

$$\Gamma(3/2)=\frac{\sqrt{\pi}}{2},\qquad \Gamma(5/2)=\frac{3\sqrt{\pi}}{4},\qquad \Gamma(-1/2)=-2\sqrt{\pi}.$$

## Facts & Assumptions

**Given:** $\Gamma(1/2)=\sqrt{\pi}$ and the functional equation.

[L1] $\Gamma(1/2)=\sqrt{\pi}$ ([[cor-gamma-one-half-value]]).

[L2] $\Gamma(z+1)=z\Gamma(z)$ ([[thm-gamma-functional-equation]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L2] at $z=1/2$ and $z=3/2$ gives $\Gamma(3/2)=\tfrac12\Gamma(1/2)$ and $\Gamma(5/2)=\tfrac32\Gamma(3/2)$. [L2, given]

2.1 Applying [L2] at $z=-1/2$ gives $\Gamma(1/2)=(-1/2)\Gamma(-1/2)$. Substituting [L1] into step 1.1 and this last identity yields the three displayed values. [step 1.1, L1, L2, algebra] ∎
