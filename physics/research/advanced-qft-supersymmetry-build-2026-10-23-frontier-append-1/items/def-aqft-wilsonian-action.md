---
id: def-aqft-wilsonian-action
kind: definition
domain: physics
library: physics
title: Finite-regulator Wilsonian action
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-aqft-model-and-scale-data
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
physical_scope: Finite-dimensional high-coordinate integration at a declared Wilsonian scale; no infinite-dimensional functional integral or continuum limit is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §§2.2.1–2.2.5, printed pp. 20–27, Wilson action from a specified high/low mode split and model-specific matching.
    - title: David B. Kaplan, Five lectures on effective field theory
      url: https://arxiv.org/pdf/nucl-th/0510023
      locator: §2.2, printed pp. 20–21, low-energy contact interactions and matching coefficients.
---

## Definition

Take a finite-regulator model datum with retained coordinates $\ell$, integrated coordinates $h$, a normalized Borel probability measure $\nu_H$ on the finite-dimensional $h$-space, and a real Borel ultraviolet action $S_{\rm UV}(\ell,h)$. For each retained configuration $\ell$ define

$$
Z_H(\ell):=\int e^{-S_{\rm UV}(\ell,h)}\,d\nu_H(h).
$$

On the domain of $\ell$ for which $0<Z_H(\ell)<\infty$, the finite-regulator Wilsonian action at scale $\mu_W$ is

$$
S_W(\ell;\mu_W):=-\log Z_H(\ell).
$$

Thus “integrating out” the high sector means this specified finite integral over $h$ while $\ell$ is held fixed. The measure, action, regulator, and low/high split are inputs; the definition does not assert that every interacting model has a finite or well-defined integral. Replacing $\nu_H$ by a positive constant multiple changes $S_W$ only by an additive constant independent of $\ell$, which is fixed by the chosen normalization convention.

A one-particle-irreducible effective action, when it exists, is the Legendre transform of a connected source-generating functional for the retained fields. It is a different construction from the high-coordinate integral above. No 1PI functional is needed or asserted here.

## Definition references

[[def-aqft-model-and-scale-data]]
