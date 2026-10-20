---
id: thm-soft-margin-svm-dual-and-kkt-conditions
kind: theorem
title: Soft-margin SVM duality and KKT conditions
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-hard-and-soft-margin-support-vector-machines
  - lem-soft-margin-svm-primal-attainment
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
  - lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization
  - prop-pythagorean-parallelogram-and-polarisation-identities
  - def-convex-program-duality-and-slater-condition
  - thm-slater-strong-duality-and-dual-attainment
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.2.1, printed pp. 420–421; Sections 12.3.1–12.3.3, printed pp. 423–430.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.4.1, printed pp. 141–144; the local proof supplies strong duality and KKT hypotheses.'
---

## Statement

Let $n\ge1$, $C>0$, let $\mathcal H$ be a real Hilbert space, and let $\phi:X\to\mathcal H$ be a feature map with kernel $k(x,z)=\langle\phi(x),\phi(z)\rangle_{\mathcal H}$. For any finite sample $(x_i,y_i)_{i=1}^n$ with $y_i\in\{-1,+1\}$, the soft-margin SVM primal attains its minimum. Its Lagrangian dual is

$$\max_{\alpha\in\mathbb R^n}\ \sum_{i=1}^n\alpha_i-\frac12\sum_{i=1}^n\sum_{j=1}^n\alpha_i\alpha_jy_iy_jk(x_i,x_j)$$

subject to $0\le\alpha_i\le C$ for every $i$ and $\sum_i\alpha_i y_i=0$. The dual maximum is attained and equals the primal minimum. For every primal minimizer there are dual multipliers $\alpha_i$ and $\mu_i$ such that

$$w=\sum_{i=1}^n\alpha_i y_i\phi(x_i),\qquad \sum_{i=1}^n\alpha_i y_i=0,\qquad C-\alpha_i-\mu_i=0,$$

$$\alpha_i\bigl(1-\xi_i-y_i(\langle w,\phi(x_i)\rangle+b)\bigr)=0,\qquad \mu_i\xi_i=0,$$

with $\alpha_i\ge0$ and $\mu_i\ge0$. Conversely, any primal-feasible tuple and nonnegative multipliers satisfying these stationarity and complementarity equations are globally optimal. An index with $\alpha_i>0$ is a support vector; if $0<\alpha_i<C$, then $\xi_i=0$ and its signed margin equals $1$. The single dual equality row is independent because $(y_1,\ldots,y_n)\ne0$.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §§12.2.1 and 12.3.1–12.3.3](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.4.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-hard-and-soft-margin-support-vector-machines]]

[[lem-soft-margin-svm-primal-attainment]]

[[lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization]]

[[thm-slater-strong-duality-and-dual-attainment]]

