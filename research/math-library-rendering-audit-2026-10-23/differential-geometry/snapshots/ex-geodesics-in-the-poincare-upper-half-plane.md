---
id: ex-geodesics-in-the-poincare-upper-half-plane
kind: example
title: Geodesics in the Poincare upper half-plane
status: published
origin: pipeline
pipeline_run: phase-2-next-17
deps: [prop-coordinate-geodesic-equation, prop-christoffel-formula-for-the-levi-civita-connection, cor-zero-derivative-implies-constant, thm-algebra-of-derivatives, thm-chain-rule, thm-logarithm-derivative-and-integral, def-natural-logarithm, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-derivative-of-exponential, thm-exponential-addition-formula]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 15.1.6, p. 115
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

For the Poincaré metric $g=(dx^2+dy^2)/y^2$ on $H=\{(x,y)\in\mathbb R^2:y>0\}$, every nonconstant affinely parametrized geodesic is a restriction of exactly one of the following forms, with $k\ne0$:
$$\gamma(t)=(a,b e^{kt})\quad(a\in\mathbb R,\ b>0),$$
$$\gamma(t)=\bigl(a+R\tanh(kt+c),\ R\operatorname{sech}(kt+c)\bigr)\quad(a,c\in\mathbb R,\ R>0).$$
Conversely, each displayed curve on all of $\mathbb R$ is a geodesic and traces a whole vertical line or upper Euclidean semicircle $(x-a)^2+y^2=R^2$ orthogonal to the boundary $y=0$; a restriction traces the corresponding subarc. Constant curves are the zero-speed geodesics. An affine change of parameter merely changes the constants in these displayed parametrizations.

## Facts & Assumptions

**Given:** The upper half-plane $H$, its displayed metric, and a geodesic on an interval $I$.

[F1] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes Levi–Civita symbols from the metric matrix; [[prop-coordinate-geodesic-equation]] makes the coordinate ODE equivalent to the intrinsic geodesic condition.

[F2] [[cor-zero-derivative-implies-constant]] makes a continuous function with zero interior derivative constant on an interval, including included endpoints.

[F3] [[thm-logarithm-derivative-and-integral]] gives $(\log y)'=1/y$ for $y>0$, and [[def-natural-logarithm]] makes $\log$ the inverse of $\exp$ on positive reals.

[F4] The functions $\tanh$ and $\operatorname{sech}$ are defined on all of $\mathbb R$ by [[def-hyperbolic-functions]]; [[thm-hyperbolic-identities-and-derivatives]] gives $\tanh'=\operatorname{sech}^2$, $\operatorname{sech}'=-\operatorname{sech}\tanh$, $\tanh^2+\operatorname{sech}^2=1$, and the range $\tanh(\mathbb R)=(-1,1)$.

[F5] [[thm-derivative-of-exponential]] gives $(\exp)'=\exp$.

[F6] [[thm-exponential-addition-formula]] gives $\exp(u+v)=\exp(u)\exp(v)$.

[F7] [[thm-algebra-of-derivatives]] gives the sum, product and quotient rules, and [[thm-chain-rule]] differentiates the composites used below.

## Verification

1.1 Here $(g_{ij})=y^{-2}I_2$ and $(g^{ij})=y^2I_2$. Applying the formula in [F1], the only nonzero symbols are $\Gamma^x{}_{xy}=\Gamma^x{}_{yx}=-1/y$, $\Gamma^y{}_{xx}=1/y$, and $\Gamma^y{}_{yy}=-1/y$. Hence the two geodesic equations are $$x''-2x'y'/y=0,\qquad y''+(x'^2-y'^2)/y=0.$$ [F1, given]

