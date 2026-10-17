---
id: def-certified-ivp-approximation-and-sensitivity-interface
kind: definition
title: "Certified differentiable IVP approximation interface for shooting"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-nonlinear-two-point-bvp-and-boundary-residual, def-c-one-map-and-local-inverse, def-total-derivative-in-euclidean-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
verification:
  precheck: n/a
---

## Definition

Fix an interval $[a,b]$ and an open set $U\subseteq\mathbb R^d$ on which each exact IVP flow $\phi(t;s)$ exists for all $t\in[a,b]$. A **certified differentiable IVP evaluator** on $U$ declares a $C^1$ approximate endpoint map (here $C^1$ means total differentiability with continuous derivative entries) $\widetilde\Phi:U\to\mathbb R^d$ and a stated number $\delta_{\rm IVP}\ge0$. A call at $s\in U$ either returns failure or supplies a continuous approximate trajectory $\widetilde\phi(\cdot;s)$, the endpoint $\widetilde\Phi(s)$ and the exact derivative $D\widetilde\Phi(s)$ for that numerical map, satisfying

$$\sup_{t\in[a,b]}\|\widetilde\phi(t;s)-\phi(t;s)\|_2\le\delta_{\rm IVP},\qquad \widetilde\Phi(s)=\widetilde\phi(b;s).$$

The same $\delta_{\rm IVP}$ bounds every successful call, uniformly in its initial state; no approximate trajectory or error bound is required at a failed call. The declared endpoint map remains $C^1$ on $U$ even when some calls fail. The returned derivative is not asserted to equal the derivative of the exact flow. This is an interface contract for a supplied method; it does not assert that any particular integrator satisfies the contract.
