---
id: post-tgr-unregulated-point-attempt
kind: postulate
title: "Distinct unregulated point-gravity attempted sampling"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-gravitating-phase-reference
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-gravitating-phase-reference: mathematical-premise
justified_by: []
physical_scope: "Two labelled positive Newtonian point masses in a bounded box with interior and no short-distance cutoff; canonical weight is attempted without assuming a finite normalization. Collision configurations lie outside any asserted controlled weak-field model."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete 41-page manuscript retrieved; §2(ii), PDF pp. 4–5, discusses the point-particle short-distance collapse obstruction and the need for a cutoff. The exact two-particle canonical divergence used here is proved in the cited mathematical supplier and in the consuming counterexample."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–1.3.1, PDF pp. 23–26, for canonical weights and classical phase-space integrals."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

In SI units, take two labelled masses $m_1,m_2>0$ in $\mathrm{kg}$, positions $q_1,q_2$ in a bounded box $B\subset\mathbb R^3$ with nonempty interior, momenta $p_1,p_2$ in $\mathrm{kg\,m\,s^{-1}}$, and $G>0$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$. Fix $h_*>0$ in $\mathrm{J\,s}$ as the phase-action reference and $\beta>0$ in $\mathrm{J^{-1}}$, with the unit conventions of [[def-tgr-framework-units]] and [[def-tgr-gravitating-phase-reference]]. The labelled-pair phase space is $\Gamma_{12}=B^2\times\mathbb R^6$ with reference measure
$$d\nu_{12}=h_*^{-6}\,d^3q_1\,d^3q_2\,d^3p_1\,d^3p_2.$$
On the off-diagonal domain $q_1\ne q_2$, adopt the unregulated point Hamiltonian
$$H^{\rm pt}_{12}(q,p)=\frac{|p_1|^2}{2m_1}+\frac{|p_2|^2}{2m_2}-\frac{Gm_1m_2}{|q_1-q_2|}.$$
Attempt canonical sampling with weight $e^{-\beta H^{\rm pt}_{12}}$, but do not assume its integral is finite or that the normalized probability law exists. If $m_1=m_2$, the identical-particle reference measure of [[def-tgr-gravitating-phase-reference]] is $d\nu_{12}/2$; this constant convention does not alter whether the integral converges.

The masses, $G$, box, action reference and $\beta$ are fixed inputs of this attempted model; $H^{\rm pt}_{12}$ is defined by the formula. A finite partition function or probability law is not a primitive input and is not postulated.

This is a distinct unregulated model, not the softened preparation with $a$ set to zero after normalization. Arbitrarily small separations are not asserted to remain in a controlled Newtonian weak-field regime. The attempted weight is a model specification, not a reported physical preparation or an assertion of successful thermalization.
