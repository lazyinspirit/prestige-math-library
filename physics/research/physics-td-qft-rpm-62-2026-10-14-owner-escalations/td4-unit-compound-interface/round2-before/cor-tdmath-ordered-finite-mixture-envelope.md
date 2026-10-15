---
id: cor-tdmath-ordered-finite-mixture-envelope
kind: corollary
title: "Conditional finite-mixture envelope for an additive ordered representation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
proof_strategy: direct
deps:
  - def-tdmath-tagged-scalable-compound
  - def-tdmath-comparison-and-stability
  - lem-tdmath-compound-mass-well-defined
  - thm-tdmath-additive-entropy-representation
  - thm-tdmath-finite-mixture-envelope
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  thm-tdmath-finite-mixture-envelope: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
verification:
  precheck: n/a
---

## Statement

This is conditional on the batch-3 draft item [[thm-tdmath-additive-entropy-representation]] and an additional interface premise stated below. Let $X$ be its nonempty state set and assume its stated comparison hypotheses. For a finite list of distinct states $s_1,\ldots,s_m\in X$, assume the intended unit-state compound $e_s$ is the point mass on $X$, with coefficient $e_s(x)=1$ when $x=s$ and $0$ otherwise, and is a mass-one tagged compound. For $\theta\in\Delta_m$, put $M_\theta=\sum_i\theta_i e_{s_i}$ and set $V(\theta):=\sum_i\theta_iS(s_i)$. Suppose a coordinate assignment $\chi$ on these compounds satisfies $\chi(M_\theta)=\sum_i\theta_iq_i$ for fixed $q_i\in\mathbb R^d$. For each $x$, define the value to be $+\infty$ if no $\theta\in\Delta_m$ has coordinate $x$. Then the minimum represented value among those finite mixtures, with that empty-set convention, is exactly the finite-mixture envelope $f_{\rm mix}(x)$ of [[thm-tdmath-finite-mixture-envelope]], with all its convexity, lower-semicontinuity, biconjugation, and supporting-face conclusions. The point-mass definition is the exact interface needed to interpret the upstream theorem's $e_x$ notation, but it is absent from the current batch-3 definition carrier; the upstream theorem and prerequisite closure also remain unaccepted. This item therefore states a complete conditional transfer, not an unconditional entropy theorem.

## Facts & Assumptions

**Given:** A finite family of states and coordinate data as in the Statement.

[L1] Actual batch-3 draft supplier [[thm-tdmath-additive-entropy-representation]], level 7, was inspected against its planned manifest interface; its Statement matches, but its status is draft and not independently accepted. It says: if $X$ is nonempty and finite-support compounds carry the comparison structure of [[def-tdmath-comparison-and-stability]] over the complete ordered field $\mathbb R$, then for a strict reference pair $x_0\preceq x_1$ and not $x_1\preceq x_0$, the reference supremum $S(x)=\sup L_x$ is finite, has $S(x_0)=0$, $S(x_1)=1$, and for all equal-mass compounds $A=\sum_i a_i e_{x_i}$ and $B=\sum_j b_j e_{y_j}$ one has $A\preceq B\Longleftrightarrow\sum_i a_iS(x_i)\le\sum_j b_jS(y_j)$. If no strict pair exists, CH makes all equal-mass compounds equivalent and any constant $S$ is a degenerate additive representation. Its inspected planned dependencies are def-complete-ordered-field, def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, and lem-tdmath-reference-supremum-bounds. The comparison definition requires (i) reflexivity and transitivity for equal-mass pairs, (ii) composition consistency, (iii) positive scaling, (iv) splitting/recombination of a one-state compound, (v) stability when $A+\epsilon_nZ_0\preceq B+\epsilon_nZ_1$ for every $n$ with fixed positive equal-mass spectators and $\epsilon_n>0$ decreasing to zero, and (vi) CH for every equal-mass pair; it assumes no antisymmetry or continuity. The compound definition uses finite-support nonnegative coefficient maps and dimensionless finite-sum bookkeeping mass. The current theorem carrier contains direct proofs of its strict-reference and no-strict-pair branches and cites Lieb and Yngvason, Theorem 2.2, and Campión et al., §§2–5. However, the actual [[def-tdmath-tagged-scalable-compound]] defines finite-support coefficient maps but never defines the point-mass symbol $e_x$ used by the comparison definition and theorem. The theorem's no-strict-pair proof also writes $M e_r$ for a compound of mass $M$ without separately handling $M=0$, although its definition only states positive scaling; the zero-mass compound is the empty compound and needs an explicit case. Batch-3 notes separately leave real-analysis, vector-space, and finite-sum page prerequisites owner-escalated. These gaps leave the upstream proof and interface unresolved; [A1] remains conditional.

[A1] Conditional premise: assume the strict-reference branch of the draft statement [L1] is valid for this state set and its listed comparison structure. It is not accepted while the missing point-mass definition, zero-mass case, and page prerequisite closure remain unresolved.

[A2] Conditional missing interface: assume the planned point mass $e_s$ is defined by the indicator coefficient map stated in the Statement and is a mass-one tagged compound. The current tagged-compound carrier does not define $e_s$; this premise records the gap and does not supply or certify the batch-3 definition.

[A3] The coordinate assignment $\chi$ is affine on the finite mixtures of the fixed states, exactly as specified in the Statement.

[L2] [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]]: tagged compounds are finite-support nonnegative coefficient maps, and mass is additive under finite composition and homogeneous under positive scaling. The definition does not define $e_s$.

[L3] [[thm-tdmath-finite-mixture-envelope]]: for finite data $(q_i,a_i)$ the minimized weighted value is the proper closed convex envelope with the stated dual and support properties.

## Proof

**Proof technique:** direct.

1.1 By [A1] and [L1], each $a_i=S(s_i)$ is finite. Under [A2], each $e_{s_i}$ is mass one; [L2] gives $m(M_\theta)=\sum_i\theta_i m(e_{s_i})=\sum_i\theta_i=1$. The theorem's displayed compound sum assigns $M_\theta$ the value $V(\theta)=\sum_i\theta_i a_i$. By [A3], its coordinate is $\sum_i\theta_i q_i$. Hence mixtures in this fixed family with coordinate $x$ correspond exactly to $\theta\in\Theta_x$ from [L3]. [A1, A2, A3, L1, L2, L3, algebra]

2.1 The minimum of $V(\theta)$ over those mixtures is therefore $\min_{\theta\in\Theta_x}\sum_i\theta_i a_i=f_{\rm mix}(x)$ by [L3], with $+\infty$ when $\Theta_x$ is empty. Every further conclusion in the Statement follows by applying the corresponding conclusion of [L3] to the same finite data. This proof is conditional on [A1]–[A3] and does not supply the missing point-mass definition or repair the draft supplier. [A1, A3, L3, step 1.1] ∎
