---
id: fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree
kind: false-statement
title: "Every divisor of $|G|$ is an irreducible character degree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

**False claim:** if $d$ divides $|G|$, then $d$ is the degree of some
irreducible complex character of $G$.

## Facts & Assumptions

**Given:** The cyclic group $C_4$.

[F1] In $C_4$, the divisor $2$ of $|C_4|=4$ is not an irreducible character
degree
([[ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence]]).

## Refutation

**Proof technique:** direct.

1.1 The integer $2$ divides $|C_4|=4$. [given, algebra]
2.1 But [F1] shows that no irreducible complex character of $C_4$ has degree $2$. [F1, step 1.1]
3.1 Hence not every divisor of the group order occurs as an irreducible character degree. [step 2.1] ∎