---
id: thm-fundamental-theorem-of-algebra-minimum-modulus-proof
kind: theorem
title: "Fundamental theorem of algebra: every nonconstant complex polynomial has a complex root"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-complex-polynomial-growth-and-minimum-modulus, lem-dalembert-minimum-modulus-descent]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: The Fundamental Theorem of Algebra"
      url: "https://www.jirka.org/ra/html/sec_fundalgeb.html"
pipeline_run: null
---

## Statement

Every nonconstant complex polynomial has a complex root. The conventions and prerequisite facts used below are recorded in [[lem-complex-polynomial-growth-and-minimum-modulus]], [[lem-dalembert-minimum-modulus-descent]].

## Facts & Assumptions

**Given:** A nonconstant complex polynomial $p$.

[L1] [[lem-complex-polynomial-growth-and-minimum-modulus]] states that $|p|$ attains a global minimum on $\mathbb C$.

[L2] [[lem-dalembert-minimum-modulus-descent]] states that, if $p(a)\ne0$, then $|p|$ is not minimal on any neighbourhood of $a$.

## Proof

**Proof technique:** contradiction.

1.1 By [L1], let $a$ minimize $|p|$ globally. [L1]

1.2 Suppose $p(a)\ne0$. [assume-contra]

2.1 By [L2], there is a point arbitrarily near $a$ with strictly smaller modulus, contradicting step 1.1. [L2, step 1.1]

3.1 Therefore $p(a)=0$, proving the theorem. [discharge-contradiction] ∎
