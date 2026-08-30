---
id: ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions
kind: example
title: "Frobenius reciprocity matches multiplicities in the two preceding $S_3$ inductions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-frobenius-reciprocity-for-complex-characters, ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character, ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character]
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

For the two $S_3$ inductions on this page, Frobenius reciprocity gives the same
multiplicity on both sides:

$$ \langle \operatorname{Ind}_{A_3}^{S_3}\theta,\chi_2\rangle_{S_3} = \langle \theta,\operatorname{Res}_{A_3}^{S_3}\chi_2\rangle_{A_3} =1 $$

and

$$ \langle \operatorname{Ind}_{\langle(12)\rangle}^{S_3}\mathbf 1,\chi_2\rangle_{S_3} = \langle \mathbf 1,\operatorname{Res}_{\langle(12)\rangle}^{S_3}\chi_2\rangle_{\langle(12)\rangle} =1. $$

## Facts & Assumptions

**Given:** The character $\chi_2=(2,0,-1)$ and the two induced characters from
the preceding examples.

[F1] The induction from $A_3$ of a nontrivial linear character is exactly
$\chi_2$
([[ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character]]).

[F2] The induction from a subgroup of order two is $1+\chi_2$
([[ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character]]).

[F3] Frobenius reciprocity matches the two inner products
([[cor-frobenius-reciprocity-for-complex-characters]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], $\langle \operatorname{Ind}_{A_3}^{S_3}\theta,\chi_2\rangle_{S_3}=\langle \chi_2,\chi_2\rangle_{S_3}=1$. By [F3], the matching inner product on $A_3$ is therefore also $1$. [F1, F3, given]

1.2 By [F2], $\langle \operatorname{Ind}_{\langle(12)\rangle}^{S_3}\mathbf 1,\chi_2\rangle_{S_3}=\langle 1+\chi_2,\chi_2\rangle_{S_3}=1$. Again [F3] makes the inner product after restriction equal to the same value. [F2, F3, given, algebra]

2.1 So both preceding inductions realize Frobenius reciprocity numerically with multiplicity $1$ on each side. [step 1.1, step 1.2] ∎
