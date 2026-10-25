---
id: thm-periodic-c1-velocity-has-global-characteristic-flow
kind: theorem
title: "A periodic C1 velocity has a global characteristic flow on a finite horizon"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-linear-transport-equation-and-its-characteristic-flow
  - thm-picard-lindelof-local-existence-and-uniqueness
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-mean-value-inequality-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Let $d\ge1$, $T>0$, $\ell_j>0$, and let $J\subseteq\mathbb R$ be an open interval containing $[0,T]$. Suppose $b:J\times\mathbb R^d\to\mathbb R^d$ is $C^1$ and periodic in $x_j$ with period $\ell_j$ for every $j$. Choose a compact interval $K\subset J$ with $[0,T]\subset\operatorname{int}K$, and put $M_K:=\sup_{K\times[0,\ell_1]\times\cdots\times[0,\ell_d]}\|b\|_2$. For every $s\in[0,T]$ and $x\in\mathbb R^d$, there is a unique solution $X(\cdot;s,x)$ of
$$X'(t)=b(t,X(t)),\qquad X(s;s,x)=x,$$
on the whole interval $[0,T]$. The lifted flow is periodic-equivariant:
$$X(t;s,x+\boldsymbol k\boldsymbol\ell)=X(t;s,x)+\boldsymbol k\boldsymbol\ell\qquad(\boldsymbol k\in\mathbb Z^d),$$
where $\boldsymbol k\boldsymbol\ell=(k_1\ell_1,\ldots,k_d\ell_d)$. If $M_T:=\sup_{[0,T]\times[0,\ell_1]\times\cdots\times[0,\ell_d]}\|b\|_2$, then
$$\|X(t;s,x)-x\|_2\le M_T|t-s|\qquad(t\in[0,T]).$$
Thus each characteristic stays in a compact tube $[0,T]\times\overline B(x,M_TT+1)$.

## Facts & Assumptions

**Given:** $d,T,\boldsymbol\ell,J,K,b,s,x$ as in the Statement.

[F1] [[def-linear-transport-equation-and-its-characteristic-flow]]: a characteristic solves $X'(t)=b(t,X(t))$; a single-valued flow requires existence and uniqueness for each initial value.

[F2] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field locally Lipschitz in the state has a unique local solution; on a compact cylinder with field bound $M_0$ and state Lipschitz constant $L_0$, it applies on a symmetric interval of radius $\delta$ when $\delta M_0\le r$ and $L_0\delta<1$ for the cylinder state radius $r$.

[F3] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a solution satisfies $X(t)=X(s)+\int_s^t b(r,X(r))\,dr$ with the oriented integral.

[F4] [[thm-norm-inequality-for-the-vector-valued-integral]]: $\|\int_a^b f\|_2\le\int_a^b\|f\|_2$ for integrable vector-valued $f$ and ordered endpoints $a\le b$; a reversed oriented integral is first negated and rewritten with ordered endpoints.

[F5] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a uniform derivative bound $\|Df(z)v\|_2\le L\|v\|_2$ gives the corresponding $L$-Lipschitz bound.

## Proof

1.1 Periodicity and continuity on the compact cylinder $K\times[0,\ell_1]\times\cdots\times[0,\ell_d]$ give finite bounds $M_K:=\sup\|b\|_2$ and $L:=\sup\|D_xb\|$ there. The same bounds hold on all spatial translates. By [F5] each time slice is globally $L$-Lipschitz in $x$. Since $[0,T]\subset\operatorname{int}K$, choose $\delta>0$ small enough that every radius-$\delta$ time interval centered in $[0,T]$ lies in $K$, $\delta(M_K+1)\le1$, and $\delta(L+1)<1$. On each corresponding unit-radius state cylinder, [F2] therefore gives a unique local solution through its center. [given, F2, F5, choose]

2.1 Partition the finite interval between $s$ and any $t\in[0,T]$ into finitely many subintervals of length at most $\delta$. Apply [F2] successively at each endpoint, using the preceding endpoint value as the next initial state. The resulting curves agree on their shared endpoints and have the same derivative $b(r,X(r))$ there, so they concatenate to a solution on $[0,T]$. Repeated local uniqueness from [F2] proves uniqueness on the concatenated interval. This is a finite construction and selects no family of local solutions over an infinite index set. [given, F2, step 1.1, construct]

3.1 For the constructed solution on $[0,T]$, [F3] and [F4] give $\|X(t;s,x)-x\|_2\le\int_{\min(s,t)}^{\max(s,t)}\|b(r,X(r))\|_2\,dr\le M_T|t-s|$. Thus its graph lies in the stated compact tube. For a period vector $\boldsymbol k\boldsymbol\ell$, the curve $X(t;s,x+\boldsymbol k\boldsymbol\ell)-\boldsymbol k\boldsymbol\ell$ solves the same IVP as $X(t;s,x)$ by periodicity of $b$; uniqueness gives periodic equivariance. [given, F1, F3, F4, step 2.1, algebra] ∎
