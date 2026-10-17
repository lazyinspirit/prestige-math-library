---
id: def-csm-dk-phase-space-wasserstein-one
kind: definition
title: Wasserstein-1 coupling cost on dimensionless phase space
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
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

Use the dimensionless one-particle phase space $Z:=\mathbb T^d\times\mathbb R^d$ from [[def-csm-dk-periodic-mean-field-model]], with its product topology and Borel sigma algebra. The finite torus is second-countable by [[def-the-one-dimensional-torus-and-normalized-haar-integral]], and Euclidean space is second-countable. Consequently $Z$ and $Z\times Z$ are second-countable, and the Borel sigma algebra of each finite product equals the product of the factor Borel sigma algebras: every open set is a countable union of basic open rectangles. Use the product topology and its Borel sigma algebra on $Z\times Z$ as well.

For $x,y\in\mathbb T^d$, let

$$d_{\mathbb T^d}(x,y):=\min_{\ell\in\mathbb Z^d}|\widetilde x-\widetilde y+\ell|,$$

where $\widetilde x,\widetilde y\in\mathbb R^d$ are any representatives; the minimum is independent of the representatives. Equip $Z$ with

$$d_Z((x,v),(y,w)):=d_{\mathbb T^d}(x,y)+|v-w|.$$

Let $\mathcal P_1(Z)$ be the Borel probability measures $\mu$ on $Z$ with $\int_Z|v|\,d\mu(x,v)<\infty$. For $\mu,\nu\in\mathcal P_1(Z)$, a coupling is a Borel probability $\pi$ on $Z\times Z$ satisfying $\pi(A\times Z)=\mu(A)$ and $\pi(Z\times B)=\nu(B)$ for all Borel $A,B\subseteq Z$; write $\Pi(\mu,\nu)$ for the set of couplings. Define the phase-space Wasserstein-1 coupling cost by

$$\mathcal W_1(\mu,\nu):=\inf_{\pi\in\Pi(\mu,\nu)}\int_{Z\times Z}d_Z(z,z')\,d\pi(z,z').$$

By [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], $\mu\otimes\nu$ is a probability on $\mathcal B(Z)\otimes\mathcal B(Z)=\mathcal B(Z\times Z)$ and its marginals are $\mu,\nu$; hence $\Pi(\mu,\nu)$ is nonempty. The infimum is finite: this product coupling has torus cost at most $\sqrt d/2$, and Tonelli's theorem bounds its velocity cost by $\int|v|\,d\mu+\int|w|\,d\nu$. No minimizing coupling is assumed to exist.
