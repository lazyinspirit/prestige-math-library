---
id: pthm-td-measurable-canonical-identities
kind: physics-theorem
domain: physics
title: Measurable canonical identities for a dimensionless reference measure
status: published
origin: pipeline
library: physics
dependency_level: 5
deps: [def-td-si-quantities, def-tdmath-measure-integral, post-td-canonical-sampling, thm-tdmath-measurable-canonical-identities]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-measure-integral: mathematical-premise
  post-td-canonical-sampling: physical-assumption
  thm-tdmath-measurable-canonical-identities: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Measurable energy models with a dimensionless reference measure, positive finite partition integral, and compact-parameter local integrable second-moment envelope; no claim is made for an arbitrary phase-space measure or unbounded energy without these hypotheses.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3–1.4 (printed pp. 18–30)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.4 (printed pp. 192–208)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space with dimensionless reference measure, let $E:X\to\mathbb R\,\mathrm J$ be a finite physical energy, and let $J_\beta\subset(0,\infty)$ be an open inverse-temperature set in $\mathrm{J^{-1}}$. Set $E_*=1\,\mathrm J$, $e=E/E_*:X\to\mathbb R$, $b=E_*\beta$, and $J_b=E_*J_\beta$; measurability of $E$ means measurability of the dimensionless numerical coordinate $e$. Suppose $Z(\beta)=\int_Xe^{-\beta E}\,d\mu$ is positive and finite on $J_\beta$, and for each compact $K\subset J_\beta$ there is an integrable $G_K\ge0$ with $(1+|e|^2)e^{-\beta E}=(1+|e|^2)e^{-be}\le G_K$ for every $\beta\in K$. Under the canonical sampling assumption [[post-td-canonical-sampling]], define $p_\beta=e^{-\beta E}/Z$, $\langle E\rangle_\beta=\int E p_\beta\,d\mu$, and $\operatorname{Var}_\beta(E)=\int(E-\langle E\rangle_\beta)^2p_\beta\,d\mu$. Then $Z\in C^2$, $-\partial_\beta\log Z=\langle E\rangle_\beta$, $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$, and the relative Gibbs entropy is finite with $S_\beta=-k_{\mathrm B}\int p_\beta\log p_\beta\,d\mu=k_{\mathrm B}(\log Z+\beta\langle E\rangle_\beta)$. Hence $F_{\mathrm{stat}}=-k_{\mathrm B}T\log Z=\langle E\rangle_\beta-TS_\beta$ for $\beta=(k_{\mathrm B}T)^{-1}$.

## Facts & Assumptions

**Given:** A dimensionless measure space, a measurable energy, positive finite partition integrals, the canonical density, and the stated local integrable envelope.

[F1] [[def-tdmath-measure-integral]]: use the real measurable energy coordinate $e$, whose exponential weights are nonnegative; nonnegative integrals use the simple-function supremum, and signed integrals require absolute integrability. No completeness of the measure space is assumed.

[F2] [[post-td-canonical-sampling]]: with $0<Z(\beta)<\infty$, the density $p_\beta=e^{-\beta E}/Z$ is the adopted canonical preparation relative to $\mu$.

[L1] [[thm-tdmath-measurable-canonical-identities]] (current batch 11 draft): for real measurable energy $e$ and real parameter $b\in J_b$, positive finite $\widetilde Z(b)=\int e^{-be}\,d\mu$ and the compact-interval integrable envelope $(1+|e|^2)e^{-be}$ give $\widetilde Z\in C^2$, finite moments, $-\partial_b\log\widetilde Z=\langle e\rangle_b$, $\partial_b^2\log\widetilde Z=\operatorname{Var}_b(e)$, and absolutely integrable reference-relative entropy $s=\log\widetilde Z+b\langle e\rangle_b$. The current proof is supplied in that draft; its status is not publication acceptance.

[F3] [[def-td-si-quantities]]: $E$ and $\langle E\rangle$ are in joules, $T$ is in kelvins, and $k_{\mathrm B}$ is in $\mathrm{J\,K^{-1}}$, so $\beta$ is in $\mathrm{J^{-1}}$.

[A1] The reference measure is dimensionless, $Z$ is positive finite on the open parameter set, and $(1+|e|^2)e^{-\beta E}$ has the local integrable envelope stated in the Statement.

## Proof

**Given:** The dimensionless reference measure, the measurable energy, the normalized canonical density, and the local envelope.

1.1 Apply [L1] with numerical energy $e=E/E_*$ and $b=E_*\beta$. Any compact interval $K_b\subset J_b$ corresponds to $K_b/E_*\subset J_\beta$, so its domination hypothesis is exactly the stated dimensionless envelope. The equality $be=\beta E$ identifies $\widetilde Z(b)=Z(b/E_*)$ and the normalized density with [F2]. The supplier gives finite first and second moments of $e$; hence $\langle E\rangle_\beta=E_*\langle e\rangle_b$ and $\operatorname{Var}_\beta(E)=E_*^2\operatorname{Var}_b(e)$ are finite. All weighted functions and difference quotients are measurable functions of $e$, so the argument requires no completeness of $\mu$. [F1, F2, F3, L1, A1, algebra]

2.1 Since $Z(\beta)=\widetilde Z(E_*\beta)$, substitution of $\Delta b=E_*\Delta\beta$ in derivative difference quotients multiplies first derivatives by $E_*$ and second derivatives by $E_*^2$. Thus [L1] yields $Z\in C^2$ and the stated log-derivative mean and variance identities in joules and joules squared. The density is unchanged, so its absolutely integrable relative entropy is $s_\beta=\log\widetilde Z+b\langle e\rangle_b=\log Z+\beta\langle E\rangle_\beta$. Multiplying by $k_{\mathrm B}$ gives $S_\beta$ in $\mathrm{J\,K^{-1}}$; using $\beta k_{\mathrm B}=1/T$ gives $F_{\mathrm{stat}}=\langle E\rangle_\beta-TS_\beta=-k_{\mathrm B}T\log Z$. This is conditional on the declared sampling model and the stated hypotheses of the current draft mathematical supplier. [F2, F3, L1, step 1.1, algebra] ∎
