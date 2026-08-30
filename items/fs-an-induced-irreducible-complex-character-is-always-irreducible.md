---
id: fs-an-induced-irreducible-complex-character-is-always-irreducible
kind: false-statement
title: "An induced irreducible complex character is always irreducible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.11"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

**False claim:** if $\varphi$ is an irreducible complex character of a subgroup
$H\le G$, then $\operatorname{Ind}_H^G\varphi$ is irreducible.

## Facts & Assumptions

**Given:** The subgroup $H=\langle(12)\rangle\le S_3$ and its trivial character
$\mathbf 1_H$.

[F1] The induced character $\operatorname{Ind}_H^{S_3}\mathbf 1_H$ equals
$1+\chi_2$, where $\chi_2$ is irreducible of degree $2$
([[ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character]]).

## Refutation

**Proof technique:** direct.

1.1 The trivial character $\mathbf 1_H$ of the order-two subgroup $H$ is irreducible because every one-dimensional character is irreducible. [given, algebra]

2.1 But [F1] shows that its induction to $S_3$ is $1+\chi_2$, a nontrivial sum of two characters. So the induced character is reducible. [F1, step 1.1]

3.1 This single witness refutes the claim that induced irreducible characters are always irreducible. [step 2.1] ∎
