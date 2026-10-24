---
id: thm-heavy-ball-rate-on-strongly-convex-quadratics
kind: theorem
title: "Tuned heavy-ball has the minimax root factor on positive-definite quadratics"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-heavy-ball-momentum
  - alg-gradient-descent
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - prop-gradient-of-a-quadratic-matrix-form
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - thm-reals-cauchy-complete
  - thm-of-square-roots
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§7.1, Gradient Methods with Momentum, printed pp. 68–69."
    - title: "Yudong Chen, UW–Madison CS/ISyE/Math/Stat 726, Lecture 9–10: Accelerated Gradient Descent"
      url: "https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf"
      locator: "§1, Warm-up: the heavy-ball method, PDF p. 1."
    - title: "Trung Vu, Convergence of Heavy-Ball Method and Nesterov’s Accelerated Gradient on Quadratic Optimization"
      url: "https://trungvietvu.github.io/notes/2018/Momentum"
      locator: "§2, Heavy-Ball Method, coordinate recurrence and parameter optimization, lines 56–82 of retrieved HTML."
---

## Statement

Let $d\ge1$, let $0<c\le L$, and let $A\in\mathbb R^{d\times d}$ satisfy $A^{\mathsf T}=A$ and $x^{\mathsf T}Ax>0$ for every nonzero $x\in\mathbb R^d$. An eigenvalue of $A$ is a real number $\lambda$ such that $Av=\lambda v$ for some nonzero $v$; assume every eigenvalue lies in $[c,L]$. For a fixed center $w^\star\in\mathbb R^d$, define $F(w)=\tfrac12(w-w^\star)^{\mathsf T}A(w-w^\star)$. Then $w^\star$ is the unique minimizer of $F$. Put $\kappa=L/c$ and define

$$q:=\frac{\sqrt L-\sqrt c}{\sqrt L+\sqrt c}=\frac{\sqrt\kappa-1}{\sqrt\kappa+1}.$$

Here $\nabla F(w)=(\partial_jF(w))_{0\le j<d}$ is the vector of coordinate partial derivatives.

For any constant parameters $\alpha>0$ and $\beta\ge0$, finite horizon $T\ge1$, and initial vector $w_{\mathrm{init}}\in\mathbb R^d$, define the heavy-ball sequence by $w_0=w_1=w_{\mathrm{init}}$ and

$$w_{t+1}=w_t-\alpha\nabla F(w_t)+\beta(w_t-w_{t-1}),\qquad 1\le t<T.$$

For each scalar $\lambda\in[c,L]$, the associated scalar recurrence is $x_{t+1}=(1+\beta-\alpha\lambda)x_t-\beta x_{t-1}$. Define its characteristic polynomial and root factor by

$$p_\lambda(r;\alpha,\beta):=r^2-(1+\beta-\alpha\lambda)r+\beta,\qquad \rho_\lambda(\alpha,\beta):=\max\{|r|:p_\lambda(r;\alpha,\beta)=0\}.$$

This factor is the largest modulus of the two characteristic roots in $\mathbb C$ of the scalar recurrence for eigenvalue $\lambda$, not a one-step Euclidean norm contraction. The tuned parameters are

$$\alpha=\frac{4}{(\sqrt L+\sqrt c)^2},\qquad \beta=q^2.$$

For this choice, $\rho_\lambda(\alpha,\beta)=q$ for every $\lambda\in[c,L]$. If $c<L$, then $p_c(r;\alpha,\beta)=(r-q)^2$ and $p_L(r;\alpha,\beta)=(r+q)^2$; if $c=L$, the only modal polynomial is $r^2$ and its root factor is $0$.

For gradient descent with step $\gamma=2/(L+c)$, the modal multipliers are $1-\gamma\lambda$ and their largest absolute value over $[c,L]$ is

$$\rho_{\mathrm{GD}}=\frac{L-c}{L+c}=\frac{\kappa-1}{\kappa+1}.$$

Thus $\rho_{\mathrm{GD}}>q$ when $c<L$, and both factors are $0$ when $c=L$. Moreover, among all constant heavy-ball parameters $\alpha'>0$ and $\beta'\ge0$, the supremum of their modal root factors over $\lambda\in[c,L]$ is at least $q$. The tuned parameters therefore minimize that interval worst-case root factor. When $c<L$, the repeated endpoint roots permit a linear polynomial prefactor multiplying $q^t$ or $(-q)^t$; the root factor does not assert a one-step norm contraction by $q$.

## Statement references

[[alg-heavy-ball-momentum]]

[[alg-gradient-descent]]

[[prop-gradient-of-a-quadratic-matrix-form]]

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]

[[def-euclidean-inner-product]]

[[def-jacobian-matrix-and-gradient]]

[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]

[[thm-reals-cauchy-complete|Completeness of the real numbers]]

[[thm-of-square-roots]]

