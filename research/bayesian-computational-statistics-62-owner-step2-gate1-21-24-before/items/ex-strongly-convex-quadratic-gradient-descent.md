---
id: ex-strongly-convex-quadratic-gradient-descent
kind: example
title: "Gradient descent on a strongly convex quadratic"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-gradient-and-hessian-of-the-frobenius-least-squares-functional
  - thm-gradient-descent-rate-under-strong-convexity-and-smoothness
  - thm-hessian-characterises-convexity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §9.3.1, PDF pp. 477–483"
---
## Example

For $b\in\mathbb R^d$, set $f(x)=\tfrac12\|x-b\|^2$. This is a
strongly convex quadratic. With $\mu=1$ and the valid smoothness constant
$L=2$, fixed-step gradient descent uses $1/L=1/2$ and, for every generated
iterate $x_k$ with integer $k\ge0$,
$$ f(x_k)-f^*\le 2^{-k}\bigl(f(x_0)-f^*\bigr). $$

## Facts & Assumptions


**Given:** $b,x_0\in\mathbb R^d$ and
$f(x)=\tfrac12\|x-b\|^2$.

[F1] [[thm-gradient-and-hessian-of-the-frobenius-least-squares-functional]]:
for $f(x)=\tfrac12\|Ax-b\|^2$, the gradient is $A^T(Ax-b)$ and the Hessian
is $A^TA$.

[F2] [[thm-hessian-characterises-convexity]]: a $C^2$ function on an open
convex set is convex exactly when its Hessian is positive semidefinite.

[F3] [[thm-gradient-descent-rate-under-strong-convexity-and-smoothness]]:
with $0<\mu\le L$, an attained minimum, an $L$-Lipschitz gradient, and
$\mu$-strong convexity, the fixed $1/L$ step has the stated geometric gap
bound.

## Verification

1.1 Take $A=I_d$ in [F1]. Then $\nabla f(x)=x-b$ and $H_f(x)=I_d$. This Hessian is positive semidefinite, so [F2] proves convexity. [F1, F2, given]

2.1 Direct expansion gives, for all $x,y$, $$ f(y)=f(x)+\langle x-b,y-x\rangle+\tfrac12\|y-x\|^2. $$ Thus the strong-convexity inequality holds with $\mu=1$. The gradient satisfies $\|\nabla f(x)-\nabla f(y)\|=\|x-y\|\le2\|x-y\|$, so $L=2$ is valid. The minimum is $f^*=0$ at $x=b$. [given, step 1.1, algebra]

3.1 Whenever the algorithm makes a fixed-step update with step $1/2$, $x_{k+1}=x_k-\tfrac12(x_k-b)=b+\tfrac12(x_k-b)$. Induction along the generated iterates gives $\|x_k-b\|^2=4^{-k}\|x_0-b\|^2$, so $f(x_k)-f^*=4^{-k}(f(x_0)-f^*)\le2^{-k}(f(x_0)-f^*)$ for each generated $k\ge1$; for $k=0$ the gap is unchanged. A caller stop ends this finite prefix and does not assert later iterates. This is the bound from [F3] with $\mu/L=1/2$. [F1, F3, step 2.1, algebra, discharge-induction] ∎
