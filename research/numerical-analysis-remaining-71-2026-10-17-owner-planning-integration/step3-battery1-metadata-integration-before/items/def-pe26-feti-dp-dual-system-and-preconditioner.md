---
id: def-pe26-feti-dp-dual-system-and-preconditioner
kind: definition
title: FETI-DP dual system and preconditioner
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe26-primal-interface-spaces-and-jumps, def-pe26-discrete-harmonic-extension-and-schur-complement, thm-pe26-primal-constraints-remove-floating-kernels, def-pe26-scaled-averaging-and-bddc-preconditioner]
justified_by: []
aliases: []
axiom_use: "None; the multiplier quotient and right inverse are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, §§83–90"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §§3.1 and 3.3"
      url: "https://arxiv.org/pdf/0708.4031"
verification:
  precheck: n/a
---

## Definition

Use $\widetilde W$, $\widehat W$, $E_0$, $R$, $B$ and $\Lambda=\operatorname{range}B$ as defined in [[def-pe26-primal-interface-spaces-and-jumps]] and [[def-pe26-scaled-averaging-and-bddc-preconditioner]]. Regard $\bar E=R E_0$ as a projection on $\widetilde W$. Since $\ker B=\operatorname{range}\bar E=\widehat W$, each class of traces with the same jump has a unique representative in $\ker\bar E$. Define $B_D^T:\Lambda\to\widetilde W$ by assigning to $\lambda\in\Lambda$ that unique representative $w$ with $Bw=\lambda$ and $\bar Ew=0$. This is the scaled right inverse; it obeys $BB_D^T=I_\Lambda$ and $B_D^TB=I_{\widetilde W}-\bar E$. The latter identity makes the primal and dual projections complementary. In the two-subdomain edge case, its two entries are the coefficient-scaled jump weights complementary to those in $E_0$.

The **FETI-DP dual operator** and its preconditioner are

$$F:=B\widetilde S^{-1}B^T:\Lambda\to\Lambda',\qquad M_{\rm FETI-DP}^{-1}:=B_D\widetilde S B_D^T:\Lambda'\to\Lambda.$$

The multiplier convention removes dependent row coordinates: $\lambda$ is in $\operatorname{range}B$, so no arbitrary multiplier component in $\ker B^T$ is retained. Elimination of the partially assembled displacement and the resulting exact dual system are proved in [[prop-pe26-feti-dp-is-dual-schur-complement]].
