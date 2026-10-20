---
id: thm-adjoint-hypergradient-linear-solve-error
kind: theorem
title: "Residual bounds for exact and approximate-state adjoint hypergradients"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-adjoint-hypergradient-with-residual
  - cor-hessian-is-symmetric
  - def-smooth-bilevel-learning-problem
  - lem-implicit-sensitivity-error-controlled-by-residual
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-mean-value-inequality-for-total-derivatives
  - thm-smooth-bilevel-hypergradient-formula
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5.1, Theorem 8.5.6 and proof"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §6.3.1"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
---

## Statement

Let $p,d\ge1$, let $\Theta\subseteq\mathbb R^p$ and $W\subseteq\mathbb R^d$ be open, and let $f:\Theta\times W\to\mathbb R$ be $C^2$ and $g:W\times\Theta\to\mathbb R$ be $C^1$, where $C^1$ means total differentiability with continuous derivative and $C^2$ means the derivative map is $C^1$. Let $w^*:P\to W$ be a $C^1$ map on an open neighborhood $P$ of $\theta_0$, with $w^*(\theta_0)=w_0$ and $F(\theta,w^*(\theta))=0$ for $F(\theta,w):=\nabla_w f(\theta,w)$, and define $J(\theta):=g(w^*(\theta),\theta)$, $H(\theta,w):=D_wF(\theta,w)$, and $B(\theta,w):=D_\theta F(\theta,w)$. Assume $H(\theta_0,w_0)$ is invertible. Write $c(w):=\partial_\theta g(w,\theta_0)$ and $d(w):=\nabla_w g(w,\theta_0)$, and use the induced Euclidean operator norm for matrices. If the adjoint algorithm at $w_0$ returns a vector $\widetilde v$, define $\rho:=d(w_0)-H(\theta_0,w_0)^T\widetilde v$ and $\widehat h:=c(w_0)-B(\theta_0,w_0)^T\widetilde v$. Suppose the evaluated Hessian is symmetric and has a valid lower-bound certificate $x^TH(\theta_0,w_0)x\ge\mu\|x\|_2^2$ for every $x$, for some $\mu>0$. Then

$$\|\widehat h-\nabla_\theta J(\theta_0)\|_2\le\frac{\|B(\theta_0,w^*(\theta_0))\|\,\|\rho\|_2}{\mu}.$$

There is also a separate approximate-state bound under stronger hypotheses. Put $R(w,\theta):=\nabla_w f(\theta,w)$ and $A(w):=D_wR(w,\theta_0)=H(\theta_0,w)$. Suppose $R$ is $C^2$ on an open neighborhood of $(w_0,\theta_0)$. Let $\widetilde w$ lie in a $C^1$ local inverse chart: for $r:=R(\widetilde w,\theta_0)$, there is a local inverse $\Psi$ of $w\mapsto R(w,\theta_0)$ with $\Psi(0)=w_0$, defined on a convex open residual neighborhood containing $0$ and $r$, with $\widetilde w=\Psi(r)$ and $\|D\Psi(y)\|\le\kappa$ along the segment from $0$ to $r$. Suppose the segment from $w_0$ to $\widetilde w$ lies in a convex state neighborhood where $\|A(w)^{-1}\|\le M$, $\|B(\theta_0,w)\|\le B_0$, and $A(w),B(\theta_0,w)$ are Lipschitz with constants $L_A,L_B$. Suppose also that $c,d$ are Lipschitz there with constants $L_c,L_d$ and $\|d(w_0)\|_2\le D_*$. If the adjoint algorithm at $\widetilde w$ returns $\widetilde v$, set $\rho:=d(\widetilde w)-A(\widetilde w)^T\widetilde v$ and $\widehat h:=c(\widetilde w)-B(\theta_0,\widetilde w)^T\widetilde v$. Assume the certificate $A(\widetilde w)=A(\widetilde w)^T$ and $x^TA(\widetilde w)x\ge\mu\|x\|_2^2$ for all $x$, with the same $\mu>0$. Then

