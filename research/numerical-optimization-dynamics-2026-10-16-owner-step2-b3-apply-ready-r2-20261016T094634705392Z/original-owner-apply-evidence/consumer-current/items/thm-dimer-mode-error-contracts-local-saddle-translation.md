---
id: thm-dimer-mode-error-contracts-local-saddle-translation
kind: theorem
title: "A gap-controlled dimer mode gives a local saddle-translation error recurrence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-budget-dimer-mode-following
  - thm-dimer-mode-perturbation-and-local-saddle-error
  - thm-local-leading-eigenvector-stability-under-eigengap
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-ck-and-multi-index-notation-in-several-variables
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A–C, equations (18) and (21): dimer mode rotation and modified translation force"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3: local vector Newton remainder and quadratic error route; this dimer recurrence is proved directly"
---

## Statement

Let $d\ge2$, let $V\in C^4(U,\mathbb R)$ on an open $U\subseteq\mathbb R^d$ using the convention of [[def-ck-and-multi-index-notation-in-several-variables]], and let $x_*$ be a critical point with Hessian $H_*:=\nabla^2V(x_*)$ ordered as $\lambda_1(H_*)\le\cdots\le\lambda_d(H_*)$. Suppose

$$\lambda_1(H_*)\le-2\gamma,\qquad \lambda_j(H_*)\ge2\gamma\ (j\ge2),\qquad \|H_*\|_{\rm op}\le\Lambda$$

for $\gamma>0$ and $\Lambda\ge2\gamma$. Let the closed ball $\overline B_2(x_*,r)$ lie in $U$, let the Hessian be $L$-Lipschitz there, and assume $Lr\le\gamma$. At every iterate $x$ in this ball, suppose a validated Hessian enclosure gives $\lambda_1(H(x))\le-\gamma$ and $\lambda_j(H(x))\ge\gamma$ for $j\ge2$, and accepted dimer data satisfy the hypotheses of [[thm-dimer-mode-perturbation-and-local-saddle-error]] with uniform rotation residual $\tau_{\rm rot}$ and HVP error bound $\delta\le\gamma/4$. Define

$$\alpha:=\frac{4(\tau_{\rm rot}+\delta)}{5\gamma},\qquad q:=\max\left\{|1+\sigma\lambda_1(H_*)|,\ \max_{2\le j\le d}|1-\sigma\lambda_j(H_*)|\right\},$$

where $0<\sigma<2/\Lambda$. Suppose the finite dimer saddle translation of [[alg-finite-budget-dimer-mode-following]] uses a unit direction $v$ from those accepted data and a computed gradient $\widehat g(x)$ with $\|\widehat g(x)-\nabla V(x)\|_2\le\eta$. Put

$$\kappa:=q+\frac{\sigma Lr}{2}+2\sigma\left(\alpha+\frac{Lr}{3\gamma}\right)\left(\Lambda+\frac{Lr}{2}\right).$$

If $\kappa<1$ and $\sigma\eta\le(1-\kappa)r$, then every attempted translation starting at $\|x_0-x_*\|_2\le r$ remains in the ball and obeys

$$\|x_{k+1}-x_*\|_2\le\kappa\|x_k-x_*\|_2+\sigma\eta,$$

and consequently

$$\|x_k-x_*\|_2\le\kappa^k\|x_0-x_*\|_2+\frac{\sigma\eta(1-\kappa^k)}{1-\kappa}.$$

Thus exact translation gradients give local contraction, while a fixed bounded translation-force error gives the stated finite noise floor. The conclusion is conditional on a validated gap and accepted dimer mode at every attempted iterate; a finite rotation cap or missing spectral enclosure gives no such guarantee.

## Facts & Assumptions

**Given:** The critical point, Hessian gap and norm bound, Hessian-Lipschitz ball, validated enclosures, accepted dimer data, translation step size, and gradient-evaluation error bound in the Statement.

[A1] At $x_*$, $\lambda_1(H_*)\le-2\gamma$, all other eigenvalues are at least $2\gamma$, and $\|H_*\|_{\rm op}\le\Lambda$.

[A2] On $B_2(x_*,r)$, the Hessian is $L$-Lipschitz, $Lr\le\gamma$, and each attempted point has the stated validated index-one enclosure.

[A3] At each attempted point the accepted dimer data have $\|(I-vv^T)D_\epsilon\|_2\le\tau_{\rm rot}$, $v^TD_\epsilon\le-\gamma/2$, and HVP error at most $\delta\le\gamma/4$.

[A4] Each translation uses step $\sigma$ and a computed gradient with error at most $\eta$; $\kappa<1$ and $\sigma\eta\le(1-\kappa)r$.

[F1] [[thm-dimer-mode-perturbation-and-local-saddle-error]]: the accepted dimer data in [A3] give $\sin\angle(v,q_x)\le\alpha$ for a unit lowest-eigenvalue eigenvector $q_x$ of $H(x)$.

[F2] [[thm-local-leading-eigenvector-stability-under-eigengap]]: for a symmetric matrix with leading eigenvalue gap $g$ and symmetric perturbation norm $\epsilon<g/2$, the leading eigenvalue remains simple and the sine of its eigenvector-line angle is at most $\epsilon/(g-\epsilon)$.

[F3] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: if $\nabla V(x_*)=0$ and the Hessian is $L$-Lipschitz on a convex ball, then $\|\nabla V(x)-H_*(x-x_*)\|_2\le(L/2)\|x-x_*\|_2^2$.

