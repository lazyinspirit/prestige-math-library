---
id: fs-induction-followed-by-restriction-is-the-identity-on-complex-representations
kind: false-statement
title: "Induction followed by restriction is the identity on complex representations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character, ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters]
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

**False claim:** for every subgroup $H\le G$, the composite
$\operatorname{Res}_H^G\operatorname{Ind}_H^G$ is the identity on complex
representations of $H$.

## Facts & Assumptions

**Given:** The subgroup $A_3\le S_3$ and the nontrivial linear character
$\theta$ of $A_3$.

[F1] Inducing $\theta$ to $S_3$ gives the irreducible degree-two character
$\chi_2$ ([[ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character]]).

[F2] Restricting that degree-two character back to $A_3$ gives
$\theta+\overline\theta$
([[ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], $\operatorname{Ind}_{A_3}^{S_3}\theta=\chi_2$. [F1, given]

2.1 Applying restriction and then [F2] gives $\operatorname{Res}_{A_3}^{S_3}\operatorname{Ind}_{A_3}^{S_3}\theta=\operatorname{Res}_{A_3}^{S_3}\chi_2=\theta+\overline\theta\ne\theta$. [F2, step 1.1]

3.1 So induction followed by restriction is not the identity in general. [step 2.1] ∎
