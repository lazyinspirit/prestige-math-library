---
id: ex-projected-gradient-on-nonnegative-orthant
kind: example
title: "Projected gradient on the nonnegative orthant"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - thm-projected-gradient-fixed-point-kkt-certificate
  - lem-prox-indicator-is-euclidean-projection
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Example

Let $C=\mathbb R_+^2=\{x:x_1\ge0,x_2\ge0\}$ and
$$f(x)=\frac12\bigl((x_1+2)^2+x_2^2\bigr),\qquad x_0=(0,0),\qquad L=2.$$
Then $L$ is a valid gradient-Lipschitz constant, the projected-gradient step stays at $x_1=(0,0)$, and $-\nabla f(x_1)=(-2,0)\in N_C(x_1)$. The KKT multipliers for inequalities $-x_i\le0$ are $\lambda=(2,0)$, so the fixed point is a global constrained minimizer.

## Facts & Assumptions

**Given:** The objective, orthant, initial point and step constant in the Example.

[F1] [[alg-proximal-gradient-and-fista]]: a projected-gradient update is $P_C(x-\nabla f(x)/L)$.

[F2] [[lem-prox-indicator-is-euclidean-projection]]: the proximal map of $\iota_C$ is $P_C$.

[F3] [[thm-projected-gradient-fixed-point-kkt-certificate]]: for a convex smooth objective and polyhedral $C$, a vanishing projected-gradient mapping is equivalent to the outward normal condition; a feasible KKT tuple certifies a global minimum.

## Verification

1.1 The function is a continuously differentiable convex quadratic, with $$f((1-\alpha)x+\alpha z)=(1-\alpha)f(x)+\alpha f(z)-\frac{\alpha(1-\alpha)}2\|x-z\|_2^2\qquad(0\le\alpha\le1).$$ Its gradient is $\nabla f(x)=(x_1+2,x_2)$, whose Lipschitz constant is $1$, hence $L=2$ is valid. At $x_0$, the unprojected point is $x_0-\nabla f(x_0)/2=(-1,0)$; coordinatewise projection onto $C$ gives $x_1=(0,0)$. Repeating the same computation shows the iterate remains there. [F1, F2, given, algebra]

2.1 For every $z\in C$, $\langle(-2,0),z-(0,0)\rangle=-2z_1\le0$, hence $(-2,0)\in N_C(0)$ by the outward-cone definition. Equivalently, write $C$ as $-x_i\le0$ with $G=-I,d=0$; at $x_*=0$, $\lambda=(2,0)\ge0$ has zero complementarity and $\nabla f(0)+G^T\lambda=(2,0)-(2,0)=0$. By [F3], this KKT tuple certifies global minimality and the projected-gradient fixed point. [F3, step 1.1, given, algebra] ∎
