---
id: lem-finite-alphabet-iid-information-aep
title: "Finite-alphabet IID information AEP with a variance bound"
kind: lemma
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-alphabet-iid-source
  - def-finite-law-self-information-and-entropy
  - def-finite-source-information-density-and-typical-set
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-identically-distributed-and-iid-random-variables
  - cor-iid-finite-variance-weak-law
  - def-convergence-in-probability
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §3.1"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: Convergence and Asymptotic Equipartition Property"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: pass
---

## Statement

Let $(X_i)_{i\ge1}$ be a finite-alphabet IID source with one-letter law $p$,
entropy $H(p)$, and surprisal variance $V(p)$ as defined above. For
$I_n(X^n)=-n^{-1}\ln p^n(X^n)$, defined almost surely on $A_+^n$, every
$n\ge1$ and $\varepsilon>0$ satisfy
$$\mathbb P(|I_n(X^n)-H(p)|\ge\varepsilon)\le\frac{V(p)}{n\varepsilon^2}.$$
Consequently $I_n(X^n)\to H(p)$ in probability.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $A$, a probability law $p$ on $A$, and
an IID sequence with that law.

[F1] [[def-finite-alphabet-iid-source]]: The finite vectors $X^n$ have law
$p^n(x^n)=\prod_{i=1}^np(x_i)$.

[F2] [[def-finite-law-self-information-and-entropy]]: On $A_+$,
$\imath_p(a)=-\ln p(a)$ and
$V(p)=\sum_{a\in A_+}p(a)(\imath_p(a)-H(p))^2$.

[F3] [[def-it-information-units-and-logarithm-base]]: An unmarked logarithm
is $\ln$, the natural logarithm, and information is measured in nats.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]:
$H(p)=-\sum_{a:p(a)>0}p(a)\ln p(a)$ with zero terms set to zero, in natural units.

[F5] [[def-finite-source-information-density-and-typical-set]]:
$I_n(x^n)=-n^{-1}\ln p^n(x^n)$ on $A_+^n$.

[F6] [[def-identically-distributed-and-iid-random-variables]]: IID means that
the whole family is independent and identically distributed; independence is
mutual independence.

[F7] [[cor-iid-finite-variance-weak-law]]: For IID square-integrable real
variables with mean $\mu$ and variance $\sigma^2$, the sample mean converges
in probability to $\mu$ and
$\mathbb P(|S_n/n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$.

[F8] [[def-convergence-in-probability]]: $Y_n\to Y$ in probability when
$\mathbb P(|Y_n-Y|>\varepsilon)\to0$ for every $\varepsilon>0$.

## Proof

**Given:** The alphabet, law, and IID source in the Statement.

1.1 Define $Y_i=\imath_p(X_i)$ when $X_i\in A_+$ and $Y_i=0$ otherwise. This is the same finite-valued measurable function of every $X_i$, so its range is finite. Take arbitrary distinct indices $i_1,\ldots,i_m$ and Borel sets $B_1,\ldots,B_m$. Then $\bigcap_{j=1}^m\{Y_{i_j}\in B_j\}=\bigcap_{j=1}^m\{X_{i_j}\in\imath_p^{-1}(B_j)\}$; mutual independence in [F6] gives probability $\prod_{j=1}^m\mathbb P(X_{i_j}\in\imath_p^{-1}(B_j))$, and the common law $p$ makes every $Y_i$ have the same law. Thus the $Y_i$ are IID. [given, F1, F2, F6, construct]

2.1 Since $\mathbb P(X_i=a)=p(a)$, zero-mass symbols contribute nothing, and finite summation using [F4] gives $\mathbb E[Y_i]=H(p)$; the definition of $V(p)$ in [F2] gives $\operatorname{Var}(Y_i)=V(p)$. Finite range gives square integrability. [F2, F3, F4, step 1.1, algebra]

3.1 For each fixed $n$, each event $\{X_i\notin A_+\}$ has probability zero because its probability is $\sum_{a\notin A_+}p(a)=0$; the finite union also has probability zero. On its complement, [F1] and [F5] give $I_n(X^n)=n^{-1}\sum_{i=1}^nY_i$. Applying [F7] with mean $H(p)$ and variance $V(p)$ proves the displayed tail bound. Its strict-tail version and [F8] give convergence in probability. [F1, F5, F7, F8, step 1.1, step 2.1, algebra] ∎
