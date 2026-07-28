---
id: thm-every-independent-set-extends-to-a-basis
kind: theorem
title: "Zorn's lemma gives a basis between any linearly independent set and any spanning set containing it: if $L \\subseteq S \\subseteq V$ with $L$ independent and $\\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \\subseteq B \\subseteq S$"
status: draft
origin: session
deps: [thm-zorn, def-axiom-of-choice, def-partial-order, def-chain, def-upper-bound, def-maximal-element, lem-independence-has-finite-character, lem-adjoining-a-vector-outside-the-span, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [thm-basis-extension, thm-extend-to-a-basis]
landmark: true
short: "independent set extends to a basis inside a spanning set"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which is what
[[thm-zorn]] is proved from. Let $V$ be a vector space over a field $F$
([[def-vector-space]]) and let $L \subseteq S \subseteq V$ with $L$ linearly
independent ([[def-linear-independence]]) and $\operatorname{span}(S) = V$
([[def-linear-combination-and-span]]). Then there is a basis $B$ of $V$
([[def-linear-basis]]) with

$$L \;\subseteq\; B \;\subseteq\; S .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; a field $F$; a vector space $V$ over $F$; and subsets $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$.

[L1] Zorn's lemma: a **nonempty** poset in which **every** chain has an upper bound has a maximal element ([[thm-zorn]], [[def-maximal-element]], [[def-upper-bound]], [[def-chain]]). The hypothesis quantifies over every chain, the empty one included, and the empty set is a chain ([[def-chain]]).

[L2] Inclusion is a partial order on any collection of sets, and every element of a poset is an upper bound of the empty subset, vacuously ([[def-partial-order]], [[def-upper-bound]]).

[L3] The union of a **nonempty** chain of linearly independent subsets of $V$, ordered by inclusion, is linearly independent ([[lem-independence-has-finite-character]], claim 2).

[L4] If $A \subseteq V$ is linearly independent and $w \notin \operatorname{span}(A)$, then $w \notin A$ and $A \cup \{w\}$ is linearly independent ([[lem-adjoining-a-vector-outside-the-span]], claim 2).

[L5] $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[def-linear-subspace]]).

[L6] A basis of $V$ is a linearly independent subset $B$ with $\operatorname{span}(B) = V$ ([[def-linear-basis]]).

## Proof

**Proof technique:** constructive.

1.1 Let $P$ be the set of all $A$ with $L \subseteq A \subseteq S$ and $A$ linearly independent. It is a set, being a subcollection of the power set of $S$, and inclusion partially orders it. [construct, L2]

1.2 $P$ is nonempty, since $L$ itself is linearly independent and satisfies $L \subseteq L \subseteq S$. [L6]

1.3 Every chain $\mathcal{C} \subseteq P$ has an upper bound in $P$. If $\mathcal{C} = \varnothing$, then $L \in P$ is an upper bound, vacuously; this case is not optional, since Zorn's lemma as proved here quantifies over every chain and the empty set is a chain, and the union of the empty chain is $\varnothing$, which need not contain $L$. If $\mathcal{C} \ne \varnothing$, put $A^{*} := \bigcup\mathcal{C}$: it is linearly independent, being the union of a nonempty chain of linearly independent sets; it contains $L$, since $\mathcal{C}$ has a member and every member contains $L$; and it is contained in $S$, since every member is. So $A^{*} \in P$, and it contains every member of $\mathcal{C}$. [L1, L2, L3]

2.1 By Zorn's lemma applied to the nonempty poset of step 1.1, in which every chain has an upper bound by step 1.3, there is a maximal element $B$ of $P$: $B$ is linearly independent, $L \subseteq B \subseteq S$, and no member of $P$ strictly contains $B$. [step 1.1, step 1.2, step 1.3, L1]

3.1 $\operatorname{span}(B) = V$. Let $s \in S$ and suppose $s \notin \operatorname{span}(B)$; then $B \cup \{s\}$ is linearly independent and $s \notin B$, so $B \subsetneq B \cup \{s\}$, while $L \subseteq B \cup \{s\} \subseteq S$, putting $B \cup \{s\}$ in $P$ strictly above $B$ and contradicting maximality. Hence $S \subseteq \operatorname{span}(B)$, so $\operatorname{span}(B)$ is a linear subspace of $V$ containing $S$ and therefore contains $\operatorname{span}(S) = V$; the reverse inclusion is automatic, so $\operatorname{span}(B) = V$. [step 2.1, L4, L5]

4.1 The set $B$ produced in step 2.1 is linearly independent and, by step 3.1, spans $V$, so it is a basis of $V$ with $L \subseteq B \subseteq S$. [step 2.1, step 3.1, L6, discharge-construct] ∎

## Remarks

- **Both classical statements are instances of this one.** "Every vector space has a basis" is the case $L = \varnothing$, $S = V$ ([[cor-every-vector-space-has-a-basis]]), and "every spanning set contains a basis" is the case $L = \varnothing$ ([[cor-every-spanning-set-contains-a-basis]]). They are corollaries of this single Zorn argument rather than two separate ones, which is why the two hypotheses are stated together in the statement above.

- **The choice is declared, not hidden.** The only non-constructive ingredient is [[thm-zorn]], and that item records that the Axiom of Choice is used exactly once inside it. Nothing else above appeals to a choice principle: the poset, its order and the upper bound of a chain are all written down explicitly. Zorn's lemma is equivalent to the Axiom of Choice over ZF ([[cor-ac-iff-zorn]]), so the cost of this theorem is exactly that axiom.

- **The empty chain is a real case here.** [[thm-zorn]] as proved in this library has no nonemptiness clause on chains, and its own remarks note that requiring every chain to have an upper bound already forces the poset to be nonempty. In the poset above the union of the empty chain is $\varnothing$, which lies in $P$ only when $L = \varnothing$; the upper bound supplied instead is $L$. Skipping this case would leave a hole in the verification of Zorn's hypothesis.

- **Maximality is used exactly once**, in step 3.1, and only to exclude one extra vector at a time. That is why [[lem-adjoining-a-vector-outside-the-span]] is stated separately: it is the whole content of the step, and the same lemma does the same job in [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] and in [[thm-dimension-of-a-linear-subspace]].
