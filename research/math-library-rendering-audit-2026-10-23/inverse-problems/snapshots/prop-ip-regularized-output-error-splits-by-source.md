---
id: prop-ip-regularized-output-error-splits-by-source
kind: proposition
title: Regularized output error splits into source-specific terms
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - cor-inner-product-induces-a-norm
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-ip-error-budget-for-computed-inversion
  - def-operator-norm
  - lem-computed-augmented-tikhonov-solve-residual-and-output-error
  - lem-hilbert-tikhonov-noise-amplification-bound
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-tikhonov-error-chain-with-discretization-and-residual
  - thm-tikhonov-forward-discretization-and-stopping-coupling
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Chapter 8"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html"
---

## Statement

Assume Countable Choice, meaning every sequence of nonempty sets has a choice
function. Let $X,Y$ be real or complex Hilbert spaces over the same scalar
field, let $A:X\to Y$ be compact and linear (the closure of $A(B)$ is compact
in $Y$ for every bounded set $B\subseteq X$), and let $A_h:X\to Y$ be bounded
and linear with finite-dimensional range. Let $A^*:Y\to X$ and $A_h^*:Y\to X$
be their Hilbert adjoints, characterized by
$\langle Ax,z\rangle_Y=\langle x,A^*z\rangle_X$ and
$\langle A_hx,z\rangle_Y=\langle x,A_h^*z\rangle_X$, with both inner
products linear in the first argument. Let $\lambda>0$, $x^\dagger\in X$,
$e\in Y$, $\delta\ge0$ with $\|e\|_Y\le\delta$, and
$\widetilde x_h\in X$. Put
$$y=Ax^\dagger,\qquad y_\delta=y+e,\qquad y_{h,\delta}=A_hx^\dagger+e,\qquad d_h=(A-A_h)x^\dagger=y_\delta-y_{h,\delta}.$$
$$R_\lambda=(A^*A+\lambda I_X)^{-1}A^*,\qquad R_{\lambda,h}=(A_h^*A_h+\lambda I_X)^{-1}A_h^*,$$
where $I_X$ is the identity operator on $X$, and
$$r_{h,h}=(A_h^*A_h+\lambda I_X)\widetilde x_h-A_h^*y_{h,\delta}.$$
Define
$$\begin{aligned}b_{\mathrm{bias}}&=x^\dagger-R_\lambda y,&b_{\mathrm{data}}&=R_\lambda y-R_\lambda y_\delta,\\b_{\mathrm{operator}}&=(R_\lambda-R_{\lambda,h})y_{h,\delta},&b_{\mathrm{pre}}&=R_\lambda d_h,\\b_{\mathrm{solve}}&=R_{\lambda,h}y_{h,\delta}-\widetilde x_h.\end{aligned}$$
Then the exact error identity and its triangle bound are
$$x^\dagger-\widetilde x_h=b_{\mathrm{bias}}+b_{\mathrm{data}}+b_{\mathrm{pre}}+b_{\mathrm{operator}}+b_{\mathrm{solve}},$$
$$\|x^\dagger-\widetilde x_h\|\le \|b_{\mathrm{bias}}\|+\|b_{\mathrm{data}}\|+\|b_{\mathrm{pre}}\|+\|b_{\mathrm{operator}}\|+\|b_{\mathrm{solve}}\|,$$
and the four displayed term estimates give
$$\|x^\dagger-\widetilde x_h\|\le \|b_{\mathrm{bias}}\|+\frac{\delta}{2\sqrt\lambda}+\frac{\|d_h\|}{2\sqrt\lambda}+\|b_{\mathrm{operator}}\|+\frac{\|r_{h,h}\|}{\lambda}.$$
If $\|R_\lambda-R_{\lambda,h}\|_{Y\to X}\le\eta_{\lambda,h}$, where the
induced operator norm for a bounded linear map $T:Y\to X$ is
$$\|T\|_{Y\to X}:=\sup_{u\in Y,\,\|u\|_Y\le1}\|Tu\|_X,$$
then
$\|b_{\mathrm{operator}}\|\le\eta_{\lambda,h}\|y_{h,\delta}\|_Y$. If a
residual evaluation separately supplies $\widehat r_{h,h}\in X$ and
$\rho_{h,h}\ge0$ with
$\|\widehat r_{h,h}-r_{h,h}\|_X\le\rho_{h,h}$, then the final solve term is at
most $(\|\widehat r_{h,h}\|_X+\rho_{h,h})/\lambda$. These pointwise bounds assert
no convergence rate as the data, regularization parameter, or discretization
changes.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-hilbert-space-adjoint|Hilbert adjoint and inner-product convention]]

[[def-countable-choice|Countable Choice hypothesis]]

[[def-operator-norm|Induced operator norm]]

[[def-ip-error-budget-for-computed-inversion|Five-channel Tikhonov error budget]]

[[thm-tikhonov-error-chain-with-discretization-and-residual|Exact telescoping chain and conditional error bounds]]

[[lem-computed-augmented-tikhonov-solve-residual-and-output-error|Finite-matrix residual certificate and returned-output bound]]

[[thm-tikhonov-forward-discretization-and-stopping-coupling|Additional sequence hypotheses for convergence]]

