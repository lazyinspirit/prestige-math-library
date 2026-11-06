---
id: def-gts-degree-zero-differential-cohomology
kind: definition
title: Degree-zero differential cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-singular-cohomology-with-coefficients
  - def-de-rham-cochain-complex
dependency_roles:
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-de-rham-cochain-complex: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Definition 3.128, PDF p. 68.
---

## Definition

For a smooth manifold $M$, set $\widehat H^0(M;\mathbb Z)=H^0(M;\mathbb Z)=\mathbb Z(M)$, the locally constant integer-valued functions. Define $I:\widehat H^0\to H^0(M;\mathbb Z)$ to be the identity and $R:\widehat H^0\to\Omega^0(M)$ to send each integer-valued function to the same real-valued function. Set $\widehat H^j(M;\mathbb Z)=0$ for $j<0$.

## Definition references

[[def-singular-cohomology-with-coefficients]]

[[def-de-rham-cochain-complex]]

## Remarks

This convention is separate from the degree-$k\ge1$ smooth-singular character definition. It is required for fiber integration when the input degree equals the fiber dimension, including dimension zero.
