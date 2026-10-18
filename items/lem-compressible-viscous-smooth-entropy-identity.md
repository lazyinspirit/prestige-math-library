---
id: lem-compressible-viscous-smooth-entropy-identity
kind: lemma
title: Smooth ideal-gas Navier–Stokes–Fourier entropy identity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-ideal-gas-entropy-pair-and-variables
  - lem-compressible-viscous-flux-entropy-variable-factorization
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3 and 4.4–4.5, equations (3)–(12), (39)–(43), PDF pp. 3–4 and 11–12. The smooth identity is proved locally."
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418: ideal-gas mathematical entropy and entropy variables; the viscous production is derived locally here."
---

## Statement

Let $U$ be a smooth solution with values in $\mathcal G$ of the unforced balance law in [[def-compressible-navier-stokes-fourier-model]]. Then

$$\partial_t\eta(U)+\sum_{j=1}^d\partial_j\left(\eta(U)u_j+\kappa\frac{\partial_jT}{T}\right) =-\sum_{j,k=1}^d(\partial_jv)^TK_{jk}(U)(\partial_kv) =-\left(\frac{\tau:\nabla u}{T}+\frac{\kappa|\nabla T|^2}{T^2}\right)\le0.$$

This is a local smooth identity; it makes no boundary discretization claim.

## Facts & Assumptions

**Given:** A smooth positive state field $U(t,x)\in\mathcal G$ satisfying the conservative equation, with $\eta$, $v$, $T$, $q_j=\eta u_j$, and $F_j^{\mathrm{visc}}$ as defined by the preceding items.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $\partial_tU+\sum_j\partial_jF_j=\sum_j\partial_jF_j^{\mathrm{visc}}$ and $F_j^{\mathrm{visc}}=(0,\tau_{j\cdot},u\cdot\tau_{j\cdot}+\kappa\partial_jT)$.

[F2] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $\partial_t\eta+\sum_j\partial_jq_j=v^T(\partial_tU+\sum_j\partial_jF_j)$ for smooth fields.

[F3] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: $F_j^{\mathrm{visc}}=\sum_kK_{jk}\partial_kv$ and the corresponding quadratic sum is $\tau:\nabla u/T+\kappa|\nabla T|^2/T^2\ge0$.

## Proof


1.1 By [F2] and the balance law [F1], $\partial_t\eta+\sum_j\partial_jq_j=v^T\sum_j\partial_jF_j^{\mathrm{visc}}=\sum_j\partial_j(v^TF_j^{\mathrm{visc}})-\sum_j(\partial_jv)^TF_j^{\mathrm{visc}}$. The second equality is the product rule applied componentwise to each finite-dimensional flux vector. [F1, F2, given, algebra]

2.1 From the explicit entropy variables in [F2] and viscous flux in [F1], the momentum and stress-work terms cancel pointwise: $v^TF_j^{\mathrm{visc}}=(T^{-1}u)\cdot\tau_{j\cdot}-T^{-1}(u\cdot\tau_{j\cdot}+\kappa\partial_jT)=-\kappa\frac{\partial_jT}{T}$. Substitution into step 1.1 and the factorization identity [F3] gives the displayed local balance and its nonpositive right-hand side. [F1, F2, F3, step 1.1, algebra] ∎
