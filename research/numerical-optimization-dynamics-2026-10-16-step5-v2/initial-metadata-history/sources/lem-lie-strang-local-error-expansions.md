---
id: lem-lie-strang-local-error-expansions
kind: lemma
title: "Lie and Strang splitting errors have commutator expansions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-exact-split-flows-lie-strang-and-bracket
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-second-part
  - thm-symmetry-of-higher-mixed-partials
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
    - title: "Ernst Hairer, Geometric Numerical Integration, Lecture 2: Symplectic Integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "§5, Lie–Trotter and Strang splitting, PDF pp. 12–14."
    - title: "Gilbert Strang, On the Construction and Comparison of Difference Schemes"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0705041"
      locator: "The symmetric half-step product and its smooth-solution accuracy calculation, printed pp. 509–513 (PDF pp. 3–7)."
---

## Statement

Let $a,b\in C^3(U,\mathbb R^d)$ on an open set and let $K_0\subset K\subset U$, where $K_0$ is compact and $K$ is compact and convex. Assume the exact $a$- and $b$-subflows, their Lie and Strang compositions, and the exact flow $\Phi_{a+b}^h$ from $K_0$ are defined and remain in $K$ for all sufficiently small $h>0$, and the fields and derivatives through order three are bounded on $K$. Uniformly for $y\in K_0$,
$$L_h(y)-\Phi_{a+b}^h(y)=\frac{h^2}{2}[a,b](y)+O(h^3),$$
and the Strang expansion, pointwise in $y$, is
$$S_h(y)-\Phi_{a+b}^h(y)=-\frac{h^3}{24}[a,[a,b]](y)-\frac{h^3}{12}[b,[a,b]](y)+o(h^3).$$
The Strang defect is also uniformly $O(h^3)$ on $K_0$. The maps and bracket use [[def-exact-split-flows-lie-strang-and-bracket]]; the claim is finite-dimensional.

## Facts & Assumptions

**Given:** The fields, exact subflows, compact tube, and bounded derivatives in the Statement.

[F1] [[def-exact-split-flows-lie-strang-and-bracket]]: $L_h=\Phi_b^h\circ\Phi_a^h$, $S_h=\Phi_a^{h/2}\circ\Phi_b^h\circ\Phi_a^{h/2}$, and $[a,b]=Db\,a-Da\,b$.

[F2] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition gives $D(g\circ f)=Dg(f)\circ Df$.

[F3] [[thm-ftc-second-part]]: an integrable derivative satisfies $\int_\alpha^\beta g'=g(\beta)-g(\alpha)$.

[F4] [[thm-symmetry-of-higher-mixed-partials]]: for a $C^2$ scalar function, the two Hessian arguments are symmetric.

[A1] Each flow is defined on the stated tube, and its time derivatives through order three are bounded there; these follow from the $C^3$ fields and the compact-tube hypotheses.

## Proof

1.1 For a $C^3$ field $c$ and a smooth scalar coordinate function $q(y)=y_j$, define $L_cq:=Dq\,c$. By [F2], differentiating $q(\Phi_c^t(y))$ successively in $t$ gives $L_cq$, $L_c^2q$, and $L_c^3q$, evaluated along the flow. Three uses of [F3] give the expansion through degree two with integral remainder $\frac12\int_0^h(h-s)^2(L_c^3q)(\Phi_c^s(y))\,ds$; [A1] bounds this remainder uniformly by $C h^3$ and continuity at $s=0$ gives cubic coefficient $\frac16L_c^3q(y)$ with pointwise remainder $o(h^3)$. The same reasoning applies successively to the finite flow compositions. [A1, F2, F3, algebra]

2.1 For a map $M$, define its pullback by $M^*q:=q\circ M$, and for a vector field $c$ put $L_cq:=Dq\,c$. Set $X=L_a$ and $Y=L_b$. The pullback of a composition reverses composition order, so [F1] and step 1.1 give, through degree two, $L_h^*q=q+h(X+Y)q+h^2\left(\frac12X^2+XY+\frac12Y^2\right)q+O(h^3).$ The exact total-flow pullback is $q+h(X+Y)q+\frac12h^2(X+Y)^2q+O(h^3)$. Subtracting leaves $\frac12h^2(XY-YX)q+O(h^3)$. [F1, step 1.1, algebra]

3.1 For any $C^2$ scalar $q$, the chain rule gives $[L_a,L_b]q=D^2q(a,b)+Dq\,Db\,a-D^2q(b,a)-Dq\,Da\,b=Dq\,(Db\,a-Da\,b),$ where [F4] cancels the Hessian terms. Thus $[X,Y]q=L_{[a,b]}q$. Applying this to each coordinate function in step 2.1 gives the stated Lie map expansion. [F1, F4, step 2.1, algebra]

3.2 Pullback reversal and [F1] give $S_h^*=\Phi_a^{h/2*}\Phi_b^{h*}\Phi_a^{h/2*}$. Expanding its three factors by step 1.1 gives the cubic part $\frac16X^3+\frac16Y^3+\frac18X^2Y+\frac14XYX+\frac18YX^2+\frac14XY^2+\frac14Y^2X.$ Multiplying the three degree-three Taylor polynomials gives these coefficients: the $X^3$ term is $1/48+1/48+1/16+1/16=1/6$, and the $Y^3$ term is $1/6$. The mixed coefficients are $X^2Y:(1/8)(1)=1/8$, $XYX:(1/2)(1)(1/2)=1/4$, $YX^2:(1)(1/8)=1/8$, $XY^2:(1/2)(1/2)=1/4$, and $Y^2X:(1/2)(1/2)=1/4$; $YXY$ is absent because neither outer factor contains $Y$. The exact total-flow cubic part is $\frac16(X+Y)^3$, whose eight words each have coefficient $1/6$. Degrees zero through two agree, so subtraction gives $-\frac1{24}(X^2Y-2XYX+YX^2)-\frac1{12}(2YXY-Y^2X-XY^2)+o(h^3).$ [F1, step 1.1, step 2.1, algebra]

4.1 Step 3.1 also applies with the second field equal to $[a,b]$, which is $C^2$ under the $C^3$ hypotheses. Hence $[X,[X,Y]]=L_{[a,[a,b]]}$ and $[Y,[X,Y]]=L_{[b,[a,b]]}$. Applying step 3.2 to each coordinate yields the stated Strang coefficient and pointwise $o(h^3)$ remainder. The uniform $O(h^3)$ defect follows already from the uniform degree-two remainder in step 1.1 and the equality of all coefficients through degree two. [F1, step 1.1, step 3.1, step 3.2, algebra] ∎

