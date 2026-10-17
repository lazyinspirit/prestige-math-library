---
id: ex-nonlinear-equations-and-newton-methods-boundary-cases
kind: example
title: "Fixed points, local Newton behavior, and failure boundaries"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-fixed-point-iteration
  - def-metric-space
  - thm-euclidean-space-complete
  - thm-banach-fixed-point
  - cor-banach-error-estimates
  - lem-geometric-sequence-null
  - alg-newton-correction-for-vector-residuals
  - alg-finite-budget-newton-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - lem-newton-contraction-near-an-invertible-derivative
  - thm-of-square-roots
  - lem-of-square-monotone
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.1 and §VI.3, printed pp. 134–141 / PDF pp. 1–7: fixed-point and Newton examples"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: vector Newton example and stopping implementation"
---

## Example

The examples use exact arithmetic. The first is a fixed-point iteration on the
complete metric space $\mathbb R$ with distance $d(u,v)=|u-v|$. The remaining
examples concern the square residual $F(x)=x^2-2$ or the double-root residual
$H(x)=(x-1)^2$.

## Facts & Assumptions

**Given:** The fixed-point algorithm and the exact-Jacobian finite-budget Newton
algorithm; the cited Banach and local Newton results; and the positive square
root $r=\sqrt2$.

[F1] [[alg-fixed-point-iteration]]: the map $G:X\to X$ is iterated from $x_0$; at each iterate the procedure checks $d(G(x_k),x_k)\le\varepsilon$ before the finite update-budget status.

[F2] [[thm-euclidean-space-complete]]: $\mathbb R$ with distance $|u-v|$ is complete.

[F3] [[thm-banach-fixed-point]]: a contraction of a nonempty complete metric space into itself has one fixed point, and its iterates from every starting point converge to it.

[F4] [[cor-banach-error-estimates]]: for a contraction with constant $q<1$, the iterate error is bounded by $q^k d(x_1,x_0)/(1-q)$.

[F5] [[lem-geometric-sequence-null]]: $q^k\to0$ for $|q|<1$.

[F6] [[alg-newton-correction-for-vector-residuals]]: an invertible linear map and residual have a unique correction solving $As=-r$; a noninvertible map returns the `singular-jacobian` status.

[F7] [[alg-finite-budget-newton-for-vector-residuals]]: an exact-Jacobian update applies the correction and sets $x_{k+1}=x_k+s_k$ when the trial is in $U$.

[F8] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: if a simple root has a Lipschitz Jacobian and a uniform local inverse bound, sufficiently close exact Newton iterates satisfy a quadratic error estimate and remain local.

[F9] [[lem-newton-contraction-near-an-invertible-derivative]]: for a fixed $B=DF(a)^{-1}$, the map $T_y(x)=x+B(y-F(x))$ is a contraction on a small ball about $a$; this is a fixed-inverse map.

[F10] [[thm-of-square-roots]]: the positive square root $r=\sqrt2$ exists uniquely and satisfies $r>0$ and $r^2=2$.

[F11] [[def-metric-space]]: a metric is a real-valued function satisfying separation, symmetry, and the triangle inequality.

[F12] [[lem-of-square-monotone]]: squaring is strictly increasing on nonnegative reals.

## Verification

**Given:** $G(x)=(x+1)/2$ on $\mathbb R$; $F(x)=x^2-2$ with root $r=\sqrt2$; and $H(x)=(x-1)^2$ with root $1$.

1.1 The distance $d(u,v)=|u-v|$ is a metric by [F11], and $\mathbb R$ with it is complete by [F2]. For all $u,v\in\mathbb R$, $|G(u)-G(v)|=\tfrac12|u-v|$, so $G$ is a contraction with factor $q=1/2$. Its fixed-point equation gives $x=1$, and [F3] gives convergence of the iterates from every $x_0$. [given, F2, F3, F11, algebra]

1.2 The recurrence $x_{k+1}=(x_k+1)/2$ gives $x_k=1-2^{-k}(1-x_0)$ by induction. Hence $d(G(x_k),x_k)=2^{-(k+1)}|1-x_0|$, which tends to zero by [F5]; the finite-budget algorithm therefore meets any $\varepsilon>0$ if allowed enough updates. For $\varepsilon=0$ and $x_0\ne1$, no finite iterate meets the test, so a finite budget returns `iteration-budget-exhausted`. Also [F4] gives $|x_k-1|\le2^{-k}|x_1-x_0|/(1-1/2)=2^{-k}|1-x_0|$, agreeing with the exact formula. [given, F1, F4, F5, algebra, induction]

1.3 For $x>0$, [F6] solves $2x s=-(x^2-2)$, so the exact Newton update in [F7] is $x_+=(x^2+2)/(2x)$. Direct subtraction using [F10] gives $x_+-r=(x-r)^2/(2x)$. If $|x-r|\le r/2$, then $x\ge r/2$ and $|x_+-r|\le |x-r|^2/r\le|x-r|/2$. Thus the ball of radius $r/2$ is invariant and the error decreases at least linearly by a factor $1/2$, with the sharper quadratic bound $|e_+|\le |e|^2/r$. [given, F6, F7, F10, algebra]

1.4 At $a=1$, $F'(1)=2$ and the fixed-inverse map from [F9] with $y=0$ is $T_0(x)=x-\tfrac12(x^2-2)$. Starting at $1$, it gives $T_0(1)=3/2$ and $T_0(3/2)=11/8$. Updated-Jacobian Newton uses the [F6] correction at $x=3/2$, where $F'(3/2)=3$, and gives $x_2=17/12$. Since $11/8\ne17/12$, the fixed-inverse and updated-Jacobian maps differ; [F9] does not itself assert a Newton convergence theorem. [given, F6, F7, F9, algebra]

2.1 The start $x_0=3/2$ lies in the radius-$r/2$ ball of step 1.3 because $1<r<3$, which follows from $r^2=2$ and [F12]. Iteration gives $|x_k-r|\le2^{-k}|x_0-r|\to0$ by [F5]. Also $|F(x_k)|=|x_k-r|\,|x_k+r|$; since $|x_k-r|\le r/2$, we have $0<x_k\le3r/2$ and hence $|x_k+r|\le5r/2$, so the residual tends to zero and any positive tolerance is eventually met if the update budget is large enough. [step 1.3, F5, F10, F12, algebra]

2.2 For the double-root residual $H(x)=(x-1)^2$ and any $x>1$, [F6] and [F7] give the Newton formula $x_+=x-(x-1)^2/(2(x-1))=(x+1)/2$, so $e_+:=x_+-1=e/2$ for $e:=x-1>0$. Iterating gives $e_k=2^{-k}e_0\to0$ by [F5]. Suppose a local quadratic bound held on some radius $\delta>0$, so $|e_+|\le C|e|^2$ for every $0<e<\delta$ and some finite $C\ge0$. Since $e_+=e/2$, it would require $1/2\le Ce$ for every such $e$. If $C>0$, choose $0<e<\min\{\delta,1/(2C)\}$; if $C=0$, choose any $0<e<\delta$. Either choice contradicts the required inequality. Unlike the simple-root bound in step 1.3, $H'(1)=0$, so the simple-root hypothesis in [F8] fails. [given, step 1.3, F5, F6, F7, F8, algebra]

3.1 For $F(x)=x^2-2$, the start $x_0=0$ lies outside the radius-$r/2$ ball of step 1.3 because $r>0$. At $0$, $F(0)=-2$ and $F'(0)=0$, so [F6] returns the `singular-jacobian` status before any update, despite the two exact roots $\pm r$. [step 1.3, F6, F10, algebra] ∎
