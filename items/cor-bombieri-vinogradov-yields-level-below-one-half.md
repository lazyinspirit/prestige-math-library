---
dependency_level: 6
id: cor-bombieri-vinogradov-yields-level-below-one-half
kind: corollary
title: "Bombieri–Vinogradov gives every fixed level below one half"
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-bombieri-vinogradov-prime-distribution, def-prime-level-of-distribution, def-prime-progression-discrepancy, def-natural-logarithm, def-real-exponential-function-and-e, thm-exponential-is-strictly-increasing, def-axiom-of-choice, def-countable-choice, def-dependent-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 17"
      url: "https://kskedlaya.org/ant/chap-bombieri.html"
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Suppose that for every real $A>0$, with $B=2A+6$, there are constants $C_A>0$ and $x_A\ge3$ such that for every $x\ge x_A$,
$$\sum_{1\le q\le x^{1/2}(\log x)^{-B}}\max_{a\in(\mathbb Z/q\mathbb Z)^\times}|E_\psi(x;q,a)|\le C_Ax(\log x)^{-A}.$$
Then the primes have level of distribution $\theta$ in the endpoint Chebyshev discrepancy convention for every fixed $0<\theta<1/2$.


## Statement references

[[thm-bombieri-vinogradov-prime-distribution|Bombieri–Vinogradov endpoint bound]]

[[def-prime-level-of-distribution|Endpoint level of distribution]]

[[def-prime-progression-discrepancy|Full-weighted endpoint discrepancy]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Countable Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-real-exponential-function-and-e|Exponential series]]

[[def-natural-logarithm|Natural logarithm]]

[[thm-exponential-is-strictly-increasing|Monotonicity of the exponential]]


## Facts & Assumptions

**Given:** The three stated choice axioms, a fixed $0<\theta<1/2$, and a fixed real $A>0$.

[F1] For every $A'>0$, the Bombieri–Vinogradov theorem bounds the sum of $|E_\psi(X;q,a)|$ for $q\le X^{1/2}(\log X)^{-(2A'+6)}$ by $C_{A'}X(\log X)^{-A'}$ for all sufficiently large $X$ ([[thm-bombieri-vinogradov-prime-distribution]]).

[F2] $E_\psi(x;q,a)=\psi(x;q,a)-x/\varphi(q)$, with $\psi$ the full von Mangoldt sum over positive $n\le x$ ([[def-prime-progression-discrepancy]]).

[F3] Level $\theta$ means that for every positive logarithmic saving $A$ the endpoint sum over $q\le x^\theta$ is $O_{\theta,A}(x(\log x)^{-A})$ ([[def-prime-level-of-distribution]]).

[F4] $\exp(u)=\sum_{n=0}^{\infty}u^n/n!$ for real $u$, and $\exp(\log x)=x$ for $x>0$ ([[def-real-exponential-function-and-e]], [[def-natural-logarithm]]).

[F5] The exponential is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[A3] Every entire relation on a nonempty set admits a chain from any prescribed starting point ([[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\theta$ and $A$, set $A'=A+1$, $B'=2A'+6$, and $\delta=1/2-\theta>0$. Choose an integer $m>B'$. For $x>1$, put $u=\log x$. Since $\exp$ is strictly increasing and $\exp(\log x)=x$, for every real $T$ the inequality $x\ge\exp(T)$ implies $\log x\ge T$; hence $\log x\to\infty$. The exponential series in [F4] has nonnegative terms at $\delta u>0$, so $x^\delta=\exp(\delta u)\ge(\delta u)^m/m!$. Hence $x^{1/2-\theta}/(\log x)^{B'}\ge\delta^m(\log x)^{m-B'}/m!\to\infty$. Therefore, for all sufficiently large $x$, $x^\theta\le x^{1/2}(\log x)^{-B'}$. [given, F4, F5, algebra]

2.1 For such $x$, every integer modulus $q\le x^\theta$ lies in the Bombieri–Vinogradov range for exponent $A'$. The truncated sum defining level $\theta$ is at most the full nonnegative sum in [F1], so it is at most $C_{A'}x(\log x)^{-A'}\le C_{A'}x(\log x)^{-A}$ for $x\ge e$. The discrepancy in [F1] is the endpoint discrepancy in [F2], and the resulting estimate is precisely the level condition [F3]. The choice axioms [A1]–[A3] are the hypotheses of the supplier theorem. [given, F1, F2, F3, A1, A2, A3, step 1.1, algebra] ∎
