---
id: thm-volume-integral-scattering-born-neumann-error
kind: theorem
title: Born truncation error for a small-norm volume integral operator
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-volume-integral-scattering-model, lem-volume-integral-operator-well-defined-and-bounded, def-countable-choice, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only for completeness of the complex L2 space and the completed-product operator interface; no full Axiom of Choice or Fredholm uniqueness result is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 80–81, Lippmann–Schwinger volume equation; the small-norm Born estimate is proved locally."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Printed pp. 11–12, Neumann-series inverse estimate; the partial-sum tail is derived locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the data of [[def-volume-integral-scattering-model]] with $0<|D|<\infty$. If $\rho:=\|K_k\|_{L^2\to L^2}<1$, then for every $f\in L^2(D;\mathbb C)$ the equation $u=f+K_ku$ has a unique solution. For each integer $m\ge0$, define the Born partial sum $u_m:=\sum_{j=0}^{m}K_k^jf$. Then
$$\|u-u_m\|_2\le\frac{\rho^{m+1}}{1-\rho}\|f\|_2.$$
No compactness, analytic continuation, or physical uniqueness hypothesis is used in this small-norm branch.

## Facts & Assumptions

**Given:** Countable Choice, $f\in L^2(D;\mathbb C)$, and $K_k$ with operator norm $\rho<1$.

[F1] $K_k$ is a bounded linear operator on complex $L^2(D)$ ([[lem-volume-integral-operator-well-defined-and-bounded]]).

[F2] Complex $L^2(D)$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[def-countable-choice]]).

[F3] For every integer $j\ge0$, $\|K_k^jf\|_2\le\rho^j\|f\|_2$, by repeated application of the operator norm inequality in [F1].

## Proof

**Given:** The data of the Statement, with $\rho=\|K_k\|<1$.

1.1 Define $u_N:=\sum_{j=0}^{N}K_k^jf$. For $M>N$, the triangle inequality and [F3] give $\|u_M-u_N\|_2\le\|f\|_2\sum_{j=N+1}^{M}\rho^j\le\|f\|_2\rho^{N+1}/(1-\rho)$. This tends to zero as $N\to\infty$, so $(u_N)$ is Cauchy and converges to some $u\in L^2(D;\mathbb C)$ by [F2]. [given, F2, F3, algebra]

2.1 Finite telescoping gives $(I-K_k)u_N=f-K_k^{N+1}f$. By [F3], $\|K_k^{N+1}f\|_2\le\rho^{N+1}\|f\|_2\to0$; boundedness in [F1] lets $K_ku_N\to K_ku$. Taking limits yields $(I-K_k)u=f$. If $(I-K_k)v=0$, then $\|v\|_2=\|K_kv\|_2\le\rho\|v\|_2$, and $\rho<1$ forces $v=0$, so this solution is unique. [F1, F3, step 1.1, algebra]

3.1 With $m$ fixed, [F3] and the geometric-series identity give $\|u-u_m\|_2\le\sum_{j=m+1}^{\infty}\|K_k^jf\|_2\le\|f\|_2\sum_{j=m+1}^{\infty}\rho^j=\rho^{m+1}\|f\|_2/(1-\rho)$. The argument includes $\rho=0$ and $f=0$. [F2, F3, step 1.1, algebra] ∎
