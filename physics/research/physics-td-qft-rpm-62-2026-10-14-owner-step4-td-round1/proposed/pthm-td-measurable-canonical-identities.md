---
id: pthm-td-measurable-canonical-identities
kind: physics-theorem
domain: physics
title: Measurable canonical identities for a dimensionless reference measure
status: draft
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
  precheck: pass
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space with dimensionless reference measure, let $E:X\to\mathbb R\,\mathrm J$ be measurable, and let $J_\beta\subset(0,\infty)$ be open. Fix $E_*=1\,\mathrm J$, define the dimensionless measurable energy $e:=E/E_*$ and dimensionless parameter $b:=E_*\beta$, and set $J_b:=E_*J_\beta$. Suppose $Z(\beta)=\int_Xe^{-\beta E}\,d\mu$ is positive and finite on $J_\beta$, and for each compact $K\subset J_\beta$ there is an integrable $G_K\ge0$ with $(1+|e|^2)e^{-\beta E}\le G_K$ for every $\beta\in K$. Under the canonical sampling assumption [[post-td-canonical-sampling]], define $p_\beta=e^{-\beta E}/Z$, $\langle E\rangle_\beta=\int E p_\beta\,d\mu$, and $\operatorname{Var}_\beta(E)=\int(E-\langle E\rangle_\beta)^2p_\beta\,d\mu$. Then $Z\in C^2$, $-\partial_\beta\log Z=\langle E\rangle_\beta$, $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$, and the relative Gibbs entropy is finite with $S_\beta=-k_{\mathrm B}\int p_\beta\log p_\beta\,d\mu=k_{\mathrm B}(\log Z+\beta\langle E\rangle_\beta)$. Hence $F_{\mathrm{stat}}=-k_{\mathrm B}T\log Z=\langle E\rangle_\beta-TS_\beta$ for $\beta=(k_{\mathrm B}T)^{-1}$.

## Facts & Assumptions

**Given:** A dimensionless measure space, a measurable energy, positive finite partition integrals, the canonical density, and the stated local integrable envelope.

[F1] [[def-tdmath-measure-integral]]: measurable nonnegative energies and their nonnegative integrals are interpreted on the specified measure space; signed integrals require absolute integrability.

[F2] [[post-td-canonical-sampling]]: with $0<Z(\beta)<\infty$, the density $p_\beta=e^{-\beta E}/Z$ is the adopted canonical preparation relative to $\mu$.

[L1] [[thm-tdmath-measurable-canonical-identities]] (current batch 11 draft): for measurable numerical energy $e$, dimensionless parameter $b$, and $\widetilde Z(b)=\int e^{-be}\,d\mu$, under positive finite partition integrals and the compact-interval domination by $(1+|e|^2)e^{-be}$, $\widetilde Z$ is $C^2$, numerical mean and variance are its log derivatives, and relative entropy is finite with value $\log\widetilde Z+b\langle e\rangle$. Its full current proof was inspected; its draft status remains conditional.

[F3] [[def-td-si-quantities]]: $E$ and $\langle E\rangle$ are in joules, $T$ is in kelvins, and $k_{\mathrm B}$ is in $\mathrm{J\,K^{-1}}$, so $\beta$ is in $\mathrm{J^{-1}}$.

[A1] The reference measure is dimensionless, $Z$ is positive finite on the open interval, and $(1+|e|^2)e^{-\beta E}$ has the local integrable envelope stated in the Statement.

## Proof

**Given:** The dimensionless reference measure, the measurable energy, the normalized canonical density, and the local envelope.

1.1 Apply [L1] to measurable numerical energy $e$, parameter $b\in J_b$, and $\widetilde Z(b)=\int e^{-be}\,d\mu$. The identity $be=\beta E$ gives $Z(\beta)=\widetilde Z(E_*\beta)$. The linear change of parameter takes each compact interval in $J_\beta$ to a compact interval in $J_b$, so the stated dimensionless moment envelope is exactly [L1]'s hypothesis. The density in [F2] is therefore normalized and has finite first and second energy moments. [F1, F2, F3, L1, A1]

2.1 Applying [L1] yields $\widetilde Z\in C^2$ and its numerical-energy log derivatives. The linear chain rule gives $-\partial_\beta\log Z=E_*\langle e\rangle=\langle E\rangle$ and $\partial_\beta^2\log Z=E_*^2\operatorname{Var}(e)=\operatorname{Var}(E)$, and the finite relative entropy formula. Multiplying the dimensionless entropy by $k_{\mathrm B}$ gives $S_\beta=k_{\mathrm B}(\log Z+\beta\langle E\rangle_\beta)$; since $\beta k_{\mathrm B}=1/T$, rearranging gives $F_{\mathrm{stat}}=\langle E\rangle_\beta-TS_\beta=-k_{\mathrm B}T\log Z$. This conclusion is conditional on the draft mathematical supplier. [F2, F3, L1, step 1.1, algebra] ∎
