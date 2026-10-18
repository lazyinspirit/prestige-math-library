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
axiom_use: "No choice axiom is used; the outgoing modal expansion and canonical degree projections are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

1.1 By [F4], for every degree $\ell$ the projection of $u$ has the form $u_\ell(r,\cdot)=c_\ell h_\ell^{(1)}(kr)$ with $c_\ell$ independent of $r$. Taking the degree-$\ell$ projection of the zero trace at $r=a$ gives $0=c_\ell h_\ell^{(1)}(ka)$. The nonvanishing in [F3] implies $c_\ell=0$ for every $\ell$. [F1, F3, F4, algebra]

2.1 Thus every harmonic projection of $u(r,\cdot)$ vanishes for each $r>a$. By the uniform density in [F2], choose for each $\varepsilon>0$ a finite sum $p$ of harmonic modes with $\|u(r,\cdot)-p\|_\infty<\varepsilon$. Orthogonality gives $\langle u,p\rangle=0$, so $\|u(r,\cdot)\|_2^2=|\langle u,u-p\rangle|\le\|u(r,\cdot)\|_2\|u(r,\cdot)-p\|_2\le\sqrt{4\pi}\varepsilon\|u(r,\cdot)\|_2$. Letting $\varepsilon\downarrow0$ gives $u(r,\cdot)=0$ in $L^2$, and continuity makes it zero pointwise. Since $r>a$ was arbitrary, $u\equiv0$. [F2, step 1.1, choose, algebra] ∎
