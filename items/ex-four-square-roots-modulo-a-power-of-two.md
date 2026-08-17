---
id: ex-four-square-roots-modulo-a-power-of-two
kind: example
title: "The four square roots of $9$ modulo $128$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-unit-square-criterion-modulo-two-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The square roots of $9$ modulo $128$ are

$$3,\ 61,\ 67,\ 125.$$

## Facts & Assumptions

**Given:** The unit target $9$ modulo $128=2^7$.

[L1] For $k\ge3$, an odd target is a square modulo $2^k$ exactly when it is $1$ modulo $8$, and every soluble target has exactly four roots ([[thm-unit-square-criterion-modulo-two-powers]]).

## Verification

**Proof technique:** direct.

1.1 The representatives are distinct modulo $128$, and $3^2=9$, $61^2=29\cdot128+9$, $67^2=35\cdot128+9$, and $125^2=122\cdot128+9$. Thus all four displayed classes are roots. [given, algebra]

2.1 Since $9\equiv1\pmod8$, [L1] says that the congruence is soluble and has exactly four root classes. The four distinct roots in step 1.1 are therefore complete. [step 1.1, L1] ∎
