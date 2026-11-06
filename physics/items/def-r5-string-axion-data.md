---
id: def-r5-string-axion-data
kind: definition
title: Periodic axion EFT data and sources
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 1
deps:
  - def-r5-cosmology-4d-scalar-eft-data
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: Definition of periodic axion-sector EFT data in a declared four-dimensional Einstein-frame regime. It does not assert that any specific compactification realizes the data, that an instanton exists, or that a relic abundance is observed.
sources:
  references:
    - title: "D. J. E. Marsh, Axion Cosmology, arXiv:1510.07633v2"
      url: "https://arxiv.org/pdf/1510.07633v2"
      locator: "§2.4, PDF pp. 16–18, for axions from string compactification, kinetic normalization and nonperturbative potentials; §§4.1–4.3, PDF pp. 26–29, for the canonical scalar convention."
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§4.1, PDF pp. 58–61, for string axion shift symmetries and inflationary EFT conditions; §§5.7.2–5.7.4, PDF pp. 114–118, for axion production and model-dependent cosmological histories."
---

## Definition

Fix the four-dimensional Einstein-frame scalar EFT conventions of the earlier cosmology EFT datum. A single-axion datum on a stated field patch consists of:

1. A dimensionless angular coordinate $\theta$ with target $\mathbb R/(2\pi\mathbb Z)$. The identification $\theta\sim\theta+2\pi$ is either derived from a specified gauge identification or explicitly adopted as a model input.
2. A positive kinetic coefficient $f^2$ and a declared region on which it is constant, so the local canonical scalar is $\chi=f\theta$ and its kinetic term is $-\frac12 g^{\mu\nu}\partial_\mu\chi\,\partial_\nu\chi$. If moduli vary or several axions mix, the full positive-definite kinetic matrix on the joint field patch is supplied; the formula $\chi=f\theta$ is then only a local fixed-background normalization, not a global field redefinition.
3. A specified finite or infinite set of nonperturbative sources indexed by integer charges $n\in\mathbb Z\setminus\{0\}$, dimensionless actions $S_n\geq0$, phases $\delta_n\in\mathbb R/(2\pi\mathbb Z)$, and scales $\Lambda_n\geq0$. Their declared periodic potential terms are
   $$V_n(\theta)=\Lambda_n^4e^{-S_n}\bigl[1-\cos(n\theta+\delta_n)\bigr].$$
   The contribution of this source set is $V_{\mathrm{np}}(\theta):=\sum_n V_n(\theta)$. For an infinite source set, require this series and the termwise series of every derivative in a local angular coordinate to converge uniformly on compact subsets of the stated field patch. Thus $V_{\mathrm{np}}$ is smooth, as required of the potential in the earlier scalar EFT datum. A harmonic approximation near a chosen minimum is additional model data and is valid only on its stated field range.
4. If a monodromy branch is used, a separate branch label and its charge/brane data. Such a branch is not identified with a single-valued function on the axion circle and is not one of the periodic terms above.

In natural units $\hbar=c=1$, $\theta,n,S_n,\delta_n$ are dimensionless, $f$ and $\Lambda_n$ have mass dimension one, $\chi$ has mass dimension one, and $V_n$ has mass dimension four. For multiple axions, the periodicity lattice, kinetic matrix, charge vectors and source actions are all stated in a common basis. No axion mass, instanton action, decay constant, portal, or compactification realization follows from the name axion alone.

## Definition references

[[def-r5-cosmology-4d-scalar-eft-data]]
