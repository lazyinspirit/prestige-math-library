---
id: lem-trust-region-subproblem-optimality-and-hard-case
kind: lemma
title: "Global trust-region minimizers satisfy the shifted-Hessian conditions, including the hard case"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-trust-region-quadratic-model-and-ratio
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-definite-and-indefinite-hessian-quadratic-forms
  - thm-intermediate-value
  - thm-algebra-of-continuous-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, Theorem 4.1 statement, printed p. 70 / PDF p. 88; §4.3, ‘The Hard Case’ and ‘Proof of Theorem 4.1,’ printed pp. 87–91 / PDF pp. 105–109: necessary-and-sufficient shifted-Hessian conditions and singular hard case."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 15–16: Theorem 3.9 and proof of the positive-semidefinite shifted-Hessian condition."
---

## Statement

Let $n\ge1$, let $B\in\mathbb R^{n\times n}$ be symmetric, let $g\in\mathbb R^n$, and
let $\Delta>0$. Every global minimizer $p_*$ of
$$q(p):=\langle g,p\rangle+\tfrac12p^TBp\quad\text{over }\|p\|_2\le\Delta$$
has a multiplier $\lambda\ge0$ such that
$$(B+\lambda I)p_*=-g,\qquad B+\lambda I\succeq0,\qquad \lambda(\Delta-\|p_*\|_2)=0.$$
Conversely, every feasible $p_*$ satisfying these conditions is a global
minimizer. A global minimizer always exists.

The singular hard case is included as follows. Let $\mu$ be the least
eigenvalue of $B$ and $E_\mu$ its eigenspace. If $\mu<0$, $g\perp E_\mu$,
and the solution $p_0$ of
$(B-\mu I)p_0=-g$, $p_0\perp E_\mu$, has $\|p_0\|_2\le\Delta$, then
$$p_*=p_0+z,\qquad z\in E_\mu,\qquad \|z\|_2^2=\Delta^2-\|p_0\|_2^2$$
is a global minimizer with the singular multiplier $\lambda=-\mu$. If
$\|p_0\|_2<\Delta$, both signs of any chosen nonzero $z$ of the required
length give distinct minimizers.

## Facts & Assumptions

**Given:** $n\ge1$, a real symmetric matrix $B\in\mathbb R^{n\times n}$, a vector $g\in\mathbb R^n$, a radius $\Delta>0$, and the trust-region quadratic model and Euclidean conventions of [[def-trust-region-quadratic-model-and-ratio]].

[F1] [[def-trust-region-quadratic-model-and-ratio]]: the feasible set is the closed Euclidean ball $\{p:\|p\|_2\le\Delta\}$ and the model differs from $q$ only by the constant $f(x)$.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis.

[F3] [[def-definite-and-indefinite-hessian-quadratic-forms]]: a symmetric matrix $C$ is positive semidefinite exactly when $v^TCv\ge0$ for every $v$.

[F4] [[thm-intermediate-value]]: a continuous real-valued function on a closed interval takes every value between its endpoint values.

[F5] [[thm-algebra-of-continuous-functions]]: finite sums, products, and quotients with nonzero denominators of continuous real functions are continuous on their domains.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], choose an orthogonal matrix $U$ such that $D:=U^TBU=\operatorname{diag}(\mu_1,\ldots,\mu_n)$ with $\mu_1\le\cdots\le\mu_n$. Put $c:=U^Tg$ and write $p=Uy$. Then $q(Uy)=\sum_i(c_i y_i+\tfrac12\mu_i y_i^2)$ and $\|Uy\|_2=\|y\|_2$, so it suffices to construct a minimizer in these coordinates. [given, F1, F2, algebra]