$$\|\widehat h-\nabla_\theta J(\theta_0)\|_2\le\kappa\bigl(L_c+D_*(M^2L_AB_0+ML_B)+MB_0L_d\bigr)\|r\|_2+\frac{B_0}{\mu}\|\rho\|_2.$$

The first term bounds the implicit formula evaluated at an approximate state; it does not identify that formula with the derivative of a stopped iteration. The second term bounds the separate linear-solve error.

## Statement references

[[def-smooth-bilevel-learning-problem|Definitions of F, H, B, J, and the hypergradient]]

[[alg-adjoint-hypergradient-with-residual|The adjoint algorithm and its measured residual]]

[[lem-implicit-sensitivity-error-controlled-by-residual|Full-chart state and sensitivity perturbation bound]]

[[thm-chain-rule-for-total-derivatives|Derivative of the residual-chart path]]

[[thm-mean-value-inequality-for-total-derivatives|Uniform derivative bound along a path controls its endpoint change]]

[[thm-smooth-bilevel-hypergradient-formula|Exact local-branch hypergradient]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Euclidean Cauchy–Schwarz inequality]]

## Facts & Assumptions

**Given:** The exact stationary branch, its exact and approximate states, the local inverse chart and Lipschitz bounds, and a solver output vector with the stated actual residual.

[F1] [[def-smooth-bilevel-learning-problem]]: $R=\nabla_w f$, $A=H=D_wR$, $B=D_\theta R$, and $J(\theta)=g(w^*(\theta),\theta)$.

[F2] [[thm-smooth-bilevel-hypergradient-formula]]: at an exact branch state, $\nabla_\theta J=c-B^TH^{-T}d$.

[F3] [[lem-implicit-sensitivity-error-controlled-by-residual]]: under a common invertible residual chart and the stated inverse and Lipschitz bounds, $\|S(\widetilde w)-S(w^*)\|\le\kappa(M^2L_AB_0+ML_B)\|r\|_2$, where $S(w)=-A(w)^{-1}B(w)$.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of finite-dimensional totally differentiable maps is the composition of their derivatives.

[F5] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a uniform bound $\|Df(z)v\|_2\le M\|v\|_2$ implies $\|f(y)-f(x)\|_2\le M\|y-x\|_2$.

[F6] [[alg-adjoint-hypergradient-with-residual]]: for any returned vector $\widetilde v$, the algorithm computes the actual residual $\rho=d-H^T\widetilde v$ and estimate $\widehat h=c-B^T\widetilde v$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|x^Ty|\le\|x\|_2\|y\|_2$ for Euclidean vectors of equal dimension.

## Proof

1.1 Put $S(w):=-A(w)^{-1}B(w)$ on the stated state neighborhood. The chart and Lipschitz hypotheses with [F3] give $\|S(\widetilde w)-S(w^*)\|\le\kappa(M^2L_AB_0+ML_B)\|r\|_2$. [F1, F3, given]

1.2 For the state bound, set $\gamma(t):=\Psi(tr)$ for $0<t<1$. By [F4], $\gamma'(t)=D\Psi(tr)r$, so $\|\gamma'(t)\|_2\le\kappa\|r\|_2$. For $0<\varepsilon<1/2$, apply [F5] to $\gamma$ on the convex open interval $(\varepsilon/2,1-\varepsilon/2)$ at $\varepsilon$ and $1-\varepsilon$; it gives $\|\Psi((1-\varepsilon)r)-\Psi(\varepsilon r)\|_2\le\kappa(1-2\varepsilon)\|r\|_2$. Letting $\varepsilon\downarrow0$ and using continuity of $\Psi$, $\Psi(0)=w^*$ and $\Psi(r)=\widetilde w$ give $\|\widetilde w-w^*\|_2\le\kappa\|r\|_2$. [F4, F5, given]

1.3 The inverse and operator-norm hypotheses give $\|S(\widetilde w)\|\le\|A(\widetilde w)^{-1}\|\,\|B(\widetilde w)\|\le MB_0$. [given, algebra]

