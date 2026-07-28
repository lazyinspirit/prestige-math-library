---
id: fs-unique-sequential-limits-imply-hausdorff
kind: false-statement
title: "FALSE: a space in which every sequence has at most one limit is Hausdorff"
status: published
origin: session
deps: [def-standard-topologies, def-sequence-convergence-top, def-hausdorff-space,
       def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed, def-countable,
       lem-subset-of-countable, lem-countable-iff-surjection-from-n,
       thm-r-uncountable, thm-countable-union-of-countable, def-topological-space,
       def-metrizable-space]
justified_by: []
aliases: []
landmark: false
short: "unique sequential limits do not give Hausdorff"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "S. Willard, General Topology, §13"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

**False claim:** if every sequence in a topological space has at most one limit
([[def-sequence-convergence-top]]), then the space is Hausdorff
([[def-hausdorff-space]]).

The refutation is the **cocountable topology** $\mathcal{T}_{\mathrm{coc}}$ on
$\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
together with the complements of the at most countable subsets of $\mathbb{R}$.
In it every convergent sequence is eventually constant, so limits are unique; and
no two nonempty open sets are disjoint, so the space is not Hausdorff. It is
nevertheless $T_1$.

**This is why [[def-sequence-convergence-top]] refuses the notation
$\lim_k x_k$ in a general space and restores it only under a hypothesis.**
Uniqueness of sequential limits is strictly weaker than the Hausdorff condition,
so it is uniqueness, and not the Hausdorff condition, that is the exact
licensing condition for the symbol — and the two are not interchangeable.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, a sequence $(x_k)_{k \in \mathbb{N}}$ in $\mathbb{R}$, and points $p, q \in \mathbb{R}$.

[A1] $\mathcal{T}_{\mathrm{coc}}$ consists of $\varnothing$ together with the sets whose complement in $\mathbb{R}$ is at most countable; its closed sets are $\mathbb{R}$ and the at most countable sets ([[def-standard-topologies]]).

[A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

[L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).

[L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

[L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).

[L4] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]); a finite set is at most countable ([[def-countable]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose $x_k \to p$, and put $R := \{\, x_k : k \in \mathbb{N} \,\} \setminus \{p\}$, which is at most countable by [L1]. [A2, L1, assume-hyp]

1.2 Let $U, V \in \mathcal{T}_{\mathrm{coc}}$ be nonempty and suppose $U \cap V = \varnothing$; then $\mathbb{R} = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$ is a union of two at most countable sets, hence at most countable by [L2], contradicting [L3]. [A1, L2, L3, assume-hyp]

1.3 The cofinite topology on $\mathbb{R}$ is contained in $\mathcal{T}_{\mathrm{coc}}$, a finite set being at most countable, so $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is $T_1$. [A1, L4]

2.1 Under step 1.1: $\mathbb{R} \setminus R$ is open by [A1] and contains $p$, so by [A2] there is $K$ with $x_k \in \mathbb{R} \setminus R$ for all $k \ge K$. [step 1.1, A1, A2]

2.2 So no two nonempty open sets of $\mathcal{T}_{\mathrm{coc}}$ are disjoint; taking $p = 0$ and $q = 1$, any open $U \ni p$ and $V \ni q$ are nonempty and therefore meet, and $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is not Hausdorff. [step 1.2, A3]

3.1 Under step 1.1: for $k \ge K$ the point $x_k$ lies in the range of the sequence and not in $R$, hence $x_k = p$; so the sequence is eventually constant with value $p$. [step 2.1]

4.1 If also $x_k \to q$ with $q \ne p$, then $\mathbb{R} \setminus \{p\}$ is open by [A1], since $\{p\}$ is at most countable, and it contains $q$; so by [A2] there is $K'$ with $x_k \in \mathbb{R} \setminus \{p\}$ for all $k \ge K'$, contradicting step 3.1 at any index at least $\max\{K, K'\}$. [step 3.1, A1, A2]

5.1 By step 4.1 every sequence in $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ has at most one limit. [step 4.1]

6.1 By step 5.1 every sequence has at most one limit and by step 2.2 the space is not Hausdorff, so the claim is false; by step 1.3 the witness is moreover $T_1$. [step 5.1, step 2.2, step 1.3] ∎

## Remarks

- **The refutation is not about pathological sequences but about their scarcity.** In the cocountable topology on an uncountable set a sequence can only reach at most countably many points, and every at most countable set is closed, so convergence degenerates to eventual constancy. Sequences are simply too small to detect this topology, which is also why nothing about it can be read off from sequential arguments.

- **What a countability hypothesis would change is not settled here.** Whether adding first countability to the hypothesis rescues the claim is a question this library does not address, and nothing above asserts an answer. What *is* recorded is the metrizable case, where limits are unique and the space is Hausdorff for reasons independent of each other ([[def-sequence-convergence-top]], [[def-metrizable-space]]).

- **The converse is true and easy.** In a Hausdorff space limits are unique: two distinct limits would have disjoint open neighbourhoods, each of which contains the sequence eventually, which is impossible. That direction is not what this item refutes.
