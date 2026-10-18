---
id: lem-it-gallager-input-maxima-attained
kind: lemma
title: Gallager and expurgated input-law maxima are attained
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-one-letter-gallager-exponent-functions, def-discrete-memoryless-channel, def-finite-probability-vector, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, def-real-power, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, thm-composition-of-continuous-functions, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the finite input simplex is compact and all selections in the positivity argument are from finite nonempty sets.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Prove continuity of both one-letter functions on the closed input simplex, including zero coordinates.
  - Prove the Gallager objective is positive and the expurgated objective is bounded away from zero.
  - Apply compactness only after the objectives are real-valued and continuous.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, complete author-hosted textbook"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 431–434; finite-DMC exponent optimizations over the input simplex.
    - title: "MIT 6.441 Information Theory, Lecture 11, Spring 2010"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/10b2f1e66d2d5b1240c92cf51d8b7b8a_MIT6_441S10_lec11.pdf
      locator: §§4–11, PDF pp. 4–12; finite-DMC Gallager function and maximization convention.
---

## Statement

For a finite DMC $W$, the functions $P\mapsto E_0(\rho,P)$ for each $0\le\rho\le1$ and $P\mapsto E_{0x}(\rho,P)$ for each $\rho\ge1$, defined in [[def-it-one-letter-gallager-exponent-functions]], are finite and continuous on the input probability simplex. Consequently, each attains a finite maximum there. At $\rho=0$, $E_0(0,P)=0$ for every $P$.

## Facts & Assumptions

**Given:** A finite DMC $W$, its finite nonempty alphabets, a real $\rho$ in one of the stated ranges, and an input law $P$.

[F1] [[def-it-one-letter-gallager-exponent-functions]]: $E_0$ is the negative logarithm of the finite sum of powers $1/(1+\rho)$ and $1+\rho$; $E_{0x}$ is $-\rho$ times the logarithm of the finite sum of $P(x)P(x')B(x,x')^{1/\rho}$, with $0^a=0$ for $a>0$.

[F2] [[def-discrete-memoryless-channel]]: each row $W(\cdot\mid x)$ is a probability vector.

[F3] [[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-natural-logarithm-laws]], and [[thm-exponential-is-strictly-increasing]]: $t^a$ is continuous for $t>0$ when $a$ is fixed, $0^a=0$ for $a>0$, and $\ln$ and $\exp$ are strictly increasing inverses.

[F4] [[thm-composition-of-continuous-functions]] and [[thm-algebra-of-continuous-functions]]: finite sums, products, and compositions of continuous real functions are continuous on their common domains.

[F5] [[def-finite-probability-vector]] and [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: the input simplex is nonempty, closed, and bounded in finite-dimensional Euclidean space, hence compact; every continuous real-valued function on it attains its maximum and minimum.

## Proof

1.1 For any fixed $a>0$, the convention in [F3] extends $t\mapsto t^a$ continuously to $t=0$: given $\epsilon>0$, put $\delta=\exp((\ln\epsilon)/a)>0$. If $0<t<\delta$, monotonicity of $\ln$ gives $a\ln t<\ln\epsilon$, so monotonicity of $\exp$ yields $0<t^a<\epsilon$; at $t=0$ the value is zero. Thus every positive real power used in [F1] is continuous on $[0,\infty)$. [F1, F3, algebra, choose]

1.2 For every $x$, $B(x,x)=\sum_yW(y\mid x)=1$ by [F2]. Thus the inner sum in $E_{0x}$ satisfies
$$\sum_{x,x'}P(x)P(x')B(x,x')^{1/\rho}\ge\sum_xP(x)^2\ge\frac1{|\mathcal X|}>0.$$
The last inequality follows from $|\mathcal X|\sum_xP(x)^2-(\sum_xP(x))^2=\sum_{x<x'}(P(x)-P(x'))^2\ge0$. Every coefficient $B(x,x')^{1/\rho}$ is a fixed finite real, so the inner sum is a continuous polynomial in $P$ and is bounded away from zero; consequently $E_{0x}(\rho,P)$ is real-valued and continuous. [F1, F2, F3, F4, given, algebra]

2.1 Fix $0<\rho\le1$. Each inner sum $A_y(P)=\sum_xP(x)W(y\mid x)^{1/(1+\rho)}$ is a continuous nonnegative linear function of $P$. By step 1.1, $A_y(P)^{1+\rho}$ is continuous, so $S(P)=\sum_yA_y(P)^{1+\rho}$ is continuous. For every input law $P$, some $x$ has $P(x)>0$; since row $W(\cdot\mid x)$ sums to one, some $y$ has $W(y\mid x)>0$, giving $A_y(P)>0$ and hence $S(P)>0$. Therefore $E_0(\rho,P)=-\ln S(P)$ is real-valued and continuous. At $\rho=0$, the sum is $\sum_y\sum_xP(x)W(y\mid x)=1$, so $E_0(0,P)=0$. [F1, F2, step 1.1, algebra]

3.1 The finite probability vectors form the nonempty simplex $\Delta=\{P:P(x)\ge0,\sum_xP(x)=1\}$ by [F5]. It is nonempty because a point mass belongs to it; each coordinate lies in $[0,1]$, so it is bounded; and the coordinate inequalities are closed half-spaces while the sum equation is a closed affine hyperplane, so $\Delta$ is closed. Heine–Borel makes $\Delta$ compact, and steps 1.2 and 2.1 show that each objective is continuous and real-valued on it. The extreme-value assertion in [F5] therefore gives an attained finite maximum for every stated $\rho$. [F5, step 1.2, step 2.1] ∎
