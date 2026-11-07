---
id: thm-totally-real-dedekind-zeta-at-zero-rational
kind: theorem
title: "The Dedekind Zeta Value at Zero for a Totally Real Field Is Rational"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-dedekind-zeta-function
  - def-completed-dedekind-zeta-function
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-gamma-meromorphic-continuation
  - cor-rational-algebraic-integers-are-integers
  - def-riemann-zeta-function
  - thm-riemann-zeta-meromorphic-continuation
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-identity-theorem-holomorphic-functions
  - thm-special-values-of-riemann-zeta-at-integers
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kenneth A. Ribet, Report on p-adic L-functions over totally real fields"
      url: "https://numdam.org/item/AST_1979__61__177_0.pdf"
      locator: "§1, printed pp. 178–179, rationality discussion for partial zeta values at nonpositive integers."
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
      locator: "Lecture 11 §3, the Riemann special value $\\zeta(0)=-1/2$."
verification: {}
---

## Statement

Assume the Axiom of Choice. For every totally real number field $K$, the value $\zeta_K(0)$ is rational: it is $0$ when $[K:\mathbb Q]>1$ and $-1/2$ when $K=\mathbb Q$.

## Statement references

[[def-axiom-of-choice]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[[thm-special-values-of-riemann-zeta-at-integers]]

[Kenneth A. Ribet, *Report on p-adic L-functions over totally real fields*, §1](https://numdam.org/item/AST_1979__61__177_0.pdf)

## Facts & Assumptions

**Given:** AC and a totally real number field $K$.

[A1] [[def-axiom-of-choice]]: the Dedekind-zeta completed functional equation is used on the AC branch.

[A2] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies Countable Choice, needed in the degree-one case.

[F1] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]: the completed zeta $\Lambda_K(s)=|D_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_K(s)$ satisfies $\Lambda_K(s)=\Lambda_K(1-s)$ and has a simple pole at $s=0$.

[F2] [[def-completed-dedekind-zeta-function]]: $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$.

[F3] [[thm-gamma-meromorphic-continuation]]: $\Gamma$ has a simple pole at $0$ and no other singularity sufficiently near $0$.

[F4] [[def-archimedean-embeddings-and-number-field-signature]]: if $K$ is totally real of degree $n$, its signature is $(n,0)$.

[F5] [[cor-rational-algebraic-integers-are-integers]]: $\mathcal O_{\mathbb Q}=\mathbb Z$.

[F6] [[def-dedekind-zeta-function]]: $\zeta_{\mathbb Q}$ is the Dirichlet series over nonzero ideals of $\mathbb Z$ for $\operatorname{Re}(s)>1$.

[F7] [[def-riemann-zeta-function]]: $\zeta(s)=\sum_{n\ge1}n^{-s}$ for $\operatorname{Re}(s)>1$.

[F8] [[thm-riemann-zeta-meromorphic-continuation]]: the Riemann zeta series has a meromorphic continuation, holomorphic away from its pole at $1$.

[F9] [[thm-identity-theorem-holomorphic-functions]]: holomorphic functions on a connected domain that agree on a nonempty open set agree throughout the domain.

[F10] [[thm-special-values-of-riemann-zeta-at-integers]]: under Countable Choice, $\zeta(0)=-1/2$.

## Proof

1.1 Suppose $n=[K:\mathbb Q]>1$. Since $K$ is totally real, [F4] gives $(r_1,r_2)=(n,0)$. By [F2,F3], the gamma factor $|D_K|^{s/2}\Gamma_{\mathbb R}(s)^n$ has a pole of order $n$ at $0$, while [A1,F1] says the completed zeta has a simple pole there. Dividing the completed function by this gamma factor shows that $\zeta_K$ has a zero of order $n-1\ge1$ at $0$, hence $\zeta_K(0)=0\in\mathbb Q$. [A1, F1, F2, F3, F4, given, algebra]

2.1 If $n=1$, then $K=\mathbb Q$. By [F5], $\mathcal O_K=\mathbb Z$. Every nonzero ideal $I\subseteq\mathbb Z$ has a least positive member $a$; division with remainder shows $I=a\mathbb Z$, whose norm is $a$. Thus [F6,F7] identify the two zeta series on $\operatorname{Re}(s)>1$. [F5, F6, F7, given, construct, algebra]

2.2 The continuations in [F1] and [F8] are holomorphic on $\mathbb C\setminus\{1\}$ and agree on the half-plane from step 2.1. This domain is connected, so [F9] gives $\zeta_K(0)=\zeta(0)$. By [A2,F10], this is $-1/2\in\mathbb Q$. [A2, F1, F8, F9, F10, step 2.1, given] ∎
