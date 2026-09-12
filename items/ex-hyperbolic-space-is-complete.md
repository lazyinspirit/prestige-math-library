---
id: ex-hyperbolic-space-is-complete
kind: example
title: Hyperbolic space is complete
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-countable-choice, def-euclidean-inner-product, cor-differentiable-implies-continuous, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables, prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure, prop-coordinate-criterion-for-a-riemannian-metric, thm-path-connected-implies-connected, def-geodesically-complete-riemannian-manifold, thm-hopf-rinow, ex-geodesics-in-the-poincare-upper-half-plane]
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 15.1.6 and Theorem 19.2.1
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Bruno Martelli, Hyperbolic Geometry, Chapter 2, Propositions 1.8 and 1.15--1.17 and Corollary 1.9
      url: https://people.dm.unipi.it/martelli/didattica/matematica/2014/Hyperbolic_geometry.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: explicit extension and Hopf-Rinow
---

## Example

Assume $\mathrm{AC}_\omega$. The Poincaré upper half-plane
$$H=\{(x,y)\in\mathbb R^2:y>0\},\qquad g=\frac{dx^2+dy^2}{y^2},$$
is geodesically complete and is complete for its Riemannian distance $d_g$.
The second assertion concerns $d_g$, not the restricted Euclidean distance.

## Facts & Assumptions

**Given:** The displayed upper half-plane, metric, and $\mathrm{AC}_\omega$.

[A1] [[def-countable-choice]] names the assumed $\mathrm{AC}_\omega$.

[F1] [[def-euclidean-inner-product]] gives the Euclidean norm formula and its coordinate-square comparison. [[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]] makes an open subset of $\mathbb R^2$ a boundaryless smooth two-manifold. The product and quotient rules in [[thm-algebra-of-derivatives]], read through [[def-ck-and-multi-index-notation-in-several-variables]], supply the all-orders coordinate calculation for $y^{-2}$ below, and [[cor-differentiable-implies-continuous]] supplies the continuity of its one-variable derivatives. Finally, [[prop-coordinate-criterion-for-a-riemannian-metric]] identifies a smooth symmetric positive-definite coordinate matrix as a Riemannian metric.

[F2] [[thm-path-connected-implies-connected]] turns an explicit continuous path between each pair of points into connectedness. For the stated half-plane, the straight segment has coordinates affine in its parameter and so is continuous in the Euclidean subspace topology.

[F3] [[ex-geodesics-in-the-poincare-upper-half-plane]] proves that every nonconstant affinely parametrized geodesic in $(H,g)$ is a restriction of one of the globally defined curves $$(a,b e^{kt}),\qquad \bigl(a+R\tanh(kt+c),R\operatorname{sech}(kt+c)\bigr),$$ where $k\ne0$, $b>0$, and $R>0$, and proves conversely that both displayed families are geodesics. It also identifies the zero-speed geodesics as the constant curves.

[F4] Under [A1], [[def-geodesically-complete-riemannian-manifold]] says that a boundaryless Riemannian manifold is geodesically complete exactly when every unique maximal geodesic has domain $\mathbb R$.

[F5] Under [A1], [[thm-hopf-rinow]] says, for a nonempty connected boundaryless Riemannian manifold, that geodesic completeness is equivalent to completeness for the Riemannian distance.

## Verification

1.1 The point $(0,1)$ lies in $H$. If $p=(x,y)\in H$ and $\lVert q-p\rVert_2<y/2$, then [F1] gives $|q_y-y|\le\lVert q-p\rVert_2<y/2$, whence $q_y>y/2>0$ and $q\in H$; hence $H$ is open. For the coefficient $f(x,y)=y^{-2}$, define $c_0=1$ and $c_{r+1}=-(r+2)c_r$. Induction with the product and quotient rules in [F1] gives $\partial_y^r f=c_r y^{-r-2}$ for every $r\ge0$; any iterated partial containing $\partial_x$ is zero. The one-variable function $h_r(y)=c_r y^{-r-2}$ is differentiable and hence continuous on $(0,\infty)$. Since $|q_y-y|\le\lVert q-(x,y)\rVert_2$ by [F1], continuity of $h_r$ makes $(x,y)\mapsto h_r(y)$ continuous on $H$. Thus the $C^k$ criterion in [F1] for every $k$ makes $f$ smooth. Finally, for $v=(v_1,v_2)\ne0$, $$g_{(x,y)}(v,v)=\frac{v_1^2+v_2^2}{y^2}>0.$$ Thus [F1] makes $(H,g)$ a nonempty boundaryless Riemannian two-manifold. [F1, given, induction, algebra]

