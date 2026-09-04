---
id: ex-two-adic-square-test
kind: example
title: "The two-adic square test separates 17 and 5"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-square-criterion-in-q2]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma, Theorem 4.5"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
pipeline_run: null
---

## Example

In $\mathbb Q_2$, the number $17$ is a square but $5$ is not.

## Facts & Assumptions

**Given:** The $2$-adic square criterion.

[L1] An element $2^n u$ with odd $u$ is a square in $\mathbb Q_2$ exactly when
$n$ is even and $u \equiv 1 \pmod 8$ ([[thm-square-criterion-in-q2]]).

## Verification

**Proof technique:** direct.

1.1 One has $17 = 2^0 \cdot 17$ with $17 \equiv 1 \pmod 8$, so [L1] shows that $17$ is a square in $\mathbb Q_2$. [L1, given, algebra]

2.1 One has $5 = 2^0 \cdot 5$ with $5 \equiv 5 \pmod 8 \ne 1$, so [L1] shows that $5$ is not a square in $\mathbb Q_2$. [L1, given, algebra] ∎
