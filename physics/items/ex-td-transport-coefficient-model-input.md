---
id: ex-td-transport-coefficient-model-input
kind: example
domain: physics
library: physics
title: Different Fourier coefficients give different model fluxes
status: published
origin: pipeline
dependency_level: 2
deps:
  - rem-td-transport-branch
dependency_roles:
  rem-td-transport-branch: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: Comparison of two stipulated isotropic Fourier models on the same temperature profile; no material measurement or universal constitutive law is asserted.
sources:
  references: []
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

On $\mathcal O=(0,L)^3$ in metre coordinates and $I=(0,\tau)$ in second coordinates, with $L>0\,\mathrm m$ and $\tau>0\,\mathrm s$, prescribe $T(\mathbf x,t)=T_0+\Delta T\,x_1/L$, where $T_0>0\,\mathrm K$ and $\Delta T>0\,\mathrm K$. In the chosen Cartesian coordinates, define $\mathbf e_1:=(1,0,0)\in\mathbb R^3$. Compare two isotropic model choices $\kappa_1,\kappa_2>0$, $\kappa_1\ne\kappa_2$, each using $\mathbf j_Q=-\kappa_i\nabla T$. The coefficients have units $\mathrm{W\,m^{-1}\,K^{-1}}$.

## Facts & Assumptions

**Given:** The Fourier-model definition and the stipulated fields and coefficients.

[F1] [[rem-td-transport-branch]]: for a temperature field with continuous first spatial partial derivatives, $\nabla T=(\partial_{x_1}T,\partial_{x_2}T,\partial_{x_3}T)$ in the physical one-based coordinate display (function indices $i-1$), and a Fourier model may postulate $\mathbf j_Q=-K\nabla T$, where $K$ has entries in $\mathrm{W\,m^{-1}\,K^{-1}}$; its isotropic form is $K=\kappa I_3$ with $\kappa\ge0$.

[A1] $T_0>0\,\mathrm K$, $\Delta T>0\,\mathrm K$, $L>0\,\mathrm m$; $\mathbf e_1=(1,0,0)$ in the chosen Cartesian coordinates; $\kappa_1,\kappa_2>0$ in $\mathrm{W\,m^{-1}\,K^{-1}}$ with $\kappa_1\ne\kappa_2$; both models use the same profile $T=T_0+\Delta T\,x_1/L$; and model $i$ adopts $\mathbf j_{Q,i}=-\kappa_i\nabla T$.



## Verification

**Given:** [F1] and [A1].

1.1 The common temperature gradient is $\nabla T=(\Delta T/L)\mathbf e_1$. The two assigned model fluxes are therefore $\mathbf j_{Q,1}=-\kappa_1(\Delta T/L)\mathbf e_1$ and $\mathbf j_{Q,2}=-\kappa_2(\Delta T/L)\mathbf e_1$. [A1, construct, algebra]

2.1 Their difference is $\mathbf j_{Q,1}-\mathbf j_{Q,2}=-(\kappa_1-\kappa_2)(\Delta T/L)\mathbf e_1\ne0$. The same field profile therefore has different predicted fluxes under these two constitutive choices. [A1, step 1.1, algebra]

3.1 The calculation uses the Fourier relation as a stated model input and does not determine either $\kappa_i$ from equilibrium entropy data. It is a model comparison, not a measured result. [F1, A1, step 2.1] ∎
