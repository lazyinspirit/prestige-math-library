---
id: lem-qftx-n2-hypermultiplet-gauge-invariant-couplings
kind: lemma
title: Gauge invariance of hypermultiplet mass and adjoint couplings
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions
deps:
  - def-qftx-n1-vector-superfield
dependency_roles:
  def-qftx-n1-vector-superfield: formulation-prerequisite
physical_scope: "A local algebraic verification of supergauge invariance for a dual-pairing mass term and an adjoint-coupled chiral bilinear; it asserts no quantum or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.9, printed pp. 45–48: non-Abelian chiral-matter transformations and the gauge-covariant superspace action."
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§2.9, equation (2.60): the N=2 hypermultiplet superpotential coupling and mass term."
---

## Lemma

Let $V_R$ be a nonzero finite-dimensional complex vector space, $V_R^*$ its complex dual, and $U_R\in GL(V_R)$ an invertible even matrix-valued chiral superfield, where $GL(V_R)$ is the group of invertible complex-linear maps on $V_R$. Let $Q$ and $\widetilde Q$ be even chiral superfields valued in $V_R$ and $V_R^*$, represented locally as a column and a row, and let $M_R$ be an even chiral endomorphism-valued superfield on $V_R$. Suppose the chiral supergauge transformation acts by

$$Q'=U_RQ,\qquad \widetilde Q'=\widetilde Q U_R^{-1},\qquad M_R'=U_RM_RU_R^{-1}.$$

Then the pointwise superspace bilinears $\widetilde Q Q$ and $\widetilde Q M_R Q$ are invariant. In particular, if $M_R$ is the endomorphism induced by an adjoint chiral field $\Phi$, then the superpotential $W_G=\sqrt2\,\widetilde Q M_RQ+m\widetilde Q Q$ is gauge invariant for every constant complex mass $m$. When $[Q]=[\widetilde Q]=[M_R]=1$ and $[m]=1$ in mass dimensions, $W_G$ has dimension three.

## Lemma references

[[def-qftx-n1-vector-superfield]]

## Facts & Assumptions

**Given:** The transformation laws in the Lemma, with all products evaluated in one superspace fiber.

[F1] [[def-qftx-n1-vector-superfield]]: a chiral matter superfield in representation $R$ transforms by $\Phi_R\mapsto e^{i\Lambda_R}\Phi_R$ under an admissible chiral supergauge parameter.

## Proof

1.1 The dual inverse transformation and associativity give $\widetilde Q'Q'=\widetilde Q U_R^{-1}U_RQ=\widetilde Q Q$, so the mass bilinear is invariant. [given, F1, algebra]

1.2 Using the conjugation law for $M_R$, $\widetilde Q'M_R'Q'=\widetilde Q U_R^{-1}(U_RM_RU_R^{-1})U_RQ=\widetilde Q M_RQ$. Thus the adjoint-coupled bilinear is invariant. [given, algebra]

2.1 A constant linear combination of the two invariant bilinears is invariant; with the stated field and mass dimensions both terms in $W_G$ have dimension three. [given, step 1.1, step 1.2, algebra] ∎
