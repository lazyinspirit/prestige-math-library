---
id: prop-gr-fx-kasner-vacuum
kind: proposition
title: "Kasner vacuum constraints"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-bianchi-i-data
  - def-gr-fx-bianchi-i-curvature
  - lem-gr-fx-bianchi-i-curvature-components
dependency_roles:
  def-gr-fx-bianchi-i-data: mathematical-premise
  def-gr-fx-bianchi-i-curvature: mathematical-premise
  lem-gr-fx-bianchi-i-curvature-components: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $a_i(t)=A_i(t/t_0)^{p_i}$ on a nonempty open interval $I\subseteq(0,\infty)$, where $A_i>0$ are lengths in metres, $t_0>0$ is a time in seconds, and $p_i\in\mathbb R$ are dimensionless exponents. These $p_i$ are called Kasner exponents for this power-law branch; define their sums $P:=\sum_{i=1}^3p_i$ and $Q:=\sum_{i=1}^3p_i^2$. For a nonstatic datum, meaning that not all $p_i$ vanish, the geometric vacuum equation $\operatorname{Ric}=0$ in the $C^2$ curvature definition of this page holds exactly when $P=Q=1$. If all $p_i=0$, then the full curvature tensor vanishes, so the metric is flat in the curvature sense. These are exact statements about the specified finite-dimensional metrics; no singularity or generic cosmological conclusion follows.

## Statement references

[[def-gr-fx-bianchi-i-data]]

[[def-gr-fx-bianchi-i-curvature]]

[[lem-gr-fx-bianchi-i-curvature-components]]

## Facts & Assumptions

**Given:** A diagonal Bianchi I datum, the power-law scale factors in the Statement, and the mathematical vacuum condition $\operatorname{Ric}=0$ where invoked. The inherited foundational context assumes $\mathrm{AC}_\omega$ only.

[A1] The Bianchi I product and quotient construction carries $\mathrm{AC}_\omega$ and no stronger choice principle ([[def-gr-fx-bianchi-i-data]]).

[F1] The scale factors are positive $C^2$ lengths on $I\subseteq(0,\infty)$, and the definitions of $H_i$, $H$ and $V$ are those of the diagonal Bianchi I datum ([[def-gr-fx-bianchi-i-data]]).

[F2] The local Ricci components are $\operatorname{Ric}_{00}=-\sum_i(\dot H_i+H_i^2)$ and $\operatorname{Ric}_{ii}=a_i^2(\dot H_i+H_iH_\Sigma)/c^2$, with zero off-diagonal components; the only potentially nonzero curvature components are the two displayed families ([[lem-gr-fx-bianchi-i-curvature-components]]).

## Proof

**Proof technique:** direct substitution into the local curvature components.

1.1 Work in the inherited $\mathrm{AC}_\omega$ context [A1]; the calculation itself uses only finite sums and differentiation. Put $P=\sum_i p_i$ and $Q=\sum_i p_i^2$. The power laws give $H_i=p_i/t$, $\dot H_i=-p_i/t^2$, and $H_\Sigma=P/t$, so [F2] yields $\operatorname{Ric}_{00}=(P-Q)/t^2$ and $\operatorname{Ric}_{ii}=a_i^2p_i(P-1)/(c^2t^2)$. [given, A1, F1, F2, algebra]

2.1 Suppose not all $p_i$ vanish and $\operatorname{Ric}=0$. Choose an index $k$ with $p_k\ne0$. Since $a_k,c,t$ are positive, the equation $\operatorname{Ric}_{kk}=0$ from step 1.1 implies $P=1$. The equation $\operatorname{Ric}_{00}=0$ then implies $Q=P=1$. [step 1.1, algebra]

2.2 Conversely, if $P=Q=1$, step 1.1 makes every diagonal Ricci component zero, and [F2] makes every off-diagonal component zero; hence $\operatorname{Ric}=0$. [step 1.1, F2, algebra]

3.1 If $p_1=p_2=p_3=0$, then every $H_i$ and $\dot H_i$ is zero. Both curvature-component families in [F2] therefore vanish, and every other component is zero by that lemma, so the full curvature tensor vanishes. [given, F1, F2, algebra] ∎
