---
id: prop-order-of-finite-direct-product
kind: proposition
title: 'For finite groups $G$ and $H$, $|G\times H|=|G|\,|H|$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-direct-product-is-a-group, def-order-in-a-group, thm-product-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

If $G$ and $H$ are finite groups, then their external direct product is finite
and has order $|G\times H|=|G|\,|H|$.

## Facts & Assumptions

**Given:** Finite groups $G,H$.

[L1] The direct product has underlying set $G\times H$ and is a group
([[thm-external-direct-product-is-a-group]]).

[L2] The order of a finite group is the cardinality of its underlying set
([[def-order-in-a-group]]).

[L3] The Cartesian product of finite sets has cardinality the product of their
cardinalities ([[thm-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 The carrier of the direct-product group is the Cartesian product of the finite carriers $G$ and $H$. [L1, given]

2.1 By the finite product rule, $G\times H$ is finite and $|G\times H|_{\mathrm{set}}=|G|_{\mathrm{set}}|H|_{\mathrm{set}}$. [step 1.1, L3]

3.1 Reading these three cardinalities as group orders gives $|G\times H|=|G|\,|H|$. [step 2.1, L2] ∎
