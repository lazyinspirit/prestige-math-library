---
id: def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
title: "Integral of a compactly supported top form"
kind: definition
status: draft
origin: pipeline
deps: ["thm-oriented-chart-integrals-are-coordinate-independent", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary"]
justified_by: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee (16.2) and zero-dimensional paragraph, pp.405–406; Merry Definitions 26.11 and 26.15"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---
## Definition

Assume $\mathrm{AC}_\omega$. For an oriented smooth manifold $M^n$, possibly with boundary, and $\omega\in\Omega_c^n(M)$, choose a smooth partition $(\rho_i)$ subordinate to connected interior or boundary charts $(U_i,\phi_i)$. For $n\geq1$ set
$$\int_M\omega=\sum_i I_{\phi_i}(\rho_i\omega).$$
Each product has compact support in its chart and only finitely many are nonzero, by [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]. For $n=0$ set
$$\int_M\omega=\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p).$$
$\Lambda^0T_p^*M\cong\mathbb R$ has two orientations; define $\varepsilon(p)=+1$ when $1$ is positive in the chosen orientation and $\varepsilon(p)=-1$ when $-1$ is positive.
A zero-manifold is discrete; the singleton open cover of a compact subset has a finite subcover. Thus this sum too is finite. Empty support or empty $M$ gives zero. Independence of the choices is discharged by [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]].
