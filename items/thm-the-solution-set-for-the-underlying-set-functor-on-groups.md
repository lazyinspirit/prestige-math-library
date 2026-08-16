---
id: thm-the-solution-set-for-the-underlying-set-functor-on-groups
kind: theorem
title: "Normal-subgroup quotients of a fixed free group give a canonical solution set for the underlying-set functor on groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-solution-set-condition, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-quotient-group-universal-property, def-normal-subgroup, thm-image-subgroup-and-kernel-normal]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, example 4.7.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, example 6.3.11"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Fix a set $S$ and a chosen free group $(F(S),i_S)$. For every normal subgroup $N\trianglelefteq F(S)$, let
$$\eta_N:S\xrightarrow{i_S}U(F(S))\xrightarrow{U(q_N)}U(F(S)/N).$$
The family $(\eta_N)$, indexed by the set of normal subgroups of the fixed group $F(S)$, is a solution set at $S$ for the underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$.

## Facts & Assumptions

**Given:** A set $S$ and the chosen free group on $S$.

[L1] Every function $f:S\to U(G)$ extends uniquely to a homomorphism $\widehat f:F(S)\to G$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L2] If a homomorphism kills a normal subgroup $N$, it factors uniquely through the quotient by $N$ ([[thm-quotient-group-universal-property]]).

[L3] A subgroup $N\le G$ is normal when it is invariant under conjugation by every element of $G$; in particular a normal subgroup is a subset of its ambient group ([[def-normal-subgroup]]).

[L4] A solution set at $S$ is a supplied set of arrows through one of which every arrow $S\to U(G)$ factors ([[def-the-solution-set-condition]]).

[L5] For a group homomorphism, the image is a subgroup of the codomain and the kernel is a normal subgroup of the domain ([[thm-image-subgroup-and-kernel-normal]]).

## Proof

**Proof technique:** constructive.

1.1 The normal subgroups of $F(S)$ form a set because they are among the subsets of the fixed underlying set. This includes the empty-$S$ case, where $F(S)$ is trivial. Hence the displayed quotient arrows form a supplied set-indexed family. [L3, L4, construct]

2.1 Given $f:S\to U(G)$, extend it by [L1] to $\widehat f:F(S)\to G$ and put $N=\ker\widehat f$. By [L5], $N$ is a normal subgroup of $F(S)$, so $\widehat f$ kills $N$ and [L2] gives a unique $\bar f:F(S)/N\to G$ with $\widehat f=\bar f q_N$. Therefore $f=U(\bar f)\eta_N$. [step 1.1, L1, L2, L5]

3.1 The factorisation in step 2.1 is exactly the clause of [L4]. The index $N$ is computed as a kernel rather than chosen from isomorphism representatives, so the family is canonical once the free group is chosen. [step 1.1, step 2.1, L4, discharge-construct] ∎
