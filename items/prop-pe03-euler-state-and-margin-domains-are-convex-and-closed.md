---
id: prop-pe03-euler-state-and-margin-domains-are-convex-and-closed
kind: proposition
title: Euler positive states are convex and positive-margin sets are closed convex
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-ideal-gas-euler-state-and-pressure, def-pe03-euler-positive-margin-domain]
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, ideal-gas Euler variables and positive-density/pressure state domain, complete chapter inspected"
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, Euler admissible set and convex-combination argument, PDF pp. 5–9; complete 34-page article read"
---

## Statement

Fix $\gamma>1$ and $\varepsilon>0$. The ideal-gas admissible set
$$\mathcal G_\gamma=\left\{(\rho,m,E):\rho>0,\ E-\frac{m^2}{2\rho}>0\right\}$$
and the positive-margin set $K_{\gamma,\varepsilon}$ from
[[def-pe03-euler-positive-margin-domain]] are convex, and
$K_{\gamma,\varepsilon}$ is closed in $\mathbb R^3$.

## Facts & Assumptions

**Given:** $\gamma>1$, $\varepsilon>0$, and the two state sets just defined. Prove their convexity and the closedness of the margin set.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $\mathcal G_\gamma$ is given by $\rho>0$ and $E-m^2/(2\rho)>0$.

[F2] [[def-pe03-euler-positive-margin-domain]]: $K_{\gamma,\varepsilon}$ is given by $\rho\ge\varepsilon$ and $E-m^2/(2\rho)\ge\varepsilon$.

## Proof

1.1 Let $U_k=(\rho_k,m_k,E_k)\in\mathcal G_\gamma$ for $k=1,2$ and $0\le\theta\le1$. Put $\rho_\theta=\theta\rho_1+(1-\theta)\rho_2$ and similarly define $m_\theta,E_\theta$. Weighted Cauchy–Schwarz applied to $m_\theta=\sqrt{\theta\rho_1}(\sqrt\theta m_1/\sqrt{\rho_1})+\sqrt{(1-\theta)\rho_2}(\sqrt{1-\theta}m_2/\sqrt{\rho_2})$ gives $m_\theta^2\le\rho_\theta\bigl(\theta m_1^2/\rho_1+(1-\theta)m_2^2/\rho_2\bigr)$. Thus $\rho_\theta>0$ and $E_\theta-m_\theta^2/(2\rho_\theta)\ge\theta(E_1-m_1^2/(2\rho_1))+(1-\theta)(E_2-m_2^2/(2\rho_2))>0$. Therefore $\mathcal G_\gamma$ is convex. [given, F1, algebra]

2.1 For $U_1,U_2\in K_{\gamma,\varepsilon}$, the weighted Cauchy–Schwarz inequality in step 1.1 gives $\rho_\theta\ge\varepsilon$ and $E_\theta-m_\theta^2/(2\rho_\theta)\ge\theta\varepsilon+(1-\theta)\varepsilon=\varepsilon$. Hence $K_{\gamma,\varepsilon}$ is convex. [given, F2, step 1.1, algebra]

3.1 If $U_n=(\rho_n,m_n,E_n)\in K_{\gamma,\varepsilon}$ converges to $U=(\rho,m,E)$, then $\rho\ge\varepsilon>0$ and continuity of $(\rho,m,E)\mapsto E-m^2/(2\rho)$ on $\rho\ge\varepsilon$ gives $E-m^2/(2\rho)\ge\varepsilon$. Thus $U\in K_{\gamma,\varepsilon}$, proving closedness. [given, F2, algebra] ∎

