---
id: thm-tikhonov-forward-discretization-and-stopping-coupling
kind: theorem
title: Forward discretization enters before inversion and controls the Tikhonov parameter coupling
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 7
deps:
  - def-countable-choice
  - def-compact-spectral-filter-and-qualification
  - lem-tikhonov-bias-converges-for-minimum-norm-solution
  - lem-hilbert-tikhonov-noise-amplification-bound
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-tikhonov-error-chain-with-discretization-and-residual
  - def-operator-norm
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 4–6 separate bias and data perturbation, while slides 8–9 discuss discrepancy choice.
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 6, equations (6.1)–(6.4), PDF pp. 56–63; the local theorem adds forward discretization and exact solve residual terms.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact and $A_h:X\to Y$ be
bounded and finite rank, between real or complex Hilbert spaces. Suppose
$x^\dagger\perp\ker A$, $y=Ax^\dagger$, $y_\delta=y+e$ with
$\|e\|\le\delta$, and $\|A-A_h\|\le\eta$. Form the discretized datum
$y_{h,\delta}=A_hx^\dagger+e$ before inversion. For $\lambda>0$, define
$$R_\lambda=(A^*A+\lambda I)^{-1}A^*,\qquad R_{\lambda,h}=(A_h^*A_h+\lambda I)^{-1}A_h^*,$$
and for a computed output $\widetilde x_h$ define its exact normal-equation
residual
$$r_{h,h}=(A_h^*A_h+\lambda I)\widetilde x_h-A_h^*y_{h,\delta}.$$
Then
$$\begin{aligned} \|x^\dagger-\widetilde x_h\|\le{}& \|x^\dagger-R_\lambda y\| +\frac{\delta+\eta\|x^\dagger\|}{2\sqrt\lambda} +\|(R_\lambda-R_{\lambda,h})y_{h,\delta}\| +\frac{\|r_{h,h}\|}{\lambda}. \end{aligned}$$
The forward-model term $\eta\|x^\dagger\|$ is counted before inversion and
is amplified by $1/(2\sqrt\lambda)$. The regularized-operator difference is
kept as a separate term; the sequence conclusion below explicitly assumes
that this term tends to zero.

For a sequence of discretizations and outputs, if $\lambda_j\to0$,
$$\frac{\delta_j+\eta_j\|x^\dagger\|}{\sqrt{\lambda_j}}\to0,\qquad \|(R_{\lambda_j}-R_{\lambda_j,h_j})y_{h_j,\delta_j}\|\to0,\qquad \frac{\|r_{h_j,h_j}\|}{\lambda_j}\to0,$$
then $\widetilde x_{h_j}\to x^\dagger$. If a certified residual evaluation
satisfies $\|r_{h,h}-\widehat r_{h,h}\|\le\rho_{h,h}$, its term may be
bounded by $(\|\widehat r_{h,h}\|+\rho_{h,h})/\lambda$.

## Facts & Assumptions

**Given:** Countable Choice, compact $A$, bounded finite-rank $A_h$, Hilbert
spaces $X,Y$, $x^\dagger\perp\ker A$, $y=Ax^\dagger$, $e$ with
$\|e\|\le\delta$, $\|A-A_h\|\le\eta$, $\lambda>0$, the pre-inversion
datum $y_{h,\delta}=A_hx^\dagger+e$, and an output $\widetilde x_h$ with
its exact residual $r_{h,h}$.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis needed for
the compact spectral theorem; no full Choice is used.

[F1] [[thm-tikhonov-error-chain-with-discretization-and-residual]]: With
$d_h=(A-A_h)x^\dagger=y_\delta-y_{h,\delta}$, the exact error chain is
$$(x^\dagger-R_\lambda y)+(R_\lambda y-R_\lambda y_\delta) +R_\lambda d_h+(R_\lambda-R_{\lambda,h})y_{h,\delta} +(R_{\lambda,h}y_{h,\delta}-\widetilde x_h).$$
Its last term has norm at most $\|r_{h,h}\|/\lambda$.

[F2] [[lem-hilbert-tikhonov-noise-amplification-bound]]: For bounded $T$,
$\|(T^*T+\lambda I)^{-1}T^*g\|\le\|g\|/(2\sqrt\lambda)$.

[F3] [[lem-hilbert-tikhonov-normal-operator-invertible]]: The inverse of
$A_h^*A_h+\lambda I$ has norm at most $1/\lambda$.

[F4] [[lem-tikhonov-bias-converges-for-minimum-norm-solution]]: For compact
$A$ and $x^\dagger\perp\ker A$, $\|x^\dagger-R_\lambda Ax^\dagger\|\to0$
as $\lambda\downarrow0$.

[F5] [[def-operator-norm]]: $\|(A-A_h)x\|\le\|A-A_h\|\,\|x\|$.

## Proof
1.1 Both shifted normal operators are invertible by [F3], since $A$ and $A_h$ are bounded; hence $R_\lambda$ and $R_{\lambda,h}$ are well-defined. Set $d_h=(A-A_h)x^\dagger$. Then $y_\delta-y_{h,\delta}=(Ax^\dagger+e)-(A_hx^\dagger+e)=d_h$. Substituting this equality into the five-term identity [F1] gives the exact error decomposition for the pre-inversion discretized datum. [given, F1, algebra, A1, F3]

2.1 By [F5], $\|d_h\|\le\eta\|x^\dagger\|$. By [F2], the data-noise term is at most $\delta/(2\sqrt\lambda)$ and the pre-inversion term $\|R_\lambda d_h\|$ is at most $\eta\|x^\dagger\|/(2\sqrt\lambda)$. The last term is at most $\|r_{h,h}\|/\lambda$ by [F1]. Applying the triangle inequality to the decomposition in step 1.1 yields the displayed error bound, retaining the regularized-operator difference as a separate term. [F1, F2, F5, step 1.1, algebra, A1]

3.1 Along the stated sequence, the bias term tends to zero by [F4]. The combined data and forward-discretization term tends to zero by the first parameter condition; the regularized-operator difference and normal-residual terms tend to zero by the other two conditions. The bound in the Statement therefore gives $\|x^\dagger-\widetilde x_{h_j}\|\to0$. The residual-evaluation variant follows from $\|r_{h,h}\|\le\|\widehat r_{h,h}\|+\rho_{h,h}$ by the triangle inequality. [given, F1, F4, step 2.1, algebra, A1] ∎
