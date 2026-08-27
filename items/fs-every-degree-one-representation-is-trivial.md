---
id: fs-every-degree-one-representation-is-trivial
kind: false-statement
title: "FALSE: every degree-one representation is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every degree-one representation is trivial.

## Facts & Assumptions

**Given:** The cyclic group $C_2=\langle g\rangle$.

[L1] Over $\mathbb C$, a cyclic group of order $n$ has exactly the $n$ characters $g \mapsto \lambda$ with $\lambda^n=1$ ([[ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters]]).

## Refutation

**Proof technique:** direct.

1.1 Applying [L1] with $n=2$ gives a degree-one representation of $C_2$ with $g \mapsto -1$. [L1, given]

2.1 This representation is not trivial because the generator acts by $-1 \ne 1$. Therefore the stated claim is false. [step 1.1] ∎
