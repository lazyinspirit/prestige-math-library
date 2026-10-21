---
id: ex-ip-inversebench-solver-invalid-iterate
kind: example
title: A solver-invalid FWI iterate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-benchmark-risk-and-compute-budget
  - rem-ip-inversebench-scoped-findings
  - def-ip-pde-solver-admissibility-contract
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No choice axiom is used; the example applies a supplied solver-specific admissibility predicate to one finite trial."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§4.3 and Figure 3, PDF pp. 8–9: DAPS step-size sensitivity and a reported FWI velocity map that violates the PDE solver's CFL condition; Appendix B.4, PDF p. 26: the particular FWI discretization and stable time step."
---

## Example

Fix an FWI velocity-model solver $\mathcal S$ with a declared finite admissibility predicate $\operatorname{adm}_{\mathcal S}(v)$ that checks that solver's coefficient, boundary, mesh, and time-step conditions, including its solver-specific Courant–Friedrichs–Lewy (CFL) condition. If an optimization method proposes a candidate velocity map $\widetilde v$ with $\operatorname{adm}_{\mathcal S}(\widetilde v)=\mathrm{false}$, the benchmark records the call as a solver/admissibility failure and does not assign a data-fit or reconstruction score to that iterate. In its FWI DAPS experiment, InverseBench reports that a smaller learning rate gave numerically stable but data-ineffective outputs, while a slightly larger learning rate produced a noisy velocity map that violated the PDE solver's CFL condition and failed. The paper gives no exact violating iterate or universal CFL threshold; this example claims neither.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|Failed solver calls remain visible in benchmark results]]

[[def-ip-pde-solver-admissibility-contract|An admissibility predicate and CFL condition are solver-specific]]

[[rem-ip-inversebench-scoped-findings|The step-size/CFL observation is empirical and task-scoped]]

[Zheng et al., *InverseBench*, §4.3 and Figure 3](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

## Facts & Assumptions

**Given:** A chosen FWI solver $\mathcal S$, its declared finite admissibility predicate, an optimizer-produced velocity map $\widetilde v$, the Boolean result $\operatorname{adm}_{\mathcal S}(\widetilde v)=\mathrm{false}$, and the qualitative DAPS observation reported in the Example.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: a failed solver/admissibility call is recorded with its status and is not silently omitted from results.

[F2] [[def-ip-pde-solver-admissibility-contract]]: an admissibility predicate tests the specified model's hypotheses, and any CFL condition is method-specific; the definition supplies no universal threshold.

[F3] [[rem-ip-inversebench-scoped-findings]]: InverseBench reports the FWI step-size/CFL behavior as an empirical observation for its named solver and methods.

## Verification

1.1 Since $\operatorname{adm}_{\mathcal S}(\widetilde v)=\mathrm{false}$, the proposed iterate fails the selected solver's declared admissibility test; it is therefore not an admissible input for that solver call. [F2, given]

1.2 By [F1], the benchmark records this call as failure and does not replace it with a numerical data-fit score. The statement uses only the solver's own test and asserts no universal CFL constant. [F1, F2, given]

2.1 The stated smaller-step/larger-step DAPS behavior is the paper's reported FWI observation for its numerical PDE setup, as recorded by [F3]; no inference is made from it to other solvers or parameter ranges. [F3, given] ∎
