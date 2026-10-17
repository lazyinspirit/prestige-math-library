---
id: rem-emg-maximal-is-not-complete
kind: remark
title: "Maximality of the Einstein–Maxwell GHD does not assert geodesic completeness"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-gr-development-and-data-fixing-isometry
  - thm-emg-sourcefree-smooth-maximal-development
  - thm-gr-smooth-maximal-globally-hyperbolic-development
  - thm-gr-local-geodesics-and-exponential-map
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-emg-sourcefree-smooth-maximal-development: mathematical-premise
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Definitions and Theorems 2.6–2.8, printed pp. 10–12, and complete proofs §§3.1–3.3, printed pp. 12–24."
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II.C, printed pp. 8–9."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For the maximal smooth globally hyperbolic development in [[thm-emg-sourcefree-smooth-maximal-development]], maximality means that every development of the same complete source-free data admits a data-fixing development embedding into it, in the sense of [[def-gr-development-and-data-fixing-isometry]]. By [[thm-gr-local-geodesics-and-exponential-map]], an affinely parametrized geodesic for its metric-selected connection is a smooth curve $\gamma:I\to M$ on an open interval $I\subseteq\mathbb R$ satisfying $D_\lambda\dot\gamma=0$; in coordinates $y^\mu$ this is $\ddot y^\mu+\Gamma^\mu{}_{\alpha\beta}(y)\dot y^\alpha\dot y^\beta=0$. That theorem supplies a unique maximal solution $\gamma_{p,v}:I_{p,v}\to M$ through each initial datum $(p,v)$, with $I_{p,v}$ an open interval; here **inextendible** means that the curve is such a maximal solution, so no geodesic on a strictly larger interval with the same affine parameter restricts to it. Geodesic completeness means that every such maximal geodesic has parameter domain all of $\mathbb R$. The maximality conclusion by itself asserts no geodesic-completeness property. This remark does not claim that a particular Einstein–Maxwell maximal development is geodesically incomplete.

## Facts & Assumptions

**Given:** The maximal development and the definitions of development embedding and maximality.

[F1] [[def-gr-development-and-data-fixing-isometry]] defines maximality solely by the existence of a data-fixing development embedding from every development of the same data. Its definition imposes no condition on affine parameters of geodesics.

[F2] [[thm-emg-sourcefree-smooth-maximal-development]] supplies the maximal smooth globally hyperbolic Einstein–Maxwell development within that definition. The original source [[thm-gr-smooth-maximal-globally-hyperbolic-development]] is Sbierski's smooth global gluing theorem after its local model obligations are discharged; Sbierski's statement has no geodesic-completeness conclusion.

[F3] [[thm-gr-local-geodesics-and-exponential-map]] defines geodesics by $D_\lambda\dot\gamma=0$ and supplies the unique maximal solution on an open interval through each initial position-velocity datum. Its proof gives the coordinate equation displayed in the Statement and fixes maximality as absence of a same-parameter geodesic extension to a strictly larger interval.

## Proof

1.1 By [F1], the maximality predicate quantifies over extensions that are themselves developments of the same initial data and asks for data-fixing embeddings. Its clauses do not quantify over geodesics, affine parameters, or endpoint behavior. [given, F1]

2.1 Geodesic completeness, as defined in the Statement, is a separate assertion about the parameter domain of every inextendible affinely parametrized geodesic. Neither [F1]'s maximality definition nor the conclusion [F2] supplies such an assertion. Therefore maximality alone yields no completeness conclusion; because no explicit incomplete Einstein–Maxwell development is constructed here, none is claimed. [step 1.1, F1, F2, F3, algebra] ∎
