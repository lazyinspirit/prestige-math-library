---
id: def-cech-cohomology-holomorphic-line-bundle-sections
kind: definition
title: Cech cohomology of holomorphic sections of a line bundle on finite good covers
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-line-bundle-associated-to-a-divisor
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - def-sheaf-on-topological-space
  - def-presheaf-of-groups-rings-modules
  - def-section-restriction-and-global-section
  - def-subsheaf
  - def-smooth-section-local-section-and-support
  - prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-refinement-open-cover
  - thm-refinement-map-independent-on-cohomology
  - lem-cech-h0-global-sections
  - def-countable-choice
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Chapter 2 §§12.1–12.5, printed pp. 96–99: Čech cochains, cocycles, coboundaries, refinements, and fixed-cover cohomology"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 7, printed pp. 69–70: Čech cochains with values in a sheaf, the differential, cocycles, coboundaries, fixed-cover cohomology, refinement maps, and degree zero"
dependency_level: 2
---

## Definition

Let $X$ be a Riemann surface and $E\to X$ a holomorphic line bundle ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]). For every open $U\subseteq X$, let $\mathcal O_X(E)(U)$ be the $\mathbb C$-vector space of holomorphic sections of $E|_U$, with the usual restriction maps. Compatible local sections glue uniquely as sections of a bundle, so these groups form a sheaf of $\mathbb C$-vector spaces ([[def-sheaf-on-topological-space]], [[def-presheaf-of-groups-rings-modules]], [[def-section-restriction-and-global-section]]). Holomorphic local coefficients are smooth, so $\mathcal O_X(E)$ is a subsheaf of the sheaf of smooth sections ([[def-subsheaf]], [[def-smooth-section-local-section-and-support]], [[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]). When $E=\mathcal O(D)$, its global sections identify with $L(D)$ as in [[def-line-bundle-associated-to-a-divisor]]; the general noncompact construction of $\mathcal O(D)$ uses $\mathrm{AC}_\omega$, while its compact finite-cover construction is choice-free.

A **finite good cover** of $X$ is a finite indexed open cover $\mathfrak U=(U_0,\ldots,U_n)$ by holomorphic chart domains, each biholomorphic to a disc, such that every nonempty finite intersection of its members is also biholomorphic to a disc. This definition applies to a supplied finite good cover; it does not assert that every Riemann surface admits one.

For a supplied finite good cover $\mathfrak U$, define the ordered Čech cochain complex $C^\bullet(\mathfrak U,\mathcal O_X(E))$ and its differential $\delta$ as in [[def-cech-cochain-complex-open-cover]]. Its degree-$p$ cocycles and coboundaries are $Z^p=\ker\delta^p$ and $B^p=\operatorname{im}\delta^{p-1}$, and the **fixed-cover Čech cohomology** is
$$\check H^p(\mathfrak U,\mathcal O_X(E)):=Z^p/B^p$$
as in [[def-cech-cohomology-open-cover]]. In degree zero, restriction identifies $\check H^0(\mathfrak U,\mathcal O_X(E))$ with $\Gamma(X,E)$ ([[lem-cech-h0-global-sections]]).

If a finite good cover $\mathfrak V=(V_j)$ refines $\mathfrak U=(U_i)$ by a refinement function $c$ with $V_j\subseteq U_{c(j)}$, restriction defines a cochain map and hence a map on fixed-cover Čech cohomology ([[def-refinement-open-cover]]). The induced map on cohomology is independent of the chosen refinement function ([[thm-refinement-map-independent-on-cohomology]]). For a supplied pair of covers and refinement function, these Čech definitions use no Choice principle; the separate $\mathrm{AC}_\omega$ input above pertains only to constructing the general noncompact divisor bundle.
