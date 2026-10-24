---
id: ex-pe03-burgers-entropy-residual
kind: example
title: Exact Tadmor entropy residual for a dissipative Burgers flux
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-pe03-system-entropy-pair-and-potential
  - def-pe03-tadmor-entropy-conservative-flux
  - def-pe03-entropy-stable-dissipative-flux
proof_strategy: direct
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.1–4.3, entropy potential and entropy-stable dissipation, PDF pp. 11–13; full chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§2.2, entropy-conservative jump identity, PDF pp. 6–8; full preprint read"
---

## Example

For Burgers' flux $f(u)=u^2/2$ and entropy $\eta(u)=u^2/2$, the entropy flux
is $q(u)=u^3/3$ and the entropy potential is $\psi(u)=u^3/6$. The symmetric
two-point flux
$$f^{ec}(u_L,u_R)=\frac{u_L^2+u_Lu_R+u_R^2}{6}$$
is entropy-conservative. Adding unit dissipation in entropy variables gives
$f^{es}=f^{ec}-(u_R-u_L)/2$; at the jump $1\to0$ its Tadmor entropy residual
is exactly $-1/2$.

## Facts & Assumptions

**Given:** Burgers' flux, the quadratic entropy pair, and the two-point flux formula. Verify compatibility, the entropy-conservative identity, and the dissipative residual at $(u_L,u_R)=(1,0)$.

[F1] [[def-pe03-system-entropy-pair-and-potential]]: an entropy pair satisfies $q'=\eta'f'$, with $v=\eta'$ and $\psi=vf-q$.

[F2] [[def-pe03-tadmor-entropy-conservative-flux]]: a continuous, consistent, symmetric two-point flux is entropy-conservative when $[v]f^{ec}=[\psi]$ for every pair of states, with right-minus-left jumps.

[F3] [[def-pe03-entropy-stable-dissipative-flux]]: $f^{es}=f^{ec}-D[v]/2$ for symmetric positive-semidefinite $D$.

## Verification

1.1 Here $\eta''(u)=1$, $\eta'(u)=u$, and $q'(u)=u^2=\eta'(u)f'(u)$, so this is a convex entropy pair. Thus $v=u$ and $\psi=uf-q=u^3/6$ by [F1]. [given, F1, algebra]

2.1 The displayed $f^{ec}$ is polynomial, hence continuous, is symmetric, and satisfies $f^{ec}(u,u)=u^2/2=f(u)$. Moreover, $(u_R-u_L)f^{ec}(u_L,u_R)=\frac{u_R^3-u_L^3}{6}=\psi(u_R)-\psi(u_L)$, so [F2] applies using $\psi=u^3/6$ from step 1.1. [given, F1, F2, step 1.1, algebra]

3.1 Taking $D=1$ in [F3], at $(1,0)$ we have $f^{ec}=1/6$, $[v]=-1$, and $[\psi]=-1/6$. Therefore $[v]f^{es}-[\psi]=(-1)(1/6+1/2)-(-1/6)=-1/2$. In general the same substitution gives residual $-\tfrac12(u_R-u_L)^2\le0$, using the formula in step 2.1. [given, F2, F3, step 2.1, algebra] ∎

