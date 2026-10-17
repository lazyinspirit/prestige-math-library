---
id: def-csm-dk-phase-space-wasserstein-one
kind: definition
title: Wasserstein-1 coupling cost on dimensionless phase space
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Appendix I.A, printed pp. 16-18: definition by infimum over couplings and the Dobrushin estimate.'
---

## Definition

Use the dimensionless one-particle phase space $Z:=\mathbb T^d\times\mathbb R^d$ from [[def-csm-dk-periodic-mean-field-model]]. For $x,y\in\mathbb T^d$, let

$$d_{\mathbb T^d}(x,y):=\min_{\ell\in\mathbb Z^d}|\widetilde x-\widetilde y+\ell|,$$

where $\widetilde x,\widetilde y\in\mathbb R^d$ are any representatives; the minimum is independent of the representatives. Equip $Z$ with

$$d_Z((x,v),(y,w)):=d_{\mathbb T^d}(x,y)+|v-w|.$$

Let $\mathcal P_1(Z)$ be the Borel probability measures $\mu$ on $Z$ with $\int_Z|v|\,d\mu(x,v)<\infty$. For $\mu,\nu\in\mathcal P_1(Z)$, a coupling is a Borel probability $\pi$ on $Z\times Z$ whose first and second marginals are $\mu$ and $\nu$; write $\Pi(\mu,\nu)$ for the set of couplings. Define the phase-space Wasserstein-1 coupling cost by

$$\mathcal W_1(\mu,\nu):=\inf_{\pi\in\Pi(\mu,\nu)}\int_{Z\times Z}d_Z(z,z')\,d\pi(z,z').$$

This infimum is finite: the product probability $\mu\otimes\nu$ is a coupling, the torus term is bounded by $\sqrt d/2$, and Tonelli's theorem bounds the velocity term by $\int|v|\,d\mu+\int|w|\,d\nu$. No minimizing coupling is assumed to exist.
