---
id: ex-csm-spherical-shell-gas
kind: example
title: "Finite shell support versus canonical Gaussian tails"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-csm-spherical-shell-gas
  - pthm-csm-ideal-gas-ensemble
  - lem-csm-examples-gamma-gaussian-tools
  - def-countable-choice
dependency_roles:
  pthm-csm-spherical-shell-gas: physical-result
  pthm-csm-ideal-gas-ensemble: physical-result
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Two operationally indistinguishable particles in a three-dimensional spherical-shell preparation compared with the matched-mean canonical ideal gas, conditional on Countable Choice for the marginal theorem; exact distributions only."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 13, IV.D, finite microcanonical momentum sphere (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/0cdb670a825c6aaea7e229ac40776cbf_MIT8_333F13_Lec13.pdf"
    - title: "David Tong, Statistical Physics, §2.2, canonical ideal-gas momentum distribution"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$ as required by [[pthm-csm-spherical-shell-gas]], and use its one-species rectangular-box model. Take $d=3$, $N=2$, $D=6$, mass $m>0$ in kg, and energy $E>0$ in joules, so the momentum radius is $R=\sqrt{2mE}$ in kg m s$^{-1}$. A uniformly selected particle's three-momentum block ($k=3$) under the shell preparation has density
$$f_{6,3}(p)=\frac{4}{\pi^2R^3}\sqrt{1-\frac{|p|^2}{R^2}},\qquad |p|<R,$$
and zero for $|p|\ge R$. A canonical ideal gas with $\beta=D/(2E)=3/E$ in J$^{-1}$ has the same mean total energy but assigns positive probability to the annulus $R<|p_\star|<2R$ for the uniformly selected particle's momentum $p_\star$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the one-species rectangular-box shell theorem [[pthm-csm-spherical-shell-gas]] with $D=6,k=3,E>0$, and the matched-mean canonical ideal-gas theorem [[pthm-csm-ideal-gas-ensemble]].

[F1] [[pthm-csm-spherical-shell-gas]]: assuming $\mathrm{AC}_\omega$, the uniformly selected particle's $k$-block shell marginal has density $f_{D,k}$, concentrated in the closed radius-$R$ ball with no boundary atom for $k<D$, and $\beta=D/(2E)$ matches the canonical mean total energy.

[F2] [[pthm-csm-ideal-gas-ensemble]]: in the massive canonical model each momentum component has a Gaussian density with positive variance $m/\beta$, hence the vector density is strictly positive on all of $\mathbb R^d$.

[F3] [[lem-csm-examples-gamma-gaussian-tools]]: $\Gamma(s+1)=s\Gamma(s)$ and $\Gamma(1/2)=\sqrt\pi$, so $\Gamma(3)=2$ and $\Gamma(3/2)=\sqrt\pi/2$.

[A1] Choose $d=3$, $N=2$, and $k=3$ in the one-species model.

## Verification

1.1 Substituting $D=6,k=3$ into [F1] gives exponent $(6-3-2)/2=1/2$ and coefficient $\Gamma(3)/[\Gamma(3/2)(\pi R^2)^{3/2}]=4/(\pi^2R^3)$ using [F3]. This is the displayed density. [A1, F1, F3, algebra]

2.1 The shell block has probability zero outside the radius-$R$ ball by [F1]. The canonical Gaussian vector density from [F2] is positive throughout the nonempty annulus $R<|p_\star|<2R$, which has positive volume, so that event has positive canonical probability for a uniformly selected particle. Therefore the two finite momentum marginals differ. [F1, F2, step 1.1] ∎

## Remarks

All distributions here are model predictions under their stated preparations. No observed counts or fitted parameters are involved.

