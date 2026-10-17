---
id: def-infinite-fixed-pivot-sectional-dynamics
kind: definition
title: Unbounded-grid fixed-pivot coagulation-fragmentation dynamics
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-conservative-fixed-pivot-redistribution
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Definition

Adopt all kernel and daughter-measure hypotheses of [[def-continuous-size-coagulation-fragmentation-weak-model]]: in particular, $K$ is symmetric, nonnegative, bounded and Lipschitz, $\beta$ is nonnegative, bounded and Lipschitz, and $B_x$ is a nonnegative Borel kernel with $B_x(E)\le D$, support in $[a,x]$, $\int_E zB_x(dz)=x$, and the stated bounded-Lipschitz dependence and convention below $2a$. Let $G=\{x_i:i\ge0\}$ be a strictly increasing grid with $x_0=a$, $x_i\to\infty$, and $x_{i+1}-x_i\le\Delta\le1$. Use the no-cutoff pivot rule $P_\Delta$ from [[def-conservative-fixed-pivot-redistribution]] on every cell of this semi-infinite grid. For every signed measure $\mu\in\mathcal M_w(E)$, write $P_\Delta\mu=\int P_\Delta(x)\,\mu(dx)$ for the linear projection of a measure on $E=[a,\infty)$ onto $G$.

For a signed grid measure $\nu\in\mathcal M_w(E)$, define
$$F_\Delta(\nu)=\frac12\iint K(x,y)\bigl(P_\Delta(x+y)-\delta_x-\delta_y\bigr)\,\nu(dx)\nu(dy)+\int\beta(x)\left(\int P_\Delta(z)B_x(dz)-\delta_x\right)\nu(dx).$$
All products are projected, with no overflow; positive states are the population dynamics. The finite-cutoff algorithm instead sends products above its last pivot to the reported reservoir. By the barycentric identities, each projection has total number one, reproduces its first moment, and adds at most $\Delta^2/4$ to the second moment of each projected size.
