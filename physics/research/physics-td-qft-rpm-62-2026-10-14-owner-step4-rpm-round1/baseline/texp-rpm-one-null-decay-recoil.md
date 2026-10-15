---
id: texp-rpm-one-null-decay-recoil
kind: thought-experiment
title: "One-null decay and massive recoil"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-collision-objects
  - post-rpm-isolated-collision-balance
  - pthm-rpm-inverse-momentum-and-work
  - pthm-rpm-two-body-com-kinematics
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  pthm-rpm-inverse-momentum-and-work: physical-result
  pthm-rpm-two-body-com-kinematics: physical-result
physical_scope: "Hypothetical two-product decay in the classical massive-plus-null test-particle sectors, conditional on finite isolated momentum balance; no decay probability, quantum photon-energy relation, or empirical claim is asserted."
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

Hypothetically, a parent of rest mass $M>0$ is initially at rest and undergoes an isolated event into one massive daughter of rest mass $m$ and one nonzero future-null leg, where $0<m<M$; there are no other legs or external transfers. Under the balance postulate, in the parent rest frame the daughter and null momenta are opposite with common magnitude

$$k=\frac{(M^2-m^2)c}{2M}>0.$$

Their energies and the daughter speed are

$$E_{\rm null}=\frac{(M^2-m^2)c^2}{2M},\qquad E_{\rm d}=\frac{(M^2+m^2)c^2}{2M},\qquad |\mathbf v_{\rm d}|=\frac{(M^2-m^2)c}{M^2+m^2}<c.$$

The null-leg energy is strictly less than the full rest-energy difference $(M-m)c^2$; the remainder is the daughter's kinetic energy $(M-m)^2c^2/(2M)$. This is a conditional classical kinematic construction, not an assertion about a decay channel in nature.

## Facts & Assumptions
**Given:** A parent at rest, masses $M>m>0$, a hypothetical daughter and one nonzero null output, no omitted legs, and the adopted isolated-balance postulate.

[A1] [[post-rpm-isolated-collision-balance]]: a complete isolated event has equal incoming and outgoing four-momentum totals.

[F1] [[def-rpm-collision-objects]]: a null leg is a nonzero future-null vector and a massive leg has a positive recorded rest mass.

[F2] [[pthm-rpm-two-body-com-kinematics]]: in a timelike total rest frame, the two-body energy and momentum formulas hold; a massless output requires strict energy above the zero-momentum endpoint.

[F3] [[pthm-rpm-inverse-momentum-and-work]]: for a massive daughter, $|\mathbf v|=c^2|\mathbf p|/E$ and its energy and momentum obey the mass shell.

## Proof

**Proof technique:** specialize the two-body formulas, then use the inverse momentum relation.

1.1 The parent rest frame is the center-of-momentum frame of its initial total, with $W=Mc^2$. Apply [F2] with outgoing masses $a=m$ and $b=0$. Since $M>m$, the strict condition $W>mc^2$ holds, so the null output is nonzero. The formula for $k$ gives $k=\sqrt{[W^2-m^2c^4]^2}/(2Wc)=(M^2-m^2)c/(2M)$; the energy formulas give the stated $E_{\rm d}$ and $E_{\rm null}$. [A1, F1, F2, algebra]

2.1 By [F3], $|\mathbf v_{\rm d}|=c^2k/E_{\rm d}=(M^2-m^2)c/(M^2+m^2)<c$, since $M^2-m^2<M^2+m^2$. Also $E_{\rm d}-mc^2=(M-m)^2c^2/(2M)$, so $E_{\rm null}+(E_{\rm d}-mc^2)=(M-m)c^2$; for $0<m<M$, this daughter kinetic term is positive and $E_{\rm null}<(M-m)c^2$. [F2, F3, step 1.1, algebra] ∎
