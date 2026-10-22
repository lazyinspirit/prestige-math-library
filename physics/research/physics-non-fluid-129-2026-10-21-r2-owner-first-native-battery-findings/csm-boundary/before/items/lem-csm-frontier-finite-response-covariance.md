---
id: lem-csm-frontier-finite-response-covariance
kind: lemma
title: "Finite Gibbs response of an observable is its covariance with the field-coupled observable"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-csm-finite-gibbs-variational-identity
  - thm-derivative-of-exponential
  - thm-algebra-of-derivatives
  - thm-chain-rule
dependency_roles:
  lem-csm-finite-gibbs-variational-identity: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author-hosted book, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, §3.1, finite-volume Ising Gibbs distributions with boundary conditions, printed pp. 80–82 (PDF pp. 97–99); the finite-observable response identity is derived locally."
    - title: "Patrick Rebeschini and Ramon van Handel, Comparison Theorems for Gibbs Measures"
      url: "https://arxiv.org/pdf/1308.4117"
      locator: "§2.1, finite conditional distributions and Gibbs specifications; the response derivative itself is proved locally here."
---

## Statement

Let $E$ be a finite nonempty set, let $H_0,M,F:E\to\mathbb R$, fix $\beta>0$, and for $t\in\mathbb R$ define $H_t(x):=H_0(x)-tM(x)$, $Z(t):=\sum_{x\in E}e^{-\beta H_t(x)}$, and $\gamma_t(x):=Z(t)^{-1}e^{-\beta H_t(x)}$. For functions $F,M:E\to\mathbb R$, define $\operatorname{Cov}_{\gamma_t}(F,M):=\sum_x\gamma_t(x)F(x)M(x)-(\sum_x\gamma_t(x)F(x))(\sum_x\gamma_t(x)M(x))$. Then $t\mapsto\sum_x\gamma_t(x)F(x)$ is differentiable on $\mathbb R$ and

$$\frac{d}{dt}\sum_{x\in E}\gamma_t(x)F(x)=\beta\operatorname{Cov}_{\gamma_t}(F,M).$$

## Statement references

[[lem-csm-finite-gibbs-variational-identity]]

[[thm-derivative-of-exponential]]

[[thm-algebra-of-derivatives]]

[[thm-chain-rule]]

## Facts & Assumptions

**Given:** A finite nonempty set $E$, real-valued functions $H_0,M,F:E\to\mathbb R$, and $\beta>0$.

[F1] For every finite nonempty state set and finite real energy, the Gibbs partition sum is finite and strictly positive, and its normalized weights form a probability vector ([[lem-csm-finite-gibbs-variational-identity]]).

[F2] The real exponential is differentiable with derivative $\exp$ ([[thm-derivative-of-exponential]]).

[F3] Finite sums, products, and quotients with nonzero denominator obey the ordinary derivative rules ([[thm-algebra-of-derivatives]]).

[F4] A differentiable real function composed with a differentiable real function obeys the chain rule ([[thm-chain-rule]]).

## Proof

1.1 For every $t\in\mathbb R$, each $e^{-\beta H_t(x)}$ is positive and finite, and $E$ is finite nonempty, so $0<Z(t)<\infty$ by [F1]. Thus $\gamma_t$ is a probability vector, and both $Z(t)$ and $N_F(t):=\sum_xF(x)e^{-\beta H_t(x)}$ are finite sums with nonzero denominator $Z(t)$. [given, F1, algebra]

2.1 Since $H_t(x)=H_0(x)-tM(x)$, [F2] and [F4] give $\frac{d}{dt}e^{-\beta H_t(x)}=\beta M(x)e^{-\beta H_t(x)}$. Differentiating the finite sums term by term with [F3] therefore gives $Z'(t)=\beta\sum_xM(x)e^{-\beta H_t(x)}$ and $N_F'(t)=\beta\sum_xF(x)M(x)e^{-\beta H_t(x)}$. [F2, F3, F4, step 1.1]

3.1 The denominator $Z(t)$ is nonzero by step 1.1. The quotient rule [F3] applied to $N_F(t)/Z(t)=\sum_x\gamma_t(x)F(x)$ yields $\beta\{\gamma_t(FM)-\gamma_t(F)\gamma_t(M)\}$ after dividing numerator and denominator by $Z(t)$; by the definition of covariance in the Statement this is $\beta\operatorname{Cov}_{\gamma_t}(F,M)$. [F3, step 1.1, step 2.1] ∎
