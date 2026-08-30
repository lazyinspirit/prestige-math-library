---
id: ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character
kind: example
title: "Inducing the trivial character of a subgroup of order two in $S_3$ gives $1$ plus an irreducible degree-two character"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, thm-character-of-a-permutation-representation-counts-fixed-points, thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]
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
---

## Example

Let $H=\langle(12)\rangle\le S_3$. Then
$\operatorname{Ind}_H^{S_3}\mathbf 1_H$ is the permutation character on the
three left cosets of $H$, so it has values $(3,1,0)$ on the class types
$e$, transpositions, and $3$-cycles. Subtracting the trivial character gives the
irreducible degree-two character $(2,0,-1)$.

## Facts & Assumptions

**Given:** The subgroup $H=\langle(12)\rangle\le S_3$ and its trivial character
$\mathbf 1_H$.

[F1] Inducing the trivial character gives the permutation representation on
$S_3/H$ ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

[F2] The character of a permutation representation counts fixed points
([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[F3] A complex character is irreducible if and only if its self-inner-product
is $1$ ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2], the induced character counts fixed cosets of the left action on the three cosets of $H$. The identity fixes all three cosets, a transposition fixes exactly one coset, and a $3$-cycle fixes none, so $\operatorname{Ind}_H^{S_3}\mathbf 1_H=(3,1,0)$. [F1, F2, given]

2.1 Subtracting the trivial character $(1,1,1)$ gives the class function $(2,0,-1)$. Its self-inner-product is $(1/6)(2^2+3\cdot 0^2+2\cdot (-1)^2)=1$, so [F3] makes it irreducible; its value at the identity is $2$, so it has degree $2$. [F3, step 1.1, algebra]

3.1 Therefore $\operatorname{Ind}_H^{S_3}\mathbf 1_H=1+\chi_2$ with $\chi_2$ irreducible of degree $2$. [step 2.1] ∎
