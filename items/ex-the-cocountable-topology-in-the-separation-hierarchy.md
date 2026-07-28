---
id: ex-the-cocountable-topology-in-the-separation-hierarchy
kind: example
title: "The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal"
status: draft
origin: session
deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-hausdorff-space, def-regular-and-t3-spaces, def-normal-and-t4-spaces,
       def-sequence-convergence-top, def-countable, lem-subset-of-countable,
       lem-countable-iff-surjection-from-n, thm-r-uncountable,
       thm-countable-union-of-countable, def-interior-closure-boundary-top,
       def-topological-space, fs-unique-sequential-limits-imply-hausdorff]
justified_by: []
aliases: []
landmark: false
short: "cocountable topology in the hierarchy"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §20"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ the cocountable topology
$\mathcal{T}_{\mathrm{coc}} = \{\varnothing\} \cup \{\, U \subseteq \mathbb{R} : \mathbb{R} \setminus U \text{ is at most countable} \,\}$
([[def-standard-topologies]]), whose closed sets are $\mathbb{R}$ together with
the at most countable subsets of $\mathbb{R}$ ([[def-countable]]). Then:

1. $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is **$T_1$**
   ([[def-t0-and-t1-spaces]]).
2. **Every convergent sequence is eventually constant**, so every sequence has at
   most one limit ([[def-sequence-convergence-top]]).
3. No two nonempty open sets are disjoint. Consequently the space is **not
   Hausdorff** ([[def-hausdorff-space]]), **not regular**
   ([[def-regular-and-t3-spaces]]) and **not normal**
   ([[def-normal-and-t4-spaces]]).

Clauses 1, 2 and the Hausdorff half of clause 3 are what refute the claim that
unique sequential limits force the Hausdorff condition
([[fs-unique-sequential-limits-imply-hausdorff]]); clause 3's other two halves
place the space in the hierarchy exactly where the cofinite topology sits, at
$T_1$ and no higher.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, a sequence $(x_k)_{k \in \mathbb{N}}$ in $\mathbb{R}$, and points $p, q, u, v, w \in \mathbb{R}$.

[A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).

[A2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[L1] A topology is $T_1$ exactly when it contains the cofinite topology on the same set; a finite set is at most countable ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]], [[def-countable]]).

[L2] The range of a sequence is nonempty and at most countable, and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]]).

[L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.

[L4] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), so in particular it has at least three distinct points.

[L5] Hausdorff, regular and normal are as in [[def-hausdorff-space]], [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]].

## Verification

**Proof technique:** direct.

1.1 The cofinite topology on $\mathbb{R}$ is contained in $\mathcal{T}_{\mathrm{coc}}$, a finite complement being at most countable, so the space is $T_1$, which is claim 1. [A1, L1]

1.2 Fix three distinct points $u, v, w$ of $\mathbb{R}$, for instance $0$, $1$ and $2$. [L4]

1.3 Suppose $x_k \to p$ and put $R := \{\, x_k : k \in \mathbb{N} \,\} \setminus \{p\}$, at most countable by [L2]; then $\mathbb{R} \setminus R$ is open by [A1] and contains $p$, so [A2] gives $K$ with $x_k \notin R$ for all $k \ge K$. [A1, A2, L2, assume-hyp]

1.4 Let $U, V$ be nonempty open sets and suppose $U \cap V = \varnothing$; then $\mathbb{R} = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$ is at most countable by [A1] and [L3], contradicting [L4]. So no two nonempty open sets are disjoint. [A1, L3, L4, assume-hyp]

2.1 Under step 1.3: for $k \ge K$ the point $x_k$ lies in the range of the sequence and outside $R$, hence equals $p$; so the sequence is eventually constant with value $p$. [step 1.3]

2.2 Any open $U \ni u$ and open $V \ni v$ are nonempty, hence meet by step 1.4, so the space is not Hausdorff. [step 1.2, step 1.4, L5]

2.3 $\{v\}$ is at most countable, hence closed by [A1], and $u \notin \{v\}$; any open $U \ni u$ and open $V \supseteq \{v\}$ are nonempty, hence meet by step 1.4, so the space is not regular. [step 1.2, step 1.4, A1, L5]

2.4 $\{v\}$ and $\{w\}$ are disjoint nonempty closed sets by [A1] and step 1.2; any open sets containing them are nonempty, hence meet by step 1.4, so the space is not normal. [step 1.2, step 1.4, A1, L5]

3.1 Under step 1.3: if also $x_k \to q$ with $q \ne p$, then $\mathbb{R} \setminus \{p\}$ is open by [A1] and contains $q$, so [A2] gives $K'$ with $x_k \ne p$ for all $k \ge K'$, contradicting step 2.1 at any index at least both $K$ and $K'$. So a sequence has at most one limit, which with step 2.1 is claim 2. [step 2.1, A1, A2]

4.1 Steps 2.2, 2.3 and 2.4 complete claim 3, step 3.1 is claim 2 and step 1.1 is claim 1. [step 1.1, step 3.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **Sequences cannot see this topology.** A sequence reaches at most countably many points, and every at most countable set is closed, so the complement of the values other than the limit is an open set that forces the sequence to be eventually constant. Uniqueness of limits is therefore free, and it carries no separation information at all — which is the point of [[fs-unique-sequential-limits-imply-hausdorff]].

- **The failure of $T_2$, $T_3$ and $T_4$ has the same one-line cause as in the cofinite case**: two at most countable sets cannot cover an uncountable one, so two nonempty open sets always meet. What changes between the two examples is only how large a set has to be for the topology to be interesting: infinite for cofinite, uncountable for cocountable.

- **On an at most countable set the cocountable topology is discrete** ([[def-standard-topologies]]), so the uncountability of $\mathbb{R}$ is doing real work here and not merely supplying a familiar underlying set.
