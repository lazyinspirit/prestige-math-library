---
id: lem-half-order-product-weights-closed-form
kind: lemma
title: Closed forms for the half-order piecewise-linear product weights
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-half-order-product-integration
  - lem-half-order-singular-integral-exists
  - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-nth-roots-exist
justified_by: []
proof_strategy: direct
axiom_use: None. The weight formula follows from explicit one-sided
  antiderivatives and a finite sum over the two adjacent hat panels.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, the endpoint p-test for 0<p<1;
        specialize to p=1/2."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, Method 3.12 and the Nyström/product-quadrature weight
        convention, printed pp. 60–61; the half-order closed form is derived
        locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the nodes, hats, and weights $w_{n,j}(x)=S_x(\phi_{n,j})$ of
[[def-half-order-product-integration]]. For $x\in[0,1]$, $0\le\alpha\le\beta\le1$,
and $u,v\in\mathbb R$, put $C:=u+vx$ and, for $r\ge0$, define
$$P_{x,u,v}(r):=2C\sqrt r+\frac23v r\sqrt r,\qquad   Q_{x,u,v}(r):=2C\sqrt r-\frac23v r\sqrt r.$$
Write $r_+:=\max(r,0)$ and set
$$\mathcal J_x[\alpha,\beta;u,v]:= Q_{x,u,v}((x-\alpha)_+)-Q_{x,u,v}((x-\beta)_+) +P_{x,u,v}((\beta-x)_+)-P_{x,u,v}((\alpha-x)_+).$$
Then this is the exact improper Riemann integral
$$\mathcal J_x[\alpha,\beta;u,v] =\int_\alpha^\beta |x-y|^{-1/2}(u+vy)\,dy,$$
with the integral split at $x$ if $x\in[\alpha,\beta]$. In particular, for
$h=1/n$ and $y_j=jh$,
$$w_{n,0}(x)=\mathcal J_x[0,h;1,-h^{-1}],$$
$$w_{n,j}(x)=\mathcal J_x[y_{j-1},y_j;-y_{j-1}/h,h^{-1}] +\mathcal J_x[y_j,y_{j+1};y_{j+1}/h,-h^{-1}],\quad 1\le j<n,$$
and
$$w_{n,n}(x)=\mathcal J_x[y_{n-1},1;-y_{n-1}/h,h^{-1}].$$
The formulas include $x$ at a panel endpoint and the one-panel case $n=1$.

## Facts & Assumptions

**Given:** $x\in[0,1]$, $0\le\alpha\le\beta\le1$, $u,v\in\mathbb R$, and the hat functions and weights from the product-integration definition.

[F1] [[def-half-order-product-integration]]: each hat is affine on each adjacent panel, the product weight is $w_{n,j}(x)=S_x(\phi_{n,j})$, and the hat formulas are specified at both endpoints.

[F2] [[lem-half-order-singular-integral-exists]]: for every continuous $g$ on $[0,1]$, $S_x(g)$ exists as the improper Riemann integral of $|x-y|^{-1/2}g(y)$.

[F3] [[thm-nth-roots-exist]]: for $r\ge0$, $\sqrt r$ is the unique nonnegative real whose square is $r$ (the case $n=2$).

[F4] [[thm-algebra-of-derivatives]]: sums, scalar multiples, and products of differentiable functions obey their usual derivative formulas.

[F5] [[thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators]]: a continuous integrand with an antiderivative on a closed interval has integral equal to the endpoint difference; the identity integrator gives the ordinary Riemann integral.

[F6] [[thm-continuous-implies-integrable]]: a continuous function on a closed interval has an ordinary Riemann integral.

[F7] [[thm-additivity-over-subintervals]]: splitting a closed interval at an interior point adds the two ordinary Riemann integrals.

[F8] [[thm-chain-rule]]: differentiating a composition differentiable on the relevant open interval multiplies the outer derivative by the inner derivative.

## Proof

**Given:** The data in the Statement, $C=u+vx$, and the functions $P_{x,u,v}$ and $Q_{x,u,v}$.

1.1 Fix $r>0$ and put $q:=\sqrt r$, which is positive by [F3] because $q^2=r>0$. For $s>0$, rationalizing gives $|\sqrt s-q|=|s-r|/(\sqrt s+q)\le|s-r|/q$, so $\sqrt s\to q$ as $s\to r$. For $s\ne r$ the difference quotient is $(\sqrt s-q)/(s-r)=1/(\sqrt s+q)$, and $\left|1/(\sqrt s+q)-1/(2q)\right|=|q-\sqrt s|/(2q(\sqrt s+q))\le|s-r|/(2q^3)$, so $(\sqrt r)'=1/(2\sqrt r)$. By the product rule [F4], $P'_{x,u,v}(r)=Cr^{-1/2}+v\sqrt r=r^{-1/2}(C+vr)$ and $Q'_{x,u,v}(r)=Cr^{-1/2}-v\sqrt r=r^{-1/2}(C-vr)$. Since $u+vy=C+v(y-x)$, [F8] makes $P_{x,u,v}(y-x)$ an antiderivative of $(y-x)^{-1/2}(u+vy)$ for $y>x$. Since $u+vy=C-v(x-y)$, [F8] makes $-Q_{x,u,v}(x-y)$ an antiderivative of $(x-y)^{-1/2}(u+vy)$ for $y<x$. [given, F3, F4, F8, algebra]

2.1 By [F3], for every $\epsilon>0$, $0\le\delta<\epsilon^2$ implies $0\le\sqrt\delta<\epsilon$; hence $\sqrt\delta\to0$ and both $P_{x,u,v}(\delta)$ and $Q_{x,u,v}(\delta)$ tend to zero as $\delta\downarrow0$. If $x>\alpha$, evaluate the left integral on $[\alpha,\min(\beta,x-\delta)]$ for sufficiently small $\delta>0$ using [F6], [F5], and step 1.1. As $\delta\downarrow0$, its value tends to $Q_{x,u,v}((x-\alpha)_+)-Q_{x,u,v}((x-\beta)_+)$. If $x\le\alpha$, the left contribution and this expression are zero. Likewise, if $x<\beta$, evaluate the right integral on $[\max(\alpha,x+\delta),\beta]$ for sufficiently small $\delta>0$; its limit is $P_{x,u,v}((\beta-x)_+)-P_{x,u,v}((\alpha-x)_+)$. If $x\ge\beta$, the right contribution and this expression are zero. Thus both one-sided integrals exist and have the displayed values. Splitting truncated intervals by [F7] and passing to their finite limits gives exactly $\mathcal J_x[\alpha,\beta;u,v]$. [given, F2, F3, F5, F6, F7, step 1.1, algebra]

3.1 On $[0,h]$, $\phi_{n,0}(y)=1-y/h$; for an interior index $j$, its left and right affine pieces are $(y-y_{j-1})/h$ and $(y_{j+1}-y)/h$; on $[y_{n-1},1]$, $\phi_{n,n}(y)=(y-y_{n-1})/h$. Substituting these coefficients into the integral formula of step 2.1 gives the three displayed formulas for $w_{n,j}$. The endpoint cases use positive parts in $\mathcal J$, so a singularity at a split point contributes a zero primitive value, and when $n=1$ the interior-index range is empty while both endpoint formulas remain valid. [given, F1, step 2.1, algebra] ∎
