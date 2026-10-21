---
id: ex-ip-lm-scalar-regularized-step-stability
kind: example
title: A scalar regularized LM step controls noise at fixed damping
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-regularized-levenberg-marquardt
  - alg-safeguarded-levenberg-marquardt
  - def-countable-choice
  - thm-of-square-roots
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, §11.2"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Inverse Problems – Applications and Solution Strategies, PDF p. 63"
      url: "https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf"
verification:
  precheck: pending
---

## Example

Assume Countable Choice. Let $\varepsilon,\alpha,\delta>0$, let
$\sigma\in(0,1)$, and consider the scalar forward map $F_\varepsilon:\mathbb R\to\mathbb R$, $F_\varepsilon(t)=
\varepsilon t$ at a current point $x$ with exact datum $y=F_\varepsilon(x)$
and noisy datum $y^\delta$ satisfying $0<r:=y^\delta-F_\varepsilon(x)\le\delta$.
The regularized linearized step with fixed damping $\alpha$ is the unique
minimizer of
$$h\longmapsto\frac12|\varepsilon h-r|^2+\frac\alpha2|h|^2,$$
namely $h_\alpha=\varepsilon r/(\varepsilon^2+\alpha)$; hence
$|h_\alpha|\le\delta/(2\sqrt\alpha)$, uniformly in $\varepsilon$. The
unregularized Gauss–Newton increment, defined by $\varepsilon h_0=r$, is
$h_0=r/\varepsilon$ and satisfies only $|h_0|\le\delta/\varepsilon$. If
instead $\alpha$ is selected by the residual-forcing equality
$|\varepsilon h_\alpha-r|=\sigma r$, then
$\alpha=\sigma\varepsilon^2/(1-\sigma)$ and
$h_\alpha=(1-\sigma)r/\varepsilon$, so the forcing-selected increment is not
uniformly bounded over $\varepsilon\downarrow0$ at a fixed noise bound. For the finite-dimensional
safeguarded LM trial on this same scalar linear residual, with exact arithmetic,
$D=1$, current damping $\lambda=\alpha$, damping floor
$0<\lambda_{\min}\le\alpha$, factors $\gamma=2$, $\eta_1=1/4$,
$\eta_2=3/4$, trust radius $\Delta>|h_\alpha|$, one-attempt budget, and a
supplied exact reduced QR factorization of the augmented matrix, the trial is
accepted with ratio $1$ and unchanged damping.

## Example references

[[alg-ip-regularized-levenberg-marquardt|Residual-forcing regularized LM step]]

[[alg-safeguarded-levenberg-marquardt|Finite-budget safeguarded LM trial]]

[Christian Clason, *Regularization of Inverse Problems*, §11.2](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, *Inverse Problems – Applications and Solution Strategies*, PDF p. 63](https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf)

## Facts & Assumptions

**Given:** Countable Choice; $\varepsilon,\alpha,\delta>0$; $0<\sigma<1$; $F_\varepsilon(t)=\varepsilon t$; exact datum $y=F_\varepsilon(x)$; and $0<r=y^\delta-F_\varepsilon(x)\le\delta$.

[A1] Countable Choice is the axiom required by the general Hilbert-space regularized LM definition ([[def-countable-choice]]).

[F1] The regularized LM method selects $\alpha_n$ by the displayed residual-forcing equality ([[alg-ip-regularized-levenberg-marquardt]]).

[F2] In exact mode the safeguarded LM trial minimizes the damped least-squares objective with the supplied scaling matrix ([[alg-safeguarded-levenberg-marquardt]]).

[F3] An exact safeguarded trial is accepted only when the actual-to-predicted ratio is at least $\eta_1$; damping is reduced only when the ratio is at least $\eta_2$ and the scaled step reaches the trust boundary ([[alg-safeguarded-levenberg-marquardt]]).

[F4] Each positive real has a positive square root, and $2\varepsilon\sqrt\alpha\le\varepsilon^2+\alpha$ follows from $(\varepsilon-\sqrt\alpha)^2\ge0$ ([[thm-of-square-roots]]).

## Verification



1.1 Completing the square gives $\frac12|\varepsilon h-r|^2+\frac\alpha2|h|^2=\frac{\varepsilon^2+\alpha}{2}\left(h-\frac{\varepsilon r}{\varepsilon^2+\alpha}\right)^2+\frac{r^2}{2}-\frac{\varepsilon^2r^2}{2(\varepsilon^2+\alpha)}.$ Since $\varepsilon^2+\alpha>0$, the unique minimizer is $h_\alpha=\varepsilon r/(\varepsilon^2+\alpha)$. [given, algebra]

2.1 By [F4], $2\varepsilon\sqrt\alpha\le\varepsilon^2+\alpha$, so $|h_\alpha|=\varepsilon r/(\varepsilon^2+\alpha)\le r/(2\sqrt\alpha)\le\delta/(2\sqrt\alpha)$, with a bound independent of $\varepsilon$. The unregularized linearized equation $\varepsilon h_0=r$ instead gives $|h_0|=r/\varepsilon\le\delta/\varepsilon$, which is unbounded as $\varepsilon\downarrow0$ for fixed $r>0$. [F4, given, step 1.1, algebra]

2.2 The linearized residual after the regularized step is $\varepsilon h_\alpha-r=-\alpha r/(\varepsilon^2+\alpha)$. Since $r>0$, the residual-forcing equality is equivalent to $\alpha/(\varepsilon^2+\alpha)=\sigma$, hence $\alpha=\sigma\varepsilon^2/(1-\sigma)$ and $h_\alpha=(1-\sigma)r/\varepsilon$. This forcing-selected step grows like $1/\varepsilon$ when $r$ is held fixed; the fixed-$\alpha$ bound above does not give a uniform bound for this varying-parameter family. [F1, step 1.1, algebra]

2.3 For the finite safeguarded procedure, the augmented matrix is the column $A=(\varepsilon,\sqrt\alpha)^T$. Put $s:=\sqrt{\varepsilon^2+\alpha}$, $Q:=A/s$, and $R:=(s)$. Then $s>0$, $Q^TQ=1$, and $QR=A$, so $A=QR$ is an exact reduced QR factorization. Its augmented residual vector is $b=(-r,0)^T$, and the exact damped least-squares minimizer is the same $p=h_\alpha$ from step 1.1. [F2, F4, step 1.1, given, construct, algebra]

3.1 Take residual map $g(t)=\varepsilon t-y^\delta$, Jacobian $J=\varepsilon$, $D=1$, current damping $\lambda=\alpha$, a floor $0<\lambda_{\min}\le\alpha$, factors $\gamma=2$, $\eta_1=1/4$, $\eta_2=3/4$, trust radius $\Delta>|h_\alpha|$, and one allowed attempt. The exact gradient is nonzero since $J^Tg(x)=-\varepsilon r\ne0$. The model residual equals the actual residual because $g$ is affine. The predicted reduction is positive because $|\varepsilon h_\alpha-r|=\alpha r/(\varepsilon^2+\alpha)<r$, so the actual-to-predicted ratio is $1$. The trial lies inside the trust radius, hence it is accepted and does not meet the boundary condition for lowering damping; it returns the same damping $\lambda=\alpha$. [A1, F3, step 1.1, step 2.2, step 2.3, given, algebra] ∎
## Remarks

The fixed-damping bound and the residual-forcing parameter rule are different comparisons. The finite safeguarded procedure is used here for its exact finite-dimensional damped-step mechanics; its trust-ratio update does not replace the residual-forcing rule in the regularizing Hilbert-space iteration.
