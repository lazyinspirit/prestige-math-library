---
id: thm-tamed-euler-strong-order-half
kind: theorem
title: "Strong order one-half for tamed Euler under polynomial drift growth"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-tamed-euler-superlinear-drift
  - lem-tamed-euler-uniform-moment-bounds
  - thm-superlinear-sde-global-existence-and-moments
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - lem-brownian-ito-integral-l1-maximal-bound
  - lem-brownian-ito-integral-bdg-moment-bound
  - def-standard-normal-and-normal-laws
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-gronwall-integral-inequality
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, Theorem 1.1 and proof"
      url: "https://arxiv.org/pdf/1010.3756"
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume AC. Let $d,m\ge1$, $T>0$, $b\in C^1(\mathbb R^d;\mathbb R^d)$,
and $\sigma:\mathbb R^d\to\mathbb R^{d\times m}$ be globally Lipschitz.
Suppose constants $L,C<\infty$ and an integer $q\ge1$ satisfy
$$\langle x-y,b(x)-b(y)\rangle\le L|x-y|^2, \qquad \|Db(x)\|\le C(1+|x|^q).$$
Let $X$ be the unique strong solution of the corresponding autonomous SDE
from [[thm-superlinear-sde-global-existence-and-moments]], with initial state
$\xi$ having all finite moments. For $N\ge\max(1,\lceil T\rceil)$ put
$h=T/N$, and let $\widetilde Y$ be the continuous tamed Euler interpolation from
[[alg-tamed-euler-superlinear-drift]]. There is a constant $C_T$, independent
of $N$, such that
$$\mathbb E\sup_{0\le t\le T}|X_t-\widetilde Y_t|^2\le C_T h.$$
Thus the tamed Euler method has strong order one-half in the path-supremum
$L^2$ norm under the displayed hypotheses.

## Facts & Assumptions

**Given:** AC; the autonomous SDE and coefficient hypotheses in the Statement; $h=T/N\le1$; and the tamed update and interpolation.

[F1] The local Itô SDE definition specifies the filtered Brownian conventions and the integral equation that a local strong solution must satisfy; it does not assert existence. The global adapted continuous solution used here is supplied by [F2]. [[def-locally-lipschitz-ito-sde-and-maximal-solution]]

[F2] Under the stated one-sided Lipschitz, polynomial derivative, and diffusion Lipschitz assumptions, $X$ is global and has finite path-supremum moments of every finite order. [[thm-superlinear-sde-global-existence-and-moments]]

[F3] The tamed grid values satisfy $\sup_N\max_n\mathbb E|Y_n|^p<\infty$ for every finite $p\ge1$. [[lem-tamed-euler-uniform-moment-bounds]]

[F4] The algorithm gives $\widetilde Y_t=Y_n+(t-t_n)b(Y_n)/(1+h|b(Y_n)|)+\sigma(Y_n)(W_t-W_{t_n})$ on $[t_n,t_{n+1}]$. [[alg-tamed-euler-superlinear-drift]]

[F5] For a continuous Brownian Itô process $Z$ and $f\in C^{1,2}$, Itô's formula for $|Z|^2$ has drift $2\langle Z,b_Z\rangle+\|\sigma_Z\|_F^2$ and martingale integrand $2Z^{\mathsf T}\sigma_Z$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F6] For a finite-energy row-vector integrand $H$ against an $m$-dimensional Brownian motion, $\mathbb E\sup_{s\le t}|\int_0^sH_u\,dW_u| \le16\sqrt m\,\mathbb E(\int_0^t\|H_u\|_2^2du)^{1/2}$. [[lem-brownian-ito-integral-l1-maximal-bound]]

[F7] Cauchy--Schwarz for random variables bounds $\mathbb E|UV|\le(\mathbb E|U|^2)^{1/2}(\mathbb E|V|^2)^{1/2}$. [[cor-cauchy-schwarz-for-random-variables]]

[F8] If $v(t)\le A+\int_0^tBv(s)ds$ with nonnegative continuous $v$ and constants $A,B\ge0$, then $v(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F9] A standard normal variable has finite absolute moments of every finite order, since $\int_0^\infty x^r e^{-x^2/2}dx<\infty$; scaling gives $\mathbb E|W_s-W_t|^r=C_{r,m}|s-t|^{r/2}$. [[def-standard-normal-and-normal-laws]]

[F10] Tonelli's theorem interchanges expectation and time integration for the nonnegative error majorant used below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F11] For fixed finite $N$, the interpolation has finite fourth path-supremum moment: the grid values and coefficients have finite eighth moments by [F3] and polynomial drift growth, while the Brownian path supremum has finite eighth moment by the $p=8$ maximal Itô-integral bound with constant integrand. Apply Cauchy--Schwarz to each product of a grid diffusion coefficient and a Brownian interval supremum, then sum over the finitely many intervals in [F4]. In particular the second path-supremum moment is finite as well. [[lem-brownian-ito-integral-bdg-moment-bound]]

[F12] Since $e$ has continuous paths and $\mathbb E\sup_{s\le T}|e_s|^2<\infty$ by [F2] and [F11], dominated convergence makes $v(t)=\mathbb E\sup_{s\le t}|e_s|^2$ continuous. [[thm-dominated-convergence]]

[A1] AC is inherited from the SDE and Brownian Itô interfaces; the estimates below use only the specified Brownian increments and stopping conventions. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions and facts in the Statement and Facts.

