---
id: ex-na-mini-backward-euler-energy-budget
kind: example
title: Zero-forcing discrete energy budget
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  - thm-na-mini-be-step-existence-energy
  - def-na-mini-navier-stokes-backward-euler-scheme
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xiaoming He, Finite Element Methods, Chapter 9: unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: Backward-Euler energy context; the exact finite-step identity is
        derived from current local suppliers.
---

## Example

Take $f=0$ and any initial weak-kernel velocity $u_h^0\in Z_h$. Every backward Euler MINI solution satisfies
$$\frac12\|u_h^m\|_2^2+\frac12\sum_{n=1}^m\|u_h^n-u_h^{n-1}\|_2^2+\nu\sum_{n=1}^m\tau_n\|\nabla u_h^n\|_2^2\le\frac12\|u_h^0\|_2^2.$$

## Facts & Assumptions

**Given:** A MINI mesh, a finite positive time partition, $f=0$, $u_h^0\in Z_h$, and a scheme solution.

[F1] The work-form energy inequality holds for every discrete solution. ([[thm-na-mini-be-step-existence-energy]])

## Verification

1.1 Substitute $f_h^n=0$ in the work-form inequality of [F1]. Its right side is exactly $\frac12\|u_h^0\|_2^2$, while the jump and viscosity sums are nonnegative. [F1, given, algebra]

2.1 The inequality therefore bounds the kinetic energy at each node by its initial value and accounts separately for the nonnegative time-jump and viscous-dissipation terms. It is uniform in $h$ and in all positive step sizes; it does not assert strict decay when the velocity is stationary. [step 1.1, algebra] ∎
