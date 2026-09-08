---
id: ex-divergence-theorem-on-a-ball-in-rn
kind: example
title: Flux and scaling on balls
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §§1.10.2–1.11, sphere element and Proposition 1.45, printed pp. 16–17, and §1.12 Theorem 1.46, printed p. 17 (PDF pp. 22–23). These radial-field instances are evaluated directly.
status: published
origin: pipeline
proof_strategy: direct
deps: ["thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure"]
---

## Example

Assume $\mathrm{AC}_\omega$, $n\ge2$, and $R>0$. On $B_R(a)$, $F(x)=x-a$ gives $|\partial B_R(a)|=n|B_R(a)|/R=R^{n-1}|S^{n-1}|$. Constant vector fields have zero total flux. If $f\in C^1((0,R])$ and $F(x)=f(|x-a|)(x-a)$ admits a C1 extension to the closed ball, its flux is $f(R)R|\partial B_R(a)|$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$, $R>0$ and a centre a. Use the specified radial and constant fields; the general radial field is assumed to extend C1 through the centre.

[F1] The divergence theorem applies to a ball and a C1 field. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] Sphere area scales by R to the power n minus one. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

## Verification

1.1 The sphere is a C1 boundary: near any point one nonzero component of $x-a$ lets its equation be solved as a smooth square-root graph, with the ball on the inner side. Its outward normal is $\nu=(x-a)/R$. For $F=x-a$, each $\partial_iF_i=1$, so $\operatorname{div}F=n$, and on the boundary $F\cdot\nu=R$. F1 yields $n|B_R(a)|=R|\partial B_R(a)|$; dividing by R and using F2 gives both stated area formulas. The ball has positive volume since it contains a cube of positive side length. In dimension three a spherical chart $X(\theta,\phi)=(\cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi)$, $0<\theta<2\pi$, $0<\phi<\pi$, has tangent squared lengths $\sin^2\phi$ and 1 and zero cross inner product, hence density $\sin\phi$. Rotated charts cover its omitted meridian and poles. [given, F1, F2, algebra]

2.1 For a constant vector b all partial derivatives vanish. Applying F1 gives $\int_{\partial B_R(a)}b\cdot\nu\,dS=\int_{B_R(a)}0\,dx=0$. For the radial field and $r=|x-a|>0$, $\partial_iF_i=f(r)+f^{\prime}(r)(x_i-a_i)^2/r$. Summing gives $\operatorname{div}F=n f(r)+r f^{\prime}(r)$. The stipulated C1 extension supplies the value at the centre and the hypotheses of F1; no assertion about a singular f at zero is needed. On the sphere the flux density is the constant $f(R)R$, proving the claimed flux. [step 1.1, F1, algebra]

3.1 For the explicit polynomial field $F=|x-a|^2(x-a)$ the extension is automatic. Its divergence is $(n+2)|x-a|^2$ also at the centre by direct differentiation. Thus its flux is $R^3|\partial B_R(a)|$, and F1 gives $\int_{B_R(a)}|x-a|^2dx=R^3|\partial B_R(a)|/(n+2)$. In particular at R=1, a=0 this moment is $n|B_1|/(n+2)$ by F2. [step 2.1, F1, F2, algebra] ∎

## Source notes

Hunter §§1.10.2–1.11, sphere element and Proposition 1.45, printed pp. 16–17, and §1.12 Theorem 1.46, printed p. 17 (PDF pp. 22–23). These radial-field instances are evaluated directly.
