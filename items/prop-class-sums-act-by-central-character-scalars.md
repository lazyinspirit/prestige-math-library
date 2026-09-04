---
id: prop-class-sums-act-by-central-character-scalars
kind: proposition
title: "Class sums act on an irreducible representation by central-character scalars"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-central-character-of-an-irreducible-complex-character, thm-class-sums-form-a-basis-of-the-center-of-k-g]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.5.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Chapter 15"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $C$ be a conjugacy class of $G$, let
$\widehat C\in \mathbb C[G]$ be its class sum, and let $V$ be an irreducible
complex representation of $G$ with character $\chi$. Then $\widehat C$ acts on
$V$ as the scalar $\omega_\chi(\widehat C)$:

$$ \rho_V(\widehat C)=\omega_\chi(\widehat C)\operatorname{id}_V. $$

## Facts & Assumptions

**Given:** A finite group $G$, a conjugacy class $C$ of $G$, its class sum
$\widehat C$, and an irreducible complex representation $V$ of $G$ with
character $\chi$.

[F1] The class sums form a basis of the center of $\mathbb C[G]$, so each class
sum lies in the center ([[thm-class-sums-form-a-basis-of-the-center-of-k-g]]).

[F2] The central character is $\omega_\chi(\widehat C)=|C|\chi(g)/\chi(1)$ for
$g\in C$ ([[def-central-character-of-an-irreducible-complex-character]]).

[F3] On an irreducible complex representation, every $G$-endomorphism is scalar
([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Proof

**Proof technique:** direct.

1.1 Because $\widehat C$ is central by [F1], the operator $\rho_V(\widehat C)$ commutes with $\rho_V(g)$ for every $g\in G$, so it is a $G$-endomorphism of the irreducible representation $V$. By [F3], there is a scalar $\lambda_C$ with $\rho_V(\widehat C)=\lambda_C\operatorname{id}_V$. [F1, F3, given]

2.1 Taking traces gives $\lambda_C\chi(1)=\operatorname{tr}\rho_V(\widehat C)=\sum_{x\in C}\operatorname{tr}\rho_V(x)=\sum_{x\in C}\chi(x)=|C|\chi(g)$ for any $g\in C$, because $\chi$ is constant on $C$. Hence $\lambda_C=|C|\chi(g)/\chi(1)=\omega_\chi(\widehat C)$ by [F2]. [F2, step 1.1, algebra]

3.1 Substituting the scalar from step 2.1 into step 1.1 yields $\rho_V(\widehat C)=\omega_\chi(\widehat C)\operatorname{id}_V$. [F2, step 1.1, step 2.1] ∎
