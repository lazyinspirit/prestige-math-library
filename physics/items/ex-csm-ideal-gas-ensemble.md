---
id: ex-csm-ideal-gas-ensemble
kind: example
title: "Maxwell speed marginal and Poisson number example"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-ideal-gas-ensemble
  - def-countable-choice
  - def-real-exponential-function-and-e
  - def-natural-logarithm
dependency_roles:
  pthm-csm-ideal-gas-ensemble: physical-result
  def-countable-choice: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
physical_scope: "Conditional on ACω for the Euclidean Lebesgue product reference; exact d=3 massive ideal-gas canonical speed law and one grand-canonical activity choice for one operationally indistinguishable species, including the vacuum sector; no measured gas data."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§2.2–2.2.4, ideal gas and Maxwell speed distribution"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, ideal gas in the grand canonical ensemble"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$ as required by [[pthm-csm-ideal-gas-ensemble]]. In a canonical sector $N\ge1$ of the massive $d=3$ ideal-gas model of one operationally indistinguishable species, choose any mass $m>0$ in kg and inverse temperature $\beta>0$ in J$^{-1}$. The most probable speed of a uniformly selected particle is $\sqrt{2/(m\beta)}$ and its ensemble mean speed is $\sqrt{8/(\pi m\beta)}$. In the separate grand model, which includes the vacuum sector, choose the chemical potential
$$\mu_{\rm chem}=\beta^{-1}\log(\lambda^3/V),$$
so the mean activity parameter $\nu=\exp(\beta\mu_{\rm chem})V/\lambda^3$ equals $1$, where $V$ is in m$^3$, $\lambda$ in metres, and $\mu_{\rm chem}$ in joules. The particle count then has the Poisson$(1)$ law, including $\mathbb P(N=0)=\mathbb P(N=1)=\exp(-1)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the massive ideal-gas canonical and grand preparations of [[pthm-csm-ideal-gas-ensemble]] for one operationally indistinguishable species, with $d=3$, $m,\beta,V,\lambda>0$ and the vacuum convention $Z_0=1$.

[F1] [[pthm-csm-ideal-gas-ensemble]]: in $d=3$, the uniformly selected particle's speed mode and mean are $\sqrt{2/(m\beta)}$ and $\sqrt{8/(\pi m\beta)}$; with the defined vacuum sector, the grand count has Poisson mass $\exp(-\nu)\nu^j/j!$ for every $j\ge0$, where $\nu=\exp(\beta\mu_{\rm chem})V/\lambda^3$.

[F2] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]]: $\exp$ and $\log$ are inverse functions on $\mathbb R$ and $(0,\infty)$, so $\exp(\log x)=x$ for $x>0$.

[A1] Choose the grand model parameter $\mu_{\rm chem}=\beta^{-1}\log(\lambda^3/V)$; this is a parameter selection, not an observation.

## Verification

1.1 Specializing the $d=3$ clauses of [F1] gives the stated mode and mean of the model speed distribution; these are distributional functionals, not values assigned to every individual particle. [F1]

2.1 Substituting [A1] and applying [F2] gives $\exp(\beta\mu_{\rm chem})=\lambda^3/V$, hence $\nu=1$ in [F1]. The Poisson formula then gives $\mathbb P(N=j)=\exp(-1)/j!$, so the $j=0$ and $j=1$ probabilities both equal $\exp(-1)$. [A1, F1, F2, algebra] ∎

## Remarks

The displayed values are exact consequences of the specified distributions. They are not measured speeds or particle counts.

