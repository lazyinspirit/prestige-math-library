---
id: fs-an-inverse-limit-of-groups-may-be-empty
kind: false-statement
title: "FALSE: an inverse limit of groups can be empty"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compatible-tuple-inverse-limit-of-groups, lem-compatible-tuples-form-a-subgroup]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

An inverse limit of groups can be empty.

## Facts & Assumptions

**Given:** An inverse system of groups.

[L1] The inverse limit is the set of compatible tuples, and compatible tuples
form a subgroup of the product group
([[def-compatible-tuple-inverse-limit-of-groups]],
[[lem-compatible-tuples-form-a-subgroup]]).

## Refutation

**Proof technique:** direct.

1.1 The identity tuple of the product is compatible, because every transition homomorphism preserves identity. [L1, given]

2.1 Therefore the inverse limit contains at least that identity tuple. So by [L1] it is never empty. [L1, step 1.1]

3.1 This refutes the statement. [step 1.1, step 2.1] ∎
