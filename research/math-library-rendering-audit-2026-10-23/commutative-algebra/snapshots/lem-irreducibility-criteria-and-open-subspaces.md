---
id: "lem-irreducibility-criteria-and-open-subspaces"
kind: "lemma"
title: "Irreducibility via nonempty open subsets, connectedness and open subspaces"
status: published
origin: pipeline
deps: [def-topological-space, def-subspace-topology-top, def-connected-space, def-dense-top, def-irreducible-topological-space-and-subset]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Topology"
      url: https://stacks.math.columbia.edu/download/topology.pdf
      locator: "Definition 8.1 (tag 004V) and the remark following it"
---

## Statement

Let $X$ be a topological space ([[def-topological-space]]), irreducibility and
irreducible subsets being as in
[[def-irreducible-topological-space-and-subset]]. Then:

1. $X$ is irreducible if and only if $X\ne\varnothing$ and every two nonempty
   open subsets of $X$ have nonempty intersection;
2. $X$ is irreducible if and only if $X\ne\varnothing$ and every nonempty open
   subset of $X$ is dense in $X$ ([[def-dense-top]]);
3. if $X$ is irreducible then $X$ is connected ([[def-connected-space]]);
4. if $X$ is irreducible and $U\subseteq X$ is a nonempty open subspace, then
   $U$ is irreducible, hence connected
   ([[def-subspace-topology-top]]);
5. the empty space is not irreducible, and the one-point space is
   irreducible.

## Facts & Assumptions

[F1] $X$ is irreducible when $X\ne\varnothing$ and, whenever $X=F_1\cup F_2$ with $F_1,F_2\subseteq X$ closed, one has $X=F_1$ or $X=F_2$ ([[def-irreducible-topological-space-and-subset]]).

[F2] A subset $C$ of a subspace $S\subseteq X$ is closed in $S$ exactly when $C=F\cap S$ for a closed $F\subseteq X$, and the open subsets of $S$ are the traces $U\cap S$ of the open subsets $U\subseteq X$ ([[def-subspace-topology-top]]).

[F3] A subset $A\subseteq X$ is dense in $X$ if and only if $U\cap A\ne\varnothing$ for every nonempty open $U\subseteq X$ ([[def-dense-top]]).

[F4] A separation of $X$ is a pair $(U,V)$ of open, nonempty, disjoint subsets with $U\cup V=X$, and $X$ is connected when no separation exists ([[def-connected-space]]).

## Proof

**Given:** A topological space $X$, its closed and open subsets, and the irreducibility notion of [F1].

1.1 I prove the equivalence of clause 1. Assume first that $X$ is irreducible, and let $U_1,U_2\subseteq X$ be nonempty open subsets. If $U_1\cap U_2=\varnothing$, then $X=(X\setminus U_1)\cup(X\setminus U_2)$ is a union of two closed subsets, and neither equals $X$ because $U_1$ and $U_2$ are nonempty; this contradicts irreducibility [F1]. Hence $U_1\cap U_2\ne\varnothing$, and $X\ne\varnothing$ is part of [F1]. Conversely, assume $X\ne\varnothing$ and that every two nonempty open subsets meet, and let $X=F_1\cup F_2$ with $F_1,F_2$ closed. If $F_1\ne X$ and $F_2\ne X$, then $U_i:=X\setminus F_i$ are nonempty open subsets with $U_1\cap U_2=X\setminus(F_1\cup F_2)=\varnothing$, a contradiction; hence $X=F_1$ or $X=F_2$, and $X$ is irreducible by [F1]. [F1]

1.2 The empty space is not irreducible, because irreducibility requires nonemptiness by [F1]. A one-point space $X=\{*\}$ is irreducible: its only subsets are $\varnothing$ and $X$, so a union $X=F_1\cup F_2$ of closed subsets forces one of them to be $X$, and $X\ne\varnothing$; this is clause 5. [F1]

2.1 By the density criterion of [F3], a subset $A\subseteq X$ is dense exactly when $U\cap A\ne\varnothing$ for every nonempty open $U\subseteq X$. Hence, for nonempty $X$, the assertion that every nonempty open subset is dense says precisely that for all nonempty open $A,U\subseteq X$ one has $U\cap A\ne\varnothing$, which is the intersection condition of [step 1.1]; with the nonemptiness clause this proves clause 2. [F3, step 1.1]

2.2 Let $X$ be irreducible and suppose that $(U,V)$ is a separation of $X$ as in [F4]. Then $U$ and $V$ are nonempty open subsets with $U\cap V=\varnothing$, contradicting the intersection condition of [step 1.1]. Hence no separation exists and $X$ is connected. [F4, step 1.1]

3.1 Let $X$ be irreducible and let $U\subseteq X$ be a nonempty open subspace. Let $W_1,W_2\subseteq U$ be nonempty open subsets of the subspace $U$; by [F2] there are open $V_i\subseteq X$ with $W_i=U\cap V_i$, so each $W_i$ is open in $X$, being the intersection of two open subsets of $X$, and nonempty by assumption. By [step 1.1] applied in $X$ we get $W_1\cap W_2\ne\varnothing$; since $W_1,W_2\subseteq U$ were arbitrary nonempty open subsets of the subspace $U$, the criterion of [step 1.1] applied in the space $U$, which is nonempty, shows that $U$ is irreducible, and [step 2.2] applied in $U$ shows that $U$ is connected. This is clause 4. [F2, step 2.2, step 1.1]

4.1 Clauses 1 and 2 are [step 1.1] and [step 2.1], clause 3 is [step 2.2], clause 4 is [step 3.1] and clause 5 is [step 1.2]; the proof is complete. ∎ [step 2.2, step 1.2, step 2.1, step 3.1, step 1.1]
