---
id: post-td-canonical-sampling
kind: postulate
domain: physics
title: Canonical sampling assumption for finite and normalized statistical models
status: draft
origin: pipeline
library: physics
dependency_level: 4
deps: [def-td-finite-microstate-model, def-td-si-quantities, def-tdmath-countable-canonical-model, def-tdmath-measure-integral]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-countable-canonical-model: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Adopted canonical preparation assumptions for finite microstate models and explicitly declared countable or measurable energy models with a positive finite dimensionless partition function; the postulate asserts no dynamics, equilibration, or empirical validation.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3 (printed pp. 17–26)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4–4.6 (printed pp. 205–217)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Postulate

Assign a positive temperature $T$ in kelvins and the exact framework constant $k_{\mathrm B}$ in $\mathrm{J\,K^{-1}}$ from [[def-td-si-quantities]], and put $\beta=(k_{\mathrm B}T)^{-1}$ in $\mathrm{J^{-1}}$. For a finite microstate model $(\Omega,\epsilon)$, adopt the canonical preparation
$$P_\beta(x)=\frac{e^{-\beta E(x)}}{Z(\beta)},\qquad Z(\beta)=\sum_{x\in\Omega}e^{-\beta E(x)}.$$
Here $Z$ is dimensionless, positive, and finite because $\Omega$ is finite and nonempty.

The same adopted law may be assigned to a specified countable state model with its stated enumeration and energy list, or to a measurable model $(X,\Sigma,\mu,E)$ with a dimensionless reference measure $\mu$ and measurable energy $E:X\to\mathbb R\,\mathrm J$, only when $0<Z(\beta)<\infty$ for the declared series or integral. For an explicitly enumerated microstate list counted once, set $g_i=1$ and use $P_\beta(i)=e^{-\beta E_i}/Z$. More generally, if the declared countable model has positive dimensionless reference weights $g_i$, adopt $Z=\sum_i g_i e^{-\beta E_i}$ and $P_\beta(i)=g_i e^{-\beta E_i}/Z$; these may represent declared level multiplicities or other fixed reference weights and are additional model data, rather than silently counting one weighted level as one microstate. The measurable version has probability density $p_\beta=e^{-\beta E}/Z$ relative to the declared dimensionless $\mu$. The countable and integral conventions are those of [[def-tdmath-countable-canonical-model]] and [[def-tdmath-measure-integral]] at their actual current draft statements.

This is an adopted statistical-mechanical preparation rule. It is not derived from the macroscopic thermodynamic laws, a finite bath, entropy maximization, or a time-evolution equation. It does not assert that a physical sample has this preparation; that identification is an additional model assumption to be tested against a specified preparation and apparatus.