[Bottou, Curtis, and Nocedal, Optimization Methods for Large-Scale Machine Learning](https://arxiv.org/pdf/1606.04838)

[Chen, Lecture 9–10: Accelerated Gradient Descent](https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf)

[Vu, Convergence of Heavy-Ball Method and Nesterov’s Accelerated Gradient on Quadratic Optimization](https://trungvietvu.github.io/notes/2018/Momentum)

## Facts & Assumptions

**Given:** The integer $d\ge1$, constants $0<c\le L$, a real symmetric matrix $A$ with $x^{\mathsf T}Ax>0$ for nonzero $x$ and eigenvalues in $[c,L]$, a center $w^\star$, an initial vector $w_{\mathrm{init}}\in\mathbb R^d$ with $w_0=w_1=w_{\mathrm{init}}$, and an arbitrary finite horizon $T\ge1$.

[F1] [[alg-heavy-ball-momentum]]: with a fixed $\alpha>0$ and $\beta\ge0$, the update is $w_{t+1}=w_t-\alpha\nabla F(w_t)+\beta(w_t-w_{t-1})$.

[F2] [[alg-gradient-descent]]: in fixed-step mode, the update is $x\mapsto x-t_k\nabla f(x)$.

[F3] [[def-euclidean-inner-product]]: the standard inner product is $\langle x,y\rangle=\sum_{j<d}x_jy_j$.

[F4] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]: in a real orthonormal basis, self-adjointness of an endomorphism is equivalent to symmetry of its matrix.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F6] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in orthonormal bases, a real matrix representing an adjoint is the transpose of the represented map.

[F7] [[thm-reals-cauchy-complete]] and [[thm-of-square-roots]]: with its usual order and field structure, $\mathbb R$ is a complete ordered field, so every nonnegative real number has a unique nonnegative square root.

[F8] [[prop-gradient-of-a-quadratic-matrix-form]]: for $\phi(x)=\tfrac12\|Cx\|_2^2$, $D\phi(x)[h]=\operatorname{Re}\langle C^\ast Cx,h\rangle$, so its gradient is $C^\ast Cx$.

[F9] [[def-jacobian-matrix-and-gradient]]: for a scalar-valued function, the gradient is the vector of its coordinate partial derivatives.

## Proof

1.1 For $0\le i<d$, let $e_i$ be the standard coordinate vectors. By [F3], $\langle e_i,e_j\rangle=1$ when $i=j$ and $0$ otherwise, so they form an orthonormal basis. Since $A^{\mathsf T}=A$, [F4] makes $x\mapsto Ax$ self-adjoint; [F5] gives an orthonormal eigenbasis $u_1,\ldots,u_d$ with eigenvalues $\lambda_i\in[c,L]$. For the matrix $U$ with columns $u_i$, $U^{\mathsf T}U=I$ and $A=U\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U^{\mathsf T}$. [given, F3, F4, F5, choose]

1.2 By [F7], write $u=\sqrt L$, $v=\sqrt c$, and $q=(u-v)/(u+v)$. Set $\alpha=4/(u+v)^2$, $\beta=q^2$, and $s_\lambda=1+q^2-\alpha\lambda$. Common denominators give $s_c=((u+v)^2+(u-v)^2-4v^2)/(u+v)^2=2q$ and $s_L=((u+v)^2+(u-v)^2-4u^2)/(u+v)^2=-2q$; since $s_\lambda$ is affine decreasing, $-2q\le s_\lambda\le2q$ on $[c,L]$. [given, F7, algebra]

1.3 For any fixed $\alpha'>0$ and $\beta'\ge0$, the statement defines $p_\lambda(r;\alpha',\beta')=r^2-(1+\beta'-\alpha'\lambda)r+\beta'$ and $\rho_\lambda$ for each $\lambda\in[c,L]$, whether or not $\lambda$ is an eigenvalue of $A$. This interval supremum is finite: with $M=1+\beta'+\alpha'L$, every root $z$ satisfies $|z|^2\le M|z|+\beta'$, hence $|z|\le\max\{1,M+\beta'\}$. [given, algebra]

2.1 By [F7], each $\lambda_i\ge c>0$ has a positive square root. Set $C=\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_d})U^{\mathsf T}$. Its factors are invertible, so $C$ is invertible; [F6] gives $C^\ast=C^{\mathsf T}$, and multiplication gives $C^\ast C=U\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U^{\mathsf T}=A$. [given, F6, F7, step 1.1, construct, algebra]

2.2 For $c<L$, we have $q>0$ and step 1.2 gives $|s_\lambda|<2q$ for $c<\lambda<L$. The roots of $p_\lambda$ are $(s_\lambda\pm i\sqrt{4q^2-s_\lambda^2})/2$, whose squared modulus is $q^2$; at $c$ and $L$ the polynomials are $(r-q)^2$ and $(r+q)^2$. If $c=L$, then $q=0$, $\alpha=1/c$, $\beta=0$, and the only polynomial is $p_c(r)=r^2$. Thus every tuned modal root factor is $q$. [given, F7, step 1.2, algebra, cases]

