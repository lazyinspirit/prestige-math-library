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
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-ck-and-multi-index-notation-in-several-variables
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-courant-fischer-min-max-principle
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - cor-cauchy-reals-lub-complete
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

$$\lambda_1(H_*)\le-2\gamma,\qquad \lambda_j(H_*)\ge2\gamma\ (j\ge2),\qquad \|H_*u\|_2\le\Lambda\|u\|_2\quad(u\in\mathbb R^d)$$

for $\gamma>0$ and $\Lambda\ge2\gamma$. Let the closed ball $\overline B_2(x_*,r)$ lie in $U$, and suppose the Hessian satisfies
$$\|(H(x)-H(y))u\|_2\le L\|x-y\|_2\|u\|_2\qquad(x,y\in\overline B_2(x_*,r),\ u\in\mathbb R^d)$$
with $Lr\le\gamma$. At every iterate $x$ in this ball, suppose a validated Hessian enclosure gives $\lambda_1(H(x))\le-\gamma$ and $\lambda_j(H(x))\ge\gamma$ for $j\ge2$, and accepted dimer data satisfy the hypotheses of [[thm-dimer-mode-perturbation-and-local-saddle-error]] with uniform rotation residual $\tau_{\rm rot}$ and HVP error bound $\delta\le\gamma/4$. Define

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

[A1] At $x_*$, $\lambda_1(H_*)\le-2\gamma$, all other eigenvalues are at least $2\gamma$, and $\|H_*u\|_2\le\Lambda\|u\|_2$ for every $u$.

[A2] On $B_2(x_*,r)$, $\|(H(x)-H(y))u\|_2\le L\|x-y\|_2\|u\|_2$ for all $x,y$ and $u$, $Lr\le\gamma$, and each attempted point has the stated validated index-one enclosure.

[A3] At each attempted point the accepted dimer data have $\|(I-vv^T)D_\epsilon\|_2\le\tau_{\rm rot}$, $v^TD_\epsilon\le-\gamma/2$, and HVP error at most $\delta\le\gamma/4$.

[A4] Each translation uses step $\sigma$ and a computed gradient with error at most $\eta$; $\kappa<1$ and $\sigma\eta\le(1-\kappa)r$.

[F1] [[thm-dimer-mode-perturbation-and-local-saddle-error]]: the accepted dimer data in [A3] give $\sin\angle(v,q_x)\le\alpha$ for a unit lowest-eigenvalue eigenvector $q_x$ of $H(x)$.

[F3] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: if $\nabla V(x_*)=0$ and the Hessian is $L$-Lipschitz on a convex ball, then $\|\nabla V(x)-H_*(x-x_*)\|_2\le(L/2)\|x-x_*\|_2^2$.

[F4] [[alg-finite-budget-dimer-mode-following]]: the saddle translation is $x^+=x+\sigma[-\widehat g+2(\widehat g^Tv)v]$ when the finite rotation and force branches permit an update.

[F5] [[def-ck-and-multi-index-notation-in-several-variables]], [[def-hessian-and-euclidean-critical-point]], and [[def-jacobian-matrix-and-gradient]] fix the derivative conventions. [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies the matrix of $D(\nabla V)$ with the gradient Jacobian; [[cor-hessian-is-symmetric]] makes those entries agree with $H=\nabla^2V$.

[F6] Since $V\in C^4$, it is $C^2$, and [[cor-hessian-is-symmetric]] makes each Hessian in the proof symmetric. The standard Euclidean inner product then makes the corresponding endomorphism self-adjoint, so [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] gives an orthonormal eigenbasis.

[F7] [[thm-courant-fischer-min-max-principle]]: eigenvalues of symmetric operators are characterized by Rayleigh quotients and subspace extrema. [[thm-cauchy-schwarz-and-the-euclidean-norm]] bounds each quadratic perturbation $|u^TEu|$ by $\|Eu\|_2$ for unit $u$.

[F8] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] gives a finite bound for each matrix acting on $\mathbb R^d$; because $d\ge2$, its unit sphere is nonempty. [[cor-cauchy-reals-lub-complete]] supplies the real supremum. Thus the operator-norm supremum in [F3] is defined, and the vectorwise Hessian-Lipschitz assumption in [A2] bounds it by $L\|x-y\|_2$.




## Proof

**Proof technique:** direct perturbation and error recurrence.

