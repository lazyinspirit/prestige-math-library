---
id: thm-gradient-descent-rate-under-strong-convexity-and-smoothness
kind: theorem
title: "Gradient descent rate under strong convexity and smoothness"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
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
      locator: "Chapter 9 §9.3.1, PDF pp. 477–483; the fixed-step claim is proved locally"
---

## Statement

Let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable and have an
attained minimum $f^*=f(x^*)$. Say that $f$ is $L$-smooth when
$\|\nabla f(x)-\nabla f(y)\|\le L\|x-y\|$ for all $x,y$, and
$\mu$-strongly convex when
$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle +\frac{\mu}{2}\|y-x\|^2 \qquad(x,y\in\mathbb R^d).$$
If $0<\mu\le L$ and [[alg-gradient-descent]] uses the fixed step $1/L$, then
the initial gap is unchanged at $k=0$, and for every generated iterate $x_k$
with integer $k\ge1$,
$$f(x_k)-f^*\le \left(1-\frac{\mu}{L}\right)^k\bigl(f(x_0)-f^*\bigr).$$
For $\mu=L$, the factor is zero only for the stated $k\ge1$ range; no
$0^0$ convention is used.

## Facts & Assumptions


**Given:** A continuously differentiable $f:\mathbb R^d\to\mathbb R$ with
attained minimum $f^*$, a gradient Lipschitz constant $L>0$, a strong
convexity constant $0<\mu\le L$, and iterates from
[[alg-gradient-descent]] with step $1/L$.

[A1] $L$-smooth means the displayed gradient Lipschitz bound in the
Statement.

[A2] $\mu$-strong convexity means the displayed quadratic lower bound in the
Statement.

[F1] [[alg-gradient-descent]] in fixed-step mode updates
$x_{k+1}=x_k-L^{-1}\nabla f(x_k)$ whenever it does not stop at $x_k$.

[F2] [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]:
$Df(x)$ is real-linear. [[def-jacobian-matrix-and-gradient]] defines the
gradient by coordinate partials. Since a linear map is determined by its
values on the standard basis,
$Df(x)[h]=\langle\nabla f(x),h\rangle$.

[F3] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition
with the line $s\mapsto x+sh$ composes the total derivative with $h$.

[F4] [[thm-continuous-implies-integrable]]: a continuous real function on a
compact interval is Riemann integrable.

[F5] [[thm-newton-leibniz-with-interior-derivative]]: a continuous scalar
function on a closed interval whose interior derivative has an integrable
extension has endpoint increment equal to the integral of that derivative.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|\langle u,v\rangle|\le\|u\|\|v\|$ in $\mathbb R^d$.

## Proof

1.1 Fix $x$ and write $g:=\nabla f(x)$ and $d:=-g/L$. Define $\phi(s):=f(x+sd)$ on $[0,1]$. By [F2]–[F3], $\phi'(s)=\langle\nabla f(x+sd),d\rangle$ on $(0,1)$. The gradient is continuous by [A1], so $\phi'$ is continuous and integrable by [F4]. Applying [F5] gives $$f(x-g/L)-f(x) =-\frac1L\int_0^1\langle\nabla f(x-sg/L),g\rangle\,ds.$$ By [A1] and [F6], $\|\nabla f(x-sg/L)-g\|\le s\|g\|$, whence $\langle\nabla f(x-sg/L),g\rangle\ge(1-s)\|g\|^2$. Integrating this bound gives $$f(x-g/L)\le f(x)-\frac{\|g\|^2}{2L}.$$ [A1, F2, F3, F4, F5, F6, given, algebra]

1.2 By [A2], for every $y$, $$f(y)\ge f(x)+\langle g,y-x\rangle+\frac\mu2\|y-x\|^2 =f(x)-\frac{\|g\|^2}{2\mu} +\frac\mu2\left\|y-x+\frac g\mu\right\|^2.$$ Taking $y=x^*$ and using nonnegativity of the square yields $\|g\|^2\ge2\mu(f(x)-f^*)$. [A2, given, algebra]

2.1 Apply steps 1.1 and 1.2 at $x=x_k$ and use [F1]. Then $$f(x_{k+1})-f^* \le f(x_k)-f^*-\frac{\|\nabla f(x_k)\|^2}{2L} \le\left(1-\frac\mu L\right)(f(x_k)-f^*).$$ The factor is nonnegative because $\mu\le L$. [F1, step 1.1, step 1.2, algebra]

3.1 The $k=0$ case is equality. For $k=1$, the result is step 2.1 whenever $x_1$ is generated. If $x_{k+1}$ is generated, then $x_k$ was generated and the algorithm made the $k$th update; multiplying the bound at $k$ by $1-\mu/L\ge0$ and applying step 2.1 proves it at $k+1$. Induction along generated iterates gives the claim for every generated $k\ge1$. If the stopping rule fires earlier, no later iterate is asserted. [step 2.1, given, algebra, discharge-induction] ∎
