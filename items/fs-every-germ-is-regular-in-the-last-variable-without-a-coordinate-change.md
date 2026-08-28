---
id: fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change
kind: false-statement
title: "FALSE: every nonzero germ is regular in the last variable without a coordinate change"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin, ex-a-shear-makes-z-one-z-two-regular-in-z-two]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 6.2.5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

**False claim:** every nonzero holomorphic germ is already regular in the last
variable, without any coordinate change.

## Facts & Assumptions

**Given:** The false claim above.

[L1] The germ $z_1z_2$ is not regular in $z_2$ at the origin ([[cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin]]).

[L2] A linear shear can nevertheless make that same germ regular in $z_2$ ([[ex-a-shear-makes-z-one-z-two-regular-in-z-two]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] gives a specific nonzero germ that fails the claimed property in the original coordinates. [L1]

2.1 Fact [L2] shows that the coordinate-change lemma is doing real work rather than decorating an already-true statement. Therefore the claim is false. [step 1.1, L2] ∎
