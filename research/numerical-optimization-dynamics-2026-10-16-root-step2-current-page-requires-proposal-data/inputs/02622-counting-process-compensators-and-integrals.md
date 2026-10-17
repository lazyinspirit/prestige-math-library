---
page: counting-process-compensators-and-integrals
title: "Counting-process compensators, integrals, brackets"
status: published
items:
  - lem-continuous-finite-variation-martingale-is-zero
  - lem-bounded-stopping-preserves-cadlag-square-integrable-martingales
  - def-counting-process-intensity-and-compensator-contract
  - def-optional-and-predictable-brackets-for-counting-processes
  - def-elementary-predictable-counting-process-integral
  - lem-predictable-step-processes-dense-in-compensator-l2
  - def-l2-counting-process-integral
  - lem-continuous-predictable-bracket-uniqueness
  - lem-elementary-counting-integral-preserves-martingales
  - lem-finite-variation-integration-by-parts-for-counting-process-martingales
  - thm-compensated-counting-process-brackets
  - thm-cross-brackets-vanish-under-no-simultaneous-jumps
  - lem-elementary-counting-process-integral-isometry
  - thm-l2-counting-process-integral-isometry
examples: []
---

On a finite horizon, the page defines a simple unit-jump counting process,
predictable at-risk and intensity processes, and a continuous compensator
$A_t=\int_0^tY_s\lambda_s\,ds$. The contract explicitly assumes
$M=N-A$ is a square-integrable martingale; an intensity formula alone is not
a compensator-existence theorem. The Axiom of Choice is inherited where
conditional expectation is used.

The local bracket argument proves $[M]=N$, $\langle M\rangle=A$, and
$M^2-A$ is a martingale. Bounded predictable step integrals are proved to be
square-integrable martingales with the compensator isometry. Completion extends
the integral only to predictable $H$ with $\mathbb E\int_0^TH^2\,dA<\infty$.
For finitely many processes on a common filtration, no simultaneous jumps
imply zero optional and predictable cross brackets; independence is not
assumed. No general jump-semimartingale integral, local-martingale extension,
unbounded-energy claim, or process-level limit is included.
