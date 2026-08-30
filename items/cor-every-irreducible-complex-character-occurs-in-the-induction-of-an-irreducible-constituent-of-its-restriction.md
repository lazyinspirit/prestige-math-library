---
id: cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction
kind: corollary
title: "Every irreducible complex character occurs in the induction of an irreducible constituent of its restriction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, cor-frobenius-reciprocity-for-complex-characters, cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]
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
verification:
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $H\le G$, and let $\psi$ be an irreducible
complex character of $G$. Then some irreducible constituent $\varphi$ of
$\operatorname{Res}_H^G\psi$ satisfies

$$
\langle \operatorname{Ind}_H^G\varphi,\psi\rangle_G>0.
$$

Equivalently, $\psi$ occurs in the induced character
$\operatorname{Ind}_H^G\varphi$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, and an irreducible complex character $\psi$ of $G$.

[F1] Over $\mathbb C$, every finite-dimensional representation of a finite group is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] The multiplicity of an irreducible constituent is the corresponding character inner product ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F3] Frobenius reciprocity gives $\langle \operatorname{Ind}_H^G\varphi,\psi\rangle_G = \langle \varphi,\operatorname{Res}_H^G\psi\rangle_H$ ([[cor-frobenius-reciprocity-for-complex-characters]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be an irreducible representation of $G$ affording $\psi$. Its restriction to $H$ is completely reducible by [F1], so $\operatorname{Res}_H^G V\cong \bigoplus_{i=1}^r m_i W_i$ for irreducible $H$-representations $W_i$ with characters $\varphi_i$. [F1, given]

2.1 Because $\operatorname{Res}_H^G V$ is nonzero, some multiplicity $m_i$ is positive. By [F2], this means $m_i=\langle \varphi_i,\operatorname{Res}_H^G\psi\rangle_H>0$. [F2, step 1.1, choose]

3.1 Applying [F3] to $\varphi=\varphi_i$ gives $\langle \operatorname{Ind}_H^G\varphi,\psi\rangle_G =\langle \varphi,\operatorname{Res}_H^G\psi\rangle_H=m_i>0$. [F3, step 2.1, algebra]

4.1 The strict positivity in step 3.1 means that $\psi$ occurs in the induced character $\operatorname{Ind}_H^G\varphi$, by the multiplicity interpretation of [F2]. [F2, step 3.1]

5.1 The chosen irreducible constituent $\varphi:=\varphi_i$ therefore has the required property. [step 2.1, step 4.1] ∎
