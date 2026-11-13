---
id: lem-se-3-4
kind: lemma
domain: mathematics
title: "Lemma 3.4: free unique continuation on the scale"
status: draft
proof_strategy: contradiction
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - def-se-invisible-space
  - prop-se-scale-flow
  - prop-se-invisible-invariant
  - prop-se-compact-eigenfunction-vanishing
  - lem-se-spectral-cutoff-duality
  - math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
  - math:thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - math:def-algebraically-closed-field
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-invisible-space: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-invisible-invariant: mathematical-premise
  prop-se-compact-eigenfunction-vanishing: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue: mathematical-premise
  math:thm-fundamental-theorem-of-algebra-minimum-modulus-proof: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 15
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - def-se-invisible-space
  - prop-se-scale-flow
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - def-se-invisible-space
  - prop-se-scale-flow
  - prop-se-invisible-invariant
  - prop-se-compact-eigenfunction-vanishing
  - lem-se-spectral-cutoff-duality
  - math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
  - math:thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - math:def-algebraically-closed-field
  - math:def-axiom-of-choice
---

## Statement

Assume the Axiom of Choice and (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping, meaning that every complete admissible generalized ray $x:\mathbb R\to\overline\Omega$, parametrized at unit speed and including reflected and glancing behavior, leaves every compact set in finite forward time. Let $H_D^\sigma(\Omega)$ be the completed spectral scale of $I-\Delta_D$, $W(t)=e^{it\Delta_D}$ the free Dirichlet evolution, and $\varphi\in C^\infty(\mathbb R^n;[0,1])$ the real observation cutoff chosen as follows: fix $R>0$ with $\Theta\subset B_R(0)$ and require $\varphi(x)=0$ for $|x|\le R$, $\varphi(x)>0$ for $|x|>R$, and $\varphi(x)=1$ for $|x|\ge R+1$. For $T>0$, let $N_T^\sigma$ consist of the initial data $v\in H_D^\sigma$ for which $\varphi W(t)v=0$ in $H_D^\sigma$ for every $t\in[0,T]$. Then $N_T^\sigma=\{0\}$ for every $T>0$ and every $\sigma\in[-2,2]$. Consequently every such invisible free solution is identically zero.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-dirichlet-scale]]

[[def-se-control-cutoffs]]

[[def-se-invisible-space]]

[[prop-se-scale-flow]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The geometry and generalized-ray meaning of (H) are given by [[def-se-geometry]] and [[def-se-nontrapping]]. Choose $R>0$ with $\Theta\subset B_R(0)$ and the real cutoff $\varphi\in C^\infty(\mathbb R^n;[0,1])$ of [[def-se-control-cutoffs]], with $\varphi(x)=0$ for $|x|\le R$, $\varphi(x)>0$ for $|x|>R$, and $\varphi(x)=1$ for $|x|\ge R+1$. Its derivatives through order two are bounded: the positive-order derivatives vanish outside the compact annulus $R\le|x|\le R+1$ and are continuous there, and $0\le\varphi\le1$.

[F2] Under Choice, $H_D^\sigma$ is the completed spectral scale, and $W(t)$ is the consistent free Dirichlet group with $W(0)=I$ [[def-se-dirichlet-scale]] [[prop-se-scale-flow]] [[math:def-axiom-of-choice]]. For $T'\ge T$, $N_{T'}^\sigma\subseteq N_T^\sigma$; for $-2\le\sigma\le\sigma'\le2$, $N_T^{\sigma'}\subseteq N_T^\sigma$ under the canonical injective scale embedding [[def-se-invisible-space]].

[F3] For the fixed cutoff in [F1], for $T_0>0$ and $\sigma\in[-2,2)$, there are $T_0/2\le a<b\le T_0$ and a finite-dimensional complex space $N=N_a^\sigma=N_b^\sigma$ such that $\Delta_DN\subseteq N$, identifying $N$ with its image in $H_D^{\sigma-2}$. Here $\Delta_D:H_D^\sigma\to H_D^{\sigma-2}$ is the consistent scale extension [[prop-se-invisible-invariant]].

[F4] Every endomorphism of a nonzero finite-dimensional vector space over an algebraically closed field has an eigenvalue [[math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]. Every nonconstant complex polynomial has a complex root, so $\mathbb C$ is algebraically closed [[math:thm-fundamental-theorem-of-algebra-minimum-modulus-proof]], by the definition of an algebraically closed field [[math:def-algebraically-closed-field]].

[F5] Under Choice, an element $v\in H_D^\sigma$ satisfying $\Delta_Dv=\mu v$ in $H_D^{\sigma-2}$ and invisible to $\varphi$ in the test-pairing sense is zero, for any real $\sigma$ and complex $\mu$, on the connected exterior with the cutoff in [F1] [[prop-se-compact-eigenfunction-vanishing]]. Since the real cutoff in [F1] has bounded derivatives through order two, at order $-2$ multiplication by the real cutoff satisfies $\langle\varphi v,\eta\rangle_{-2,2}=\langle v,\varphi\eta\rangle_{-2,2}$; every compactly supported smooth test function and its product with $\varphi$ belong to $H_D^2$ [[lem-se-spectral-cutoff-duality]] [[def-se-dirichlet-scale]].

## Proof

**Given:** Choice, (H), and $T_0>0$.

**Goal:** Show $N_{T_0}^\sigma=\{0\}$ for every $\sigma\in[-2,2]$.

1.1 With the fixed cutoff in [F1], apply [F3] at $\sigma=-2$. Thus there are $a,b$ with $T_0/2\le a<b\le T_0$ and a finite-dimensional complex space $N=N_a^{-2}$ invariant under the scale Laplacian, viewed in $H_D^{-4}$. The injective scale identification makes its restriction a complex-linear endomorphism of $N$. [given, F1, F3]

2.1 Suppose $N\ne\{0\}$. By [F4], that endomorphism has an eigenvalue $\mu\in\mathbb C$ and a nonzero eigenvector $v\in N$. Thus $\Delta_Dv=\mu v$ in $H_D^{-4}$. [assume-contra, F4, step 1.1]

3.1 Since $v\in N_a^{-2}$, its observation at time zero is $\varphi W(0)v=\varphi v=0$ in $H_D^{-2}$. Pairing this identity with any compactly supported smooth test function $\eta$ and using the real-cutoff duality in [F5] gives $\langle v,\varphi\eta\rangle_{-2,2}=0$. Hence $v$ is invisible in precisely the test-pairing sense required by [F5]. [F2, F5, step 1.1, step 2.1]

4.1 The geometry, cutoff, eigenvalue equation and invisibility meet the hypotheses of [F5] at $\sigma=-2$. Consequently $v=0$, contradicting step 2.1. Therefore $N=N_a^{-2}=\{0\}$. [F1, F5, step 2.1, step 3.1, discharge-contradiction]

5.1 Since $a\le T_0$, time nesting gives $N_{T_0}^{-2}\subseteq N_a^{-2}=\{0\}$. For every $\sigma\in[-2,2]$, scale nesting gives $N_{T_0}^\sigma\subseteq N_{T_0}^{-2}$ under an injective embedding. Thus $N_{T_0}^\sigma=\{0\}$, including the endpoint $\sigma=2$. An invisible solution has zero initial datum and therefore equals $W(t)0=0$. [F2, step 4.1, discharge-contradiction] ∎

## Source notes

The original article is cited for attribution of Lemma 3.4 and its spectral argument on PDF page 11. The deduction above uses the stated supplier interfaces; the article's conclusion is not used as a premise.