1.4 Define the implicit formula evaluated at a state by $\bar h(w):=c(w)+S(w)^Td(w)$. By [F1] and [F2], $\bar h(w^*)=\nabla_\theta J(\theta_0)$. Expansion gives $\bar h(\widetilde w)-\bar h(w^*)=(c(\widetilde w)-c(w^*))+(S(\widetilde w)-S(w^*))^Td(w^*)+S(\widetilde w)^T(d(\widetilde w)-d(w^*))$. [F1, F2, given, algebra]

1.5 At the evaluated state, write $H=A(\widetilde w)$ and $B=B(\theta_0,\widetilde w)$. Let $v_*=H^{-T}d(\widetilde w)$. The residual identity gives $v_*-\widetilde v=H^{-T}\rho$. For any vector $x$, the certificate and [F7] imply $\mu\|x\|_2^2\le x^THx\le\|x\|_2\|Hx\|_2$, hence $\|H^{-1}\|\le1/\mu$; symmetry gives the same bound for $H^{-T}$. The Euclidean dual formula and [F7] give $\|B^Ty\|_2\le\|B\|\|y\|_2$, so $\|\widehat h-\bar h(\widetilde w)\|_2=\|B^TH^{-T}\rho\|_2\le(B_0/\mu)\|\rho\|_2$. [F6, F7, given, algebra]

1.6 For the exact-state claim, put $H:=H(\theta_0,w_0)$, $B:=B(\theta_0,w_0)$, $c:=c(w_0)$, and $d:=d(w_0)$, and let $v_*:=H^{-T}d$. Since $w_0=w^*(\theta_0)$, [F2] gives $\nabla_\theta J(\theta_0)=c-B^Tv_*$. The residual identity gives $v_*-\widetilde v=H^{-T}\rho$. For every $x$, the stated symmetry and lower-bound certificate together with [F7] imply $\mu\|x\|_2^2\le x^THx\le\|x\|_2\|Hx\|_2$, so $\|H^{-1}\|\le1/\mu$; symmetry gives $\|H^{-T}\|\le1/\mu$. The Euclidean dual formula and [F7] give $\|B^Ty\|_2\le\|B\|\|y\|_2$. Therefore $$\|\widehat h-\nabla_\theta J(\theta_0)\|_2=\|B^TH^{-T}\rho\|_2\le\frac{\|B\|\,\|\rho\|_2}{\mu}=\frac{\|B(\theta_0,w^*(\theta_0))\|\,\|\rho\|_2}{\mu}.$$ This proves the exact-state claim using only its stated hypotheses. [F2, F6, F7, given, algebra]

2.1 For any matrix $M$ and vector $x$, the Euclidean dual formula $\|M^Tx\|_2=\sup_{\|y\|_2=1}|y^TM^Tx|$ and [F7] give $\|M^Tx\|_2\le\|M\|\|x\|_2$. Put $\delta:=\|\widetilde w-w^*\|_2$. Apply this norm bound to the three terms in step 1.4. The first and third terms have norms at most $L_c\delta$ and $MB_0L_d\delta$, respectively, by the stated Lipschitz bounds and step 1.3. The middle term is at most $\kappa D_*(M^2L_AB_0+ML_B)\|r\|_2$ by step 1.1 and $\|d(w^*)\|_2\le D_*$. Therefore $\|\bar h(\widetilde w)-\nabla_\theta J(\theta_0)\|_2\le(L_c+MB_0L_d)\delta+\kappa D_*(M^2L_AB_0+ML_B)\|r\|_2$. [F1, F2, F7, step 1.1, step 1.3, step 1.4, given, algebra]

3.1 Substitute the state-residual estimate from step 1.2 into step 2.1. This gives the first term in the asserted approximate-state bound for the implicit formula evaluation. [step 1.2, step 2.1, algebra]

4.1 Combine the approximate-state formula bound from step 3.1 and the solve-error bound from step 1.5 by the triangle inequality. This gives the approximate-state bound under its separate chart and Lipschitz hypotheses. [step 3.1, step 1.5, given, algebra] ∎
