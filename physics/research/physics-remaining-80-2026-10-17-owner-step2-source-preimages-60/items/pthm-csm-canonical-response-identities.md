---
id: pthm-csm-canonical-response-identities
kind: physics-theorem
title: "Canonical energy and fluctuation responses"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-canonical-preparation
  - thm-csm-exponential-normalization-covariance
  - def-td-si-quantities
dependency_roles:
  post-csm-canonical-preparation: physical-assumption
  thm-csm-exponential-normalization-covariance: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Finite canonical model with fixed Hamiltonian, reference measure, particle number and controls on an open temperature interval satisfying local exponential-moment envelopes; no thermodynamic-limit claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.3.1"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

For a fixed-$N$ canonical model with $H$ and reference measure independent of
$T$, let $Z(\beta)=\int e^{-\beta H}dm$ be finite and positive on an open
interval of $\beta>0$. Assume the local envelope hypotheses of
[[thm-csm-exponential-normalization-covariance]] hold for $X=H$ and
$\theta=-\beta$. Under the canonical preparation
[[post-csm-canonical-preparation]], the mean energy $U=\langle H\rangle$ obeys
$$\partial_\beta\log Z=-U,\qquad \partial_\beta U=-\operatorname{Var}(H),\qquad C_V:=\partial_TU=\frac{\operatorname{Var}(H)}{k_BT^2}\ge0,$$
where $\beta=(k_BT)^{-1}$ and $C_V$ is the model heat capacity at the fixed
controls. This is a finite-model response identity, not an empirical claim.

## Facts & Assumptions

**Given:** The canonical preparation, fixed model/reference data, positive
temperature, finite partition function and the local exponential-moment
envelopes.

[A1] $Z(\beta)$ is positive and finite on the interval, with the envelope
hypotheses of the cited exponential theorem for $H$ and $H^2$.

[A2] $H$, $m$ and all non-temperature controls are independent of $T$, and
$\beta=(k_BT)^{-1}$ with $k_B>0$ ([[def-td-si-quantities]]).

[F1] The state is the normalized canonical exponential density
([[post-csm-canonical-preparation]]).

[F2] Under the local envelope, the logarithmic partition derivatives are the
mean and covariance of the sufficient statistic
([[thm-csm-exponential-normalization-covariance]]).

## Proof

**Given:** [A1]–[A2] and the canonical-density and differentiation facts
[F1]–[F2].

1.1 Apply [F2] with scalar statistic $X=H$ and parameter $\theta=-\beta$. Then $\partial_\beta\log Z=-\langle H\rangle=-U$, and $\partial_\beta^2\log Z=\operatorname{Var}(H)$. Differentiating the first identity gives $\partial_\beta U=-\operatorname{Var}(H)$. [A1, F1, F2, algebra]

2.1 Since $d\beta/dT=-1/(k_BT^2)$, the chain rule yields $\partial_TU=(-\operatorname{Var}(H))(-1/(k_BT^2)) =\operatorname{Var}(H)/(k_BT^2)$. A variance is an integral of a square, so it is nonnegative. [A2, step 1.1, algebra] ∎

