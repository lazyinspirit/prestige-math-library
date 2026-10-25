---
id: alg-abc-metropolis-hastings
kind: algorithm
title: ABC Metropolis–Hastings on simulator-augmented states
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-metropolis-hastings-kernel
  - def-abc-augmented-tolerance-target
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-measurability-of-integration-against-a-kernel
justified_by:
  - thm-abc-metropolis-hastings-invariance
axiom_use: "AC is used only through the general Metropolis–Hastings procedure to select a measurable accepted-flow Radon–Nikodym version; no stronger choice principle is used."
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
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5 and Appendix, Algorithms 3"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.1"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Definition

Fix $\epsilon\ge0$ with $Z_\epsilon>0$ and let
$\widetilde\Pi_\epsilon$ be the target in
[[def-abc-augmented-tolerance-target]]. The state is
$x=(\theta,y)\in\Theta\times\mathsf Y$, a standard-Borel product by
[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]], and
admissible initial states satisfy
$y\in A_\epsilon$. As proposal inputs take a parameter probability kernel
$q(\theta,d\theta')$ and the simulator kernel $K(\theta',dy')$ from
[[def-abc-augmented-tolerance-target]], such that
$$Q((\theta,y),d\theta',dy')=q(\theta,d\theta')K(\theta',dy')$$
is a probability kernel on the augmented state space. Construct the transition
kernel $P_\epsilon$ by applying
[[alg-metropolis-hastings-kernel]] with target
$\widetilde\Pi_\epsilon$ and proposal $Q$. Each iteration proposes a new
parameter from $q$, simulates new data from $K$, applies the general
Metropolis–Hastings accepted-flow rule, and retains the current augmented state
after rejection.

This definition uses one fixed tolerance and the augmented state
$(\theta,y)$. It does not claim irreducibility, uniqueness of a stationary law,
convergence, a mixing rate, or recovery of the full-data posterior.
