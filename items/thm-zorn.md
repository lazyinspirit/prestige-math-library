---
id: thm-zorn
kind: theorem
title: "Zorn's lemma"
status: published
origin: session
deps: [thm-bourbaki-witt, def-axiom-of-choice, def-maximal-element, def-upper-bound, def-chain, def-partial-order]
justified_by: []
forward_refs: [cex-zorn-hypothesis-fails]
aliases: [thm-zorns-lemma]
landmark: true
short: "Zorn's lemma"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## Facts & Assumptions

**Given:** A nonempty poset $(P, \le)$ in which every chain has an upper bound, and the Axiom of Choice.

[A1] $P \ne \emptyset$, and every chain $C \subseteq P$ has an upper bound in $P$.

[A2] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] A progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

[L2] $m$ is maximal when there is no $x$ with $m < x$ ([[def-maximal-element]]).

[L3] $u$ is a strict upper bound of $S$ when $s < u$ for every $s \in S$ ([[def-upper-bound]]).

[L4] The empty set is a chain, and a subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive ($u \le v$ and $v \le w$ imply $u \le w$) and antisymmetric ($u \le v$ and $v \le u$ imply $u = v$); the strict order $u < v$ means $u \le v$ and $u \ne v$, so $<$ is irreflexive ([[def-partial-order]]).

[L6] Inclusion is a partial order on any collection of sets: $A \subseteq A$; $A \subseteq B$ and $B \subseteq A$ give $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$ ([[def-partial-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ has no maximal element. [assume-contra]

1.2 Let $\mathcal{C}$ be the set of all chains of $P$, a subset of the power set of $P$, partially ordered by inclusion. [L4, L6, construct]

2.1 $(\mathcal{C}, \subseteq)$ is a chain-complete poset: if $\mathcal{D} \subseteq \mathcal{C}$ is a chain under inclusion then $\bigcup \mathcal{D}$ is a chain of $P$, since any two of its elements lie in a common member of $\mathcal{D}$, and it is the least upper bound of $\mathcal{D}$ under inclusion; the empty chain has least upper bound $\bigcup \emptyset = \emptyset$, which is a chain. [step 1.2, L4, L6]

2.2 For $C \in \mathcal{C}$ let $S_C$ be the set of strict upper bounds of $C$ in $P$. [step 1.2, L3, construct]

3.1 Each $S_C$ is nonempty: $C$ has an upper bound $u$ in $P$ by hypothesis, taking any element of the nonempty $P$ when $C = \emptyset$; by assumption $u$ is not maximal, so there is $v$ with $u < v$; then for every $c \in C$ transitivity gives $c \le v$ from $c \le u \le v$, and $c \ne v$, since $c = v$ would give $v \le u$ and $u \le v$, hence $u = v$ by antisymmetry, contradicting $u < v$; so $c < v$ for every $c \in C$ and $v \in S_C$. [step 2.2, step 1.1, A1, L2, L3, L5]

4.1 Apply the Axiom of Choice to the family $\mathcal{S} = \{S_C : C \in \mathcal{C}\}$, every member of which is nonempty, obtaining a choice function $g$ with $g(S) \in S$ for each $S \in \mathcal{S}$; composing with the map $C \mapsto S_C$, which is a function on $\mathcal{C}$, yields a selection $C \mapsto g(S_C) \in S_C$ defined for every chain $C$, and no injectivity of $C \mapsto S_C$ is needed, since two chains with the same set of strict upper bounds simply receive the same chosen element. [step 3.1, A2]

5.1 Define $f(C) = C \cup \{g(S_C)\}$ for $C \in \mathcal{C}$; this is again a chain, because $g(S_C)$ is a strict upper bound of $C$ and so is comparable to every element of $C$. [step 4.1, step 2.2, L3, L4, L5, construct]

6.1 $f$ is progressive for inclusion, since $C \subseteq f(C)$ by construction. [step 5.1]

7.1 By Bourbaki–Witt applied to the chain-complete $\mathcal{C}$ and the progressive $f$, there is $C_0 \in \mathcal{C}$ with $f(C_0) = C_0$, that is $g(S_{C_0}) \in C_0$. [step 2.1, step 6.1, L1]

8.1 But $g(S_{C_0})$ is a strict upper bound of $C_0$, so every element of $C_0$ is strictly below it, giving $g(S_{C_0}) < g(S_{C_0})$, which is impossible because $<$ is irreflexive. [step 7.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- **The Axiom of Choice is used exactly once, at step 4.1**, and nowhere else. Everything before it, including Bourbaki–Witt, is a theorem of ZF. That is why the fixed point theorem is kept as a separate item: it marks the boundary between what is free and what is bought.
- The hypothesis is about **all** chains, including the empty one, whose upper bounds are exactly the elements of $P$. So on this library's convention, where $\emptyset$ is a chain ([[def-chain]]), requiring every chain to have an upper bound **already forces** $P \ne \emptyset$, and the nonemptiness hypothesis is stated separately for emphasis rather than as an independent assumption. In particular the empty poset does **not** satisfy the hypothesis: there the empty chain has no upper bound, because there is nothing at all to be one. Under the competing convention, on which chains are required to be nonempty, nonemptiness of $P$ is genuinely independent and cannot be dropped. See [[cex-zorn-hypothesis-fails]] for the failure when unbounded chains exist.
- The conclusion is **maximal, not greatest**, and conflating the two is the most common error in applying the lemma ([[fs-maximal-is-greatest]]).
- The converse holds: Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]), so the two are equivalent over ZF ([[cor-ac-iff-zorn]]).
