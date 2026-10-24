---
id: lem-self-concordant-local-newton-calculus
kind: lemma
title: "Local Hessian comparison, damped Newton decrement, and center distance"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-self-concordant-log-homogeneous-barrier]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §9.6.4 and Chapter 11 §11.5, local Hessian comparison and damped Newton analysis."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 14: Self-concordant functions"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture14.pdf"
      locator: "Full lecture, Definition 14.1, local Hessian metric and Theorem 14.1."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15: Path-following methods"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, Proposition 15.1 and path-following decrement estimate."
---

## Statement

Let $F$ be a self-concordant barrier as in [[def-self-concordant-log-homogeneous-barrier]]. Put $H_x=D^2F(x)$, $\lambda=\lambda_F(x)$, and let $d=-H_x^{-1}\nabla F(x)$ be the Newton direction when the ambient Hessian is used. The analogous statements hold on an affine feasible subspace with its restricted Hessian and gradient.

For $h\in E$, put $r=\|h\|_x$. Whenever the whole segment $x+[0,t]h$ lies in $D$, the local metric satisfies the lower bound below. If $tr<1$ (with no restriction when $r=0$), Dikin inclusion guarantees that the segment lies in $D$ and the upper bound also holds:
$$\frac{r}{1+tr}\le\|h\|_{x+th}\le\frac{r}{1-tr}.$$
If $tr<1$, then
$$ (1-tr)^2H_x\preceq H_{x+th}\preceq(1-tr)^{-2}H_x. $$
For every $\lambda\ge0$, the damped step $y=x+d/(1+\lambda)$ lies in $D$ and obeys $\lambda_F(y)\le2\lambda^2$. If $\lambda_F(x)<1$, then $F$ has a unique attained global minimizer $x_*$ in $D$, and
$$\|x-x_*\|_x\le\frac{\lambda_F(x)}{1-\lambda_F(x)}.$$

## Facts & Assumptions

**Given:** The self-concordance, Dikin inclusion, and local norm definitions in [[def-self-concordant-log-homogeneous-barrier]].

[F1] The defining mixed derivative bound is $|D^3F(x)[u,v,v]|\le2\|u\|_x\|v\|_x^2$ ([[def-self-concordant-log-homogeneous-barrier]]).

[F2] The local norm is induced by the positive-definite Hessian $H_x$ and its dual norm is induced by $H_x^{-1}$ ([[def-self-concordant-log-homogeneous-barrier]]).

## Proof

1.1 Fix $h\ne0$ and put $q(t)=\|h\|_{x+th}$. Differentiation gives $q'(t)=D^3F(x+th)[h,h,h]/(2q(t))$, so [F1] implies $|q'(t)|\le q(t)^2$. Therefore $|(1/q)'|\le1$. Integrating from $0$ to $t$ yields $1/r-t\le1/q(t)\le1/r+t$ whenever $tr<1$, and the lower inequality $1/q(t)\le1/r+t$ holds along every segment in $D$. Taking reciprocals gives the asserted two-sided metric bound for $tr<1$ and the lower bound for all $t\ge0$. [given, F1, algebra]

2.1 For a fixed $v\ne0$, put $p(t)=\sqrt{D^2F(x+th)[v,v]}$. By [F1], $|(\log p)'|=|D^3F[h,v,v]|/(2p^2)\le q(t)$. When $tr<1$, step 1.1 gives $q(t)\le r/(1-tr)$; integration gives $|\log(p(t)/p(0))|\le-\log(1-tr)$. Squaring this inequality for every $v$ proves the stated Hessian comparison. [F1, step 1.1, algebra]

2.2 For any $y\in D$, put $h=y-x$ and $r=\|h\|_x$. Taylor's formula with integral remainder and step 1.1 give $F(y)\ge F(x)+DF(x)[h]+r^2\int_0^1\frac{1-t}{(1+tr)^2}\,dt=F(x)+DF(x)[h]+r-\log(1+r)$. The dual-norm inequality $DF(x)[h]\ge-\lambda_F(x)r$ makes the right side at least $F(x)+(1-\lambda_F(x))r-\log(1+r)$, which tends to $+\infty$ as $r\to\infty$ when $\lambda_F(x)<1$. Under this condition the sublevel set $\{y\in D:F(y)\le F(x)\}$ is bounded. [F1, F2, step 1.1, algebra]

3.1 Since $\|d\|_x=\lambda$, the damped displacement $h=d/(1+\lambda)$ has local length $r=\lambda/(1+\lambda)<1$, so Dikin inclusion places $y$ in $D$. The gradient expansion is $\nabla F(y)=\nabla F(x)+H_xh+R$, where $R=\int_0^1(H_{x+th}-H_x)h\,dt$. The first two terms have $x$-dual norm $\lambda^2/(1+\lambda)$. By step 2.1, $\|R\|_{x,*}\le r\int_0^1((1-tr)^{-2}-1)\,dt=r^2/(1-r)=\lambda^2/(1+\lambda)$. Thus $\|\nabla F(y)\|_{x,*}\le2\lambda^2/(1+\lambda)$. Since $H_y\succeq(1-r)^2H_x$, the dual norm at $y$ is at most $(1-r)^{-1}=1+\lambda$ times the $x$-dual norm, giving $\lambda_F(y)\le2\lambda^2$. [F2, step 2.1, algebra, construct]

3.2 Assume now $\lambda_F(x)<1$. The sublevel set in step 2.2 cannot accumulate at a finite boundary point of $D$, because $F$ blows up there while its values on the sublevel are at most $F(x)$. It is closed in $E$ and bounded, hence compact. Continuity gives a minimizer on it, which is a global minimizer on $D$; positive-definite Hessian makes it unique. [given, step 2.2, construct]

4.1 Let $h=x_*-x$ and $r=\|h\|_x$. If $r=0$ the claim holds. Otherwise, stationarity at the minimizer from step 3.2 and the fundamental theorem of calculus give $-\nabla F(x)^Th=\int_0^1\|h\|_{x+th}^2\,dt$. By the global lower bound from step 1.1, this is at least $r^2\int_0^1(1+tr)^{-2}\,dt=r^2/(1+r)$. Cauchy–Schwarz in the local metric bounds it above by $\lambda_F(x)r$. Dividing by $r$ and rearranging gives $r\le\lambda_F(x)/(1-\lambda_F(x))$. [step 1.1, step 3.2, F2, algebra] ∎
