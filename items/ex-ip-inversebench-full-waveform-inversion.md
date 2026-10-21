---
id: ex-ip-inversebench-full-waveform-inversion
kind: example
title: Full waveform inversion benchmark
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
axiom_use: "No choice axiom is used; the finite discretization, source signals, and solver are supplied inputs."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§3, PDF pp. 5–6; §4.1, PDF p. 7; Appendix B.4, PDF p. 26: acoustic wave equation, receiver/source geometry, Devito solver, mesh, CFL time step, and sample counts."
    - title: "InverseBench source implementation, pinned revision 1db5932bc2995504491663d1e2c498e7317c5404, inverse_problems/acoustic.py"
      url: "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/acoustic.py"
      locator: "Lines 61–69 and 83–86: each shot calls the Devito acoustic solver without supplying a wavefield."
    - title: "Devito v4.8.12 source, examples/seismic/acoustic/wavesolver.py"
      url: "https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/examples/seismic/acoustic/wavesolver.py"
      locator: "Lines 103–106: when no wavefield is supplied, AcousticWaveSolver.forward creates a time-order-2 TimeFunction."
    - title: "Devito v4.8.12 source, devito/types/dense.py"
      url: "https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/devito/types/dense.py"
      locator: "Lines 84–115 and 141–155: a default initializer=None field allocation fills its data with zeros."
---

## Example

In the InverseBench full-waveform-inversion (FWI) case, the unknown $v(x)>0$ is the compressional-wave velocity on a two-dimensional physical domain $\Omega$; its discretization is a $128\times128$ velocity map $z$. For each source signal $q(x,t)$, the pressure field starts with zero initial pressure and velocity, $u(\cdot,0)=0$ and $\partial_tu(\cdot,0)=0$ on $\Omega$, and solves

$$v(x)^{-2}\,\partial_t^2u(x,t)-\nabla^2u(x,t)=q(x,t),$$

and the observation is the receiver restriction $y=Pu$, where $P$ samples the wavefield at the selected receivers. The benchmark uses a $2.54\,\mathrm{km}\times1.27\,\mathrm{km}$ domain, horizontal and vertical grid spacings of $20\,\mathrm m$ and $10\,\mathrm m$, a $0.001\,\mathrm s$ time step chosen to satisfy the numerical solver's Courant–Friedrichs–Lewy stability condition, a $5\,\mathrm{Hz}$ Ricker source wavelet, and $1\,\mathrm s$ of simulated time. Its top boundary has the natural free-surface condition, while the other boundaries have absorbing conditions of width $80$ grid points. It uses $16$ sources at depth $1270\,\mathrm m$ and $129$ receivers evenly placed near the free surface at depth $10\,\mathrm m$. The reported observation noise is zero. The CurveFaultB velocity-map split has $50{,}000$ training maps, one validation map, and ten test maps, resized to $128\times128$. These counts and solver settings define this empirical benchmark instance; they are not existence or convergence claims for full waveform inversion.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|A benchmark declares its solver, noise, test population, and compute protocol]]

[[rem-ip-inversebench-scoped-findings|FWI performance and stability observations are empirical]]

[Zheng et al., *InverseBench*, §3, §4.1, and Appendix B.4](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[InverseBench acoustic forward implementation, pinned revision](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/acoustic.py)

[Devito v4.8.12 acoustic solver](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/examples/seismic/acoustic/wavesolver.py)

[Devito v4.8.12 wavefield data initialization](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/devito/types/dense.py)

## Facts & Assumptions

**Given:** A positive velocity map, the acoustic pressure-wave equation and source signal with zero initial pressure and velocity, the receiver sampling operator, a free-surface top and absorbing other boundaries of width $80$ grid points, $16$ sources at depth $1270\,\mathrm m$, $129$ receivers at depth $10\,\mathrm m$, the stated discrete solver and mesh, and the finite CurveFaultB split.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: a benchmark instance includes its forward solver, admissible inputs, noise, compute protocol, and test population.

[F2] [[rem-ip-inversebench-scoped-findings]]: the reported FWI outcomes concern this selected solver, tuning procedure, and test set only.

## Verification

1.1 With the zero initial data and the stated source, boundary conditions, and solver, the forward call produces the acoustic wavefield; applying the receiver restriction $P$ gives the stated observation, with the velocity map as the parameter being inferred. [given, construct]

2.1 The discretization, time step, boundary treatment, source/receiver depths and layout, noise setting, and finite sample counts specify the solver and population fields required by [F1]. The claim is restricted to the empirical setup recorded in [F2]. [F1, F2, given] ∎
