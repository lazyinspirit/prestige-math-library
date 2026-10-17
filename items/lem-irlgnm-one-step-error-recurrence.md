---
id: lem-irlgnm-one-step-error-recurrence
kind: lemma
title: One-step error recurrence for the assigned nonlinear regularized Gauss–Newton step
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-iteratively-regularized-gauss-newton-step
  - lem-local-lipschitz-derivative-quadratic-remainder
  - lem-hilbert-tikhonov-normal-operator-invertible
  - lem-hilbert-tikhonov-noise-amplification-bound
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 11, §§11.2–11.3, printed pp. 107–116 / PDF pp. 119–128: tangential-cone estimates for Levenberg–Marquardt and the distinct anchored IRGNM recurrence."
    - title: "Qinian Jin, A convergence analysis of the iteratively regularized Gauss-Newton method under Lipschitz condition"
      url: "https://arxiv.org/pdf/0803.2373"
      locator: "§1, equations (1.4)–(1.12), printed pp. 2–4 / PDF pp. 2–4: anchored update and its source-condition recurrence."
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods, author lecture notes"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Complete 15-page PDF, pp. 9–13: IRGNM anchor, source-condition theorem, its hypotheses, and the distinct unanchored LM formulation on pp. 2–7."
---

## Statement

Assume Countable Choice. Let $X,Y$ be real or complex Hilbert spaces over the
same scalar field and let $U\subseteq X$ be open. Let $F:U\to Y$ be
continuously Fréchet differentiable over that field, with bounded
complex-linear derivatives in the complex case. Let $x^\dagger\in U$ satisfy
$F(x^\dagger)=y$, and suppose $x_k,x^\dagger$ lie in a convex subset of $U$
on which $F'$ is $L$-Lipschitz. Let $y_\delta$ satisfy
$\|y_\delta-y\|\le\delta$, put $e_k=x_k-x^\dagger$ and $A_k=F'(x_k)$,
and use the step of
[[alg-iteratively-regularized-gauss-newton-step]] with $\alpha_k>0$.
Define
$$R_k:=y-F(x_k)+A_ke_k.$$
Then
$$e_{k+1}=\alpha_k(A_k^*A_k+\alpha_kI)^{-1}e_k +(A_k^*A_k+\alpha_kI)^{-1}A_k^*(y_\delta-y+R_k),$$
and
$$\|e_{k+1}\|\le\|e_k\|+ \frac{\delta+(L/2)\|e_k\|^2}{2\sqrt{\alpha_k}}.$$
If in addition the tangential-cone condition
$$\|F(x)-F(z)-F'(z)(x-z)\|\le\eta\|F(x)-F(z)\|$$
holds for all $x,z$ in that subset, then also
$\|R_k\|\le\eta(\|F(x_k)-y_\delta\|+\delta)$, which may replace
$(L/2)\|e_k\|^2$ in the recurrence bound. This lemma alone does not assert
contraction or discrepancy-stopped convergence.

## Facts & Assumptions

**Given:** The Hilbert-space data and iterates above, $\alpha_k>0$, the
Lipschitz derivative bound, and, for the final bound, the stated tangential
cone condition.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert adjoint and shifted-normal-operator suppliers.

[F1] [[alg-iteratively-regularized-gauss-newton-step]]: $e_{k+1}=e_k+s_k$ and $(A_k^*A_k+\alpha_kI)s_k=A_k^*(y_\delta-F(x_k))$.

[F2] [[lem-hilbert-tikhonov-normal-operator-invertible]]: $B_k=A_k^*A_k+\alpha_kI$ is invertible with $\|B_k^{-1}\|\le1/\alpha_k$.

[F3] [[lem-hilbert-tikhonov-noise-amplification-bound]]: $\|B_k^{-1}A_k^*v\|\le\|v\|/(2\sqrt{\alpha_k})$ for bounded $A_k$.

[F4] [[lem-local-lipschitz-derivative-quadratic-remainder]]: $\|F(x)-F(z)-F'(z)(x-z)\|\le(L/2)\|x-z\|^2$ on the convex subset.

## Proof

**Given:** The assumptions and facts above. Put
$B_k=A_k^*A_k+\alpha_kI$.

1.1 From [F1], $e_{k+1}=e_k+B_k^{-1}A_k^*(y_\delta-F(x_k))$. Multiplying by $B_k$ and using $B_ke_k=A_k^*A_ke_k+\alpha_ke_k$ gives $$B_ke_{k+1}=\alpha_ke_k+A_k^*(A_ke_k+y_\delta-F(x_k)).$$ Since $A_ke_k+y-F(x_k)=R_k$, the term in parentheses is $y_\delta-y+R_k$. Applying [F2] to invert $B_k$ proves the stated identity. [A1, F1, F2, algebra]

2.1 By [F2], $\|\alpha_kB_k^{-1}e_k\|\le\|e_k\|$. By [F3], $\|B_k^{-1}A_k^*(y_\delta-y+R_k)\| \le(\delta+\|R_k\|)/(2\sqrt{\alpha_k})$. The triangle inequality and [F4] give the quadratic-error recurrence. [A1, F2, F3, F4, step 1.1, algebra]

3.1 For the tangential-cone bound, substitute $x=x^\dagger$ and $z=x_k$. Its left side is $\|y-F(x_k)+A_k(x_k-x^\dagger)\|=\|R_k\|$, so $\|R_k\|\le\eta\|y-F(x_k)\|\le\eta(\|y-y_\delta\|+\|y_\delta-F(x_k)\|) \le\eta(\delta+\|y_\delta-F(x_k)\|)$. Inserting this estimate into the bound from [step 2.1] proves the optional residual form. [A1, given, step 2.1, algebra] ∎
