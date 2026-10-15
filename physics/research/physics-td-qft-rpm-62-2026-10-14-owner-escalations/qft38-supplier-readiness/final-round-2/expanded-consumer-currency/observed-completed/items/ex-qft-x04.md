---
id: ex-qft-x04
kind: example
domain: physics
library: physics
title: Massless formal annihilation angular contrast
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - def-qft-example-data
  - def-qft-example-observable-types
  - pthm-qft-example-formal-scattering-decay
  - post-qft-example-formal-observable-map
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-qft-example-observable-types: formulation-prerequisite
  pthm-qft-example-formal-scattering-decay: physical-result
  post-qft-example-formal-observable-map: physical-assumption
physical_scope: >-
  A massless specialization of the adopted formal one-photon tree coefficient.
  It compares two angular coefficients and integrates their formal coefficient
  over the sphere; it is not a measured event ratio or exact continuum QED
  cross section.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6 §6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§11 and 46–48
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Statement

Use the massless $m=M=0$ case of the formal tree theorem
[[pthm-qft-example-formal-scattering-decay]] with $s>0$. The differential
coefficient at $\theta=0$ is twice its value at $\theta=\pi/2$; integrating
over the full sphere gives
$$ \sigma_{\rm coeff}=\frac{4\pi\alpha^2(\hbar c)^2}{3s}. $$
All three quantities are formal coefficients in the adopted map, not event
counts or exact measured cross sections.

## Facts & Assumptions

**Given:** $s>0$, $m=M=0$, and the coefficient conventions of
[[pthm-qft-example-formal-scattering-decay]] and
[[post-qft-example-formal-observable-map]].

[F1] [[pthm-qft-example-formal-scattering-decay]]: the differential
coefficient is
$\alpha^2(\hbar c)^2\beta_\mu[3-\beta_e^2-\beta_\mu^2+
\beta_e^2\beta_\mu^2\cos^2\theta]/(4s\beta_e)$ and the total coefficient
is its full-sphere integral.

[F2] [[def-qft-example-data]]: $\alpha$ is dimensionless,
$[\hbar c]=\mathrm{J\,m}$, and $[s]=\mathrm{J}^2$.

[A1] [[post-qft-example-formal-observable-map]]: the selected tree result is
a leading formal coefficient with no exact continuum or empirical
identification.

## Example

The angular contrast is a simple consequence of the massless tree angular
polynomial.

## Verification

1.1 Setting $\beta_e=\beta_\mu=1$ in [F1] gives $$ \frac{d\sigma_{\rm coeff}}{d\Omega} =\frac{\alpha^2(\hbar c)^2}{4s}(1+\cos^2\theta). $$ Thus its values at $0$ and $\pi/2$ are respectively $\alpha^2(\hbar c)^2/(2s)$ and $\alpha^2(\hbar c)^2/(4s)$, and their ratio is $2$. The numerator has unit $\mathrm{J}^2\mathrm{m}^2$ and $s$ has unit $\mathrm{J}^2$, so each coefficient has area unit $\mathrm{m}^2$. [given, F1, F2, algebra]

2.1 Integrating the same density uses $\int_{S^2}d\Omega=4\pi$ and $\int_{S^2}\cos^2\theta\,d\Omega=4\pi/3$, so $$ \sigma_{\rm coeff} =\frac{\alpha^2(\hbar c)^2}{4s}\left(4\pi+\frac{4\pi}{3}\right) =\frac{4\pi\alpha^2(\hbar c)^2}{3s}. $$ The adopted reading [A1] introduces no count or measurement record. [step 1.1, F1, A1, algebra] ∎
