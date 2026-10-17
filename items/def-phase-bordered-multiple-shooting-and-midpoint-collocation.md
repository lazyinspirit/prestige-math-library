---
id: def-phase-bordered-multiple-shooting-and-midpoint-collocation
kind: definition
title: "Multiple-shooting and midpoint-collocation residuals for a phase-fixed periodic orbit"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-midpoint-collocation-residual-for-bvps
  - alg-midpoint-collocation-for-nonlinear-bvps
  - alg-multiple-shooting-for-nonlinear-bvps
  - def-nonlinear-two-point-bvp-and-boundary-residual
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
---

## Definition

Use the augmented state $u=(x,\theta)\in U\times(0,\infty)$, field $\widetilde f(u)=(\theta f(x),0)$, and boundary residual $B(u_0,u_N)=(x_N-x_0,\psi(x_0))$ from [[def-phase-bordered-periodic-orbit-bvp]]. On a mesh $0=s_0<\cdots<s_N=1$, write $u_i=(x_i,\theta_i)$.

The endpoint-pair boundary residual and square BVP convention are those of [[def-nonlinear-two-point-bvp-and-boundary-residual]]. The exact multiple-shooting residual has segment rows
$$
\Phi_{s_{i+1}-s_i}(u_i)-u_{i+1}\quad(0\le i<N)
$$
and final row $B(u_0,u_N)$, where $\Phi_h$ is the exact flow of $\widetilde f$. Its finite-budget candidate procedure is [[alg-multiple-shooting-for-nonlinear-bvps]] on this augmented BVP.

For uniform $h=1/N$, the normalized midpoint-collocation residual has rows
$$
\frac{u_{i+1}-u_i}{h}-\widetilde f\!\left(\frac{u_i+u_{i+1}}2\right)\quad(0\le i<N)
$$
and final row $B(u_0,u_N)$. This is [[def-midpoint-collocation-residual-for-bvps]] for the same augmented BVP; its finite-budget candidate procedure is [[alg-midpoint-collocation-for-nonlinear-bvps]]. Both systems are square: the state dimension is $d+1$, with $d+1$ boundary equations.
