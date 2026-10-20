---
id: lem-polynomial-convolutions-force-activation-polynomial-ae
kind: lemma
title: "Polynomial convolutions force activation polynomiality almost everywhere"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - def-distributional-derivative
  - def-formal-derivative-of-a-polynomial
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-all-polynomial-convolutions-have-uniformly-bounded-degree
  - lem-distribution-with-vanishing-highest-derivative-is-polynomial
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-mollifier-approximation-in-distributions
  - thm-distributional-differentiation-is-continuous-and-commutes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 7"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, mollifier approximation and regular distributions"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
---

## Statement

Assume Countable Choice. Let $\sigma\in\mathcal M$. If every convolution

$$g_\varphi(x)=\int_{\mathbb R}\sigma(x-t)\varphi(t)\,dt,\qquad \varphi\in C_c^\infty(\mathbb R),\quad \operatorname{supp}\varphi\subseteq[-1,1],$$

is a polynomial, then $\sigma$ agrees almost everywhere with a polynomial. Equivalently, if $\sigma$ is not polynomial almost everywhere, at least one such test function has a nonpolynomial convolution.

## Statement references

[Leshno et al., proof of Theorem 1, distributional polynomiality step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Dyatlov, Lecture Notes for 18.155, mollifier approximation](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a measurable, locally essentially bounded activation $\sigma\in\mathcal M$.

[F1] Such an activation is locally integrable, and its regular distribution is defined by integration against test functions ([[def-activation-class-locally-essentially-bounded-ae-continuous]], [[def-regular-distribution-from-a-locally-integrable-function]]).

[F2] If every convolution with a test function supported in $[-1,1]$ is polynomial, their degrees have a common finite bound ([[lem-all-polynomial-convolutions-have-uniformly-bounded-degree]]).

[F3] Unit-mass mollifications converge locally in distribution pairings under Countable Choice ([[thm-mollifier-approximation-in-distributions]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F4] A distribution whose $(N+1)$st derivative vanishes is a polynomial distribution of degree at most $N$ ([[lem-distribution-with-vanishing-highest-derivative-is-polynomial]]).

[F5] The map from locally integrable functions modulo almost-everywhere equality to regular distributions is injective under Countable Choice ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F6] The distributional derivative of a polynomial's regular distribution is its classical derivative, so the derivative of order $N+1$ of a degree-at-most-$N$ polynomial vanishes ([[def-formal-derivative-of-a-polynomial]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F7] A nonnegative smooth cutoff supported in $(-1,1)$ and positive near zero can be normalized by its finite positive integral to obtain a unit-mass bump supported in $[-1,1]$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F8] Distributional derivatives are defined by $\langle D^m T,\psi\rangle=(-1)^m\langle T,\psi^{(m)}\rangle$ ([[def-distributional-derivative]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is assumed by [F3] and [F5].

## Proof

1.1 Let $T_\sigma$ be the regular distribution induced by $\sigma$. By [F2], there is $N\in\mathbb N_0$ such that every convolution by a test function supported in $[-1,1]$ is a polynomial of degree at most $N$. By [F7], choose a nonnegative smooth bump supported in $(-1,1)$ and divide by its positive finite integral to obtain $\rho$ with mass one. Its rescalings $\rho_\varepsilon$ for $0<\varepsilon\le1$ remain supported in $[-1,1]$, so $g_\varepsilon=\sigma*\rho_\varepsilon$ is a polynomial of degree at most $N$. [given, F1, F2, F3, F7, A1, choose]

2.1 By [F3], the regular distributions induced by $g_\varepsilon$ converge to $T_\sigma$ on every test function. For every $\psi\in C_c^\infty(\mathbb R)$, the definition [F8] and this convergence give $\langle D^{N+1}T_\sigma,\psi\rangle=(-1)^{N+1}\langle T_\sigma,\psi^{(N+1)}\rangle=\lim_{\varepsilon\downarrow0}(-1)^{N+1}\int g_\varepsilon(x)\psi^{(N+1)}(x)\,dx=0$, because [F6] makes each integral zero for the polynomial $g_\varepsilon$ of degree at most $N$. Thus $D^{N+1}T_\sigma=0$. [step 1.1, F2, F3, F6, F8, A1, algebra]

3.1 By [F4], $T_\sigma$ is the regular distribution of a polynomial $p$. Since both $\sigma$ and $p$ are locally integrable, injectivity [F5] implies $\sigma=p$ almost everywhere. This proves the forward implication; its contrapositive is the equivalent existence assertion. [step 2.1, F4, F5, A1] ∎

