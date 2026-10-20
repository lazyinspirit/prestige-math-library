---
id: thm-canonical-rkhs-construction-and-reproducing-property
kind: theorem
title: A positive semidefinite kernel has a canonical reproducing kernel Hilbert space under countable choice
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-completion-of-a-normed-space
  - def-metric-completion
  - def-hilbert-space
  - def-countable-choice
  - thm-metric-completion-exists
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 5.8, printed pp. 167–173; the local proof supplies quotient and completion details.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.1, printed pp. 129–132; the local proof supplies the finite-Gram construction.'
---

## Statement

Assume the Axiom of Countable Choice. For every set $X$ and every real positive semidefinite kernel $k$ on $X$, the canonical construction from finitely supported coefficients, quotient by zero seminorm, and norm completion defines a real reproducing kernel Hilbert space $\mathcal H_k$. For every $x\in X$, its kernel section $k_x=k(\cdot,x)$ belongs to $\mathcal H_k$ and satisfies $\langle h,k_x\rangle_{\mathcal H_k}=h(x)$ for all $h\in\mathcal H_k$. The choice assumption here is countable choice; this statement does not assert the same construction in ZF without that assumption.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §5.8](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]

[[def-metric-completion]]

[[thm-metric-completion-exists]]

[[thm-metric-completion-carries-a-unique-banach-space-structure]]

[[def-completion-of-a-normed-space]]

[[thm-completion-of-an-inner-product-space-is-hilbert]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a set $X$, and a real positive semidefinite kernel $k$ on $X$.

[A1] The Axiom of Countable Choice says every countable sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] A real positive semidefinite kernel is symmetric and every finite Gram quadratic form is nonnegative ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

[F2] The completion used here is obtained by taking the metric completion ([[def-metric-completion]], [[thm-metric-completion-exists]]), equipping it with its unique compatible Banach structure under countable choice ([[thm-metric-completion-carries-a-unique-banach-space-structure]]), viewing it as a norm completion ([[def-completion-of-a-normed-space]]), and extending the real inner product uniquely under countable choice ([[thm-completion-of-an-inner-product-space-is-hilbert]]).

[F3] In a real inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof




1.1 Let $E_0$ be the finitely supported functions on $X$ and define $B(a,b)=\sum_{x,z}a(x)b(z)k(x,z)$, where each sum is over the finite supports. Symmetry and bilinearity follow from symmetry of $k$ and finite-sum algebra. For any $a$, listing its finite support gives $B(a,a)\ge0$ by [F1]. [given, F1, construct, algebra]


2.1 For $a,b\in E_0$ and $t\in\mathbb R$, $0\le B(a+tb,a+tb)=B(a,a)+2tB(a,b)+t^2B(b,b)$. If $B(b,b)>0$, nonnegativity of this quadratic for all $t$ gives $B(a,b)^2\le B(a,a)B(b,b)$; if $B(b,b)=0$, its linear coefficient must vanish, so $B(a,b)=0$. [step 1.1, algebra]


3.1 It follows that every $a\in N:=\{a:B(a,a)=0\}$ satisfies $B(a,b)=0$ for every $b\in E_0$. Hence $N$ is a subspace and the form descends to a well-defined positive definite inner product on $Q:=E_0/N$: changing a representative by an element of $N$ does not change any pairing, and a quotient class has zero squared norm exactly when it is the zero class. [step 2.1, algebra]


4.1 The induced inner product makes $Q$ a real inner-product space. By [F2] and [A1], its norm metric has a metric completion with compatible Banach structure, hence a norm completion; the inner product extends uniquely and makes the completion $\widehat Q$ a real Hilbert space. [step 3.1, A1, F2]


5.1 For each $x\in X$, the image $k_x$ of $[\delta_x]\in Q$ satisfies $\|k_x\|^2=B(\delta_x,\delta_x)=k(x,x)\ge0$. Thus the finite kernel sections are elements of $\widehat Q$, and their span is dense because the image of $Q$ is dense in its completion. [step 1.1, step 3.1, step 4.1, F1]


6.1 For $a\in E_0$, the quotient pairing gives $\langle[a],k_x\rangle=\sum_{z\in\operatorname{supp}(a)}a(z)k(z,x)$, independently of the representative by [step 3.1]. Given $h\in\widehat Q$, density in [step 4.1] provides an approximating sequence $[a_m]\to h$. By [F3], the real sequence $\langle[a_m],k_x\rangle$ is Cauchy, and if $[b_m]\to h$ is another such sequence then $|\langle[a_m-b_m],k_x\rangle|\le\|[a_m-b_m]\|\|k_x\|\to0$, so its limit is independent of the approximants. The extended inner product also satisfies [F3], hence this limit equals $\langle h,k_x\rangle$. [A1, step 3.1, step 4.1, step 5.1, F3]


7.1 Define the associated function of $h\in\widehat Q$ by $h(x):=\langle h,k_x\rangle$. Applying the extended pairing to $k_z$ gives $k_z(x)=\langle k_z,k_x\rangle=B(\delta_z,\delta_x)=k(z,x)=k(x,z)$, so $k_x$ is exactly the section $k(\cdot,x)$ and $\langle h,k_x\rangle=h(x)$ for every $h$. [step 5.1, step 6.1, F1]


8.1 If $h(x)=0$ for every $x\in X$, then $h$ is orthogonal to every section $k_x$ and therefore to their dense span from [step 5.1]. Continuity of the inner product gives $\langle h,h\rangle=0$, so positive definiteness gives $h=0$. Thus the associated-function map is injective and identifies $\widehat Q$ with a Hilbert space of functions having reproducing kernel $k$. [step 5.1, step 7.1, F3] ∎

