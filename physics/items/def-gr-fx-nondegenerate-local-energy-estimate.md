---
id: def-gr-fx-nondegenerate-local-energy-estimate
kind: definition
title: "Nondegenerate integrated local energy estimate near the Schwarzschild photon sphere"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "A precise mathematical form of a first-derivative, unweighted local-energy bound on a fixed Schwarzschild exterior; it is a definition of an estimate, not a claim that the estimate holds."
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-fx-scalar-wave-stress
  - def-gr-observer-and-rest-space
  - def-gr-schwarzschild-exterior-model
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §§3.2.2, 3.2.4 and 4.1, PDF pp. 29–32 and 45–48"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "J. Marzuola, J. Metcalfe, D. Tataru, and M. Tohaneanu, Strichartz Estimates on Schwarzschild Black Hole Backgrounds, arXiv:0802.3942 (2010), §§1 and 3.1, PDF pp. 1–3 and 19–21"
      url: "https://arxiv.org/pdf/0802.3942"
    - title: "J. Sbierski, Characterisation of the Energy of Gaussian Beams on Lorentzian Manifolds with Applications to Black Hole Spacetimes, arXiv:1311.2477 (2015), §§2.1–2.2 and 3.1.1, PDF pp. 9–18 and 24–25"
      url: "https://arxiv.org/pdf/1311.2477"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $(M,g,N)$ be the Schwarzschild exterior
datum with $s>0$, $f(r)=1-s/r$, exterior coordinate $x^0$, and stationary
field $T=\partial_0$. Let $0<\delta<s/2$ and put
$K_\delta:=\{(x^0,r,\omega):|r-3s/2|\leq\delta\}$ for $\omega\in S^2$.
Then $K_\delta$ is contained in $r>s$. On the static slice
$\Sigma_{x^0}:=\{x^0=\text{constant}\}$ the future unit normal is
$n=f^{-1/2}T$. For a smooth real test wave $\psi$ with finite initial
stationary energy, define

$$E_T[\psi](x^0):=\int_{\Sigma_{x^0}}Q_{ab}[\psi]n^aT^b\,d\mu_{\Sigma_{x^0}},\qquad E_{T,\delta}[\psi](x^0):=\int_{\Sigma_{x^0}\cap K_\delta}Q_{ab}[\psi]n^aT^b\,d\mu_{\Sigma_{x^0}}.$$

A **nondegenerate integrated local energy estimate with no trapping loss**
on $K_\delta$ means that there is a finite constant $C$, independent of
$\psi$, such that every smooth solution of $\Box_g\psi=0$ with finite
$E_T[\psi](0)$ satisfies

$$\int_0^\infty E_{T,\delta}[\psi](x^0)\,dx^0\leq C E_T[\psi](0).$$

Here “nondegenerate” means that the estimate integrates the full unweighted
first-derivative density, with no weight vanishing at $r=3s/2$; “no trapping
loss” means that the right side contains only the initial first-derivative
stationary energy, with no additional derivatives or degenerating weights.
This definition asserts no existence or nonexistence of such a constant.

## Definition references

[[def-countable-choice]]

[[def-gr-fx-scalar-wave-stress]]

[[def-gr-observer-and-rest-space]]

[[def-gr-schwarzschild-exterior-model]]

[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]]
