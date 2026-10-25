---
id: lem-inexact-newton-error-recurrence-under-lipschitz-jacobian
kind: lemma
title: "An inexact Newton residual gives a local error recurrence"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - lem-newton-contraction-near-an-invertible-derivative
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - def-invertible-euclidean-linear-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ron S. Dembo, Stanley C. Eisenstat, and Trond Steihaug, Inexact Newton Methods, SIAM Journal on Numerical Analysis 19 (1982), 400–408"
      url: "https://wiki.math.ntnu.no/_media/tma4180/2018v/inexactnewton.pdf"
      locator: "Theorem 2.3, pp. 402–403: local contraction from a relative linear-system residual; Theorem 3.3, pp. 404–405: residual conditions for superlinear and higher order."
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 §7.1, Theorems 7.1–7.2 and equations (7.5)–(7.8), printed pp. 166–168 / PDF pp. 184–186; the source gives an informal recurrence derivation, which is proved locally here."
---

## Statement

For $n=0$, call a linear map invertible when it has a two-sided linear inverse,
extending the positive-dimensional convention of [[def-invertible-euclidean-linear-map]].
Let $n\ge0$ be an integer, let $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and
$x_*\in U$ satisfy $F(x_*)=0$ with $J_*:=DF(x_*)$ invertible. Suppose a
closed Euclidean ball $K=\overline B_2(x_*,R)\subseteq U$ with $R>0$ is convex and
$$
\|J(u)-J(v)\|_{\rm op}\le L\|u-v\|_2\qquad(u,v\in K),
$$
where $J(x):=DF(x)$ and
$\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$ for $n\ge1$;
for $n=0$ set the norm of the unique linear map to $0$. Let
$\|v\|_*:=\|J_*v\|_2$ and fix $\bar\eta\in[0,1)$. There are constants
$r_0>0$, $C_F>0$, and $C\ge0$ such that, whenever
$\|x-x_*\|_2\le r_0$, $0\le\eta\le\bar\eta$, and $p,r\in\mathbb R^n$
satisfy
$$
J(x)p+F(x)=r,\qquad \|r\|_2\le\eta\|F(x)\|_2,
$$
then $J(x)$ is invertible,
$\|F(x)\|_2\le C_F\|x-x_*\|_*$, and
$$
\|x+p-x_*\|_*\le\bigl(\eta+C\|x-x_*\|_*\bigr)\|x-x_*\|_*.
$$

## Facts & Assumptions

**Given:** $U,F,x_*,J,K,L,\bar\eta,x,\eta,p,r$ as in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability at every point and continuity of the derivative-matrix entries.

[F2] [[def-jacobian-matrix-and-gradient]]: the Jacobian matrix records the first partial derivatives in the standard coordinates.

[F3] [[lem-newton-contraction-near-an-invertible-derivative]]: if $DF(x_*)$ is invertible for a $C^1$ map, then on a sufficiently small closed ball every $DF(x)$ is invertible and its inverse has a uniform operator-norm bound.

[F4] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: for $x,x_*\in K$, $F(x_*)=0$, and $J$ $L$-Lipschitz on $K$, $\|F(x)-J(x)(x-x_*)\|_2\le(L/2)\|x-x_*\|_2^2$.

[F5] [[def-invertible-euclidean-linear-map]]: for $n\ge1$, an invertible square linear map has a two-sided linear inverse; the Statement explicitly extends this convention to $n=0$.

[F6] [[def-euclidean-inner-product]]: $\|v\|_2=\sqrt{\langle v,v\rangle}$ is the Euclidean norm.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 If $n=0$, the space $\mathbb R^0$ is a singleton by [F6]. Its unique map $A$ is linear and satisfies $A(A(0))=0$, so taking $B=A$ verifies both inverse identities in the Statement's convention. Thus $J(x)=J_*=A$ is invertible, and $x=x_*=p=r=F(x)=0$ in this space. Take $r_0=R$, $C_F=1$, and $C=0$. Every claimed estimate is $0\le0$, so the assertion holds. For the remainder assume $n\ge1$, so the imported positive-dimensional Newton lemmas and operator-norm comparisons apply. [given, F6, algebra]

1.2 Put $K_*:=\|J_*^{-1}\|_{\rm op}$. The inverse identity gives $\|e\|_2=\|J_*^{-1}J_*e\|_2\le K_*\|e\|_*$, and the operator-norm definition gives $\|e\|_*\le\|J_*\|_{\rm op}\|e\|_2$. By [F3], choose a smaller radius $r_1\le R$ and $M>0$ such that every $J(x)$ on $\overline B_2(x_*,r_1)$ is invertible and $\|J(x)^{-1}\|_{\rm op}\le M$. Decrease $r_1$ if necessary so $r_1\le1$, and set $r_0:=r_1$. [given, F1, F2, F3, F5, F6, choose]

2.1 Let $e:=x-x_*$. By [F4] and $\|J(x)-J_*\|_{\rm op}\le L\|e\|_2$, $\|F(x)-J_*e\|_2\le\|F(x)-J(x)e\|_2+\|(J(x)-J_*)e\|_2\le\frac{3L}{2}\|e\|_2^2$. Since $\|e\|_2\le K_*\|e\|_*$ and $\|e\|_*\le\|J_*\|_{\rm op}r_0$, this gives $\|F(x)\|_2\le\left(1+\frac{3L}{2}K_*^2\|J_*\|_{\rm op}r_0\right)\|e\|_*=:C_F\|e\|_*$. [given, F4, F6, step 1.2, algebra]

3.1 The linear residual equation and steps 1.2–2.1 imply $\|p\|_2\le M\|J(x)p\|_2\le M(1+\eta)\|F(x)\|_2\le M(1+\bar\eta)C_F\|e\|_*$. [step 1.2, step 2.1, given, algebra]

4.1 Put $e_+:=x+p-x_*$. From $J(x)p=-F(x)+r$, $J_*e_+=J_*e-F(x)+r+(J_*-J(x))p$. Step 1.2 and [F4] give $\|F(x)-J_*e\|_2\le(3L/2)\|e\|_2^2\le(3L/2)K_*^2\|e\|_*^2$, so $\|r\|_2\le\eta\|F(x)\|_2\le\eta\|e\|_*+(3\eta L K_*^2/2)\|e\|_*^2$. Also $\|J_*-J(x)\|_{\rm op}\le LK_*\|e\|_*$ and step 3.1 bounds $\|p\|_2\le M(1+\bar\eta)C_F\|e\|_*$. The triangle inequality and $\eta\le\bar\eta$ yield $\|e_+\|_*\le\eta\|e\|_*+\left(\frac{3(1+\bar\eta)LK_*^2}{2}+LK_*M(1+\bar\eta)C_F\right)\|e\|_*^2$. Set $C$ equal to this nonnegative coefficient; this is the claimed recurrence, and step 1.2 supplies invertibility. [given, F4, step 1.2, step 3.1, algebra] ∎
