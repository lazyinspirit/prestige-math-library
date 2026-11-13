---
title: One second-order flat reflection on L² and H²
status: draft
research_item: lem-se-author-891dd21c27d6-flat-second-order-reflection
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:thm-wkp-extension-from-a-half-space](https://alphabetamath.cc/item/thm-wkp-extension-from-a-half-space)


## Statement

Assume AC. Let $n\ge1$ be an integer and fix $\mathbb K\in\{\mathbb R,\mathbb C\}$; all function spaces below are over $\mathbb K$. Write $H_+=\mathbb R^{n-1}\times(0,\infty)$ with coordinates $(y,t)$. When $n=1$, $\mathbb R^0$ is a single point and $|y|=0$. Define one linear operator on $L^2(H_+)$ by
$$\mathcal Ef(y,t)=f(y,t)\quad(t>0),\qquad \mathcal Ef(y,t)=3f(y,-t)-2f(y,-2t)\quad(t<0).$$
It restricts to $f$ on $H_+$, is bounded $L^2(H_+)\to L^2(\mathbb R^n)$ and maps $W^{2,2}(H_+)$ boundedly into $W^{2,2}(\mathbb R^n)$. For $f\in W^{2,2}(H_+)$, the same formula matches the value and first normal derivative at $t=0$, in the weak trace sense used by the half-space extension theorem. For every $a,b>0$, if $f=0$ almost everywhere on $H_+\setminus\{(y,t):|y|<a,\ 0<t<b\}$, then $\mathcal Ef=0$ almost everywhere on $\mathbb R^n\setminus\{(y,t):|y|<a,\ |t|<b\}$. In particular these smaller bounds leave positive margins inside any larger doubled cylinder $\{(y,t):|y|<A,\ |t|<B\}$ with $A>a$ and $B>b$.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available. Its use here is inherited through the weak trace and integration-by-parts interfaces of the half-space supplier in F3; the reflection coefficients are explicit.

[F2] [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) defines the weak-derivative $W^{2,2}$ space, its component-sum norm and almost-everywhere classes.

[F3] [math:thm-wkp-extension-from-a-half-space](https://alphabetamath.cc/item/thm-wkp-extension-from-a-half-space) gives the $k=2,p=2$ reflection over either scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$ with coefficients solving $a_1+a_2=1$ and $-a_1-2a_2=1$. Its Facts F4–F5 and proof step 3.2 establish the required one-sided weak traces and cancellation of interface terms without assuming smooth-up-to-boundary density.

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 The moment equations have the solution $a_1=3,a_2=-2$, so the formula is precisely the $k=2$ operator from the half-space theorem. It already defines a map on every $L^2$ class: the two reflected coordinate maps preserve null sets. Changing variable $\tau=-jt$ gives $\|f(y,-jt)\|_{L^2(t<0)}=j^{-1/2}\|f\|_{L^2(H_+)}$, so the triangle inequality bounds the negative part by $(3+\sqrt2)\|f\|_2$. Adding the unchanged positive part gives a finite common $L^2$ bound. Linearity and the restriction identity follow from the formula. [F2, F3, given]

2.1 For a multi-index $\alpha=(\beta,m)$ with $|\alpha|\le2$, the candidate negative-side derivative is $g_\alpha=3(-1)^m(D^\alpha f)(y,-t)-2(-2)^m(D^\alpha f)(y,-2t)$. Its $L^2$ norm is at most $(3+2^{m+1/2})\|D^\alpha f\|_2$ by the same variable change. The positive-side derivative is $D^\alpha f$. The one-sided traces of order zero and one exist in the half-space theorem’s section sense, and their reflection coefficients are respectively $3-2=1$ and $-3+4=1$. In the half-space integration-by-parts identity the potential surface terms for second derivatives are multiples of these two mismatches; both vanish. Tangential derivatives remain on the boundary test function as in that theorem, so no derivative of an unconstructed boundary trace is used. Thus the fields $g_\alpha$ and their positive-side counterparts are the actual global weak derivatives. Summing their squared bounds proves the $W^{2,2}$ estimate for the very same $L^2$ map. [F2, F3, step 1.1, algebra]

3.1 Let $a,b>0$ and suppose $f$ vanishes almost everywhere outside $|y|<a,0<t<b$ in $H_+$. By the null-set preservation in step 1.1, both negative-side summands vanish almost everywhere whenever $|y|\ge a$ or $t\le-b$: in the latter case $-jt\ge b$ for $j=1,2$. The positive side is unchanged, and the hyperplane $t=0$ is a null set, so $\mathcal Ef$ vanishes almost everywhere outside $|y|<a,|t|<b$. If $A>a$ and $B>b$, these bounds retain margins $A-a$ at the lateral edge when $n>1$ and $B-b$ at the top and bottom of the larger doubled cylinder. For $n=1$ there is no lateral edge. This proves the localization assertion and completes the endpoint construction without an unproved density passage. [F3, step 1.1, step 2.1, algebra] ∎


## Source notes

The matching is justified by the exact existing weak half-space theorem, not by treating even reflection as an H² extension. No external extension theorem or fresh source-reading claim is used.
