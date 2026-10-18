---
id: ex-pe03-entropy-stable-underresolved-shock
kind: example
title: An entropy-stable Burgers flux still smears an under-resolved shock
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-pe03-system-entropy-pair-and-potential
  - def-pe03-tadmor-entropy-conservative-flux
  - def-pe03-entropy-stable-dissipative-flux
  - thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux
proof_strategy: direct
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.1–4.3, semidiscrete entropy stability and numerical viscosity, PDF pp. 11–13; complete chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§§2.2–2.3, entropy stability and added dissipation, PDF pp. 6–8; full preprint read"
---

## Example

For the Burgers flux and quadratic entropy, the unit-dissipation
entropy-stable flux has a negative Tadmor residual at the entropy shock
$1\to0$. On the four-cell
periodic data $(1,1,0,0)$ and with $\nu=\Delta t/\Delta x=1/2$, one explicit
forward-Euler update replaces the two states adjacent to that jump by
$11/12$ and $1/3$. Thus semidiscrete entropy stability coexists with visible
shock smearing at this coarse resolution. This computation gives no
fully-discrete entropy inequality for forward Euler.

## Facts & Assumptions

**Given:** Burgers' flux $f(u)=u^2/2$, the entropy-stable flux from the preceding example, the four periodic cell states, and $\nu=1/2$. Verify entropy admissibility of the exact shock, the semidiscrete flux residual, and the displayed finite update.

[F1] [[def-pe03-system-entropy-pair-and-potential]]: for $\eta=u^2/2$ and $q=u^3/3$, $v=u$ and $\psi=u^3/6$.

[F2] [[def-pe03-tadmor-entropy-conservative-flux]]: consistency and $[v]f^{ec}=[\psi]$ define entropy conservation.

[F3] [[def-pe03-entropy-stable-dissipative-flux]]: with $D=1$, $f^{es}=f^{ec}-[u]/2$.

[F4] [[thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux]]: this flux gives the semidiscrete cell entropy inequality, not a fully discrete time-step claim.

## Verification

1.1 The Rankine–Hugoniot speed from states $u_L=1,u_R=0$ is $(f(0)-f(1))/(0-1)=1/2$. Since $f'(0)=0<1/2<1=f'(1)$, it is a compressive shock. Its entropy production is $q(0)-q(1)-\tfrac12(\eta(0)-\eta(1))=-1/3+1/4=-1/12<0$, so it satisfies the quadratic entropy inequality. [given, F1, algebra]

2.1 The entropy-conservative Burgers flux is $f^{ec}=(u_L^2+u_Lu_R+u_R^2)/6$: it is symmetric and diagonal-consistent, and $(u_R-u_L)f^{ec}=(u_R^3-u_L^3)/6=[\psi]$, so [F2] applies. Hence $f^{ec}(1,0)=1/6$ and [F3] gives $f^{es}(1,0)=2/3$. With $[u]=-1$ and $[\psi]=-1/6$ from step 1.1, the Tadmor residual is $[u]f^{es}-[\psi]=-2/3+1/6=-1/2<0$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Equal-state faces have flux $f^{es}(1,1)=1/2$ and $f^{es}(0,0)=0$ by [F2]–[F3]. Thus the left state adjacent to the jump updates to $1-\tfrac12(2/3-1/2)=11/12$, and the right state updates to $0-\tfrac12(0-2/3)=1/3$. The jump is spread over two intermediate values. This is a finite computation only; [F4] does not certify the forward-Euler step's entropy inequality. The interface flux value was obtained in step 2.1. [given, F1, F2, F3, F4, step 2.1, algebra] ∎