1.1 Let $\underline Y_s=Y_n$ on $[t_n,t_{n+1})$ and $\delta_s=\widetilde Y_s-\underline Y_s$. Induction in the recursion shows $Y_n$ is $\mathcal F_{t_n}$-measurable, so the step coefficient processes have predictable representatives, using $Y_n$ on $(t_n,t_{n+1}]$ for stochastic integrands; changing values at grid times does not change the integrals. The interpolation is adapted and continuous and satisfies $\widetilde Y_t=\xi+\int_0^t\frac{b(\underline Y_s)} {1+h|b(\underline Y_s)|}\,ds +\int_0^t\sigma(\underline Y_s)\,dW_s.$ Its coefficient energies are finite by [F2]–[F3] and the polynomial growth of $b$. Hence $e_t=X_t-\widetilde Y_t$ is a continuous Brownian Itô process and [F5] applies. [F1, F2, F3, F4, F5, given]

1.2 On an interval $[t_n,t_{n+1}]$, $\delta_s=(s-t_n)b_h(Y_n)+\sigma(Y_n)(W_s-W_{t_n})$. For $r=2,4$, $|(s-t_n)b_h(Y_n)|\le h|b(Y_n)|$, and the Brownian increment is independent of $\mathcal F_{t_n}$ with $r$th moment $C_{r,m}(s-t_n)^{r/2}$ by [F9]. The moment bounds [F3], polynomial growth $|b(x)|\le C_1(1+|x|^{q+1})$, and linear growth of $\sigma$ give $\sup_n\mathbb E|b(Y_n)|^r<\infty$ and $\sup_n\mathbb E\|\sigma(Y_n)\|_F^r<\infty$. Since $h^r\le h^{r/2}$ for $h\le1$, these estimates imply $$\sup_{n<N}\sup_{s\in[t_n,t_{n+1}]}\mathbb E|\delta_s|^r\le C_rh^{r/2},\qquad r=2,4.$$ Also, with $b_h(y)=b(y)/(1+h|b(y)|)$, $|b(y)-b_h(y)|\le h|b(y)|^2$, so $\sup_n\mathbb E|b(Y_n)-b_h(Y_n)|^2\le Ch^2$ by [F3]. [F3, F4, F9, given, algebra]

2.1 Put $G_s=\sigma(X_s)-\sigma(\underline Y_s)$ and $A_s=1+|X_s|^q+|\underline Y_s|^q$. The derivative bound and integration along the segment from $X_s$ to $\underline Y_s$ give $|b(X_s)-b(\underline Y_s)|\le C A_s|X_s-\underline Y_s|$. Since $X_s-\underline Y_s=e_s+\delta_s$, one-sided Lipschitzness gives $2\langle e_s,b(X_s)-b(\underline Y_s)\rangle =2\langle X_s-\underline Y_s,b(X_s)-b(\underline Y_s)\rangle -2\langle\delta_s,b(X_s)-b(\underline Y_s)\rangle \le C|e_s|^2+C(1+A_s^2)|\delta_s|^2.$ Here the second term uses $2A_s|\delta_s||e_s|\le |e_s|^2+A_s^2|\delta_s|^2$. The taming correction contributes at most $|e_s|^2+|b(\underline Y_s)-b_h(\underline Y_s)|^2$, and $\|G_s\|_F^2\le C(|e_s|^2+|\delta_s|^2)$ by global Lipschitzness of $\sigma$. Thus a nonnegative $H_s=C\bigl(|e_s|^2+(1+A_s^2)|\delta_s|^2+|b(\underline Y_s)-b_h(\underline Y_s)|^2\bigr)$ satisfies $$2\langle e_s,b(X_s)-b_h(\underline Y_s)\rangle+\|G_s\|_F^2\le H_s.$$ By [F2]–[F3], Cauchy--Schwarz [F7], and the $r=2,4$ increment estimates in step 1.2, Tonelli [F10] gives $\mathbb E\int_0^t H_sds\le C\int_0^t v(s)ds+Ch$, where $v(t)=\mathbb E\sup_{s\le t}|e_s|^2$. [F2, F3, F7, F10, step 1.2, given, algebra]

2.2 The martingale in Itô's identity is $M_t=2\int_0^t e_s^{\mathsf T}G_s\,dW_s$. For fixed $N$, [F2], [F3], [F11], and Cauchy--Schwarz [F7] give $\mathbb E\int_0^T|e_s|^2\|G_s\|_F^2ds<\infty$, since $e$ has a finite fourth path-supremum moment and $G_s$ has uniformly finite fourth moments. Thus [F6] applies and gives $\mathbb E\sup_{s\le t}|M_s| \le32\sqrt m\, \mathbb E\left[\sup_{s\le t}|e_s| \left(\int_0^t\|G_s\|_F^2ds\right)^{1/2}\right].$ Using Cauchy--Schwarz [F7] and $uv\le\varepsilon u^2+(4\varepsilon)^{-1}v^2$ (which follows by expanding $(\sqrt\varepsilon u-v/(2\sqrt\varepsilon))^2\ge0$), the Lipschitz bound on $\sigma$, and step 1.2, this is at most $\tfrac12v(t)+C\int_0^t v(s)ds+Ch$. [F2, F3, F6, F7, F11, step 1.2, algebra]

3.1 For each finite $N$, [F2] and [F11] give $\mathbb E\sup_{s\le T}|e_s|^2<\infty$, and [F12] makes $v(t)$ continuous. Taking the supremum over times up to $t$ in Itô's identity [F5], the pointwise majorant in step 2.1 gives $\sup_{u\le t}\int_0^u H_sds\le\int_0^tH_sds$; now take expectations and insert steps 2.1–2.2. Moving $v(t)/2$ to the left gives $v(t)\le C\int_0^t v(s)ds+Ch$. Gronwall [F8] yields $v(T)\le C_T h$. AC is inherited exactly through [A1], so the stated strong order follows. [A1, F2, F3, F5, F8, F10, F11, F12, step 2.1, step 2.2, algebra] ∎