2.3 Assume $c<L$ and fix arbitrary $\alpha'>0$, $\beta'\ge0$. Let $R=\sup_{\lambda\in[c,L]}\rho_\lambda(\alpha',\beta')$, finite by step 1.3. If $R\ge1$, then $R>q$ by step 1.2; if $R=0$, the endpoint polynomials force $\beta'=0$ and $\alpha'c=\alpha'L=1$, impossible since $c<L$, so in the remaining case $0<R<1$. The endpoint root products give $0\le\beta'\le R^2$. For real endpoint roots in $[-R,R]$, $p_c(R)=(R-r_1)(R-r_2)\ge0$ and $p_L(-R)=(-R-r_1)(-R-r_2)\ge0$; for conjugate roots these values are squared moduli. [given, step 1.2, step 1.3, assume-case, algebra]

3.1 The objective is $F(w)=\phi(w-w^\star)$ for $\phi(x)=\tfrac12\|Cx\|_2^2$. Applying [F8] to each increment $h$ gives $D F(w)[h]=\operatorname{Re}\langle C^\ast C(w-w^\star),h\rangle$, so [F9] yields $\nabla F(w)=C^\ast C(w-w^\star)=A(w-w^\star)$. Since $C$ is invertible, $F(w)=\tfrac12\|C(w-w^\star)\|_2^2\ge0$ with equality exactly at $w=w^\star$, proving unique minimization. [given, F8, F9, step 2.1, algebra]

3.2 For $c<L$, at either endpoint the scalar recurrence has polynomial $(z-r)^2$ with $r=q$ or $r=-q$, so $r\ne0$. For arbitrary real $a,b$, substitution shows $x_t=(a+bt)r^t$ satisfies $x_{t+1}-2rx_t+r^2x_{t-1}=r^{t+1}((a+b(t+1))-2(a+bt)+(a+b(t-1)))=0$; choosing $a=x_0$ and $b=x_1/r-x_0$ matches any initial pair. Thus a repeated endpoint mode can contain $t r^t$, which explains why the root factor alone is not a one-step norm contraction. [given, step 2.2, construct, algebra]

3.3 In the case $0<R<1$ of [2.3], expanding its endpoint inequalities gives $\alpha'c\ge(1-R)(R-\beta')/R$ and $\alpha'L\le(1+R)(R+\beta')/R$. Since $\beta'\le R^2<R$, the first right-hand side is positive, so division yields $\kappa=L/c\le(1+R)(R+\beta')/((1-R)(R-\beta'))$. Also $(1+R)(R-\beta')-(1-R)(R+\beta')=2(R^2-\beta')\ge0$, hence $(R+\beta')/(R-\beta')\le(1+R)/(1-R)$ and $\kappa\le((1+R)/(1-R))^2$. By [F7], taking positive square roots and rearranging gives $R\ge(\sqrt\kappa-1)/(\sqrt\kappa+1)=q$; together with the $R\ge1$ case, every admissible pair has $R\ge q$. [given, F7, step 2.3, algebra]

4.1 Let $e_t=w_t-w^\star$ and $x_{i,t}=u_i^{\mathsf T}e_t$. By [F1] and step 3.1, $e_{t+1}=(1+\beta)e_t-\alpha A e_t-\beta e_{t-1}$ for $1\le t<T$. Since $Au_i=\lambda_i u_i$ and $A^{\mathsf T}=A$, projection onto $u_i$ gives $x_{i,t+1}=(1+\beta-\alpha\lambda_i)x_{i,t}-\beta x_{i,t-1}$, whose characteristic polynomial is $p_{\lambda_i}(r;\alpha,\beta)$. [given, F1, step 1.1, step 3.1, algebra]

4.2 For gradient descent with $\gamma=2/(L+c)$, [F2] and step 3.1 give the scalar update $x_{i,t+1}=(1-\gamma\lambda_i)x_{i,t}$. The affine multiplier decreases from $(L-c)/(L+c)$ at $c$ to $-(L-c)/(L+c)$ at $L$, so its largest absolute value on $[c,L]$ is $\rho_{\mathrm{GD}}=(L-c)/(L+c)$. [given, F2, step 3.1, algebra]

5.1 Put $s=\sqrt\kappa$. By step 4.2, $\rho_{\mathrm{GD}}=(\kappa-1)/(\kappa+1)=(s^2-1)/(s^2+1)$, while $q=(s-1)/(s+1)$ by its definition. If $s>1$, subtraction gives $\rho_{\mathrm{GD}}-q=2s(s-1)/((s^2+1)(s+1))>0$; if $s=1$, both factors are zero. This proves the claimed gradient-descent comparison. [given, F7, step 2.2, step 4.2, algebra]

6.1 If $c=L$, step 2.2 gives tuned root factor $q=0$, which is minimal since root factors are nonnegative. If $c<L$, step 2.2 gives tuned interval factor $q$ and step 3.3 gives the lower bound $R\ge q$ for every constant admissible pair, so the tuned parameters are minimax; step 5.1 gives the strict comparison with gradient descent, while step 3.2 records the repeated-root qualification. [given, step 2.2, step 3.2, step 3.3, step 5.1, algebra] ∎
