---
id: rem-td-nonsmooth-phase-scope
kind: remark
title: Scope at phase boundaries and in the thermodynamic limit
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Interpretive limits for the phase-branch, coexistence, Clapeyron, and compact-mixture statements on this page; this remark establishes no universal critical or thermodynamic-limit result.
dependency_level: 3
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-thermodynamic-limit-contract
  - pthm-td-clapeyron-local
  - pthm-td-compact-continuous-phase-mixture
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-thermodynamic-limit-contract: formulation-prerequisite
  pthm-td-clapeyron-local: physical-result
  pthm-td-compact-continuous-phase-mixture: physical-result
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§5.1–5.4"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §§4.1–4.2"
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

## Remarks

The branch theorems on this page require the stated smooth local charts. Here coexistence means an attained global entropy-maximizing endpoint on the exact feasible set of *Phase branches and coexistence domains*; equality of intensive phase data follows only for the bilateral exchanges assumed in the branch theorems and does not itself imply loss of chart regularity. The smooth-branch conclusions apply only on their specified C1 charts and interior composition domains. They supply no conclusion where a branch chart fails to be C1, a species amount reaches the composition boundary, or the specified coexistence-and-affinity Jacobian lacks its required nonsingular minor. In particular, *Local Clapeyron slope on a regular pure-phase coexistence branch* requires a nonzero molar-volume jump; when that jump vanishes, its local graph argument and quotient formula do not apply.

The compact-mixture result *Attained entropy-maximizing mixtures on compact phase domains* requires a compact phase-generator domain, a continuous entropy map, a fixed barycenter, and feasibility of all probability mixtures with that barycenter. It supplies no attainment theorem for noncompact domains. Likewise, *Finite-state thermodynamic-limit contract* specifies the sequence and normalization for a limiting claim but proves no limit exists and no derivatives commute with that limit.

A finite-state partition sum is finite and positive at each finite system size. A singular phase behavior therefore needs a separately specified limit or another model with a separately established domain and regularity analysis. This page does not assert a universal thermodynamic-limit theorem, ensemble equivalence, critical exponent, or physical applicability of the van der Waals equation.

The local homogeneity used by *Local Clapeyron slope on a regular pure-phase coexistence branch* may be independently stipulated in a phase model or supplied on the separately designated common-law bulk branch under the local Euler theorem's inverse-chart and common-reference conditions. A constructed local Gibbs model need not be embedded in a global bulk cone to use the general conditional result. The added branch supplies no universal finite-size, long-range or gravitational extensivity and does not remove any smoothness, exchange or nonzero-volume-jump condition.

## Remarks references

[[def-td-phase-and-coexistence-domain]]

[[pthm-td-clapeyron-local]]

[[pthm-td-compact-continuous-phase-mixture]]

[[def-td-thermodynamic-limit-contract]]

