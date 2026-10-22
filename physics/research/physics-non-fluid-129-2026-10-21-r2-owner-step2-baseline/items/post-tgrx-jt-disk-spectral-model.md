---
id: post-tgrx-jt-disk-spectral-model
kind: postulate
title: Adopted JT disk spectral model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
deps:
  - post-tgrx-semiclassical-ads-dictionary
dependency_roles:
  post-tgrx-semiclassical-ads-dictionary: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  An adopted continuous genus-zero disk density for the specified two-dimensional
  Jackiw–Teitelboim (JT) model in natural units. It asserts no particular
  individual exact energy spectrum, higher-topology contribution, or empirical
  validity.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, §§3.3.5, 3.5, and 6"
      url: "https://arxiv.org/html/1903.11115"
      locator: "Full-text article; §3.3.5, equations (121)–(126), for the disk Schwarzian integral; §3.5, equation (145), for the genus-zero density; §§1 and 6 for the matrix-integral and non-unique-completion scope."
    - title: "Thomas G. Mertens and Gustavo J. Turiaci, Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity, §§3.1 and 4.3–4.4"
      url: "https://arxiv.org/html/2210.10846"
      locator: "Full-text review; §3.1, equations (3.7) and (3.10), for the disk partition function and density; §4.3.2 and §4.4 for the matrix-ensemble and nonperturbative-completion qualifications."
    - title: "Gábor Sárosi, AdS2 holography and the SYK model, lecture notes, §§3.1 and 3.3.1"
      url: "https://arxiv.org/html/1711.08482"
      locator: "Full lecture notes; §3.1 and §3.3.1, equations (47), (54), and (55), for the JT boundary Schwarzian action, disk thermodynamics, and the stated natural-unit convention. The notes do not supply the spectral-density normalization used here."
---

## Postulate

Use natural units $c=\hbar=k_B=1$. Thus energy $E$ has units $\mathrm{s^{-1}}$, inverse temperature $\beta$ and the positive model parameter $C$ have units $\mathrm{s}$, and $S_0\in\mathbb R$ is dimensionless. In this item, **JT disk model** means only the disk-sector spectral model with the density specified below; the label refers to the cited two-dimensional Jackiw–Teitelboim calculations and adopts no additional field equation or path-integral construction. **Genus-zero disk contribution** means the single connected disk term, with one boundary and no handles, in the formal expansion by spacetime topology. A **nonperturbative completion** means additional exact model data that select an exact theory beyond the terms fixed by that formal expansion.

A **continuous spectral density** here is a nonnegative function $\rho_0:(0,\infty)\to[0,\infty)$ whose measure $\rho_0(E)\,dE$ assigns model spectral weight to energy intervals. Adopt

$$\rho_0(E):=e^{S_0}\frac{C}{2\pi^2}\sinh\!\left(2\pi\sqrt{2CE}\right),\qquad E>0.$$

The density has units $\mathrm{s}$, so $\rho_0(E)\,dE$ is dimensionless. This postulate specifies a continuous disk-level input only. It does not specify an individual discrete energy spectrum, sum higher-topology terms, choose a nonperturbative completion, or assert that the model describes nature.

## Postulate references

[[post-tgrx-semiclassical-ads-dictionary]]

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)

[Thomas G. Mertens and Gustavo J. Turiaci, *Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity*](https://arxiv.org/html/2210.10846)

[Gábor Sárosi, *AdS2 holography and the SYK model*](https://arxiv.org/html/1711.08482)

## Remarks

The prior restricted semiclassical AdS entropy dictionary is a formulation context only. It does not derive this disk density. The disk expression remains a separate adopted input; any exact boundary quantum system, higher-genus expansion, or nonperturbative completion is outside this postulate.
