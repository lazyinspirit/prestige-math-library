---
id: prop-two-stage-sdirk-order-two-and-l-stability
title: "The selected two-stage SDIRK method has order two and is scalar L-stable"
kind: proposition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-two-stage-sdirk-tableau
  - def-scalar-rk-a-and-l-stability
  - thm-of-square-roots
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-implicit-runge-kutta-stage-equations
  - lem-of-square-monotone
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.3 and §III.9, PDF pp. 66–68 and 81–83 / printed pp. 64–65 and 79–81."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 1–9 and 21–25: order conditions and diagonally implicit stability."
---

## Statement

Let $\gamma=1-1/\sqrt2$, and use the tableau in [[def-two-stage-sdirk-tableau]]. The coefficient satisfies $0<\gamma<1$. For a $C^2$ vector field on a neighborhood of the exact solution segment, the local small-step stage branch specified by [[lem-small-step-implicit-rk-branch-and-residual-error]] has local defect $O(h^3)$; hence the method has classical order at least two. Its scalar stability function is
$$R(z)=\frac{1+(1-2\gamma)z}{(1-\gamma z)^2},$$
and it is L-stable in the scalar sense of [[def-scalar-rk-a-and-l-stability]]. This is only a scalar linear-test-equation assertion, not a nonlinear contractivity claim.

## Facts & Assumptions

**Given:** The selected tableau, a $C^2$ vector field on an open neighborhood of an exact solution segment, and a sufficiently small positive step for which an invariant stage ball contains the selected stage solution.

[F1] [[def-two-stage-sdirk-tableau]]: $A=\begin{pmatrix}\gamma&0\\1-\gamma&\gamma\end{pmatrix}$, $b=(1-\gamma,\gamma)^T$, $c=(\gamma,1)^T$, and $\gamma=1-1/\sqrt2$.

[F2] [[def-implicit-runge-kutta-stage-equations]]: $Y_i=y+h\sum_j a_{ij}f(t+c_jh,Y_j)$, with update $y+h\sum_i b_i f(t+c_i h,Y_i)$.

[F3] [[thm-of-square-roots]]: $\sqrt2$ is the unique nonnegative real whose square is $2$.

[F4] [[lem-of-square-monotone]]: for nonnegative $a,b$, $a\le b$ if and only if $a^2\le b^2$.

[F5] [[lem-small-step-implicit-rk-branch-and-residual-error]]: if $F$ is bounded by $M$, is $L$-Lipschitz on an invariant product ball of radius $R$, $h\|A\|_\infty M\le R$, and $h\|A\|_\infty L<1$, then the stage fixed point exists uniquely in that ball.

[F6] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] gives the Lagrange remainder for each scalar component on a convex segment. The supplier is scalar-valued. For a vector map $F:U\subset\mathbb R^s\to\mathbb R^d$, apply it separately to each real component $F_i$; its intermediate points $\theta_i$ may differ. If the absolute values of all order-$(k+1)$ component partial derivatives on the segment are at most $M$, each component remainder is at most $M C_{s,k}\|v\|_2^{k+1}$, where $C_{s,k}=\sum_{|\alpha|=k+1}1/\alpha!$ is a fixed finite constant, since $|v^\alpha|\le\|v\|_2^{k+1}$. Hence the Euclidean remainder is at most $\sqrt d M C_{s,k}\|v\|_2^{k+1}$. In one time variable the max-norm bound is $M|h|^{k+1}/(k+1)!$. No common intermediate point for all components is asserted.

[A1] The invariant-ball and bounded-derivative hypotheses of [F5] hold locally, and the derivatives through order two used below are bounded on the tube.

## Proof


1.1 Since $\sqrt2\ge0$ and $(\sqrt2)^2=2$ by [F3], [F4] rules out $\sqrt2\le1$ because that would imply $2\le1$. Thus $\sqrt2>1$, so $0<1/\sqrt2<1$ and $0<\gamma<1$. The row sums of $A$ are $c$, and $b^T$ is the last row of $A$, so the method is internally consistent and stiffly accurate by [F1] and [F2]. Also $\sum_i b_i=1$ and $b^Tc=(1-\gamma)\gamma+\gamma=2\gamma-\gamma^2=1/2$, since substituting $\gamma=1-1/\sqrt2$ gives $2\gamma-\gamma^2=1/2$. [F1, F2, F3, F4, algebra]

2.1 To check order, augment the nonautonomous equation by the clock variable and write $X'=Q(X)$, $Q(t,y)=(1,f(t,y))$. The row-sum condition in step 1.1 makes its Runge–Kutta stage time coordinates $t+c_i h$. Writing $K_i=Q(X_i)$, the stage bound [F5] gives $X_i-X=O(h)$. The componentwise Taylor bound [F6] and the bounded derivatives [A1] then give $K_i=Q+h c_iQ'Q+O(h^2)$: indeed $X_i-X=h\sum_j a_{ij}K_j=h c_iQ+O(h^2)$. Thus the update is $X+h(\sum_i b_i)Q+h^2(\sum_i b_i c_i)Q'Q+O(h^3)=X+hQ+\frac{h^2}{2}Q'Q+O(h^3)$, which agrees with the exact Taylor expansion through degree two. Its local defect is therefore $O(h^3)$. [A1, F1, F2, F5, F6, step 1.1, algebra]

2.2 On the scalar equation, solving the first stage gives $K_1=\lambda y/(1-\gamma z)$; substitution into the second gives $Y_2/y=(1+(1-2\gamma)z)/(1-\gamma z)^2$. Stiff accuracy identifies $Y_2$ with the update, proving the displayed rational formula wherever the stages are defined. [F1, F2, step 1.1, algebra]

3.1 Put $w=-z=s+it$, $s\ge0$, $v=\gamma s\ge0$, and $u=\gamma t$. From [F3] and $\gamma=1-1/\sqrt2$, one obtains $(1-2\gamma)/\gamma=\sqrt2$. Direct expansion gives $|1+\gamma w|^4-|1-\sqrt2\gamma w|^2=(4+2\sqrt2)v+4v^2+4v^3+v^4+4vu^2+2v^2u^2+u^4\ge0.$ Also $\operatorname{Re}(1+\gamma w)=1+v>0$, so the denominator is nonzero for $s\ge0$. The inequality proves $|R(z)|\le1$ for $\operatorname{Re}z\le0$, and the numerator degree is one while the denominator degree is two, so $R(z)\to0$ as $|z|\to\infty$ in that half-plane. By the scalar definition this is L-stability. [F1, F3, step 1.1, step 2.2, algebra] ∎
