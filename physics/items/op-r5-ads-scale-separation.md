---
id: op-r5-ads-scale-separation
kind: open-problem
title: "Parametric AdS scale-separation conjecture"
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
    - title: "AdS and the Swampland"
      url: "https://arxiv.org/pdf/1906.05225v2"
      locator: "Complete paper, PDF pp. 1–5: no-scale-separation proposal distinguished from the AdS distance conjecture."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.A, PDF pp. 6–11, AdS distance and scale-separation discussion; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Complete 253-page lecture-note PDF, version 2 (5 March 2023). Read the introduction (PDF pp. 5–8), swampland framing (pp. 138–143), global symmetry/completeness/cobordism (pp. 162–177), WGC (pp. 181–185), AdS/distance (pp. 198–203), and de Sitter/TCC (pp. 214–220)."
physical_scope: "Open no-parametric-scale-separation conjecture for a specified controlled class of AdS compactifications, distinct from the tower-mass scaling in the AdS distance conjecture."
---

## Open problem

Fix $d\geq3$. A lower-dimensional AdS factor is a Lorentzian $d$-manifold with constant sectional curvature $-L_{\rm AdS}^{-2}<0$, so $R_{\mu\nu\rho\sigma}=-L_{\rm AdS}^{-2}(g_{\mu\rho}g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\rho})$; its global quotient, topology and boundary conditions are fixed across each family. For each compactification, supply the higher-dimensional metric ansatz, any warp factor, and the Weyl rescaling to the lower-dimensional Einstein metric $g_E$ used for $L_{\rm AdS}$. Also supply the internal Hilbert space $\mathcal H$ (including its measure), and the nonnegative self-adjoint mass-squared operator $A_{\rm KK}$ with its domain and boundary conditions, obtained from the stated linearized higher-dimensional field equations and kinetic normalization for the chosen Kaluza–Klein (KK) tower. Require compact resolvent, a zero mode and a least positive eigenvalue $\mu_1>0$, measured in the mass units of $g_E$, and define $M_{\rm KK}:=\sqrt{\mu_1}$. This defines the tower scale used in this question; the chosen field sector and any lighter omitted towers must be stated. For example, for a minimally coupled massless scalar on an unwarped product $g_{d+k}=g_E\oplus\gamma_E$ with connected compact smooth internal Riemannian manifold $(K,\gamma_E)$ without boundary and of dimension $k\geq1$, take $\mathcal H=L^2(K,d\mathrm{vol}_{\gamma_E})$ and $A_{\rm KK}=-\Delta_{K,\gamma_E}$ with domain $H^2(K)$. Here $H^2(K)$ is the space of functions with square-integrable weak derivatives through order two. The metric $\gamma_E$ includes the constant normalization that puts the external factor in the declared Einstein frame. For a warped, singular or boundary compactification, neither the unweighted scalar Laplacian nor its unconverted eigenvalues may be substituted for the supplied mass operator. “Controlled” means that the moduli, tadpole/charge constraints, localized-source profiles and backreaction, and omitted curvature, string-loop and higher-derivative corrections obey stated bounds throughout the family. For a specified class of these controlled AdS compactifications, is there no parametric family with $M_{\rm KK}L_{\rm AdS}\to\infty$? This is a separate conjecture from the ADC; the allowed singular and non-supersymmetric classes must be stated.

ADC abbreviates the AdS distance conjecture. A parametric family and its control bounds must be stated; in particular, specify moduli stabilization, integrated flux/source charge cancellation, source backreaction, and the expansion controlling omitted corrections. $M_{\rm KK}L_{\rm AdS}$ is dimensionless and compares compactification scales; it is not the ADC's tower-mass versus $|\Lambda|$ scaling.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Lüst, Palti, and Vafa, pp. 1–5](https://arxiv.org/pdf/1906.05225v2)

## Status

Status review dated 2025-09-05: the bounded record is Lüst–Palti–Vafa, PDF pp. 1–5, and Lehnert, §II.A, PDF pp. 6–11. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8); its discussion distinguishes scale separation from AdS distance and reports examples/counterexamples for related strong forms. These sources do not prove a universal no-parametric-family claim for every controlled class, whose definition and allowed singular/non-supersymmetric cases remain formulation-dependent. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.
