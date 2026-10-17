---
id: lem-local-root-in-max-norm
kind: lemma
title: "A small residual gives a nearby root under a uniform inverse and Lipschitz bound in the maximum norm"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-invertible-euclidean-linear-map
  - def-metric-ball
  - def-p-norms-on-rn
  - lem-metrics-on-rn
  - thm-metric-open-set-algebra
  - thm-euclidean-space-complete
  - thm-complete-subspace-iff-closed
  - thm-banach-fixed-point
  - cor-mean-value-theorem
  - thm-chain-rule-for-total-derivatives
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - cor-cauchy-reals-lub-complete
  - def-finite-sum
  - lem-finite-sum-laws
  - lem-of-abs-value
  - lem-of-triangle-inequality
proof_strategy: contraction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (90)–(93): vector Newton linearization; the maximum-norm contraction estimate is proved here"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3: local Newton error estimates for nonsingular vector roots; the maximum-norm contraction constants are proved here"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $F:U\to\mathbb R^n$ be $C^1$. For $x\in\mathbb R^n$ define $\|x\|_\infty:=\max_{j<n}|x_j|$, and for a linear map $B:\mathbb R^n\to\mathbb R^n$ define its induced norm by $\|B\|_\infty:=\sup_{z\ne0}\|Bz\|_\infty/\|z\|_\infty$. This supremum is a finite real: if $B=(b_{ij})$ in the standard basis, then for $\|z\|_\infty=1$,

$$\|Bz\|_\infty=\max_{i<n}\left|\sum_{j<n}b_{ij}z_j\right|\le\sum_{i<n}\sum_{j<n}|b_{ij}|,$$

and scaling reduces every nonzero $z$ to this case; the set is nonempty because $n\ge1$. Its supremum therefore exists by the least-upper-bound property of $\mathbb R$. Let $x_0\in U$, $A:=DF(x_0)$ be invertible, and suppose $\|A^{-1}\|_\infty\le\beta$ for some $\beta>0$. Put $\epsilon:=\|F(x_0)\|_\infty\ge0$, and choose $r>0$ with $\beta\epsilon\le r/2$. Assume $B_\infty(x_0,2r)\subset U$ and

$$\|DF(x)-DF(y)\|_\infty\le L\|x-y\|_\infty\qquad(x,y\in B_\infty(x_0,2r))$$

for some $L\ge0$ with $\beta Lr\le\tfrac12$. Then $F$ has exactly one zero $x_*$ in $\overline B_\infty(x_0,r)$, and

$$\|x_*-x_0\|_\infty\le2\beta\|F(x_0)\|_\infty.$$

In particular, when $F(x_0)=0$ the unique zero in this ball is $x_0$.

## Facts & Assumptions

**Given:** The open domain, $C^1$ map, point $x_0$, invertible derivative $A=DF(x_0)$, maximum-norm residual $\epsilon\ge0$, inverse bound $\|A^{-1}\|_\infty\le\beta$, chosen radius $r>0$ with $\beta\epsilon\le r/2$, and derivative-Lipschitz bound in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: a $C^1$ map is totally differentiable everywhere on its open domain with continuous derivative.

[F2] [[def-invertible-euclidean-linear-map]]: $A$ has a two-sided inverse $A^{-1}$.

[F3] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable on its interior has a point where its endpoint difference equals its derivative times the interval length.

[F4] [[def-p-norms-on-rn]] and [[lem-metrics-on-rn]]: $\|\cdot\|_\infty$ induces the metric $d_\infty$ on $\mathbb R^n$ for $n\ge1$. The real clause of [[thm-euclidean-space-complete]] gives convergence of every Cauchy sequence of real coordinates.

[F5] [[def-metric-ball]] and [[thm-metric-open-set-algebra]] make a closed maximum-norm ball closed and nonempty. Once the ambient maximum-norm metric is complete, the choice-free closed-subspace direction of [[thm-complete-subspace-iff-closed]] makes that ball complete.

[F6] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space to itself has a unique fixed point.

[F7] [[thm-euclidean-space-complete]], Fact L6: every nonempty finite set of natural indices has a maximum.

