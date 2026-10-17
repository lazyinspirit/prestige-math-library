---
id: ex-trust-region-newton-cauchy-truncated-cg
kind: example
title: "Newton, Cauchy, and truncated-CG steps on one indefinite model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-trust-region-quadratic-model-and-ratio
  - lem-trust-region-subproblem-optimality-and-hard-case
  - alg-trust-region-cauchy-step
  - alg-truncated-cg-trust-region-step
  - alg-inexact-newton-krylov-with-descent-safeguard
  - def-krylov-subspace-of-a-matrix-and-start-vector
  - def-wolfe-and-strong-wolfe-conditions
  - alg-bracketing-zoom-strong-wolfe-search
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $f(z)=g^Tz+\tfrac12z^TBz$ on $\mathbb R^2$, where
$B=\operatorname{diag}(-1,1)$, $g=(-1,-3)/\sqrt2$, and the trust-region
radius is $\Delta=1$. The raw Newton direction is outside the ball but
satisfies the exact inexact-Newton descent safeguard and a strong Wolfe line
search accepts its full step. The Cauchy and first truncated-CG boundary
steps coincide and have smaller predicted reduction.
For the inexact-Newton call take $M\ge2$, $N\ge1$,
$\eta_k=\bar\eta=0$, $\sigma=1/2$, $J=0$, $E,Z\ge1$,
$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$; use the deterministic
two-dimensional projected solver specified in step 1.1 with iteration count
$m=2$, returning `no-candidate` if its two-dimensional basis or projected matrix is singular
or if $M<2$.

## Facts & Assumptions

**Given:** The quadratic trust-region model, the displayed $B,g,\Delta$,
the Cauchy and truncated-CG procedures, and the supplied inexact-Newton and
strong-Wolfe line-search algorithms.

[F1] [[def-trust-region-quadratic-model-and-ratio]]:
$m(p)=f(0)+g^Tp+\tfrac12p^TBp$ and feasible steps satisfy $\|p\|_2\le1$.

[F2] [[lem-trust-region-subproblem-optimality-and-hard-case]]: every feasible
step satisfying $(B+\lambda I)p=-g$, $B+\lambda I\succeq0$, and
$\lambda(1-\|p\|_2)=0$ is a global trust-region minimizer.

[F3] [[alg-trust-region-cauchy-step]]: if $g^TBg>0$, then
$p_C=-\min\{\|g\|_2^2/(g^TBg),1/\|g\|_2\}g$.

[F4] [[alg-truncated-cg-trust-region-step]]: start with $z_0=0$, $r_0=g$,
$d_0=-g$; if $d_0^TBd_0>0$, set
$\alpha_0=\|r_0\|_2^2/(d_0^TBd_0)$ and, when
$\|z_0+\alpha_0d_0\|_2\ge\Delta$, return the positive boundary root on
$z_0+td_0$ as candidate before comparing with the Cauchy step.

[F5] [[alg-inexact-newton-krylov-with-descent-safeguard]]: with zero shift,
a candidate $p$ is accepted as a linear solve when
$\|Bp+g\|_2\le\eta_k\|g\|_2$ and
$g^Tp<-\sigma\|g\|_2\|p\|_2$; the descent fallback is $p=-g$.

[F6] [[def-wolfe-and-strong-wolfe-conditions]]: a strong Wolfe step obeys
$\phi(t)\le\phi(0)+c_1t\phi'(0)$ and
$|\phi'(t)|\le c_2|\phi'(0)|$, with $0<c_1<c_2<1/2$.

[F7] [[alg-bracketing-zoom-strong-wolfe-search]]: from a descent direction,
the first expansion trial is $t=1$ and it returns that point when both strong
Wolfe inequalities hold.

[F8] [[def-krylov-subspace-of-a-matrix-and-start-vector]]:
$K_2(B,-g)=\operatorname{span}\{-g,B(-g)\}$.

## Proof

**Given:** $B=\operatorname{diag}(-1,1)$, $g=(-1,-3)/\sqrt2$,
$\Delta=1$, and $f(z)=g^Tz+\tfrac12z^TBz$.

1.1 The matrix $B$ is invertible and the raw Newton solution is
$p_N=-B^{-1}g=(-1,3)/\sqrt2$. Direct calculation gives
$Bp_N+g=0$, $\|p_N\|_2=\sqrt5$, $g^Tp_N=-4$,
$\|g\|_2\|p_N\|_2=5$, and the unrestricted model decrease at $p_N$ is
$-g^Tp_N-\tfrac12p_N^TBp_N=2$. Also $-g=(1,3)/\sqrt2$ and
$B(-g)=(-1,3)/\sqrt2$ are linearly independent, so [F8] gives
$K_2(B,-g)=\mathbb R^2$. Put $V=[-g\ B(-g)]$; its determinant is $3$,
so the projected matrix $V^TBV$ is invertible because its determinant is
$\det(V)^2\det(B)=-9$. Solving
$V^TBV y=V^T(-g)$ gives $p=Vy\in K_2$ with $B p+g$ orthogonal to
$K_2=\mathbb R^2$, hence $Bp+g=0$ and $p=p_N$. Thus a deterministic
two-dimensional Galerkin Krylov solver may return $p_N$. With $\eta_0=0$
and descent parameter $\sigma=1/2$, [F5]'s residual
and strict descent tests pass because $0\le0$ and $-4<-5/2$. [given, F5,
F8, algebra]

1.2 For $\phi(t):=f(tp_N)$, direct substitution gives
$\phi(t)=-4t+2t^2$ and $\phi'(t)=-4+4t$. Set $c_1=1/10$ and
$c_2=1/4$. At $t=1$, $\phi(1)=-2\le-2/5=c_1\phi'(0)$ and
$|\phi'(1)|=0\le1=c_2|\phi'(0)|$. Thus the full step satisfies [F6];
with expansion budget at least one, [F7] returns $t=1$. [given, F6, F7,
step 1.1, algebra]

1.3 We have $\|g\|_2^2=5$ and $g^TBg=4$. By [F3],
$p_C=(1,3)/\sqrt{10}$ and $\|p_C\|_2=1$. Its predicted reduction is
$$-g^Tp_C-\tfrac12p_C^TBp_C=\sqrt5-\tfrac25.$$
For truncated CG with residual tolerance zero and inner cap at least one,
$d_0=-g$, $d_0^TBd_0=4$, and $\alpha_0=5/4$. The unconstrained point
$\widehat z=-(5/4)g$ has norm $5\sqrt5/4>1$, so the boundary exit is
$z_0+t_0d_0$ with $t_0=1/\sqrt5$. It equals $p_C$, and the final comparison
in [F4] returns a step with the same predicted reduction
$\sqrt5-2/5$. [given, F1, F3, F4, algebra]

2.1 The point $p_*=(1,1)/\sqrt2$ has norm one and
$(B+2I)p_*=(1,3)/\sqrt2=-g$, while
$B+2I=\operatorname{diag}(1,3)\succeq0$. By [F2], it is a global trust-
region minimizer. Its predicted reduction is $-g^Tp_*-\tfrac12p_*^TBp_*=2$.
The Cauchy decrease is strictly smaller because $\sqrt5<12/5$, which
follows from $5<144/25$. Thus the raw Newton line-search step is accepted at
full length, whereas the feasible Cauchy and truncated-CG steps have the
strictly smaller reduction
$\sqrt5-2/5<2$. [given, F1, F2, step 1.2, step 1.3, algebra] ∎
