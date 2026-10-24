---
id: alg-metropolis-adjusted-langevin-algorithm
kind: algorithm
title: Metropolis-adjusted Langevin algorithm (MALA)
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-metropolis-hastings-kernel
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-standard-borel-space
  - lem-finite-euclidean-space-is-standard-borel
  - lem-langevin-gaussian-proposal-kernel
  - lem-metropolis-hastings-density-ratio
justified_by:
  - thm-metropolis-adjusted-langevin-target-invariant
axiom_use: "AC is inherited from the normal proposal law and the Radon–Nikodym accepted-flow construction of the general Metropolis–Hastings algorithm."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Assume AC ([[def-axiom-of-choice]]) and the target-potential hypotheses of
[[alg-unadjusted-langevin-algorithm]]. For a step size $\gamma>0$, use the ULA
Gaussian proposal
$$Q_\gamma(x,dy)=q_\gamma(y\mid x)\,dy, \qquad q_\gamma(y\mid x)=(4\pi\gamma)^{-d/2} \exp\!\left(-\frac{\|y-x+\gamma\nabla U(x)\|^2}{4\gamma}\right),$$
whose kernel properties are in
[[lem-langevin-gaussian-proposal-kernel]]. The target density is
$p_U(x)=Z_U^{-1}e^{-U(x)}$. At state $x$, propose $y$ from $Q_\gamma(x,\cdot)$,
set
$$\alpha_\gamma(x,y):=\min\left\{1, \frac{p_U(y)q_\gamma(x\mid y)}{p_U(x)q_\gamma(y\mid x)}\right\},$$
and use the Metropolis–Hastings transition kernel
$$P_\gamma(x,A)=\int_A\alpha_\gamma(x,y)Q_\gamma(x,dy) +\left(1-\int\alpha_\gamma(x,z)Q_\gamma(x,dz)\right)\mathbf1_A(x).$$
Thus every rejected proposal remains at the current state. The target and
proposal densities are strictly positive, so the displayed ratio has no
zero-denominator case. The ratio is the common-density accepted-flow version
from [[lem-metropolis-hastings-density-ratio]]; this procedure is the general
Metropolis–Hastings algorithm
[[alg-metropolis-hastings-kernel]] specialized to the ULA proposal.
The Euclidean Borel space is standard Borel in the sense of
[[def-standard-borel-space]], by [[lem-finite-euclidean-space-is-standard-borel]], as required by that general
Metropolis–Hastings procedure.
