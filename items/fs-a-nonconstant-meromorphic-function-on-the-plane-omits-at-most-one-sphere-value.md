---
id: fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value
kind: false-statement
title: "FALSE: a nonconstant meromorphic function on the plane omits at most one sphere value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-meromorphic-little-picard-theorem, cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

A nonconstant meromorphic function on $\mathbb C$ omits at most one value of
$\widehat{\mathbb C}$.

## Facts & Assumptions

**Given:** The meromorphic exponential counterexample.

[L1] The exponential meromorphic map on $\mathbb C$ omits $0$ and $\infty$ ([[cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] is already a nonconstant meromorphic function on $\mathbb C$ omitting two sphere values. [L1, given]

2.1 Therefore the claim "at most one sphere value" is false. [step 1.1] ∎
