---
id: ex-ip-inversebench-navier-stokes
kind: example
title: Two-dimensional Navier–Stokes benchmark
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-benchmark-risk-and-compute-budget
  - rem-ip-inversebench-scoped-findings
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No choice axiom is used; the finite periodic grid, random-field data generation, and numerical solver are supplied inputs."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§3, PDF pp. 5–6; §4.1, PDF p. 7; Appendix B.5, PDF pp. 26–27; Tables 2 and 8, PDF pp. 5 and 21: vorticity model, pseudo-spectral solver, noise/gradient access, and split counts."
---

## Example

In the InverseBench two-dimensional Navier–Stokes case, the spatial domain is the periodic square $(0,2\pi)^2$ (the flat torus). The velocity $u(x,t)\in\mathbb R^2$ is divergence-free, and its scalar vorticity is $w=\partial_1u_2-\partial_2u_1$. For viscosity $\nu>0$, forcing $f(x)$, and initial vorticity $w_0$, the forward model is

$$\partial_tw+u\cdot\nabla w=\nu\Delta w+f,\qquad \nabla\cdot u=0,\qquad w(\cdot,0)=w_0.$$

The reconstruction target is $z=w_0$; the observation is $y=PL(z)+n$, where $L$ is the numerical solution map from initial vorticity to vorticity at final time $T$, $P$ samples the final field, and $n$ is Gaussian measurement noise. InverseBench uses a pseudo-spectral solver with adaptive time stepping; the reported setup has a $128\times128$ grid, Reynolds number $200$, $10{,}000$ training samples, one validation sample, and ten test samples. The initial vorticity samples are drawn independently from the Gaussian random field $\mathcal N(0,(-\Delta+9I)^{-4})$, where $-\Delta$ is the negative Laplacian on the periodic square, and are evolved for five time units with the fixed forcing $f(x)=-4\cos(4x_2)$. The paper reports black-box forward access without a closed-form gradient for this implementation; the one-validation/ten-test split is part of this empirical benchmark, not a population-level guarantee.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|The solver, noise, compute budget, and test law are explicit benchmark fields]]

[[rem-ip-inversebench-scoped-findings|The Navier–Stokes results are empirical for the reported split]]

[Zheng et al., *InverseBench*, §3, §4.1, Appendix B.5, Tables 2 and 8](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

## Facts & Assumptions

**Given:** A periodic two-dimensional domain, viscosity, forcing $f(x)=-4\cos(4x_2)$, divergence-free velocity, initial vorticity samples with law $\mathcal N(0,(-\Delta+9I)^{-4})$, the displayed forward PDE, final-time sampling map, Gaussian observation noise, and the stated finite dataset split.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: the benchmark specification includes the forward solver, noise law, compute/interface constraints, and test population.

[F2] [[rem-ip-inversebench-scoped-findings]]: this numerical PDE result uses a validation split of size one and a test split of size ten, so it supports no broad-population performance theorem.

## Verification

1.1 By definition of the forward solution map $L$, an initial vorticity $z=w_0$ determines the final vorticity field; applying the sampling operator $P$ and adding the stated observation noise gives exactly $y=PL(z)+n$. [given, construct]

2.1 The stated forcing and initial-field law, grid, pseudo-spectral solver, noise model, and finite data split fill the solver/population fields of [F1]. The empirical scope in [F2] is retained, and no closed-form-gradient or convergence claim is added. [F1, F2, given] ∎
