---
id: ex-td-reaction-boundary-example
kind: example
title: A boundary reaction minimum with a one-sided extent
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed units-labelled tangent-cone optimization illustration with one zero-amount boundary; it makes no thermodynamic-equilibrium, material, or empirical claim.
dependency_level: 1
deps:
  - lem-tdmath-stoichiometric-tangent-cone
dependency_roles:
  lem-tdmath-stoichiometric-tangent-cone: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Use species $A,B$, one reaction column $\nu=(-1,1)^{\mathsf T}$, and starting amounts $n_A^0=0$ mol, $n_B^0=1$ mol. The admissible extents are $\xi\in[-1,0]$ mol because $n_A(\xi)=-\xi$ and $n_B(\xi)=1\,\mathrm{mol}+\xi$ must both be nonnegative. Let $\Phi_0$ have units joules and define an ambient affine potential on an open neighborhood of the nonnegative amount region by
$$
\widehat\Phi(n_A,n_B)=\Phi_0+1\,\mathrm J-(1\,\mathrm{J\,mol^{-1}})n_B .
$$
Along $n(\xi)=(-\xi,1\,\mathrm{mol}+\xi)$, set $\Phi(\xi):=\widehat\Phi(n(\xi))=\Phi_0-(1\,\mathrm{J\,mol^{-1}})\xi$. Its derivative-defined amount coefficients are $\mu_A:=\partial_{n_A}\widehat\Phi=0$ and $\mu_B:=\partial_{n_B}\widehat\Phi=-1\,\mathrm{J\,mol^{-1}}$, including at $\xi_*=0$ mol. This ambient extension is constructed optimization data only; no positive-mole thermodynamic chart at $n_A=0$ or physical realization is asserted.

## Facts & Assumptions

**Given:** The stoichiometric column, initial amounts, feasible interval, the C1 extension to a neighborhood of $\xi_*$, the units of $\Phi_0$, and the values of $\mu_A,\mu_B$. The extension and derivative data are constructed model premises.

[F1] [[lem-tdmath-stoichiometric-tangent-cone]]: At the active boundary, the feasible tangent directions are exactly those $h$ with $(\nu h)_j\ge0$ for each active species, and the derivative of the composed potential is $(\nu^{\mathsf T}\mu)\cdot h$.

## Verification

1.1 Species $A$ is active because $n_A(\xi_*)=0$. By [F1], a tangent extent $h$ is feasible exactly when $(\nu h)_A=-h\ge0$, or $h\le0$. The derivative data give $\nu^{\mathsf T}\mu=-\mu_A+\mu_B=-1\,\mathrm{J\,mol^{-1}}$, so $D\Phi(0)[h]=(\nu^{\mathsf T}\mu)h\ge0$ for every feasible tangent extent. The units are joules because $h$ is in moles. [given, F1, algebra]

2.1 Directly, $\Phi(\xi)-\Phi(0)=-(1\,\mathrm{J\,mol^{-1}})\xi\ge0$ for every feasible $\xi\in[-1,0]$ mol, so the boundary point is a global minimum on this interval. The tangent-cone inequality is satisfied even though the interior equality $\nu^{\mathsf T}\mu=0$ fails. [given, step 1.1, algebra] ∎
