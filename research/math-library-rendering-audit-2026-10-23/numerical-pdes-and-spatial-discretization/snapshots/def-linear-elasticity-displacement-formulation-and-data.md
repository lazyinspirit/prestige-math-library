---
id: def-linear-elasticity-displacement-formulation-and-data
kind: definition
title: "Linear isotropic elasticity: displacement form and data"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-countable-choice]
justified_by: [thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§§3.3–3.4 and 4.1, printed pp. 8–10: strain, Lamé stress, displacement form, and the Dirichlet Korn estimate."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §§8.1–8.2 and 8.12.1, printed pp. 460–463 and 519–520: nearly incompressible displacement form and its mixed counterpart."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $d\in\{2,3\}$ and let $D\subset\mathbb R^d$ be nonempty, open, bounded, connected, and Lipschitz. Use the real spaces $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$, norms $\|v\|_V=\|\nabla v\|_{L^2(D)}$ and $\|q\|_Q=\|q\|_{L^2(D)}$, and $b(v,q)=-\int_Dq\,\operatorname{div}v$ as in [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]. For a real normed space $X$, write $X'$ for its continuous real dual with operator norm $\|F\|_{X'}=\sup_{\|x\|_X\le1}|F(x)|$. Let $\mu\in L^\infty(D;\mathbb R)$ satisfy $0<\mu_0\le\mu(x)\le\mu_1<\infty$ almost everywhere, let $\lambda\ge0$ be a scalar, and let $f\in V'$. For any $w,z\in H^1(D;\mathbb R^d)$ define $\varepsilon(w)=(\nabla w+\nabla w^T)/2$ and
$$a_\mu(w,z)=2\int_D\mu\,\varepsilon(w):\varepsilon(z),\qquad \mathcal E_\lambda(w,z)=a_\mu(w,z)+\lambda\int_D\operatorname{div}w\,\operatorname{div}z,$$
and $\sigma_\lambda(w)=2\mu\varepsilon(w)+\lambda(\operatorname{div}w)I_d$. The homogeneous-Dirichlet model restricts these forms to $V$, with displacement zero on the full boundary; an example may prescribe a different boundary partition but gains no well-posedness claim from this definition. This is a linear small-strain model; no nonlinear, injectivity, or contrast-independent estimate is asserted.

Countable Choice is inherited through the imported Sobolev and Stokes-space conventions; this definition makes no arbitrary-index selection.
