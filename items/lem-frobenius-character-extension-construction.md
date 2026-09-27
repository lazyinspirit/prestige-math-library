---
id: lem-frobenius-character-extension-construction
kind: lemma
title: "Frobenius character extension construction"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-zero-at-identity-induction-restriction-for-a-frobenius-complement, thm-frobenius-formula-for-induced-characters, def-irreducible-complex-character, def-induced-class-function-on-a-finite-group, def-virtual-character-and-character-ring-of-a-finite-group, def-class-function-and-the-space-of-complex-class-functions, def-trivial-regular-and-permutation-representations, prop-basic-value-properties-of-a-complex-character, def-frobenius-complement-and-frobenius-group]
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
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$. For a nontrivial
irreducible complex character $\varphi$ of $H$ put
$\theta:=\varphi-\varphi(1)\,1_H$ and
$\widetilde\varphi:=\operatorname{Ind}_H^G\theta+\varphi(1)\,1_G$, where
$1_H$ and $1_G$ denote the constant function with value $1$ on $H$ and on $G$.
Then

$$\widetilde\varphi\big|_H=\varphi,\qquad \widetilde\varphi(1)=\varphi(1),\qquad \widetilde\varphi(g)=\varphi(1)\ \text{ for every }g\in G \text{ lying in no conjugate of }H .$$

## Facts & Assumptions

**Given:** A finite group $G$ with Frobenius complement $\{1\}<H<G$, a nontrivial irreducible complex character $\varphi$ of $H$, and the class functions $\theta=\varphi-\varphi(1)1_H$ and $\widetilde\varphi=\operatorname{Ind}_H^G\theta+\varphi(1)1_G$.

[F1] Induction ${\operatorname{Ind}}_H^G$ is $\mathbb C$-linear on class functions, is given on $g\in G$ by the Frobenius sum, and agrees with honest induction on honest characters; the constant functions $1_H$ and $1_G$ are the characters of the trivial one-dimensional representations, hence are characters ([[def-induced-class-function-on-a-finite-group]], [[def-trivial-regular-and-permutation-representations]]).

[F2] If $\theta\in\mathrm{cf}(H)$ satisfies $\theta(1)=0$, then $\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta=\theta$ ([[lem-zero-at-identity-induction-restriction-for-a-frobenius-complement]]).

[F3] $\varphi$ is the character of an irreducible complex representation of $H$, so $\varphi$ is a class function with $\varphi(1)=\dim V\ge1$; the constant function $1_H$ is the character of the trivial one-dimensional representation, and $\varphi\ne1_H$ ([[def-irreducible-complex-character]], [[prop-basic-value-properties-of-a-complex-character]], [[def-trivial-regular-and-permutation-representations]]).

[F4] A virtual character of a finite group is an integral linear combination of irreducible complex characters; the class functions on a finite group form a complex vector space ([[def-virtual-character-and-character-ring-of-a-finite-group]], [[def-class-function-and-the-space-of-complex-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 The function $\theta=\varphi-\varphi(1)1_H$ is a class function on $H$ with $\theta(1)=\varphi(1)-\varphi(1)\cdot1=0$; it is a virtual character of $H$, being the integral combination $\varphi-\varphi(1)1_H$ of the irreducible character $\varphi$ and the trivial character $1_H$. [F3, F4, given, algebra]

2.1 By the linearity of induction in [F1], $\operatorname{Ind}_H^G\theta=\operatorname{Ind}_H^G\varphi-\varphi(1)\operatorname{Ind}_H^G1_H$; here $\operatorname{Ind}_H^G\varphi$ and $\operatorname{Ind}_H^G1_H$ are honest characters of $G$, since $\varphi$ and $1_H$ are characters of $H$, so $\operatorname{Ind}_H^G\theta$ is a virtual character of $G$, and so is $\widetilde\varphi=\operatorname{Ind}_H^G\theta+\varphi(1)1_G$. [F1, step 1.1]

2.2 Since $\theta(1)=0$, [F2] gives $\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta=\theta$, and therefore $\widetilde\varphi|_H=\theta+\varphi(1)1_H=\varphi-\varphi(1)1_H+\varphi(1)1_H=\varphi$. [F2, step 1.1, algebra]

3.1 Evaluating the same identity at the identity gives $\operatorname{Ind}_H^G\theta(1)=\theta(1)=0$ and hence $\widetilde\varphi(1)=0+\varphi(1)\cdot1=\varphi(1)$. [F2, step 2.2, algebra]

4.1 Let $g\in G$ lie in no conjugate of $H$, that is $x^{-1}gx\notin H$ for every $x\in G$. Then every summand in the Frobenius sum for $\operatorname{Ind}_H^G\theta(g)$ is absent, so $\operatorname{Ind}_H^G\theta(g)=0$ and $\widetilde\varphi(g)=0+\varphi(1)\cdot1=\varphi(1)$. ∎ [F1, given, algebra]
