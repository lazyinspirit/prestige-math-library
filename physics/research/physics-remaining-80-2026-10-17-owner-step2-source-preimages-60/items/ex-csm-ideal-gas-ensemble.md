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
dependency_roles:
  pthm-csm-ideal-gas-ensemble: physical-result
physical_scope: "Exact d=3 massive ideal-gas canonical speed law and one grand-canonical activity choice; no measured gas data."
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

In the massive $d=3$ ideal-gas model, choose any mass $m>0$ in kg and inverse temperature $\beta>0$ in J$^{-1}$. The most probable speed is $\sqrt{2/(m\beta)}$ and the ensemble mean speed is $\sqrt{8/(\pi m\beta)}$. In the grand model choose the chemical potential
$$\mu_{\rm chem}=\beta^{-1}\log(\lambda^3/V),$$
so the mean activity parameter $\nu=e^{\beta\mu_{\rm chem}}V/\lambda^3$ equals $1$, where $V$ is in m$^3$, $\lambda$ in metres, and $\mu_{\rm chem}$ in joules. The particle count then has the Poisson$(1)$ law, including $\mathbb P(N=0)=\mathbb P(N=1)=e^{-1}$.

## Facts & Assumptions

**Given:** The massive ideal-gas canonical and grand preparations of [[pthm-csm-ideal-gas-ensemble]], with $d=3$, $m,\beta,V,\lambda>0$.

[F1] [[pthm-csm-ideal-gas-ensemble]]: in $d=3$, the speed mode and mean are $\sqrt{2/(m\beta)}$ and $\sqrt{8/(\pi m\beta)}$; the grand count is Poisson with mean $\nu=e^{\beta\mu_{\rm chem}}V/\lambda^3$.

[A1] Choose the grand model parameter $\mu_{\rm chem}=\beta^{-1}\log(\lambda^3/V)$; this is a parameter selection, not an observation.

## Verification

1.1 Specializing the $d=3$ clauses of [F1] gives the stated mode and mean of the model speed distribution; these are distributional functionals, not values assigned to every individual particle. [F1]

2.1 Substituting [A1] gives $e^{\beta\mu_{\rm chem}}=\lambda^3/V$, hence $\nu=1$ in [F1]. The Poisson formula then gives $\mathbb P(N=j)=e^{-1}/j!$, so the $j=0$ and $j=1$ probabilities both equal $e^{-1}$. [A1, F1, algebra] ∎

## Remarks

The displayed values are exact consequences of the specified distributions. They are not measured speeds or particle counts.

