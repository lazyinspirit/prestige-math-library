---
id: def-one-variable-function-field-dynamical-setting
kind: definition
title: "One-variable function-field setting for dynamics"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-algebraic-curve-over-field
  - def-projective-morphism-pre-proj
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§1 and §2.2"
verification: {}
proof_strategy: direct
---

## Definition

A **one-variable function-field datum** consists of a field $k$, a smooth projective geometrically integral curve $B/k$, and its function field $K=k(B)$. The field $k$ is the full constant field in this datum. If $k$ is finite, then $K$ is a global function field, meaning a finitely generated extension of a finite field of transcendence degree one with no larger algebraic constant subfield. Each closed point $v$ of $B$ determines a place of $K$ and a completion $K_v$.

## Definition references

[[def-algebraic-curve-over-field]]

[[def-projective-morphism-pre-proj]]


## Facts & Assumptions

**Given:** A field $k$ and a smooth projective geometrically integral curve $B/k$ with function field $K=k(B)$.

[F1] A curve is a finite-type separated geometrically integral one-dimensional scheme; smoothness and geometric integrality are defined there, and projective means its structure morphism factors through a closed immersion into projective space. ([[def-algebraic-curve-over-field]], [[def-projective-morphism-pre-proj]])

## Verification

1.1 The function field of an integral curve is a field of transcendence degree one over its base field, so the datum has the stated one-variable function-field property. [given, F1, algebra]

2.1 If $\alpha\in K$ is algebraic over $k$, put $E=k(\alpha)$. Geometric integrality makes $K\otimes_k E$ a domain, by localizing an affine coordinate domain after base extension. The inclusion $E\subseteq K$ remains injective after tensoring with the field $E$ (use the finite basis $1,\alpha,\ldots,\alpha^{m-1}$ of the second factor to identify the tensor map with the coordinatewise injection $E^m\hookrightarrow K^m$, where $m=[E:k]$), so $E\otimes_k E$ is a subring of this domain. If the minimal polynomial $f$ of $\alpha$ had degree $m>1$, the presentation $E\otimes_k E\cong E[T]/(f)$ would give nonzero classes of $T-\alpha$ and $f/(T-\alpha)$ with product zero, a contradiction, including in inseparable characteristic. Thus $E=k$, proving the full constant-field assertion for every $k$. If $k$ is finite, step 1.1 now gives exactly the stated global-function-field convention. [given, F1, step 1.1, algebra] ∎
