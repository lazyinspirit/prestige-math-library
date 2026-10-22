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
deps: []
dependency_roles: {}
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  An adopted continuous genus-zero disk density for the specified
  two-dimensional Jackiw–Teitelboim (JT) model in natural units. It asserts no
  particular individual exact energy spectrum, higher-topology contribution, or
  empirical validity.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a
        matrix integral, §§3.3.5, 3.5, and 6
      url: https://arxiv.org/html/1903.11115
      locator: SSS HTML §3.3.5, equation (125), gives the disk Schwarzian factor;
        §3.5, equation (144), gives the genus-zero density after setting
        alpha=1, while equation (145) gives the spectral curve y(z). Identify
        the source parameter gamma with C and multiply its genus coefficient by
        the separate disk topological factor exp(S_0). In the retrieved PDF
        these are equation (122), printed p.30/PDF p.31, and equation (141),
        printed p.33/PDF p.34; the separate topological weighting is equation
        (63), printed p.18/PDF p.19. The Introduction and §6 supply the
        matrix-integral and non-unique-completion scope.
    - title: "Thomas G. Mertens and Gustavo J. Turiaci, Solvable models of quantum
        black holes: a review on Jackiw–Teitelboim gravity, §§3.1 and 4.3–4.4"
      url: https://arxiv.org/html/2210.10846
      locator: Full-text review; §3.1, equations (3.7) and (3.10), for the disk
        partition function and density; §4.3.2 and §4.4 for the matrix-ensemble
        and nonperturbative-completion qualifications.
    - title: Gábor Sárosi, AdS2 holography and the SYK model, lecture notes, §§3.1 and
        3.3.1
      url: https://arxiv.org/html/1711.08482
      locator: Full lecture notes; §3.1 and §3.3.1, equations (47), (54), and (55),
        for the JT boundary Schwarzian action, disk thermodynamics, and the
        stated natural-unit convention. The notes do not supply the
        spectral-density normalization used here.
---

## Postulate

Use natural units $c=\hbar=k_B=1$. Thus energy $E$ has units $\mathrm{s^{-1}}$, inverse temperature $\beta$ and the positive model parameter $C$ have units $\mathrm{s}$, and $S_0\in\mathbb R$ is dimensionless. In this item, **JT disk model** means only the disk-sector spectral model with the density specified below; the label refers to the cited two-dimensional Jackiw–Teitelboim calculations and adopts no additional field equation or path-integral construction. **Genus-zero disk contribution** means the single connected disk term, with one boundary and no handles, in the formal expansion by spacetime topology. A **nonperturbative completion** means additional exact model data that select an exact theory beyond the terms fixed by that formal expansion.

A **continuous spectral density** here is a nonnegative function $\rho_0:(0,\infty)\to[0,\infty)$ whose measure $\rho_0(E)\,dE$ assigns model spectral weight to energy intervals. Adopt

$$\rho_0(E):=e^{S_0}\frac{C}{2\pi^2}\sinh\!\left(2\pi\sqrt{2CE}\right),\qquad E>0.$$

The density has units $\mathrm{s}$, so $\rho_0(E)\,dE$ is dimensionless. This postulate specifies a continuous disk-level input only. It does not specify an individual discrete energy spectrum, sum higher-topology terms, choose a nonperturbative completion, or assert that the model describes nature.

## Postulate references

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)

[Thomas G. Mertens and Gustavo J. Turiaci, *Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity*](https://arxiv.org/html/2210.10846)

[Gábor Sárosi, *AdS2 holography and the SYK model*](https://arxiv.org/html/1711.08482)

## Remarks

The prior restricted semiclassical AdS entropy dictionary [[post-tgrx-semiclassical-ads-dictionary]] concerns bulk dimension $d+1$ with $d\ge2$, and is background context only for this two-dimensional disk model: none of its entropy-dictionary assumptions is adopted here, and it does not derive this disk density. The disk expression remains a separate adopted input; any exact boundary quantum system, higher-genus expansion, or nonperturbative completion is outside this postulate.
