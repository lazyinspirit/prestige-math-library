---
id: def-aqft-wilsonian-action
kind: definition
domain: physics
library: physics
title: Finite-regulator Wilsonian action
status: "published"
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
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

For comparison, fix the following finite Euclidean convention for a one-particle-irreducible (1PI) effective action. Separately supply a Borel probability $\rho$ on the retained space $\mathbb R^X$, and pair a source $j\in(\mathbb R^X)^*$ with $\ell\in\mathbb R^X$ by $j\cdot\ell=\sum_{x\in X}j_x\ell_x$, with source units chosen to make the pairing dimensionless. On a nonempty open set $U\subset(\mathbb R^X)^*$ require $0<\int e^{j\cdot\ell}\,d\rho(\ell)<\infty$ and define the connected source-generating function $W(j)=\log\int e^{j\cdot\ell}\,d\rho(\ell)$. Require $W$ to be $C^2$ on $U$ and its gradient $\nabla W:U\to V$ to be a $C^1$ diffeomorphism onto an open set $V\subset\mathbb R^X$ (a bijection with continuously differentiable map and inverse). For $\varphi\in V$ set $j(\varphi)=(\nabla W)^{-1}(\varphi)$ and define the Legendre transform $\Gamma(\varphi)=j(\varphi)\cdot\varphi-W(j(\varphi))$. This defines the finite Euclidean 1PI action on $V$ under these additional hypotheses; no graph expansion or existence of these additional data is asserted. It is a different construction from the high-coordinate integral above, which needs none of $\rho,U,V,W,\Gamma$.

## Definition references

[[def-aqft-model-and-scale-data]]
