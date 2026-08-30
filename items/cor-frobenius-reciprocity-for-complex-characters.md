---
id: cor-frobenius-reciprocity-for-complex-characters
kind: corollary
title: "Frobenius reciprocity for complex characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-character-of-a-complex-representation, thm-character-inner-product-computes-intertwiner-dimension, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 4.3.8"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Chapter 19"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $H\le G$, let $\chi$ be a complex character of
$H$, and let $\psi$ be a complex character of $G$. Then

$$\langle \operatorname{Ind}_H^G\chi,\psi\rangle_G = \langle \chi,\operatorname{Res}_H^G\psi\rangle_H.$$

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, a finite-dimensional
complex representation $W$ of $H$ with character $\chi$, and a
finite-dimensional complex representation $V$ of $G$ with character $\psi$.

[F1] The inner product of two complex characters equals the dimension of the
intertwiner space between the corresponding representations
([[thm-character-inner-product-computes-intertwiner-dimension]]).

[F2] Induction is left adjoint to restriction:
$\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)\cong
\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$
([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[F3] The character $\operatorname{Ind}_H^G\chi$ is the character of
$\operatorname{Ind}_H^G W$ ([[def-induced-character-of-a-complex-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] and then [F1], $\langle \operatorname{Ind}_H^G\chi,\psi\rangle_G=\dim\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)$. [F1, F3, given]

1.2 By [F2], this dimension equals $\dim\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$; applying [F1] again on $H$ gives $\dim\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)=\langle \chi,\operatorname{Res}_H^G\psi\rangle_H$. [F1, F2, given]

2.1 The expressions in steps 1.1 and 1.2 are equal, which is exactly the Frobenius reciprocity identity. [step 1.1, step 1.2] ∎
