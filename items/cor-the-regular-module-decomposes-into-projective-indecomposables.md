---
id: cor-the-regular-module-decomposes-into-projective-indecomposables
kind: corollary
title: "The regular module is a direct sum of the projective covers of the simple modules, with the split-field multiplicities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules, thm-krull-schmidt-for-finite-dimensional-kg-modules, prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, def-splitting-field-for-a-finite-group, thm-wedderburn-artin-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A=k[G]$ with $k$ a splitting field for the finite group $G$. Then the
left regular module decomposes as

$$ {}_A A\cong\bigoplus_{S\in\operatorname{Irr}(A)} P(S)^{\oplus \dim_k S}, $$

where $P(S)$ is the projective cover of the simple module $S$.

## Facts & Assumptions

**Given:** The finite group algebra $A=k[G]$ over a splitting field $k$.

[L1] Finite-dimensional modules decompose uniquely into indecomposables
([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

[L2] Indecomposable projectives correspond to simple heads
([[thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules]]).

[L3] The quotient $A/J(A)$ is semisimple
([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F1] A splitting field is one over which the simple endomorphism rings are
scalars ([[def-splitting-field-for-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the regular module decomposes as a finite direct sum of indecomposable projective modules. By [L2], each summand is the projective cover $P(S)$ of a unique simple module $S$, so ${}_A A\cong\bigoplus_S P(S)^{\oplus m_S}$ for uniquely determined multiplicities $m_S\ge0$. [L1, L2, given, algebra]

2.1 Modding out by the radical preserves direct sums and sends each $P(S)$ to its simple head $S$. Hence $A/J(A)\cong\bigoplus_S S^{\oplus m_S}$. By [L3], the quotient is semisimple. Since $k$ is a splitting field by [F1], Wedderburn-Artin writes the semisimple algebra as a product of matrix algebras $M_{n_S}(k)$, and the left regular module of $M_{n_S}(k)$ is the simple column module repeated $n_S$ times. That simple module has $k$-dimension $n_S$, so $m_S=\dim_k S$. [L3, F1, step 1.1, algebra]

3.1 Substituting the multiplicities from step 2.1 gives the displayed decomposition. [step 2.1] ∎
