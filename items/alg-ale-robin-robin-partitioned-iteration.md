---
id: alg-ale-robin-robin-partitioned-iteration
kind: algorithm
title: "Finite-budget Robin-Robin transmission iteration"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ale-linear-diffusion-transmission-model
  - lem-ale-schur-complement-positive-and-minimizes-energy
justified_by: [thm-ale-robin-robin-iteration-contracts-and-certifies-stop]
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
      locator: "§§1, 5–6, Robin–Robin interface iteration and convergence; the finite-dimensional algorithm is specified here."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, sequential subsystem solve, interface iteration, and finite iteration stopping."
---

## Definition

**Inputs:** Positive-definite real Schur operators $S_1,S_2$ on the nonzero finite-dimensional trace space $\Lambda$, loads $f_1,f_2\in\Lambda$, a parameter $\alpha>0$, initial incoming datum $r_1^0\in\Lambda$, tolerance $\varepsilon>0$, and integer pass budget $M\ge1$.

All vector norms on $\Lambda$ and operator norms on its endomorphisms are induced by its specified real inner product. Set $R_i:=(\alpha I-S_i)(\alpha I+S_i)^{-1}$, $q_i:=\|R_i\|$, and $q:=q_1q_2$. For each pass $m=0,\ldots,M-1$, perform in order

$$ (S_1+\alpha I)\lambda_1^{m+1}=r_1^m+f_1,\quad r_2^{m+1}=(\alpha I-S_1)\lambda_1^{m+1}+f_1;\quad (S_2+\alpha I)\lambda_2^{m+1}=r_2^{m+1}+f_2,\quad r_1^{m+1}=(\alpha I-S_2)\lambda_2^{m+1}+f_2. $$

If $\|r_1^{m+1}-r_1^m\|\le (1-q)\varepsilon/\|(\alpha I+S_1)^{-1}\|$, return `converged` with trace $\lambda_1^{m+1}$ and pass count $m+1$. If all $M$ passes are used without this test succeeding, return `budget_exhausted` with the last trace $\lambda_1^M$ and pass count $M$. This procedure states the finite stop predicate but makes no claim about its error certificate.
