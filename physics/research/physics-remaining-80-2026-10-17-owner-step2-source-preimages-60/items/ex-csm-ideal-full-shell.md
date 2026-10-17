---
id: ex-csm-ideal-full-shell
kind: example
title: "Full ideal-gas shell moments and entropy conventions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-microcanonical-preparation
  - post-csm-counting-and-physical-observables
  - thm-csm-kinetic-potential-shell-marginals
  - def-td-si-quantities
  - def-cm01-units
dependency_roles:
  post-csm-microcanonical-preparation: physical-assumption
  post-csm-counting-and-physical-observables: physical-assumption
  thm-csm-kinetic-potential-shell-marginals: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
physical_scope: "Finite ideal gas on a compact flat configuration torus at positive regular shell energy; compares two explicitly defined entropy conventions without asserting which one is physically preferred."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §§4.2.1–4.2.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
---

## Example

Let $n=dN\ge3$ and use a flat configuration torus of position volume $V^N$,
equal masses $m>0$, Hamiltonian $H=\sum_{j=1}^np_j^2/(2m)$ and reference
$dq\,dp/(N!a_0^n)$ with fixed action scale $a_0>0$. For $E>0$, write
$\alpha=n/2$. The density of shell measure is
$$D(E)=\frac{V^N(2m)^{n/2}\alpha B_n}{N!a_0^n}E^{\alpha-1},$$
where $B_n$ is the volume of the unit ball in $\mathbb R^n$. Under the full
shell preparation, $K=E$ exactly and each quadratic momentum component has
mean $E/n$. The shell entropy $S_{\rm sh}=k_B\log(E_0D(E))$ and cumulative
volume entropy $S_{\rm vol}=k_B\log(W(E)/W_0)$, for fixed positive reference
scales $E_0,W_0$, have derivatives
$$\partial_E S_{\rm sh}=k_B\frac{\alpha-1}{E},\qquad \partial_E S_{\rm vol}=k_B\frac{\alpha}{E}.$$
They differ by $k_B/E$ at finite $n$; neither convention is selected by this
calculation.

## Facts & Assumptions

**Given:** The ideal quadratic Hamiltonian, finite flat configuration volume,
positive regular shell energy, declared reference and adopted shell law.

[A1] The reference uses the declared $1/(N!a_0^n)$ counting convention
([[post-csm-counting-and-physical-observables]]), and the full regular-shell
law is adopted as in [[post-csm-microcanonical-preparation]].

[A2] $n\ge3$, $E>0$, $m>0$, and the position torus has volume $V^N$; the
fixed positive action and energy references are model parameters, with
dimensions from [[def-cm01-units]], and entropy units use
[[def-td-si-quantities]]. The physical reference is that of [A1]; if shell
gradients are used, apply the explicit conjugate-coordinate normalization
of [[post-csm-microcanonical-preparation]]. Hence the shell is nonempty and
regular.

[F1] For kinetic-plus-potential shells, the position marginal and component
moments are those of [[thm-csm-kinetic-potential-shell-marginals]].

## Verification

**Given:** [A1]–[A2] and the shell marginal identity [F1].

1.1 In the kinetic shell theorem set $U=0$, $C_m=(2m)^{n/2}$ and
$\alpha=n/2$. The configuration integral of $1$ is $V^N$, so its exact
density formula gives the displayed $D(E)$. For each $j$ the conditional
component mean is $E/n$, and on the shell
$\sum_jp_j^2/(2m)=E$ pointwise; therefore $K=E$ and its variance is zero.
[A1, A2, F1, algebra]

2.1 Integrating $D(s)=Cs^{\alpha-1}$ from
$0$ to $E$ gives cumulative phase volume
$$W(E)=\int_0^E Cs^{\alpha-1}ds=\frac{C}{\alpha}E^\alpha,$$
where $C=V^N(2m)^{n/2}\alpha B_n/(N!a_0^n)$. Thus
$\log(E_0D(E))=\log(E_0C)+(\alpha-1)\log E$ and
$\log(W(E)/W_0)=\log(C/(\alpha W_0))+\alpha\log E$. Differentiation
gives the two displayed derivatives. Since their difference is $k_B/E>0$,
they are distinct at every finite $E>0$. [A2, F1, step 1.1, algebra] ∎
