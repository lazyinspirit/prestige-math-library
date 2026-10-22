---
id: def-csm-frontier-finite-gaussian-precision
kind: definition
title: Finite Gaussian probability with a positive precision matrix
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - thm-csm-examples-quadratic-covariance
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-csm-examples-quadratic-covariance: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.1, printed pp. 41–43 / PDF pp. 44–46, finite-dimensional Gaussian integration by completing the square and the Gaussian path-integral normalization convention.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §8.2, Theorem 8.4, printed pp. 385–386, Gaussian vectors and their density with positive-definite covariance.
---

## Definition

Assume the Axiom of Countable Choice: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ with $f(n)\in X_n$ for every $n$. For $N\ge1$, a real symmetric positive-definite matrix $K\in\mathbb R^{N\times N}$ (meaning $z^{\mathsf T}Kz>0$ for every nonzero $z\in\mathbb R^N$) defines the finite Gaussian probability $\gamma_K$ on $\mathbb R^N$ by

$$Z_K:=\int_{\mathbb R^N}e^{-z^{\mathsf T}Kz/2}\,d\lambda_N(z),\qquad \gamma_K(dz):=Z_K^{-1}e^{-z^{\mathsf T}Kz/2}\,d\lambda_N(z).$$

Under the stated Axiom of Countable Choice, $Z_K=(2\pi)^{N/2}(\det K)^{-1/2}$. For the coordinate identity $X(z)=z$ on $\mathbb R^N$, define its mean vector by $\mu_i:=\int_{\mathbb R^N}z_i\,\gamma_K(dz)$ and its covariance matrix by $\Sigma_{ij}:=\int_{\mathbb R^N}(z_i-\mu_i)(z_j-\mu_j)\,\gamma_K(dz)$ for $1\le i,j\le N$. These integrals are finite under the Gaussian theorem [[thm-csm-examples-quadratic-covariance]], which gives $\mu=0$ and $\Sigma=K^{-1}$. Thus $\gamma_K$ is **centered**, meaning its mean vector is zero. Here $K$ is called the precision matrix because it appears in the quadratic exponent; for this centered law its covariance matrix is its inverse. For $N=0$, define $\mathbb R^0$ to be the singleton containing the empty vector and define $\gamma_{\varnothing}$ to put mass one on that point; its partition factor and empty determinant are both $1$.

The variables $z_i$ and exponent $z^{\mathsf T}Kz/2$ are dimensionless in this mathematical definition. In a physical quadratic model, if each component of $\Phi$ has declared field unit $\Phi_*$ and $H(\Phi)=\frac12\Phi^{\mathsf T}K_{\rm phys}\Phi$ is energy in joules, then each entry of $K_{\rm phys}$ has units $\mathrm J/(\Phi_*)^2$. With $\beta=(k_BT)^{-1}$, where in SI $k_B$ is Boltzmann's constant with units $\mathrm J\,\mathrm K^{-1}$ and $T>0$ is absolute temperature in kelvins, $\beta$ has units $\mathrm J^{-1}$. For $z_i=\Phi_i/\Phi_*$, the dimensionless precision is $K=\beta\Phi_*^2K_{\rm phys}$. This dimensional conversion does not assert an empirical model.

## Definition references

[[def-countable-choice]]

[[thm-csm-examples-quadratic-covariance]]
