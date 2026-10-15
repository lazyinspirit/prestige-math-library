---
id: pthm-rpm-inverse-momentum-and-work
kind: physics-theorem
title: "Mass shell inversion, observer work and variable mass"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - post-sr-massive-particle-dynamics
  - thm-sr-proper-time-and-observer-decomposition
  - def-rpm-spacetime-observer-and-worldline
  - def-rpm-mechanical-momentum-and-observer-energy
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
dependency_roles:
  post-sr-massive-particle-dynamics: physical-assumption
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
physical_scope: "Conditional kinematic identities for a massive point particle of constant positive mass in one inertial chart of flat Minkowski spacetime, plus a separate variable-mass ansatz; no force law or variable-mass dynamics is adopted."
empirical_premises: []
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.03%3A_Momenergy_Components_and_Magnitude"
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

Let $I\subseteq\mathbb R$ be a nonempty open interval, and let $x:I\to A$ be a $C^2$ future-timelike worldline in the flat Minkowski model of [[def-rpm-spacetime-observer-and-worldline]]. Use one inertial frame and parameterize the curve by that chart's time coordinate $t$, so its coordinates are $(ct,\mathbf x(t))$ ([[def-inertial-frame-and-inertial-chart]]). Identify the observer rest space with $\mathbb R^3$ by the frame's spatial orthonormal basis and use its Euclidean dot product and norm ([[def-spatial-euclidean-structure-of-an-inertial-frame]]). Write $\mathbf v=d\mathbf x/dt$, $\gamma=(1-|\mathbf v|^2/c^2)^{-1/2}$, proper time $\tau$, and $U=dx/d\tau$. In the constant-mass sector of [[post-sr-massive-particle-dynamics]], let $m>0$ be constant and $P=mU$. In this chart write $P=(E/c,\mathbf p)$, where $E$ and $\mathbf p$ are the observer energy and spatial momentum of [[def-rpm-mechanical-momentum-and-observer-energy]]. Then $|\mathbf v|<c$, $E=\gamma mc^2>0$, $\mathbf p=\gamma m\mathbf v$, and

$$E^2=m^2c^4+c^2|\mathbf p|^2,\qquad \mathbf v=\frac{c^2\mathbf p}{E}.$$

Define the three-force by $\mathbf F:=d\mathbf p/dt$ and the four-force by $K:=dP/d\tau$ in this flat inertial chart. In SI units $m$ is in kilograms, $c$ and $\mathbf v$ in metres per second, $E$ in joules, $\mathbf p$ in kilogram metres per second, and $\mathbf F,K$ in newtons. Then

$$\frac{dE}{dt}=\mathbf F\cdot\mathbf v,\qquad K=\gamma\left(\frac{\mathbf F\cdot\mathbf v}{c},\mathbf F\right).$$

Separately, let $I_\tau\subseteq\mathbb R$ be a nonempty open proper-time interval, let $m:I_\tau\to(0,\infty)$ be $C^1$, and let $U:I_\tau\to V$ be a $C^1$ future timelike vector field with $\eta(U,U)=-c^2$. Measure $m$ in kilograms and $dm/d\tau$ in kilograms per second, and set $P(\tau):=m(\tau)U(\tau)$. With $K:=dP/d\tau$, the kinematic ansatz satisfies

$$\eta(P,K)=-m\,\frac{dm}{d\tau}\,c^2.$$

The last identity is only a differentiated mass-shell relation; it prescribes no evolution for $m$. None of these conclusions assumes a force law.

## Facts & Assumptions
**Given:** A $C^2$ future-timelike worldline on an open interval, one inertial chart with $x^0=ct$, $c>0$, and either a constant mass $m>0$ in the adopted massive sector or the separately stated $C^1$ fields $m(\tau)>0$ and $U(\tau)$ with $P=mU$ and $\eta(U,U)=-c^2$.

[A1] The constant-mass sector of [[post-sr-massive-particle-dynamics]] adopts $m>0$ constant and $P=mU$ for massive particles. This theorem uses no force equation from that postulate.

[F1] [[def-rpm-mechanical-momentum-and-observer-energy]] defines $E_n(P)=-c\eta(P,n)$ and $q_n(P)=P+\eta(P,n)n$; in the inertial chart with time-axis observer $n=e_0$, $P=(E/c,\mathbf p)$.

[F2] [[thm-sr-proper-time-and-observer-decomposition]] gives $|\mathbf v|<c$, $U=\gamma(c,\mathbf v)$ with $\gamma=(1-|\mathbf v|^2/c^2)^{-1/2}$, $\eta(U,U)=-c^2$, and $d\tau/dt=1/\gamma$ in the stated chart.

[F3] [[def-rpm-spacetime-observer-and-worldline]] fixes the $C^2$ future-timelike curve domain, the distinction between an observer and a chart, and the SI convention $x^0=ct$ with $t$ in seconds and spatial coordinates in metres.

[F4] [[def-inertial-frame-and-inertial-chart]] and [[def-spatial-euclidean-structure-of-an-inertial-frame]]: the chosen chart has a future unit time-axis observer and an orthonormal Euclidean spatial basis; the coordinates of $q_n(P)$ are the spatial components of $P$.

## Proof

**Proof technique:** direct differentiation and component decomposition.

1.1 By [A1] and [F2], $P=mU=(\gamma mc,\gamma m\mathbf v)$, and [F4] identifies these with the time and spatial components in the chosen frame. The definitions in [F1] give $E=\gamma mc^2$ and $\mathbf p=\gamma m\mathbf v$. Hence $E^2-c^2|\mathbf p|^2=\gamma^2m^2c^4(1-|\mathbf v|^2/c^2)=m^2c^4$, and $\gamma m>0$ gives $E>0$. [A1, F1, F2, F3, F4, algebra]

2.1 Dividing the spatial identity $\mathbf p=\gamma m\mathbf v$ by $E=\gamma mc^2$ yields $\mathbf p/E=\mathbf v/c^2$, and therefore $\mathbf v=c^2\mathbf p/E$. The division is valid because $E>0$ by step 1.1. [step 1.1, algebra]

3.1 Differentiating the mass shell of step 1.1 with respect to $t$ gives $2E\,dE/dt=2c^2\mathbf p\cdot\mathbf F$. Substituting $\mathbf p/E=\mathbf v/c^2$ from step 2.1 yields $dE/dt=\mathbf F\cdot\mathbf v$. [step 1.1, step 2.1, F4, algebra]

4.1 In inertial coordinates, $dP/dt=(c^{-1}dE/dt,\mathbf F)$, and [F2] gives $d/d\tau=(dt/d\tau)d/dt=\gamma\,d/dt$. Substituting the work identity of step 3.1 proves $K=\gamma(\mathbf F\cdot\mathbf v/c,\mathbf F)$. This is a kinematic identity, not a force law. [F2, step 3.1, algebra]

5.1 For the separate variable-mass ansatz, bilinearity and $\eta(U,U)=-c^2$ give $\eta(P,P)=m(\tau)^2\eta(U,U)=-m(\tau)^2c^2$. Since $m$ and $U$ are $C^1$, $P$ is differentiable and $K=dP/d\tau$ exists. Differentiating with respect to $\tau$ gives $2\eta(P,K)=-2m(dm/d\tau)c^2$, so $\eta(P,K)=-m(dm/d\tau)c^2$. No equation for $m$ was used. [F2, F3, algebra] ∎
