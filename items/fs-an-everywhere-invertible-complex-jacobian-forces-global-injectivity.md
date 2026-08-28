---
id: fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity
kind: false-statement
title: "FALSE: an everywhere-invertible complex Jacobian forces global injectivity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 1.6"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

**False claim:** if the complex Jacobian of a holomorphic self-map is
invertible at every point, then the map is globally injective.

## Facts & Assumptions

**Given:** The claim above.

[L1] The map $(z_1,z_2)\mapsto(e^{z_1},z_2)$ has invertible complex Jacobian at every point and is not injective ([[cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] provides a holomorphic map whose complex Jacobian determinant is never zero. [L1]

2.1 The same fact [L1] also shows that this map identifies $(z_1,z_2)$ and $(z_1+2\pi i,z_2)$. So the claimed global injectivity conclusion fails. [step 1.1, L1] ∎