[[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]

## Facts & Assumptions

**Given:** A finite labeled sample in a real Hilbert feature space, the induced kernel, and $C>0$.

[F1] The soft-margin primal has an attained minimum ([[lem-soft-margin-svm-primal-attainment]]).

[F2] Projection onto a finite-dimensional subspace preserves the residual orthogonality and does not increase norm ([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

[F3] Orthogonal vectors satisfy the Pythagorean identity ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[F4] For a finite sample, the kernel Gram matrix has vectors $z_i\in\mathbb R^n$ with $K_{ij}=z_i^Tz_j$ ([[lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization]]).

[F5] A finite-dimensional convex program uses proper closed convex objective and constraint functions, a full-row-rank equality matrix, and the inequality convention $g_i\le0$ with nonnegative Lagrange multipliers ([[def-convex-program-duality-and-slater-condition]]).

[F6] For a finite-dimensional convex program with independent equality rows, relative-interior Slater, and a finite attained primal value, the dual optimum is attained, the values agree, and inequality complementarity holds ([[thm-slater-strong-duality-and-dual-attainment]]).

[F7] The inequality-program convention uses $g_i\le0$ and Lagrangian $f+\lambda^Tg$ with $\lambda\ge0$ ([[def-inequality-constrained-program-and-kkt-geometry]]).

[F8] In a differentiable convex program on an open convex domain, every feasible tuple satisfying KKT conditions is a global minimizer ([[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]).

## Proof




1.1 Let $(w_*,b_*,\xi_*)$ be any primal minimizer, which exists by [F1], and let $M=\operatorname{span}\{\phi(x_i):1\le i\le n\}$. Project $w_*$ onto $M$ using [F2]; its residual is orthogonal to every $\phi(x_i)$, so the projection preserves all margins and slacks. If the residual were nonzero, [F3] would give a strictly smaller squared norm and hence a strictly smaller objective, contradicting minimality because the regularization coefficient is $1/2>0$. Thus every primal minimizer has $w_*\in M$. [given, F1, F2, F3, construct]


2.1 Identify $M$ with a Euclidean space using an orthonormal basis. In the finite-dimensional variable space $M\times\mathbb R\times\mathbb R^n$, the objective is a proper continuous convex function and the $2n$ inequality constraints are continuous affine functions with the sign convention [F7]. No inequality is removed by the domain-preserving convention in [F5]: all functions have full domain, and sending the corresponding $\xi_i\to-\infty$ makes either constraint function positive. There are no primal equality rows, so the full-row-rank condition in [F5] holds vacuously. [step 1.1, F5, F7, algebra]


3.1 The point $w=0$, $b=0$, $\xi_i=2$ has strict slack in every constraint: $1-\xi_i-y_i(\langle w,\phi(x_i)\rangle+b)=-1<0$ and $-\xi_i=-2<0$. The objective and all constraint domains are the whole finite-dimensional variable space, so this point lies in their relative interiors. Together with the finite attained primal value from [F1], this verifies every hypothesis of [F6]. [step 1.1, step 2.1, F1, F6, construct]


3.2 Write the margin constraints as $g_i^{(m)}:=1-\xi_i-y_i(\langle w,\phi(x_i)\rangle+b)\le0$ and the nonnegative-slack constraints as $g_i^{(s)}:=-\xi_i\le0$. Give them multipliers $\alpha_i\ge0$ and $\mu_i\ge0$, respectively. The Lagrangian is $L=\frac12\|w\|^2+C\sum_i\xi_i+\sum_i\alpha_i g_i^{(m)}+\sum_i\mu_i g_i^{(s)}$. [step 2.1, F5, F7, construct]


4.1 Put $v:=\sum_i\alpha_i y_i\phi(x_i)$. The terms of $L$ depending on $w$ are $\frac12\|w\|^2-\langle w,v\rangle=\frac12\|w-v\|^2-\frac12\|v\|^2$, so their infimum is $-\frac12\|v\|^2$. The infimum over the unrestricted bias $b$ is finite exactly when $\sum_i\alpha_i y_i=0$, and the infimum over each unrestricted $\xi_i$ is finite exactly when $C-\alpha_i-\mu_i=0$. Thus the dual-feasible conditions are $\sum_i\alpha_i y_i=0$ and $0\le\alpha_i\le C$. [step 3.2, algebra]


4.2 Apply [F6] using the verified hypotheses in [step 3.1]. It gives an attained dual optimum $(\alpha,\mu)$ with the same value as the primal optimum and complementarity for both families $g_i^{(m)}$ and $g_i^{(s)}$. At any fixed primal minimizer, these equal values and complementarity make $L$ attain its unconstrained infimum; its derivatives in $w$, $b$, and each $\xi_i$ therefore vanish. [step 3.1, step 3.2, F6, algebra]


5.1 For any finite list $u_1,\ldots,u_m\in X$ and $c_1,\ldots,c_m\in\mathbb R$, symmetry and bilinearity of the real inner product give $\sum_{r,s}c_rc_sk(u_r,u_s)=\langle\sum_r c_r\phi(u_r),\sum_s c_s\phi(u_s)\rangle=\|\sum_r c_r\phi(u_r)\|^2\ge0$. Thus the feature-induced kernel $k$ is real positive semidefinite, so its sample Gram matrix satisfies the hypothesis of [F4]. Since $k(x_i,x_j)=\langle\phi(x_i),\phi(x_j)\rangle$, $\|v\|^2=\sum_{i,j}\alpha_i\alpha_jy_iy_jk(x_i,x_j)$. By [F4], the matrix $(y_iy_jk(x_i,x_j))_{i,j}$ is the Gram matrix of $y_i z_i$, so its quadratic form is nonnegative. Hence the displayed dual objective is concave. Its equality row has coefficient vector $y\ne0$, because $n\ge1$ and each $y_i\in\{-1,+1\}$, so that row is independent. [step 4.1, F4, algebra]


5.2 Differentiating the Lagrangian of [step 3.2] gives $w=\sum_i\alpha_i y_i\phi(x_i)$, $\sum_i\alpha_i y_i=0$, and $C-\alpha_i-\mu_i=0$. The last equation and $\mu_i\ge0$ give $\alpha_i\le C$; together with $\alpha_i\ge0$ these are the dual box constraints. The complementarity equations supplied by [F6] are $\alpha_i g_i^{(m)}=0$ and $\mu_i g_i^{(s)}=0$, which are exactly the two equations in the Statement. [step 4.2, step 3.2, F6, algebra]


6.1 The finite-dimensional primal has differentiable convex objective and affine convex constraints on the open convex variable space identified in [step 2.1]. Thus [F8] certifies that any feasible tuple satisfying the stationarity and complementarity equations is a global primal minimizer. If $0<\alpha_i<C$, then $\mu_i=C-\alpha_i>0$, so $\mu_i\xi_i=0$ forces $\xi_i=0$; then $\alpha_i g_i^{(m)}=0$ forces the signed margin to equal $1$. Finally, for any input $x$, stationarity gives the score $s(x)=\sum_i\alpha_i y_i k(x_i,x)+b$. [step 5.2, step 2.1, F8, algebra] ∎

