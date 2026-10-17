---
id: alg-finite-sectional-coagulation-fragmentation-balance
kind: algorithm
title: Finite sectional coagulation-fragmentation balance with reported overflow
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-discrete-coagulation-fragmentation-system
  - def-conservative-fixed-pivot-redistribution
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Definition

Input a grid $a=x_0<\cdots<x_M=R$, a nonnegative grid population $n_i$, a nonnegative reservoir mass $L$, symmetric nonnegative aggregation rates $K_{ij}$, nonnegative parent fragmentation rates $\beta_i$, and daughter-count measures $B_{x_i}$ supported in $[a,x_i]$ with $\int zB_{x_i}(dz)=x_i$. For each ordered pair $(i,j)$ use event rate $K_{ij}n_in_j/2$. If $x_i+x_j\le R$, remove one particle from each parent slot and add the fixed-pivot measure $P_\Delta(x_i+x_j)$; if $x_i+x_j>R$, remove both parents and add mass $x_i+x_j$ to $L$, with no retained last-bin particle. For each parent $i$, use fragmentation rate $\beta_i n_i$, remove its parent particle, and add $\int P_\Delta(z)B_{x_i}(dz)$ to the grid population.

The resulting finite-dimensional autonomous ODE is the sum of these event rates times their stated increments, with $\dot L$ equal to the total overflow-mass rate. Invalid grids, negative input populations, or a daughter measure with support outside $[a,x_i]$ return invalid-input. The reservoir is diagnostic truncation mass and has no later fragmentation or coagulation law.