1.1 By [F6], choose an orthonormal eigenbasis $q_*,q_2,\ldots,q_d$ for $H_*$, with $q_*$ corresponding to $\lambda_1(H_*)$. Put $A=-H_*$, $E=-(H(x)-H_*)$, and $\varepsilon=L\|e\|_2$ for $e=x-x_*$. By [A2], $\|Eu\|_2\le\varepsilon\|u\|_2$ for every $u$, and [F8] makes the operator-norm supremum well-defined with $\|E\|_{\rm op}\le\varepsilon\le Lr\le\gamma$. The leading eigenvalue gap of $A$ is $g_*:=\lambda_2(H_*)-\lambda_1(H_*)\ge4\gamma$. For every unit $u$, [F7] gives $|u^TEu|\le\varepsilon$. Evaluating the Rayleigh quotient of $A+E$ at $q_*$ gives $\widetilde\lambda_1\ge\lambda_1(A)-\varepsilon$, while the min-max formula on $q_*^\perp$ gives $\widetilde\lambda_2\le\lambda_2(A)+\varepsilon$. Hence the leading eigenvalue of $A+E=-H(x)$ is simple, since $\widetilde\lambda_1-\widetilde\lambda_2\ge g_*-2\varepsilon\ge2\gamma>0$. If $q_x$ is its unit leading eigenvector, projecting $(A+E)q_x=\widetilde\lambda_1q_x$ onto $q_*^\perp$ and expanding in $q_2,\ldots,q_d$ gives $\sin^2\angle(q_x,q_*)=\sum_{j=2}^d|q_j^Tq_x|^2\le\|Eq_x\|_2^2/(g_*-\varepsilon)^2\le(Lr)^2/(3\gamma)^2$. Thus $\sin\angle(q_x,q_*)\le Lr/(3\gamma)$. The vector $q_x$ is a lowest-eigenvalue eigenvector of $H(x)$. [A1, A2, F6, F7, F8, given, algebra]

1.2 Set $P_*=q_*q_*^T$ and $A_*=-I+2P_*$. Orthogonal decomposition into $\operatorname{span}(q_*)$ and its complement shows $\|A_*u\|_2=\|u\|_2$ for every $u$. In the eigenbasis from [F6], the map $I+\sigma A_*H_*$ scales the $q_*$ coordinate by $1+\sigma\lambda_1(H_*)$ and each other eigen-coordinate by $1-\sigma\lambda_j(H_*)$. Therefore $\|(I+\sigma A_*H_*)e\|_2\le q\|e\|_2$ for every $e$. Because every $|\lambda_j(H_*)|\in[2\gamma,\Lambda]$ by [A1] and $0<\sigma<2/\Lambda$, each factor has absolute value strictly less than one, so $q<1$. [A1, F6, given, algebra]

2.1 For unit vectors $u,w$, choose the sign of $w$ so $u^Tw\ge0$ and write $w=(\cos\theta)u+(\sin\theta)z$ with $z\perp u$ unit. On $\operatorname{span}\{u,z\}$, the matrix of $uu^T-ww^T$ squares to $\sin^2\theta I$, and it vanishes on the orthogonal complement. Hence $\|(uu^T-ww^T)y\|_2\le\sin\theta\|y\|_2$ for every $y$. Apply this bound twice and use the triangle inequality through $q_x$; [F1] and step 1.1 give $\|(vv^T-q_*q_*^T)y\|_2\le(\alpha+Lr/(3\gamma))\|y\|_2$ for every $y$. [A2, A3, F1, step 1.1, algebra]

2.2 By [F3], $\nabla V(x)=H_*e+r_x$ with $\|r_x\|_2\le(L/2)\|e\|_2^2$. Therefore the exact-mode translation satisfies $\|x+\sigma A_*\nabla V(x)-x_*\|_2\le q\|e\|_2+\frac{\sigma L}{2}\|e\|_2^2\le\left(q+\frac{\sigma Lr}{2}\right)\|e\|_2$. Also [A1] gives $\|H_*e\|_2\le\Lambda\|e\|_2$, so $\|\nabla V(x)\|_2\le(\Lambda+Lr/2)\|e\|_2$. [A1, A2, F3, F5, step 1.2, algebra]

3.1 For the accepted dimer direction set $A_v=-I+2vv^T$, another orthogonal reflection. By [F4], the actual update is $x^+=x+\sigma A_v\widehat g(x)$. Step 2.1 gives $\|(A_v-A_*)\nabla V(x)\|_2\le2(\alpha+Lr/(3\gamma))\|\nabla V(x)\|_2$. Since $A_v$ preserves Euclidean norm and $\|\widehat g(x)-\nabla V(x)\|_2\le\eta$, the remaining force discrepancy has norm at most $\eta$. Combining with step 2.2 proves $\|x^+-x_*\|_2\le\kappa\|e\|_2+\sigma\eta$. [A2, A4, F4, step 2.1, step 2.2, algebra]

4.1 If $\|e\|_2\le r$, step 3.1 and [A4] give $\|x^+-x_*\|_2\le\kappa r+\sigma\eta\le r$, so each attempted update stays in the ball and the recurrence can be iterated. Induction on $k$ yields $\|x_k-x_*\|_2\le\kappa^k\|x_0-x_*\|_2+\sigma\eta\sum_{j=0}^{k-1}\kappa^j$. Since $0\le\kappa<1$, the finite geometric sum is $(1-\kappa^k)/(1-\kappa)$, giving the stated error bound. [A4, step 3.1, induction, algebra] ∎

