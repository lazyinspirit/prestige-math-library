---
id: prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields
kind: proposition
title: "Closed constant-rank one-forms define integrable hyperplane fields"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-codimension-one-frobenius-criterion, def-integrable-distribution]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

If $\alpha$ is a nowhere-zero closed one-form, then $\ker\alpha$ is an integrable hyperplane distribution.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$. ([[cor-codimension-one-frobenius-criterion]]).

## Proof

**Proof technique:** direct.

1.1 A nowhere-zero one-form has constant rank one and defines a smooth hyperplane distribution. [F1, given]

2.1 Since $d\alpha=0$, one has $\alpha\wedge d\alpha=0$, so the codimension-one criterion gives integrability. [step 1.1] ∎

