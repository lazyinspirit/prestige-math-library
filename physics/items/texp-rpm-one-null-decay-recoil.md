---
id: texp-rpm-one-null-decay-recoil
kind: thought-experiment
title: "One-null decay and massive recoil"
status: published
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
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
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

[F1] [[def-rpm-collision-objects]]: a null leg is a nonzero future-null vector; a massive leg at the event $p\in A$ has positive recorded rest mass $a$ and $P=aU$ with $U$ future timelike and $\eta(U,U)=-c^2$. Observer energy and spatial momentum are the time and spatial components $P=(E/c,\mathbf p)$ in a named inertial chart.

[F2] [[pthm-rpm-two-body-com-kinematics]]: in a timelike total rest frame, the two-body energy and momentum formulas hold; a massless output requires strict energy above the zero-momentum endpoint.

[F3] [[pthm-rpm-inverse-momentum-and-work]]: for a $C^2$ future-timelike worldline on a nonempty open interval, parameterized by one inertial chart's time, with constant mass $a>0$ and $P=aU$, its coordinate velocity obeys $\mathbf v=c^2\mathbf p/E$, $E>0$, and $E^2=a^2c^4+c^2|\mathbf p|^2$.

## Proof

**Proof technique:** specialize the two-body formulas, then use the inverse momentum relation.

1.1 For either massive leg $P=aU$ of [F1], write $U=(U^0,\mathbf U)$ in the parent rest chart, with $U^0>0$ by future orientation. The auxiliary affine curve $y:\mathbb R\to A$, $y(\tau)=p+\tau U$, is smooth and future timelike with proper-time parameter $\tau$ since $\eta(y',y')=-c^2$. Its chart time is $t=t_p+\tau U^0/c$, where $t_p$ is the event's time coordinate, so it has a smooth time parametrization on the open interval $\mathbb R$. Assign constant mass $a$ and momentum $a\,dy/d\tau=P$. This meets every hypothesis of [F3], giving the shell and $\mathbf v_P=c\mathbf U/U^0=c^2\mathbf p/E$. This velocity depends only on the leg's normalized tangent and agrees with any trajectory's coordinate velocity at that tangent; no smooth continuation through the decay is assumed. For the rest parent, $\mathbf U=0$ and normalization gives $U^0=c$, hence its total is $(Mc,\mathbf0)$ with $W=Mc^2$. Balance [A1] therefore makes this rest frame the final total's center-of-momentum frame. Apply [F2] with outgoing masses $a=m$ and $b=0$. Since $M>m$, the strict condition $W>mc^2$ holds, so the null output is nonzero. The formula for $k$ gives $k=\sqrt{[W^2-m^2c^4]^2}/(2Wc)=(M^2-m^2)c/(2M)$; the energy formulas give the stated $E_{\rm d}$ and $E_{\rm null}$ and opposite spatial momenta. [A1, F1, F2, F3, construct, algebra]

2.1 The daughter velocity identity established in step 1.1 gives $|\mathbf v_{\rm d}|=c^2k/E_{\rm d}=(M^2-m^2)c/(M^2+m^2)<c$, since $0<M^2-m^2<M^2+m^2$. Also $E_{\rm d}-mc^2=(M-m)^2c^2/(2M)$, so $E_{\rm null}+(E_{\rm d}-mc^2)=(M-m)c^2$; for $0<m<M$, this daughter kinetic energy, defined as energy minus rest energy, is positive and $E_{\rm null}<(M-m)c^2$. [step 1.1, algebra] ∎
