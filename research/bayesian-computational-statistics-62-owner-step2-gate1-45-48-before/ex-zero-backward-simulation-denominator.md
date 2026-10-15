---
id: ex-zero-backward-simulation-denominator
kind: example
title: A zero backward-simulation denominator is inadmissible
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - lem-smoothing-backward-kernel-bayes-factorization
  - alg-particle-backward-simulator
proof_strategy: direct
axiom_use: AC is inherited from the state-space conditional-kernel interfaces; the finite calculation adds no choice.
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 11, §11.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Example

Take $E_0=E_1=\{0,1\}$ with counting measure, initial law $\delta_0$, and
deterministic transition $X_1=X_0$. Its transition density is
$f_1(x'\mid x)=1$ when $x'=x$ and $0$ otherwise. A supplied pair of
particle clouds with time-zero particle $x_0^1=0,w_0^1=1$ and terminal
particle $x_1^1=1,w_1^1=1$ has backward denominator
$$\sum_{j=1}^1w_0^jf_1(x_1^1\mid x_0^j)=0.$$
This terminal cloud is inconsistent with the transition and filtering law;
the particle backward algorithm must report its density-mode input as
inadmissible rather than inventing uniform backward weights.

## Facts & Assumptions

**Given:** The two-state deterministic model and the supplied particle clouds in the Example.

[A1] AC is inherited through the finite-horizon conditional-law convention used for the impossible conditioning fiber. [[def-axiom-of-choice]]

[F1] Conditional kernels and smoothing laws are versions on standard-Borel spaces; values on impossible conditioning fibers are not fixed by the conditional identities. [[def-state-space-filtering-laws]]

[F2] A density-based backward kernel is normalized only when its predictive denominator is finite and positive. [[lem-smoothing-backward-kernel-bayes-factorization]]

[F3] The particle backward algorithm requires finite positive denominators and declares other particle-mode inputs inadmissible. [[alg-particle-backward-simulator]]

## Verification

**Given:** $\eta_0=\delta_0$, $f_1(x'\mid x)=\mathbf1\{x'=x\}$, and the particle weights and states in the Example.

1.1 Substitution gives $f_1(1\mid0)=0$ and $w_0^1=1$, so the unique backward score is zero and its normalizing denominator is zero. No division by this quantity defines a probability vector. [F2, F3, given, algebra]

2.1 The exact predictive law is $\eta_0M_1=\delta_0$, hence the terminal state $1$ has predictive probability zero. By [A1] and [F1] a conditional version on this null fiber is not determined by the model's conditional identities, and the supplied cloud at $1$ is not a possible output of the stated filter. [A1, F1, given, step 1.1]

3.1 Because [F3] restricts the density-based backward draw to a finite positive denominator, the procedure rejects this input; a uniform choice would be an unsupported choice of conditional version, not a consequence of Bayes' formula. [A1, F1, F3, step 1.1, step 2.1] ∎
