---
id: ex-impossible-observation-zero-evidence-fiber
kind: example
title: An impossible observation has zero evidence and only a filler filter value
status: draft
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
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §2.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Example

Let $E_0=E_1=\{0,1\}$ and $F_1=\{a,b\}$ with counting measure. Set
$\mu_0=\delta_0$ and let the transition kernel preserve the state,
$K_1(x,\cdot)=\delta_x$. Let $G_1(0,\{a\})=1$ and
$G_1(1,\{b\})=1$. Then the predictive law is $\delta_0$, and the evidence
for observing $b$ is zero. The update at $b$ is therefore the supplied
predictive filler $\delta_0$; it is not a quotient posterior. Because
$P(Y_1=b)=0$, any probability assigned at $b$ would satisfy the same RCD
identities.

## Verification

**Given:** AC and the finite model and kernels in the Example.

[A1] AC states that every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] Filtering laws are conditional kernels defined by event identities; their
values on observation-null fibers may be replaced by a fixed probability.
[[def-state-space-filtering-laws]]

[F2] For dominated observations, zero and infinite evidence fibers receive
the predictive probability as a conditional-kernel filler.
[[thm-dominated-state-space-filtering-recursion]]

[F3] The state-space path law is the ordered product of the supplied
probability kernels. [[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F4] The recursive filtering procedure uses the predictive measure on zero or
infinite evidence fibers. [[alg-recursive-bayesian-filter]]

1.1 With counting measure on $F_1$, set $g_1(x,y)=G_1(x,\{y\})$; it is jointly measurable on the finite discrete spaces, sums to one over $y$, and gives $G_1(x,C)=\sum_{y\in C}g_1(x,y)$. The predictive state law is $\delta_0$, so the evidence is $z_1(a)=1$ and $z_1(b)=0$; the update at $a$ is $\delta_0$ and [F2] and [F4] make the update at $b$ the predictive filler $\delta_0$. The factorized law [F3] gives $P(Y_1=b)=0$. [A1, F2, F3, F4, given]

2.1 Let $\rho$ be any probability measure on $E_1$ and define $q(a,\cdot)=\delta_0$ and $q(b,\cdot)=\rho$. This is a measurable probability kernel because the observation space is finite discrete. For every $A\subseteq\{0,1\}$ and $C\subseteq\{a,b\}$, the path law gives $P(X_1\in A,Y_1\in C)=\mathbf1_A(0)\mathbf1_C(a)$, while $E[\mathbf1_{\{Y_1\in C\}}q(Y_1,A)]=\mathbf1_C(a)\delta_0(A)+0\cdot\mathbf1_C(b)\rho(A)=\mathbf1_A(0)\mathbf1_C(a)$. These are all conditioning events in the finite observation space, so every probability $\rho$ at $b$ gives the same conditional identities. [A1, F1, step 1.1, algebra] ∎
