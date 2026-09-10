---
id: cex-pointwise-cdf-convergence-at-a-jump-is-not-required
kind: counterexample
title: Pointwise cdf convergence at a jump is not required
deps: ["def-weak-convergence-of-borel-probability-measures", "def-cumulative-distribution-function-of-a-random-variable"]
sources:
  references:
    - title: Durrett, §3.2.1, continuity-point convention
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Weak convergence does not require CDF convergence at a jump of the limiting CDF. For $n\ge 1$, the witness is $\mu_n=\delta_{1/n}$, with $\mu=\delta_0$ on the real line.

## Facts & Assumptions

[F1] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

[F2] [[def-cumulative-distribution-function-of-a-random-variable]]: Let $X$ be a real random variable. Its **cumulative distribution function** is
the function
$$F_X:\mathbb R\to[0,1],\qquad F_X(x):=\mathbb P(X\le x)=\mathbb P_X((-\infty,x]).$$

The second expression is the same quantity written in terms of the law
def-law-or-distribution-of-a-random-element of $X$.

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 On $\Omega=\{*\}$ take $\mathcal F=\{\varnothing,\Omega\}$ and $\mathbb P(\Omega)=1$, $\mathbb P(\varnothing)=0$. This is a probability space: in any disjoint family at most one event is nonempty. For every integer $n\ge1$ set $X_n(*)=1/n$ and $X(*)=0$. Each map is measurable because every Borel preimage is either $\varnothing$ or $\Omega$. Its law is respectively $\mu_n=\delta_{1/n}$ or $\mu=\delta_0$: a Borel set has probability one exactly when it contains the specified value. Define $F_n=F_{X_n}$ and $F=F_X$ using F2. [given, F2]

2.1 For a point mass, $\int f\,d\delta_a=f(a)$ for bounded measurable $f$: this holds for simple functions by the definition of their integral, and then for nonnegative bounded functions by increasing simple approximation, and for real bounded functions by their positive and negative parts. For bounded continuous $f$, continuity at zero therefore gives $\int f\,d\mu_n=f(1/n)\to f(0)=\int f\,d\mu$. By F1 the laws converge weakly. [F1, step 1.1]

3.1 By F2 and step 1.1, $F_n(t)=\mathbf1_{\{t\ge1/n\}}$ and $F(t)=\mathbf1_{\{t\ge0\}}$. Thus $F_n(0)=0$ for every $n\ge1$ while $F(0)=1$. Moreover $F(t)=0$ for every $t<0$, so $F$ has a jump from its left limit zero to its value one at zero. Hence weak convergence does not force CDF convergence at this jump. [F2, step 1.1, step 2.1] ∎
