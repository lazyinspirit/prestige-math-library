---
id: prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings
kind: proposition
title: "Induction and restriction satisfy the projection formula on character rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-frobenius-reciprocity-for-complex-characters, def-virtual-character-and-character-ring-of-a-finite-group, prop-basic-value-properties-of-a-complex-character, thm-characters-of-direct-sums-tensor-products-and-duals, thm-frobenius-formula-for-induced-characters]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 4.3.9"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.7-4.9"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $H\le G$, let $\chi\in R(H)$, and let
$\psi\in R(G)$. Then

$$ \operatorname{Ind}_H^G\!\bigl(\chi\cdot\operatorname{Res}_H^G\psi\bigr) = \bigl(\operatorname{Ind}_H^G\chi\bigr)\cdot\psi $$

in the character ring $R(G)$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, a complex character $\chi$
of $H$, and a complex character $\psi$ of $G$.

[F1] Frobenius' formula gives
$\operatorname{Ind}_H^G\chi(g)=\frac1{|H|}\sum_{x^{-1}gx\in H}\chi(x^{-1}gx)$
([[thm-frobenius-formula-for-induced-characters]]).

[F2] Characters multiply on tensor products, and addition is pointwise
([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F3] A complex character is a class function ([[prop-basic-value-properties-of-a-complex-character]]).

[F4] The character ring is the $\mathbb Z$-span of ordinary characters, with
addition and multiplication extending $\mathbb Z$-bilinearly
([[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F5] Frobenius reciprocity identifies induction and restriction as adjoint
operations on characters ([[cor-frobenius-reciprocity-for-complex-characters]]).

## Proof

**Proof technique:** direct.

1.1 For an honest pair of characters $\chi$ and $\psi$ and any $g\in G$, [F1] gives $\operatorname{Ind}_H^G(\chi\operatorname{Res}_H^G\psi)(g)=\frac1{|H|}\sum_{x\in G,\ x^{-1}gx\in H}\chi(x^{-1}gx)\psi(x^{-1}gx)$. [F1, F4, given]
2.1 Since $\psi$ is a class function by [F3], $\psi(x^{-1}gx)=\psi(g)$ for each summand of step 1.1. Factoring that constant out of the finite sum and applying [F1] again yields $\operatorname{Ind}_H^G(\chi\operatorname{Res}_H^G\psi)(g)=\psi(g)\operatorname{Ind}_H^G\chi(g)=\bigl((\operatorname{Ind}_H^G\chi)\psi\bigr)(g)$. [F1, F3, step 1.1, algebra]
3.1 So the identity holds for ordinary characters. By [F4], both induction and multiplication extend $\mathbb Z$-bilinearly to virtual characters, so the same pointwise identity holds for all $\chi\in R(H)$ and $\psi\in R(G)$. [F4, step 2.1, algebra]
4.1 This pointwise equality is the projection formula in $R(G)$, and [F2] identifies the pointwise product on the right with the character-ring product coming from tensor products. The adjoint viewpoint from [F5] is compatible with it, but step 3.1 already proves the formula. [F2, F5, step 3.1] ∎
