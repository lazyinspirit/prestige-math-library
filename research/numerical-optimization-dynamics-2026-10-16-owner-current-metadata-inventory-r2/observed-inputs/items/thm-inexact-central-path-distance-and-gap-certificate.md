---
id: thm-inexact-central-path-distance-and-gap-certificate
kind: theorem
title: "A verified inexact gradient residual bounds central-path distance and objective error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-conic-optimization-primal-dual-models
  - def-barrier-central-path-and-newton-residuals
  - lem-loghom-barrier-gradient-is-dual
  - thm-central-path-barrier-gap-and-dual-certificate
  - thm-inexact-gradient-residual-distance-certificate
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §§11.2 and 11.5, barrier center and self-concordant local geometry."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15: Path-following methods"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, exact central-path objective-gap bound; inexact-gradient distance is supplied by the cited OPT0 theorem."
---

## Statement

Consider the conic model with proper cone $K$, equality $Ax=b$, and barrier objective $\Phi_t(x)=t c^Tx+F(h-Gx)$ as in [[def-barrier-central-path-and-newton-residuals]], where $F$ is a $\nu$-log-homogeneous self-concordant barrier on $\operatorname{int}K$ with parameter $\nu>0$. Parameterize the affine feasible space by $x=x_0+Pz$, where $Ax_0=b$ and the columns of $P$ are an orthonormal basis of $\ker A$. Let $\varphi_t(z)=\Phi_t(x_0+Pz)$ on an open convex region containing an exact central minimizer $z_*$ and a strict feasible candidate $\widetilde z$. Assume $D^2\varphi_t(z)\succeq\mu I$ on that region for a known $\mu>0$, and the minimum is attained in its interior. If $\eta,\delta\ge0$ and a computed gradient $\widehat g$ has independently verified bounds $\|\widehat g\|_2\le\eta$ and $\|\widehat g-\nabla\varphi_t(\widetilde z)\|_2\le\delta$, then
$$\|\widetilde x-x_*(t)\|_2\le\frac{\eta+\delta}{\mu},\qquad c^T\widetilde x-p^*\le\frac{\nu}{t}+\|c\|_2\frac{\eta+\delta}{\mu},$$
provided $\widetilde x$ is primal feasible. A tolerance or software stopping flag alone supplies neither verified bound.

## Facts & Assumptions

**Given:** The affine parameterization, uniform restricted Hessian lower bound, attained central minimizer, primal feasibility, and two verified gradient bounds.

[F1] Under a Hessian lower bound $D^2\varphi\succeq\mu I$, a verified computed-gradient residual $\eta$ and discrepancy $\delta$ imply distance at most $(\eta+\delta)/\mu$ from the exact minimizer ([[thm-inexact-gradient-residual-distance-certificate]]).

[F2] For a $\nu$-log-homogeneous barrier, $-\nabla F(s)\in K^*$ and $DF(s)[s]=-\nu$ ([[lem-loghom-barrier-gradient-is-dual]]).

[F3] When the primal value is finite, an exact central point has objective gap at most $\nu/t$ ([[thm-central-path-barrier-gap-and-dual-certificate]]).

[F4] Euclidean Cauchy--Schwarz gives $|a^Tb|\le\|a\|_2\|b\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F5] At an exact conic barrier minimizer, $t c-G^*\nabla F(s)+A^Tw=0$ for some equality multiplier $w$ ([[def-barrier-central-path-and-newton-residuals]]).

## Proof

1.1 The linear map $z\mapsto x_0+Pz$ preserves Euclidean distances because $P^TP=I$. The restriction $\varphi_t$ is $C^2$ on the stated open convex coordinate region, its exact minimizer is attained in the interior, and the assumed Hessian lower bound is precisely the strong-convexity hypothesis in [F1]. Applying [F1] gives $\|\widetilde z-z_*\|_2\le(\eta+\delta)/\mu$, hence the same bound for $\widetilde x-x_*(t)$. [F1, given, algebra]

1.2 Let $x_*=x_0+Pz_*$ and $s_*=h-Gx_*$. By [F5], $t c-G^*\nabla F(s_*)+A^Tw=0$ for some $w$. Set $\widehat z_*=-\nabla F(s_*)/t\in K^*$ by [F2] and $y_*=-w/t$. The stationarity equation gives $A^Ty_*-G^*\widehat z_*=c$, so $(y_*,\widehat z_*)$ is dual feasible. The conic gap identity in [[def-conic-optimization-primal-dual-models]] then gives a finite dual lower bound on every primal feasible objective. Since $x_*$ is primal feasible with finite objective, this proves that $p^*$ is finite, establishing the finiteness hypothesis needed for [F3]. [F2, F5, given, algebra]

2.1 Since $P^TP=I$, $|c^T(\widetilde x-x_*(t))|=|(P^Tc)^T(\widetilde z-z_*)|\le\|c\|_2(\eta+\delta)/\mu$ by [F4] and $\|P^Tc\|_2\le\|c\|_2$. Add the exact-center gap [F3]. Primal feasibility of $\widetilde x$ makes $p^*\le c^T\widetilde x$, giving the stated candidate bound. [F3, F4, step 1.1, step 1.2, given, algebra] ∎

