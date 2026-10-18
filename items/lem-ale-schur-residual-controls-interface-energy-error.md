---
id: lem-ale-schur-residual-controls-interface-energy-error
kind: lemma
title: "Schur residual controls trace and reconstruction energy error"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ale-linear-diffusion-transmission-model
  - lem-ale-schur-complement-positive-and-minimizes-energy
justified_by: []
aliases: []
forward_refs: []
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
    - title: "Emil Engström and Eskil Hansen, Time-dependent Steklov–Poincaré operators and space-time Robin–Robin decomposition for the heat equation (2022)"
      url: "https://arxiv.org/pdf/2210.13868"
      locator: "§5, equivalence between interface residuals and subdomain energy; the finite-dimensional residual bound is proved locally."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, condensed interface systems and subsystem reconstruction."
---

## Statement

Let $S:=S_1+S_2$, let $\lambda_*$ solve $S\lambda_*=f_1+f_2$, and let $\widetilde\lambda\in\Lambda$ have residual $\rho:=S\widetilde\lambda-(f_1+f_2)$. All trace-vector and operator norms below are induced by the given real inner product on $\Lambda$. Then

$$\|\widetilde\lambda-\lambda_*\|\le\|S^{-1}\|\,\|\rho\|.$$

If each subdomain state is reconstructed by solving its interior equations at the supplied trace, define the product backward-Euler energy norm by $\|(z_1,z_2)\|_{B_1\oplus B_2}^2:=\langle B_1z_1,z_1\rangle+\langle B_2z_2,z_2\rangle$ for $z_i\in X_i$. Then

$$\|\widetilde u-u_*\|_{B_1\oplus B_2}\le\sqrt{\|S^{-1}\|}\,\|\rho\|.$$

## Facts & Assumptions

**Given:** The positive-definite subdomain blocks and Schur complements of [[def-ale-linear-diffusion-transmission-model]], their energy-minimization property, and the unique monolithic trace $\lambda_*$.

[F1] [[def-ale-linear-diffusion-transmission-model]]: $S_i$ is the Schur complement of the positive-definite local block $B_i$, and the monolithic trace solves $(S_1+S_2)\lambda_*=f_1+f_2$.

[F2] [[lem-ale-schur-complement-positive-and-minimizes-energy]]: for a fixed trace error $z$, its minimum local $B_i$ energy is $\langle S_i z,z\rangle$.

## Proof

1.1 Set $e:=\widetilde\lambda-\lambda_*$. By [F1], $\rho=Se$. Since $S$ is positive definite, $e=S^{-1}\rho$; the operator-norm inequality gives $\|e\|\le\|S^{-1}\|\,\|\rho\|$. [given, F1, algebra]

2.1 The reconstructed state difference on subdomain $i$ has trace $e$. By [F2], its squared minimum $B_i$ energy is $\langle S_ie,e\rangle$. Adding the two subdomains gives $\|\widetilde u-u_*\|_{B_1\oplus B_2}^2=\langle Se,e\rangle=\langle \rho,S^{-1}\rho\rangle$. [F1, F2, step 1.1, algebra]

3.1 Cauchy–Schwarz and the operator norm yield $\langle \rho,S^{-1}\rho\rangle\le\|S^{-1}\|\,\|\rho\|^2$. Take nonnegative square roots to obtain the stated energy bound. [step 2.1, algebra] ∎
