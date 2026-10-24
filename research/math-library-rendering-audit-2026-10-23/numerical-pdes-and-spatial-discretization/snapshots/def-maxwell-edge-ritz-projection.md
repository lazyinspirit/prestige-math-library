---
id: def-maxwell-edge-ritz-projection
kind: definition
title: Maxwell curl-energy Ritz projection
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-maxwell-edge-fem-semidiscretization
  - def-countable-choice
justified_by: [lem-maxwell-edge-ritz-projection-well-defined]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, printed pp. 6–8: curl-energy Maxwell variational forms and conforming edge-element spaces. The time-dependent Ritz projection below is defined locally."
    - title: Peter Monk, Mathematical and Numerical Analysis of Maxwell’s Equations, complete lecture notes
      url: https://oa.tib.eu/renate/bitstreams/ef856c7a-d649-4489-ba64-40c925d44bf6/download
      locator: "Chapter 11, ‘Finite Element Methods for Maxwell’s Equations’, printed pp. 151–168: Maxwell energy norms, conforming edge spaces, and error estimates."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice in the inherited edge/face finite-element space branch. Let $V=H_0(\operatorname{curl};\Omega)$ with the PEC convention in [[def-maxwell-edge-fem-semidiscretization]], and let $V_h=N_h^1\cap H_0(\operatorname{curl};\Omega)$. Define
$$m(u,v)=\int_\Omega v^T\epsilon u\,dx,\qquad a(u,v)=\int_\Omega (\operatorname{curl}v)^T\mu^{-1}\operatorname{curl}u\,dx,\qquad a_+(u,v)=m(u,v)+a(u,v).$$
For $u\in V$, the **Maxwell curl-energy Ritz projection** $R_hu\in V_h$ is the solution of
$$a_+(R_hu,v_h)=a_+(u,v_h)\qquad(v_h\in V_h).$$
Its finite-dimensional well-definedness, orthogonality, and best-approximation property are supplied by [[lem-maxwell-edge-ritz-projection-well-defined]].
