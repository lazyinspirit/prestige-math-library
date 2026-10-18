---
id: ex-poisson-tau-leap-negative-population-pure-death
kind: example
title: "A Poisson leap can make a pure-death population negative"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§III, basic tau-leap method and its count distribution, journal pp. 1718–1719 / PDF pp. 3–4."
---

## Example

Take one species with physical states $E=\{0,1\}$ and one death reaction
$\nu=-1$, $a(1)=c>0$, $a(0)=0$. Start at $x_0=1$ and take one Poisson leap
of length $h>0$ with draw budget $B=1$. The exact reaction chain stays in $E$.

## Facts & Assumptions

**Given:** The pure-death propensity system above and the leap
[[alg-explicit-poisson-tau-leaping]].

[F1] [[def-reaction-network-propensity-system-and-generator]]: one firing at
state $1$ changes the state by $-1$, and the rate at state $0$ is zero.

[F2] [[alg-explicit-poisson-tau-leaping]]: the number $K$ of firings in one
step from state $1$ has law $\operatorname{Pois}(ch)$ and the proposed state
is $1-K$.

[F3] [[def-scalar-poisson-count-law]]: the Poisson mass at
$k$ is $e^{-ch}(ch)^k/k!$.

## Verification

**Given:** $c>0$ and $h>0$.

1.1 The leap state is negative exactly when $1-K<0$, equivalently $K\ge2$. Using the masses in [F3], $$\mathbb P(K\ge2)=1-\mathbb P(K=0)-\mathbb P(K=1) =1-e^{-ch}(1+ch)>0.$$ The strict inequality follows from $e^{ch}>1+ch$ for $ch>0$. [F2, F3, algebra]

2.1 For small $h$, Taylor expansion of $e^{-ch}(1+ch)$ gives $\mathbb P(K\ge2)=\tfrac12c^2h^2+O(h^3)$. The exact chain cannot become negative because its only positive-rate event sends $1$ to $0$, after which the rate is zero by [F1]. Thus the invalid tau-leap event is a distinct numerical exit from the physical state set. [F1, step 1.1, algebra] ∎
