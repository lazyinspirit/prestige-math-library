---
id: thm-one-dimensional-ideal-gas-euler-eigenstructure
kind: theorem
title: "Eigenstructure of the admissible ideal-gas Euler system"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-hyperbolic-system-and-characteristic-families
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Chs. 5–6 and 9, printed pp. 48–54, 61–64, 89–92: Euler Jacobian, sound speed, and contact field"
---

## Statement

For $U=(\rho,m,E)\in\mathcal G_\gamma$, put $u=m/\rho$,
$H=(E+p)/\rho$, and $c=\sqrt{\gamma p/\rho}$. The flux Jacobian has the
three simple real eigenvalues and right eigenvectors
$$\lambda_-=u-c,\qquad r_-=(1,u-c,H-uc)^T,$$
$$\lambda_0=u,\qquad r_0=(1,u,u^2/2)^T,$$
$$\lambda_+=u+c,\qquad r_+=(1,u+c,H+uc)^T.$$
The middle field is linearly degenerate; the acoustic fields are genuinely
nonlinear, with $D\lambda_-r_-=-(\gamma+1)c/(2\rho)$ and
$D\lambda_+r_+=(\gamma+1)c/(2\rho)$.

## Facts & Assumptions

**Given:** $\gamma>1$ and an admissible ideal-gas Euler state.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $p=(\gamma-1)(E-m^2/(2\rho))$, $F=(m,m^2/\rho+p,u(E+p))$, and $c^2=\gamma p/\rho$.

[F2] [[def-hyperbolic-system-and-characteristic-families]]: eigenpairs are right eigenvectors of $DF$; genuine nonlinearity and linear degeneracy are tested by $D\lambda_i r_i$.

## Proof

1.1 Write $U=(\rho,\rho u,E)$ and use [F1] to obtain $H=u^2/2+c^2/(\gamma-1)$. Differentiating the flux components with respect to $(\rho,m,E)$ gives $DF(U)=\begin{pmatrix}0&1&0\\(\gamma-3)u^2/2&(3-\gamma)u&\gamma-1\\u((\gamma-1)u^2/2-H)&H-(\gamma-1)u^2&\gamma u\end{pmatrix}$. [given, F1, algebra]

2.1 Multiplying $DF$ by $r_0$ gives $(u,u^2,u^3/2)^T=ur_0$. For $r_\pm$, the first row gives $u\pm c$; the second gives $(3-\gamma)u^2/2+(\gamma-1)H\pm2uc=u^2+c^2\pm2uc=(u\pm c)^2$; and the third gives $\gamma uH-(\gamma-1)u^3/2\pm c(H+u^2)=u(H+c^2)\pm c(H+u^2)=(u\pm c)(H\pm uc)$. Each row therefore equals the matching component of $(u\pm c)r_\pm$, using $H=u^2/2+c^2/(\gamma-1)$. Since $c>0$, the eigenvalues are distinct and strictly ordered. [step 1.1, algebra]

2.2 For a state increment $(d\rho,dm,dE)$, differentiating the definitions gives $du=(dm-u\,d\rho)/\rho$ and $dp=(\gamma-1)(dE-u\,dm+u^2d\rho/2)$. Along $r_\pm$, these yield $du=\pm c/\rho$ and $dp=c^2$; hence $dc=\frac12c(dp/p-d\rho/\rho)=(\gamma-1)c/(2\rho)$. Along $r_0$ they give $du=dp=dc=0$. Therefore the stated directional derivatives of $u-c,u,u+c$ follow. [step 1.1, F1, F2, algebra]

3.1 Because $c,\rho,\gamma$ are positive, the acoustic directional derivatives are nonzero with the displayed signs, while the middle one is zero. This proves genuine nonlinearity of the two acoustic fields and linear degeneracy of the contact field. [step 2.2, F2, algebra] ∎