[F4] [[alg-finite-budget-dimer-mode-following]]: the saddle translation is $x^+=x+\sigma[-\widehat g+2(\widehat g^Tv)v]$ when the finite rotation and force branches permit an update.

[F5] [[def-ck-and-multi-index-notation-in-several-variables]], [[def-hessian-and-euclidean-critical-point]], and [[def-jacobian-matrix-and-gradient]] fix the derivative conventions. [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies the matrix of $D(\nabla V)$ with the gradient Jacobian; [[cor-hessian-is-symmetric]] makes those entries agree with $H=\nabla^2V$. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] supplies the induced Euclidean operator norm.

[F6] Since $V\in C^4$, it is $C^2$, and [[cor-hessian-is-symmetric]] makes each Hessian in the proof symmetric. The standard Euclidean inner product then makes the corresponding endomorphism self-adjoint, so [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] gives an orthonormal eigenbasis.



## Proof

**Proof technique:** direct perturbation and error recurrence.

1.1 By [F6], choose a unit eigenvector $q_*$ for $\lambda_1(H_*)$. The leading eigenvalue of $-H_*$ is $-\lambda_1(H_*)$, and its gap from the second eigenvalue is $g_*:=\lambda_2(H_*)-\lambda_1(H_*)\ge4\gamma$. For $e=x-x_*$, the perturbation $E=-(H(x)-H_*)$ is symmetric and satisfies $\|E\|_{\rm op}\le L\|e\|_2\le Lr\le\gamma<g_*/2$. Applying [F2] to $-H_*$ and $-H(x)$ shows their leading eigenvector lines differ by sine at most $Lr/(4\gamma-Lr)\le Lr/(3\gamma)$. The leading eigenvector of $-H(x)$ is a lowest eigenvector $q_x$ of $H(x)$. [A1, A2, F2, F5, F6, given, algebra]

1.2 Set $P_*=q_*q_*^T$ and $A_*=-I+2P_*$. This is an orthogonal reflection, so $\|A_*\|_{\rm op}=1$. In an orthonormal eigenbasis of $H_*$ supplied by [F6], $I+\sigma A_*H_*$ has eigenvalues $1+\sigma\lambda_1(H_*)$ on $q_*$ and $1-\sigma\lambda_j(H_*)$ on its orthogonal complement; hence its operator norm is $q$. Because every $|\lambda_j(H_*)|\in[2\gamma,\Lambda]$ and $0<\sigma<2/\Lambda$, each displayed factor has absolute value strictly less than one, so $q<1$. [A1, F2, F5, F6, given, algebra]

2.1 For unit vectors $u,w$, the rank-one orthogonal projections satisfy $\|uu^T-ww^T\|_{\rm op}=\sin\angle(u,w)$. To see this, choose the sign of $w$ so $u^Tw\ge0$, write $w=(\cos\theta)u+(\sin\theta)z$ with $z\perp u$ unit, and represent $uu^T-ww^T$ on $\operatorname{span}\{u,z\}$; its $2\times2$ matrix has eigenvalues $\pm\sin\theta$, while it vanishes on the orthogonal complement. Applying the operator-norm triangle inequality through $q_x$ and using [F1] and step 1.1 gives $\|vv^T-q_*q_*^T\|_{\rm op}\le\alpha+Lr/(3\gamma)$. [A2, A3, F1, step 1.1, algebra]

2.2 By [F3], $\nabla V(x)=H_*e+r_x$ with $\|r_x\|_2\le(L/2)\|e\|_2^2$. Therefore the exact-mode translation satisfies $\|x+\sigma A_*\nabla V(x)-x_*\|_2\le q\|e\|_2+\frac{\sigma L}{2}\|e\|_2^2\le\left(q+\frac{\sigma Lr}{2}\right)\|e\|_2$. Also $\|\nabla V(x)\|_2\le(\Lambda+Lr/2)\|e\|_2$. [A1, A2, F3, step 1.2, algebra]

3.1 For the accepted dimer direction set $A_v=-I+2vv^T$. It is also an orthogonal reflection. By [F4], the actual update is $x^+=x+\sigma A_v\widehat g(x)$. Thus $\|A_v\widehat g-A_*\nabla V(x)\|_2\le\|A_v-A_*\|_{\rm op}\|\nabla V(x)\|_2+\eta$, and $\|A_v-A_*\|_{\rm op}=2\|vv^T-q_*q_*^T\|_{\rm op}\le2(\alpha+Lr/(3\gamma))$ by step 2.1. Combining with step 2.2 proves $\|x^+-x_*\|_2\le\kappa\|e\|_2+\sigma\eta$. [A2, A4, F4, step 2.1, step 2.2, algebra]

4.1 If $\|e\|_2\le r$, step 3.1 and [A4] give $\|x^+-x_*\|_2\le\kappa r+\sigma\eta\le r$, so each attempted update stays in the ball and the recurrence can be iterated. Induction on $k$ yields $\|x_k-x_*\|_2\le\kappa^k\|x_0-x_*\|_2+\sigma\eta\sum_{j=0}^{k-1}\kappa^j$. Since $0\le\kappa<1$, the finite geometric sum is $(1-\kappa^k)/(1-\kappa)$, giving the stated error bound. [A4, step 3.1, induction, algebra] ∎

