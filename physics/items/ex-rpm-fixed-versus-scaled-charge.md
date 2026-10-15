---
id: ex-rpm-fixed-versus-scaled-charge
kind: example
title: Fixed-charge and scaled small-body limits
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Algebraic consequences of the conditional static spherical exterior-energy bound for a fixed-charge point limit and a scaled family with charge and mass tending to zero. No existence of a material family, experimental process, or universal point-particle limit is asserted."
empirical_premises: []
deps:
  - pthm-rpm-spherical-charge-size-bound
dependency_roles:
  pthm-rpm-spherical-charge-size-bound: physical-result
sources:
  references:
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Classical Electrodynamics, §1.3 Scalar Potential and Electric Field Energy"
      url: https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_%28Likharev%29/01%3A_Electric_Charge_Interaction/1.03%3A_Scalar_Potential_and_Electric_Field_Energy
      locator: "Full HTML section §1.3, field-energy density, uniform-sphere energy and point-charge short-distance divergence; the fixed-versus-scaled algebra is derived here under the local exterior bound."
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, discussion of small-body scales and the Møller radius; it is context only and supplies no existence theorem for the scaled family.
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

Assume the static Coulomb-exterior support-radius hypotheses of [[pthm-rpm-spherical-charge-size-bound]], so every member obeys $\ell\ge q^2/(8\pi\varepsilon_0Mc^2)$.

(a) For fixed $q\ne0$ and fixed finite $M>0$, the lower bound is the positive constant $q^2/(8\pi\varepsilon_0Mc^2)$. Thus no family satisfying these hypotheses can have $\ell\to0$ while keeping both $q$ and $M$ fixed.

(b) For $q(\lambda)=\lambda q_0$, $M(\lambda)=\lambda M_0$, and $\ell(\lambda)=\lambda\ell_0$ with $\lambda>0$, $q_0\ne0$ coulombs, $M_0>0$ kilograms, and $\ell_0>0$ metres, the same necessary condition reduces to $\ell_0\ge q_0^2/(8\pi\varepsilon_0M_0c^2)$, independent of $\lambda$. The inequality therefore does not rule out this scaling, although it does not construct a body family or prove that its interior energy remains admissible.

## Facts & Assumptions

**Given:** The static spherical exterior-energy bound, a fixed-charge comparison with $q\ne0$, and positive scaling parameter $\lambda$ with fixed $q_0\ne0$, $M_0>0$.

[A1] Case (a) holds $q\ne0$ and finite $M>0$ fixed; case (b) sets $q=\lambda q_0$, $M=\lambda M_0$, and $\ell=\lambda\ell_0$ with $\lambda>0$.

[F1] Every body satisfying the stated spherical exterior field and nonnegative energy-accounting assumptions obeys $\ell\ge q^2/(8\pi\varepsilon_0Mc^2)$. [[pthm-rpm-spherical-charge-size-bound]]

## Verification

**Proof technique:** direct.

1.1 In case (a) of [A1], [F1] gives $\ell\ge q^2/(8\pi\varepsilon_0Mc^2)$. The numerator is strictly positive and the denominator is finite positive, so this lower bound is positive and independent of $\ell$; consequently $\ell$ cannot tend to zero under the fixed-$q,M$ assumptions. [given, A1, F1, algebra]

2.1 In case (b) of [A1], substitute $q=\lambda q_0$, $M=\lambda M_0$, and $\ell=\lambda\ell_0$ into [F1]. Since $\lambda>0$, division by $\lambda$ gives $\ell_0\ge q_0^2/(8\pi\varepsilon_0M_0c^2)$. Thus the necessary size ratio is scale-independent. The argument is only a necessary condition on members that already satisfy the static model; it supplies no construction, stability result, or empirical inference. [given, A1, F1, algebra] ∎

## Remarks

This comparison separates a fixed nonzero charge and fixed mass limit from a scaling in which both charge and mass vanish. It does not establish that any such family solves a closed matter or Maxwell evolution model.
