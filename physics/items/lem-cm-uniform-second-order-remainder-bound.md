---
id: lem-cm-uniform-second-order-remainder-bound
kind: lemma
title: "A uniform Hessian bound controls the second-order Taylor remainder"
status: published
origin: pipeline
domain: mathematics
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-convex-subset-of-euclidean-space, def-euclidean-inner-product, def-euclidean-linear-map, def-hessian-and-euclidean-critical-point, def-jacobian-matrix-and-gradient, def-matrix-space, def-multivariable-taylor-polynomial, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-clairaut-schwarz-mixed-partials, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-operator-norm-is-the-largest-singular-value]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-euclidean-linear-map: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-space: mathematical-premise
  def-multivariable-taylor-polynomial: mathematical-premise
  def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-multivariable-taylor-formula-with-lagrange-remainder: mathematical-premise
  thm-operator-norm-is-the-largest-singular-value: mathematical-premise
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
$C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); for $x\in U$,
$H_h(x)$ is its Hessian ([[def-hessian-and-euclidean-critical-point]]).
For
$M=(M_{ij})\in M_{m\times m}(\mathbb R)$ ([[def-matrix-space]]), define
$\widehat M:\mathbb R^m\to\mathbb R^m$ by
$$(\widehat Mv)_i:=\sum_{j=0}^{m-1}M_{ij}v_j,\qquad 0\le i<m;$$
for all $u,v\in\mathbb R^m$ and $\alpha,\beta\in\mathbb R$, termwise
distributivity gives
$\widehat M(\alpha u+\beta v)=\alpha\widehat Mu+\beta\widehat Mv$, so
$\widehat M$ is linear in the sense of [[def-euclidean-linear-map]]; write
$Mv:=\widehat Mv$.
For $v\in\mathbb R^m$, the quadratic-form notation $v^{\mathsf T}Mv$ means
$\langle v,Mv\rangle$ in this Euclidean inner product.
Define $\lVert M\rVert:=\lVert\widehat M\rVert_{\mathrm{op}}$, the operator
norm of this linear map ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]])
using the Euclidean inner product on $\mathbb R^m$
([[def-euclidean-inner-product]]); the maximum in this definition exists by
[[thm-operator-norm-is-the-largest-singular-value]]. Let $B\in[0,+\infty)$ satisfy
$$\bigl\lVert H_h(x)\bigr\rVert\le B\qquad\text{for every }x\in U.$$
Then for all $\mu,y\in U$,
$$\bigl\lvert h(y)-h(\mu)-\nabla h(\mu)\cdot(y-\mu)\bigr\rvert \le\frac{B}{2}\,\lvert y-\mu\rvert^2 ,$$
where $\nabla h(\mu)\cdot(y-\mu)$ is the Euclidean pairing
([[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]]).

## Facts & Assumptions

**Given:** An open convex set $U\subseteq\mathbb R^m$, a $C^2$ function $h:U\to\mathbb R$, a constant $B\ge0$ with $\lVert H_h(x)\rVert\le B$ on $U$, and points $\mu,y\in U$.

[L1] For $f\in C^2(U)$ on open convex $U$ and $a,a+h\in U$, the Lagrange remainder formula gives some $\theta\in(0,1)$ with $$f(a+h)=T_1f(a;h)+\sum_{\lvert\alpha\rvert=2}\frac{D^\alpha f(a+\theta h)}{\alpha!}h^\alpha .$$ ([[thm-multivariable-taylor-formula-with-lagrange-remainder]])

[L2] The degree-one Taylor polynomial is $T_1f(a;h)=f(a)+\sum_{j=0}^{m-1}\partial_jf(a)h_j=f(a)+\nabla f(a)\cdot h$, using the zero-based coordinates of [[def-jacobian-matrix-and-gradient]] and the multi-index convention of [[def-multivariable-taylor-polynomial]].

