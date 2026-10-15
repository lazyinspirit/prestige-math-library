---
id: pthm-rpm-kinematic-elastic-channel
kind: physics-theorem
title: "Elastic channel momentum magnitude and direction freedom"
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
  - pthm-rpm-two-body-com-kinematics
  - def-rpm-mechanical-momentum-and-observer-energy
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  pthm-rpm-two-body-com-kinematics: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Kinematic freedom of the outgoing direction for a two-product elastic channel with fixed masses and timelike total in flat relativistic-particle mechanics; no scattering law, angular distribution, or interaction rate is inferred."
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

Consider a two-product elastic channel in a finite isolated collision: the complete incoming and outgoing lists each have exactly two legs, their recorded rest masses agree pairwise, the total four-momentum is timelike, and the balance postulate is adopted. In the center-of-momentum frame, let the incoming momenta be $k\mathbf e_{\rm in}$ and $-k\mathbf e_{\rm in}$ in the spatial rest space $n_Q^\perp$, where $k\ge0$ is fixed by [[pthm-rpm-two-body-com-kinematics]]. Every admissible outgoing pair has the same momentum magnitude $k$. If $k>0$, any unit vector $\mathbf e_{\rm out}\in n_Q^\perp$ gives an on-shell outgoing pair $k\mathbf e_{\rm out},-k\mathbf e_{\rm out}$ with the same total four-momentum; thus kinematics alone leaves the full direction sphere available. If $k=0$, both products are at rest and the direction is undefined. No isotropic or uniform distribution of directions follows.

## Facts & Assumptions
**Given:** A mass-specified isolated event with two incoming and two outgoing legs, equal paired masses, a timelike total $Q$, and the center-of-momentum frame of $Q$.

[A1] [[post-rpm-isolated-collision-balance]]: the complete isolated collision balances the incoming and outgoing totals.

[F1] [[def-rpm-collision-objects]]: a two-leg event has finite on-shell massive or nonzero null legs with recorded masses.

[F2] [[pthm-rpm-two-body-com-kinematics]]: for fixed $W$ and product masses, the on-shell two-body momentum magnitude is the displayed unique $k$, and every unit rest-space direction yields a balanced pair when the massless endpoint condition is met.

[F3] [[def-rpm-mechanical-momentum-and-observer-energy]]: the spatial momentum is the projection of the same four-momentum into the observer rest space.

## Proof

**Proof technique:** compare the unique two-body shell magnitude before and after.

1.1 Apply [F2] to the incoming pair with masses $a,b$ and total rest energy $W=Mc^2$. It has a unique magnitude $k$ determined by $W,a,b$. The outgoing pair has the same two masses by the elastic hypothesis and the same total by [A1], so [F2] gives the same $W$ and the same magnitude $k$. [A1, F1, F2]

2.1 If $k>0$, let $\mathbf e_{\rm out}$ be any unit vector in $n_Q^\perp$ and use [F2] to construct the two outgoing momenta with spatial parts $\pm k\mathbf e_{\rm out}$ and the corresponding energies. They satisfy both mass shells and sum to $Q$. If $k=0$, the spatial parts vanish, so no direction is defined. The free kinematic parameter supplies no probability measure or scattering dynamics, hence it entails no isotropic law. [F2, F3, step 1.1] ∎
