---
id: thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order
kind: theorem
title: "The degree of an irreducible complex character divides $|G|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, cor-integral-elements-form-a-subring, cor-rational-algebraic-integers-are-integers, def-central-character-of-an-irreducible-complex-character, def-standard-inner-product-on-complex-class-functions, prop-basic-value-properties-of-a-complex-character, thm-central-characters-are-algebraic-integers]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.5.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Theorem 15.7"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group and let $\chi$ be an irreducible complex character of
$G$. Then $\chi(1)$ divides $|G|$.

## Facts & Assumptions

**Given:** A finite group $G$ and an irreducible complex character $\chi$ of $G$.

[F1] An irreducible complex character has self-inner-product $1$ ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[F2] The class-function inner product is $\langle \varphi,\psi\rangle=\frac1{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F3] The central character satisfies $\omega_\chi(\widehat C)=|C|\chi(g)/\chi(1)$ for $g\in C$ ([[def-central-character-of-an-irreducible-complex-character]]).

[F4] Central-character values are algebraic integers ([[thm-central-characters-are-algebraic-integers]]).

[F5] Character values are algebraic integers, and $\chi(g^{-1})=\overline{\chi(g)}$ ([[prop-basic-value-properties-of-a-complex-character]]).

[F6] Sums and products of algebraic integers are algebraic integers ([[cor-integral-elements-form-a-subring]]).

[F7] A rational algebraic integer is an integer ([[cor-rational-algebraic-integers-are-integers]]).

## Proof

**Proof technique:** direct.

1.1 Let $C_1,\dots,C_r$ be the conjugacy classes of $G$, and choose $g_i\in C_i$. By [F1] and [F2], $1=\langle \chi,\chi\rangle =\frac1{|G|}\sum_{i=1}^r |C_i|\chi(g_i)\chi(g_i^{-1})$, where [F5] identifies $\overline{\chi(g_i)}$ with $\chi(g_i^{-1})$ and $\chi$ is constant on each class. [F1, F2, F5, given]

2.1 For each $i$, [F3] gives $|C_i|\chi(g_i)=\chi(1)\omega_\chi(\widehat C_i)$. Substituting this into step 1.1 yields $|G|/\chi(1)=\sum_{i=1}^r \omega_\chi(\widehat C_i)\chi(g_i^{-1})$. [F3, step 1.1, algebra]

3.1 By [F4] and [F5], each factor $\omega_\chi(\widehat C_i)$ and $\chi(g_i^{-1})$ is an algebraic integer; by [F6], every product and the whole finite sum in step 2.1 are algebraic integers. Therefore $|G|/\chi(1)$ is a rational algebraic integer, so [F7] makes it an integer. [F4, F5, F6, F7, step 2.1, algebra]

4.1 Since $|G|/\chi(1)\in\mathbb Z$, the degree $\chi(1)$ divides $|G|$. [step 3.1] ∎
