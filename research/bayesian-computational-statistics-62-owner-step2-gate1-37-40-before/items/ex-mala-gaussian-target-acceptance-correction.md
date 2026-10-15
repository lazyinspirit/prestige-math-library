---
id: ex-mala-gaussian-target-acceptance-correction
kind: example
title: MALA corrects the Gaussian ULA proposal with a Hastings ratio
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-metropolis-adjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-langevin-gaussian-proposal-kernel
  - lem-metropolis-hastings-density-ratio
  - thm-metropolis-adjusted-langevin-target-invariant
proof_strategy: direct
axiom_use: "AC is inherited from the Gaussian proposal and the accepted-flow Metropolis–Hastings construction. The ratio simplification is algebraic."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §2.1 and Proposition 2, printed pp. 5–6"
      url: "https://probability.ca/jeff/ftpdir/probsurv.pdf"
      locator: "Complete 64-page author-hosted PDF inspected; §2.1 gives the accept/reject ratio and detailed-balance proof. The Gaussian ratio below is expanded locally."
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §4"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
      locator: "Complete 5-page note inspected; §4 gives the MALA proposal and rejection rule."
---

## Example

Let $U(x)=x^2/2$ and $\pi=N(0,1)$ on $\mathbb R$. For every $\gamma>0$,
the MALA proposal is $q_\gamma(y\mid x)=N((1-\gamma)x,2\gamma)$, and its
logarithmic Hastings ratio is
$$\log\frac{p(y)q_\gamma(x\mid y)}{p(x)q_\gamma(y\mid x)} =\frac{\gamma}{4}(x^2-y^2).$$
Thus the acceptance probability is $\min\{1,e^{\gamma(x^2-y^2)/4}\}$, and
the resulting rejected-self-transition kernel preserves $N(0,1)$.

## Facts & Assumptions

**Given:** AC, the standard Gaussian target, and the MALA construction.

[A1] AC is assumed for the Gaussian law and the general Metropolis–Hastings construction. [[def-axiom-of-choice]] [[alg-metropolis-adjusted-langevin-algorithm]]

[F1] The ULA Gaussian proposal has density $q_\gamma(y\mid x)=(4\pi\gamma)^{-1/2}\exp(-(y-(1-\gamma)x)^2/(4\gamma))$. [[lem-langevin-gaussian-proposal-kernel]]

[F2] The standard Gaussian target density is proportional to $e^{-x^2/2}$. [[def-standard-normal-and-normal-laws]]

[F3] The MALA accept/reject kernel uses $\min(1,p(y)q(x\mid y)/(p(x)q(y\mid x)))$ and places every rejected proposal at its current state; this common-density ratio is a version of the accepted-flow derivative. [[alg-metropolis-adjusted-langevin-algorithm]] [[lem-metropolis-hastings-density-ratio]]

[F4] The MALA kernel is reversible with respect to its target and therefore invariant. [[thm-metropolis-adjusted-langevin-target-invariant]]

## Verification

**Given:** $U(x)=x^2/2$, $\gamma>0$, and [F1]–[F4].

1.1 Write $a=1-\gamma$. The Gaussian normalizing constants cancel, and direct expansion gives $$\log\frac{q_\gamma(x\mid y)}{q_\gamma(y\mid x)} =\frac{(y-ax)^2-(x-ay)^2}{4\gamma} =\frac{2-\gamma}{4}(y^2-x^2).$$ The target log-density ratio is $\log(p(y)/p(x))=-(y^2-x^2)/2$, so adding the two terms yields $\gamma(x^2-y^2)/4$. [F1, F2, algebra]

2.1 By [F3], the acceptance probability is $\min\{1,e^{\gamma(x^2-y^2)/4}\}$ and rejected proposals remain at $x$. At $\gamma=1$, the proposal is independent $N(0,2)$, but its reverse-to-forward density ratio is still $q_1(x)/q_1(y)$ and is included in the computed exponent. [F1, F3, step 1.1]

3.1 The proposal is a probability kernel with positive density by [F1], and [F3] identifies the displayed acceptance rule with the MALA specialization of Metropolis–Hastings. Applying [F4] proves exact invariance of $N(0,1)$ for every $\gamma>0$. [A1, F1, F3, F4, step 2.1] ∎