2.1 The first equation gives $(x'/y^2)'=0$, so $C:=x'/y^2$ is constant by [F2]. Differentiating $E:=(x'^2+y'^2)/y^2$ gives $$E'=\frac{2x'}{y^2}(x''-2x'y'/y)+\frac{2y'}{y^2}\bigl(y''+(x'^2-y'^2)/y\bigr)=0.$$ Thus $E$ is constant too. If $E=0$, positive definiteness forces $x'=y'=0$, and the curve is constant. [F2, F7, step 1.1, given]

3.1 If $C=0$, then $x'=0$, so $x=a$. The second equation becomes $(\log y)''=(y''y-y'^2)/y^2=0$. By [F2], [F3] and [F7], $\log y=kt+d$; therefore [F6] gives $y=b e^{kt}$ with $b=e^d>0$. A nonconstant curve has $k\ne0$. Conversely, [F5] and [F7] give $x'=0$ and $y''=y'^2/y$ for $x=a$, $y=b e^{kt}$, so both equations in step 1.1 hold. [F2, F3, F5, F6, F7, step 1.1, step 2.1]

3.2 Suppose $C\ne0$. Put $a:=x+y'/(Cy)$. From the second equation and $x'=Cy^2$, $$a'=x'+(y''y-y'^2)/(Cy^2)=Cy^2-x'^2/(Cy^2)=0.$$ Thus $a$ is constant. Since $E>0$, set $R=\sqrt E/|C|>0$. Direct substitution into the identity defining $E$ gives $(x-a)^2+y^2=E/C^2=R^2$. In particular $z:=(x-a)/R$ lies in $(-1,1)$, and $y=R\sqrt{1-z^2}$. [F2, F7, step 1.1, step 2.1]

4.1 Define $u=\frac12\log((1+z)/(1-z))$, which is defined because $|z|<1$. The logarithm, chain and quotient rules give $u'=z'/(1-z^2)$, while $z'=x'/R=Cy^2/R=CR(1-z^2)$; hence $u'=CR=:k\ne0$. By [F2], $u=kt+c$. The inverse-log law in [F3] and exponential addition [F6] give $e^{2u}=(1+z)/(1-z)$, so the definitions in [F4] give $z=\tanh u$; since $y>0$ and $1-\tanh^2u=\operatorname{sech}^2u$, $y=R\operatorname{sech}u$. This yields the stated semicircle parametrization on the entire interval. [F2, F3, F4, F6, F7, step 2.1, step 3.2]

5.1 Conversely, set $U=kt+c$, $T=\tanh U$, and $S=\operatorname{sech}U$. For $x=a+RT$ and $y=RS>0$, [F4] and [F7] give $x'=RkS^2$, $y'=-RkST$, $x''=-2Rk^2S^2T$, and $y''=Rk^2S(2T^2-1)$. The first equation of step 1.1 has left side $-2Rk^2S^2T+2Rk^2S^2T=0$; the second has left side $Rk^2S(T^2+S^2-1)=0$. These curves therefore are geodesics. The identity $(x-a)^2+y^2=R^2$ shows the circle meets $y=0$ at right angles; $S>0$ and the range of $\tanh$ show the whole upper semicircle is traced as $t$ ranges over $\mathbb R$. [F1, F4, F7, step 1.1, step 4.1]

6.1 The alternatives $E=0$, $C=0<E$, and $C\ne0$ exhaust every geodesic. In the vertical case the curve determines $a=x$, $k=(\log y)'$, $d=\log y-kt$ and $b=e^d$. In the semicircle case its invariants determine $a=x+y'/(Cy)$, $R=\sqrt E/|C|$, $k=CR$, $u=\frac12\log((1+z)/(1-z))$ and $c=u-kt$. Hence, for the fixed affine parameter, the displayed constants are unique. Steps 3.1 and 5.1 verify both nonconstant families, including their restrictions to intervals with endpoints. For an affine parameter change $t\mapsto\alpha t+\beta$ with $\alpha\ne0$, the first family changes $b,k$ and the second changes $k,c$; $\alpha=0$ yields a constant curve. No countable choice or geodesic existence theorem is used: the conclusion follows by integrating the given curve's own ODE. [F3, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎

## Source locator

Datar, Example 15.1.6, p. 115, supplies the metric and coordinate geodesic equations. Its final printed circle equation has the coordinate roles of the center interchanged; the boundary-centered equation used here follows from the calculation in step 3.2.
