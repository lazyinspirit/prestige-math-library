---
id: fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible
kind: false-statement
title: "Restriction of an irreducible complex representation is always irreducible"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.11"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  precheck: pass
---

## Statement

**False claim:** if a complex representation of $G$ is irreducible, then its
restriction to every subgroup is irreducible.

## Facts & Assumptions

**Given:** The irreducible degree-two character $\chi_2$ of $S_3$ and the
subgroup $A_3\le S_3$.

[F1] The restriction of $\chi_2$ to $A_3$ is $\theta+\overline\theta$
([[ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters]]).

## Refutation

**Proof technique:** direct.

1.1 The character $\chi_2$ is irreducible on $S_3$ by the example that constructs it. [given, algebra]
2.1 But [F1] writes its restriction to $A_3$ as the sum of two distinct nontrivial characters, so the restricted representation is reducible. [F1, step 1.1]
3.1 Therefore restriction does not preserve irreducibility in general. [step 2.1] ∎