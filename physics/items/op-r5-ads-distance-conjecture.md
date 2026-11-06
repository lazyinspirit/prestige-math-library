---
id: op-r5-ads-distance-conjecture
kind: open-problem
title: "Anti-de Sitter distance conjecture"
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
      locator: "Complete paper, PDF pp. 1–5: AdS distance conjecture, strong supersymmetric form, and distinction from scale separation."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.A, PDF pp. 6–8, AdS distance formulation and examples/caveats; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "AdS/distance lectures, PDF pp. 198–203; full lecture notes."
physical_scope: "Open asymptotic conjecture for a specified d-dimensional AdS family approaching zero curvature, with dimensionless Planck-normalized tower mass; the strong supersymmetric exponent is a separate stronger version."
---

## Open problem

Fix $d\geq3$. Here a $d$-dimensional AdS spacetime is a Lorentzian manifold whose Riemann tensor has constant sectional curvature $-L_{\rm AdS}^{-2}<0$, with convention $R_{\mu\nu\rho\sigma}=-L_{\rm AdS}^{-2}(g_{\mu\rho}g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\rho})$; its global quotient/topology and boundary conditions are additional family data. In particular, $R_{\mu\nu}=-(d-1)L_{\rm AdS}^{-2}g_{\mu\nu}$. In the convention $R_{\mu\nu}=2\Lambda g_{\mu\nu}/(d-2)$ this gives $\Lambda=-(d-1)(d-2)/(2L_{\rm AdS}^2)$. For a specified sequence or family of such $d$-dimensional AdS quantum-gravity vacua with $\Lambda\to0^-$, an infinite tower is conjectured to have characteristic mass $m_{\rm tower}/M_{P,d}\sim(|\Lambda|/M_{P,d}^2)^\alpha$ for fixed positive order-one $\alpha$; the strong version proposes $\alpha=1/2$ for supersymmetric AdS vacua.

ADC abbreviates the AdS distance conjecture, and $M_{P,d}$ is the reduced $d$-dimensional Planck mass of the supplied swampland-claim datum. The parameter $\Lambda$ has mass dimension two; hence both displayed ratios are dimensionless. The notation $\sim$ refers to asymptotic scaling along the specified family, and the tower species and characteristic gap must be identified. The limit is $\Lambda/M_{P,d}^2\to0^-$, not a claim about each individual AdS vacuum. The strong $\alpha=1/2$ version is restricted to the specified supersymmetric class. The separate no-scale-separation question concerns $M_{\rm KK}L_{\rm AdS}$ and is not equivalent to this tower-mass statement.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Lüst, Palti, and Vafa, pp. 1–5](https://arxiv.org/pdf/1906.05225v2)

## Status

Status review dated 2025-09-05: the bounded record is Lüst–Palti–Vafa, PDF pp. 1–5; Agmon–Bedroya–Kang–Vafa, PDF pp. 198–203; and Lehnert, §II.A, PDF pp. 6–8. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). These sources present the tower scaling as conjectural, distinguish the strong supersymmetric exponent, and discuss examples and qualifications without proving the universal family statement. The separate no-scale-separation proposal is not used as proof. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.
