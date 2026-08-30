---
id: ex-beta-one-half-one-half-equals-pi
kind: example
title: "$B(1/2,1/2)=\\pi$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-gamma-one-half-value,
       cor-gamma-factorial-values,
       thm-beta-gamma-identity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vi)-(vii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

$$B(1/2,1/2)=\pi.$$

## Facts & Assumptions

**Given:** The Beta-Gamma identity and the value $\Gamma(1/2)=\sqrt{\pi}$.

[L1] $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ on the right half-planes ([[thm-beta-gamma-identity]]).

[L2] $\Gamma(1/2)=\sqrt{\pi}$ ([[cor-gamma-one-half-value]]).

[L3] $\Gamma(1)=1$ ([[cor-gamma-factorial-values]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $p=q=1/2$ into [L1] to obtain $B(1/2,1/2)=\Gamma(1/2)^2/\Gamma(1)$. [L1, given]

2.1 By [L2], $\Gamma(1/2)^2=\pi$, and [L3] gives $\Gamma(1)=1$. Therefore step 1.1 simplifies to $B(1/2,1/2)=\pi$. [step 1.1, L2, L3, algebra] ∎
