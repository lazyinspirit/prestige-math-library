---
id: pthm-rpm-fixed-target-threshold
kind: physics-theorem
title: "Fixed-target invariant energy threshold"
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
  - post-rpm-isolated-collision-balance
  - pthm-rpm-system-mass-threshold
  - pthm-rpm-inverse-momentum-and-work
  - def-rpm-mechanical-momentum-and-observer-energy
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  pthm-rpm-system-mass-threshold: physical-result
  pthm-rpm-inverse-momentum-and-work: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Necessary invariant-energy threshold for a massive projectile incident on a massive target at rest in one named inertial laboratory frame; it is a kinematic condition and does not predict a reaction rate or occurrence."
empirical_premises: []
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.06%3A_Conservation_of_Momenergy_and_Its_Consequences"
verification:
  precheck: pass
---

## Statement

In a named inertial laboratory frame, consider a mass-specified isolated collision configuration of [[def-rpm-collision-objects]] whose complete incoming list consists exactly of two massive legs: a projectile of rest mass $m_1>0$ and laboratory momentum $P_1=(E_1/c,\mathbf p_1)$, and a target of rest mass $m_2>0$ initially at rest, with momentum $P_2=(m_2c,\mathbf 0)$. Assume the adopted balance postulate [[post-rpm-isolated-collision-balance]] applies. Let the complete outgoing list be a proposed finite nonempty mass-specified final state, and let $\mu\ge0$ be the sum of its recorded rest masses. Thus its total momentum equals $Q:=P_1+P_2$. Define

$$\sigma:=-c^2\eta(Q,Q).$$

Then

$$\sigma=m_1^2c^4+m_2^2c^4+2m_2c^2E_1.$$

The necessary final-state threshold from [[pthm-rpm-system-mass-threshold]] is $\sigma\ge\mu^2c^4$, hence

$$E_1\ge\frac{(\mu^2-m_1^2-m_2^2)c^2}{2m_2},\qquad E_1\ge m_1c^2.$$

If the proposed complete final list contains a nonzero null leg, the invariant-mass inequality is strict, $\sigma>\mu^2c^4$; the displayed invariant threshold can then be an unattained endpoint. These are kinematic necessities, not guarantees that the collision or channel occurs.

In SI units $m_1,m_2,\mu$ are kilograms, $E_1$ is joules, and $\sigma$ is joules squared.

## Facts & Assumptions
**Given:** A flat inertial laboratory frame, a mass-specified finite isolated collision datum with exactly the two stated massive incoming legs and a complete finite nonempty outgoing list, and the adopted isolated-balance postulate.

[A1] [[post-rpm-isolated-collision-balance]]: the complete incoming and outgoing four-momentum sums are equal.

[F1] [[def-rpm-collision-objects]]: a mass-specified collision configuration has finite nonempty incoming and outgoing lists of nonzero future-causal legs, all at one event; the recorded mass sum is taken over the complete list.

[F2] The massive event leg of [[def-rpm-collision-objects]] is $P=mU$ with $\eta(U,U)=-c^2$ and future $U$. Its inertial components therefore have $P^0>0$ and $-(P^0)^2+|\mathbf p|^2=-m^2c^2$. With $E=cP^0$, this is $E>0$ and $E^2=m^2c^4+c^2|\mathbf p|^2$, without a worldline premise. These agree with [[pthm-rpm-inverse-momentum-and-work]] on any affine realization $x(\tau)=p+\tau U$.

[F3] [[def-rpm-mechanical-momentum-and-observer-energy]]: in the laboratory time-axis observer, $E_n=-c\eta(P,n)$ and the spatial momentum is the projection of $P$ into $n^\perp$; a particle at rest has $P=(mc,\mathbf0)$.

[F4] [[pthm-rpm-system-mass-threshold]]: for the same complete isolated datum satisfying balance, its total invariant squared energy obeys $\sigma\ge\mu^2c^4$, strictly if its complete final list contains a nonzero null leg.

## Proof

**Proof technique:** expand the Lorentzian norm in laboratory coordinates and solve the necessary inequality.

1.1 The complete incoming list and balance assumption [A1] identify the common total as $Q=P_1+P_2$. By [F3], these are the observer energy and spatial-momentum components in the laboratory; the projectile shell in [F2] gives $E_1^2-c^2|\mathbf p_1|^2=m_1^2c^4$. The stationary target has $P_2=(m_2c,\mathbf0)$. With signature $(-,+,+,+)$, expansion yields $\sigma=(E_1+m_2c^2)^2-c^2|\mathbf p_1|^2=m_1^2c^4+m_2^2c^4+2m_2c^2E_1$. [A1, F1, F2, F3, algebra]

2.1 The configuration [F1] and postulate [A1] make $Q=P_1+P_2$ the common total of this same complete event, so the system threshold [F4] gives $\sigma\ge\mu^2c^4$. Dividing by $2m_2c^2>0$ gives $E_1\ge(\mu^2-m_1^2-m_2^2)c^2/(2m_2)$. The projectile shell also gives $E_1\ge m_1c^2$ because $E_1>0$ and $E_1^2=m_1^2c^4+c^2|\mathbf p_1|^2\ge m_1^2c^4$. If the complete final list contains a nonzero null leg, the strict case follows from [F4]. [A1, F1, F2, F4, algebra] ∎
