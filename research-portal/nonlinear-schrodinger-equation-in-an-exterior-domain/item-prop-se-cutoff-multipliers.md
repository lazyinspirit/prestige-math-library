---
title: Cutoff multipliers through order two and by duality
status: draft
research_item: prop-se-cutoff-multipliers
dependency_level: 7
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 8: ` paragraph following (3.4) `

## Prerequisites

- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives)
- [math:lem-axiom-of-choice-implies-countable-choice](https://alphabetamath.cc/item/lem-axiom-of-choice-implies-countable-choice)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and let its exterior $\Omega=\mathbb R^n\setminus\Theta$ be connected. Let $\varphi,\chi,\psi$ be the real smooth cutoffs of [def-se-control-cutoffs](item-def-se-control-cutoffs). Put $A=I-\Delta_D$, where $\Delta_D$ is the Dirichlet Laplacian, and let $H_D^\sigma(\Omega)$ be the spectral scale of [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Thus for $\sigma\ge0$ it is $D(A^{\sigma/2})$ with norm $\|A^{\sigma/2}u\|_2$; for $s>0$, $H_D^{-s}$ is the pivot antidual of $H_D^s$, the space of bounded conjugate-linear scalar functionals under the extended $L^2$ pairing.

For every $\sigma\in[-2,2]$, multiplication by each of $\varphi,\chi,\psi$ extends to a bounded complex-linear operator on $H_D^\sigma(\Omega)$. For negative orders the extension is determined by $\langle af,u\rangle_{-s,s}=\langle f,au\rangle_{-s,s}$ for $a\in\{\varphi,\chi,\psi\}$, $f\in H_D^{-s}$ and $u\in H_D^s$.

## Facts & Assumptions

**Given:** The geometry, cutoffs, spectral scale and Choice assumption in the Statement.

[F1] The cutoffs are smooth and real-valued; $\varphi$ is constant outside the annulus $R<|x|<R+1$, while $\chi$ and $\psi$ are compactly supported. They are constant near the obstacle boundary. [def-se-control-cutoffs](item-def-se-control-cutoffs)

[F2] $W^{2,\infty}(\Omega)$ consists of functions with essentially bounded weak derivatives through order two, including the function itself. [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[F3] Under Choice, the spectral cutoff lemma gives bounded multiplication on every $H_D^\sigma$, $-2\le\sigma\le2$, for each $a\in W^{2,\infty}(\Omega)$; its negative-order action is defined using multiplication by $\overline a$ on the positive space. [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The scale and its pivot pairing are those defined in [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F5] Assuming Countable Choice, the classical derivatives through order two of a $C^2$ function on an open subset of $\mathbb R^n$ are its weak derivatives. [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives) The stated Axiom of Choice implies Countable Choice. [math:lem-axiom-of-choice-implies-countable-choice](https://alphabetamath.cc/item/lem-axiom-of-choice-implies-countable-choice)

## Proof

**Given:** The geometry, cutoffs, spectral scale and Choice assumption in the Statement.

[F1] The cutoffs are smooth and real-valued; $\varphi$ is constant outside the annulus $R<|x|<R+1$, while $\chi$ and $\psi$ are compactly supported. They are constant near the obstacle boundary. [def-se-control-cutoffs](item-def-se-control-cutoffs)

[F2] $W^{2,\infty}(\Omega)$ consists of functions with essentially bounded weak derivatives through order two, including the function itself. [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[F3] Under Choice, the spectral cutoff lemma gives bounded multiplication on every $H_D^\sigma$, $-2\le\sigma\le2$, for each $a\in W^{2,\infty}(\Omega)$; its negative-order action is defined using multiplication by $\overline a$ on the positive space. [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The scale and its pivot pairing are those defined in [def-se-dirichlet-scale](item-def-se-dirichlet-scale).

[F5] Assuming Countable Choice, the classical derivatives through order two of a $C^2$ function on an open subset of $\mathbb R^n$ are its weak derivatives. [math:lem-classical-derivatives-are-weak-derivatives](https://alphabetamath.cc/item/lem-classical-derivatives-are-weak-derivatives) The stated Axiom of Choice implies Countable Choice. [math:lem-axiom-of-choice-implies-countable-choice](https://alphabetamath.cc/item/lem-axiom-of-choice-implies-countable-choice)



**Given:** The hypotheses and cutoffs in the Statement.

**Goal:** Establish the bounded multiplier operators and the stated negative-order action.

1.1 Every derivative of $\varphi$ of positive order is supported in the closed annulus $R\le|x|\le R+1$; smoothness makes each such derivative bounded there. The functions $\chi$ and $\psi$ and all their derivatives are bounded because they are smooth and compactly supported. By [F5], these classical derivatives through order two are the weak derivatives on the open set $\Omega$; hence the restrictions of all three cutoffs to $\Omega$ lie in $W^{2,\infty}(\Omega)$. [F1, F2, F5, given]

2.1 Apply the spectral cutoff lemma to each restriction and to the scale in the Statement. It gives the bounded operator for every $\sigma\in[-2,2]$. For $s>0$, its antidual formula contains $\overline a$; since each cutoff is real, this is $a$, giving the displayed formula. The lemma also identifies this extension with ordinary multiplication on $L^2$, so the operators agree with the original multiplier action. [F3, F4, step 1.1] ∎

## Source notes

The original article is cited for attribution of the cutoff statement on PDF page 8. The deduction above uses the independently supplied cutoff multiplier lemma; constancy near the boundary is sufficient here but is not required by that lemma through order two. No multiplier assertion at higher Dirichlet orders is made.
