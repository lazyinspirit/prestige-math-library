---
id: pthm-rpm-two-null-invariant-energy
kind: physics-theorem
title: "Two null momenta and collision angle"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-collision-objects
  - pthm-rpm-system-mass-threshold
  - def-rpm-mechanical-momentum-and-observer-energy
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-future-causal-sums-and-inertial-coordinate-criterion
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  pthm-rpm-system-mass-threshold: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
physical_scope: "Invariant energy of two nonzero future-null incoming momenta as resolved in one named inertial laboratory observer; no collision outcome or reaction channel is asserted."
empirical_premises: []
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.03%3A_Momenergy_Components_and_Magnitude"
verification:
  precheck: pass
---

## Statement

Let $P_1,P_2$ be two nonzero future-null incoming momenta in a finite collision configuration, and let $n$ be the future unit observer of a named inertial laboratory frame. Define $E_i:=E_n(P_i)>0$, $\mathbf p_i:=q_n(P_i)$, and equip $n^\perp$ with the induced Euclidean inner product $\langle u,v\rangle_n:=\eta(u,v)$ and norm $|u|_n:=\sqrt{\langle u,u\rangle_n}$. Let $\theta\in[0,\pi]$ be their spatial angle, $\cos\theta=\langle\mathbf p_1,\mathbf p_2\rangle_n/(|\mathbf p_1|_n|\mathbf p_2|_n)$. For $Q:=P_1+P_2$ and $\sigma:=-c^2\eta(Q,Q)$,

$$\sigma=2E_1E_2(1-\cos\theta),\qquad M(Q)=\frac{\sqrt{\sigma}}{c^2}.$$

The total $Q$ is null exactly when $\theta=0$ (the two incoming vectors lie on one future null ray); it is timelike for $\theta>0$. In particular, for head-on momenta $\theta=\pi$, $M(Q)=2\sqrt{E_1E_2}/c^2$; if $E_1=E_2=E$, this is $2E/c^2$. The angle and the two energies depend on the named observer, while $\sigma$ and $M(Q)$ are invariant.

In SI units $E_1,E_2$ are joules, $\sigma$ is joules squared, and $M(Q)$ is kilograms; $\theta$ is dimensionless.

## Facts & Assumptions

**Given:** Two nonzero future-null incoming momenta, a future unit laboratory observer, and the finite collision-data conventions.

[F1] [[def-rpm-collision-objects]]: each null leg is a nonzero future-null vector; its momentum scale is specified independently of proper time.

[F2] [[def-rpm-mechanical-momentum-and-observer-energy]]: $E_n(P)=-c\eta(P,n)$, $q_n(P)=P+\eta(P,n)n$, and the observer rest space has its Euclidean inner product.

[F3] [[pthm-rpm-system-mass-threshold]]: the total invariant squared energy is $\sigma=-c^2\eta(Q,Q)$ and, when $Q$ is timelike, $M(Q)=\sqrt{\sigma}/c^2$; a future-null total has no rest frame.

[F4] [[lem-sr-energy-momentum-observer-identities]]: for a nonzero future-null vector, the observer energy is positive and equals $c$ times the norm of its spatial momentum.

[F5] [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]: a finite sum of nonzero future-causal momenta is nonzero future causal, and a sum of two future-null vectors is timelike unless they lie on the same future null ray.

## Proof

**Proof technique:** expand the Lorentzian inner product using the observer decomposition.

1.1 By [F2], $P_i=(E_i/c)n+\mathbf p_i$, with $\mathbf p_i\in n^\perp$. The null mass-shell identity of [F4] gives $|\mathbf p_i|=E_i/c$, and [F4] also gives $E_i>0$, so the spatial angle is well-defined. [F1, F2, F4]

1.2 Orthogonality to $n$ gives $\eta(P_1,P_2)=-E_1E_2/c^2+\langle\mathbf p_1,\mathbf p_2\rangle_n$. Since $P_i$ are null, $\sigma=-c^2\eta(P_1+P_2,P_1+P_2)=-2c^2\eta(P_1,P_2)=2E_1E_2(1-\cos\theta)$. Substituting into [F3] proves the mass formula when $\sigma>0$. [F2, F3, algebra]

2.1 Because $E_1E_2>0$ and $1-\cos\theta\ge0$, $\sigma=0$ exactly when $\cos\theta=1$, or $\theta=0$; then the spatial vectors have the same direction and the null four-vectors are positive multiples of one future-null vector. For $\theta>0$, $\sigma>0$, and [F5] makes $Q$ future timelike, so it has a center-of-momentum frame. At $\theta=\pi$, substitution gives $M=2\sqrt{E_1E_2}/c^2$, and equal energies give $2E/c^2$. [F1, F2, F3, F4, F5, algebra] ∎
