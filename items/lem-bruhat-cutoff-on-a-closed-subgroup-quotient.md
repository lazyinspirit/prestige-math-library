---
id: lem-bruhat-cutoff-on-a-closed-subgroup-quotient
kind: lemma
title: "Bruhat cutoff normalized along H-fibers"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-regular-lindelof-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
proof_strategy: construction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC. For closed $H\leq G$ there is a continuous $\beta:G\to[0,\infty)$ with $\int_H\beta(xh)\,dh=1$ for every $x$, and for every compact $Q\subseteq G/H$ the part of $\operatorname{supp}\beta$ lying over $Q$ is compact. In particular, each $H$-fiber meets $\operatorname{supp}\beta$ in a compact set.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$, a closed subgroup $H$, fixed left Haar measure on $H$, and AC.

[F1] AC implies DC and countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] $X=G/H$ is LCH, the quotient map is open, compact quotient sets have compact lifts, and $T_H:C_c(G)\to C_c(X)$ is onto ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F3] Every regular Lindelöf space is paracompact under countable choice ([[lem-regular-lindelof-spaces-are-paracompact]]).

[F4] A paracompact Hausdorff space has a locally finite partition of unity subordinate to any open cover under AC and DC ([[thm-subordinate-partitions-of-unity-exist]]).

[F5] Compact sets inside open subsets of an LCH space admit compactly supported continuous cutoffs under DC ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[A1] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** construction.

1.1 Choose a relatively compact symmetric open identity neighborhood $U$ in $G$ and let $L=\bigcup_{n\ge1}U^n$. Then $L$ is an open subgroup and is $\sigma$-compact, since $L=\bigcup_n(\overline U)^n$. Its orbits on $X$ are open and disjoint; each is a continuous image of $L$, hence $\sigma$-compact. As an open subspace of the LCH space $X$, each orbit is regular and Lindelöf. By [F1] and [F3], every orbit is paracompact, and their topological sum $X$ is paracompact. [F1, F2, construct]
1.2 Cover $X$ by relatively compact open sets. By [F4] choose a locally finite partition of unity $(\psi_i)$ subordinate to this cover; each $\operatorname{supp}\psi_i$ is compact. Use [F5] to choose $\chi_i\in C_c(X)$ with $\chi_i=1$ on $\operatorname{supp}\psi_i$, and [F2] to choose a nonnegative $u_i\in C_c(G)$ with $T_Hu_i=\chi_i$. Define $b_i=(\psi_i\circ p)u_i$. It is continuous, nonnegative and compactly supported, and $T_Hb_i=\psi_i\chi_i=\psi_i$. [F2, F4, F5, choose, construct]
2.1 Set $\beta=\sum_i b_i$. Since $(\psi_i)$ is locally finite and $p$ is continuous, the sum is locally finite on $G$, hence continuous and nonnegative. Fiber integration gives $T_H\beta=\sum_i\psi_i=1$. For compact $Q\subseteq X$, only finitely many $\operatorname{supp}\psi_i$ meet $Q$; the support of $\beta$ over $Q$ is contained in the finite union of the compact sets $\operatorname{supp}u_i\cap p^{-1}(Q)$. Thus it is compact. AC supplies the choices, and the construction applies to non-$\sigma$-compact $X$ because it uses the open $L$-orbits from step 1.1. ∎ [A1, F1, F2, F3, F4, F5, step 1.1, step 1.2]
