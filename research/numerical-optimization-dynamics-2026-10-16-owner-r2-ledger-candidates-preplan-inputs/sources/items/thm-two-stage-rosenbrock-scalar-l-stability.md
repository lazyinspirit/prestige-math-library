---
id: thm-two-stage-rosenbrock-scalar-l-stability
title: "The selected exact-J two-stage Rosenbrock method is scalar L-stable"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-two-stage-rosenbrock-w-method
  - def-scalar-rk-a-and-l-stability
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Theorem 2.40 and Corollary 2.41, printed p. 48: ode23s stability function and L-stability"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 43–44: two-stage Rosenbrock stability"
---

## Statement

For the exact-Jacobian branch of [[alg-two-stage-rosenbrock-w-method]], apply the method to $y'=\lambda y$, set $z=h\lambda$, and take $\widetilde J=\lambda$, $\widetilde T=0$. With $\alpha=1-1/\sqrt2$, its scalar stability function is
$$R(z)=\frac{1+(1-2\alpha)z}{(1-\alpha z)^2}.$$
This function has no pole on $\operatorname{Re}z\le0$, has modulus at most one there, and tends to zero as $|z|\to\infty$ in that half-plane. Hence this exact-J scalar method is L-stable. This theorem makes no A/L-stability claim for an arbitrary approximate Jacobian.

## Facts & Assumptions

**Given:** The exact-J method, the scalar test equation, and $z=h\lambda$.

[F1] [[alg-two-stage-rosenbrock-w-method]]: $W=I-\alpha h\widetilde J$, $Wk_1=f+\alpha h\widetilde T$, $F_1=f(t+h/2,y+hk_1/2)$, $Wq_2=F_1-k_1$, and $k_2=q_2+k_1$.

[F2] [[def-scalar-rk-a-and-l-stability]]: L-stability requires no left-half-plane pole, modulus at most one there, and vanishing limit at infinity in that half-plane.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: every complex scalar is uniquely $x+iy$ and $|x+iy|=\sqrt{x^2+y^2}$.

[F4] [[lem-complex-conjugation-and-modulus-laws]]: the complex modulus is nonnegative, multiplicative, and satisfies $|z+w|\le|z|+|w|$.

## Proof

**Given:** The data in the Statement.

1.1 Take a nonzero starting value $y$. On the scalar equation, [F1] gives $hk_1/y=z/(1-\alpha z)$ and, by $k_2=q_2+k_1$, the equivalent equation $Wk_2=F_1-\alpha h\lambda k_1$. Substituting $F_1=\lambda(y+hk_1/2)$ and eliminating $k_1$ yields $1+hk_2/y=1+[z+(1/2-2\alpha)z^2]/(1-\alpha z)^2$. Since $\alpha=1-1/\sqrt2$ satisfies $\alpha^2+1/2-2\alpha=0$, this reduces to the stated $R(z)$. [given, F1, algebra]

2.1 Let $z=x+iy$ with $x\le0$. The equation $1-\alpha z=0$ would force $z=1/\alpha>0$, so the denominator has no zero in the closed left half-plane. Put $c=1-2\alpha=\sqrt2\alpha$. Expanding gives $|1-\alpha z|^4-|1+cz|^2=(-4\alpha-2c)x+(2\alpha^2-c^2)|z|^2+4\alpha^2x^2-4\alpha^3x|z|^2+\alpha^4|z|^4=-2x+4\alpha^2x^2-4\alpha^3x|z|^2+\alpha^4|z|^4\ge0$. Every term is nonnegative because $x\le0$ and $\alpha>0$, so $|R(z)|\le1$. [given, F3, F4, step 1.1, algebra]

3.1 By the triangle inequality in [F4], $\alpha|z|=|\alpha z|=|1-(1-\alpha z)|\le1+|1-\alpha z|$, so $|1-\alpha z|\ge\alpha|z|-1$. Also $|1+cz|\le1+|c||z|$. Therefore $|R(z)|\le(1+|c||z|)/(\alpha|z|-1)^2$ whenever $|z|>1/\alpha$, and this bound tends to zero as $|z|\to\infty$. Together with step 2.1, [F2] gives L-stability. [step 2.1, F2, F3, F4, algebra] ∎
