---
id: lem-armijo-backtracking-terminates-for-strict-descent-directions
kind: lemma
title: "Armijo backtracking terminates for strict descent directions"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-damped-newton
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - lem-bernoulli-inequality
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §9.2 backtracking line search and §9.5 Algorithm 9.5, PDF pp. 477–483 and 498–505"
---

## Statement

For either backtracking procedure in [[alg-gradient-descent]] and
[[alg-damped-newton]], suppose the objective is differentiable at a point
$x$ of an open domain and the current direction $p$ satisfies $Df(x)[p]<0$.
If the line search starts at $t=1$, uses a factor $\beta\in(0,1)$, and
accepts when
$$f(x+tp)\le f(x)+\alpha t\,Df(x)[p]$$
for a fixed $\alpha\in(0,1)$, it accepts after finitely many reductions.
For the Newton branch, assume the current Hessian is symmetric positive
definite.

## Facts & Assumptions


**Given:** An open $U\subseteq\mathbb R^d$, a Fréchet differentiable
$f:U\to\mathbb R$, $x\in U$, $\alpha,\beta\in(0,1)$, and a direction $p$
with $Df(x)[p]<0$; for the Newton branch, a symmetric positive-definite
Hessian.

[F1] [[alg-gradient-descent]]: its backtracking branch uses $p=-\nabla f(x)$,
starts at $t=1$, multiplies rejected steps by $\beta$, and checks the
Armijo inequality.

[F2] [[alg-damped-newton]]: its direction solves $H(x)p=-\nabla f(x)$ using
Cholesky when $H(x)$ is symmetric positive definite, and its line search
uses the same geometric backtracking rule.

[F3] [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]:
$Df(x)$ is real-linear; [[def-jacobian-matrix-and-gradient]] defines the
gradient by the partial derivatives in the standard basis.

[F4] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]:
a symmetric positive-definite Hessian has an invertible Cholesky factor.

[F5] [[lem-bernoulli-inequality]]: $(1+c)^n\ge1+nc$ for $c\ge0$ and
$n\in\mathbb N$.

[F6] [[thm-of-archimedean]]: the natural numbers are cofinal in $\mathbb R$.

## Proof

1.1 By linearity of $Df(x)$ and its values on the standard basis, $Df(x)[p]=\langle\nabla f(x),p\rangle$. In the gradient branch, if $\nabla f(x)\ne0$, then $Df(x)[-\nabla f(x)]=-\|\nabla f(x)\|^2<0$ by [F1]. In the Newton branch, write $g=\nabla f(x)$ and $Hp=-g$. If $g\ne0$, then $p\ne0$ by [F4] and $Df(x)[p]=g^Tp=-p^THp<0$, since $H$ is symmetric positive definite by [F2] and [F4]. [F1, F2, F3, F4, given, algebra]

1.2 Set $d:=-Df(x)[p]>0$. Fréchet differentiability gives $[f(x+tp)-f(x)]/t\to-d$ as $t\downarrow0$. Choose $\delta>0$ small enough that $x+tp\in U$ and this quotient is less than $-d+(1-\alpha)d/2=-(1+\alpha)d/2\le-\alpha d$ whenever $0<t<\delta$. Then every such trial satisfies the Armijo test. [F3, given, choose]

1.3 The trials are $t_n=\beta^n$. Put $c=\beta^{-1}-1>0$. By [F5], $\beta^{-n}=(1+c)^n\ge1+nc$, hence $t_n\le(1+nc)^{-1}$. By [F6], for any $\delta>0$ some $n$ is large enough that $(1+nc)^{-1}<\delta$; thus $t_n\to0$. [F5, F6, given, algebra]

2.1 Step 1.2 supplies a positive interval of accepted trial sizes. The geometric sequence shown in step 1.3 eventually tests such a size, so the prescribed loop accepts after finitely many reductions in either algorithm. [step 1.1, step 1.2, step 1.3] ∎
