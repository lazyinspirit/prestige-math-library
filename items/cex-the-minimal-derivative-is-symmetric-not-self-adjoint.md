---
id: cex-the-minimal-derivative-is-symmetric-not-self-adjoint
kind: counterexample
title: "The minimal derivative has deficiency indices (1,1) and many self-adjoint extensions"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cex-symmetric-need-not-be-self-adjoint, def-deficiency-subspaces-and-deficiency-indices, thm-von-neumann-self-adjoint-extension-parameterization, cor-self-adjoint-extension-exists-iff-deficiency-indices-agree, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-absolutely-continuous-function, ex-periodic-derivative-and-its-unitary-translation-group]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Example 7.23 and Remark 7.24, pp.32-34"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, (2.104)-(2.107) with proof, pp.91-95"
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume the Axiom of Choice (and hence Countable Choice and Dependent Choice). Let $T$ be the
minimal operator of [[cex-symmetric-need-not-be-self-adjoint]], that is
$T=-i\,d/dx$ on $D(T)=\{f\in AC[0,1]:f'\in L^2(0,1),\ f(0)=f(1)=0\}$ in
$H=L^2(0,1)$. Then $T$ is a closed symmetric operator with
$d_+(T)=d_-(T)=1$: $K_+=\ker(T^*-i)=\mathbb C\,e^{-x}$ and
$K_-=\ker(T^*+i)=\mathbb C\,e^{x}$. Consequently $T$ is not self-adjoint but
has infinitely many self-adjoint extensions, and these are exactly the
operators
$$T_\mu f=-if',\qquad D(T_\mu)=\{f\in AC[0,1]:f'\in L^2(0,1),\ f(1)=\mu f(0)\},\qquad |\mu|=1 .$$

## Facts & Assumptions

[A1] The minimal operator $T$ is densely defined, closed and symmetric but not self-adjoint, and $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ with $T^*g=-ig'$ ([[cex-symmetric-need-not-be-self-adjoint]]).

[A2] Self-adjoint extensions of a closed symmetric operator correspond bijectively to unitary operators $K_+\to K_-$, with domain $D(T)\oplus\{u+Vu:u\in K_+\}$ and action $T_V(x+u+Vu)=Tx+iu-iVu$ ([[thm-von-neumann-self-adjoint-extension-parameterization]], [[def-deficiency-subspaces-and-deficiency-indices]]).

[A3] A closed symmetric operator has a self-adjoint extension if and only if its deficiency indices agree; its extensions are indexed by the unitaries between the deficiency subspaces ([[cor-self-adjoint-extension-exists-iff-deficiency-indices-agree]]).

## Counterexample

**Proof technique:** direct.

**Given:** The minimal operator $T$ on $H=L^2(0,1)$.

1.1 By [[cex-symmetric-need-not-be-self-adjoint]], $T$ is densely defined, closed, symmetric and not self-adjoint, and $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ with $T^*g=-ig'$. [A1]

1.2 $\ker(T^*-i)=\mathbb C e^{-x}$ and $\ker(T^*+i)=\mathbb C e^{x}$: the equations $T^*g=ig$ and $T^*g=-ig$ read $g'=-g$ and $g'=g$. [A1]

2.1 Hence $d_+=d_-=1$ and $K_+\cap K_-=\{0\}$; by the von Neumann parameterization the self-adjoint extensions of $T$ correspond bijectively to the unitaries $V:\mathbb C e^{-x}\to\mathbb C e^{x}$, that is, to the numbers $\lambda$ with $V(e^{-x})=\lambda e^{x}$ and $|\lambda|=\|e^{-x}\|/\|e^{x}\|=1/e$. [A2, step 1.2]

2.2 Domains: by the parameterization, $D(T_V)=D(T)\oplus\{u+Vu:u\in K_+\}$. For $u=ce^{-x}$ the element is $x_T+c(e^{-x}+\lambda e^{x})$ with $x_T(0)=x_T(1)=0$, so its endpoint values are $c(1+\lambda)$ at $0$ and $c(e^{-1}+\lambda e)$ at $1$; hence $D(T_V)$ consists exactly of the absolutely continuous $f$ with $f' \in L^2$ and $f(1)=\mu f(0)$, where $\mu=(e^{-1}+\lambda e)/(1+\lambda)$. [A2, step 1.2]

3.1 In particular there are infinitely many self-adjoint extensions, so $T$ is not self-adjoint; the case of $\lambda$ equal to a suitable value reproduces the periodic operator of [[ex-periodic-derivative-and-its-unitary-translation-group]]. [A2, A3, step 2.1]

3.2 The map $\lambda\mapsto\mu$ is a bijection from $\{\lambda:|\lambda|=1/e\}$ onto the unit circle: for $|\lambda|=1/e$ one computes $|\mu|=1$, and for $|\mu|=1$ the formula $\lambda=(\mu-e^{-1})/(e-\mu)$ inverts it and satisfies $|\lambda|=1/e$. [step 2.2]

4.1 Therefore the self-adjoint extensions of $T$ are exactly the operators $T_\mu$ of the statement, one for each $\mu$ on the unit circle; $T$ itself is not among them because it is not self-adjoint. [A2, step 3.1, step 3.2] ∎