2.1 Set $\lambda_0:=\max(0,-\mu_1)$ and, for $\lambda>\lambda_0$, define $\varphi(\lambda):=\sum_i c_i^2/(\mu_i+\lambda)^2$ and $y_i(\lambda):=-c_i/(\mu_i+\lambda)$. Every denominator is positive, so [F5] gives continuity of $\varphi$. Let $Z:=\{i:\mu_i+\lambda_0=0\}$. If some $i\in Z$ has $c_i\ne0$, choose $\lambda_a>\lambda_0$ with $\lambda_a-\lambda_0<|c_i|/\Delta$; its single term gives $\varphi(\lambda_a)>\Delta^2$. Otherwise $c_i=0$ for $i\in Z$. Then $$\varphi_0:=\sum_{i\notin Z}\frac{c_i^2}{(\mu_i+\lambda_0)^2}$$ is finite. If $\varphi_0>\Delta^2$, each term with $i\notin Z$ is continuous at $\lambda_0$ by [F5], while each term with $i\in Z$ is zero for $\lambda>\lambda_0$ and extends as the constant zero. Thus the extension with value $\varphi_0$ is continuous at $\lambda_0$, so choose $\lambda_a>\lambda_0$ close enough that $\varphi(\lambda_a)>\Delta^2$. In either case with $\varphi(\lambda_a)>\Delta^2$, put $S:=\sum_i|\mu_i|$ and choose $R>\max\{\lambda_a,S+2\|c\|_2/\Delta\}$. Then $\mu_i+R>2\|c\|_2/\Delta$ for every $i$, giving $\varphi(R)<\Delta^2/4<\Delta^2$. By [F4] on $[\lambda_a,R]$, choose $\lambda>\lambda_0$ with $\varphi(\lambda)=\Delta^2$. The vector $y_i=-c_i/(\mu_i+\lambda)$ then has norm $\Delta$, $(D+\lambda I)y=-c$, and $D+\lambda I$ is positive definite. [step 1.1, F4, F5, algebra, choose]

3.1 In the remaining case every $i\in Z$ has $c_i=0$ and the finite sum $\varphi_0$ in step 2.1 satisfies $\varphi_0\le\Delta^2$. Set $y_i^0=-c_i/(\mu_i+\lambda_0)$ for $i\notin Z$ and $y_i^0=0$ for $i\in Z$. If $\lambda_0=0$, take $y=y^0$; then $D$ is positive semidefinite, $Dy=-c$, and $\|y\|_2\le\Delta$. If $\lambda_0>0$, the zero-denominator coordinates form the least-eigenvalue eigenspace. Add a vector $z$ supported on those coordinates with $\|z\|_2^2=\Delta^2-\|y^0\|_2^2$ and take $y=y^0+z$. Such a vector exists by scaling a unit eigenvector; it is orthogonal to $y^0$. Then $(D+\lambda_0 I)y=-c$, $D+\lambda_0 I\succeq0$, and $\|y\|_2=\Delta$. This is the hard-case construction. [step 1.1, step 2.1, F3, algebra, construct]

4.1 In either construction, returning to $p=Uy$ gives a feasible vector and a $\lambda\ge0$ with $(B+\lambda I)p=-g$, $B+\lambda I\succeq0$, and $\lambda(\Delta-\|p\|_2)=0$. For every feasible $v$, direct expansion gives $$q(v)-q(p)=\tfrac12(v-p)^T(B+\lambda I)(v-p) +\tfrac\lambda2(\|p\|_2^2-\|v\|_2^2)\ge0,$$ because the first term is nonnegative by [F3] and the second is zero if $\lambda=0$ and nonnegative otherwise. Thus the constructed vector is a global minimizer. [step 2.1, step 3.1, F3, given, algebra]

5.1 Conversely, let $p_*$ be any global minimizer. Then $q(p_*)=q(p)$, where $p$ is the constructed minimizer, and $p_*$ is feasible. Applying the identity in step 4.1 with $v=p_*$ expresses zero as the sum of two nonnegative terms. In particular, for $H:=B+\lambda I$, $(p_*-p)^TH(p_*-p)=0$. By [F2], diagonalize the symmetric positive semidefinite matrix $H$ from step 4.1. In these coordinates the last quadratic form is $\sum_i\nu_iw_i^2=0$ with every $\nu_i\ge0$, so $\nu_iw_i=0$ for every $i$ and $H(p_*-p)=0$. Since $Hp=-g$, this gives $Hp_*=-g$. If $\lambda>0$, the other nonnegative term in the identity vanishes only when $\|p_*\|_2=\Delta$; if $\lambda=0$, complementarity is automatic. Thus $p_*$ satisfies all three conditions. [step 4.1, F2, F3, given, algebra, choose]

6.1 The constructed case $\lambda_0>0$ has $g\perp E_\mu$ and adds exactly the missing boundary component in $E_\mu$; when its length is positive, opposite choices of $z$ are distinct and the same inequality in step 4.1 proves both globally minimizing. This verifies the stated hard-case clause. [step 3.1, step 4.1] ∎

