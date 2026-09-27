---
id: lem-induction-restriction-reciprocity-for-class-functions
kind: lemma
title: "Frobenius reciprocity for class functions"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-induced-class-function-on-a-finite-group, cor-frobenius-reciprocity-for-complex-characters, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, def-standard-inner-product-on-complex-class-functions, def-irreducible-complex-character, def-class-function-and-the-space-of-complex-class-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, Definition 6.1 through Theorem 6.5, printed pp. 28–30"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §4.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.3, Proposition 4.3.5 and Corollary 4.3.8"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, let $H\le G$ be a subgroup, let
$\theta\in\mathrm{cf}(H)$ be a class function on $H$, and let
$\psi\in\mathrm{cf}(G)$ be a class function on $G$. Then

$$\bigl\langle\operatorname{Ind}_H^G\theta,\ \psi\bigr\rangle_G =\bigl\langle\theta,\ \operatorname{Res}_H^G\psi\bigr\rangle_H .$$

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, a class function $\theta$ on $H$, a class function $\psi$ on $G$, and the induced and restricted class functions $\operatorname{Ind}_H^G\theta$ and $\operatorname{Res}_H^G\psi$ of [[def-induced-class-function-on-a-finite-group]].

[F1] Restriction of class functions is the restriction map $\psi\mapsto\psi|_H$, induction is the $\mathbb C$-linear map $\theta\mapsto\operatorname{Ind}_H^G\theta$ given by the Frobenius formula, and for an honest character $\chi$ of $H$ the class function $\operatorname{Ind}_H^G\chi$ is the honest induced character ([[def-induced-class-function-on-a-finite-group]]).

[F2] The irreducible complex characters $\varphi_1,\dots,\varphi_s$ of $H$ form an orthonormal basis of $\mathrm{cf}(H)$, and the irreducible complex characters $\chi_1,\dots,\chi_r$ of $G$ form an orthonormal basis of $\mathrm{cf}(G)$ ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]], [[def-irreducible-complex-character]]).

[F3] The inner product $\langle\alpha,\beta\rangle=\frac1{|G|}\sum_{g\in G}\alpha(g)\overline{\beta(g)}$ is linear in its first argument and conjugate-linear in its second, on $\mathrm{cf}(G)$ as well as on $\mathrm{cf}(H)$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F4] For complex characters $\chi$ of $H$ and $\psi'$ of $G$ one has $\langle\operatorname{Ind}_H^G\chi,\psi'\rangle_G=\langle\chi,\operatorname{Res}_H^G\psi'\rangle_H$ ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F5] A class function on a finite group is determined by its values on conjugacy classes, and the space of class functions is a complex vector space ([[def-class-function-and-the-space-of-complex-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 Since the irreducible characters form orthonormal bases, there are unique complex numbers $a_1,\dots,a_s$ and $b_1,\dots,b_r$ with $\theta=\sum_{i=1}^{s}a_i\varphi_i$ and $\psi=\sum_{j=1}^{r}b_j\chi_j$. [F2, F5, given]

2.1 By the linearity of induction in [F1], $\operatorname{Ind}_H^G\theta=\sum_i a_i\operatorname{Ind}_H^G\varphi_i$, and the functions $\operatorname{Ind}_H^G\varphi_i$ are the honest induced characters of the characters $\varphi_i$; likewise $\operatorname{Res}_H^G\psi=\sum_j b_j\operatorname{Res}_H^G\chi_j$. [F1, step 1.1]

3.1 The inner product is linear in the first argument and conjugate-linear in the second, by [F3] on $G$ and on $H$ respectively, so bilinearity and the expansions of step 2.1 give
$\langle\operatorname{Ind}_H^G\theta,\psi\rangle_G=\sum_{i,j}a_i\overline{b_j}\langle\operatorname{Ind}_H^G\varphi_i,\chi_j\rangle_G$ and
$\langle\theta,\operatorname{Res}_H^G\psi\rangle_H=\sum_{i,j}a_i\overline{b_j}\langle\varphi_i,\operatorname{Res}_H^G\chi_j\rangle_H$. [F3, step 2.1]

3.2 For every pair of indices $i,j$ the honest-character reciprocity [F4] applies to the character $\varphi_i$ of $H$ and the character $\chi_j$ of $G$, giving $\langle\operatorname{Ind}_H^G\varphi_i,\chi_j\rangle_G=\langle\varphi_i,\operatorname{Res}_H^G\chi_j\rangle_H$; by step 2.1 the left-hand side is the same as $\langle\operatorname{Ind}_H^G\varphi_i,\chi_j\rangle_G$ computed with the induced class function. [F1, F4, step 2.1]

4.1 Substituting the identities of step 3.2 into the two expansions of step 3.1 makes the sums equal term by term, so $\langle\operatorname{Ind}_H^G\theta,\psi\rangle_G=\langle\theta,\operatorname{Res}_H^G\psi\rangle_H$, as claimed. ∎ [step 3.1, step 3.2]
