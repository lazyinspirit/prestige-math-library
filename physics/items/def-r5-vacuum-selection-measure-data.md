---
id: def-r5-vacuum-selection-measure-data
kind: definition
title: "Vacuum-population, measure and selection data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-r5-flux-vacuum-ensemble-data
dependency_roles:
  def-r5-flux-vacuum-ensemble-data: formulation-prerequisite
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Definition of an explicitly supplied population and selection model on a chosen vacuum set. It asserts no unique, natural, regulator-independent, or string-derived probability measure."
empirical_premises: []
sources:
  references:
    - title: "Frederik Denef and Michael R. Douglas, Distributions of Flux Vacua, arXiv:hep-th/0404116v2"
      url: "https://arxiv.org/pdf/hep-th/0404116v2"
      locator: "§§1.5 and 3.1; a vacuum count and density are defined separately from cosmological population probabilities."
    - title: "Raphael Bousso, TASI Lectures on the Cosmological Constant, arXiv:0708.4231v2"
      url: "https://arxiv.org/pdf/0708.4231v2"
      locator: "Complete 39-page lecture notes; §§7 and 6.3, PDF pp. 29–34 and 27–28; separate landscape counting, dynamical selection, and observer weighting."
    - title: "Michael R. Douglas, The String Theory Landscape, Universe 2019, 5(7), 176, doi:10.3390/universe5070176"
      url: "https://s3.cern.ch/inspire-prod-files-6/674a0aadd074dee82fbb30e809238441"
      locator: "Complete 16-page publisher-version article hosted by INSPIRE/CERN; §§2–3, PDF pp. 2–6; separates vacuum counting, cosmological population factor, and observer factor."
    - title: "Michele Cicoli, Joseph P. Conlon, Anshuman Maharana, Susha Parameswaran, Fernando Quevedo, and Ivonne Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§§6.1.2–6.1.3, PDF pp. 114–118; landscape counts versus population dynamics, observer weighting, and the remaining measure and regularization questions."
    - title: "Bjoern Hassfeld, Arthur Hebecker, Manfred Salmhofer, Jonah Cedric Strauss, and Johannes Walcher, A Local Wheeler–DeWitt Measure for the String Landscape, arXiv:2205.09772v4, Nuclear Physics B 992 (2023) 116230"
      url: "https://arxiv.org/pdf/2205.09772v4"
      locator: "§§1, 5.2, 6.1–6.3, and 7; explicit local WDW proposal, terminal-vacuum and creation assumptions, observer weighting, and stated remaining assumptions."
    - title: "Justin Khoury and Sam S. C. Wong, Bayesian Reasoning in Eternal Inflation: A Solution to the Measure Problem, arXiv:2205.11524v2, Physical Review D 108 (2023) 023506"
      url: "https://arxiv.org/pdf/2205.11524v2"
      locator: "Abstract, Introduction, §§4–6.4; priors over nucleation time and ancestral vacuum, regulator removal, and identified model/landscape loopholes."
---
## Definition

Fix a measurable vacuum set $V$ drawn from an explicitly specified ensemble, with sigma-algebra $\Sigma$ on $V$. A vacuum population measure is a positive countably additive measure $\mu:\Sigma\to[0,1]$ with $\mu(V)=1$; it describes the prescribed population process or prior and is not the uniform count over vacua unless that equality is separately adopted. Let $(\mathcal D,\mathcal A,\nu)$ be a data space with a declared sigma-finite reference measure $\nu$. For fixed observed data $D\in\mathcal D$, supply as part of the model a measurable function $\ell_D:V\to[0,\infty)$, called the likelihood weight; this definition does not derive it from a family of data laws. If $\ell_D(v)$ is claimed to be a density, the input must additionally specify a family of probability laws $(Q_v)_{v\in V}$ on $(\mathcal D,\mathcal A)$ with $Q_v\ll\nu$ and a selected pointwise measurable version of $dQ_v/d\nu$ at $D$. Such a density is determined only up to $\nu$-null sets for each $v$, so a fixed-$D$ evaluation uses the supplied representative; its units are inverse $\nu$-units. A selection function $S:V\to[0,1]$ is measurable and records the probability or weight assigned by the declared observer/selection model. Write
$$
Z(D,S)=\int_V\ell_D(v)S(v)\,d\mu(v).
$$
When $0<Z(D,S)<\infty$, define the selected probability measure by
$$
P(O\mid D,S)=Z(D,S)^{-1}\int_O\ell_D(v)S(v)\,d\mu(v),\qquad O\in\Sigma.
$$
The input data are a specified vacuum set, population dynamics or prior, likelihood, data, selection rule, and any regulator and its removal procedure. The $P$ above is a normalized conditional model prediction; it is not implied by a finite vacuum count or a flux-vacuum density.

## Definition references

[[def-r5-flux-vacuum-ensemble-data]]
