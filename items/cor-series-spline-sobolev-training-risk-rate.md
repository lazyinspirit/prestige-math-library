---
id: cor-series-spline-sobolev-training-risk-rate
kind: corollary
title: Sobolev rate for spline-series training risk
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [thm-series-training-risk, thm-sobolev-spline-quasi-interpolant-rate, def-regression-target-version, def-axiom-of-choice, def-b-spline-space-and-basis, thm-spline-polynomial-reproduction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, Theorem 32, PDF pp. 28–29
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
    - title: Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OCW 14.385, Fall 2007, Proposition 3 and proof, PDF pp. 10–11
      url: https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf
---

## Statement

Assume AC. Let $a<b$ and let $X,Y$ be real random variables on a common probability space with $E|Y|<\infty$. Choose a regular conditional law $Q(x,dy)$ of $Y$ given $X=x$, and let $g_0$ be the selected Borel regression-function version from [[def-regression-target-version]]. Suppose $P_X$ is supported on $[a,b]$ and has a Lebesgue density bounded almost everywhere by a finite constant $M_X$, $g_0|_{(a,b)}\in W^{s,2}(a,b)$ for an integer $s\ge1$, and $\int (y-g_0(x))^2Q(x,dy)\le\Delta$ for $P_X$-almost every $x$, where $0\le\Delta<\infty$. Fix a degree $p\in\mathbb N_0$ with $p\ge s-1$. For each integer $J\ge1$, use the uniform partition into $J$ cells and the degree-$p$ B-spline space with each interior knot repeated $p+1$ times, so its dimension is $K=(p+1)J$. For $n\ge1$ iid observations from the joint law $P_X(dx)Q(x,dy)$, let $\widehat{\mathbf g}_K$ be the fitted training vector and $\mathbf g_0=(g_0(X_1),\ldots,g_0(X_n))^T$. Then
$$E\left[\frac1n\|\widehat{\mathbf g}_K-\mathbf g_0\|_2^2\right]\le\frac{\Delta K}{n}+C_{s,p,M_X,a,b}\,K^{-2s}\|D^sg_0\|_{L^2(a,b)}^2.$$
Choosing $J\asymp n^{1/(2s+1)}$ (equivalently $K\asymp n^{1/(2s+1)}$ for fixed $p$) gives expected empirical training risk $O(n^{-2s/(2s+1)})$. This is not an independent-test-risk bound.

## Facts & Assumptions

**Given:** AC; integer orders $s\ge1$ and $p\ge s-1$; bounded design density on $[a,b]$; $g_0\in W^{s,2}(a,b)$; and the iid conditional-variance model of [[thm-series-training-risk]].

[A1] Assume AC [[def-axiom-of-choice]], as required by the one-dimensional Sobolev representative supplier used in the approximation theorem.

[A2] $E|Y|<\infty$, $g_0$ is the selected regression-target version, $g_0|_{(a,b)}\in W^{s,2}(a,b)$, the design has a Lebesgue density bounded by $M_X$, $0\le\Delta<\infty$, $s\in\mathbb N$, and $p\in\mathbb N_0$ with $p\ge s-1$.

[F1] The generic empirical training-risk bound is $\Delta K/n$ plus the squared $L^2(P_X)$ approximation error ([[thm-series-training-risk]]).

[F2] For a bounded local quasi-interpolant reproducing $\mathcal P_{s-1}$, the $L^2$ approximation error is bounded by a constant times $h^s\|D^sg_0\|_2$; the cellwise $L^2$ projector on the full-multiplicity uniform spline mesh is an admissible choice ([[thm-sobolev-spline-quasi-interpolant-rate]]).

[F3] Under AC and $E|Y|<\infty$, a supplied regular conditional law gives a Borel conditional-mean version $g_0(x)=\int y\,Q(x,dy)$ on integrable fibers; smoothness of this chosen version is an additional hypothesis ([[def-regression-target-version]]).

[F4] A clamped degree-$p$ knot vector with $J$ uniform cells, each of its $J-1$ interior knots repeated $p+1$ times, has $N=(J+1)(p+1)$ knots and therefore $K=N-p-1=(p+1)J$ B-splines; the B-splines form a basis of the piecewise-polynomial space ([[def-b-spline-space-and-basis]], [[thm-spline-polynomial-reproduction]]).

## Proof

**Proof technique:** direct.

1.1 By [F3], the conditional mean used here is the selected Borel version required by the data-model interface. Let $f$ be its continuous Sobolev representative on $[a,b]$ from [F2]; since $P_X$ has a Lebesgue density, $f=g_0$ $P_X$-almost surely. On each cell of length $h=(b-a)/J$, use the cellwise $L^2$ projector $Q_h$ constructed in [F2] on $f$. The resulting piecewise polynomial belongs to the spline space with full interior multiplicity $p+1$. Its dimension is $K=(p+1)J$ by [F4], so the global basis theorem gives a deterministic coefficient vector $\bar\beta_K$ with $Q_hf=p_K^T\bar\beta_K$. The projector family is local and reproduces $\mathcal P_p$, hence also $\mathcal P_{s-1}$; [F2] gives $\|f-Q_hf\|_{L^2(a,b)}\le C_{s,p}h^s\|D^sf\|_{L^2(a,b)}$. The density bound implies $\int|g_0-p_K^T\bar\beta_K|^2dP_X=\|f-Q_hf\|_{L^2(P_X)}^2\le M_X\|f-Q_hf\|_{L^2(a,b)}^2$. Since $K=(p+1)J$ and $p$ is fixed, $h\asymp K^{-1}$, so the squared approximation error is at most $C_{s,p,M_X,a,b}K^{-2s}\|D^sf\|_2^2$. This supplies the approximation hypothesis of [F1] with $\gamma=s$ and $C=C_{s,p,M_X,a,b}^{1/2}\|D^sf\|_2\ge0$. [A1, A2, F2, F3, F4, given, algebra, construct]

2.1 Insert this approximation bound into [F1]. The result is $\Delta K/n+C_{s,p,M_X,a,b}K^{-2s}\|D^sg_0\|_2^2$. For $J\asymp n^{1/(2s+1)}$, both terms have order $n^{-2s/(2s+1)}$ because $K=(p+1)J$ and $p$ is fixed. The criterion is evaluated at the training inputs in [F1], so no independent test-risk statement follows. [A1, A2, F1, step 1.1, algebra] ∎
