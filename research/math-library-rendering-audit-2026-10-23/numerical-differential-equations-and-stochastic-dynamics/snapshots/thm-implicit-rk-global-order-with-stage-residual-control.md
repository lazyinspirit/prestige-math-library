---
id: thm-implicit-rk-global-order-with-stage-residual-control
title: "Backward Euler, the selected SDIRK, and two-stage Radau IIA converge at their stated orders under controlled stage residuals"
kind: theorem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-backward-euler-step-equation
  - def-implicit-runge-kutta-stage-equations
  - def-two-stage-sdirk-tableau
  - def-two-stage-radau-iia-tableau
  - lem-small-step-implicit-rk-branch-and-residual-error
  - prop-two-stage-sdirk-order-two-and-l-stability
  - prop-two-stage-radau-iia-order-three-and-l-stability
  - thm-global-error-from-one-step-defect-and-stability
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.3, PDF pp. 66–68 / printed pp. 64–65: Runge–Kutta local defect, stability, and global error."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 1–9: Runge–Kutta stage equations and order conditions."
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, and let $y:[0,T]\to\mathbb R^d$ solve $y'=f(t,y)$. Assume $f$ is $C^3$ on a neighborhood of a common compact tube containing the exact solution, all grid states, and all stage balls; $f$ is $L$-Lipschitz in state there; and $hL\le1/2$. For each grid input $u$ in the tube, use the local stage branch in a prescribed invariant product ball for one of: BE with order $p=1$, the tableau [[def-two-stage-sdirk-tableau]] with $p=2$, or the tableau [[def-two-stage-radau-iia-tableau]] with $p=3$. The exact stage root and any approximate stage vector being compared must lie in that same ball. For BE, also require the exact ODE endpoint $y(t_{n+1})$ to lie in the same one-stage ball as the exact BE root, so its residual can be used in the branch estimate. Assume uniformly that the hypotheses of [[lem-small-step-implicit-rk-branch-and-residual-error]] hold with $\|A\|_\infty=1$, $\|b\|_1=1$, and that the exact one-step stages, approximate stages, and outputs stay in the tube.

Initialize $\widetilde y_0=y(0)$. At each step, use a stage vector $\widetilde Y_n$ in the prescribed ball whose update residual satisfies
$$\|G_n(\widetilde Y_n)\|_{\infty,2}\le D h^{p+1}$$
for a constant $D$ independent of $h,n$, and update by the method formula. Then there is a constant $C_*$, independent of $h$, such that
$$\max_{0\le n\le N}\|\widetilde y_n-y(t_n)\|_2\le C_* h^p.$$
The same conclusion holds with an initial error bounded by $C_0h^p$. The residual condition is in update-residual units; if a derivative-scaled residual $r_n=G_n/h$ is used, it requires $\|r_n\|_{\infty,2}=O(h^p)$. A fixed absolute stage residual tolerance alone does not imply the stated order.

## Facts & Assumptions

**Given:** The exact IVP, common tube, state Lipschitz and smoothness bounds, uniform invariant stage balls, a selected method, and residual bounds from the Statement.

[F1] [[def-implicit-runge-kutta-stage-equations]]: the stages solve $Y_i=u+h\sum_j a_{ij}f(t+c_jh,Y_j)$, the update is $u+h\sum_i b_i f(t+c_i h,Y_i)$, and stiff accuracy means $b^T$ is the final row of $A$ with $c_s=1$.

[F2] [[lem-small-step-implicit-rk-branch-and-residual-error]]: if the stage fixed-point map is a contraction with constant $q=h\|A\|_\infty L<1$ on an invariant product ball, there is a unique stage root there and every approximate stage vector in the ball has error at most $\|G(\widetilde Y)\|_{\infty,2}/(1-q)$.

[F3] [[prop-two-stage-sdirk-order-two-and-l-stability]]: the selected SDIRK coefficient satisfies $0<\gamma<1$, and the method has local defect $O(h^3)$ on the stated smooth tube.

[F4] [[prop-two-stage-radau-iia-order-three-and-l-stability]]: the selected Radau IIA method has local defect $O(h^4)$ on the stated smooth tube.

[F5] [[thm-global-error-from-one-step-defect-and-stability]]: on a common tube, an exact one-step method with local defect $O(h^{p+1})$, stability factor at most $1+L_0h$, and initial error $O(h^p)$ has global error $O(h^p)$.

