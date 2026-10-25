---
id: lem-qftx-n4-adjoint-cubic-gauge-invariance
kind: lemma
title: Gauge invariance of the adjoint cubic superpotential
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
  - post-qftx-nonabelian-yang-mills-model
dependency_roles:
  def-qftx-n1-vector-superfield: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: mathematical-premise
physical_scope: "A local matrix-algebra verification that the adjoint cubic chiral polynomial is invariant under the selected SU(2) supergauge action; it asserts no quantum or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§§2.4 and 2.9–2.10: N=4 adjoint field content, the renormalizable action, and its cubic invariant."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.9, printed pp. 45–48: non-Abelian gauge transformations and gauge-invariant chiral field-strength terms."
---

## Lemma

Represent $\mathfrak{su}(2)$ by anti-Hermitian traceless $2\times2$ matrices, use the matrix-commutator bracket $[X,Y]=XY-YX$, and define $\kappa_{\mathbb C}(X,Y)=-2\operatorname{Tr}_2(XY)$ on its complexification. Let $\Phi_1,\Phi_2,\Phi_3$ be even adjoint chiral superfields and let $\Lambda$ be an even chiral gauge parameter in the complexified Lie algebra. Under the local supergauge transformation $\Phi_i'=e^{i\Lambda}\Phi_i e^{-i\Lambda}$, the chiral polynomial $W_{\mathrm{ad}}=\kappa_{\mathbb C}(\Phi_1,[\Phi_2,\Phi_3])$ is invariant pointwise in superspace. Therefore any constant multiple of this cubic is an admissible gauge-invariant superpotential term.

## Lemma references

[[def-qftx-n1-vector-superfield]]

[[post-qftx-nonabelian-yang-mills-model]]

## Facts & Assumptions

**Given:** The matrix bracket, trace form, and simultaneous adjoint supergauge transformation in the Lemma.

[F1] [[def-qftx-n1-vector-superfield]]: a chiral matter superfield in representation $R$ transforms by $\Phi_R\mapsto e^{i\Lambda_R}\Phi_R$.

[F2] [[post-qftx-nonabelian-yang-mills-model]]: $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ and this form is $\operatorname{Ad}$-invariant.

## Proof

1.1 For matrices, direct expansion gives $\operatorname{ad}_\Lambda([X,Y])=\operatorname{ad}_{[\Lambda,X]}Y+\operatorname{ad}_X([\Lambda,Y])$. Also, cyclicity of trace gives $\kappa_{\mathbb C}([\Lambda,X],Y)+\kappa_{\mathbb C}(X,[\Lambda,Y])=-2\operatorname{Tr}_2(\Lambda XY-XY\Lambda)=0$. Hence the infinitesimal adjoint action preserves both the bracket and $\kappa_{\mathbb C}$. [given, F2, algebra]

2.1 Set $Y=[\Phi_2,\Phi_3]$. By the bracket identity in step 1.1, $\delta_\Lambda W_{\mathrm{ad}}=i\kappa_{\mathbb C}([\Lambda,\Phi_1],Y)+i\kappa_{\mathbb C}(\Phi_1,\operatorname{ad}_\Lambda Y)=0$ by the trace cancellation in that step. [given, F2, step 1.1, algebra]

3.1 Let $\delta_\Lambda$ be the derivation of the polynomial algebra on the three fields with $\delta_\Lambda\Phi_i=i[\Lambda,\Phi_i]$. Step 2.1 gives $\delta_\Lambda W_{\mathrm{ad}}=0$, so $\delta_\Lambda^kW_{\mathrm{ad}}=0$ for every $k\geq1$. The exponential $e^{\delta_\Lambda}$ acts by the finite substitution $\Phi_i\mapsto e^{i\Lambda}\Phi_i e^{-i\Lambda}$, since $e^{i\Lambda}Xe^{-i\Lambda}=e^{i\operatorname{ad}_\Lambda}X$ by the matrix-exponential power series. Hence the finite supergauge transformation leaves $W_{\mathrm{ad}}$ unchanged. [given, F1, step 2.1, algebra] ∎
