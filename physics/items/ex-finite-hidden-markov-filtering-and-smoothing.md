---
id: ex-finite-hidden-markov-filtering-and-smoothing
kind: example
title: A two-state hidden Markov filter and smoother
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - alg-recursive-bayesian-filter
  - thm-state-space-filtering-and-smoothing-laws-exist
  - thm-dominated-state-space-filtering-recursion
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
proof_strategy: direct
axiom_use: "The example inherits AC only for existence of the conditional-kernel versions; its finite probability calculations are choice-free."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §2.1"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Example

Let $E_0=E_1=E_2=F_1=F_2=\{0,1\}$ with counting measure. Take
$\mu_0=(1/2,1/2)$ and transition matrix
$$M=\begin{pmatrix}3/4&1/4\\1/4&3/4\end{pmatrix},$$
where rows index the current state. At each time let
$G_t(1\mid0)=1/4$ and $G_t(1\mid1)=3/4$, with the complementary
probabilities for observation $0$. For observations $Y_1=1,Y_2=0$, the exact
filter at time $2$ is $(9/14,5/14)$ on states $(0,1)$, while the smoothing
law of $X_1$ given both observations is $(5/14,9/14)$. This finite model has
positive evidence at both observed times.

## Verification

**Given:** AC, the finite-horizon kernel model, and observations in the Example.

[A1] AC states that every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] Filtering and smoothing kernels are conditional laws given the stated
observation histories. [[def-state-space-filtering-laws]]

[F2] For dominated observation kernels, the prediction and update are given
by the exact recursion, with evidence computed by summing the likelihood
against the predictive state law. [[thm-dominated-state-space-filtering-recursion]]

[F3] The finite-horizon model law is the ordered product of the initial,
transition, and observation kernels. [[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F4] Under AC the data-indexed conditional filtering and smoothing kernels
exist for this finite standard-Borel model.
[[thm-state-space-filtering-and-smoothing-laws-exist]]

[F5] The model supplies transition and observation probability kernels.
[[def-general-state-space-model-by-kernels]]

[F6] The recursive filtering procedure uses the prediction/update formulas and
predictive filler on zero or infinite evidence. [[alg-recursive-bayesian-filter]]

1.1 Let $g_t(i,j):=G_t(i,\{j\})$ for $i,j\in\{0,1\}$. Counting measure integrates by finite sums, so $\sum_jg_t(i,j)=G_t(i,\{0,1\})=1$ and $G_t(i,C)=\sum_{j\in C}g_t(i,j)$; every function on these finite discrete spaces is product-measurable. Thus [F2] applies. Since $\mu_0$ is uniform and each transition-matrix column sums to one, $X_1$ is uniform; hence $P(Y_1=1)=\frac12(\frac14+\frac34)=\frac12$, and Bayes' finite sum gives $P(X_1=0\mid Y_1=1)=\frac{(1/2)(1/4)}{1/2}=1/4$ and $P(X_1=1\mid Y_1=1)=3/4$. [A1, given, F2, F3, F5, F6, algebra]

2.1 Predicting through $M$ gives $P(X_2=0\mid Y_1=1)=\frac14\frac34+\frac34\frac14=\frac38$ and $P(X_2=1\mid Y_1=1)=\frac14\frac14+\frac34\frac34=\frac58$. [A1, given, F2, F6, step 1.1, algebra]

3.1 The evidence for $Y_2=0$ is $(3/8)(3/4)+(5/8)(1/4)=7/16$; thus $P(X_2=0\mid Y_1=1,Y_2=0)=9/14$ and $P(X_2=1\mid Y_1=1,Y_2=0)=5/14$, which sum to one. [A1, given, F2, F6, step 2.1, algebra]

4.1 By the ordered path law [F3], for $i=0,1$ the conditional probability of $Y_2=0$ given $X_1=i,Y_1=1$ is $\sum_{j=0}^1M_{ij}G_2(j,\{0\})$; the factor $G_1(i,\{1\})$ cancels in this conditional probability because it depends only on the fixed state $i$ and event $Y_1=1$. These sums are $(3/4)(3/4)+(1/4)(1/4)=5/8$ for $i=0$ and $(1/4)(3/4)+(3/4)(1/4)=3/8$ for $i=1$. Multiplying by the time-1 filter $(1/4,3/4)$ gives conditional smoothing masses $(5/32,9/32)$; their sum is $7/16$, the conditional evidence in step 3.1, so the smoothing law of $X_1$ is $(5/14,9/14)$. The history event has positive probability by step 1.1 and step 3.1, so its conditional distribution is fixed by the event identities. [A1, given, F1, F3, F4, step 1.1, step 3.1, algebra] ∎
