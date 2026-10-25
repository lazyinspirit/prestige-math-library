---
id: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
title: "Independence of atlas, partition and refinement"
kind: theorem
status: published
origin: pipeline
deps: ["def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form", "thm-oriented-chart-integrals-are-coordinate-independent"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.5, pp.405–406; Merry Lemma 26.12"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

## Facts & Assumptions

[F1] [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]: Assume $\mathrm{AC}_\omega$. For an oriented smooth manifold $M^n$, possibly with boundary, and $\omega\in\Omega_c^n(M)$, choose a smooth partition $(\rho_i)$ subordinate to connected interior or boundary charts $(U_i,\phi_i)$. For $n\geq1$ set $$\int_M\omega=\sum_i I_{\phi_i}(\rho_i\omega).$$ Each product has compact support in its chart and only finitely many are nonzero, by lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form. For $n=0$ set $\int_M\omega=\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p).$ $\Lambda^0T_p^*M\cong\mathbb R$ has two orientations; define $\varepsilon(p)=+1$ when $1$ is positive in the chosen orientation and $\varepsilon(p)=-1$ when $-1$ is positive. A zero-manifold is discrete; the singleton open cover of a compact subset has a finite subcover. Thus this sum too is finite. Empty support or empty $M$ gives zero. Independence of the choices is discharged by thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement.

[F2] [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]: If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

[F3] [[thm-oriented-chart-integrals-are-coordinate-independent]]: Assume $\mathrm{AC}_\omega$. On an oriented smooth $n$-manifold, including $n=0$ and genuine boundary, a smooth top form with compact support contained in two connected charts has the same signed chart integral in both charts.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Let $(\rho_i)$ and $(\tau_j)$ be two subordinate partitions. Near $K=\operatorname{supp}\omega$ only finitely many indices from either family occur. Hence $\rho_i\omega=\sum_j\rho_i\tau_j\omega$ and $\tau_j\omega=\sum_i\rho_i\tau_j\omega$ are finite identities, including when $K$ is empty. [F1, F2]

2.1 The support of $\rho_i\tau_j\omega$ is compact and contained in the intersection of its two chart domains. Its integral can therefore be computed in either chart with the same value. By linearity of chart integrals, the two original sums both equal $\sum_{i,j} I(\rho_i\tau_j\omega)$. This also proves invariance under refinement. [F3, step 1.1]

3.1 For locality take the charts near $K$ inside $U$ and complete their cover by $M\setminus K$; terms supported in the latter vanish. Equivalently the same product-partition argument compares a partition on $U$ to one on $M$ near $K$. In dimension zero both sides are the same finite signed sum over $K$, including individual points and empty sums. [F1, F2, step 2.1] ∎
