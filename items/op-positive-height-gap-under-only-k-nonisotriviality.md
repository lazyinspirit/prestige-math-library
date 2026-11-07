---
id: op-positive-height-gap-under-only-k-nonisotriviality
kind: open-problem
title: Positive canonical-height gap assuming only non-isotriviality over K
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-rational-map-on-projective-line-degree
  - def-dynamical-canonical-height-over-function-field
  - def-isotrivial-rational-map-over-function-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Remark 1.7(i)"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Laura DeMarco, Bifurcations, intersections, and heights, Theorem 1.2 and proof"
      url: "https://msp.org/ant/2016/10-5/ant-v10-n5-p.pdf"
verification:
  precheck: n/a
---

## Open problem

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, and let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be
a rational self-map of degree $d\ge2$ that is not isotrivial over $K$. Must
there exist $\epsilon>0$ such that the set
$$\{P\in\mathbb P^1(K):\widehat h_{\phi,K}(P)<\epsilon\}$$
is finite?

## Open problem references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[def-rational-map-on-projective-line-degree]]

[[def-dynamical-canonical-height-over-function-field]]

[[def-isotrivial-rational-map-over-function-field]]

[Baker, Remark 1.7(i)](https://arxiv.org/pdf/math/0601046v2)

[DeMarco, Theorem 1.2 and proof](https://msp.org/ant/2016/10-5/ant-v10-n5-p.pdf)

## Status

Baker recorded this weaker hypothesis as unresolved in 2006. DeMarco's
Theorem 1.2 proves the positive-gap conclusion for $K=\mathbb C(V)$, where
$V$ is a complex curve. This item retains the question over general
one-variable function fields; the cited complex result does not settle the
arbitrary-characteristic case. The shared design should be reconciled with
this later complex-field result.
