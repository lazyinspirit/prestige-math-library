---
id: cor-dvr-is-a-pid
kind: corollary
title: "Every DVR is a PID"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ideals-in-a-dvr, def-principal-ideal-domain]
justified_by: []
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 20.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Every discrete valuation ring is a principal ideal domain.

## Facts & Assumptions

**Given:** A discrete valuation ring $V$.

[L1] Every nonzero ideal of a DVR is a power of its maximal ideal, hence
principal ([[thm-ideals-in-a-dvr]]).

[F1] A principal ideal domain is an integral domain in which every ideal is
principal ([[def-principal-ideal-domain]]).

## Proof

**Proof technique:** direct.

1.1 A discrete valuation ring is a domain. Its zero ideal is principal, and [L1] shows that every nonzero ideal is principal. [L1, given]

2.1 Therefore every ideal of the domain $V$ is principal, so [F1] makes $V$ a principal ideal domain. [F1, step 1.1] ∎
