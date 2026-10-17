---
id: ex-binomial-guard-prevents-invalid-counts-but-changes-noise
kind: example
title: "A binomial guard prevents overdraw but changes Poisson noise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - alg-critical-reaction-binomial-guarded-tau-leaping
  - def-bernoulli-and-binomial-random-variables
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.3, binomial tau-leap and finite-size variance warning, PDF pp. 4–5."
---

## Example

For a pure-death reaction $A\to\varnothing$ on
$E=\{0,1,\ldots,n\}$ with $n$ molecules and
propensity $a(k)=ck$, choose a critical threshold $0\le n_c<n$, maximum leap
$\tau_{\max}=h$, horizon $T=h$, and step budget $B\ge1$, where $h=1/(2c)$.
The death channel is noncritical at the initial state, its capacity is
$m=n$, and the guarded rule uses $p=a(n)h/m=1/2$ on its first step.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, integers $n\ge1$ and
$0\le n_c<n$, $c>0$, $h=1/(2c)$, the Poisson leap
[[alg-explicit-poisson-tau-leaping]], the binomial guard
[[alg-critical-reaction-binomial-guarded-tau-leaping]], and the binomial
definition below.

[F1] [[alg-explicit-poisson-tau-leaping]]: the unguarded firing count is
$K_P\sim\operatorname{Pois}(a(n)h)$.

[F2] [[alg-critical-reaction-binomial-guarded-tau-leaping]]: for capacity $n$
and $p=a(n)h/n$, the guarded count is $\operatorname{Binomial}(n,p)$ and
cannot exceed $n$.

[F3] [[def-bernoulli-and-binomial-random-variables]]: a
$\operatorname{Binomial}(n,p)$ count is a sum of $n$ independent
$\operatorname{Bernoulli}(p)$ trials.

[F4] [[lem-poisson-count-law-normalization-and-moments]]: a
$\operatorname{Pois}(\lambda)$ count has mean and variance $\lambda$.

[A1] The critical-reaction algorithm assumes Countable Choice and Dependent
Choice for its direct-SSA subroutine. Here its critical set is empty, so the
subroutine returns no event. [[def-countable-choice]],
[[def-dependent-choice]]

## Verification

**Given:** The input conditions in the Example.

1.1 Since $n>n_c$, the death channel is noncritical, and $\tau=\min(T,\tau_{\max},m/a(n))=h$. The critical set is empty, hence the critical SSA call returns no event and $\delta=h$. Thus $p=1/2$. The guarded count $K_B$ is a sum of $n$ Bernoulli variables, each in $\{0,1\}$ by [F3], so $0\le K_B\le n$ and the updated population $n-K_B$ is nonnegative. Its mean is $np=n/2$. [F2, F3, A1, algebra]

2.1 Independence of the Bernoulli trials gives $\operatorname{Var}(K_B)=\sum_{i=1}^n p(1-p)=n/4$. In contrast, the Poisson count has mean $a(n)h=n/2$ and variance $n/2$ by [F1, F4]. Thus the binomial guard retains the mean but halves the count variance in this finite model; it is not the same Poisson leap law. [F1, F3, F4, step 1.1, algebra]

3.1 The unguarded Poisson count has $\mathbb P(K_P>n)>0$, since every mass at $k>n$ is positive when its parameter $n/2$ is positive. Therefore its leap can overdraw the available molecules, while the guarded count cannot. [F1, step 2.1, algebra] ∎