[F6] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0\le C_0h^p$ and $e_{n+1}\le(1+L_0h)e_n+C h^{p+1}$, then $\max_{n\le N}e_n=O(h^p)$ for $h=T/N$.

[F7] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] is applied to each scalar coordinate of the exact solution. The supplier is scalar-valued. For a vector map $F:U\subset\mathbb R^s\to\mathbb R^d$, apply it separately to each real component $F_i$; its intermediate points $\theta_i$ may differ. If the absolute values of all order-$(k+1)$ component partial derivatives on the segment are at most $M$, each component remainder is at most $M C_{s,k}\|v\|_2^{k+1}$, where $C_{s,k}=\sum_{|\alpha|=k+1}1/\alpha!$ is a fixed finite constant, since $|v^\alpha|\le\|v\|_2^{k+1}$. Hence the Euclidean remainder is at most $\sqrt d M C_{s,k}\|v\|_2^{k+1}$. In one time variable the max-norm bound is $M|h|^{k+1}/(k+1)!$. No common intermediate point for all components is asserted. With $k=1$ and the uniformly bounded second derivatives on the tube, $y(t+h)=y(t)+hy'(t)+O(h^2)$ and $y'(t+h)=y'(t)+O(h)$ in Euclidean norm; using $y'=f(t,y)$ gives the BE update residual $y(t+h)-y(t)-hf(t+h,y(t+h))=O(h^2)$.

[F8] [[def-backward-euler-step-equation]]: BE is the one-stage Runge–Kutta stage equation with $A=b=c=(1)$, so its stage is its endpoint and its update is that stage.

[A1] At every step, the approximate stages and exact stage roots lie in the same prescribed invariant product ball, the stage map is $L$-Lipschitz, and $q=hL\le1/2$. For BE, the exact ODE endpoint also lies in that one-stage ball.

## Proof


1.1 BE and both tableaux are stiffly accurate. Their row-sum norms satisfy $\|A\|_\infty=1$, and their positive weights satisfy $\|b\|_1=1$: for BE this is immediate; for SDIRK the absolute row sums are $\gamma,1$ and $b_1+b_2=1$; for Radau they are $1/2,1$ and $b_1+b_2=1$. [F1, F2, F3, algebra]

1.2 For exact stages at two inputs $u,v$, subtract the fixed-point equations. The state Lipschitz bound [A1] gives $\|Y(u)-Y(v)\|_{\infty,2}\le\|u-v\|_2+q\|Y(u)-Y(v)\|_{\infty,2},$ hence $\|Y(u)-Y(v)\|_{\infty,2}\le2\|u-v\|_2$. The update formula and $\|b\|_1=1$ now give $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+2Lh)\|u-v\|_2.$ [F1, A1, algebra]

1.3 For an approximate stage vector and the exact stages with the same input, [F2] and $q\le1/2$ give $\|\widetilde Y_n-Y_n\|_{\infty,2}\le2D h^{p+1}$. Stiff accuracy and the residual equation give the method output $\widetilde y_{n+1}=\widetilde Y_{n,s}-G_{n,s}(\widetilde Y_n)$, whereas the exact output is $Y_{n,s}$. Since $\|G_{n,s}\|_2\le\|G_n\|_{\infty,2}\le D h^{p+1}$, the output perturbation is at most $3D h^{p+1}$. [F1, F2, algebra]

2.1 The exact one-step map has local defect order $p$: for BE, [F8] identifies the endpoint with its one-stage value, [F7] gives residual $O(h^2)$ at the exact endpoint, and [F2] turns this into endpoint error $O(h^2)$ because both the endpoint and the selected stage root lie in the same ball; for SDIRK and Radau, use [F3] and [F4]. With the stability estimate in step 1.2, the exact-solve trajectory satisfies [F5] and has global error $O(h^p)$. [F2, F3, F4, F5, F7, F8, step 1.2]

3.1 Let $z_n$ be the exact-solve trajectory from the same initial value and set $d_n=\|\widetilde y_n-z_n\|_2$. Steps 1.2 and 1.3 give $d_{n+1}\le(1+2Lh)d_n+3D h^{p+1},\qquad d_0=0.$ Applying [F6] yields $d_n=O(h^p)$ uniformly in $n$. The triangle inequality and step 2.1 give $\|\widetilde y_n-y(t_n)\|_2\le d_n+\|z_n-y(t_n)\|_2=O(h^p)$. An initial $O(h^p)$ error is handled by the same recurrence and [F5]. [F5, F6, step 1.2, step 1.3, step 2.1, algebra] ∎
