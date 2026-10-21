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
    - title: "InverseBench source implementation, pinned revision 1db5932bc2995504491663d1e2c498e7317c5404, inverse_problems/navier_stokes.py"
      url: "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/navier_stokes.py"
      locator: "Lines 47–106 define the Laplacian, inverse, dealiased zero-mode mask and streamfunction velocity; lines 129–170 retain the state zero mode during time stepping; ForwardNavierStokes2d at lines 179–243 supplies forcing, target, evolution and subsampling. This implementation does not establish a mean-zero dataset-generation law."
---

## Example

In the InverseBench two-dimensional Navier–Stokes case, the spatial domain is the periodic square $(0,2\pi)^2$ (the flat torus). In the physical vorticity model, the periodic velocity $u(x,t)\in\mathbb R^2$ is divergence-free and its scalar curl is $\omega=\partial_1u_2-\partial_2u_1$. This curl has zero spatial mean. Taking the spatial mean of $u$ to be zero fixes the constant-velocity ambiguity. For viscosity $\nu>0$, forcing $f(x)=-4\cos(4x_2)$, and compatible initial curl $\omega_0$, the physical model is

$$\partial_t\omega+u\cdot\nabla\omega=\nu\Delta\omega+f,\qquad \nabla\cdot u=0,\qquad \omega(\cdot,0)=\omega_0.$$

The released benchmark uses a finite-grid scalar state denoted $w$. Its pinned solver computes velocity by Fourier streamfunction derivatives, which select zero spatial mean velocity and ignore the constant Fourier mode of the scalar state. The nonlinear term uses a dealiased state with zero mode removed, while the time-update formula retains the original state's zero mode; the specified forcing also has zero mean. Thus the solver defines a scalar-state extension even when $\overline w\ne0$. One must not identify such an entire state with the curl of a periodic velocity. In the corresponding continuum mean-split convention, $w=\overline w+\omega$, $-\Delta\psi=\omega$, and $u=(\partial_2\psi,-\partial_1\psi)$; only $\omega=w-\overline w$ is the curl, and $\overline w$ is a conserved scalar offset. This convention explains the zero-mode distinction; it does not assert that the finite-grid dealiased scheme is an exact continuum solution or that the released dataset has been projected to zero mean.

The reconstruction target is the supplied dataset field $z=w_0$ used as initial state for the inversion solver; the observation is $y=PL(z)+n$, where $L$ is this numerical scalar-state solution map over the specified inversion horizon $T$, $P$ samples the final field, and $n$ is Gaussian measurement noise. The dataset-generation horizon is a separate five time units: §4.1 and Appendix B.5 report independent Gaussian seed fields $\xi\sim\mathcal N(0,(-\Delta+9I)^{-4})$, evolved under the stated forcing for five time units to produce the dataset of nontrivial initial fields. Accordingly, $z$ denotes the evolved field, not a claim that the inversion-input distribution remains Gaussian with the seed covariance. On the full periodic space the reported covariance gives the constant eigenmode variance $9^{-4}>0$; the paper does not specify a zero-mode projection for the seed law. The scalar-state implementation permits retaining that offset without asserting the incompatible identity $w=\nabla\times u$ for arbitrary seeds.

InverseBench uses a pseudo-spectral solver with adaptive time stepping; the reported setup has a $128\times128$ grid, Reynolds number $200$, $10{,}000$ training samples, one validation sample, and ten test samples. The paper reports black-box forward access without a closed-form gradient for this implementation; the one-validation/ten-test split is part of this empirical benchmark, not a population-level guarantee.
## Example references

[[def-ip-benchmark-risk-and-compute-budget|The solver, noise, compute budget, and test law are explicit benchmark fields]]

[[rem-ip-inversebench-scoped-findings|The Navier–Stokes results are empirical for the reported split]]

[Zheng et al., *InverseBench*, §3, §4.1, Appendix B.5, Tables 2 and 8](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[Versioned full-text counterpart, §4.1 and Appendix B.5](https://arxiv.org/html/2503.11043v2)

[Pinned Navier–Stokes scalar-state implementation](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/navier_stokes.py)

## Facts & Assumptions

**Given:** The periodic domain, physical mean-zero-curl convention, forcing $f(x)=-4\cos(4x_2)$, the pinned finite-grid scalar-state solver with its streamfunction velocity and retained constant mode, the reported Gaussian seed law and five-time-unit dataset preparation, the supplied evolved inversion input $z=w_0$, final-time sampling map, Gaussian observation noise, and stated finite dataset split.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: the benchmark specification includes the forward solver, noise law, compute/interface constraints, and test population.

[F2] [[rem-ip-inversebench-scoped-findings]]: this numerical PDE result uses a validation split of size one and a test split of size ten, so it supports no broad-population performance theorem.

## Verification

1.1 The supplied evolved dataset field $z=w_0$ is the initial scalar state for the specified numerical map $L$. Applying its final-time sampling operator $P$ and adding the stated observation noise gives exactly $y=PL(z)+n$; the separate five-time-unit seed evolution prepares $z$ and is not the inversion horizon. [given, construct]

2.1 The stated forcing and seed-to-dataset preparation, grid, pseudo-spectral solver, noise model, and finite data split fill the solver/population fields of [F1]. The empirical scope in [F2] is retained, and no closed-form-gradient or convergence claim is added. [F1, F2, given] ∎
