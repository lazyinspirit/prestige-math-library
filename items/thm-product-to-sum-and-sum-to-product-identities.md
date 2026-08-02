---
id: thm-product-to-sum-and-sum-to-product-identities
kind: theorem
title: "Product-to-sum and sum-to-product identities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

For all real $u,v$,
$$\sin u\sin v=\frac{\cos(u-v)-\cos(u+v)}2,\quad \cos u\cos v=\frac{\cos(u-v)+\cos(u+v)}2,$$
$$\sin u\cos v=\frac{\sin(u+v)+\sin(u-v)}2,$$
and, with $a=(u+v)/2$, $b=(u-v)/2$, the reverse sum-to-product identities follow by solving these formulas for the sums. The conventions and prerequisite facts used below are recorded in [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]].

## Facts & Assumptions

**Given:** Reals $u,v$.

## Proof

**Proof technique:** direct.

1.1 Add and subtract the addition and subtraction formulas for cosine. [algebra]

1.2 Add the addition and subtraction formulas for sine. [algebra]

2.1 Substitute $u=a+b$, $v=a-b$ to obtain every reverse identity. [algebra] ∎
