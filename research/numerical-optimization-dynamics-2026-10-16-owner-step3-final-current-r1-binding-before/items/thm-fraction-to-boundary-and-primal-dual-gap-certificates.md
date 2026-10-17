---
id: thm-fraction-to-boundary-and-primal-dual-gap-certificates
kind: theorem
title: "Fraction-to-boundary steps preserve positivity and exact primal-dual feasibility certifies a gap"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones
  - def-conic-optimization-primal-dual-models
  - def-convex-program-duality-and-slater-condition
  - lem-primal-dual-lp-qp-newton-matrix-nonsingular
  - thm-differentiable-convex-functions-and-gradient-inequality
  - thm-lagrangian-weak-duality
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.7.3, fraction-to-boundary updates and surrogate gap; Chapter 5 §5.1, weak duality."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full lecture, standard LP and SDP primal formulations and cone gaps."
---

## Statement

In symmetric-cone mode of [[alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones]], let $s,z$ be strictly interior primal and dual cone variables and let $\bar\alpha_s,\bar\alpha_z\in(0,1]$ be their largest boundary-preserving step fractions. If $0<\beta_s\le\bar\alpha_s$, $0<\beta_z\le\bar\alpha_z$, and $0<\eta<1$, then $\alpha=\eta\min(\beta_s,\beta_z)$ keeps both updated cone variables interior. The conservative fractions in the algorithm's Lorentz and PSD branches satisfy these inequalities. For any exactly primal- and dual-feasible conic pair, the gap $\langle z,s\rangle$ is a rigorous upper bound on primal suboptimality.

In LP/QP mode, the coordinate fraction-to-boundary formula keeps $x,s>0$. For the convex QP of that algorithm, if $x$ is primal feasible, $s\ge0$, $y$ is free, and the exact stationarity residual $Qx+c-A^Ty-s$ vanishes, then
$$0\le f_0(x)-p^*\le x^Ts.$$
For LP/QP iterates with full-row-rank $A$, $Q\succeq0$, and $x,s>0$, the exact Newton matrix is nonsingular. Thus a requested gap is certified only under exact feasibility and stationarity conditions. Nonzero residual tolerances alone are not a certificate. Every finite iteration cap returns a status after finitely many bounded updates; a failure status proves no infeasibility claim.

## Facts & Assumptions

**Given:** The proper-cone modes, fraction formulas, exact residual audits, and Lagrangians in the algorithm and conic model.

[F1] For conic primal and dual feasible variables, $c^Tx-(b^Ty-\langle h,z\rangle)=\langle z,h-Gx\rangle$ ([[def-conic-optimization-primal-dual-models]]).

[F2] A proper cone is closed and convex, and $K^*=\{z:\langle z,k\rangle\ge0\text{ for every }k\in K\}$ ([[def-conic-optimization-primal-dual-models]]).

[F3] The QP Lagrangian is $L(w,y,s)=\tfrac12w^TQw+c^Tw+y^T(b-Aw)-s^Tw$ ([[def-conic-optimization-primal-dual-models]]).

[F4] Every primal feasible point and dual feasible pair satisfy $q(y,s)\le p^*$ ([[thm-lagrangian-weak-duality]]).

[F5] A differentiable convex function lies above its tangent plane ([[thm-differentiable-convex-functions-and-gradient-inequality]]).

[F6] The LP/QP primal-dual Newton matrix has trivial kernel under $Q\succeq0$, full-row-rank $A$, and $x,s>0$ ([[lem-primal-dual-lp-qp-newton-matrix-nonsingular]]).

[F7] A real symmetric matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]), so its spectral norm is at most its Frobenius norm.

## Proof

