---
id: def-type-i-omega-orientifold-projection
kind: definition
title: "Type I Omega Orientifold Projection"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
category: string-theory
physical_scope: "Perturbative flat ten-dimensional Type I defined as Type IIB modulo worldsheet orientation reversal with the negative-charge O9-minus Chan–Paton convention. The definition fixes the listed massless projections and open D9 gauge algebra; it is not a general orientifold formula or a tadpole-cancellation result."
deps:
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
dependency_roles:
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "K. S. Gimon and J. Polchinski, Consistency Conditions for Orientifolds, hep-th/9601038v3"
      url: "https://arxiv.org/pdf/hep-th/9601038v3"
      locator: "§§1–2, PDF pp. 1–7: worldsheet orientation reversal, massless closed-string projection, and Chan–Paton action."
    - title: "Joseph Polchinski, Shyamoli Chaudhuri, and Clifford V. Johnson, Notes on D-Branes, hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.6 and Lecture III §§3.1–3.2, full 47-page lecture notes: unoriented strings, orientifolds, and Type I projection conventions."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the flat ten-dimensional perturbative Type I model obtained from the Type IIB RNS theory of [[def-rns-spin-structures-and-sectors]] with the supersymmetric Type IIB GSO choice of [[def-rns-gso-projection]]. Let $\Omega$ reverse worldsheet orientation, exchange left- and right-moving closed-string data, and identify states invariant under the combined action. The quotient sums over unoriented closed surfaces; a crosscap is the worldsheet identification used to represent an orientation-reversing cycle.

Fix the standard negative-charge O9-minus Type I convention, where O9-minus denotes the space-filling negative-RR-charge orientifold nine-plane. Take $M=\mathbb R^{1,9}$ with flat background metric $\eta=\operatorname{diag}(-1,1,\ldots,1)$, length-valued coordinates, and natural units $\hbar=c=1$. The massless field slots are smooth real fields on $M$: a Lorentzian metric $G\in\Gamma(\operatorname{Sym}^2T^*M)$ with dimensionless components, a dimensionless scalar dilaton $\Phi:M\to\mathbb R$, an NS two-form potential $B_2\in\Omega^2(M)$, and RR potentials $C_q\in\Omega^q(M)$ for $q\in\{0,2,4\}$. In the adopted string normalization these potential components are dimensionless. This item fixes their massless field slots and $\Omega$ parities only; it supplies no action, field equations, or flux quantization rule. On the Type IIB massless closed fields, the projection keeps $G_{MN}$, $\Phi$, and $C_2$, and removes $B_2$, $C_0$, and $C_4$. These are the stated massless-sector parities; no general parity rule for other backgrounds is asserted.

For $N\in\mathbb Z_{\geq0}$ space-filling D9-branes (branes whose worldvolume fills the ten-dimensional target), let $\lambda\in\operatorname{Mat}_N(\mathbb C)$ be the dimensionless Chan–Paton matrix labeling open-string endpoint states, and let $\gamma_\Omega$ be a nonsingular dimensionless Chan–Paton matrix implementing $\Omega$ on endpoint labels. On a massless open-string vector state define
$$
\Omega:\lambda\longmapsto-\gamma_\Omega\lambda^T\gamma_\Omega^{-1}.
$$
For the standard O9-minus choice take $\gamma_\Omega^T=+\gamma_\Omega$; in a basis with $\gamma_\Omega=I$, the $\Omega$-invariant complex state-label space is $\{\lambda\in\operatorname{Mat}_N(\mathbb C):\lambda=-\lambda^T\}$, the complexification of the gauge algebra. Choose anti-Hermitian generators for the real gauge algebra, so $\lambda^\dagger=-\lambda$ as well as $\lambda=-\lambda^T$. These equations imply $\overline\lambda=\lambda$, making the real generators precisely the real skew-symmetric matrices, which form $\mathfrak{so}(N)$. The conventional connected Chan–Paton group label is $SO(N)$. Tadpole cancellation is a separate result.

## Definition references

[[def-rns-spin-structures-and-sectors]]

[[def-rns-gso-projection]]

[Gimon and Polchinski, §§1–2](https://arxiv.org/pdf/hep-th/9601038v3)

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.6](https://arxiv.org/pdf/hep-th/9602052v2)
