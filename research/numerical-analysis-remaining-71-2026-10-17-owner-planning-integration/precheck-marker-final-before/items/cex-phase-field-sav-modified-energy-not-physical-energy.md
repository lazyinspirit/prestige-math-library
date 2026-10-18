---
id: cex-phase-field-sav-modified-energy-not-physical-energy
kind: counterexample
title: Modified-energy decay alone does not imply physical-energy decay
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-phase-field-sav-cahn-hilliard-step
  - thm-phase-field-sav-modified-energy-law
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§3, equation (3.2) and Remark 3.2(iv), PDF pp. 5–6: SAV dissipates a modified energy, while convergence of that modified energy to the exact physical energy needs additional assumptions."
verification:
  precheck: pending
---

## Statement refuted

The scalar inequality $\widetilde E^{1}\le\widetilde E^{0}$, by itself, implies $\mathcal E_{\rm phys}(u^1)\le\mathcal E_{\rm phys}(u^0)$.

## Construction

Take a one-cell no-flux space, so the gradient term is zero, and set $\varepsilon=C_0=1$. Let $u^0=1$, $u^1=0$, $r^0=1$, and $r^1=1/2$. Then the modified scalar energy $r^2$ decreases from $1$ to $1/4$, while the original double-well energy increases from $F_1(1)=0$ to $F_1(0)=1/4$. These scalar pairs are a counterexample to the stated implication from an energy inequality alone; they are not asserted to be a trajectory of the SAV update equations.

## Facts & Assumptions

**Given:** The physical double-well energy and the SAV modified energy definition.

[F1] [[def-phase-field-gradient-flow-and-double-well]]: $F_1(s)=(s^2-1)^2/4$ is the original potential energy density.

[F2] [[def-phase-field-discrete-realizations]]: $E_h(u)=\frac\kappa2\langle A_hu,u\rangle_h+E_{c,h}(u)-E_{e,h}(u)$; on a one-cell no-flux mesh $A_h=0$ and the potential term is $F_1(u)$.

[F3] [[thm-phase-field-sav-modified-energy-law]]: the SAV theorem dissipates $\widetilde E_h(u,r)=\frac\kappa2\langle A_hu,u\rangle_h+r^2$.

## Refutation

1.1 On one cell, [F2] gives $A_h=0$ and $\mathcal E_{\rm phys}(u)=F_1(u)$. Direct substitution using [F1] gives $F_1(1)=0$ and $F_1(0)=1/4$. [F1, F2, given, algebra]

2.1 The modified energies of the displayed pairs are $\widetilde E^0=(r^0)^2=1$ and $\widetilde E^1=(r^1)^2=1/4$ by [F3], so the modified energy strictly decreases while the physical energy strictly increases by step 1.1. Hence the proposed implication is false. The pairs are not claimed to satisfy the SAV update, so this refutes only the logical implication from modified-energy decay alone. [F3, step 1.1, algebra] ∎

