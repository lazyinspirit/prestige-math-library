---
id: thm-metropolis-adjusted-langevin-target-invariant
kind: theorem
title: MALA preserves its target probability exactly
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-metropolis-adjusted-langevin-algorithm
  - alg-metropolis-hastings-kernel
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-probability-measure
  - lem-finite-euclidean-space-is-standard-borel
  - lem-langevin-gaussian-proposal-kernel
  - lem-metropolis-hastings-density-ratio
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
proof_strategy: direct
axiom_use: "AC is inherited from the ULA Gaussian proposal and used by the common accepted-flow Radon–Nikodym construction in Metropolis–Hastings."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §2.1 and Proposition 2, printed pp. 5–6"
      url: "https://probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §4"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
---

## Statement

Assume AC and the hypotheses of
[[alg-metropolis-adjusted-langevin-algorithm]], with $d\ge1$, $U\in C^1(\mathbb
R^d)$, $0<Z_U=\int e^{-U(x)}dx<\infty$, and $\gamma>0$. The MALA transition
kernel $P_\gamma$ is reversible with respect to
$$\pi_U(dx)=Z_U^{-1}e^{-U(x)}dx,$$
and therefore $\pi_U$ is invariant. This conclusion asserts neither
irreducibility nor uniqueness, convergence, a rate, nor a central limit
theorem.

## Facts & Assumptions

**Given:** AC; the target and proposal specified by
[[alg-metropolis-adjusted-langevin-algorithm]].

[A1] AC supplies the accepted-flow Radon–Nikodym version in the general Metropolis–Hastings construction. [[def-axiom-of-choice]] [[alg-metropolis-hastings-kernel]]

[F1] MALA uses the ULA Gaussian proposal and explicit common-density acceptance ratio, with rejection mass placed at $x$. [[alg-metropolis-adjusted-langevin-algorithm]]

[F2] The proposal $Q_\gamma$ is a probability kernel with finite, positive, jointly measurable density $q_\gamma(y\mid x)$. [[lem-langevin-gaussian-proposal-kernel]]

[F3] The target density $p_U(x)=Z_U^{-1}e^{-U(x)}$ is finite, positive, Borel measurable, and integrates to one, hence defines a probability measure in the sense of [[def-probability-measure]]. [[alg-unadjusted-langevin-algorithm]] [[def-probability-measure]]

[F4] For a target density $p$ and jointly measurable proposal density $q$ against a common sigma-finite measure, the pointwise minimum ratio is a version of the accepted-flow Radon–Nikodym derivative. [[lem-metropolis-hastings-density-ratio]]

[F5] A Metropolis–Hastings kernel built from a target probability and proposal probability kernel is reversible and leaves the target invariant. [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]

[F6] Lebesgue measure on $\mathbb R^d$ is sigma-finite in the sense of [[def-finite-sigma-finite-and-semifinite-measures]]. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[def-finite-sigma-finite-and-semifinite-measures]] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F7] The Euclidean Borel space, with Borel sigma-algebra [[def-borel-sigma-algebra]], is standard Borel in the sense of [[def-standard-borel-space]], as required by the general Metropolis–Hastings suppliers. [[lem-finite-euclidean-space-is-standard-borel]] [[def-standard-borel-space]] [[def-borel-sigma-algebra]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F3], $\pi_U$ is a probability with positive finite density $p_U$. By [F2], $Q_\gamma$ is a probability kernel with jointly measurable finite density $q_\gamma$ relative to the sigma-finite Lebesgue measure [F6]. The state-space hypothesis [F7] is also met. Thus the common-density ratio result [F4] applies at every pair $(x,y)$ with $p_U(x)q_\gamma(y\mid x)>0$, which holds because both factors are strictly positive. It identifies the MALA acceptance function in [F1] with a version of the accepted-flow derivative; the chosen pointwise version is measurable and belongs to $[0,1]$. [A1, F1, F2, F3, F4, F6, F7]

2.1 Step 1.1 and [F1] show that $P_\gamma$ is precisely the Metropolis–Hastings transition built from target $\pi_U$, proposal $Q_\gamma$, and an accepted-flow derivative version, including its rejected self-transition. Applying [F5] gives reversibility and invariance of $\pi_U$. No ergodicity or convergence premise is among the hypotheses, so no such conclusion follows here. [F1, F5, step 1.1] ∎