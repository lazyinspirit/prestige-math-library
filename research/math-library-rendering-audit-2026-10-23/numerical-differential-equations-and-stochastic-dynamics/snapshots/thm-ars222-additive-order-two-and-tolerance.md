---
id: thm-ars222-additive-order-two-and-tolerance
kind: theorem
title: "The ARS(2,2,2) pair is second order under distinct stage residual tolerances"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-ars222-additive-tableau-and-stages
  - lem-ars222-stage-branch-and-residual-control
  - lem-ars222-coefficient-identities
  - def-implicit-residual-and-algebraic-error-units
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, additive stage order conditions and the ARS second-order method, PDF pp. 2–5."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1 and Table 2, PDF pp. 2–3 and 6: four coupled second-order conditions and the ARS pair."
---

## Statement

Use the tableau and stage equations in [[def-ars222-additive-tableau-and-stages]], with $F=a+b$. Let $a,b\in C^2(U,\mathbb R^d)$ on an open set, and suppose the exact solution path and, for every starting state in the tube, all exact stages, approximate candidates, and joining line segments remain in a common compact convex tube on which $a,b$ and their first two derivatives are bounded and $a,b$ are Lipschitz with constants $L_a,L_b$. For every starting state in the tube and each implicit stage, assume the selected branch hypotheses of [[lem-ars222-stage-branch-and-residual-control]] hold with uniform bounds and $|\gamma|hL_b\le1/2$. All one-step conclusions below are for sufficiently small $h>0$, and the global conclusion is for $h=T/N$ in that same range.

For exact stage roots, the exact-start one-step defect is at most $C h^3$, and the exact-root one-step map is Lipschitz with constant $1+Lh$ on the tube, for constants independent of sufficiently small $h$. If computed stages have unscaled update residuals $r_2,r_3$ satisfying
$$\|r_2\|_2\le C_2h^2,\qquad \|r_3\|_2\le C_3h^3,$$
then their output differs from the exact-root output at the same input by at most $C_{\rm alg}h^3$. Consequently, for $h=T/N$ and initial error $\|y_0-y(0)\|_2\le C_0h^2$, the computed method satisfies
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le C_T h^2.$$
The second-stage residual has the weaker $O(h^2)$ budget because its stage error is multiplied by $h$ in the last stage; the final-stage residual must be $O(h^3)$. All residuals are in update units.

## Facts & Assumptions

**Given:** The split IVP, ARS tableau and stages, tube, branch balls, residuals, and initial error in the Statement.

[F1] [[def-ars222-additive-tableau-and-stages]]: $Y_2=y+\gamma h a(y)+\gamma h b(Y_2)$ and
$$Y_3=y+h[\delta a(y)+(1-\delta)a(Y_2)+(1-\gamma)b(Y_2)+\gamma b(Y_3)],\qquad y^+=Y_3.$$

[F2] [[lem-ars222-stage-branch-and-residual-control]]: on each admitted stage ball, the implicit root is unique and an unscaled stage residual is bounded in forward error by the reciprocal contraction margin.

[F3] [[def-implicit-residual-and-algebraic-error-units]]: the unscaled stage residual is measured in the units of the unknown stage; a derivative-scaled residual is divided by $h$.

[F4] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]] and [[thm-norm-inequality-for-the-vector-valued-integral]]: an IVP solution satisfies its integral equation, and the norm of a vector integral is bounded by the integral of the norm.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: on an admitted line segment, a $C^2$ field has its first-order Taylor polynomial with a remainder bounded by a constant times the squared segment length.

[F6] [[lem-ars222-coefficient-identities]]: $\gamma>0$, $\gamma(1-\delta)=1/2$, and $\gamma(2-\gamma)=1/2$.

[F7] [[lem-discrete-one-step-error-recurrence-bound]]: a recurrence $e_{n+1}\le(1+Lh)e_n+Ch^{p+1}$ with $h=T/N$ and $e_0\le C_0h^p$ gives $\max_ne_n=O(h^p)$.

[A1] The exact path and all exact and computed stages remain in the stated convex tube; for each stage the closed ball is contained in $U$, $\|b\|_2\le M_b$, $b$ is $L_b$-Lipschitz, $|\gamma|hM_b\le R_j$, and $|\gamma|hL_b\le1/2$.

## Proof

1.1 Let $\phi_s$ be the exact solution starting at $y$. By [F4], $\phi_s-y=\int_0^sF(\phi_r)\,dr$. Boundedness gives $\|\phi_r-y\|=O(r)$, and Lipschitz continuity then gives $\|\phi_s-y-sF(y)\|\le\int_0^sL_F\|\phi_r-y\|dr=O(s^2)$, where $L_F=L_a+L_b$. Taylor's formula [F5] gives $F(\phi_s)=F(y)+DF(y)(\phi_s-y)+O(s^2)$, hence $F(\phi_s)=F(y)+sDF(y)F(y)+O(s^2)$. Integrating this identity from $0$ to $h$ yields $\phi_h=y+hF(y)+\frac12h^2DF(y)F(y)+O(h^3).$ [A1, F4, F5, algebra]

