---
id: alg-trust-region-method
kind: algorithm
title: "A finite-budget trust-region method with ratio-based radius updates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - lem-trust-region-cauchy-decrease
justified_by:
  - thm-trust-region-epsilon-iteration-complexity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §§4.1–4.2, printed pp. 71–78 / PDF pp. 91–99: Cauchy step, trust-region acceptance, and radius updates."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 13–14 and 19–22: ratio branches, radius updates, and Cauchy decrease."
---

## Definition

Input $f:\mathbb R^n\to\mathbb R$ of class $C^1$, an initial point $x_0$,
an initial radius $0<\Delta_0\le\Delta_{max}$, a trial cap
$N\in\mathbb N_0$, a target $\varepsilon\ge0$, constants
$0<\eta_1<\eta_2<1$, $0<\gamma_{dec}<1<\gamma_{inc}$,
$0<\theta_C\le1$, and a declared model-Hessian bound $M_B\ge0$. At each
trial $k$, the supplied symmetric model matrix $B_k$ must satisfy
$\|B_k\|_2\le M_B$. A finite-budget subproblem routine $S$ returns either a
vector or `failure`; its output is treated only as a candidate and is not
assumed to minimize the trust-region model. The output is the last accepted
point and one of `stationary`, `target-achieved`, `outer-budget-exhausted`,
or `model-evaluation-failure`.

For $k=0,1,\ldots,N$, in order:

1. Set $g_k:=\nabla f(x_k)$. If $g_k=0$, return
   $(x_k,\texttt{stationary})$. If $\|g_k\|_2\le\varepsilon$, return
   $(x_k,\texttt{target-achieved})$. If $k=N$, return
   $(x_k,\texttt{outer-budget-exhausted})$.
2. Form $m_k$ from [[def-trust-region-quadratic-model-and-ratio]], compute
   the Cauchy step $p_C$ from [[alg-trust-region-cauchy-step]], and set
   $P_C:=m_k(0)-m_k(p_C)$. Query $S$ with this model and radius. Use its
   candidate $q$ only if it is feasible and
   $m_k(0)-m_k(q)\ge\theta_C P_C$; otherwise set $p:=p_C$. If it qualifies,
   set $p:=q$. If $M_B=0$, interpret $\|g_k\|_2/(2M_B)=+\infty$. Whenever
   $\Delta_k\le\|g_k\|_2/(2M_B)$, replace the candidate by $p:=p_C$.
3. Recompute $P_k:=m_k(0)-m_k(p)$. Evaluate
   $\rho_k:=[f(x_k)-f(x_k+p)]/P_k$. If this evaluation is unavailable,
   return $(x_k,\texttt{model-evaluation-failure})$.
4. If $\rho_k<\eta_1$, reject: set $x_{k+1}:=x_k$ and
   $\Delta_{k+1}:=\gamma_{dec}\Delta_k$. Otherwise accept and set
   $x_{k+1}:=x_k+p$. If $\rho_k\ge\eta_2$ and $\|p\|_2=\Delta_k$, set
   $\Delta_{k+1}:=\min\{\gamma_{inc}\Delta_k,\Delta_{max}\}$; in every
   other accepted case set $\Delta_{k+1}:=\Delta_k$.

The finite subproblem budget alone does not imply convergence or a complexity
bound.
