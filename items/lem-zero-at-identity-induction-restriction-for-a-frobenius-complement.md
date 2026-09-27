---
id: lem-zero-at-identity-induction-restriction-for-a-frobenius-complement
kind: lemma
title: "Zero at identity induction restriction for a frobenius complement"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-complement-and-frobenius-group, thm-frobenius-formula-for-induced-characters, def-virtual-character-and-character-ring-of-a-finite-group, def-induced-class-function-on-a-finite-group, def-class-function-and-the-space-of-complex-class-functions, def-subgroup]
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

Let $G$ be a finite Frobenius group with complement $H$, and let
$\theta\in\mathrm{cf}(H)$ be a complex class function on $H$ with
$\theta(1)=0$. Then

$$\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta=\theta .$$

## Facts & Assumptions

**Given:** A finite group $G$, a Frobenius complement $\{1\}<H<G$, a class function $\theta$ on $H$ with $\theta(1)=0$, and the induced class function $\operatorname{Ind}_H^G\theta$ of [[def-induced-class-function-on-a-finite-group]].

[F1] $\operatorname{Ind}_H^G\theta(h)=\frac{1}{|H|}\sum_{x\in G:\ x^{-1}hx\in H}\theta(x^{-1}hx)$ for every $h\in H$, and $\operatorname{Res}_H^G$ is restriction of functions ([[def-induced-class-function-on-a-finite-group]]).

[F2] $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$, and $\{1\}<H<G$ ([[def-frobenius-complement-and-frobenius-group]]).

[F3] A class function on $H$ satisfies $\theta(tkt^{-1})=\theta(k)$ for all $t,k\in H$ ([[def-class-function-and-the-space-of-complex-class-functions]]).

[F4] $H$ contains the identity, is closed under products, and is closed under inverses ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Let $h\in H$ and let $x\in G$ satisfy $x^{-1}hx\in H$, with $h\ne1$. Then $h=x\,(x^{-1}hx)\,x^{-1}$ lies in $H\cap xHx^{-1}$, and $h\ne1$; so the complement condition forces $x\in H$. Consequently, for $h\ne1$, the summation index set $\{x\in G:x^{-1}hx\in H\}$ is contained in $H$. [F2, F4, given]

1.2 For $x\in H$ one has $x^{-1}hx\in H$ because $H$ is closed under products and inverses, and then $\theta(x^{-1}hx)=\theta(h)$ because $\theta$ is a class function on $H$. [F3, F4, given]

1.3 For $h=1$ one has $x^{-1}1x=1$ for every $x\in G$, so each summand in [F1] is $\theta(1)=0$ and $\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta(1)=0=\theta(1)$. [F1, given]

2.1 If $h\in H\setminus\{1\}$, the elements $x\in G$ with $x^{-1}hx\in H$ are exactly the elements of $H$, by steps 1.1 and 1.2; hence $\operatorname{Res}_H^G\operatorname{Ind}_H^G\theta(h)=\frac{1}{|H|}\sum_{x\in H}\theta(h)=\theta(h)$. [F1, step 1.1, step 1.2, algebra]

3.1 The two cases $h=1$ and $h\ne1$ cover every element of $H$, so the induced class function restricts to $\theta$, as claimed. ∎ [step 2.1, step 1.3, cases]
