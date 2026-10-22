---
id: thm-ip-local-support-from-one-sided-vanishing
kind: theorem
title: "Local support from one-sided vanishing and visible conormal data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-double-fibration-transform
  - def-ip-bolker-condition
  - def-ip-analytic-wavefront-fbi-transform
  - thm-ip-analytic-wavefront-recovery-under-bolker
  - lem-ip-one-sided-analytic-support-continuation
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "Theorem 1.3, printed p. 5; proof by Theorem 1.2 and §6.1, printed pp. 42–43."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§8, Theorems 8.2–8.3 and flat one-sided support proof, printed pp. 52–58."
proof_strategy: direct
---

## Statement

Let $R$ be an analytic double-fibration transform, let $(z_0,\zeta_0;x_0,\eta_0)\in C_Z$, and let $\Sigma$ be a $C^2$ hypersurface through $x_0$ with $(x_0,\eta_0)\in N^*\Sigma\setminus0$. Let $f\in\mathcal E'(X)$ vanish on one side of $\Sigma$ near $x_0$. If the pointwise Bolker condition holds at $(z_0,\zeta_0;x_0,\eta_0)$ and $Rf=0$ in a neighborhood of $z_0$, then $f=0$ in a neighborhood of $x_0$.

## Statement references

[[def-ip-analytic-double-fibration-transform|Analytic double-fibration transform]]

[[def-ip-bolker-condition|Pointwise Bolker condition]]

[[def-ip-analytic-wavefront-fbi-transform|Gaussian FBI criterion]]

[[thm-ip-analytic-wavefront-recovery-under-bolker|Analytic wavefront recovery]]

[[lem-ip-one-sided-analytic-support-continuation|One-sided support continuation]]

## Facts & Assumptions

**Given:** The transform $R$, a relation point satisfying pointwise Bolker, a $C^2$ hypersurface $\Sigma$, and a compactly supported distribution $f$ with the stated vanishing and data hypotheses.

[F1] [[def-ip-analytic-double-fibration-transform]]: $Rf$ is a distributional density on the data manifold.

[F2] [[thm-ip-analytic-wavefront-recovery-under-bolker]]: if the data covector is absent from $\operatorname{WF}_A(Rf)$ under pointwise Bolker, then the paired object covector is absent from $\operatorname{WF}_A(f)$.

[F3] [[lem-ip-one-sided-analytic-support-continuation]]: one-sided vanishing plus absence of either oriented analytic conormal implies local vanishing.

[F4] [[def-ip-analytic-wavefront-fbi-transform]]: exponential decay of the localized Gaussian FBI pairings is the criterion for absence from $\operatorname{WF}_A$.

## Proof

**Given:** The data in the statement.

1.1 Choose a data cutoff supported inside the neighborhood on which $Rf=0$ and equal to one near $z_0$. Its localized FBI test densities are supported where the distribution vanishes, so all the pairings are exactly zero for every frequency. By [F4], this gives $(z_0,\zeta_0)\notin\operatorname{WF}_A(Rf)$. [F1, F4, given]

2.1 By [F2], step 1.1 gives $(x_0,\eta_0)\notin\operatorname{WF}_A(f)$. Applying the one-sided continuation implication [F3] then gives $f=0$ near $x_0$. All their hypotheses hold: the relation point has pointwise Bolker, $f$ has compact support, and the same nonzero object covector is a conormal to the supplied $C^2$ hypersurface. [F2, F3, step 1.1, given] ∎

