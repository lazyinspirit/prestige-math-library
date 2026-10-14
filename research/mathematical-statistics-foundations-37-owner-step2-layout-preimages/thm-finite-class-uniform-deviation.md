---
id: thm-finite-class-uniform-deviation
kind: theorem
title: "Uniform deviation bound for a finite bounded class"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-markov-inequality-for-random-variables
  - def-natural-logarithm
  - def-empirical-process-and-rademacher-process
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-real-exponential-function-and-e
  - lem-bounded-variable-hoeffding-mgf
  - lem-measurable-functions-preserve-independence
  - lem-probability-measure-basic-identities
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-change-of-variables-for-expectation
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-factorization-of-expectations-for-independent-variables
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $n\ge1$, let $Z_1,\ldots,Z_n$ be IID observations with law $P$, and let $\mathcal F$ be a finite nonempty class of measurable functions $f:\mathcal X\to[0,1]$. For every $\epsilon>0$,

$$P\left(\sup_{f\in\mathcal F}|P_nf-Pf|\ge\epsilon\right)\le2|\mathcal F|e^{-2n\epsilon^2}.$$

Here $P_nf=n^{-1}\sum_i f(Z_i)$ and $Pf=\int f\,dP$. The proof uses only scalar exponential moments and finite independence; it does not assume the Axiom of Choice.

## Facts & Assumptions

**Given:** IID observations, a finite nonempty measurable $[0,1]$-valued class, $n\ge1$, and $\epsilon>0$.

[F1] $P_nf=n^{-1}\sum_i f(Z_i)$ and $Pf=\int f\,dP$ ([[def-empirical-process-and-rademacher-process]]).

[F2] IID means independent and identically distributed ([[def-identically-distributed-and-iid-random-variables]]); independence of random elements is defined through their generated sigma-algebras ([[def-independent-random-elements]]).

[F3] Measurable functions of independent random elements remain independent ([[lem-measurable-functions-preserve-independence]]).

[F4] If $Z$ has law $P$, then $\mathbb E f(Z)=\int f\,dP$ for integrable $f$ ([[def-law-or-distribution-of-a-random-element]], [[thm-change-of-variables-for-expectation]]).

[F5] If $0\le Y\le1$ almost surely, then $\mathbb E e^{\lambda(Y-\mathbb EY)}\le e^{\lambda^2/8}$ for all real $\lambda$ ([[lem-bounded-variable-hoeffding-mgf]]).

[F6] For independent real random variables $X_i$ and Borel maps $g_i$, the expectation of a finite product of the nonnegative variables $g_i(X_i)$ factors into the product of expectations; also, $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-factorization-of-expectations-for-independent-variables]], [[thm-exponential-addition-formula]]).

[F7] For nonnegative $W$ and $a>0$, $P(W\ge a)\le\mathbb EW/a$ ([[cor-markov-inequality-for-random-variables]]).

[F8] A finite union of events has probability at most the sum of their probabilities ([[lem-probability-measure-basic-identities]]).

[F9] For $c\in\mathbb R$, the translation $t\mapsto t-c$ is Borel measurable because its strict upper threshold set at $a$ is $(a+c,\infty)$. For $\lambda\in\mathbb R$, the map $t\mapsto e^{\lambda t}$ is Borel measurable: its upper threshold set is $\mathbb R$ for $a\le0$; for $a>0$ it is $\mathbb R$ if $\lambda=0$ and $a<1$, empty if $\lambda=0$ and $a\ge1$, $(\log(a)/\lambda,\infty)$ if $\lambda>0$, and $(-\infty,\log(a)/\lambda)$ if $\lambda<0$. These formulas use $\exp(0)=1$, positivity, strict increase, and the inverse relation of $\exp$ and $\log$. Borel maps preserve measurability under composition, and finite arithmetic and lattice operations preserve measurability ([[cor-exponential-reciprocal-and-positivity]], [[def-natural-logarithm]], [[def-real-exponential-function-and-e]], [[thm-composition-with-borel-functions-preserves-measurability]], [[thm-exponential-is-strictly-increasing]], [[thm-threshold-characterisations-of-real-and-extended-real-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

## Proof

**Given:** IID observations, a finite nonempty measurable $[0,1]$-valued class, $n\ge1$, and $\epsilon>0$.

1.1 Fix $f\in\mathcal F$ and put $Y_i=f(Z_i)$. By [F2]–[F3], the $Y_i$ are measurable independent real random variables. By [F4], $\mathbb E Y_i=Pf$. The translation in [F9] is Borel measurable, so applying [F3] to $W_i:=Y_i-Pf$ shows that the $W_i$ are measurable, independent, and centered. Also $0\le Y_i\le1$ almost surely. [F1, F2, F3, F4, F9, given]

1.2 For every $\lambda\in\mathbb R$, apply [F5] to $Y_i$, whose range is $[0,1]$, to obtain $\mathbb E e^{\lambda W_i}=\mathbb E e^{\lambda(Y_i-\mathbb E Y_i)}\le e^{\lambda^2/8}$. By [F9], $t\mapsto e^{\lambda t}$ is Borel measurable, so applying [F3] to the independent $W_i$ shows that $e^{\lambda W_i}$ are measurable and independent. Their expectations are finite by the displayed bound. The exponential addition formula and the nonnegative product case of [F6] now give

$$\mathbb E e^{\lambda\sum_i W_i}=\mathbb E\prod_i e^{\lambda W_i}=\prod_i\mathbb E e^{\lambda W_i}\le e^{n\lambda^2/8}.$$

The sum in the left exponential is measurable by [F9]'s arithmetic-measurability clause and composition clause. [F5, F6, F9, step 1.1]

2.1 For $\lambda>0$, [F7] and step 1.2 give $P(\sum_i W_i\ge n\epsilon)\le\exp(-\lambda n\epsilon+n\lambda^2/8)$. Setting $\lambda=4\epsilon$ gives $P(P_nf-Pf\ge\epsilon)\le e^{-2n\epsilon^2}$. [F1, F7, step 1.2, algebra]

2.2 Applying step 2.1's Markov argument to $-\sum_iW_i$ uses the bound from step 1.2 at $\lambda=-4\epsilon$ (obtained by applying [F5] to each $Y_i$) and gives $P(P_nf-Pf\le-\epsilon)\le e^{-2n\epsilon^2}$. The finite union bound [F8] therefore gives $P(|P_nf-Pf|\ge\epsilon)\le2e^{-2n\epsilon^2}$. [F1, F5, F7, F8, step 1.2, step 2.1, algebra]

3.1 The event in the statement is the union over the finite class of the events in step 2.2. A second application of [F8] gives the stated factor $2|\mathcal F|$. [F8, step 2.2] ∎
