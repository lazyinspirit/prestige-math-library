---
id: lem-rosenbrock-euler-local-defect-and-residual-error
title: "Rosenbrock–Euler has an explicit one-step defect and solve-residual allowance"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-rosenbrock-euler-step-map
  - alg-rosenbrock-euler-step
  - lem-rosenbrock-euler-jacobian-approximation-defect
  - lem-rosenbrock-stage-residual-certificate
  - def-implicit-residual-and-algebraic-error-units
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-chain-rule-for-total-derivatives
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
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
      locator: "§2.4, Theorem 2.38, printed pp. 46–47: second-order stage expansion and local defect"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: one-step Rosenbrock methods and consistency analysis"
---

## Statement

Let $D\subseteq\mathbb R\times\mathbb R^d$ be open and $f:D\to\mathbb R^d$ be $C^2$ (componentwise, as in [[def-ck-euclidean-maps-and-diffeomorphisms]]). Let $y(s)$ solve $y'=f(s,y)$ on $[t,t+h]$, $h>0$, and set $J=D_yf(t,y(t))$. Suppose the trajectory lies in a region where $\|f\|_2\le F$, $\|D_yf\|_2\le L$, and $\|f_t+D_yf\,f\|_2\le M_1$. Fix $\gamma>0$ and a real matrix $\widetilde J$. Suppose $A=I-\gamma hJ$ and $\widetilde A=I-\gamma h\widetilde J$ are invertible with $\|A^{-1}\|_2\le\kappa_0$ and $\|\widetilde A^{-1}\|_2\le\kappa_1$. Write $\delta=\|\widetilde J-J\|_2$.

For the exact-arithmetic Rosenbrock stage map $\Phi_{\gamma,h}^{\widetilde J}$, and a computed stage $\widehat k$ whose update residual obeys $\|\widetilde A\widehat k-f(t,y(t))\|_2\le\rho$, the update $\widehat y_+=y(t)+h\widehat k$ satisfies
$$\|\widehat y_+-y(t+h)\|_2\le C_Eh^2+\kappa_1h\rho, \qquad C_E:=\gamma\kappa_0LF+\frac{M_1}{2}+\gamma\kappa_0\kappa_1\delta F.$$
The last term is the separate Jacobian-approximation allowance. The residual is an equation residual in the units of [[def-implicit-residual-and-algebraic-error-units]], not a forward-error estimate by itself.

## Facts & Assumptions

**Given:** The stated exact solution, derivative bounds, matrices, inverse bounds, and residual bound.

[F1] [[def-rosenbrock-euler-step-map]]: $\Phi_{\gamma,h}^{J}(t,y)=y+h(I-\gamma hJ)^{-1}f(t,y)$.

[F2] [[lem-rosenbrock-euler-jacobian-approximation-defect]]: $\|\Phi_{\gamma,h}^{\widetilde J}(t,y)-\Phi_{\gamma,h}^{J}(t,y)\|_2\le\gamma h^2\kappa_0\kappa_1\delta\|f(t,y)\|_2$.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean norm satisfies $\|A^{-1}z\|_2\le\|A^{-1}\|_2\|z\|_2$.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a continuously differentiable vector curve has endpoint difference equal to the integral of its derivative, and hence a derivative bound $M$ gives endpoint variation at most $M$ times the interval length.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of a composition are obtained by composing the total derivatives.

[F6] [[alg-rosenbrock-euler-step]]: the stage equation is $(I-\gamma h\widetilde J)k=f(t,y)$ and the update is $y+hk$.

[F7] [[lem-rosenbrock-stage-residual-certificate]]: a successful solve can supply a certified upper bound for the exact linear-equation residual.

## Proof

**Given:** The data in the Statement.

1.1 Along the exact solution, the chain rule [F5] gives $y''(s)=f_t(s,y(s))+D_yf(s,y(s))f(s,y(s))$. The bound in the Statement and [F4], applied to the curve $y'$ on $[t,t+h]$, therefore give $\|y(t+h)-y(t)-hf(t,y(t))\|_2\le M_1h^2/2$. [given, F4, F5]

1.2 If $r=\widetilde A\widehat k-f_0$, subtraction of the exact stage equation gives $\widehat k-k=\widetilde A^{-1}r$. Thus [F3] and the residual bound yield $\|\widehat k-k\|_2\le\kappa_1\rho$, and multiplication by $h$ bounds the update difference by $\kappa_1h\rho$. [given, F1, F3, F6, F7, algebra]

2.1 Put $f_0=f(t,y(t))$. From [F1], $\Phi_{\gamma,h}^{J}(t,y(t))-y(t)-hf_0=\gamma h^2A^{-1}Jf_0$. By [F3] and the bounds on $A^{-1},J,f_0$, its norm is at most $\gamma\kappa_0LFh^2$. Combining with step 1.1 bounds the exact-J map's local defect by $(\gamma\kappa_0LF+M_1/2)h^2$. [given, F1, F3, step 1.1, algebra]

3.1 Apply [F2] and $\|f_0\|_2\le F$ to compare the approximate-J map with the exact-J map. The resulting difference is at most $\gamma h^2\kappa_0\kappa_1\delta F$. Adding the step 2.1 defect gives $\|\Phi_{\gamma,h}^{\widetilde J}(t,y(t))-y(t+h)\|_2\le C_Eh^2$. [step 2.1, F2, given, algebra]

4.1 Add the two bounds from steps 3.1 and 1.2 by the triangle inequality. This is the claimed estimate, with no conversion of $\rho$ to forward error beyond the stated inverse bound. [step 3.1, step 1.2, algebra] ∎
