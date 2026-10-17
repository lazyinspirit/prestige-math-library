---
id: alg-improved-tangent-climbing-neb
kind: algorithm
title: "Finite-budget improved-tangent NEB with a climbing image"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, Improved tangent estimate in the nudged elastic band method for finding minimum energy paths and saddle points"
      url: "https://hj.hi.is/papers/paperNewTangent.pdf"
      locator: "§IV, equations (8)–(12): energy-selected tangent, weighted extremum rule, and parallel spring force"
    - title: "Graeme Henkelman, Blas P. Uberuaga, and Hannes Jónsson, A climbing image nudged elastic band method for finding saddle points and minimum energy paths"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf"
      locator: "§IV, equation (5): climbing-image force with the parallel component inverted and spring omitted"
---

## Definition

Let $U,V,a,b$ satisfy [[def-regular-minimum-energy-path-in-a-collision-free-tube]]. **Inputs:** an integer $M\ge2$, images $R_0=a,R_1,\ldots,R_M=b$ in $U$, spring constant $\kappa\ge0$, fixed step $\eta>0$, force and spacing tolerances $\tau_F,\tau_s\ge0$, an ordinary-step count $n_{\rm climb}\in\mathbb N_0$, and a finite update budget $N\in\mathbb N_0$. Require $n_{\rm climb}\le N$. **Output:** the last chain and one of `tolerances-met`, `tangent-failure`, `geometry-failure`, `nonfinite-evaluation`, or `budget-exhausted`.

At each iteration, endpoints are fixed and only interior images are updated. First evaluate $V_i=V(R_i)$ for every image; if any energy is nonfinite, return `nonfinite-evaluation` before making energy comparisons. For $i=1,\ldots,M-1$, write $\Delta_i^+=R_{i+1}-R_i$ and $\Delta_i^-=R_i-R_{i-1}$. Select an unnormalized tangent by

$$\tau_i=\begin{cases}\Delta_i^+,&V_{i+1}>V_i>V_{i-1},\\\Delta_i^-,&V_{i+1}<V_i<V_{i-1},\\w_{\max}\Delta_i^+ + w_{\min}\Delta_i^-,&\text{otherwise and }V_{i+1}>V_{i-1},\\w_{\min}\Delta_i^+ + w_{\max}\Delta_i^-,&\text{otherwise and }V_{i+1}<V_{i-1},\\\Delta_i^++\Delta_i^-,&V_{i+1}=V_{i-1},\end{cases}$$

where $w_{\max}=\max(|V_{i+1}-V_i|,|V_{i-1}-V_i|)$ and $w_{\min}=\min(|V_{i+1}-V_i|,|V_{i-1}-V_i|)$. When $V_{i+1}=V_{i-1}$, the displayed centered-chord branch is the algorithm's explicit tie convention; it is a local completion of the strict-comparison rule in the cited improved-tangent formula. If $\tau_i=0$, return `tangent-failure`; otherwise set $t_i=\tau_i/\|\tau_i\|_2$. Next evaluate $\nabla V(R_i)$ for every interior image; if any gradient is nonfinite, return `nonfinite-evaluation` before forming forces.

Initialize the update counter $k=0$. At iteration $k$, use the ordinary force

$$F_i=-(I-t_it_i^T)\nabla V(R_i)+\kappa(\|\Delta_i^+\|_2-\|\Delta_i^-\|_2)t_i.$$

When $k\ge n_{\rm climb}$, choose the least index $i_*$ attaining the largest interior energy and replace that image's force by

$$F_{i_*}^{\rm CI}=-\nabla V(R_{i_*})+2(\nabla V(R_{i_*})^Tt_{i_*})t_{i_*};$$

the climbing image has no spring force. The remaining interior images retain the ordinary force. If any resulting force is nonfinite, return `nonfinite-evaluation`. Thus iterations $k=0,\ldots,n_{\rm climb}-1$ use ordinary forces and the first climbing force is evaluated at iteration $k=n_{\rm climb}$. At each iteration report the maximum force norm and spacing residual $\max_i|\|\Delta_i^+\|_2-\|\Delta_i^-\|_2|$. Stop with `tolerances-met` only if both are within their declared tolerances. If a tolerance fails and $k=N$, return `budget-exhausted`; only when $k<N$ update every interior image by $R_i^{k+1}=R_i^k+\eta F_i^k$. Leaving $U$ returns `geometry-failure`. After a valid update set $k\leftarrow k+1$ and repeat. The tolerance check precedes the budget check, so $N=0$ still checks the initial chain and $n_{\rm climb}=N$ uses a climbing force at the final residual check (without an update if the budget is then exhausted).

The finite stopping status does not assert convergence to a MEP, a saddle, or a continuum path.
