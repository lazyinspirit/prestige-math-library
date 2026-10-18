---
id: lem-pe18-outgoing-spherical-mode-expansion
kind: lemma
title: Every outgoing spherical Helmholtz mode is an outgoing Hankel mode
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe18-exterior-helmholtz-problem, lem-pe18-spherical-harmonic-structure-and-density, lem-pe18-spherical-hankel-radial-identities, def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used. Each degree uses its finite-dimensional orthogonal projection, and no convergence of an exterior partial-wave series is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Chapter V, §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
      locator: "Chapter V §1.1, printed pp. 67–68 (PDF pp. 73–74), supplies the radial/Hankel foundations; §1.2 Theorem 1.1 and Remarks 1.1–1.2, printed pp. 69–70 (PDF pp. 75–76), give the outgoing mode argument and nonuniform-series caveat."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
---

## Statement

Let $u$ be a classical solution of $(\Delta+k^2)u=0$ for $r>a$, where $k>0$, and satisfy the outgoing condition in [[def-pe18-exterior-helmholtz-problem]]. For each $\ell$, its orthogonal projection $u_\ell(r,\cdot)$ onto $\mathcal H_\ell$ has the form $u_\ell(r,\cdot)=c_\ell h_\ell^{(1)}(kr)$ with a fixed vector $c_\ell\in\mathcal H_\ell$. Before imposing outgoingness, every degree-$\ell$ coefficient is a linear combination of $h_\ell^{(1)}(kr)$ and $h_\ell^{(2)}(kr)=\overline{h_\ell^{(1)}(kr)}$. This statement is modewise; it does not assert convergence of the partial-wave series as $r\to\infty$.

## Facts & Assumptions

**Given:** A classical outgoing solution on $r>a$ and the spherical harmonic projections.

[F1] [[def-pe18-exterior-helmholtz-problem]]: $(\Delta+k^2)u=0$ and $r(\partial_r-ik)u\to0$ uniformly on the sphere.

[F2] [[lem-pe18-spherical-harmonic-structure-and-density]]: $\mathcal H_\ell$ has eigenvalue $-\ell(\ell+1)$ for $\Delta_{\mathbb S^2}$, and its orthogonal projection is defined in finite dimension.

[F3] [[def-spherical-bessel-and-hankel-functions]] and [[lem-spherical-bessel-and-hankel-radial-solutions]]: $h_\ell^{(1)}$ solves the radial equation, has outgoing asymptotic $(-i)^{\ell+1}e^{iz}/z+O(z^{-2})$, and obeys $h_\ell'=h_{\ell-1}-(\ell+1)h_\ell/z$ for $\ell\ge1$. At degree zero its defining formula is $h_0^{(1)}(z)=-ie^{iz}/z$.

[F4] [[lem-pe18-spherical-hankel-radial-identities]]: $h_\ell^{(1)}$ and its conjugate $h_\ell^{(2)}$ have nonzero Wronskian for positive real argument.

## Proof

**Given:** $u$, $k$, and the facts [F1]–[F4].

1.1 Fix $\ell$ and any $v\in\mathcal H_\ell$. Define $w_v(r)=\langle u(r,\cdot),v\rangle_{L^2(\mathbb S^2)}$. Integrating the polar-coordinate Helmholtz equation against $v$, using $\Delta_{\mathbb S^2}v=-\ell(\ell+1)v$ and the angular integration-by-parts identity from [F2], gives $w_v''+2r^{-1}w_v'+(k^2-\ell(\ell+1)r^{-2})w_v=0$. Since this holds for every vector in the finite-dimensional space, the projected vector $u_\ell(r,\cdot)$ solves the same scalar radial equation componentwise. [F1, F2, algebra]

1.2 The two functions $h_\ell^{(1)}(kr)$ and $h_\ell^{(2)}(kr)$ solve this equation and have nonzero Wronskian by [F3]–[F4]; hence at any fixed $r_0>a$ their value-derivative vectors form an invertible $2\times2$ matrix. Solve this matrix equation to match a coefficient and its derivative at $r_0$. The difference then solves a first-order system $Y'=M(r)Y$ with continuous $M$ and zero initial data. On each compact interval where $\|M\|\le C$, integration gives $|Y(r)|\le C\int_{r_0}^r|Y(s)|ds$ (or the reversed integral for $r<r_0$); Grönwall's inequality gives $Y=0$. Extending across compact intervals proves every coefficient is a linear combination of the two modes. [F3, F4, algebra, construct]

2.1 Apply the uniform radiation condition [F1] to any $v\in\mathcal H_\ell$ and integrate it against $\bar v$; its coefficient tends to zero because its magnitude is bounded by the uniform supremum times $\|v\|_{L^1}$. At $\ell=0$, direct differentiation of $h_0^{(1)}(z)=-ie^{iz}/z$ gives $(h_0^{(1)})'=(i-z^{-1})h_0^{(1)}$, and conjugation gives the corresponding incoming formula. For $\ell\ge1$ use the derivative recurrence in [F3]. In both cases the asymptotic gives $r(\partial_r-ik)h_\ell^{(1)}(kr)\to0$. For the incoming conjugate, the same recurrence gives $r(\partial_r-ik)h_\ell^{(2)}(kr)=-2i\,\overline{(-i)^{\ell+1}}e^{-ikr}+o(1)$, whose magnitude tends to $2$. Thus its coefficient in the mode combination from step 1.2 must vanish. Since this holds for every $v$, the projected vector is $c_\ell h_\ell^{(1)}(kr)$ for a fixed $c_\ell\in\mathcal H_\ell$. The argument treats each degree separately and uses no interchange of the degree sum with the limit $r\to\infty$. [F1, F3, step 1.2, algebra] ∎
