---
id: prop-two-stage-radau-iia-order-three-and-l-stability
title: "Two-stage Radau IIA has order three and is scalar L-stable"
kind: proposition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-two-stage-radau-iia-tableau
  - def-scalar-rk-a-and-l-stability
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-implicit-runge-kutta-stage-equations
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
      locator: "PDF pp. 5–9 and 18–20: order conditions and Radau IIA tableau."
---

## Statement

For the tableau in [[def-two-stage-radau-iia-tableau]], on a $C^3$ vector field and the local small-step branch specified by [[lem-small-step-implicit-rk-branch-and-residual-error]], the local defect is $O(h^4)$, so the method has classical order at least three. Its scalar stability function is
$$R(z)=\frac{1+z/3}{1-2z/3+z^2/6},$$
and it is L-stable in the scalar sense of [[def-scalar-rk-a-and-l-stability]]. No nonlinear contractivity assertion follows.

## Facts & Assumptions

**Given:** The Radau IIA tableau, a $C^3$ vector field on an open neighborhood of an exact solution segment, and a sufficiently small step with an invariant stage ball containing the selected solution.

[F1] [[def-two-stage-radau-iia-tableau]]: $A=\begin{pmatrix}5/12&-1/12\\3/4&1/4\end{pmatrix}$, $b=(3/4,1/4)^T$, and $c=(1/3,1)^T$; $c$ is the row-sum vector and the final row is $b^T$.

[F2] [[def-implicit-runge-kutta-stage-equations]]: the stages solve $Y_i=y+h\sum_j a_{ij}f(t+c_jh,Y_j)$ and the update is $y+h\sum_i b_i f(t+c_i h,Y_i)$.

[F3] [[lem-small-step-implicit-rk-branch-and-residual-error]]: if $F$ is bounded by $M$, is $L$-Lipschitz on an invariant product ball of radius $R$, $h\|A\|_\infty M\le R$, and $h\|A\|_\infty L<1$, there is a unique stage fixed point in that ball.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] gives the Lagrange remainder for each scalar component on a convex segment. The supplier is scalar-valued. For a vector map $F:U\subset\mathbb R^s\to\mathbb R^d$, apply it separately to each real component $F_i$; its intermediate points $\theta_i$ may differ. If the absolute values of all order-$(k+1)$ component partial derivatives on the segment are at most $M$, each component remainder is at most $M C_{s,k}\|v\|_2^{k+1}$, where $C_{s,k}=\sum_{|\alpha|=k+1}1/\alpha!$ is a fixed finite constant, since $|v^\alpha|\le\|v\|_2^{k+1}$. Hence the Euclidean remainder is at most $\sqrt d M C_{s,k}\|v\|_2^{k+1}$. In one time variable the max-norm bound is $M|h|^{k+1}/(k+1)!$. No common intermediate point for all components is asserted.

[A1] The derivatives of the augmented field $Q(t,y)=(1,f(t,y))$ through order three are bounded on the local compact tube.

## Proof


1.1 The row sums of $A$ equal $c$, $b^T$ is the final row of $A$, and direct arithmetic gives $\sum_i b_i=1,\qquad b^Tc=\frac34\frac13+\frac14=\frac12,\qquad b^Tc^2=\frac34\frac19+\frac14=\frac13.$ Also $Ac=(1/18,1/2)^T$, so $b^TAc=(3/4)(1/18)+(1/4)(1/2)=1/6$. [F1, algebra]

1.2 Augment the equation by $Q(t,y)=(1,f(t,y))$. Because the rows of $A$ sum to $c$, the augmented stage times are exactly $t+c_i h$. Write $K_i=Q(X_i)$ for augmented stage derivatives. The invariant-ball bound [F3] gives $X_i-X=O(h)$, and the componentwise norm estimate [F4] yields, uniformly on the local tube, $K_i=Q+h c_iQ'Q+h^2\left(\sum_j a_{ij}c_jQ'Q'Q+\frac{c_i^2}{2}Q''(Q,Q)\right)+O(h^3).$ Indeed first $K_j=Q+O(h)$ gives $X_i-X=hc_iQ+O(h^2)$; substituting this into the first-order Taylor expansion gives the $h c_iQ'Q$ term, and substituting once more into the second-order Taylor expansion gives the displayed $h^2$ terms, with $O(h^3)$ remainder because $Q\in C^3$ and its third derivative is bounded. [A1, F2, F3, F4, algebra]

1.3 On $y'=\lambda y$, direct solution of the two-stage linear system gives $\det(I-zA)=1-\frac{2z}{3}+\frac{z^2}{6},\qquad 1+z b^T(I-zA)^{-1}\mathbf1=\frac{1+z/3}{1-2z/3+z^2/6}.$ Stiff accuracy makes the update the second stage, so this is the stated scalar stability function. [F1, F2, algebra]

2.1 Multiplying the expansion of step 1.2 by $h b_i$ and summing gives $X+hQ+\frac{h^2}{2}Q'Q+\frac{h^3}{6}\left(Q''(Q,Q)+Q'Q'Q\right)+O(h^4),$ using all four identities in step 1.1. The exact solution has the same expansion: $X'=Q$, $X''=Q'Q$, and $X'''=Q''(Q,Q)+Q'Q'Q$; applying scalar Taylor separately to each time-coordinate function, with the componentwise norm estimate in [F4] and the bounded fourth derivative obtained from $X'=Q(X)$ and $Q\in C^3$, gives remainder $O(h^4)$. Thus the local defect is $O(h^4)$. [A1, F1, F2, F4, step 1.1, step 1.2, algebra]

3.1 Put $w=-z=s+it$, $s\ge0$. Expanding real and imaginary parts gives $\left|1+\frac{2w}{3}+\frac{w^2}{6}\right|^2-\left|1-\frac{w}{3}\right|^2=2s+\frac23s^2+\frac29s^3+\frac1{36}s^4+\left(\frac{2s}{9}+\frac{s^2}{18}\right)t^2+\frac{t^4}{36}\ge0.$ If the denominator vanished, this inequality would force the numerator to vanish; the numerator $1-w/3$ vanishes only at $w=3$, where the denominator is $1+2+9/6\ne0$. Hence there are no poles for $\operatorname{Re}z\le0$, and the inequality gives $|R(z)|\le1$ there. Since the numerator degree is one and denominator degree is two, $R(z)\to0$ as $|z|\to\infty$ in that half-plane. This is scalar L-stability. [F1, step 1.3, algebra] ∎
