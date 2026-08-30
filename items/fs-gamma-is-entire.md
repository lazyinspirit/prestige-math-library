---
id: fs-gamma-is-entire
kind: false-statement
title: "FALSE: the Gamma function is entire"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-meromorphic-continuation]
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
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

**False claim:** The Gamma function is entire.

## Facts & Assumptions

**Given:** The meromorphic continuation theorem for Gamma.

[L1] Gamma extends meromorphically to $\mathbb C$ with simple poles at
$0,-1,-2,\dots$ ([[thm-gamma-meromorphic-continuation]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], Gamma has a pole at $0$ and therefore is not holomorphic there. [L1, given]
2.1 An entire function is holomorphic on all of $\mathbb C$, so step 1.1 contradicts the claim. Hence Gamma is not entire. [step 1.1, algebra] ∎