---
id: lem-compressible-admissible-state-set-open-convex
kind: lemma
title: The ideal-gas admissible state set is open and convex
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [def-compressible-navier-stokes-fourier-model]
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
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418: ideal-gas states with positive density and internal energy."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Section 2.1, PDF p. 2: physical states."
---

## Statement

The set $\mathcal G$ in [[def-compressible-navier-stokes-fourier-model]] is open and convex in $\mathbb R^{d+2}$. In particular, the arithmetic mean of any two admissible conservative states is admissible.

## Facts & Assumptions

**Given:** An integer $d\ge1$ and the admissible set $\mathcal G$ defined by $\rho>0$ and $E>|m|^2/(2\rho)$.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $\mathcal G=\{(\rho,m,E):\rho>0,\ E>|m|^2/(2\rho)\}$.

## Proof


1.1 On the convex half-space $\rho>0$, set $g(\rho,m)=|m|^2/(2\rho)$. For any direction $(a,b)\in\mathbb R\times\mathbb R^d$, differentiating twice along $(\rho+ta,m+tb)$ gives $\frac{d^2}{dt^2}g(\rho+ta,m+tb)|_{t=0}=|b-(m/\rho)a|^2/\rho\ge0$. Thus $g$ is convex on that half-space. [F1, algebra]

2.1 Let $U_0=(\rho_0,m_0,E_0)$ and $U_1=(\rho_1,m_1,E_1)$ lie in $\mathcal G$, and let $0\le t\le1$. Then $\rho_t=(1-t)\rho_0+t\rho_1>0$ and convexity from step 1.1 gives $g(\rho_t,m_t)\le(1-t)g(\rho_0,m_0)+tg(\rho_1,m_1)$. The strict endpoint inequalities $E_i>g(\rho_i,m_i)$ imply $E_t>g(\rho_t,m_t)$, so $U_t\in\mathcal G$. [F1, step 1.1, algebra]

3.1 The function $g$ is continuous where $\rho>0$, so the strict inequalities $\rho>0$ and $E-g(\rho,m)>0$ define an open set there. Step 2.1 proves convexity, and choosing $t=1/2$ proves the arithmetic-mean assertion. [F1, step 2.1, algebra] ∎
