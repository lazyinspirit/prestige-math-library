---
id: ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete
kind: example
title: An open Euclidean unit ball is metrically incomplete
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-complete-metric-space, def-cauchy-in-metric, def-metric-convergence, def-metric-space, lem-metrics-on-rn, lem-standard-basis-of-f-n, def-euclidean-inner-product, cor-archimedean-reciprocal, lem-of-inverse-positive]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, §11.5
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

For every $n\ge1$, the open Euclidean unit ball $B=\{x\in\mathbb R^n:\|x\|<1\}$ with the restricted Euclidean distance is not a complete metric space. In dimension zero the ball is a singleton and is complete, so the positive-dimensional hypothesis matters.

## Facts & Assumptions

**Given:** $n\ge1$ and the restricted distance $d(x,y)=\|x-y\|_2$ on $B$.

[F1] [[def-cauchy-in-metric]] gives the epsilon-tail definition of a Cauchy sequence, [[def-metric-convergence]] gives the epsilon-tail definition of convergence, and [[def-complete-metric-space]] says that a metric space is complete precisely when every Cauchy sequence in it converges to a point of that space. [[lem-metrics-on-rn]] makes $d_2(x,y)=\lVert x-y\rVert_2$ a metric on all of $\mathbb R^n$ for $n\ge1$, with the separation and triangle axioms of [[def-metric-space]]; the displayed $d$ is its restriction to $B$.

[F2] For $n\ge1$, [[lem-standard-basis-of-f-n]] supplies the coordinate vector $e_0\in\mathbb R^n$, while [[def-euclidean-inner-product]] gives $\|e_0\|_2=1$, $\|(a-b)e_0\|_2=|a-b|$, and the singleton zero space $\mathbb R^0$.

[F3] [[cor-archimedean-reciprocal]] gives, for every real $\epsilon>0$, a natural $r\ge1$ with $1/r<\epsilon$; [[lem-of-inverse-positive]] makes reciprocation reverse inequalities between positive reals.

## Verification

1.1 For $k\ge0$ put $x_k=(1-1/(k+2))e_0$. By [F2], $\|x_k\|_2=1-1/(k+2)$, which lies strictly between $0$ and $1$, so every $x_k$ lies in $B$. If $m,k\ge N$, then [F2] and [F3], after interchanging $m,k$ if necessary, give $$d(x_m,x_k)=\left|\frac1{m+2}-\frac1{k+2}\right|\le\frac1{N+2}.$$ Given $\epsilon>0$, use [F3] to take $r\ge1$ with $1/r<\epsilon$ and put $N=r$; then $1/(N+2)<1/r<\epsilon$. Thus [F1] makes $(x_k)$ Cauchy in $(B,d)$. [F1, F2, F3, given, algebra]

2.1 Suppose $x_k$ converged in $B$ to some $z$, and put $\delta=d_2(z,e_0)$ in the ambient Euclidean space. If $\delta>0$, [F3] supplies a natural $r\ge1$ with $1/r<\delta/2$, while convergence in [F1] supplies $N_1$ such that $d_2(z,x_k)=d(z,x_k)<\delta/2$ for $k\ge N_1$. Put $k=\max\{r,N_1\}$. Then [F2], [F3], and the ambient triangle inequality in [F1] give $$\delta=d_2(z,e_0)\le d_2(z,x_k)+d_2(x_k,e_0)<\frac\delta2+\frac1{k+2}<\delta,$$ a contradiction. Hence $\delta=0$, so ambient metric separation gives $z=e_0$. But $\|e_0\|_2=1$ and $e_0\notin B$, another contradiction. Thus the Cauchy sequence has no limit in $B$, and [F1] makes $B$ incomplete. If $n=0$, [F2] gives $B=\{0\}$ and every sequence is constant, so the ball is complete. All witnesses are prescribed by formulas, and no choice principle is used. [F1, F2, F3, step 1.1, given, algebra] ∎

## Source locator

Andrews, §11.5, Theorem 11.5.1 and its proof, printed pp.106--108 (PDF pp.6--8), discuss metric completeness in the context of geodesics. The radial Cauchy witness and the dimension-zero qualification above are local calculations, not attributed to that text.
