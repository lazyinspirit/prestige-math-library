---
id: cor-gamma-factorial-values
kind: corollary
title: "Gamma at the positive integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-functional-equation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(iv)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every integer $n\ge0$,

$$\Gamma(n+1)=n!.$$

## Facts & Assumptions

**Given:** A nonnegative integer $n$.

[L1] On the right half-plane, $\Gamma(z+1)=z\Gamma(z)$
([[thm-gamma-functional-equation]]).

## Proof

**Proof technique:** direct.

1.1 Directly from the defining integral, $\Gamma(1)=\int_0^\infty e^{-t}\,dt=1$. [given]

2.1 Repeatedly applying [L1] gives $\Gamma(n+1)=n\Gamma(n)=\cdots=n! \Gamma(1)=n!$. [step 1.1, L1, algebra] ∎