[Clason, Regularization of Inverse Problems, Chapter 8](https://arxiv.org/pdf/2001.00617v2)

[Hansen, Introduction to Inverse Problems, Chapter 5](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf)

[Van Leeuwen and Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html)

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $X,Y$, compact
$A:X\to Y$, bounded finite-dimensional-range $A_h:X\to Y$, $\lambda>0$,
$x^\dagger\in X$, $e\in Y$ with $\|e\|\le\delta$, $\delta\ge0$, a returned
$\widetilde x_h$, and its exact normal-equation residual $r_{h,h}$.

[A1] [[def-countable-choice]]: The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function.

[F1] [[def-ip-error-budget-for-computed-inversion]]: The error-budget definition supplies $y=Ax^\dagger$, $y_\delta=y+e$, $y_{h,\delta}=A_hx^\dagger+e$, $d_h=(A-A_h)x^\dagger=y_\delta-y_{h,\delta}$, and the five bias, data, operator, pre-inversion, and solve vectors used below.

[F2] [[thm-tikhonov-error-chain-with-discretization-and-residual]]: The supplier explicitly states that no rate for $d_h$, no operator-perturbation estimate, and no floating-point residual bound is implicit.

[F3] [[lem-hilbert-tikhonov-noise-amplification-bound]]: For a bounded $T$ between Hilbert spaces and $\lambda>0$, $\| (T^*T+\lambda I)^{-1}T^*g\|\le\|g\|/(2\sqrt\lambda)$.

[F4] [[lem-hilbert-tikhonov-normal-operator-invertible]]: Under Countable Choice, the shifted normal operator $T^*T+\lambda I$ is bijective and its inverse has norm at most $1/\lambda$.

[F5] [[def-operator-norm]]: The operator norm is the supremum of $\|Tz\|$ over $\|z\|\le1$; rescaling gives $\|Tz\|\le\|T\|\|z\|$.

[F6] [[lem-computed-augmented-tikhonov-solve-residual-and-output-error]]: For stored finite-matrix inputs and the successful augmented-QR solve with the supplier's stated operation, representation, nonsingularity, and residual-evaluation hypotheses, a certified residual $\|\widehat r-r\|_2\le\rho$ gives $\|\widehat x-x_\lambda\|_2\le(\|\widehat r\|_2+\rho)/\lambda$.

[F7] [[cor-inner-product-induces-a-norm]]: The norm induced by a real or complex inner product satisfies $\|u+v\|\le\|u\|+\|v\|$.

[F8] [[thm-tikhonov-forward-discretization-and-stopping-coupling]]: Its sequence convergence result additionally assumes $x^\dagger\perp\ker A$, exact data $y=Ax^\dagger$, a common noise bound, an operator-norm approximation bound, $\lambda_j\to0$, and the stated limits for noise plus forward error over $\sqrt{\lambda_j}$, the regularized-operator difference, and normal residual over $\lambda_j$.

[F9] [[def-hilbert-space-adjoint]]: Under Countable Choice, the Hilbert adjoint $A^*$ satisfies $\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$.

## Proof

**Proof technique:** direct.

1.1 Countable Choice [A1] and the adjoint definition [F9] give the Hilbert adjoints, while [F4] gives both shifted normal inverses; hence the displayed regularized operators are defined. The common perturbation cancels, so $y_\delta-y_{h,\delta}=(Ax^\dagger+e)-(A_hx^\dagger+e)=d_h$. Substituting the definitions in [F1] and adding in the order bias, data, pre-inversion, operator, solve gives the displayed telescoping sum: the adjacent $R_\lambda y$, $R_\lambda y_\delta$, $R_\lambda y_{h,\delta}$, and $R_{\lambda,h}y_{h,\delta}$ terms cancel, leaving $x^\dagger-\widetilde x_h$. [given, A1, F1, F4, F9, algebra]

1.2 Under the stated operator-norm hypothesis, [F5] gives $\|b_{\mathrm{operator}}\|=\|(R_\lambda-R_{\lambda,h})y_{h,\delta}\|\le\eta_{\lambda,h}\|y_{h,\delta}\|$. [given, F1, F5, algebra]

2.1 Taking norms in step 1.1 and applying the triangle inequality [F7] to the five summands gives the sum of the five channel norms. [step 1.1, F7, algebra]

3.1 By [F1], $b_{\mathrm{data}}=-R_\lambda e$ and $b_{\mathrm{pre}}=R_\lambda d_h$. Applying [F3] to $e$ and $d_h$ gives $\|b_{\mathrm{data}}\|\le\delta/(2\sqrt\lambda)$ and $\|b_{\mathrm{pre}}\|\le\|d_h\|/(2\sqrt\lambda)$. With $H_h=A_h^*A_h+\lambda I_X$, the normal equation gives $H_hR_{\lambda,h}y_{h,\delta}=A_h^*y_{h,\delta}$, hence $H_hb_{\mathrm{solve}}=-r_{h,h}$. By [F4], $\|b_{\mathrm{solve}}\|\le\|r_{h,h}\|/\lambda$. Substitution in step 2.1 proves the displayed four-term estimate. [given, F1, F3, F4, step 2.1, algebra]

4.1 If a residual evaluation supplies the stated certificate, [F7] gives $\|r_{h,h}\|\le\|\widehat r_{h,h}\|+\rho_{h,h}$, which substituted in step 3.1 yields the residual-certificate variant. Under the finite-matrix hypotheses in [F6], the augmented-QR supplier is one concrete source of that certificate; its arithmetic and coordinate conditions remain assumptions. [given, F6, F7, step 3.1, algebra]

5.1 Steps 1.1–4.1 prove a pointwise identity and bounds; the existing error-chain result [F2] likewise supplies no discretization rate or floating-point residual guarantee. The separate sufficient convergence result [F8] additionally assumes $x^\dagger\perp\ker A$, an operator-norm approximation bound, and the stated sequence coupling; none of those hypotheses is inferred here. [given, F2, F8, step 1.1, step 2.1, step 3.1, step 4.1] ∎
