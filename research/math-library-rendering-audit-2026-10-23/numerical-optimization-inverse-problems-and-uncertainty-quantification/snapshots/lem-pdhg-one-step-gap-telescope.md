---
id: lem-pdhg-one-step-gap-telescope
kind: lemma
title: "PDHG one-step primal-dual gap telescope"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - alg-pdhg-primal-dual-hybrid-gradient
  - def-extended-real-epsilon-subdifferential
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-induced-matrix-p-norm
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §3.1, equations (11)–(16)"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Laurent Vandenberghe, UCLA EE236C Lecture Notes: Douglas–Rachford Splitting, §§4–5"
      url: "https://www.seas.ucla.edu/~vandenbe/236C/lectures/dr.pdf"
---

## Statement

For the exact recurrence of [[alg-pdhg-primal-dual-hybrid-gradient]], put
$\kappa=\sqrt{\tau\sigma}\,\|K\|_2<1$ and
$\Phi(x,y)=f(x)+\langle Kx,y\rangle-g^*(y)$. For every
$x\in\operatorname{dom}f$, $y\in\operatorname{dom}g^*$ and integer $N\ge1$,
$$\sum_{k=0}^{N-1}\bigl(\Phi(x^{k+1},y)-\Phi(x,y^{k+1})\bigr) \le\frac{\|x-x^0\|_2^2}{2\tau}+\frac{\|y-y^0\|_2^2}{2\sigma}.$$
The formula includes $K=0$ and uses $\bar x^0=x^0$.

## Facts & Assumptions

**Given:** The exact PDHG recurrence, $\tau,\sigma>0$, $\kappa<1$, and test points in the stated domains.

[A1] The exact recurrence is used, $\kappa=\sqrt{\tau\sigma}\|K\|_2<1$, and the test points are in the stated domains.


[F1] [[alg-pdhg-primal-dual-hybrid-gradient]]: the proximal updates, $\bar x^0=x^0$, and $\bar x^k=2x^k-x^{k-1}$ for $k\ge1$.

[F2] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: in positive dimension, if $u=\operatorname{prox}_{tg}(v)$, then $(v-u)/t\in\partial g(u)$.

[F3] [[def-extended-real-epsilon-subdifferential]]: for a finite-valued point of a proper convex extended-real function, $a\in\partial f(u)$ implies $f(z)\ge f(u)+\langle a,z-u\rangle$ for every $z$.

[F4] [[def-induced-matrix-p-norm]]: $\|Kx\|_2\le\|K\|_2\|x\|_2$.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$ and the Euclidean norm obeys polarization.

[F6] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of the single zero vector.

## Proof


1.1 For each positive-dimensional proximal space, the optimality condition [F2] and extended-real subgradient definition [F3] give the relevant inequality. If a proximal space is zero-dimensional, [F6] says its only point is $0$; its update and test point are both $0$, so the same inequality is equality in that coordinate. Therefore in every dimension the two inequalities are $$g^*(y)-g^*(y^{k+1})\ge\left\langle\frac{y^k-y^{k+1}}\sigma+K\bar x^k,y-y^{k+1}\right\rangle,$$ $$f(x)-f(x^{k+1})\ge\left\langle\frac{x^k-x^{k+1}}\tau-K^*y^{k+1},x-x^{k+1}\right\rangle.$$ The identity $-\langle a-b,c-b\rangle=(\|c-a\|^2-\|c-b\|^2-\|b-a\|^2)/2$ applied to the primal and dual displacement terms gives the two distance differences $E_k-E_{k+1}-X_{k+1}$ and $E_k-E_{k+1}-Y_{k+1}$ in their respective coordinates. The bilinear terms from the primal inequality and the gap expand as $\langle y^{k+1},K(x-x^{k+1})\rangle+\langle Kx^{k+1},y\rangle-\langle Kx,y^{k+1}\rangle=\langle Kx^{k+1},y-y^{k+1}\rangle$. Adding the dual update term $\langle K\bar x^k,y^{k+1}-y\rangle$ gives $\langle K(\bar x^k-x^{k+1}),y^{k+1}-y\rangle$ in the upper bound for $G_{k+1}$. Moving this term to the other side yields $$E_k\ge G_{k+1}+E_{k+1}+X_{k+1}+Y_{k+1}+\langle K(x^{k+1}-\bar x^k),y^{k+1}-y\rangle,$$ where $G_{k+1}=\Phi(x^{k+1},y)-\Phi(x,y^{k+1})$, $E_j=\|x-x^j\|^2/(2\tau)+\|y-y^j\|^2/(2\sigma)$, $X_j=\|x^j-x^{j-1}\|^2/(2\tau)$, and $Y_j=\|y^j-y^{j-1}\|^2/(2\sigma)$. [A1, F1, F2, F3, F5, F6, algebra]

2.1 Define $x^{-1}=x^0$, so $X_0=0$, and $B_k=\langle K(x^k-x^{k-1}),y^k-y\rangle$. The extrapolation in [F1] gives $$\langle K(x^{k+1}-\bar x^k),y^{k+1}-y\rangle =B_{k+1}-B_k-\langle K(x^k-x^{k-1}),y^{k+1}-y^k\rangle.$$ By [F4,F5] and $2ab\le a^2+b^2$, $$|\langle K(x^k-x^{k-1}),y^{k+1}-y^k\rangle| \le\kappa(X_k+Y_{k+1}).$$ Substitution into step 1.1 therefore gives $$E_k\ge G_{k+1}+E_{k+1}+(1-\kappa)Y_{k+1}+X_{k+1}-\kappa X_k+B_{k+1}-B_k.$$ [A1,  F1, F4, F5, step 1.1, algebra]

3.1 Sum step 2.1 for $k=0,\ldots,N-1$. The $B$ terms telescope, $B_0=0$, and the $X$ terms satisfy $\sum_{k=0}^{N-1}(X_{k+1}-\kappa X_k)=(1-\kappa)\sum_{k=1}^{N-1}X_k+X_N\ge0$. Thus $$\sum_{k=0}^{N-1}G_{k+1}+E_N+(1-\kappa)\sum_{k=1}^N Y_k +(1-\kappa)\sum_{k=1}^{N-1}X_k+X_N+B_N\le E_0.$$ For the terminal cross term, [F4,F5] and $2ab\le a^2+b^2$ give $$-B_N\le\|K\|_2\|x^N-x^{N-1}\|_2\|y^N-y\|_2 \le X_N+\tau\sigma\|K\|_2^2\frac{\|y^N-y\|_2^2}{2\sigma}.$$ Since $E_N$ contains $\|y^N-y\|^2/(2\sigma)$ and $\tau\sigma\|K\|_2^2=\kappa^2<1$, these terminal terms leave a nonnegative remainder; all increment terms are also nonnegative because $\kappa<1$. Drop them to obtain $\sum G_{k+1}\le E_0$, the claimed estimate. When $K=0$, $\kappa=0$ and the same inequalities hold without division by $\|K\|_2$. [A1, F1, F4, F5, step 2.1, algebra] ∎