[L3] Since $f\in C^2(U)$, its mixed partial derivatives commute by Clairaut–Schwarz ([[thm-clairaut-schwarz-mixed-partials]]). Thus the second-order multi-index sum of [L1] equals $\tfrac12v^{\mathsf T}H_f(a+\theta h)v$ for $v=h$: the diagonal terms are $\tfrac12(\partial_i^2f)v_i^2$ and each off-diagonal pair contributes $(\partial_i\partial_j f)v_iv_j$. The Hessian convention is $H_f=(\partial_i\partial_j f)_{i,j<m}$ ([[def-hessian-and-euclidean-critical-point]]).

[L4] For a real $m\times m$ matrix $A$ and $v\in\mathbb R^m$, $\lvert v^{\mathsf T}Av\rvert\le\lVert Av\rVert\,\lVert v\rVert\le\lVert A\rVert\,\lVert v\rVert^2$, since $\lvert\langle Av,v\rangle\rvert\le\lVert Av\rVert\lVert v\rVert$ and $\lVert Au\rVert\le\lVert A\rVert$ for unit $u$. ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]])

[L5] For a linear map between finite-dimensional inner-product spaces with nonzero domain, the operator-norm maximum exists, is attained, and equals the largest singular value. For the zero domain the norm is defined as $0$, with no unit vector at which to attain a maximum. Here the domain is $\mathbb R^m$ with $m\ge1$. ([[thm-operator-norm-is-the-largest-singular-value]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]])

[L6] Matrices in $M_{m\times m}(\mathbb R)$ have zero-based entry indices $0\le i,j<m$ ([[def-matrix-space]]). A map $L:\mathbb R^m\to\mathbb R^m$ is linear when $L(\alpha u+\beta v)=\alpha L(u)+\beta L(v)$ for all $u,v\in\mathbb R^m$ and $\alpha,\beta\in\mathbb R$; the coordinate formula for $\widehat M$ in the Statement satisfies this identity termwise. ([[def-euclidean-linear-map]])

## Proof

**Proof technique:** direct.

1.1 Fix $\mu,y\in U$ and put $v:=y-\mu$. If $v=0$, then $h(y)-h(\mu)-\nabla h(\mu)\cdot v=0$ and the estimate is $0\le0$; assume from now on that $v\neq0$. Since $h$ is $C^2$ and $U$ is open and convex, [L1] applied with $k=1$, $f=h$, $a=\mu$ and increment $v$ supplies a $\theta\in(0,1)$ with $h(y)=T_1h(\mu;v)+\sum_{\lvert\alpha\rvert=2}\frac{D^\alpha h(\mu+\theta v)}{\alpha!}v^\alpha$. [given, L1]

2.1 By [L2] the polynomial term is $h(\mu)+\nabla h(\mu)\cdot v$, and by [L3] the second-order sum is $\tfrac12v^{\mathsf T}H_h(\mu+\theta v)v$. Hence the Taylor remainder is $$R:=h(y)-h(\mu)-\nabla h(\mu)\cdot v=\tfrac12\,v^{\mathsf T}H_h(\mu+\theta v)v .$$ [step 1.1, L2, L3, algebra]

2.2 Convexity puts $\mu+\theta v\in U$, so the hypothesis gives $\lVert H_h(\mu+\theta v)\rVert\le B$; [L4] with $A=H_h(\mu+\theta v)$ yields $\lvert v^{\mathsf T}H_h(\mu+\theta v)v\rvert\le B\lvert v\rvert^2$. [given, step 1.1, L4, L5, L6]

3.1 Taking absolute values in step 2.1 and inserting step 2.2 gives $\lvert R\rvert\le\tfrac12B\lvert v\rvert^2=\tfrac{B}{2}\lvert y-\mu\rvert^2$, and the case $v=0$ was already disposed of in step 1.1. [step 1.1, step 2.1, step 2.2, algebra] ∎

The $C^2$ hypothesis and Clairaut–Schwarz provide the symmetry needed to identify the multi-index sum with the Hessian quadratic form in [L3]. The norm estimate itself uses only the operator norm.
