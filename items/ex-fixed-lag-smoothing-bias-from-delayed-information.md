---
id: ex-fixed-lag-smoothing-bias-from-delayed-information
kind: example
title: Delayed information creates fixed-lag smoothing bias
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - lem-smoothing-backward-kernel-bayes-factorization
  - alg-fixed-lag-particle-smoother
  - thm-fixed-lag-smoother-targets-truncated-conditional-law
proof_strategy: direct
axiom_use: AC is inherited through the conditional-kernel interfaces; the finite-state calculation adds no choice.
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.1"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Example

Let $X_0\sim\operatorname{Bernoulli}(1/2)$ and set $X_1=X_0$ and
$X_2=X_1$. Let $Y_1=0$ deterministically and $Y_2=X_2$. For target time
$t=0$ and lag $L=1$, the fixed-lag procedure conditions only on $Y_1$,
whereas the full smoother also uses $Y_2$. In the exact-kernel mode of
[[alg-fixed-lag-particle-smoother]], the lagged law is
$\operatorname{Bernoulli}(1/2)$ while, for either observed value $Y_2=b$,
the full smoothing marginal at time $0$ is $\delta_b$. Their total-variation distance under
the convention $\sup_A|\mu(A)-\nu(A)|$ is $1/2$. Increasing the number of
particles does not remove this truncation bias at fixed lag.

## Facts & Assumptions

**Given:** The finite model, $t=0$, and $L=1$ in the Example.

[A1] AC is inherited through the finite-horizon conditional-law convention for the supplied smoothing kernels. [[def-axiom-of-choice]]

[F1] A smoothing law is a conditional law of the full state path given the specified observation history. [[def-state-space-filtering-laws]]

[F2] The backward conditional-kernel mode returns the exact smoother for the observations it is given, and fixed lag uses only $Y_{1:\min(t+L,T)}$. [[alg-fixed-lag-particle-smoother]]

[F3] Exact backward conditional kernels factor the finite-horizon smoother. [[lem-smoothing-backward-kernel-bayes-factorization]]

[F4] The exact-kernel fixed-lag branch targets the smoothing marginal with the truncated observation history. [[thm-fixed-lag-smoother-targets-truncated-conditional-law]]

## Verification

**Given:** $P(X_0=0)=P(X_0=1)=1/2$, $X_1=X_2=X_0$, $Y_1=0$, and $Y_2=X_2$.

1.1 Since $Y_1$ is constant, conditioning on $Y_1$ leaves the prior law of $X_0$ unchanged. The time-$0$ target for lag $1$ uses $s_0=\min(0+1,2)=1$, so [F2] and [F4] give the lagged law $\operatorname{Bernoulli}(1/2)$. [A1, F1, F2, F4, given, algebra]

1.2 For each $b\in\{0,1\}$, the event $Y_2=b$ has probability $1/2$. On this event, $X_0=X_1=X_2=b$ surely. Thus the full smoothing path law is $\delta_{(b,b,b)}$, and its time-$0$ marginal is $\mathcal L(X_0\mid Y_1=0,Y_2=b)=\delta_b$. [A1, F1, F3, given, algebra]

2.1 For $A=\{b\}$, the probabilities under the lagged law and the full smoothing marginal at time $0$ are $1/2$ and $1$, respectively; for any subset $A\subseteq\{0,1\}$ their probability difference has absolute value at most $1/2$. Hence $\sup_A|\operatorname{Bernoulli}(1/2)(A)-\delta_b(A)|=1/2$. This difference is between the truncated and full targets at time $0$, so particle-count growth alone cannot remove it. [step 1.1, step 1.2, algebra] ∎
