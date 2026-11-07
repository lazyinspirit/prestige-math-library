---
id: thm-dedekind-zeta-values-of-q-at-nonpositive-integers-rational
kind: theorem
title: "The Dedekind zeta values of $\\mathbb Q$ at nonpositive integers are rational"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dedekind-zeta-function
  - def-riemann-zeta-function
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-riemann-zeta-meromorphic-continuation
  - thm-special-values-of-riemann-zeta-at-integers
  - def-bernoulli-numbers-by-their-generating-function
  - thm-identity-theorem-holomorphic-functions
  - ex-ring-of-integers-of-q
justified_by: []
aliases: []
axiom_use: >-
  AC supplies the Dedekind-zeta continuation and countable choice supplies the
  Riemann-zeta continuation and special-values theorem.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
      locator: "Lecture 11 §3, printed pp. 87–90; p. 90 gives the Bernoulli special values at the nonpositive integers."
verification: {}
---

## Statement

Assume the Axiom of Choice and countable choice. For every integer $k\ge1$, the meromorphic continuation of the Dedekind zeta function of $\mathbb Q$ satisfies $\zeta_{\mathbb Q}(1-k)\in\mathbb Q$.

## Statement references

[[def-dedekind-zeta-function]]

[[def-riemann-zeta-function]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[[thm-riemann-zeta-meromorphic-continuation]]

[[thm-special-values-of-riemann-zeta-at-integers]]

[[ex-ring-of-integers-of-q]]

## Facts & Assumptions

**Given:** The Axiom of Choice, countable choice, and an integer $k\ge1$.

[A1] Assume the Axiom of Choice for the Dedekind-zeta continuation and countable choice for the Riemann-zeta continuation and special-values theorem. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] $\mathcal O_{\mathbb Q}=\mathbb Z$. [[ex-ring-of-integers-of-q]]

[F2] On $\operatorname{Re}(s)>1$, $\zeta_{\mathbb Q}(s)$ is the sum of $(N I)^{-s}$ over nonzero integral ideals $I\subseteq\mathbb Z$, while $\zeta(s)=\sum_{n\ge1}n^{-s}$. [[def-dedekind-zeta-function]] [[def-riemann-zeta-function]]

[F3] Under AC, $\zeta_{\mathbb Q}$ has a meromorphic continuation holomorphic away from $s=1$; under countable choice, the same holds for $\zeta$. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[thm-riemann-zeta-meromorphic-continuation]]

[F4] Holomorphic functions on a complex domain that agree on a set with an accumulation point in that domain agree everywhere there. [[thm-identity-theorem-holomorphic-functions]]

[F5] For $m\ge1$, $\zeta(1-2m)=-B_{2m}/(2m)$ and $\zeta(-2m)=0$, and $\zeta(0)=-1/2$. [[thm-special-values-of-riemann-zeta-at-integers]]

[F6] The Bernoulli numbers are the coefficients of $t/(e^t-1)$. [[def-bernoulli-numbers-by-their-generating-function]]

## Proof

**Given:** The axioms and integer $k$ above.

1.1 By [F1], every nonzero integral ideal $I$ of $\mathbb Z$ contains a positive integer. Let $n$ be its least positive integer. For any $a\in I$, division by $n$ gives $a=qn+r$ with $0\le r<n$; since $r=a-qn\in I$, minimality forces $r=0$. Thus $I=n\mathbb Z$, uniquely because $n$ is its least positive element, and $|\mathbb Z/I|=n$. Therefore [F2] gives $\zeta_{\mathbb Q}(s)=\zeta(s)$ for $\operatorname{Re}(s)>1$. Under [A1], both continuations are holomorphic on $U=\mathbb C\setminus\{1\}$ by [F3]. This is a complex domain: it is open, and any two of its points can be joined by two line segments avoiding $1$ by choosing an intermediate point outside the two real lines through $1$ and those points. Applying [F4] on $U$ yields $\zeta_{\mathbb Q}(s)=\zeta(s)$ throughout $U$. [A1, F1, F2, F3, F4, given, choose, algebra]

1.2 Multiplying the generating series in [F6] by $e^t-1$ and comparing coefficients gives $B_0=1$ and, for each $n\ge1$, $\sum_{j=0}^{n}\binom{n+1}{j}B_j=0$. Hence $B_n=-\frac{1}{n+1}\sum_{j=0}^{n-1}\binom{n+1}{j}B_j$; induction from $B_0=1$ proves $B_n\in\mathbb Q$ for every $n$. [F6, algebra, induction]

2.1 If $k=1$, [F5] gives $\zeta(1-k)=\zeta(0)=-1/2$. If $k=2m$ with $m\ge1$, [F5] and step 1.2 give $\zeta(1-k)=-B_{2m}/(2m)\in\mathbb Q$. If $k=2m+1$ with $m\ge1$, [F5] gives $\zeta(1-k)=\zeta(-2m)=0\in\mathbb Q$. Since $1-k\ne1$, step 1.1 identifies each of these values with $\zeta_{\mathbb Q}(1-k)$. [A1, F5, step 1.1, step 1.2, given, algebra] ∎