1.2 For two inputs $u,v$ with exact selected second stages $Y_2(u),Y_2(v)$, subtract the first equation in [F1] and use the Lipschitz bounds. Since $\gamma>0$ from [F6] and $\gamma hL_b\le1/2$, this gives $\|Y_2(u)-Y_2(v)\|_2\le\frac{1+\gamma hL_a}{1-\gamma hL_b}\|u-v\|_2\le(1+2\gamma(L_a+L_b)h)\|u-v\|_2.$ [A1, F1, F6, algebra]

1.3 Let $e_2=\|\widetilde Y_2-Y_2\|_2$. By $\gamma>0$ from [F6] and $|\gamma|hL_b\le1/2$ from [A1], subtracting the second-stage equations and using its residual gives $(1-\gamma hL_b)e_2\le\|r_2\|_2$, hence $e_2\le2\|r_2\|_2$. For the final stage, subtract the equations with the same initial input; the terms depending on $Y_2$ are bounded by $hK_s e_2$, where $K_s=|1-\delta|L_a+|1-\gamma|L_b$. The final-stage residual therefore gives $\|\widetilde Y_3-Y_3\|_2\le2\|r_3\|_2+4K_s h\|r_2\|_2.$ This is at most $C_{\rm alg}h^3$ under the two stated residual budgets. [A1, F1, F3, F6, algebra]

2.1 By [F2] and [A1], the selected second-stage root exists in its branch ball. Its equation in [F1] and boundedness first give $Y_2-y=O(h)$. Lipschitz continuity gives $b(Y_2)=b(y)+O(h)$, so the same equation gives $Y_2-y=\gamma hF(y)+O(h^2)$. Applying [F5] to $b(Y_2)$ then gives $b(Y_2)=b(y)+\gamma h\,Db(y)F(y)+O(h^2)$, and substitution into [F1] yields $Y_2=y+\gamma hF(y)+\gamma^2h^2Db(y)F(y)+O(h^3).$ [A1, F1, F2, F5, step 1.1, algebra]

2.2 Let $K_2=2\gamma(L_a+L_b)$ and $K_3=|\delta|L_a+(|1-\delta|L_a+|1-\gamma|L_b)(1+K_2h_0)$ for $h\le h_0$, where $h_0$ is any fixed upper bound on the small steps. The third-stage centers in [F1] then differ by at most $(1+K_3h)\|u-v\|_2$. Applying the same subtraction to the third-stage equation and using $(1-\gamma hL_b)^{-1}\le1+2\gamma hL_b$ gives $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$ for $L:=K_3+2\gamma L_b+2\gamma L_bK_3h_0$, which is independent of $h$ and the step index. [A1, F1, step 1.2, algebra]

3.1 By [F2] and [A1], the selected third-stage root exists after $Y_2$ is selected. Since $Y_2-y=O(h)$ and the stage equations give $Y_3-y=O(h)$, Lipschitz continuity and the weight sums $\delta+(1-\delta)=1$ and $(1-\gamma)+\gamma=1$ imply $Y_3-y=hF(y)+O(h^2)$. Taylor's formula applied to the last-stage terms gives $a(Y_2)=a(y)+\gamma h\,Da(y)F(y)+O(h^2),\quad b(Y_2)=b(y)+\gamma h\,Db(y)F(y)+O(h^2),\quad b(Y_3)=b(y)+h\,Db(y)F(y)+O(h^2).$ Substituting these expansions into [F1] and collecting the coefficients gives $Y_3=y+hF(y)+h^2\{\gamma(1-\delta)Da(y)F(y)+\gamma(2-\gamma)Db(y)F(y)\}+O(h^3).$ [A1, F1, F2, F5, step 2.1, algebra]

4.1 The identities [F6] make both second-order coefficients in step 3.1 equal to $1/2$, so its expansion agrees with the exact expansion in step 1.1. Thus $\|\Psi_h(y)-\phi_h\|_2\le C h^3$ uniformly on the tube. [F6, step 1.1, step 3.1, algebra]

5.1 Put $e_n=\|y_n-y(t_n)\|_2$. Compare the computed output first with the exact-root ARS output at $y_n$, then with that map at $y(t_n)$, then with the exact next state. Step 1.3 bounds the first difference, step 2.2 bounds the second, and step 4.1 bounds the third, giving $e_{n+1}\le(1+Lh)e_n+(C+C_{\rm alg})h^3.$ Apply [F7] with $p=2$ and the initial error from the Statement to obtain the claimed fixed-time $O(h^2)$ bound. By [F3], a derivative-scaled residual must be multiplied by $h$ before it is tested against either stage budget. [A1, F3, F7, step 1.3, step 2.2, step 4.1, algebra] ∎

