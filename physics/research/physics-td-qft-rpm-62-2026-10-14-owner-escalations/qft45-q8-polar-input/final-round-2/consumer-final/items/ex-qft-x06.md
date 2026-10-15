---
id: ex-qft-x06
kind: example
title: One-charge soft photon count example
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 9
deps:
  - def-countable-choice
  - def-qft-example-data
  - pthm-qft-example-soft-coherent-counts
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  pthm-qft-example-soft-coherent-counts: physical-result
physical_scope: >-
  An exact numerical specialization of the prescribed-current positive free
  coherent-state model and finite-cutoff photon-count prediction. It describes
  a prepared model state, not an observed or simulated emission event.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Use the one-charge prescribed current of
[[pthm-qft-example-soft-coherent-counts]] with final velocity
$v=\tfrac12$ along $\hat{\mathbf z}$. Choose any upper photon-energy cutoff
$\Lambda>0$ in joules and set $\lambda=\Lambda/\mathrm e$, where $\mathrm e$
is Euler's number. The angular coefficient is
$$C=\frac{\alpha}{\pi}(2\log 3-2)>0.$$
The exact cutoff coherent state therefore has mean photon count $C$, vacuum
probability $e^{-C}$, and mean photon energy
$C\Lambda(1-\mathrm e^{-1})$ joules. Each halving of $\lambda$ increases the
mean count by $C\log 2$; the mean energy remains bounded and tends to
$C\Lambda$ as $\lambda\downarrow0$. These are model predictions for the
prepared free state.

## Facts & Assumptions

**Given:** Countable Choice, the coupling normalization, and the conditional
count law and energy formula of
[[pthm-qft-example-soft-coherent-counts]].

[A1] Countable Choice $\mathrm{AC}_\omega$ is carried by
[[def-countable-choice]] and by the conditional theorem used here.

[F1] [[def-qft-example-data]]: $g_{\mathrm{em}}^2=4\pi\alpha$ with
$g_{\mathrm{em}}>0$; $\alpha$ is a positive dimensionless coupling, distinct
from the electron gyromagnetic factor.

[F2] [[pthm-qft-example-soft-coherent-counts]]: for $0<v<1$ the prescribed
one-charge current has
$C(v)=\frac{\alpha}{\pi}\bigl(v^{-1}\log((1+v)/(1-v))-2\bigr)>0$; at cutoffs
$0<\lambda<\Lambda$, $p_n=e^{-C\log(\Lambda/\lambda)}
(C\log(\Lambda/\lambda))^n/n!$ and the mean photon energy is
$C(\Lambda-\lambda)$ joules. The claim concerns the constructed free state,
not full interacting-QED emission.

## Proof

**Given:** [A1], [F1]–[F2], $v=\tfrac12$, $\Lambda>0$, and
$\lambda=\Lambda/\mathrm e$.

1.1 Substituting $v=\tfrac12$ into [F2] gives $C=(\alpha/\pi)(2\log 3-2)>0$, and $\log(\Lambda/\lambda)=\log(\mathrm e)=1$. Thus the mean count is $C$, $p_0=e^{-C}$, and the general count formula specializes to $p_n=e^{-C}C^n/n!$. [A1, F1, F2, algebra]

2.1 Since $\lambda=\Lambda/\mathrm e$, the energy formula in [F2] gives $C(\Lambda-\lambda)=C\Lambda(1-\mathrm e^{-1})$ joules. After $j$ successive halvings, $\lambda_j=\Lambda\mathrm e^{-1}2^{-j}$, so $\log(\Lambda/\lambda_j)=1+j\log2$ and the mean count is $C(1+j\log2)$. The mean energy is $C(\Lambda-\lambda_j)\to C\Lambda$ and [F2] gives no Fock-vector or projective-ray limit when $C>0$. These remain predictions for the prescribed current and prepared free state. [F1, F2, algebra] ∎
