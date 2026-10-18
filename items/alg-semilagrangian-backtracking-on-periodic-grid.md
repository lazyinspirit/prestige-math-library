---
id: alg-semilagrangian-backtracking-on-periodic-grid
kind: algorithm
title: "Explicit Euler characteristic backtracking with multilinear interpolation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-semilagrangian-periodic-grid-and-interpolant
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - def-linear-transport-equation-and-its-characteristic-flow
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Definition

Inputs are a periodic grid from [[def-semilagrangian-periodic-grid-and-interpolant]], a finite horizon $T>0$, a positive integer $M$ of time steps, a periodic $C^1$ velocity $b$, periodic initial data $u_0$, node values $U^0_{\boldsymbol i}=u_0(x_{\boldsymbol i})$, and a nonnegative integer step budget $B$. Write $\Delta t=T/M$ and $t_n=n\Delta t$. The output is either `success` with $U^0,\ldots,U^M$, or `budget-exhausted` with no partial final state.

1. If $B<M$, return `budget-exhausted` before changing the input data.
2. For $n=0,\ldots,M-1$ and each arrival node $x_{\boldsymbol i}$, compute the explicit backward Euler foot lift
   $$\widetilde x_{\boldsymbol i}^{\,n}:=x_{\boldsymbol i}-\Delta t\,b(t_{n+1},x_{\boldsymbol i}).$$
   Reduce each coordinate modulo its period when evaluating the periodic interpolant.
3. Set
   $$U_{\boldsymbol i}^{n+1}:=\mathcal I_h U^n(\widetilde x_{\boldsymbol i}^{\,n}).$$
4. After the $M$ finite updates, return `success` with all node arrays.

The finite step budget counts time updates. Every update evaluates one foot per grid node and a finite sum of $2^d$ interpolation terms. The procedure imposes no bound on $\|b\|\Delta t/h$; the floor-and-fraction convention in the interpolation definition applies even when a foot crosses many grid cells.

## Remarks

This algorithm is the periodic-box branch. It does not wrap a foot through a nonperiodic boundary. An inflow/exit implementation must instead use an explicit first-hit oracle and return an unresolved status when the first hit or its error certificate is not resolved; [[lem-semilagrangian-transverse-first-hit-error]] records the transverse error interface. No grazing, simultaneous, or unbounded event sequence is hidden in the periodic update.

The algorithm defines tensor-product multilinear interpolation only. A higher-order replacement needs its own operator-norm or limiter bound and its own interpolation defect estimate; high order alone does not imply $L^\infty$ contractivity.
