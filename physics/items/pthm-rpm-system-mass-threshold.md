---
id: pthm-rpm-system-mass-threshold
kind: physics-theorem
title: "System invariant mass and final-state thresholds"
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
  - thm-rpm-finite-future-momentum-sum
  - pthm-rpm-inverse-momentum-and-work
  - def-sr-total-four-momentum-and-invariant-mass
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  thm-rpm-finite-future-momentum-sum: mathematical-premise
  pthm-rpm-inverse-momentum-and-work: physical-result
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
physical_scope: "Necessary kinematic rest-mass thresholds for a finite, complete, isolated event in flat relativistic-particle mechanics; no interaction probability, coupling, selection rule, or claim that a channel occurs."
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

Let a mass-specified isolated collision configuration of [[def-rpm-collision-objects]] satisfy the balance postulate [[post-rpm-isolated-collision-balance]]. Write its common total as $Q:=Q_{\rm in}=Q_{\rm out}$. It is nonzero future causal, and it is timelike if either side contains a massive leg. If $Q$ is future timelike, let $M:=\sqrt{-\eta(Q,Q)}/c$, and let $\mu_{\rm in}$ and $\mu_{\rm out}$ be the sums of the recorded rest masses on the two sides. Then

$$M\ge\mu_{\rm in},\qquad M\ge\mu_{\rm out}.$$

In particular, a proposed final collection with total rest mass $\mu$ requires the invariant squared energy $\sigma:=-c^2\eta(Q,Q)=M^2c^4$ to satisfy $\sigma\ge\mu^2c^4$. If an actual final collection contains a nonzero null leg, then the inequality is strict. Equality is kinematically attained exactly when every leg on the relevant side is massive and all its four-momenta are proportional to the same future unit timelike vector. This is a necessary kinematic condition; it does not establish that the interaction realizes the channel.

If instead $Q$ is future null, each side consists only of null legs on one common future null ray; no center-of-momentum frame exists and no positive-mass final leg is compatible with that total. In SI units $m_i,M,\mu$ are kilograms, $Mc^2$ is joules, and $\sigma$ is joules squared.

## Facts & Assumptions
**Given:** A finite, mass-specified collision datum in the flat model, no omitted legs or external four-momentum transfer, and the isolated-event balance postulate.

[A1] [[post-rpm-isolated-collision-balance]]: for the complete isolated event, $Q_{\rm in}=Q_{\rm out}$.

[F1] [[def-rpm-collision-objects]]: each side is a finite nonempty list of nonzero future-causal momenta with a recorded mass for every massive or null leg; its side total is the corresponding finite sum.

[F2] [[thm-rpm-finite-future-momentum-sum]]: each side total is future causal and nonzero; if timelike its invariant mass is at least the sum of its leg masses, with equality exactly for a massive co-moving list; a null total consists only of co-directed null legs.

[F3] [[pthm-rpm-inverse-momentum-and-work]]: for a massive leg of constant mass $m>0$, the adopted momentum $P=mU$ has invariant shell $\eta(P,P)=-m^2c^2$, so the mathematical invariant mass of that leg is its physical rest-mass parameter.

[F4] [[def-sr-total-four-momentum-and-invariant-mass]]: for a future-timelike total $Q$, $M=\sqrt{-\eta(Q,Q)}/c$ and its rest energy is $Mc^2$.

## Proof

**Proof technique:** apply the finite causal-sum result to both sides of the adopted balance.

1.1 By the isolated-event assumption [A1], the incoming and outgoing total vectors are the same $Q$. The collision data [F1] give finite nonempty lists of nonzero future-causal summands, so [F2] applies to each side and shows that $Q$ is future causal and nonzero. Thus the two sides have the same causal character; if $Q$ is timelike, it has one common invariant mass $M$ as defined in [F4]. [A1, F1, F2, F4]

1.2 In the timelike case, apply the mass inequality of [F2] first to the incoming list and then to the outgoing list. By [F3], each massive leg's invariant mass equals its recorded rest mass, and each null leg has invariant mass zero; hence the sums of leg masses in [F2] are $\mu_{\rm in}$ and $\mu_{\rm out}$. Since both side totals equal $Q$, each has invariant mass $M$, so $M\ge\mu_{\rm in}$ and $M\ge\mu_{\rm out}$. For a proposed final list, set $\mu=\mu_{\rm out}$ and multiply $M\ge\mu$ by $c^2>0$ before squaring nonnegative quantities; this gives $\sigma=M^2c^4\ge\mu^2c^4$. [F2, F3, F4, algebra]

2.1 By [F2], equality for a timelike side holds exactly when all its legs are massive and co-moving; any nonzero null leg makes the mass inequality strict. If the common total is null, [F2] says both lists contain only null legs on the same ray, so no massive leg occurs and no rest frame is available. The inequalities constrain kinematics only; [A1] is the sole physical collision assumption and asserts no interaction mechanism or channel occurrence. [A1, F2, F4, step 1.2] ∎
