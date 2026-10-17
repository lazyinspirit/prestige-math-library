---
id: cex-tgr-physical-unregulated-collapse
kind: counterexample
title: "Point-particle preparation has no finite-box canonical law"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-unregulated-point-attempt
  - thm-tgr-gravity-collapse-nonextensivity
dependency_roles:
  post-tgr-unregulated-point-attempt: physical-assumption
  thm-tgr-gravity-collapse-nonextensivity: mathematical-premise
justified_by: []
physical_scope: "Refutes finite-volume sufficiency for the exact unregulated two-point Newtonian canonical weight, for arbitrary positive masses. The collision limit is outside a controlled weak-field Newtonian regime and is not asserted to describe a real short-distance source."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete 41-page manuscript retrieved; §2(ii), PDF pp. 4–5, identifies point-particle short-distance collapse and the role of cutoffs. The exact two-particle normalization failure is established from the current local theorem and a direct unequal-mass estimate."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–2.1, PDF pp. 23–26 and from p. 38, for canonical weights and phase-space integration conventions."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---


## Statement refuted

The claim refuted is that an outer finite box alone guarantees a normalizable canonical law for the unregulated two-point Newtonian gravity model. For any labelled positive masses $m_1,m_2$, bounded box $B\subset\mathbb R^3$ with nonempty interior, and $\beta>0$, define the collision-free phase domain
$$\Gamma_{12}^{\rm cf}:=\{(q_1,q_2,p_1,p_2)\in B^2\times\mathbb R^6:q_1\ne q_2\}$$
and let $\nu_{12}^{\rm cf}$ be the restriction of $\nu_{12}$ to this domain. The model in [[post-tgr-unregulated-point-attempt]] has
$$Z_{12}(\beta)=\int_{\Gamma_{12}^{\rm cf}}e^{-\beta H^{\rm pt}_{12}}d\nu_{12}^{\rm cf}=+\infty.$$
Thus the attempted weight cannot be normalized to a probability density.

## Facts & Assumptions

**Given:** The labelled two-particle phase space, $h_*^{-6}$ reference measure, off-diagonal Hamiltonian, and $\beta>0$ from the adopted unregulated model. The integral is taken on the collision-free phase domain, where the Hamiltonian is defined, with the restricted reference measure.

[A1] The Postulate defines $H^{\rm pt}_{12}=|p_1|^2/(2m_1)+|p_2|^2/(2m_2)-Gm_1m_2/|q_1-q_2|$ on $\Gamma_{12}^{\rm cf}$, with $d\nu_{12}^{\rm cf}$ the restriction of $h_*^{-6}d^3q_1d^3q_2d^3p_1d^3p_2$ to that domain. ([[post-tgr-unregulated-point-attempt]])

[F1] For two equal positive masses in a bounded three-dimensional box with nonempty interior, the point Hamiltonian's canonical partition integral diverges for every $\beta>0$, relative to the identical-particle phase measure. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 If $m_1=m_2=m$, the labelled-pair measure restricted to $\Gamma_{12}^{\rm cf}$ in [A1] is twice the identical-particle reference measure restricted to the same domain, $d\nu_2=d\nu_{12}^{\rm cf}/2$. The equal-mass divergence in [F1] therefore also holds for $d\nu_{12}^{\rm cf}$, since multiplication of an infinite nonnegative integral by $2$ leaves it infinite. [given, A1, F1, algebra]

1.2 Suppose $m_1\ne m_2$. Choose an interior point $q_0\in B$ and a length $\ell>0$ metres small enough that, for all sufficiently large integers $n$, the disjoint cubes $Q_{1,n}=q_0+(0,\ell/n)^3$ and $Q_{2,n}=q_0+(2\ell/n,0,0)+(0,\ell/n)^3$ lie in $B$. For $q_1\in Q_{1,n}$ and $q_2\in Q_{2,n}$, their separation satisfies $\ell/n<|q_1-q_2|\le\sqrt{11}\ell/n$. Fix a momentum scale $p_0>0$ in $\mathrm{kg\,m\,s^{-1}}$ and restrict both momenta to $[-p_0,p_0]^3$; there the kinetic energy is at most $K_0=3p_0^2/(2m_1)+3p_0^2/(2m_2)$. Hence on this positive-volume phase subset, $H^{\rm pt}_{12}\le K_0-Gm_1m_2n/(\sqrt{11}\ell)$ and the Boltzmann weight is at least $e^{-\beta K_0}e^{\beta Gm_1m_2n/(\sqrt{11}\ell)}$. [given, A1, construct, algebra]

2.1 The restricted subset in step 1.2 lies in $\Gamma_{12}^{\rm cf}$, so its restricted reference measure is $h_*^{-6}(\ell/n)^6(2p_0)^6$. Thus $$Z_{12}(\beta)\ge h_*^{-6}(\ell/n)^6(2p_0)^6e^{-\beta K_0}e^{\beta Gm_1m_2n/(\sqrt{11}\ell)}$$ for every sufficiently large $n$. The right-hand side tends to $+\infty$ because exponential growth dominates $n^6$; therefore the full collision-free nonnegative integral is infinite for $m_1\ne m_2$. The equal-mass case was established in step 1.1, so no normalized canonical law exists for any positive mass pair in this model. [A1, step 1.1, step 1.2, algebra] ∎
