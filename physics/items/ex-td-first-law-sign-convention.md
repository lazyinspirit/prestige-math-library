---
id: ex-td-first-law-sign-convention
kind: example
title: Converting work-on and work-by conventions
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Algebraic conversion between two signed-work conventions for the closed process class of the adopted first-law postulate.
deps: [def-td-process-and-protocol, post-td-first-law-energy]
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  post-td-first-law-energy: physical-assumption
aliases: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ling, Moebs, and Sanny, University Physics Volume 2, §3.3 First Law of Thermodynamics
      url: https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics
proof_strategy: direct
dependency_level: 5
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

Some sources take work done by the system as positive and write the first law as $\Delta U=Q-W_{\mathrm{by}}$. The present framework takes work done on the system as positive. Setting $W_{\mathrm{by}}[P]:=-W_{\mathrm{on}}[P]$ converts one equation to the other.

## Facts & Assumptions

**Given:** An admitted core closed process record $P\in\mathcal P_{\mathrm{cl}}(s)$ with the equilibrium endpoints and energy exclusions of [F1], and the two declared sign conventions.

[F1] [[post-td-first-law-energy]]: For an admitted closed record with the stated energy exclusions in the process-selected chart, $U_c(x_P^+)-U_c(x_P^-)=Q[P]+W_{\mathrm{on}}[P]$.

[F2] [[def-td-process-and-protocol]]: $W_{\mathrm{on}}[P]>0$ means mechanical work is done on the system.

## Verification

1.1 Define the work-by-positive value by $W_{\mathrm{by}}[P]:=-W_{\mathrm{on}}[P]$, so $W_{\mathrm{on}}[P]=-W_{\mathrm{by}}[P]$. [given, F2, algebra]

2.1 Substituting the equality from step 1.1 into [F1] gives $U_c(x_P^+)-U_c(x_P^-)=Q[P]-W_{\mathrm{by}}[P]$. [F1, step 1.1, algebra] ∎
