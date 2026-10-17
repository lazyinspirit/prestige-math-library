---
id: ex-inexact-newton-forcing-tolerance-cost-and-rate
kind: example
title: "A scalar inexact Newton solve trades inner work for outer error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-inexact-newton-krylov-with-descent-safeguard
  - alg-bracketing-zoom-strong-wolfe-search
  - thm-inexact-newton-local-forcing-rates
  - lem-geometric-sequence-null
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references: []
---

## Example

Let $f(x)=x^2/2$, so $F(x)=f'(x)=x$ and $F'(x)=1$. At a nonzero iterate,
solve the Newton equation approximately from $p^{(0)}=0$ by
$$
p^{(j+1)}=p^{(j)}-(1-\tau)(p^{(j)}+x),\qquad 0<\tau<1.
$$
Stop at the first $j$ with $\tau^j\le\eta$, where the forcing tolerance
satisfies $0<\eta\le c_2<1/2$. With the exact strong Wolfe search from
[[alg-bracketing-zoom-strong-wolfe-search]], the unit step is accepted. The
number $j$ of inner iterations grows as $\eta$ is tightened, while the outer
error contracts by a factor at most $\eta$; choosing $\eta_k=|x_k|$ gives a
quadratic outer error bound for $0<|x_0|\le c_2$.

## Facts & Assumptions

**Given:** The scalar objective, the fixed $\tau\in(0,1)$, and Wolfe parameters $0<c_1<c_2<1/2$.

[F1] [[def-jacobian-matrix-and-gradient]]: for a scalar function the gradient is the vector of first partial derivatives.

[F2] [[def-hessian-and-euclidean-critical-point]]: the Hessian is the matrix of second partial derivatives.

[F3] [[alg-inexact-newton-krylov-with-descent-safeguard]]: the unshifted solve is accepted only after recomputing $H(x)p+g(x)$ and checking its forcing residual and descent threshold; the next iterate uses the returned Wolfe step.

[F4] [[alg-bracketing-zoom-strong-wolfe-search]]: the search tests $t=1$ first and returns it when both strong Wolfe inequalities hold.

[F5] [[thm-inexact-newton-local-forcing-rates]]: an unshifted full-step sequence with a relative residual bounded by $\eta_k\|F(x_k)\|_2$ converges quadratically when $\eta_k=O(\|F(x_k)\|_2)$, under the stated local hypotheses.

[F6] [[lem-geometric-sequence-null]]: if $|r|<1$, then $r^k\to0$.

## Verification

**Given:** The objective and inner iteration of the Example, with $x\ne0$ and $0<\eta\le c_2$.

1.1 The exact scalar identities are $F(x)=x$, $J(x)=1$, and $g(x)=x$ by [F1]–[F2]. Induction on $j$ gives $p^{(j)}=-(1-\tau^j)x$, so the linear residual is $r_j=J(x)p^{(j)}+F(x)=\tau^j x$. [given, F1, F2, induction, algebra]

1.2 Since $0<\tau<1$, [F6] gives $\tau^j\to0$, so a least $j$ with $\tau^j\le\eta$ exists. As $\eta<1$, $j\ge1$ and minimality gives $\tau^j\le\eta<\tau^{j-1}$. If the requested tolerance is reduced, the set of eligible $j$ can only shrink, so the required inner iteration count cannot decrease. [given, F6, choose, algebra]

2.1 At this $j$, $|r_j|=\tau^j|x|\le\eta|x|$, while $g(x)p^{(j)}=-(1-\tau^j)x^2$ and $|g(x)|\,|p^{(j)}|=(1-\tau^j)x^2$. Because $0<\sigma<1$, the descent safeguard passes. [given, F3, step 1.1, step 1.2, algebra]

3.1 Let $q:=\tau^j\le\eta\le c_2$. The unit step gives $x_+=x+p^{(j)}=qx$. Its objective satisfies $f(x_+)=q^2x^2/2\le x^2(1-2c_1(1-q))/2=f(x)+c_1g(x)p^{(j)}$, because $1+q\ge1>2c_1$. Also $|\phi'(1)|=q(1-q)x^2\le c_2(1-q)x^2=c_2|\phi'(0)|$. Thus both strong Wolfe conditions hold, and [F4] accepts $t=1$. [given, F3, F4, step 2.1, algebra]

4.1 For fixed $\eta$, $q=\tau^j$ is a constant in $(0,1)$ and $x_{k+1}=qx_k$, so the outer sequence is linearly convergent. If $0<|x_0|\le c_2$ and $\eta_k=|x_k|$, then $\eta_k\le c_2$ at every step and $|x_{k+1}|=\tau^{j_k}|x_k|\le|x_k|^2$. Here $\eta_k=|F(x_k)|$; the local tube in [F5] may contain $[-c_2,c_2]$ because $F(x)=x$ and $J(x)=1$ everywhere. Thus [F5] supplies the same local quadratic-rate conclusion. [given, F5, step 1.2, step 3.1, induction] ∎
