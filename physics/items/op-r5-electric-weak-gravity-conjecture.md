---
id: op-r5-electric-weak-gravity-conjecture
kind: open-problem
title: "Electric weak-gravity conjecture in four dimensions"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps: ["def-r5-swampland-eft-claim-data"]
dependency_roles:
  "def-r5-swampland-eft-claim-data": "formulation-prerequisite"
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "The String Landscape, Black Holes and Gravity as the Weakest Force"
      url: "https://arxiv.org/pdf/hep-th/0601001v2"
      locator: "Complete primary paper, PDF pp. 1–4: electric weak-gravity formulations and extremal black-hole motivation."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.S, PDF pp. 94–96, WGC normalization and version distinctions; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Weak Gravity Conjecture, PDF pp. 28–31; electric normalizations and inequivalent versions."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "WGC lecture, PDF pp. 181–185; full lecture notes."
physical_scope: "Open four-dimensional asymptotically flat electric particle WGC for ultraviolet-complete quantum gravity in the displayed Einstein-Maxwell normalization. The qualifying elementary or bound charged excitation is distinct from the classical extremal black-hole reference; lattice, sublattice, tower, magnetic and black-hole-spectrum versions remain separate."
---

## Open problem

Use natural units $\hbar=c=1$. On a smooth four-dimensional Lorentzian spacetime with smooth metric of signature $(-,+,+,+)$, reduced Planck mass $M_P^{-2}=8\pi G_N$, and a smooth compact $U(1)$ connection with local real potential one-forms $A$ and curvature $F=dA$, take the Einstein–Maxwell action to be
$$S=\int_{\mathcal M}d^4x\,\sqrt{-\det(g_{\mu\nu})}\left(\frac{M_P^2}{2}R-\frac{1}{4g^2}F_{\mu\nu}F^{\mu\nu}\right).$$
Here $R$ is the Ricci scalar for $R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho_{\nu\sigma}-\partial_\nu\Gamma^\rho_{\mu\sigma}+\Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma}-\Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}$, indices are raised with $g_{\mu\nu}$, $g>0$ is the gauge coupling, and the matter covariant derivative is $D_\mu=\nabla_\mu-iqA_\mu$. Fix the global form and normalization of compact $U(1)$ so its character lattice is $\mathbb Z$ with unit weight $1$ and $q\in\mathbb Z$; this fixes allowed charges without assuming a unit-charge particle exists; equivalently, normalize electric flux by $q=g^{-2}\int_{S^2_\infty}*F$ with a fixed sphere orientation. A Reissner–Nordström solution here is a static, spherically symmetric, asymptotically flat electrically charged vacuum solution of this action with no cosmological term; it is extremal when its inner and outer horizon radii coincide. Its mass at charge $q$ is $M_{\rm ext}(q)=\sqrt2g|q|M_P$. The weak electric particle version of the weak-gravity conjecture asks whether every ultraviolet-complete quantum-gravity theory admitting this asymptotically flat Einstein–Maxwell regime contains at least one charged particle with $q\ne0$ and $m\leq M_{\rm ext}(q)=\sqrt2g|q|M_P$. Here a counted particle is a dynamical elementary or bound excitation represented by a propagating charged field in a local effective description valid at its mass scale, rather than a macroscopic horizon geometry. Its rest mass $m$ is the stable mass-shell value, or the lower rest-energy threshold with the required soft-photon dressing; the state and infrared mass prescription must be specified. Classical Reissner–Nordström black-hole solutions, including extremal ones, are comparison configurations and do not count as the required particle. Tower, lattice, sublattice and magnetic-cutoff versions are distinct conjectures.

The acronym WGC denotes the weak gravity conjecture. The displayed inequality is non-strict; sharpened versions may require strict inequality. In these conventions $[m]=[M_P]=1$ and $g,q$ are dimensionless. A rescaling of $A$, the minimal charge, or the Planck convention changes the displayed factors and must be translated before comparison. This fixes the particle version; versions counting quantum-corrected black-hole states need their own spectral and extremality prescription. The claim is about at least one particle in a specified charge sector; it does not assert that every allowed lattice charge is realized or that a superextremal particle occurs at every charge.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Arkani-Hamed et al., full paper, pp. 1–4](https://arxiv.org/pdf/hep-th/0601001v2)

[Palti, Weak Gravity Conjecture, pp. 28–31](https://arxiv.org/pdf/1903.06239v3)

## Status

Status review dated 2025-09-05: the bounded record is Arkani-Hamed–Motl–Nicolis–Vafa, PDF pp. 1–4; Palti, PDF pp. 28–31; and Lehnert, §II.S, PDF pp. 94–96. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). These sources present inequivalent WGC versions and evidence for special classes, but do not prove the universal electric bound as stated here. The reported counterexamples apply to particular formulations/settings and are not silently transferred to this fixed charge/action normalization. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.
