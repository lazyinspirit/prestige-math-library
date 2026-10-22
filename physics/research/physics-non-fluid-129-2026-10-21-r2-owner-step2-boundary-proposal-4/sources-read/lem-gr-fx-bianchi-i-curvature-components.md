---
id: lem-gr-fx-bianchi-i-curvature-components
kind: lemma
title: "Curvature components of the diagonal Bianchi I metric"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-bianchi-i-data
  - def-gr-fx-bianchi-i-curvature
dependency_roles:
  def-gr-fx-bianchi-i-data: mathematical-premise
  def-gr-fx-bianchi-i-curvature: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
    - title: "Diego L. Cáceres, Leonardo Castañeda, and Juan M. Tejeiro, Shear Dynamics in Bianchi I Cosmology, arXiv:1003.3491v1 (2010), Section 2, equations (2.1)–(2.2), printed p. 2 (PDF p. 3)"
      url: "https://arxiv.org/pdf/1003.3491"
verification:
  precheck: pending
---

## Statement

For a diagonal Bianchi I datum, write $H_\Sigma:=H_1+H_2+H_3=3H$. In every local quotient chart, the only nonzero Christoffel symbols are $\Gamma^0{}_{ii}=a_i^2H_i/c^2$ and $\Gamma^i{}_{0i}=\Gamma^i{}_{i0}=H_i$. The possibly nonzero lowered curvature components are exactly those obtained from the following values by the displayed sign reversals:

$$R_{0i0i}=R_{i0i0}=-a_i^2(\dot H_i+H_i^2),\qquad R_{0ii0}=R_{i00i}=a_i^2(\dot H_i+H_i^2),$$

$$R_{ijij}=R_{jiji}=\frac{a_i^2a_j^2}{c^2}H_iH_j,\qquad R_{ijji}=R_{jiij}=-\frac{a_i^2a_j^2}{c^2}H_iH_j\quad(1\le i<j\le3).$$

The Ricci components are

$$\operatorname{Ric}_{00}=-\sum_{i=1}^3(\dot H_i+H_i^2),\qquad \operatorname{Ric}_{ii}=\frac{a_i^2}{c^2}(\dot H_i+H_iH_\Sigma),$$

and every off-diagonal Ricci component is zero.

## Statement references

[[def-gr-fx-bianchi-i-data]]

[[def-gr-fx-bianchi-i-curvature]]

## Facts & Assumptions

**Given:** A diagonal Bianchi I datum on a nonempty open interval $I\subseteq\mathbb R$, its positive $C^2$ scale factors and metric, and the inherited $\mathrm{AC}_\omega$ context.

[A1] The quotient and product construction for this datum carries the axiom of countable choice $\mathrm{AC}_\omega$ and no stronger choice principle ([[def-gr-fx-bianchi-i-data]]).

[F1] In a local quotient chart the metric has entries $g_{00}=-c^2$, $g_{ii}=a_i^2$, and $g_{0i}=0$ for $i=1,2,3$; each $a_i$ is positive and $C^2$, and all spatial derivatives of the metric entries vanish ([[def-gr-fx-bianchi-i-data]]).

[F2] The connection, curvature, Ricci tensor and their sign/index conventions are given by the coordinate formulas in the local $C^2$ definition ([[def-gr-fx-bianchi-i-curvature]]).

## Proof

**Proof technique:** direct coordinate calculation.

1.1 Work under the inherited $\mathrm{AC}_\omega$ context [A1]; no choice is used in the following finite coordinate calculation. The inverse metric has $g^{00}=-c^{-2}$, $g^{ii}=a_i^{-2}$ and zero off-diagonal entries by [F1]. Substitution in [F2] gives $\Gamma^0{}_{ii}=\frac12(-c^{-2})(-2a_i\dot a_i)=a_i^2H_i/c^2$ and $\Gamma^i{}_{0i}=\Gamma^i{}_{i0}=\frac12a_i^{-2}(2a_i\dot a_i)=H_i$. Every other coefficient is zero because each differentiated spatial metric entry is zero and the metric matrix is diagonal. [given, A1, F1, F2, algebra]

2.1 The curvature formula [F2] and step 1.1 give $R^0{}_{i0i}=(a_i^2/c^2)(\dot H_i+H_i^2)$ and $R^i{}_{0i0}=-(\dot H_i+H_i^2)$; lowering the first index gives $R_{0i0i}=R_{i0i0}=-a_i^2(\dot H_i+H_i^2)$. Reversing the last two direction indices in the same formula gives $R_{0ii0}=R_{i00i}=+a_i^2(\dot H_i+H_i^2)$. For $i\ne j$, its only nonzero product in $R^i{}_{jij}$ is $\Gamma^i{}_{i0}\Gamma^0{}_{jj}=a_j^2H_iH_j/c^2$, so $R_{ijij}=a_i^2a_j^2H_iH_j/c^2$; direct substitution with the indices reversed gives $R_{jiji}$ equal to this and $R_{ijji}=R_{jiij}$ equal to its negative. Every remaining index pattern contains either a spatial derivative of a metric/connection coefficient or a zero coefficient from step 1.1, so it vanishes. [step 1.1, F2, algebra]

3.1 Contracting the components from step 2.1 with the inverse metric gives $\operatorname{Ric}_{00}=\sum_iR^i{}_{0i0}=-\sum_i(\dot H_i+H_i^2)$. For each $i$, $\operatorname{Ric}_{ii}=g^{00}R_{0i0i}+\sum_{j\ne i}g^{jj}R_{jiji}=\frac{a_i^2}{c^2}(\dot H_i+H_i^2)+\frac{a_i^2}{c^2}\sum_{j\ne i}H_iH_j=\frac{a_i^2}{c^2}(\dot H_i+H_iH_\Sigma)$. The index patterns in step 2.1 give zero for every off-diagonal contraction. These are the displayed Ricci components. [step 2.1, F1, F2, algebra] ∎
