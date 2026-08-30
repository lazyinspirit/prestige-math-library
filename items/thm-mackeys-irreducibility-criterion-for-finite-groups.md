---
id: thm-mackeys-irreducibility-criterion-for-finite-groups
kind: theorem
title: "Mackey's irreducibility criterion for finite groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, cor-frobenius-reciprocity-for-complex-characters, thm-mackey-double-coset-formula-for-restricting-an-induced-character]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Anupam Singh, Representation Theory of Finite Groups, Theorem 20.9"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 5.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $H\le G$, let $\chi$ be an irreducible complex
character of $H$, and let $S$ be representatives for $H\backslash G/H$ with
$1\in S$. Then $\operatorname{Ind}_H^G\chi$ is irreducible if and only if for
every $s\in S\setminus\{1\}$,

$$ \Bigl\langle \operatorname{Res}_{H\cap sHs^{-1}}^H\chi, \operatorname{Res}_{H\cap sHs^{-1}}^{sHs^{-1}}\,{}^s\chi \Bigr\rangle_{H\cap sHs^{-1}} = 0. $$

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, an irreducible complex
character $\chi$ of $H$, and representatives $S$ for $H\backslash G/H$ with
$1\in S$.

[F1] A complex character is irreducible if and only if its self-inner-product
is $1$ ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

[F2] Frobenius reciprocity gives
$\langle \operatorname{Ind}_H^G\chi,\psi\rangle_G=\langle \chi,\operatorname{Res}_H^G\psi\rangle_H$
([[cor-frobenius-reciprocity-for-complex-characters]]).

[F3] Mackey's formula expands $\operatorname{Res}_H^G\operatorname{Ind}_H^G\chi$
as a sum over the double cosets in $H\backslash G/H$
([[thm-mackey-double-coset-formula-for-restricting-an-induced-character]]).

## Proof

**Proof technique:** direct.

1.1 Because $\chi$ is irreducible, [F1] gives $\langle \chi,\chi\rangle_H=1$. Applying [F2] with $\psi=\operatorname{Ind}_H^G\chi$ gives $\langle \operatorname{Ind}_H^G\chi,\operatorname{Ind}_H^G\chi\rangle_G=\langle \chi,\operatorname{Res}_H^G\operatorname{Ind}_H^G\chi\rangle_H$. [F1, F2, given]

2.1 Apply [F3] to the restriction on the right side of step 1.1. The term for the identity double coset $H$ is exactly $\chi$, so it contributes $1$. Every other term is $\operatorname{Ind}_{H\cap sHs^{-1}}^H(\operatorname{Res}_{H\cap sHs^{-1}}^{sHs^{-1}}\,{}^s\chi)$, whose inner product with $\chi$ is, by another use of [F2], precisely $\langle \operatorname{Res}_{H\cap sHs^{-1}}^H\chi,\operatorname{Res}_{H\cap sHs^{-1}}^{sHs^{-1}}\,{}^s\chi\rangle_{H\cap sHs^{-1}}$. [F2, F3, step 1.1, algebra]

3.1 Therefore $\langle \operatorname{Ind}_H^G\chi,\operatorname{Ind}_H^G\chi\rangle_G=1+\sum_{s\in S\setminus\{1\}} \langle \operatorname{Res}_{H\cap sHs^{-1}}^H\chi,\operatorname{Res}_{H\cap sHs^{-1}}^{sHs^{-1}}\,{}^s\chi\rangle_{H\cap sHs^{-1}}$. Each summand is a multiplicity and hence a nonnegative integer. [F2, step 2.1, algebra]

4.1 The self-inner-product in step 3.1 equals $1$ if and only if every nonidentity summand vanishes. By [F1], that is equivalent to $\operatorname{Ind}_H^G\chi$ being irreducible. [F1, step 3.1, algebra] ∎
