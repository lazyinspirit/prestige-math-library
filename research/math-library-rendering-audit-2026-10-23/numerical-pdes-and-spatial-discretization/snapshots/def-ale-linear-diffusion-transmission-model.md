---
id: def-ale-linear-diffusion-transmission-model
kind: definition
title: "Finite-dimensional backward-Euler diffusion transmission model"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Emil Engström and Eskil Hansen, Time-dependent Steklov–Poincaré operators and space-time Robin–Robin decomposition for the heat equation (2022)"
      url: "https://arxiv.org/pdf/2210.13868"
      locator: "§§1, 4–6: two-domain heat transmission, common trace, outward flux convention, and Robin–Robin iteration; the current item is a finite-dimensional backward-Euler model."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, §§5.2–5.4: finite-dimensional subsystem partitioning, interface data, and mass-dependent iteration behavior."
---

## Definition

Let $I_1,I_2$ and the common trace space $\Lambda$ be finite-dimensional real inner-product spaces, with $\dim\Lambda\ge1$, and set $X_i:=I_i\oplus\Lambda$. The trace map is $\gamma_i(x_i,\lambda_i)=\lambda_i$. Let $M_i$ and $A_i$ be self-adjoint positive-definite operators on $X_i$, let $\Delta t>0$, and define the local backward-Euler block $B_i:=\Delta t^{-1}M_i+A_i$. In coordinates $I_i\oplus\Lambda$, write

$$B_i=\begin{pmatrix}B_{i,00}&B_{i,0\Gamma}\\B_{i,\Gamma0}&B_{i,\Gamma\Gamma}\end{pmatrix},\qquad g_i=(g_{i,0},g_{i,\Gamma}).$$

For a prescribed local trace $\lambda_i$, solve the interior equation $B_{i,00}x_i+B_{i,0\Gamma}\lambda_i=g_{i,0}$ and define the outward algebraic interface flux $q_i:=B_{i,\Gamma0}x_i+B_{i,\Gamma\Gamma}\lambda_i-g_{i,\Gamma}$. Eliminating $x_i$ gives $q_i=S_i\lambda_i-f_i$, where $S_i:=B_{i,\Gamma\Gamma}-B_{i,\Gamma0}B_{i,00}^{-1}B_{i,0\Gamma}$ and $f_i:=g_{i,\Gamma}-B_{i,\Gamma0}B_{i,00}^{-1}g_{i,0}$. The sign convention is outward flux on each subdomain.

The monolithic interface equations are trace continuity $\lambda_1=\lambda_2=\lambda$ and flux balance $q_1+q_2=0$, equivalently $(S_1+S_2)\lambda=f_1+f_2$. These finite-dimensional matrices represent a linear diffusion-transmission step; no nonlinear fluid-structure well-posedness is asserted.
