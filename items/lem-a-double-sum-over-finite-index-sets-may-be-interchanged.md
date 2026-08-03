---
id: lem-a-double-sum-over-finite-index-sets-may-be-interchanged
kind: lemma
title: "$\\sum_{i \\in S}\\sum_{j \\in T} a_{ij} = \\sum_{(i,j) \\in S \\times T} a_{ij} = \\sum_{j \\in T}\\sum_{i \\in S} a_{ij}$ for finite index sets $S$ and $T$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-over-a-finite-index-set, thm-sum-rule, thm-product-rule, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-finite-sum, def-nat-finite-sum-and-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
    - title: "Mathematics for Computer Science (MIT OpenCourseWare)"
      url: "https://live.ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_textbook.pdf"
pipeline_run: null
---

## Statement

Let $S$ and $T$ be finite sets and let $a : S \times T \to \mathbb{R}$, or
$a : S \times T \to \mathbb{N}$, written $a_{ij}$ for $a(i,j)$. Then $S \times T$
is finite and

$$\sum_{i \in S}\Big(\sum_{j \in T} a_{ij}\Big) \;=\; \sum_{p \in S \times T} a_p \;=\; \sum_{j \in T}\Big(\sum_{i \in S} a_{ij}\Big),$$

all three sums being the sums over a finite index set of
[[def-sum-over-a-finite-index-set]], carried by [[def-finite-sum]] when the
values are real and by [[def-nat-finite-sum-and-product]] when they are natural.

**This is not a clause of [[thm-sum-rule]].** That theorem splits one sum along a
partition of *its own* index set; the identity above exchanges the roles of two
*different* index sets, and it is what an argument that counts a set of pairs in
two ways needs. Both outer index sets may be empty, in which case all three
quantities are $0$ (respectively $1$ for the product form of the underlying
recursion), since a sum over the empty index set is the empty sum.

## Facts & Assumptions

**Given:** Finite sets $S$ and $T$, and a list $a$ defined on $S \times T$ with values in $\mathbb{R}$ or in $\mathbb{N}$.

[L1] $S \times T$ is finite ([[thm-product-rule]], clause 1), and every subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

[L2] Splitting along a partition: if $P$ is finite, $J$ is finite, and $(P_j)_{j \in J}$ are pairwise disjoint subsets of $P$ whose union is $P$, then $\sum_{p \in P} a_p = \sum_{j \in J}\big(\sum_{p \in P_j} a_p\big)$, for real-valued and for natural-valued $a$ alike ([[thm-sum-rule]], clause 3).

[L3] Reindexing along a bijection: if $h : V \to P$ is a bijection of finite sets then $\sum_{v \in V} a_{h(v)} = \sum_{p \in P} a_p$ ([[def-sum-over-a-finite-index-set]], clause (b)).

[L4] A map with a two-sided inverse is a bijection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The row slices. For $i \in S$ put $P_i := \{i\} \times T$. Each $P_i$ is a subset of the finite set $S \times T$, hence finite; the family $(P_i)_{i \in S}$ is pairwise disjoint, because a point of $P_i$ has first coordinate $i$; and its union is $S \times T$, because every $p \in S \times T$ is $(i,j)$ for some $i \in S$ and $j \in T$. [L1, construct]

1.2 The column slices. For $j \in T$ put $Q_j := S \times \{j\}$. The same three observations with the coordinates exchanged show that each $Q_j$ is finite, that the family $(Q_j)_{j \in T}$ is pairwise disjoint, and that its union is $S \times T$. [L1, construct]

1.3 The slice bijections. For $i \in S$ the map $h_i : T \to P_i$, $h_i(j) := (i,j)$, takes its values in $P_i$ by definition and has the second-coordinate map as a two-sided inverse, so it is a bijection; likewise $g_j : S \to Q_j$, $g_j(i) := (i,j)$, is a bijection for each $j \in T$. [L3, L4, construct]

2.1 Splitting the sum over $S \times T$ along the row slices gives $\sum_{p \in S \times T} a_p = \sum_{i \in S}\big(\sum_{p \in P_i} a_p\big)$. [step 1.1, L2]

2.2 Splitting it along the column slices gives $\sum_{p \in S \times T} a_p = \sum_{j \in T}\big(\sum_{p \in Q_j} a_p\big)$. [step 1.2, L2]

2.3 Reindexing each inner sum along the bijection of step 1.3 gives $\sum_{p \in P_i} a_p = \sum_{j \in T} a_{h_i(j)} = \sum_{j \in T} a_{ij}$ for every $i \in S$, and $\sum_{p \in Q_j} a_p = \sum_{i \in S} a_{ij}$ for every $j \in T$. [step 1.3, L3]

3.1 Substituting step 2.3 into step 2.1 and into step 2.2 gives $\sum_{i \in S}\big(\sum_{j \in T} a_{ij}\big) = \sum_{p \in S \times T} a_p = \sum_{j \in T}\big(\sum_{i \in S} a_{ij}\big)$, which is the statement. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **What is actually used.** Only the splitting clause and the reindexing clause, and each of them is stated for a real-valued and for a natural-valued summand. One argument therefore proves both readings, and nothing about subtraction or about the order enters.

- **Why the slices and not an induction.** The two partitions of $S \times T$ are the same set cut two ways, so the identity is a statement about one sum, not a statement relating two recursions. That is why no induction appears and why the empty cases need no separate treatment: a sum over an empty index set is the empty sum, and the argument passes through it unchanged.
