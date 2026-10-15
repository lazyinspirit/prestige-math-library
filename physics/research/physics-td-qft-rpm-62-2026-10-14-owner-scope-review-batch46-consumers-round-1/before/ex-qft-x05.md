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

Let $s>0$, dimensionless $\lambda\in\mathbb R$, parent energy
$\mathsf M_0>0$, and
$G_E\in\mathbb C\setminus\{0\}$ in joules. With massless equal scalar daughters, the identical
final-state quartic total coefficient is
$$ \sigma_{\rm coeff}^{\rm identical} =\frac{\lambda^2(\hbar c)^2}{32\pi s}, $$
and the distinguishable-final coefficient is twice this value. The
identical-daughter decay-rate coefficient is
$$ \Gamma_{\rm coeff}=\frac{|G_E|^2}{32\pi\hbar\mathsf M_0} \quad[\mathrm{s}^{-1}]. $$
Set $\Gamma:=\Gamma_{\rm coeff}>0$. For the lifetime calculation only, let
$(\Xi,\mathcal F,\mathbb P)$ be a probability space and let
$T:\Xi\to[0,\infty)$ be a measurable parent lifetime measured in seconds.
Define its law on Borel sets $B\subseteq[0,\infty)$ by
$\mu_T(B):=\mathbb P(T\in B)$, and separately assume that $\mu_T$ has
density $f_T(t)=\Gamma e^{-\Gamma t}$ relative to Lebesgue measure. This is
the additional exponential lifetime model; it gives
$P_{\rm surv}(t):=\mathbb P(T>t)=e^{-\Gamma t}$ for $t\geq0$. Define the
mean lifetime as $\mathbb E[T]:=\int_{[0,\infty)}t\,d\mu_T(t)$, and define
the half-life $t_{1/2}$ by $P_{\rm surv}(t_{1/2})=1/2$. Then the mean
lifetime is $1/\Gamma$ and the half-life is $\ln 2/\Gamma$. The exponential
law is not a consequence of the formal coefficient calculation.

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

[A2] For the lifetime calculation only, assume the exponential probability
law for $T$ defined in the Statement, with $\Gamma=\Gamma_{\rm coeff}$.
This assumption is not part of [A1] or the formal coefficient maps.

## Example

The massless special case exposes both the full-sphere identical-particle
factor and the distinction between a rate coefficient and a decay law.

## Verification

1.1 Set the daughter rest energy to zero in [F1]. The square-root threshold factor becomes $1$, so the identical total coefficient is $\lambda^2(\hbar c)^2/(32\pi s)$ and the distinguishable total is twice that. The cross-section unit is $(\mathrm{J\,m})^2/\mathrm{J}^2=\mathrm{m}^2$. For the same massless daughter specialization, [F1] gives $$ \Gamma_{\rm coeff}=\frac{|G_E|^2}{32\pi\hbar\mathsf M_0}. $$ Its unit is $\mathrm J^2/(\mathrm{J\,s\,J})=\mathrm{s}^{-1}$, so it is a rate coefficient. Since $G_E\ne0$, $\hbar>0$, and $\mathsf M_0>0$, this coefficient is strictly positive. [given, F1, F2, algebra]

2.1 Under [A2], $\mu_T$ has density $f_T(t)=\Gamma e^{-\Gamma t}$ on $[0,\infty)$. Its total mass is $\int_0^\infty\Gamma e^{-\Gamma t}\,dt=1$, and the mean is $$\mathbb E[T]=\int_0^\infty t\Gamma e^{-\Gamma t}\,dt=\left[-t e^{-\Gamma t}\right]_0^\infty+\int_0^\infty e^{-\Gamma t}\,dt=\frac1\Gamma,$$ by integration by parts; $t e^{-\Gamma t}\to0$ since $\Gamma>0$. The survival function is continuous and strictly decreasing from $1$ to $0$, so the defining equation for $t_{1/2}$ has a unique solution; solving $e^{-\Gamma t_{1/2}}=1/2$ gives $t_{1/2}=\ln2/\Gamma$. These formulas use [A2], not the formal rate coefficient alone; no experiment or detector record is specified. [step 1.1, A1, A2, algebra] ∎
