---
id: cex-sticky-reducible-chain-has-no-root-n-clt
kind: counterexample
title: A stationary sticky chain with finite variance and no root-n CLT
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-moments-variance-and-covariance
  - def-phi-irreducible-chain
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-convergence-in-distribution-for-real-random-variables
  - thm-invariant-initial-law-makes-the-chain-stationary
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
axiom_use: "AC is used only through the supplied Markov-chain stationarity convention; the finite two-point calculation itself is choice-free."
---

## Statement refuted

Finite variance of a centered observable alone guarantees a root-$n$ central
limit theorem for every stationary Markov chain.

## Facts & Assumptions

**Given:** A two-state measurable space, a transition kernel, an initial law, and a real observable.

[A1] AC is used by the library's Markov-chain law/stationarity convention. ([[def-axiom-of-choice]])

[F1] A stationary distribution is an invariant probability for the transition kernel. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F2] An invariant initial law makes the Markov chain strictly stationary. ([[thm-invariant-initial-law-makes-the-chain-stationary]])

[F3] Variance is the centered second moment. ([[def-moments-variance-and-covariance]])

[F4] Convergence in distribution requires convergence of distribution functions at every continuity point of the limiting law. ([[def-convergence-in-distribution-for-real-random-variables]])

[F5] $\phi$-irreducibility requires every $\phi$-positive set to be reachable from every state; Harris recurrence strengthens this to almost-sure hitting from every state. ([[def-phi-irreducible-chain]], [[def-harris-recurrent-markov-chain]])

## Counterexample
1.1 Let $\mathsf X=\{0,1\}$, $P(0,\{0\})=P(1,\{1\})=1$, and let $\pi(\{0\})=\pi(\{1\})=1/2$. The identity kernel leaves $\pi$ invariant, so the chain initialized with $X_0\sim\pi$ is stationary by [F2]. Set $f(0)=-1$ and $f(1)=1$. Then $\pi(f)=0$ and $\pi(f^2)=1$. [A1, F1, F2, F3, given]

2.1 The transition is deterministic, hence $X_k=X_0$ for every $k$ and $S_n:=\sum_{k=0}^{n-1}f(X_k)=nf(X_0)$. Thus $S_n/\sqrt n=\sqrt n f(X_0)$ takes values $\pm\sqrt n$ with equal probabilities. For each fixed $t>0$, once $n>t^2$ its distribution function at $t$ is $1/2$, while any $N(0,\sigma^2)$ has distribution function strictly greater than $1/2$ at $t$ when $\sigma^2>0$ and equal to $1$ when $\sigma^2=0$. Since $t$ is a continuity point of every such normal law, [F4] rules out convergence to any normal distribution. [F4, step 1.1, algebra]

3.1 Choose $\phi=\pi$ and $A=\{1\}$. Then $\phi(A)=1/2>0$, but $P^n(0,A)=0$ for every $n\ge1$ because the chain stays at $0$. By [F5] the chain is not $\phi$-irreducible and is not Harris recurrent relative to $\phi$. This counterexample shows only that finite variance without an ergodicity assumption does not guarantee a root-$n$ CLT. [F5, step 1.1, algebra] ∎
