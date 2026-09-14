---
id: ex-simple-random-walk-transition-kernel
kind: example
title: "Simple random-walk transition kernel"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-time-homogeneous-markov-chain-with-transition-kernel, def-discrete-generator-of-a-countable-state-transition-matrix, def-independent-random-elements, def-identically-distributed-and-iid-random-variables, thm-grouping-independent-sigma-algebras]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Roch, Markov Chains: Martingale Methods, Exercise 24.1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "Exercise 24.1, printed p. 2"
---

## Statement

Assume Choice. Let $X_0=x_0\in\mathbb Z$ and
$$X_n=x_0+\sum_{k=1}^n\xi_k,$$ where the $\xi_k$ are IID with $\mathbb P(\xi_k=1)=\mathbb P(\xi_k=-1)=1/2$. Then $X$ is a Markov chain on $\mathbb Z$ with $$p(x,x+1)=p(x,x-1)=\frac12,$$ all other entries zero, and generator $$Lf(x)=\frac{f(x+1)-2f(x)+f(x-1)}2.$$

## Facts & Assumptions

**Given:** Choice and the displayed IID signs.

[F1] Disjoint blocks of an independent family generate independent sigma-algebras. ([[thm-grouping-independent-sigma-algebras]])

[F2] The Markov condition is the conditional transition identity. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

[F3] The discrete generator is $Lf(x)=\sum_yp(x,y)(f(y)-f(x))$ for bounded $f$. ([[def-discrete-generator-of-a-countable-state-transition-matrix]])

## Verification

1.1 The natural past $\sigma(X_0,\ldots,X_n)$ equals [F1, F2] $\sigma(\xi_1,\ldots,\xi_n)$ because $x_0$ is fixed and $\xi_k=X_k-X_{k-1}$. By [F1], $\xi_{n+1}$ is independent of this past. Thus for every $A\subseteq\mathbb Z$, $$ \mathbb P(X_{n+1}\in A\mid\mathcal F_n) =\tfrac12 1_A(X_n+1)+\tfrac12 1_A(X_n-1)=p(X_n,A). $$ This includes $A=\varnothing$, $A=\mathbb Z$, and $n=0$, and verifies [F2]. Choice is used only for the displayed conditional expectation. [F1, F2]

2.1 Only $y=x+1$ and $y=x-1$ contribute to [F3], so [F3, step 1.1] $$ \begin{aligned} Lf(x)&=\tfrac12(f(x+1)-f(x))+\tfrac12(f(x-1)-f(x))\\ &=\tfrac12\{f(x+1)-2f(x)+f(x-1)\}. \end{aligned} $$ The sum is finite, and constants give $Lf=0$. [F3, step 1.1] ∎

