---
id: post-tgr-fixed-static-gas-preparation
kind: postulate
title: "Fixed static ideal gas or finite fermion regulator preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-gravitating-phase-reference
  - lem-tgr-static-gas-finite-normalization
  - lem-tgr-finite-static-mode-occupation-trace
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-gravitating-phase-reference: mathematical-premise
  lem-tgr-static-gas-finite-normalization: mathematical-premise
  lem-tgr-finite-static-mode-occupation-trace: mathematical-premise
justified_by: []
physical_scope: "Classical ideal gas on a prescribed smooth static finite region with lapse bounded strictly above zero, or a separately declared finite-mode exclusion regulator. The metric is fixed input, not an Einstein solution sourced by the gas; no generic curved-space quantum spectrum or observed equilibrium is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
      locator: "Complete 36-page paper retrieved; §III, PDF pp. 8–11, for the Maxwell–Jüttner law, local thermodynamic quantities, Tolman/Klein normalization and hydrostatic equation in a self-gravitating model. The present preparation prescribes its background and does not use backreaction."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–1.4 and §§3.5–3.6, PDF pp. 23–34 and 96–108, for finite canonical/grand-canonical weights and Fermi occupation factors."
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas"
      url: "https://arxiv.org/pdf/1908.10806"
      locator: "Complete 62-page paper retrieved; §III, PDF pp. 19–21, for relativistic local Fermi–Dirac mode weights and Tolman/Klein variables. Its self-gravitating continuum model is not adopted here."
verification:
  precheck: pass
---

## Postulate

For the classical branch, prescribe a smooth static metric on a neighborhood of $I_{x^0}\times\overline B$, where $I_{x^0}\subset\mathbb R$ is an open interval and $B\subset\mathbb R^3$ is an open bounded coordinate box with compact closure and positive volume:
$$g=-\mathcal N(x)^2(dx^0)^2+h_{ij}(x)dx^i dx^j,\qquad x^0=ct.$$
Here $h_{ij}$ is a smooth positive-definite spatial metric whose eigenvalues are bounded above and away from zero, and the dimensionless lapse satisfies $0<\mathcal N_0\le\mathcal N(x)\le\mathcal N_1<\infty$. The static chart and observer congruence are distinct objects: with $\xi=\partial_{x^0}$, the static unit observer is $u=\mathcal N^{-1}\xi$, satisfying $g(u,u)=-1$, under the conventions of [[def-tgr-framework-units]]. This geometry is prescribed and is not assumed to solve an Einstein equation with gas stress as source.

Take particle mass $m>0$ in kilograms, $c>0$ in metres per second, orthonormal momentum $\hat p\in\mathbb R^3$ in $\mathrm{kg\,m\,s^{-1}}$, and adopt the massive-particle dispersion function $E(\hat p)=\sqrt{m^2c^4+c^2|\hat p|^2}$ in joules as a model input. The Killing energy is the derived function $H_K(x,\hat p)=\mathcal N(x)E(\hat p)$, and the action reference $h_*>0$ is in joule-seconds. For the classical ideal-gas branch, take $M\ge1$ independent particles with no interparticle potential, the $1/M!$ phase-counting convention, inverse Killing-energy parameter $\beta_K>0$ in inverse joules, and dimensionless fugacity $z>0$. The finite proper-phase normalization is supplied by [[lem-tgr-static-gas-finite-normalization]]. There is no interaction term or gas-induced change of the metric in this branch.

As a distinct finite quantum regulator, one may instead specify a finite mode set $J=\{1,\ldots,M\}$, $M\ge0$, positive dimensionless lapse values $\mathcal N_j$, and momenta $\hat p_j\in\mathbb R^3$. Adopt mode energies $E_j=\mathcal N_j\sqrt{m^2c^4+c^2|\hat p_j|^2}$, canonical parameter $\beta_K>0$ in inverse joules, and chemical-potential parameter $\mu_K\in\mathbb R$ in joules, together with the finite occupation basis $n_j\in\{0,1\}$. The associated finite trace and occupation identity are given by [[lem-tgr-finite-static-mode-occupation-trace]]. This is an explicitly supplied spectral cutoff, not a claim that arbitrary curved spacetime has these modes. Neither branch reports an observation or asserts actual thermalization.

The metric $h_{ij}$, lapse $\mathcal N$, region, $m,c,h_*$, canonical parameters and (in the finite-mode branch) the mode list are supplied inputs. The local energy, Killing-energy weight, partition functions, normalized state, local densities and response identities are derived constructions under the stated mathematical results; no universal equation of state or metric backreaction is assumed.
