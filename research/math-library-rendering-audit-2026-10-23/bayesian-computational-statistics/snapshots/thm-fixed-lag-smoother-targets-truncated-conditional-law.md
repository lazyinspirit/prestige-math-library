---
id: thm-fixed-lag-smoother-targets-truncated-conditional-law
kind: theorem
title: Exact-kernel fixed-lag smoothing targets the truncated conditional law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - alg-fixed-lag-particle-smoother
  - lem-smoothing-backward-kernel-bayes-factorization
proof_strategy: direct
axiom_use: AC is inherited through the finite-horizon conditional-law interface; projection of a supplied probability law uses no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.1"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume AC and a finite-horizon Markov state-space model with standard-Borel
state and observation spaces. Supply the exact filtering and backward
conditional kernels of
[[lem-smoothing-backward-kernel-bayes-factorization]]. Fix an observation
history in the full-measure set on which their factorization holds for every
prefix horizon $s\le T$. In the exact-kernel mode of
[[alg-fixed-lag-particle-smoother]], fix an integer lag $L\ge0$ and
$t\in\{0,\ldots,T\}$, and set
$s=\min(t+L,T)$. Each returned path's time-$t$ coordinate has conditional
law $\mathcal L(X_t\mid Y_{1:s})$ (for the supplied conditional versions),
so, for any requested $S\ge1$, the empirical measure of its $S$ returned
time-$t$ coordinates is a Monte Carlo estimate of that marginal. The target
equals the full smoothing marginal only when later
observations do not change the conditional law; increasing the particle count
cannot remove a difference caused by truncating the observation history.

## Facts & Assumptions

**Given:** A finite-horizon state-space model with supplied exact filtering
and backward conditional kernels, integer lag $L\ge0$, and target time
$t\in\{0,\ldots,T\}$.

[A1] AC is inherited through the finite-horizon conditional-law construction that supplies the filtering and backward kernels. [[def-axiom-of-choice]]

[F1] The fixed-lag algorithm sets $s=\min(t+L,T)$, requests $S\ge1$ paths using observations only through time $s$, and returns their time-$t$ empirical measure. [[alg-fixed-lag-particle-smoother]]

[F2] The exact terminal filter and backward conditional kernels factor the finite-horizon smoothing law. [[lem-smoothing-backward-kernel-bayes-factorization]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $L\ge0$ and $0\le t\le T$, the integer $s=\min(t+L,T)$ satisfies $0\le t\le s\le T$. Apply [F2] at horizon $s$ to the observation history $Y_{1:s}$. Its terminal filtering kernel followed by the supplied backward conditional kernels gives a path with law $\mathcal L(X_{0:s}\mid Y_{1:s})$. [A1, F2, given, algebra]

2.1 Each exact-kernel draw in [F1] has the path law from step 1.1 and returns its coordinate projection $X_t$. A coordinate projection of a random element with the path conditional law has the corresponding marginal conditional law, hence each draw has law $\mathcal L(X_t\mid Y_{1:s})$; averaging the $S$ point masses gives the stated Monte Carlo estimate. If conditioning on additional observations changes this marginal, the exact branch still conditions only on $Y_{1:s}$, so increasing either the particle count or the number of backward draws cannot change its target. [A1, F1, F2, step 1.1, given] ∎
