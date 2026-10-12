---
id: lem-cm-uniform-second-order-remainder-bound
kind: lemma
title: "A uniform Hessian bound controls the second-order Taylor remainder"
status: draft
origin: pipeline
domain: mathematics
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-convex-subset-of-euclidean-space, def-euclidean-inner-product, def-hessian-and-euclidean-critical-point, def-jacobian-matrix-and-gradient, def-multivariable-taylor-polynomial, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-multivariable-taylor-formula-with-lagrange-remainder]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-multivariable-taylor-polynomial: mathematical-premise
  def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-multivariable-taylor-formula-with-lagrange-remainder: mathematical-premise
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 5.1.2, note to equation (10), on higher-order Taylor terms for significant nonlinearity"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "K. Bryan, Taylor's Theorem in One and Several Variables (Rose-Hulman MA 433 lecture notes), the second-order case in n dimensions (equation (8)) and its proof (equations (9)-(10))"
      url: "https://www.rose-hulman.edu/~bryan/lottamath/mtaylor.pdf"
verification:
  precheck: pass
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open and convex
([[def-convex-subset-of-euclidean-space]]), let $h:U\to\mathbb R$ be of class
$C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $B\in[0,+\infty)$
satisfy
$$\bigl\lVert H_h(x)\bigr\rVert\le B\qquad\text{for every }x\in U,$$
where $H_h(x)$ is the Hessian of $h$ at $x$
([[def-hessian-and-euclidean-critical-point]]) and $\lVert\cdot\rVert$ is the
operator norm on the finite-dimensional inner-product space of real
$m\times m$ matrices ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).
Then for all $\mu,y\in U$,
$$\bigl\lvert h(y)-h(\mu)-\nabla h(\mu)\cdot(y-\mu)\bigr\rvert \le\frac{B}{2}\,\lvert y-\mu\rvert^2 ,$$
where $\nabla h(\mu)\cdot(y-\mu)$ is the Euclidean pairing
([[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]]).

## Facts & Assumptions

**Given:** An open convex set $U\subseteq\mathbb R^m$, a $C^2$ function $h:U\to\mathbb R$, a constant $B\ge0$ with $\lVert H_h(x)\rVert\le B$ on $U$, and points $\mu,y\in U$.

[L1] For $f\in C^2(U)$ on open convex $U$ and $a,a+h\in U$, the Lagrange remainder formula gives some $\theta\in(0,1)$ with $$f(a+h)=T_1f(a;h)+\sum_{\lvert\alpha\rvert=2}\frac{D^\alpha f(a+\theta h)}{\alpha!}h^\alpha .$$ ([[thm-multivariable-taylor-formula-with-lagrange-remainder]])

[L2] The degree-one Taylor polynomial is $T_1f(a;h)=f(a)+\sum_{j=1}^{m}\partial_jf(a)h_j=f(a)+\nabla f(a)\cdot h$. ([[def-multivariable-taylor-polynomial]], [[def-jacobian-matrix-and-gradient]])

[L3] The second-order multi-index sum of [L1] equals $\tfrac12v^{\mathsf T}H_f(a+\theta h)v$ for $v=h$, because the multi-indices of order two contribute the quadratic form of the Hessian, and $H_f$ is the matrix $(\partial_j\partial_kf)$. ([[def-hessian-and-euclidean-critical-point]])

[L4] For a real $m\times m$ matrix $A$ and $v\in\mathbb R^m$, $\lvert v^{\mathsf T}Av\rvert\le\lVert Av\rVert\,\lVert v\rVert\le\lVert A\rVert\,\lVert v\rVert^2$, since $\lvert\langle Av,v\rangle\rvert\le\lVert Av\rVert\lVert v\rVert$ and $\lVert Au\rVert\le\lVert A\rVert$ for unit $u$. ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]])

## Proof

**Proof technique:** direct.

1.1 Fix $\mu,y\in U$ and put $v:=y-\mu$. If $v=0$, then $h(y)-h(\mu)-\nabla h(\mu)\cdot v=0$ and the estimate is $0\le0$; assume from now on that $v\neq0$. Since $h$ is $C^2$ and $U$ is open and convex, [L1] applied with $k=1$, $f=h$, $a=\mu$ and increment $v$ supplies a $\theta\in(0,1)$ with $h(y)=T_1h(\mu;v)+\sum_{\lvert\alpha\rvert=2}\frac{D^\alpha h(\mu+\theta v)}{\alpha!}v^\alpha$. [given, L1]

2.1 By [L2] the polynomial term is $h(\mu)+\nabla h(\mu)\cdot v$, and by [L3] the second-order sum is $\tfrac12v^{\mathsf T}H_h(\mu+\theta v)v$. Hence the Taylor remainder is $$R:=h(y)-h(\mu)-\nabla h(\mu)\cdot v=\tfrac12\,v^{\mathsf T}H_h(\mu+\theta v)v .$$ [step 1.1, L2, L3, algebra]

2.2 Convexity puts $\mu+\theta v\in U$, so the hypothesis gives $\lVert H_h(\mu+\theta v)\rVert\le B$; [L4] with $A=H_h(\mu+\theta v)$ yields $\lvert v^{\mathsf T}H_h(\mu+\theta v)v\rvert\le B\lvert v\rvert^2$. [given, step 1.1, L4]

3.1 Taking absolute values in step 2.1 and inserting step 2.2 gives $\lvert R\rvert\le\tfrac12B\lvert v\rvert^2=\tfrac{B}{2}\lvert y-\mu\rvert^2$, and the case $v=0$ was already disposed of in step 1.1. [step 1.1, step 2.1, step 2.2, algebra] ∎

The bound uses only the operator norm of the Hessian; no symmetry of $H_h$ is needed beyond the identification of the second-order multi-index sum with the quadratic form in [L3].
