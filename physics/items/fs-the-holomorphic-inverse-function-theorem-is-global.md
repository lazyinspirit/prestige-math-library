---
id: fs-the-holomorphic-inverse-function-theorem-is-global
kind: false-statement
title: "FALSE: the holomorphic inverse function theorem is global"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective, thm-holomorphic-inverse-function-theorem-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 5.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

**False claim:** the holomorphic inverse function theorem makes a map with
everywhere-invertible complex Jacobian globally invertible.

## Facts & Assumptions

**Given:** The false claim above.

[L1] The several-variable holomorphic inverse function theorem is local: it produces biholomorphic neighbourhoods around each point ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

[L2] The exponential counterexample has invertible complex Jacobian everywhere and is not injective ([[cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] says that an invertible complex Jacobian gives a local biholomorphism near each point, not a global inverse on the whole domain. [L1]

2.1 Fact [L2] realizes exactly that gap: the map $(z_1,z_2)\mapsto(e^{z_1},z_2)$ satisfies the local hypothesis everywhere, yet it is not injective and therefore has no global inverse. So the claim is false. [step 1.1, L2] ∎
