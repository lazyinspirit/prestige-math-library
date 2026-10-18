---
id: thm-pe18-rellich-uniqueness-for-a-spherical-obstacle
kind: theorem
title: Rellich uniqueness for the sound-soft spherical obstacle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe18-exterior-helmholtz-problem, lem-pe18-spherical-harmonic-structure-and-density, lem-pe18-spherical-hankel-radial-identities, lem-pe18-outgoing-spherical-mode-expansion]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the flux identity and the canonical degree projections are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Appendix 1, §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
---

## Statement

For $a>0$, $k>0$, and the convention in [[def-pe18-exterior-helmholtz-problem]], every classical outgoing solution of $(\Delta+k^2)u=0$ on $r>a$ with zero Dirichlet trace at $r=a$ is identically zero.

## Facts & Assumptions

**Given:** A classical outgoing $u$ with $u(a,\omega)=0$.

[F1] [[def-pe18-exterior-helmholtz-problem]]: $u$ solves the homogeneous Helmholtz equation, has zero inner trace, and satisfies $r(\partial_r-ik)u\to0$ uniformly.

[F2] [[lem-pe18-spherical-harmonic-structure-and-density]]: the degree spaces are orthogonal, their algebraic sum is uniformly dense in continuous sphere data, ordered projections of continuous data converge in $L^2$, and the angular Laplacian is self-adjoint on smooth functions.

[F3] [[lem-pe18-spherical-hankel-radial-identities]]: every outgoing radial mode has flux $r^2\operatorname{Im}(\bar h_\ell(kr)\partial_rh_\ell(kr))=1/k$.

[F4] [[lem-pe18-outgoing-spherical-mode-expansion]]: the degree-$\ell$ projection of $u$ is $c_\ell h_\ell^{(1)}(kr)$ with $c_\ell$ independent of $r$.

## Proof

**Given:** The solution and supplier facts [F1]–[F4].

1.1 Define $J(r)=r^2\operatorname{Im}\int_{\mathbb S^2}\bar u(r,\omega)\partial_ru(r,\omega)\,dS$. Differentiating and using $u_{rr}=-2r^{-1}u_r-r^{-2}\Delta_{\mathbb S^2}u-k^2u$ gives $J'(r)=2r\operatorname{Im}\int\bar u u_r+r^2\operatorname{Im}\int(|u_r|^2-2r^{-1}\bar u u_r-r^{-2}\bar u\Delta_{\mathbb S^2}u-k^2|u|^2)=0$: the first two imaginary terms cancel, the squared terms are real, and $\int\bar u\Delta_{\mathbb S^2}u=-\int|\nabla_{\mathbb S^2}u|^2$ is real by the sphere integration by parts proved in [F2]. Continuity to $r=a$ and the zero trace give $J(a)=0$, hence $J(r)=0$ for every $r>a$. [F1, F2, algebra]

2.1 At a fixed $r>a$, set $u_{\le N}=\sum_{\ell=0}^Nu_\ell$ and $(u_r)_{\le N}=\sum_{\ell=0}^N\partial_ru_\ell$. By [F2], these orthogonal partial sums converge in $L^2$ to $u$ and $u_r$, so Cauchy–Schwarz gives $\langle (u_r)_{\le N},u_{\le N}\rangle\to\langle u_r,u\rangle$. Orthogonality makes the finite inner product equal $\sum_{\ell=0}^N\langle\partial_ru_\ell,u_\ell\rangle$; hence $J(r)=r^2\sum_{\ell\ge0}\operatorname{Im}\langle\partial_ru_\ell,u_\ell\rangle$. For each degree, [F3]–[F4] give $r^2\operatorname{Im}\langle\partial_ru_\ell,u_\ell\rangle=\|c_\ell\|_2^2/k$. The resulting series has nonnegative terms, and step 1.1 says its sum is zero. Therefore $c_\ell=0$ for every degree. [F2, F3, F4, step 1.1, algebra]

3.1 Thus every harmonic projection of $u(r,\cdot)$ vanishes. By the uniform density in [F2], choose for each $\varepsilon>0$ a finite sum $p$ of harmonic modes with $\|u(r,\cdot)-p\|_\infty<\varepsilon$. Orthogonality gives $\langle u,p\rangle=0$, so $\|u(r,\cdot)\|_2^2=|\langle u,u-p\rangle|\le\|u(r,\cdot)\|_2\|u(r,\cdot)-p\|_2\le\sqrt{4\pi}\varepsilon\|u(r,\cdot)\|_2$. Letting $\varepsilon\downarrow0$ gives $u(r,\cdot)=0$ in $L^2$, and continuity makes it zero pointwise. Since $r>a$ was arbitrary, $u\equiv0$. [F2, step 2.1, choose, algebra] ∎
