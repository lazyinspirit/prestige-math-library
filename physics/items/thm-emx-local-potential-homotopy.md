---
id: thm-emx-local-potential-homotopy
kind: theorem
title: Local two-form potentials and global obstruction
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emx-lorentz-star
  - def-closed-and-exact-differential-forms
  - def-de-rham-cohomology
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-newton-leibniz-with-interior-derivative
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emx-lorentz-star: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, second edition
      url: https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
      locator: Chapter 17, Theorem 17.9 and Theorem 17.14, pp. 444–448; the explicit two-form primitive is derived here by coordinate differentiation.
    - title: John C. Baez and Javier P. Muniain, Gauge Fields, Knots, and Gravity (1994)
      url: https://djvu.online/file/8KettTaCShh22
      locator: Part I, §1.6, pp. 116–124, smooth forms, Stokes, de Rham classes, and period obstruction.
    - title: Fionn Fitzmaurice, Differential Geometry (notes for Peter Taylor's course, 2011)
      url: https://www.maths.tcd.ie/~fionn/dg/dg.pdf
      locator: §§12.3–12.5, PDF pp. 56–57, exterior derivative, closed and exact forms, and the Lorentzian Hodge-star convention.
proof_strategy: direct
---

## Statement

Let $U\subseteq\mathbb R^4$ be open and star-shaped about $a\in U$, meaning $a+t(x-a)\in U$ for every $x\in U$ and $t\in[0,1]$. For a smooth closed two-form $F=\frac12F_{\mu\nu}\,dx^\mu\wedge dx^\nu$ on $U$, define the smooth one-form $A=A_\mu dx^\mu$ by

$$A_\mu(x)=\int_0^1 t(x-a)^\nu F_{\nu\mu}(a+t(x-a))\,dt.$$

Then $dA=F$. On any smooth manifold $M$, possibly with boundary, a smooth closed two-form $F$ has a globally defined smooth one-form potential $A$ with $dA=F$ if and only if its de Rham class $[F]\in H^2_{\mathrm{dR}}(M)$ is zero. If a finite smooth singular two-cycle $z$ has nonzero period $\int_zF$, then $F$ is not globally exact.

## Statement references

[[def-emx-lorentz-star]]

[[def-closed-and-exact-differential-forms]]

[[def-de-rham-cohomology]]

[[thm-local-coordinate-formula-for-the-exterior-derivative]]

[[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]

[[thm-newton-leibniz-with-interior-derivative]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-algebra-of-derivatives]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The open star-shaped set $U$, its centre $a$, a smooth closed two-form $F$ on $U$, and, for the global clauses, a smooth manifold $M$, a smooth closed two-form on $M$, and a finite smooth singular two-cycle $z$ when a period is considered.

[A1] Star-shapedness is the explicit segment condition in the Statement; closedness means $dF=0$, with $F\in\Omega^2$ smooth.

[F1] [[def-emx-lorentz-star]] fixes $F=\frac12F_{\mu\nu}dx^\mu\wedge dx^\nu$, the exactness convention, and the period $\int_zF$ for finite smooth singular cycles.

[F2] [[def-closed-and-exact-differential-forms]] defines $Z^2=\ker d$ and $B^2=\operatorname{im}d$; in particular $F$ is closed exactly when $dF=0$, and exact exactly when $F=dA$.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $(dF)_{\lambda\mu\nu}=\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}$.

[F4] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] permits differentiating a Riemann integral in one parameter when the integrand and its parameter derivative extend continuously to a compact rectangle.

[F5] [[thm-newton-leibniz-with-interior-derivative]] gives $\int_0^1G'(t)\,dt=G(1)-G(0)$ for continuous $G$ with a Riemann-integrable interior derivative.

[F6] [[def-de-rham-cohomology]] defines $H^2_{\mathrm{dR}}(M)=Z^2(M)/B^2(M)$, so for closed $F$, $[F]=0$ exactly when $F$ is globally exact.

[F7] [[thm-stokes-theorem-for-smooth-singular-chains]] gives $\int_z dA=\int_{\partial z}A$ for smooth $A$ on a possibly boundary manifold and finite smooth singular chains $z$ of positive degree.

[F8] [[thm-chain-rule-for-total-derivatives]] gives the derivative of a smooth composition along the segment $x_t=a+t(x-a)$.

[F9] [[thm-algebra-of-derivatives]] gives the product rule for differentiable real-valued functions on the parameter interval.

## Proof

1.1 For each $x\in U$, the segment $x_t=a+t(x-a)$ lies in $U$ by [A1], so the displayed integrand is smooth on $0\le t\le1$. The segment is compact; since $U$ is open, it has a neighborhood still contained in $U$. Varying one coordinate of $x$ over a sufficiently small closed interval gives a compact rectangle on which the integrand and each coordinate derivative are continuous. Applying [F4] successively to these derivatives proves that every $A_\mu$ is smooth; the formula has no singularity at $t=0$. [A1, F1, F4, given]

1.2 Put $y=x-a$ and $x_t=a+ty$. Differentiating under the integral as in [F4] gives $\partial_\mu A_\nu=\int_0^1(tF_{\mu\nu}(x_t)+t^2y^\rho\partial_\mu F_{\rho\nu}(x_t))\,dt$. Subtracting the expression with $\mu,\nu$ exchanged, the coordinate formula [F3] gives $\partial_\mu F_{\rho\nu}+\partial_\rho F_{\nu\mu}+\partial_\nu F_{\mu\rho}=0$. Since $F_{\nu\mu}=-F_{\mu\nu}$ and $F_{\mu\rho}=-F_{\rho\mu}$, this yields $\partial_\mu F_{\rho\nu}-\partial_\nu F_{\rho\mu}=\partial_\rho F_{\mu\nu}$; hence $\partial_\mu A_\nu-\partial_\nu A_\mu=\int_0^1(2tF_{\mu\nu}(x_t)+t^2y^\rho\partial_\rho F_{\mu\nu}(x_t))\,dt$. [A1, F3, F4, algebra]

1.3 For any closed $F$, [F6] identifies $[F]=0$ with $F\in B^2(M)$, which by [F2] means exactly that some globally defined smooth one-form $A$ satisfies $dA=F$. [F2, F6, given]

2.1 By [F8] and [F9], the integrand in step 1.2 is $\frac{d}{dt}(t^2F_{\mu\nu}(x_t))$. The function $G(t)=t^2F_{\mu\nu}(x_t)$ is continuous on $[0,1]$, differentiable on $(0,1)$, and has continuous derivative there extending to the endpoints, so [F5] gives $\partial_\mu A_\nu-\partial_\nu A_\mu=F_{\mu\nu}(x)$. This is precisely $dA=F$ under the component convention in [F1]. [F1, F5, F8, F9, step 1.2, algebra]

3.1 If $F=dA$ and $z$ is a finite smooth singular cycle, then [F7] gives $\int_zF=\int_zdA=\int_{\partial z}A=0$, since $\partial z=0$. Therefore a nonzero period precludes exactness. [F1, F7, given] ∎
