---
id: prop-ars222-bivariate-stability-region
kind: proposition
title: "The ARS(2,2,2) bivariate scalar stability function"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-ars222-additive-tableau-and-stages
  - lem-ars222-coefficient-identities
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
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
      locator: "§3, scalar additive test equations and stability analysis, PDF pp. 6–8."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§3, stability properties of the coupled explicit/implicit method, PDF pp. 3–5."
---

## Statement

For this stability calculation, extend the real tableau formulas in [[def-ars222-additive-tableau-and-stages]] to complex scalars by the real embedding $\mathbb R\hookrightarrow\mathbb C$ (equivalently, view $\mathbb C$ as $\mathbb R^2$ and let each $\lambda$ act by multiplication). Apply that extension to $y'=\lambda_a y+\lambda_b y$, with $z_a=h\lambda_a$ and $z_b=h\lambda_b$ in $\mathbb C$. If $1-\gamma z_b\ne0$, the one-step amplification factor is
$$R(z_a,z_b)=\frac{1+z_a+(1-2\gamma)z_b+\frac12z_a^2+(\frac12-\gamma^2)z_az_b}{(1-\gamma z_b)^2}.$$
The exact scalar absolute-stability region for this tableau is
$$\mathcal S=\left\{(z_a,z_b)\in\mathbb C^2:1-\gamma z_b\ne0,\ \left|1+z_a+(1-2\gamma)z_b+\frac12z_a^2+(\frac12-\gamma^2)z_az_b\right|\le|1-\gamma z_b|^2\right\}.$$
On $z_b=0$ this reduces to $|1+z_a+z_a^2/2|\le1$; on $z_a=0$ it reduces to $|1+(1-2\gamma)z_b|\le|1-\gamma z_b|^2$. This is a scalar, two-variable region; it makes no matrix-nonnormality or PDE stability claim.

## Facts & Assumptions

**Given:** The ARS(2,2,2) stages and weights, and the scalar test equation with the stated $z_a,z_b$.

[F1] [[def-ars222-additive-tableau-and-stages]]: $Y_1=y$, $Y_2=y+\gamma h a(Y_1)+\gamma h b(Y_2)$, and $Y_3=y+h[\delta a(Y_1)+(1-\delta)a(Y_2)]+h[(1-\gamma)b(Y_2)+\gamma b(Y_3)]$, with output $Y_3$.

[F2] [[lem-ars222-coefficient-identities]]: $\gamma(1-\delta)=1/2$, $\gamma(2-\gamma)=1/2$, and $\gamma(1-\gamma-\delta)=1/2-\gamma^2$.

[F3] [[def-complex-numbers-and-arithmetic]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]: the scalar stability variables lie in $\mathbb C$ and absolute stability is expressed using complex modulus.

## Proof

1.1 Substituting $a(y)=\lambda_a y$ and $b(y)=\lambda_b y$ into [F1] gives $Y_2/y=(1+\gamma z_a)/(1-\gamma z_b)$ whenever the denominator is nonzero. The third stage then satisfies $\frac{Y_3}{y}=\frac{1+\delta z_a+[(1-\delta)z_a+(1-\gamma)z_b](Y_2/y)}{1-\gamma z_b}.$ These formulas are linear coefficient identities, so they also define the amplification when $y=0$. [given, F1, F2, algebra]

2.1 Substituting the stage-two ratio from step 1.1 gives numerator $(1+\delta z_a)(1-\gamma z_b)+[(1-\delta)z_a+(1-\gamma)z_b](1+\gamma z_a)$ over denominator $(1-\gamma z_b)^2$. Collecting terms yields $1+z_a+(1-2\gamma)z_b+\gamma(1-\delta)z_a^2+\gamma(1-\gamma-\delta)z_az_b$. [step 1.1, algebra]

3.1 The identities in [F2] simplify the $z_a^2$ and $z_az_b$ coefficients in step 2.1; the remaining $z_b$ coefficient is $1-2\gamma$. Substitution gives the displayed $R(z_a,z_b)$. [F2, step 2.1, algebra]

4.1 Repeated application to the scalar test equation multiplies its state by $R$ at each step, so nonincrease of the absolute value is exactly $|R|\le1$. Since $| (1-\gamma z_b)^2|=|1-\gamma z_b|^2$, this is precisely the displayed set $\mathcal S$, with the pole excluded because the implicit stage equation is singular there. Setting either variable to zero gives the stated axis sections by substitution. [F3, step 3.1, algebra] ∎

