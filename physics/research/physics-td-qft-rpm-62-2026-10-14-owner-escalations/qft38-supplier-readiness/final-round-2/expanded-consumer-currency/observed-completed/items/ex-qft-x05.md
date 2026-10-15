---
id: ex-qft-x05
kind: example
domain: physics
library: physics
title: Scalar symmetry factor and conditional lifetime model
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - def-qft-example-data
  - def-qft-example-observable-types
  - lem-qft-example-two-body-phase-space
  - cor-qft-example-scalar-tree-coefficients
  - pthm-qft-example-formal-scattering-decay
  - post-qft-example-formal-observable-map
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-qft-example-observable-types: formulation-prerequisite
  lem-qft-example-two-body-phase-space: mathematical-premise
  cor-qft-example-scalar-tree-coefficients: mathematical-premise
  pthm-qft-example-formal-scattering-decay: physical-result
  post-qft-example-formal-observable-map: physical-assumption
physical_scope: >-
  A massless-daughter scalar formal coefficient example. It explicitly adds
  an exponential survival model before deriving a mean and half-life; the
  formal rate coefficient by itself implies neither time law.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3 §§3.5.3 and 3.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §11
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Statement

Let $s>0$, $\lambda\in\mathbb R$, parent energy $\mathsf M_0>0$, and
$G_E\ne0$ in joules. With massless equal scalar daughters, the identical
final-state quartic total coefficient is
$$ \sigma_{\rm coeff}^{\rm identical} =\frac{\lambda^2(\hbar c)^2}{32\pi s}, $$
and the distinguishable-final coefficient is twice this value. The
identical-daughter decay-rate coefficient is
$$ \Gamma_{\rm coeff}=\frac{|G_E|^2}{32\pi\hbar\mathsf M_0} \quad[\mathrm{s}^{-1}]. $$
If, as a separate assumption, survival is exponential with rate
$\Gamma=\Gamma_{\rm coeff}$, then the mean lifetime is $1/\Gamma$ and the
half-life is $\ln 2/\Gamma$. The exponential law is not a consequence of
the formal coefficient calculation.

## Facts & Assumptions

**Given:** The scalar amplitude conventions and coefficient maps of
[[cor-qft-example-scalar-tree-coefficients]],
[[lem-qft-example-two-body-phase-space]], and
[[post-qft-example-formal-observable-map]].

[F1] [[cor-qft-example-scalar-tree-coefficients]]: for identical equal-mass
scalars the full-sphere quartic coefficient is
$\lambda^2(\hbar c)^2/(32\pi s)$; distinguishable final particles give
twice this value. The identical-daughter rate coefficient is
$|G_E|^2\sqrt{1-4m_s^2/\mathsf M_0^2}/(32\pi\hbar\mathsf M_0)$.

[F2] [[def-qft-example-data]]: $[\hbar]=\mathrm{J\,s}$ and
$[\hbar c]=\mathrm{J\,m}$; $s$ is in $\mathrm{J}^2$.

[A1] [[post-qft-example-formal-observable-map]]: formal coefficients are
adopted leading readings only; no survival law follows from the rate map.

[A2] For the lifetime calculation only, assume the additional survival law
$P_{\rm surv}(t)=e^{-\Gamma t}$ for $t\geq0$, with
$\Gamma=\Gamma_{\rm coeff}>0$. This assumption is not part of [A1].

## Example

The massless special case exposes both the full-sphere identical-particle
factor and the distinction between a rate coefficient and a decay law.

## Verification

1.1 Set the daughter rest energy to zero in [F1]. The square-root threshold factor becomes $1$, so the identical total coefficient is $\lambda^2(\hbar c)^2/(32\pi s)$ and the distinguishable total is twice that. The cross-section unit is $(\mathrm{J\,m})^2/\mathrm{J}^2=\mathrm{m}^2$. For the same massless daughter specialization, [F1] gives $$ \Gamma_{\rm coeff}=\frac{|G_E|^2}{32\pi\hbar\mathsf M_0}. $$ Its unit is $\mathrm J^2/(\mathrm{J\,s\,J})=\mathrm{s}^{-1}$, so it is a rate coefficient. [given, F1, F2, algebra]

2.1 Under the extra model [A2], $$ \tau=\int_0^\infty P_{\rm surv}(t)\,dt =\int_0^\infty e^{-\Gamma t}\,dt=\frac1\Gamma, $$ where the antiderivative is $-e^{-\Gamma t}/\Gamma$ and $\Gamma>0$ makes its infinite-time endpoint vanish. Solving $P_{\rm surv}(t_{1/2})=1/2$ gives $e^{-\Gamma t_{1/2}}=1/2$, hence $t_{1/2}=\ln2/\Gamma$. These lifetime formulas use [A2], not the formal rate coefficient alone; no experiment or detector record is specified. [step 1.1, A1, A2, algebra] ∎
