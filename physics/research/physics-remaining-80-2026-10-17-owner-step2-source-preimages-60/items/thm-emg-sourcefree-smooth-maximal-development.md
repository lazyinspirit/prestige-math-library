---
id: thm-emg-sourcefree-smooth-maximal-development
kind: theorem
title: "Source-free smooth maximal globally hyperbolic Einstein–Maxwell development"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-emg-electrovacuum-cauchy-system
  - thm-emg-gauss-codazzi-maxwell-constraints
  - lem-emg-maxwell-stress-conservation
  - thm-emg-smooth-local-geometric-uniqueness
  - lem-emg-smooth-geometric-causal-research-suppliers
  - def-gr-development-and-data-fixing-isometry
  - thm-gr-smooth-maximal-globally-hyperbolic-development
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  thm-emg-gauss-codazzi-maxwell-constraints: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  thm-emg-smooth-local-geometric-uniqueness: mathematical-premise
  lem-emg-smooth-geometric-causal-research-suppliers: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Definitions and Theorems 2.6–2.8, printed pp. 10–12, and complete proofs §§3.1–3.3, printed pp. 12–24."
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), complete notes, especially §1.6 and the local Cauchy-problem discussion."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\Sigma$ be a nonempty connected smooth oriented three-manifold without boundary with smooth Riemannian metric $h$, smooth symmetric tensor $K$, and smooth spatial vectors $e,b$. Fix the source-free Einstein–Maxwell model, its constants $\kappa>0$, $\mu_0>0$, $\Lambda\in\mathbb R$, signature $(-,+,+,+)$, orientation and $K(X,Y)=g(\nabla_Xn,Y)$ convention as in [[def-emg-electrovacuum-cauchy-system]]. Assume the four constraints of [[thm-emg-gauss-codazzi-maxwell-constraints]] and reconstruct the complete initial two-form by $F(N,\mathsf e_i)=-e_i$, $F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k$. Then there is a smooth connected time-oriented globally hyperbolic development $(M_{\max},g_{\max},F_{\max},\iota)$ into which every other smooth source-free Einstein–Maxwell development of these complete data embeds by a time-orientation-preserving isometric embedding fixing $\iota$ and carrying $F$ to $F_{\max}$. The maximal development is unique up to a unique such data-fixing isometry. This maximality is within the smooth globally hyperbolic development class for this fixed two-form model; it asserts no geodesic completeness, no maximality among rough or non-globally-hyperbolic extensions, and no global-in-time regularity estimate.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, connected smooth constrained source-free data, the fixed covariant model and its complete two-form data.

[L1] Draft model [[def-emg-electrovacuum-cauchy-system]] fixes the equations, stress, constants and pullback conventions. The initial $F$ data in the Statement specify all six independent components on $\mathbb RN\oplus T\Sigma$, with no global potential requirement. Its item file is listed in batch 6; its status is draft and its precheck is pending; this input remains conditional.

[L2] Draft constraint result [[thm-emg-gauss-codazzi-maxwell-constraints]] gives the exact Einstein and Maxwell constraints in the selected $K,e,b$ convention. Its item file is listed in batch 6; its status is draft and its precheck is pending; this input remains conditional.

[L3] Draft identity [[lem-emg-maxwell-stress-conservation]] gives $\nabla^aT_{ab}=0$ for the source-free Maxwell field after its equations hold and before Einstein recovery. Its item file is listed in batch 6; its status is draft and its precheck is pending; this input remains conditional.

[F1] [[thm-emg-smooth-local-geometric-uniqueness]] proves smooth local existence and geometric uniqueness for this exact covariant model and complete data on arbitrary smooth initial slices. Its proof verifies the local symmetric-hyperbolic reduction, full model recovery, stress conservation and constraints, conditional on the actual CP01 draft statements [L1]–[L3], whose files are present but whose prechecks are pending although their IDs are listed in the batch-6 manifest.

[F2] [[lem-emg-smooth-geometric-causal-research-suppliers]] records the causal, Cauchy-surface and choice interfaces used in the globally hyperbolic development construction, with their exact hypotheses.

[F3] [[def-gr-development-and-data-fixing-isometry]] defines a development, a data-fixing development embedding, and maximality by universal embedding into a smooth globally hyperbolic development. It makes no completeness requirement.

[F4] [[thm-gr-smooth-maximal-globally-hyperbolic-development]] proves the set-sized gluing, quotient, universality and uniqueness result for any fixed admissible covariant model once constrained local existence and geometric uniqueness hold at every spacelike restart. The actual inspected carrier is published with verification precheck pending. Its proof is sourced to Sbierski, whose original theorem is vacuum-only; therefore the current GR theorem's additional-model clause applies here only after [F1] discharges the EMG local obligations.

## Proof

1.1 The initial bundle formulas specify the three normal-spatial and three spatial-spatial components of $F$ and hence all independent matter data, as in [F1]'s complete-data reconstruction. The four displayed constraints are exactly [L2]'s hypotheses with the same stress normalization, orientation and sign convention. Thus the data are complete constrained data for the one fixed EMG model; no assumption that $F=dA$ is introduced. [given, L1, L2, F1, algebra]

2.1 By [F1], every smooth constrained initial data set for this fixed model has a smooth local development and data-fixing geometric uniqueness. The same statement applies to every smooth spacelike restart: the full Einstein and Maxwell equations hold there; their normal projections give [L2]'s constraints; the normal electric and spatial magnetic components determine the complete restarted two-form; and [L3] supplies stress conservation after Maxwell propagation. Therefore the local existence and uniqueness obligations are available at every restart used in [F4]. [step 1.1, L2, L3, F1, F4]

3.1 In particular, [F1] provides at least one local development. Its local Cauchy-neighborhood clause, also covered by [F2], restricts it to an open globally hyperbolic neighborhood with $\Sigma$ Cauchy, so the nonempty-development hypothesis of [F4] holds. The model and complete data remain fixed under all comparisons, and the Countable Choice and Dependent Choice assumptions match [F4]. [step 2.1, F1, F2, F4, algebra]

4.1 Apply [F4] to this fixed model, data, local development and restart theorem. Its universality clause gives a data-fixing development embedding of every smooth globally hyperbolic development into one maximal development; its uniqueness clause gives exactly one data-fixing isometry between any two maximal developments. By [F3], this is precisely maximality in the stated smooth globally hyperbolic class. The definition imposes no condition on affine-parameter endpoints of geodesics, so this conclusion contains no geodesic-completeness assertion. [step 1.1, step 2.1, step 3.1, F2, F3, F4] ∎
