---
id: ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters
kind: example
title: "Restricting that degree-two $S_3$ character to the three-cycle subgroup gives the two nontrivial linear characters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-frobenius-reciprocity-for-complex-characters, ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.11"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
  audited: 2026-08-30
  precheck: pass
---

## Example

Let $\chi_2$ be the degree-two irreducible character of $S_3$ from the previous
example. Then

$$
\operatorname{Res}_{A_3}^{S_3}\chi_2=\theta+\overline{\theta},
$$

the sum of the two nontrivial linear characters of $A_3$.

## Facts & Assumptions

**Given:** The degree-two character $\chi_2=(2,0,-1)$ of $S_3$ from the
previous example, and the two nontrivial linear characters $\theta$ and
$\overline\theta$ of $A_3$.

[F1] The previous example identifies $\chi_2$ with the induced character
$\operatorname{Ind}_{A_3}^{S_3}\theta$
([[ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character]]).

[F2] Frobenius reciprocity identifies multiplicities before and after induction
([[cor-frobenius-reciprocity-for-complex-characters]]).

## Verification

**Proof technique:** direct.

1.1 Restricting the values $(2,0,-1)$ from [F1] to $A_3=\{e,(123),(132)\}$ gives $\operatorname{Res}_{A_3}^{S_3}\chi_2=(2,-1,-1)$. [F1, given]

2.1 Frobenius reciprocity [F2] gives $\langle \theta,\operatorname{Res}_{A_3}^{S_3}\chi_2\rangle_{A_3}=\langle \operatorname{Ind}_{A_3}^{S_3}\theta,\chi_2\rangle_{S_3}=\langle \chi_2,\chi_2\rangle_{S_3}=1$, and the same computation with $\overline\theta$ gives multiplicity $1$ for $\overline\theta$. [F1, F2, step 1.1, algebra]

3.1 The restriction has degree $2$ at the identity, while the two nontrivial linear characters already account for degree $1+1=2$. Hence no trivial summand occurs, and $\operatorname{Res}_{A_3}^{S_3}\chi_2=\theta+\overline\theta$. [step 1.1, step 2.1, algebra] ∎