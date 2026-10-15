---
id: ex-td-first-law-sign-convention
kind: example
title: Converting work-on and work-by conventions
status: draft
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
---

## Example

Some sources take work done by the system as positive and write the first law as $\Delta U=Q-W_{\mathrm{by}}$. The present framework takes work done on the system as positive. Setting $W_{\mathrm{by}}[P]:=-W_{\mathrm{on}}[P]$ converts one equation to the other.

## Facts & Assumptions

**Given:** An admitted closed process record $P$ and the two declared sign conventions.

[F1] [[post-td-first-law-energy]]: For an admitted closed record with the stated energy exclusions in the process-selected chart, $U_c(x_P^+)-U_c(x_P^-)=Q[P]+W_{\mathrm{on}}[P]$.

[F2] [[def-td-process-and-protocol]]: $W_{\mathrm{on}}[P]>0$ means mechanical work is done on the system.

## Verification

1.1 Define the work-by-positive value by $W_{\mathrm{by}}[P]:=-W_{\mathrm{on}}[P]$, so $W_{\mathrm{on}}[P]=-W_{\mathrm{by}}[P]$. [given, F2, algebra]

2.1 Substituting the equality from step 1.1 into [F1] gives $U_c(x_P^+)-U_c(x_P^-)=Q[P]-W_{\mathrm{by}}[P]$. [F1, step 1.1, algebra] ∎
