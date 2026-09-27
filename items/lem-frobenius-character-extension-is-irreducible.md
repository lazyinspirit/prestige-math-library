---
id: lem-frobenius-character-extension-is-irreducible
kind: lemma
title: "Frobenius character extension is irreducible"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-induced-class-function-on-a-finite-group, thm-character-inner-product-computes-intertwiner-dimension, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, lem-frobenius-character-extension-construction, cor-frobenius-reciprocity-for-complex-characters, thm-first-orthogonality-relation-for-irreducible-complex-characters, def-virtual-character-and-character-ring-of-a-finite-group, lem-induction-restriction-reciprocity-for-class-functions, def-standard-inner-product-on-complex-class-functions, def-irreducible-complex-character, def-trivial-regular-and-permutation-representations]
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
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and let $\varphi$ be a
nontrivial irreducible complex character of $H$. Then
$\widetilde\varphi=\operatorname{Ind}_H^G\theta+\varphi(1)1_G$ with
$\theta=\varphi-\varphi(1)1_H$ is an irreducible complex character of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ with Frobenius complement $\{1\}<H<G$, a nontrivial irreducible complex character $\varphi$ of $H$, and the class function $\widetilde\varphi$ of [[lem-frobenius-character-extension-construction]].

[F1] Put $d=\varphi(1)\in\mathbb N_{>0}$. The construction gives $\widetilde\varphi=\operatorname{Ind}_H^G(\varphi-d1_H)+d1_G$, $\widetilde\varphi|_H=\varphi$ and $\widetilde\varphi(1)=d$, hence $\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta=\theta$ ([[lem-frobenius-character-extension-construction]]). Induction of class functions is linear and sends honest characters to honest characters ([[def-induced-class-function-on-a-finite-group]]). Thus $\widetilde\varphi=\operatorname{Ind}_H^G\varphi-d\operatorname{Ind}_H^G1_H+d1_G$ is an integral combination of honest characters. Each honest character has integral coefficients in the irreducible-character basis: its coefficient at $\chi_i$ is its inner product with $\chi_i$, a dimension of an intertwiner space ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]], [[thm-character-inner-product-computes-intertwiner-dimension]]). Consequently $\widetilde\varphi=\sum_i n_i\chi_i$ with $n_i\in\mathbb Z$, so it is a virtual character ([[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F2] For class functions $\alpha$ on $H$ and $\beta$ on $G$ one has $\langle\operatorname{Ind}_H^G\alpha,\beta\rangle_G=\langle\alpha,\operatorname{Res}_H^G\beta\rangle_H$ ([[lem-induction-restriction-reciprocity-for-class-functions]]).

[F3] The inner product $\langle\alpha,\beta\rangle=\frac1{|G|}\sum_{g\in G}\alpha(g)\overline{\beta(g)}$ is linear in the first argument and conjugate-linear in the second, and $\langle 1_G,1_G\rangle=1$; the same holds on $H$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F4] Irreducible complex characters $\psi_1,\psi_2$ of a finite group satisfy $\langle\psi_1,\psi_2\rangle=\delta_{12}$; the trivial character $1_H$, being the character of the one-dimensional trivial representation, is irreducible with $\langle 1_H,1_H\rangle=1$, and since $\varphi\ne1_H$ the characters $\varphi$ and $1_H$ are distinct irreducibles, so $\langle\varphi,1_H\rangle=0$ and $\langle\varphi,\varphi\rangle=1$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]], [[def-irreducible-complex-character]], [[def-trivial-regular-and-permutation-representations]]).

## Proof

**Proof technique:** direct.

1.1 With $\theta=\varphi-\varphi(1)1_H$ one computes $\langle\theta,\theta\rangle_H=\langle\varphi,\varphi\rangle-2\varphi(1)\langle\varphi,1_H\rangle+\varphi(1)^2\langle1_H,1_H\rangle=1+0+\varphi(1)^2$, using the orthonormality data of [F4] and the linearity of the inner product in its first argument. [F3, F4, algebra]

2.1 Similarly $\langle\theta,1_H\rangle_H=\langle\varphi,1_H\rangle-\varphi(1)\langle1_H,1_H\rangle=0-\varphi(1)=-\varphi(1)$, and hence by [F2] $\langle\operatorname{Ind}_H^G\theta,1_G\rangle_G=\langle\theta,\operatorname{Res}_H^G1_G\rangle_H=-\varphi(1)$. [F2, F4, step 1.1, algebra]

2.2 By [F2] and the restriction identity of [F1], $\langle\operatorname{Ind}_H^G\theta,\operatorname{Ind}_H^G\theta\rangle_G=\langle\theta,\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta\rangle_H=\langle\theta,\theta\rangle_H=1+\varphi(1)^2$. [F1, F2, step 1.1]

3.1 Expanding $\widetilde\varphi=\operatorname{Ind}_H^G\theta+\varphi(1)1_G$ and using linearity in the first slot and conjugate-linearity in the second (the cross inner products are the equal real number $-d$) together with $\langle1_G,1_G\rangle=1$ gives $\langle\widetilde\varphi,\widetilde\varphi\rangle_G=\langle\operatorname{Ind}_H^G\theta,\operatorname{Ind}_H^G\theta\rangle_G+2\varphi(1)\langle\operatorname{Ind}_H^G\theta,1_G\rangle_G+\varphi(1)^2\langle1_G,1_G\rangle_G=(1+\varphi(1)^2)-2\varphi(1)^2+\varphi(1)^2=1$. [F3, step 2.1, step 2.2, algebra]

4.1 For the expansion $\widetilde\varphi=\sum_in_i\chi_i$ of the virtual character $\widetilde\varphi$ over the irreducible characters of $G$ in [F1], orthonormality [F4] gives $\sum_in_i^2=\langle\widetilde\varphi,\widetilde\varphi\rangle_G=1$; as the coefficients $n_i$ are integers, exactly one of them equals $\pm1$ and all others are $0$, so $\widetilde\varphi=\pm\chi$ for some irreducible character $\chi$ of $G$. [F1, F4, step 3.1, algebra]

5.1 Since $\widetilde\varphi(1)=\varphi(1)\ge1$ by [F1] while $\chi(1)\ge1$ and $(-\chi)(1)<0$, the sign is positive, so $\widetilde\varphi=\chi$ is a genuine irreducible character of $G$. ∎ [F1, step 4.1, given]
