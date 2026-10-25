---
id: def-linear-elasticity-near-incompressible-mixed-mini-pair
kind: definition
title: "Displacement-pressure formulation and mini-element pair"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-linear-elasticity-displacement-formulation-and-data, def-na-mini-element-p1-bubble-p1-spaces, lem-na-zero-mean-of-zero-boundary-divergence, def-countable-choice, lem-linear-elasticity-mixed-pressure-gauge-is-well-defined]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§5.1, printed p. 13: pressure reformulation of the nearly incompressible displacement equation and the limiting Stokes constraint."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §§8.2, 8.4.1–8.4.2, 8.6.1, 8.7.1, and 8.12.1, printed pp. 462–470, 487–492, and 519–520."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice, as in the imported model and mini-element spaces. Use the model, spaces, and sign convention of [[def-linear-elasticity-displacement-formulation-and-data]]. For finite $\lambda>0$, set $p=-\lambda\operatorname{div}u\in Q$ and write the mixed equations
$$
a_\mu(u,v)+b(v,p)=f(v),\qquad b(u,q)-\lambda^{-1}(p,q)_{L^2(D)}=0
$$
for all $v\in V$ and $q\in Q$. The pressure belongs to $Q$ by [[lem-linear-elasticity-mixed-pressure-gauge-is-well-defined]], which uses the zero-mean-divergence result. At the endpoint $\lambda=\infty$, define $\lambda^{-1}=0$ and impose $b(u,q)=0$; this is the incompressible constraint. At $\lambda=0$ use the primal displacement problem with $p=0$, not a mixed saddle system.

For a connected polygonal or polyhedral $D$ in dimension $d=2$ or $3$ with a conforming shape-regular affine simplicial mesh, the discrete pair $(V_h,Q_h)$ is exactly the P1-bubble/P1 mini-element pair of [[def-na-mini-element-p1-bubble-p1-spaces]]. The discrete mixed equations use the same $a_\mu,b,\lambda^{-1}$ and replace $V,Q$ by $V_h,Q_h$.
