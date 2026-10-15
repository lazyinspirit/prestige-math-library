---
id: ex-qft-x01
kind: example
domain: physics
library: physics
title: Exact two-level transition versus its first coefficient
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 4
deps:
  - pthm-qft-example-regulated-probability-control
  - def-qft-example-data
  - def-countable-choice
dependency_roles:
  pthm-qft-example-regulated-probability-control: physical-result
  def-qft-example-data: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  One exactly constructed two-level finite Hamiltonian and its explicitly
  supplied projective measurement. The first-order squared coefficient is not
  called a probability, and no continuum decay or experimental data is claimed.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3 “Interacting Fields,” §3.1.1 “Dyson’s Formula”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
---

## Example

Under the explicit pure-state preparation and unitary-evolution assumption of
[[pthm-qft-example-regulated-probability-control]], take
$\mathcal H=\mathbb C^2$, $H_0=0$, $V(t)=g_E\sigma_x$ with
$g_E>0$ joules, dimensionless $\lambda=1$, initial vector $e_1=(1,0)$, and
the two-outcome projective measurement $P=|e_2\rangle\langle e_2|$,
$I-P$, where $e_2=(0,1)$. At
$\tau=\pi\hbar/(2g_E)$ seconds the exact model transition probability is
$1$, whereas the first-order squared transition coefficient is
$\pi^2/4>1$. The latter is a coefficient-derived square, not a probability.
This is an exact constructed-model calculation, not a simulated or reported
experiment.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $g_E>0$ in joules, $\hbar>0$ in $\mathrm{J\,s}$, the two-level Hamiltonian and projective measurement in the Example, and the conditional theorem of [[pthm-qft-example-regulated-probability-control]].

[F1] [[pthm-qft-example-regulated-probability-control]]: under its stated pure-state preparation $\rho_0=T_{e_1,e_1}$ and model update by the constructed unitary $U(\tau)$, for $H=g_E\sigma_x$ and $z=g_E\tau/\hbar$ the exact transition probability is $\sin^2z$ and the first-order squared coefficient is $z^2$; the coefficient-derived square need not be a probability.

[F2] [[def-qft-example-data]]: $g_E$ has energy unit joule and $\hbar$ has unit $\mathrm{J\,s}$, so $g_E\tau/\hbar$ is dimensionless when $\tau$ is in seconds.

[A1] [[def-countable-choice]]: assume only $\mathrm{AC}_\omega$, as required by the conditional supplier theorem.

## Verification

1.1 At the selected time, $z=g_E\tau/\hbar=\pi/2$ by the definition of $\tau$ [F2]. The exact transition probability from [F1] is therefore $\sin^2(\pi/2)=1$, while the first-order squared coefficient is $(\pi/2)^2=\pi^2/4$. [given, F1, F2, A1, algebra]

2.1 Since $\pi>2$, $\pi^2/4>1$. Thus this squared coefficient cannot be a probability for the specified outcome, while the exact model probability remains $1$ under the stipulated constructed model and measurement. [step 1.1, F1, algebra]

3.1 The theorem's quartic error bound specializes at this time to $|1-\pi^2/4|\le\pi^4/48$. It is a valid absolute bound, but it exceeds $1$ since $\pi>3$; it gives no sub-unit error control at this time. No empirical uncertainty or continuum statement is inferred. [given, F1, step 1.1, algebra] ∎
