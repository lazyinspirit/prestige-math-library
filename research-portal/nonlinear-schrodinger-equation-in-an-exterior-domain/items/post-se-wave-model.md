---
id: post-se-wave-model
kind: postulate
domain: physics
title: Cubic NLS as a nonlinear dispersive wave model
status: published
physical_scope: "An introductory model interpretation: nonlinear dispersive
  waves, nonlinear optics and Bose–Einstein condensation. No apparatus,
  measurement, control actuator or quantitative range of applicability is
  asserted. The independent condensate example below is restricted to the stated
  dilute, weakly repulsive, absolute-zero mean-field regime."
deps:
  - def-se-cubic-boundary-system
dependency_roles:
  def-se-cubic-boundary-system: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 1, §1.1, equation (1.1) and following paragraph
    - title: Vortex Lines in an Imperfect Bose Gas
      url: https://jetp.ras.ru/cgi-bin/dn/e_013_02_0451.pdf
      locator: §2, printed pages 451–452, equations (5)–(9) and validity condition (16)
      statement: The zero-order condensate amplitude in a weakly repulsive rarefied
        Bose gas obeys a cubic nonlinear Schrödinger equation after small
        operator corrections are discarded.
      hypotheses: Absolute zero; weak short-range repulsion; interaction range much
        smaller than interparticle spacing; small noncondensate correction;
        effective scattering amplitude small relative to interparticle spacing.
      reading_limits: The retained planning packet reports reading the four-page
        English translation, §2, and visually inspecting printed page 452,
        equations (6)–(9) and (16). This author read that retained contract; an
        attempt to fetch the original PDF timed out. Vortex-energy and
        excitation-spectrum arguments were not checked. The source does not
        establish an exterior obstacle or a boundary-control apparatus.
dependency_level: 3
---

## Postulate

The cubic nonlinear Schrödinger equation $iu_t+\Delta u+\lambda|u|^2u=0$, with real nonzero $\lambda$, is adopted as a model for propagation of nonlinear dispersive waves. Here a wave is represented by a complex-valued amplitude $u(x,t)$; nonlinear means that the equation contains the cubic term $|u|^2u$, and dispersive refers to propagation in which different spatial frequencies can evolve at different rates. The article names nonlinear optics, the study of light interacting with matter in regimes with nonlinear response, and Bose–Einstein condensation, a regime in which a macroscopic population occupies a common quantum state, as applications.

This is an adopted model interpretation. It does not assert that the boundary controls in the mathematical formulation have been physically realized, that a particular experiment measured this equation, or that the equation applies without approximation to every optical or condensate system.

## Postulate references

[[def-se-cubic-boundary-system]]

## Physical context

The mathematical formulation [[def-se-cubic-boundary-system]] specifies the equation and its Dirichlet and Neumann boundary-control alternatives. It does not itself assert their physical realization.

As independent model context, Pitaevskii's zero-order condensate amplitude $a_0$ satisfies $i\hbar\partial_t a_0=-(\hbar^2/2m)\Delta a_0+g|a_0|^2a_0$ in the source's approximation. Here $\hbar$ is the reduced Planck constant, $m$ the particle mass, and $g$ the effective interaction coefficient; the condensate amplitude is the mean-field amplitude for the condensed component. The stated context is absolute zero and a rarefied gas with weak short-range repulsion, small noncondensate correction and effective scattering amplitude small compared with interparticle spacing. Small operator corrections are discarded. This input does not establish the article's obstacle geometry or its boundary controls.

## Source notes

The frozen article is cited for attribution of its introductory interpretation. The Pitaevskii reference supplies the separately qualified condensate example, not a derivation of the article's controlled model. The ideal periodic Bose-gas result in the physics library and the library's autonomous linear Schrödinger flow concern different hypotheses and do not supply this nonlinear controlled model.
