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
  - pthm-rpm-system-mass-threshold
  - pthm-rpm-inverse-momentum-and-work
  - def-rpm-mechanical-momentum-and-observer-energy
dependency_roles:
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

In a named inertial laboratory frame, let a massive projectile of rest mass $m_1>0$ and energy $E_1$ strike a massive target of rest mass $m_2>0$ initially at rest. Let the incoming momenta be $P_1=(E_1/c,\mathbf p_1)$ and $P_2=(m_2c,\mathbf 0)$, and let $\mu\ge0$ be the sum of the rest masses in a proposed final state of a finite isolated collision. Then

$$\sigma:=-c^2\eta(P_1+P_2,P_1+P_2)=m_1^2c^4+m_2^2c^4+2m_2c^2E_1.$$

The necessary final-state threshold from [[pthm-rpm-system-mass-threshold]] is $\sigma\ge\mu^2c^4$, hence

$$E_1\ge\frac{(\mu^2-m_1^2-m_2^2)c^2}{2m_2},\qquad E_1\ge m_1c^2.$$

If a nonzero null final leg is required, the invariant-mass inequality is strict, $\sigma>\mu^2c^4$; the displayed invariant threshold can then be an unattained endpoint. These are kinematic necessities, not guarantees of a physical channel.

In SI units $m_1,m_2,\mu$ are kilograms, $E_1$ is joules, and $\sigma$ is joules squared.

## Facts & Assumptions
**Given:** A flat inertial laboratory frame, a massive projectile and target with rest masses $m_1,m_2>0$, a target at rest, and a proposed finite final collection with total rest mass $\mu$.

[F1] [[pthm-rpm-inverse-momentum-and-work]]: for a massive particle, $E^2=m^2c^4+c^2|\mathbf p|^2$ and $E>0$.

[F2] [[def-rpm-mechanical-momentum-and-observer-energy]]: in the laboratory time-axis observer, $E_n=-c\eta(P,n)$ and the spatial momentum is the projection of $P$ into $n^\perp$; a particle at rest has $P=(mc,\mathbf0)$.

[F3] [[pthm-rpm-system-mass-threshold]]: the total invariant squared energy must satisfy $\sigma\ge\mu^2c^4$, strictly if a required final leg is nonzero and null.

## Proof

**Proof technique:** expand the Lorentzian norm in laboratory coordinates and solve the necessary inequality.

1.1 The projectile shell in [F1] gives $E_1^2-c^2|\mathbf p_1|^2=m_1^2c^4$. The stationary target condition and [F2] give $P_2=(m_2c,\mathbf0)$. With signature $(-,+,+,+)$, expansion yields $\sigma=(E_1+m_2c^2)^2-c^2|\mathbf p_1|^2=m_1^2c^4+m_2^2c^4+2m_2c^2E_1$. [F1, F2, algebra]

2.1 Applying [F3] and dividing by $2m_2c^2>0$ gives $E_1\ge(\mu^2-m_1^2-m_2^2)c^2/(2m_2)$. The projectile shell also gives $E_1\ge m_1c^2$ because $E_1>0$ and $E_1^2=m_1^2c^4+c^2|\mathbf p_1|^2\ge m_1^2c^4$. The strict case for a required nonzero null leg follows from the strict clause in [F3]. [F1, F3, algebra] ∎
