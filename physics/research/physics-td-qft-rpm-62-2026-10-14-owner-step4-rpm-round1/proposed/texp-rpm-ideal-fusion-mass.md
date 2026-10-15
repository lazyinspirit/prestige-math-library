---
id: texp-rpm-ideal-fusion-mass
kind: thought-experiment
title: "Ideal two-particle fusion and internal mass"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-collision-objects
  - post-rpm-isolated-collision-balance
  - pthm-rpm-inverse-momentum-and-work
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  pthm-rpm-inverse-momentum-and-work: physical-result
physical_scope: "Hypothetical flat-spacetime event of two equal-mass classical particles forming one product with no other leg, conditional on the isolated-balance postulate; no actual reaction, interaction mechanism, probability, or empirical observation is asserted."
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

In a hypothetical isolated event, let two massive particles of equal rest mass $m>0$ have opposite velocities $\mathbf v$ and $-\mathbf v$ in one inertial laboratory, with $|\mathbf v|<c$ and $\gamma=(1-|\mathbf v|^2/c^2)^{-1/2}$. Suppose, as a stipulated possible channel, that they form one massive product at rest in that laboratory and that there are no other incoming or outgoing legs. Conditional on the balance postulate, the product rest mass is

$$M=2m\gamma,$$

so its excess rest mass over the two incoming rest masses is $2m(\gamma-1)$, and the corresponding rest-energy increase is $2m(\gamma-1)c^2$. This equals the incoming kinetic energy in the specified laboratory. When $\mathbf v=0$, the excess is zero. The item does not assert that such a perfectly complete fusion channel occurs in nature.

## Facts & Assumptions
**Given:** Two hypothetical equal-mass incoming legs, a single hypothetical massive output leg at rest, no omitted legs or external transfer, and the adopted model balance.

[A1] [[post-rpm-isolated-collision-balance]]: for this complete isolated event, the incoming and outgoing four-momentum sums are equal.

[F1] [[def-rpm-collision-objects]]: each massive leg has positive recorded rest mass and a future four-momentum in the same event vector space.

[F2] For an event-local massive leg $P=mU$ of [[def-rpm-collision-objects]], $\eta(U,U)=-c^2$ and $U$ is future. In the named inertial frame write $U=(U^0,\mathbf U)$ with $U^0>0$, and define its velocity $\mathbf v:=c\mathbf U/U^0$. The normalization gives $(U^0)^2-|\mathbf U|^2=c^2$, hence $|\mathbf v|<c$, $U^0=c(1-|\mathbf v|^2/c^2)^{-1/2}$, $E=cP^0=\gamma mc^2$, and $\mathbf p=\gamma m\mathbf v$, equivalently $\mathbf v=c^2\mathbf p/E$. These are pointwise identities. The auxiliary affine history $x(\tau)=p+\tau U$ is $C^\infty$ future timelike on an open interval, and in coordinate time realizes this same velocity; thus the kinematic formulas of [[pthm-rpm-inverse-momentum-and-work]] also apply to this realization. No actual collision history or interaction is inferred.

## Proof

**Proof technique:** compute the incoming total and use the stipulated balance.

1.1 By [F2], the two incoming momenta in the laboratory are $P_1=(\gamma mc,\gamma m\mathbf v)$ and $P_2=(\gamma mc,-\gamma m\mathbf v)$. Thus $Q_{\rm in}=P_1+P_2=(2\gamma mc,\mathbf0)$, which is future timelike and has invariant mass $\sqrt{-\eta(Q_{\rm in},Q_{\rm in})}/c=2m\gamma$. [F1, F2, algebra]

2.1 The output is one massive leg at rest, so [F2] gives $P_{\rm out}=(Mc,\mathbf0)$. Balance [A1] gives $P_{\rm out}=Q_{\rm in}$ and therefore $M=2m\gamma$. Subtracting the two incoming rest masses gives $M-2m=2m(\gamma-1)$; multiplying by $c^2$ gives the rest-energy increase. By [F2], the incoming total energy is $2\gamma mc^2$ and its rest-energy baseline is $2mc^2$, so the same difference is the incoming kinetic energy. Since $\gamma=1$ exactly at $\mathbf v=0$, the zero-speed boundary gives zero excess. [A1, F2, step 1.1, algebra] ∎
