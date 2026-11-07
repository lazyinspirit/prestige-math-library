---
id: thm-voronoi-divisor-summation-formula
kind: theorem
title: "Meurman's endpoint-averaged pointwise divisor Voronoï identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: [def-dirichlet-divisor-error-term, def-divisor-counting-function, def-euler-mascheroni-constant, thm-divisor-function-subpolynomial-bound, lem-voronoi-damped-sine-cosine-kernel-asymptotic, lem-voronoi-damped-divisor-kernel-inversion, lem-voronoi-divisor-oscillatory-series-convergence]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A Simple Proof of Voronoi's Identity"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "printed p. 265, formulas (1.1)–(1.2), and §§2–8"
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1, formula (1.3), normalization comparison"
verification:
  precheck: pending
---

## Statement

For a positive integer $n$, let $d(n)$ be its number of positive divisors; for real $u>0$ that is not an integer put $d(u)=0$. All sums indexed by $n$ or $m$ below are over positive integers. For $x>0$, define the endpoint-averaged divisor error
$$\Delta_M(x):=\sum_{\substack{n\in\mathbb Z_{>0}\\n<x}}d(n)+\frac12d(x)-x(\log x+2\gamma-1)-\frac14,$$
where $\gamma$ is the Euler–Mascheroni constant. Then
$$\Delta_M(x)=\frac2\pi\sum_{m=1}^{\infty}\frac{d(m)}m\int_0^{\infty}\cos(2\pi u)\sin\!\left(\frac{2\pi mx}{u}\right)\,du \qquad(x>0).$$
The displayed integral is the improper integral at $0$ and $+\infty$. The series is boundedly convergent as $x$ ranges over every compact interval in $(0,\infty)$, and converges uniformly on every such interval containing no integer.

## Statement references

[Meurman, printed p. 265, formulas (1.1)–(1.2), and §§2–8](https://numdam.org/item/AST_1992__209__265_0.pdf)

[Miller and Schmid, §1, formula (1.3)](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** The parameters and divisor-function conventions in the statement.

[F1] [[lem-voronoi-damped-sine-cosine-kernel-asymptotic]] gives the existence of $F(t,v)$, its $v\downarrow0$ limit, and $F(t,v)=t^{1/4}e^{-2v\sqrt t}\cos(4\pi\sqrt t-\pi/4)/(2\sqrt2)+O_{t_0}(t^{-1/4})$, uniformly for $t\ge t_0>0$ and $0\le v\le1/2$.

[F2] [[lem-voronoi-damped-divisor-kernel-inversion]] gives absolute convergence of $A_v(x):=(2/\pi)\sum_{n\ge1}d(n)F(nx,v)/n$ for $v>0$ and $A_v(x)\to\Delta_M(x)$ for every $x>0$.

[F3] [[lem-voronoi-divisor-oscillatory-series-convergence]] gives convergence of $\sum_{n\ge1}d(n)x^{1/4}n^{-3/4}\cos(4\pi\sqrt{nx}-\pi/4)$, uniform boundedness of its partial sums on positive compact intervals, and uniform convergence on such intervals containing no integer.

[F4] [[thm-divisor-function-subpolynomial-bound]] gives $d(n)\ll_\varepsilon n^\varepsilon$; choosing $\varepsilon=1/8$ makes $\sum_n d(n)n^{-5/4}$ finite. [[def-divisor-counting-function]], [[def-euler-mascheroni-constant]], and [[def-dirichlet-divisor-error-term]] fix the arithmetic conventions.

## Proof

**Given:** A real $x>0$.

1.1 By [F1] at $v=0$, $d(n)F(nx,0)/n$ is $1/(2\sqrt2)$ times the $n$th term of [F3], plus $O_J(d(n)n^{-5/4})$ uniformly for $x$ in any fixed positive compact interval $J$. The error series converges absolutely and uniformly by [F4], by bounding every tail by $C_J\sum_{n>M}d(n)n^{-5/4}$. Thus $S(x):=(2/\pi)\sum_{n\ge1}d(n)F(nx,0)/n$ exists, its partial sums are uniformly bounded on $J$, and its convergence is uniform on $J$ whenever $J$ contains no integer. [F1, F3, F4, algebra]

2.1 For fixed $x$, let $w_n(v)=e^{-2v\sqrt{nx}}$. The asymptotics in [F1] at $v$ and zero show $|F(nx,v)-w_n(v)F(nx,0)|\le C_xn^{-1/4}$, uniformly $0<v\le1/2$. The difference tends to zero for each $n$ by the integral limit in [F1]. Hence $\sum_{n\ge1}(d(n)/n)(F(nx,v)-w_n(v)F(nx,0))\to0$: for a given tolerance first make its uniformly summable tail small using [F4], then take $v$ small for the remaining finitely many terms. [F1, F4, step 1.1, algebra]

2.2 For the convergent scalar series $\sum c_n$, where $c_n=d(n)F(nx,0)/n$, decreasing weights $w_n(v)\in[0,1]$ tending to zero as $n\to\infty$ satisfy $\sum_n w_n(v)c_n\to\sum_nc_n$ as $v\downarrow0$. Indeed, choose $M$ so that every partial sum $\sum_{n=M}^L c_n$ has modulus at most $\eta$. Finite summation by parts bounds every weighted tail by $\eta(w_M+\sum_{n\ge M}(w_n-w_{n+1}))\le2\eta$. The finite prefix tends to its unweighted prefix since each $w_n(v)\to1$. This proves the claim, then letting $\eta\downarrow0$. [step 1.1, choose, algebra]

3.1 Combining steps 2.1 and 2.2 gives $A_v(x)\to S(x)$. By [F2] the same left side tends to $\Delta_M(x)$, so $S(x)=\Delta_M(x)$. The convergence and compact uniform bounds already proved in step 1.1 give the two convergence clauses in the statement. This proves the identity for every $x>0$, including integral $x$ with its stated half weight. [F2, step 1.1, step 2.1, step 2.2, algebra] ∎
