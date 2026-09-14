---
id: lem-moore-topology-is-hereditarily-lindelof
kind: lemma
title: "Moore's topology is hereditarily Lindelof"
status: draft
origin: pipeline
deps:
  - thm-moore-oscillation-colouring-pattern
  - def-moore-l-space-topology
  - def-compactness-variants
  - def-hereditary-property
  - lem-uncountable-delta-system-for-finite-sets
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 7, Corollary 7.8, printed p. 24"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

For every $X\subseteq\omega_1$, the space $(X,\tau[X])$ is hereditarily
Lindelöf.

## Facts & Assumptions

**Given:** $X\subseteq\omega_1$ and the Moore topology.

[F1] [[def-compactness-variants]] defines Lindelöfness by the existence of an at-most-countable subcover for every open cover, and [[def-hereditary-property]] defines hereditary Lindelöfness by requiring that property of every subspace.

[F2] [[def-moore-l-space-topology]] gives a clopen base of finite Boolean conditions in the sets $W_\xi$.

[F3] [[lem-uncountable-delta-system-for-finite-sets]] thins an uncountable family of finite supports to an uncountable $\Delta$-system.

[F4] [[thm-moore-oscillation-colouring-pattern]] realizes any functional binary pattern on pairwise-disjoint fixed finite families.

[F5] [[def-axiom-of-choice]] supplies the transfinite cover selections and uncountable thinning.

## Proof

**Proof technique:** contradiction.

1.1 Suppose some subspace $Z\subseteq X$ has an open cover $\mathcal U$ with no countable subcover.  Recursively for $\alpha<\omega_1$, after choosing $U_\xi\in\mathcal U$ for $\xi<\alpha$, choose $x_\alpha\in Z\setminus\bigcup_{\xi<\alpha}U_\xi$ and then $U_\alpha\in\mathcal U$ containing $x_\alpha$.  The uncovered remainder is uncountable at every stage: if it were countable, one further cover member for each remaining point, together with the previous countable family, would be a countable subcover.  Hence choose $x_\alpha$ above all earlier $x_\xi$. Thus $\langle x_\alpha\rangle$ is strictly increasing and $U_\alpha$ contains no $x_\beta$ for $\beta>\alpha$. [F1, F5, given, assume-contra]

2.1 By [F2], shrink each $U_\alpha$ around $x_\alpha$ to a finite Boolean basic set $V_\alpha$ in the subspace $Z$.  Intersect also with $W_{x_\alpha}$, so its finite support $F_\alpha\subseteq X$ contains $x_\alpha$.  Apply [F3] and the finite pigeonhole principle to retain an uncountable index set on which the supports form a $\Delta$-system with root $F$, have fixed root and petal positions and one fixed membership-bit string, and have nonempty petals of one size $k$.  Pass to a tail so every root member is below every retained $x_\alpha$. [F2, F3, F5, step 1.1]

3.1 Let $A=\{F_\alpha\setminus F:\alpha\text{ retained}\}$ and $B=\{\{x_\beta\}:\beta\text{ retained}\}$.  The family $A$ is uncountable and pairwise disjoint by the $\Delta$-system property; $B$ is uncountable and pairwise disjoint because the sequence is strictly increasing.  Map each petal coordinate to the sole column and prescribe the corresponding fixed membership bit of $V_\alpha$.  By [F4], choose a petal $F_\alpha\setminus F$ and a singleton $\{x_\beta\}$ with the petal below $x_\beta$ realizing all those bits. [F4, step 2.1]

4.1 Since $x_\alpha$ belongs to its petal, the inequality from step 3.1 gives $x_\alpha<x_\beta$, and strict increase gives $\alpha<\beta$.  The realized petal bits say that $x_\beta$ meets every petal condition defining $V_\alpha$.  For a root coordinate $\eta$, the point $x_\beta$ meets its required bit because $x_\beta\in V_\beta$, the root bit string is uniform, and $\eta<x_\beta$ lets [F2] read membership through $c(\eta,x_\beta)$. Consequently $x_\beta\in V_\alpha\subseteq U_\alpha$. [F2, step 1.1, step 2.1, step 3.1]

5.1 Step 1.1 says that $U_\alpha$ contains no $x_\beta$ with $\beta>\alpha$, contradicting step 4.1.  Therefore every subspace $Z$ is Lindelöf, which is precisely hereditary Lindelöfness by [F1].  Empty and countable $Z$ cause no problem: a countable space has a countable subcover by choosing one cover member per point, and the empty space uses the empty subcover. [F1, F5, step 1.1, step 4.1, discharge-contradiction] ∎