[F8] Every linear map $B:\mathbb R^n\to\mathbb R^n$ has a matrix $(b_{ij})$; for $\|z\|_\infty=1$, the finite-sum, triangle, and absolute-value inequalities give $\|Bz\|_\infty\le\sum_{i<n,j<n}|b_{ij}|$. Scaling shows the defining ratio set is bounded, and $n\ge1$ makes it nonempty; its supremum exists by the least-upper-bound property ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[cor-cauchy-reals-lub-complete]]).

[F9] [[thm-chain-rule-for-total-derivatives]]: for the composition $y\mapsto A^{-1}F(y)$, its derivative is $A^{-1}DF(y)$.



## Proof

**Proof technique:** contraction.

1.1 Define $\Phi(y):=y-A^{-1}F(y)$ on $B_\infty(x_0,2r)$. By [F1] and [F9], $D\Phi(y)=I-A^{-1}DF(y)=A^{-1}(A-DF(y))$. The induced maximum norm is submultiplicative directly from its definition, and [F8] ensures it is well-defined, so for $y\in\overline B_\infty(x_0,r)$ the Lipschitz hypothesis gives $\|D\Phi(y)\|_\infty\le\beta L\|y-x_0\|_\infty\le\beta Lr\le\tfrac12$. [F1, F2, F8, F9, given, algebra]

1.2 Let $(x^{(m)})$ be Cauchy in $d_\infty$. For every $j<n$, $|x^{(m)}_j-x^{(l)}_j|\le d_\infty(x^{(m)},x^{(l)})$, so the $j$th coordinate sequence is Cauchy in $\mathbb R$ and converges to some $y_j$ by [F4]. The finitely many unique limits define $y\in\mathbb R^n$. Given $\delta>0$, choose for each $j<n$ an index $K_j$ such that $|x^{(m)}_j-y_j|<\delta$ for $m\ge K_j$; since $n\ge1$, [F7] gives $K=\max_{j<n}K_j$. Then $d_\infty(x^{(m)},y)<\delta$ for $m\ge K$. Thus $(\mathbb R^n,d_\infty)$ is complete. [F4, F7, given, choose]

2.1 For any $y,z$ in the closed radius-$r$ ball, their joining segment lies in the open radius-$2r$ ball. For each coordinate $j$, the scalar function $t\mapsto\Phi_j(z+t(y-z))$ is continuous on $[0,1]$ and differentiable on $(0,1)$ by [F1] and [F9]. Its derivative has absolute value at most $\|D\Phi(z+t(y-z))\|_\infty\|y-z\|_\infty\le\tfrac12\|y-z\|_\infty$. Applying [F3] coordinatewise and taking the maximum gives $\|\Phi(y)-\Phi(z)\|_\infty\le\tfrac12\|y-z\|_\infty$. [F1, F3, F9, step 1.1, given]

3.1 At the center, $\|\Phi(x_0)-x_0\|_\infty=\|A^{-1}F(x_0)\|_\infty\le\beta\epsilon\le r/2$. Thus for $y$ in the closed ball, step 2.1 gives $\|\Phi(y)-x_0\|_\infty\le\|\Phi(y)-\Phi(x_0)\|_\infty+\|\Phi(x_0)-x_0\|_\infty\le r/2+r/2=r$, so $\Phi$ maps the ball into itself. [F2, given, step 2.1, algebra]

4.1 The closed ball is nonempty and complete by step 1.2 and [F5]. Hence [F6] gives a unique fixed point $x_*\in\overline B_\infty(x_0,r)$. Its fixed-point equation gives $A^{-1}F(x_*)=0$, and invertibility in [F2] yields $F(x_*)=0$. [F2, F5, F6, step 3.1, step 1.2]

5.1 By step 2.1, $\|\Phi(x_*)-\Phi(x_0)\|_\infty\le\tfrac12\|x_*-x_0\|_\infty$. The fixed-point identity $\Phi(x_*)=x_*$ and the center estimate in step 3.1 therefore give $\|x_*-x_0\|_\infty\le\tfrac12\|x_*-x_0\|_\infty+\beta\epsilon$, hence $\|x_*-x_0\|_\infty\le2\beta\epsilon$. Any zero in the ball is a fixed point of $\Phi$, hence equals $x_*$. [F6, step 2.1, step 3.1, step 4.1, algebra] ∎

