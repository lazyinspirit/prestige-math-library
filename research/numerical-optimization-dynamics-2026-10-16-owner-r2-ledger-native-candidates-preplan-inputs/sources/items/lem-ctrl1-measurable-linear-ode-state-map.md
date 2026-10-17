---
id: lem-ctrl1-measurable-linear-ode-state-map
kind: lemma
title: "The bounded measurable linear ODE has a unique affine state map"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-ctrl1-linear-lqr-control-problem, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-c-k-complete-in-the-sup-metric, thm-gronwall-integral-inequality, thm-norm-inequality-for-the-vector-valued-integral, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.4"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–23: L-infinity coefficient matrices, L2 controls, integral solution formula, and direct-method setup."
---

## Statement

Let $T>0$, $A\in L^\infty(0,T;\mathbb R^{n\times n})$, $B\in L^\infty(0,T;\mathbb R^{n\times m})$, $u\in L^2(0,T;\mathbb R^m)$, and $x_0\in\mathbb R^n$. Write $\|A\|_\infty$ and $\|B\|_\infty$ for the essential suprema of their Euclidean operator norms. There is a unique absolutely continuous $x:[0,T]\to\mathbb R^n$ satisfying
$$
x(t)=x_0+\int_0^t\big(A(s)x(s)+B(s)u(s)\big)\,ds.
$$
It satisfies $\dot x=A x+B u$ almost everywhere and
$$
\|x\|_\infty\le e^{\|A\|_\infty T}\left(\|x_0\|_2+\|B\|_\infty\sqrt T\,\|u\|_2\right).
$$
For fixed $A,B,x_0$, the map $u\mapsto x_u$ is affine into $C([0,T];\mathbb R^n)$, and its zero-initial-state linear part is bounded from $L^2$ to the supremum norm.

## Facts & Assumptions

**Given:** $T>0$, essentially bounded matrix classes $A,B$, a control $u\in L^2$, an initial state $x_0$, and the standard Lebesgue integral.

[F1] For an integrable finite-dimensional vector function, the norm of its integral is at most the integral of its Euclidean norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F2] The indefinite integral of an $L^1$ function is absolutely continuous, and its derivative equals the integrand almost everywhere ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]]).

[F3] $C([a,b];\mathbb R)$ is complete in the supremum metric; the finite product $C([a,b];\mathbb R^n)$ is therefore complete componentwise ([[thm-c-k-complete-in-the-sup-metric]]).

[F4] If $v(t)\le c+M\int_0^t v(s)ds$ for continuous $v\ge0$ and constants $c,M\ge0$, then $v(t)\le ce^{Mt}$ ([[thm-gronwall-integral-inequality]]).

[F5] $\|u\|_{L^1(0,T)}\le\sqrt T\,\|u\|_{L^2(0,T)}$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F6] The Lebesgue integral is linear on $L^1$; changing an integrand on a null set does not change the integral ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

1.1 Put $g=Bu\in L^1(0,T;\mathbb R^n)$. Choose a finite partition $0=t_0<\cdots<t_N=T$ with $\|A\|_\infty(t_{j+1}-t_j)<1$ on each subinterval when $\|A\|_\infty>0$; if $\|A\|_\infty=0$, use $N=1$. Given the already constructed value $x(t_j)$, define $\mathcal T z(t)=x(t_j)+\int_{t_j}^t(A(s)z(s)+g(s))ds$ on $C([t_j,t_{j+1}];\mathbb R^n)$. By [F2], $\mathcal T$ maps continuous functions to continuous functions, and [F1] gives $\|\mathcal T z-\mathcal T w\|_\infty\le q_j\|z-w\|_\infty$ with $q_j=\|A\|_\infty(t_{j+1}-t_j)<1$. [F1, F2, choose, algebra]

2.1 Starting from the constant function $z_0=x(t_j)$, let $z_{k+1}=\mathcal T z_k$. Then $\|z_{k+1}-z_k\|_\infty\le q_j^k\|z_1-z_0\|_\infty$, so the successive differences have summable norms. Each coordinate converges uniformly by [F3], and the finite coordinate limit is a continuous vector function $z$. The integral estimate in step 1.1 makes $\mathcal T$ continuous in the supremum norm, hence $z=\mathcal Tz$. If $z,w$ are two fixed points, $\|z-w\|_\infty\le q_j\|z-w\|_\infty$, so $z=w$. Solving the finitely many subintervals in order gives one continuous solution on $[0,T]$, and the same uniqueness on each subinterval proves global uniqueness. [F3, step 1.1, algebra, induction]

3.1 The integrand $Ax+Bu$ lies in $L^1$, so [F2] differentiates the integral equation almost everywhere and yields $\dot x=Ax+Bu$. The same equation is independent of the chosen representatives of $A,B,u$ by [F6]. [F2, F6, step 2.1]

3.2 From the integral equation and [F1], $\|x(t)\|_2\le \|x_0\|_2+\|B\|_\infty\|u\|_{L^1}+\|A\|_\infty\int_0^t\|x(s)\|_2ds$. Apply [F4] with $c=\|x_0\|_2+\|B\|_\infty\|u\|_{L^1}$ and then [F5]; this gives the displayed supremum bound. [F1, F4, F5, step 2.1, algebra]

4.1 Linearity of the integral [F6] shows that a linear combination of two zero-initial-state solutions is the solution for the same linear combination of controls; uniqueness from step 2.1 makes the zero-initial-state map linear. Step 3.2 with $x_0=0$ bounds this linear map in the $L^2$ and supremum norms, while the fixed initial-state contribution is independent of $u$. Hence the full map is affine and bounded as claimed. [F6, step 2.1, step 3.2, algebra] ∎
