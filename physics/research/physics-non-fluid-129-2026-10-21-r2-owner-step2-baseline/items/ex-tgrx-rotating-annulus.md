---
id: ex-tgrx-rotating-annulus
kind: example
title: Rigid bath and nonexact electric period
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - prop-tgrx-equilibrium-obstructions
  - def-tgrx-period-of-one-form
  - lem-tgrx-exact-one-form-zero-period
dependency_roles:
  prop-tgrx-equilibrium-obstructions: mathematical-premise
  def-tgrx-period-of-one-form: mathematical-premise
  lem-tgrx-exact-one-form-zero-period: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "F. Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §5, eqs. (9), (15), and (16)"
      url: https://arxiv.org/pdf/1606.06605
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.B, eqs. (264)–(268)"
      url: https://arxiv.org/pdf/2106.09235
verification:
  precheck: pass
---

## Example

In the length-coordinate Minkowski model with $b=1\,\mathrm{J}^{-1}$, $\Omega=1\,\mathrm{m}^{-1}$, and $r=\tfrac12\,\mathrm m$, $T=2\,\mathrm J/(\sqrt3 k_B)$. On the annulus $\tfrac14\,\mathrm m<r<\tfrac34\,\mathrm m$, let $\eta=(-y\,dx+x\,dy)/(x^2+y^2)$, $\beta=b(\partial_{x^0}+\Omega\partial_\phi)$, and $F=C_0\,dx^0\wedge\eta$ for nonzero $C_0$ with units $\mathrm{T\,m}$. If $q_{\rm eff}\ne0$, then $\omega=\iota_\beta F=bC_0(\eta-\Omega dx^0)$ is closed and has period $2\pi bC_0\ne0$ on every positively oriented circle of fixed $x^0,z,r$ in the annulus. Hence no global smooth dimensionless scalar $\alpha$ satisfies $d\alpha=q_{\rm eff}\omega$.

## Statement references

[[prop-tgrx-equilibrium-obstructions]]

[[def-tgrx-period-of-one-form]]

[[lem-tgrx-exact-one-form-zero-period]]

## Facts & Assumptions

**Given:** The length-coordinate Minkowski metric, $b=1\,\mathrm{J}^{-1}$, $\Omega=1\,\mathrm{m}^{-1}$, $r=\tfrac12\,\mathrm m$, $C_0\ne0$ in $\mathrm{T\,m}$, and $q_{\rm eff}\ne0$.

[F1] [[prop-tgrx-equilibrium-obstructions]]: the rotating temperature is $T=1/(k_Bb\sqrt{1-\Omega^2r^2})$ on $r<1/|\Omega|$, and a nonzero period of $\omega=\iota_\beta F$ forbids a global solution of $d\alpha=q_{\rm eff}\omega$.

[F2] [[def-tgrx-period-of-one-form]]: the period on a piecewise-$C^1$ loop is the integral of the one-form evaluated on the curve tangent, summed over its finite smooth pieces.

[F3] [[lem-tgrx-exact-one-form-zero-period]]: every exact smooth one-form has zero period on every closed piecewise-$C^1$ curve.

[A1] The domain is $O=\mathbb R_{x^0}\times\{(x,y):\tfrac14\,\mathrm m<\sqrt{x^2+y^2}<\tfrac34\,\mathrm m\}\times\mathbb R_z$, with the Minkowski metric and the smooth rotation generator $\partial_\phi=-y\partial_x+x\partial_y$.

[A2] The global one-form $\eta=(-y\,dx+x\,dy)/(x^2+y^2)$ and the fields $A=C_0x^0\eta$, $F=dA=C_0dx^0\wedge\eta$ are smooth on $O$.

## Verification

**Given:** [A1], [A2], and [F1]–[F3].

1.1 The chosen radius satisfies $\Omega^2r^2=(1\,\mathrm{m}^{-1})^2(\tfrac12\,\mathrm m)^2=1/4$, so $\sqrt{1-\Omega^2r^2}=\sqrt3/2$ and the rotating temperature formula in [F1] gives $T=2\,\mathrm J/(\sqrt3 k_B)$. The annulus has $r<3/4\,\mathrm m<1/|\Omega|$, so every point lies inside the timelike domain. [given, F1, A1, algebra]

1.2 The form $\eta$ is smooth because $r^2=x^2+y^2>0$. Its coefficients are $\eta_x=-y/r^2$ and $\eta_y=x/r^2$, with $\partial_x\eta_y=(y^2-x^2)/r^4=\partial_y\eta_x$, so $d\eta=0$. Also $\eta(\partial_\phi)=(-y/r^2)(-y)+(x/r^2)x=1$. Hence $dA=C_0dx^0\wedge\eta=F$, and contraction gives $\omega=\iota_\beta F=bC_0(\eta-\Omega dx^0)$. Since $d\eta=0$ and $d(dx^0)=0$, $d\omega=0$. [given, A1, A2, algebra]

1.3 For $\gamma(s)=(x^0_0,r\cos(2\pi s),r\sin(2\pi s),z_0)$, $0\le s\le1$, its tangent satisfies $dx^0(\dot\gamma)=0$ and direct substitution into $\eta=(-y\,dx+x\,dy)/r^2$ gives $\eta_{\gamma(s)}(\dot\gamma(s))=2\pi$. Hence $\operatorname{Per}_\gamma(\omega)=\int_0^1 2\pi bC_0\,ds=2\pi bC_0\ne0$. [given, F2, A1, A2, algebra]

2.1 If a global smooth $\alpha$ solved $d\alpha=q_{\rm eff}\omega$, then $\omega=d(\alpha/q_{\rm eff})$ because $q_{\rm eff}\ne0$. This would be exact, so [F3] would force $\operatorname{Per}_\gamma(\omega)=0$, contradicting step 1.3. Hence no such global scalar exists. [given, F3, step 1.3, algebra] ∎