1.1 Because $s$ is interior, a small positive segment from $s$ in direction $\Delta s$ remains in $K$. The set of feasible fractions in $[0,1]$ is closed by [F2], so its maximum $\bar\alpha_s>0$ is attained and $s+\bar\alpha_s\Delta s\in K$. Any $0<\alpha\le\eta\bar\alpha_s$ has $\theta=\alpha/\bar\alpha_s<1$, and the update is $(1-\theta)s+\theta(s+\bar\alpha_s\Delta s)$. An open ball about $s$ lies in $K$; scaling that ball by $1-\theta>0$ and adding $\theta(s+\bar\alpha_s\Delta s)\in K$ shows the updated point is interior. The same argument applies to $z$ in $K^*$. In the orthant, the coordinate-ratio formula is the maximal nonnegative boundary fraction. For a negative coordinate direction, $\alpha\le\eta(-x_i/\Delta x_i)$ gives $x_i+\alpha\Delta x_i\ge(1-\eta)x_i>0$; nonnegative directions preserve positivity, and the same two cases apply to $s$. [F2, given, algebra]

1.2 For a Lorentz factor, write $s=(t,u)$ and $\Delta s=(\dot t,v)$, with $t>\|u\|_2$. Set $q=t^2-\|u\|_2^2>0$ and $c=|\dot t|+\sum_i|v_i|$. If $c=0$ the step is unchanged. Otherwise $t-\|u\|_2=q/(t+\|u\|_2)\ge q/(2t)$, while $|\dot t|+\|v\|_2\le c$. The algorithm's safe fraction $\beta=\min(1,q/(2tc))$ therefore gives $\alpha=\eta\beta$ with $\alpha(|\dot t|+\|v\|_2)<t-\|u\|_2$. The triangle inequality then yields $t+\alpha\dot t>\|u+\alpha v\|_2$, so the updated Lorentz vector is interior. For a PSD factor $Y\succ0$ and symmetric direction $D$, let $C=L(Y^{-1})L(D)$ as in the algorithm, where $L(M)=\sum_{i,j}|M_{ij}|$. If $C=0$, then $D=0$. Otherwise set $B=Y^{-1/2}DY^{-1/2}$. Submultiplicativity of the operator norm and [F7] give $\|B\|_2\le\|Y^{-1}\|_2\|D\|_2\le\|Y^{-1}\|_F\|D\|_F\le C$. Since $\alpha=\eta\min(1,1/C)$, $\alpha C<1$, and for every nonzero $w$, $w^T(I+\alpha B)w\ge(1-\alpha\|B\|_2)\|w\|_2^2>0$. Thus $Y+\alpha D=Y^{1/2}(I+\alpha B)Y^{1/2}\succ0$. The same bounds apply separately to primal and dual factors, so each computed safe fraction is no larger than its maximal boundary-preserving fraction. [F7, given, algebra]

1.3 For any feasible conic pair, [F1] and [F2] give $b^Ty-\langle h,z\rangle\le c^Tx$. Taking the infimum over primal feasible $x$ and the supremum over dual feasible pairs shows that a feasible dual value is a lower bound on $p^*$. Hence a computed primal-dual feasible pair with exact gap $\langle z,s\rangle\le\varepsilon$ is an $\varepsilon$-suboptimality certificate. [F1, F2, algebra]

1.4 In LP/QP mode, exact $Ax=b$, $x\ge0$, $s\ge0$, and $Qx+c-A^Ty-s=0$ make $\nabla_w L(x,y,s)=0$. To apply [F4], use the smooth inequality convention $g_i(w)=-w_i\le0$, multiplier $\lambda=s$, and equality multiplier $\nu=-y$. Since $Q\succeq0$, $L$ is convex, so [F5] implies $L(w,y,s)\ge L(x,y,s)$ for every $w$; therefore $q(y,s)=L(x,y,s)=f_0(x)-x^Ts$. By [F4], $q(y,s)\le p^*$, and primal feasibility gives $p^*\le f_0(x)$. Thus $0\le f_0(x)-p^*\le x^Ts$. [F3, F4, F5, given, algebra]

1.5 In LP/QP mode, [F6] supplies a unique exact Newton direction under the stated rank and strict-interiority hypotheses. Symmetric-cone mode may have a singular derivative, which the algorithm tests and reports. [F6, given]

2.1 Every dimension-bounded loop terminates after finitely many operations, and the outer loop increments its update counter until it reaches the finite cap $N$ or returns an earlier status. Therefore every invocation terminates with one of its declared statuses. A tolerance status based on nonzero residuals is explicitly `residual-candidate`, so no step above treats it as a certificate. [given, step 1.5, algebra] ∎
