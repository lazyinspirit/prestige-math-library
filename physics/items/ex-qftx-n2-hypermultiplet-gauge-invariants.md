---
id: ex-qftx-n2-hypermultiplet-gauge-invariants
kind: example
title: Gauge-invariant bilinears in one SU(2) hypermultiplet
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions-examples
deps:
  - def-qftx-n1-vector-superfield
  - post-qftx-n2-vector-hypermultiplet-model
dependency_roles:
  def-qftx-n1-vector-superfield: formulation-prerequisite
  post-qftx-n2-vector-hypermultiplet-model: physical-assumption
physical_scope: "A local algebraic check of the mass and cubic superpotential terms in the classical N=2 SU(2) model for one fundamental hypermultiplet; it is not a quantum or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Use the defining representation $R=\mathbb C^2$ with group homomorphism $\rho_{\mathrm{fund}}:SU(2)\to U(2)$ given by $\rho_{\mathrm{fund}}(u)=u$ acting by matrix multiplication. In each superspace fiber let $Q$ be a column in $R$, let $\widetilde Q$ be a row in $R^*$, and let $\Phi$ act by $\rho_{\mathrm{fund}*}(\Phi)$. Under any chiral supergauge transformation $U_R=e^{i\Lambda_R}$, set $Q'=U_RQ$, $\widetilde Q'=\widetilde Q U_R^{-1}$, and $\Phi'=U_R\Phi U_R^{-1}$. Then the mass bilinear $\widetilde Q Q$ and cubic bilinear $\widetilde Q\Phi Q$ in the adopted $N=2$ superpotential are gauge invariant. This checks gauge invariance of these two terms only; it does not prove the extended supersymmetry variation.

## Example references

[[post-qftx-n2-vector-hypermultiplet-model]]

[[def-qftx-n1-vector-superfield]]

## Facts & Assumptions

**Given:** The fundamental representation and chiral supergauge transformations in the Example, under the adopted $N=2$ classical model.

[A1] [[post-qftx-n2-vector-hypermultiplet-model]]: one hypermultiplet has chiral superfields $Q$ in $R$ and $\widetilde Q$ in $R^*$, with superpotential $\sqrt2\,\widetilde Q\Phi Q+m\widetilde Q Q$.

[F1] [[def-qftx-n1-vector-superfield]]: in a representation $R$, a chiral matter superfield transforms as $\Phi_R\mapsto e^{i\Lambda_R}\Phi_R$ under an admissible chiral supergauge parameter.

## Verification

**Given:** [A1], [F1], and the fundamental representation $U=e^{i\Lambda_R}$ with its dual action on $R^*$.

1.1 The dual action is right multiplication by $U^{-1}$, so $\widetilde Q'Q'=\widetilde Q U^{-1}UQ=\widetilde Q Q$. Thus the mass bilinear is invariant. [given, A1, F1, algebra]

2.1 The adjoint action gives $\widetilde Q'\Phi'Q'=\widetilde Q U^{-1}(U\Phi U^{-1})UQ=\widetilde Q\Phi Q$. Hence the cubic bilinear, and therefore the stated linear combination of mass and cubic terms, is invariant. [given, A1, F1, step 1.1, algebra] ∎