1.2 For $p,q\in H$ and $s\in[0,1]$, the second coordinate of $(1-s)p+sq$ is the positive number $(1-s)p_y+s q_y$. The coordinate polynomials in $s$ are continuous and their pair has image in $H$, so this segment is a path from $p$ to $q$. Thus $H$ is path-connected, and [F2] makes it connected. [F2, given, algebra]

1.3 The curves in [F3] are defined for every $t\in\mathbb R$. Their hyperbolic speeds can also be read directly. The vertical curve has $$g(\dot\gamma,\dot\gamma)=\frac{k^2b^2e^{2kt}}{b^2e^{2kt}}=k^2.$$ For the semicircle put $U=kt+c$, $T=\tanh U$, and $S=\operatorname{sech}U$. Then $$\dot x=RkS^2,\qquad \dot y=-RkST,\qquad y=RS,$$ and $S^2+T^2=1$, so $$g(\dot\gamma,\dot\gamma)=\frac{R^2k^2S^4+R^2k^2S^2T^2}{R^2S^2}=k^2.$$ In particular $|k|=1$ gives hyperbolic arclength parametrizations on all of $\mathbb R$; arbitrary $k\ne0$ gives complete affine constant-speed parametrizations. [F3, algebra]

2.1 Fix initial data and let $\gamma:I\to H$ be its unique maximal geodesic. If its initial velocity is zero, the constant geodesic with that initial data is defined on $\mathbb R$, so maximality gives $I=\mathbb R$. Otherwise [F3] identifies $\gamma$ on $I$ with a restriction of one of the two curves in step 1.3, and [F3] proves that the corresponding curve on all of $\mathbb R$ is a geodesic. It is therefore an extension of $\gamma$ unless $I=\mathbb R$. Maximality forces $I=\mathbb R$ in every case, and [F4] makes $(H,g)$ geodesically complete. [F3, F4, step 1.3]

3.1 Steps 1.1 and 1.2 verify the nonempty, connected, boundaryless Riemannian hypotheses of [F5], and step 2.1 verifies its geodesic-completeness condition. The implication from that condition to metric completeness in [F5] therefore makes $(H,d_g)$ complete. The explicit classification and extension calculation in steps 1.1--2.1 use no choice; $\mathrm{AC}_\omega$ is used only through the current maximal-geodesic completeness convention [F4] and Hopf--Rinow [F5]. [A1, F4, F5, step 1.1, step 1.2, step 2.1] ∎

## Source locators

- Datar, Example 15.1.6, printed p. 115, supplies the Poincaré metric and its coordinate geodesic equations. Its printed circle equation interchanges the center coordinates; the complete boundary-centered parametrizations used here are those proved in [[ex-geodesics-in-the-poincare-upper-half-plane]], not that misprinted equation. Datar, Theorem 19.2.1 and proof, printed pp. 141--144, supplies the general geodesic/metric completeness equivalence used in step 3.1.
- Martelli, Chapter 2, Proposition 1.8 and Corollary 1.9, printed p. 24, give globally defined hyperboloid-model geodesics and deduce completeness by Hopf--Rinow. Propositions 1.15--1.17, printed pp. 28--30, identify the upper half-space as the same hyperbolic model, give the metric $x_n^{-2}g_E$, and parametrize vertical unit-speed geodesics. The local proof above obtains the full two-dimensional vertical/semicircle extension statement from [F3].
