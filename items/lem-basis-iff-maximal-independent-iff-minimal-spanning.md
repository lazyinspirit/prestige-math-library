---
id: lem-basis-iff-maximal-independent-iff-minimal-spanning
kind: lemma
title: "For $B \\subseteq V$ the following are equivalent: $B$ is a basis; $B$ is a maximal linearly independent subset of $V$; $B$ is a minimal spanning subset of $V$ — maximality and minimality being in the inclusion order"
status: draft
origin: session
deps: [def-linear-basis, def-linear-independence, lem-independent-list-is-injective, lem-adjoining-a-vector-outside-the-span, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-linear-subspace, def-partial-order, def-maximal-element, def-vector-space, def-field]
justified_by: []
aliases: [lem-basis-characterisations]
landmark: true
short: "basis = maximal independent = minimal spanning"
proof_strategy: direct
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
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). Let
$\mathcal{I}$ be the set of linearly independent subsets of $V$
([[def-linear-independence]]) and $\mathcal{S}$ the set of spanning subsets of
$V$ ([[def-linear-combination-and-span]]), each partially ordered by inclusion
([[def-partial-order]]). For $B \subseteq V$ the following are equivalent.

- **(a)** $B$ is a basis of $V$ ([[def-linear-basis]]).
- **(b)** $B$ is a maximal element of $(\mathcal{I}, \subseteq)$
  ([[def-maximal-element]]): $B$ is linearly independent, and no linearly
  independent $A \subseteq V$ satisfies $B \subsetneq A$.
- **(c)** $B$ is a minimal element of $(\mathcal{S}, \subseteq)$: $B$ spans $V$,
  and no spanning $A \subseteq V$ satisfies $A \subsetneq B$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $B \subseteq V$.

[L1] $B$ is a basis of $V$ when $B$ is linearly independent and $\operatorname{span}(B) = V$ ([[def-linear-basis]]).

[L2] A subset $T \subseteq V$ is linearly dependent if and only if some $t \in T$ lies in $\operatorname{span}(T \setminus \{t\})$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]]).

[L3] If $A$ is linearly independent and $w \notin \operatorname{span}(A)$, then $w \notin A$ and $A \cup \{w\}$ is linearly independent ([[lem-adjoining-a-vector-outside-the-span]]).

[L4] Every subset of a linearly independent subset of $V$ is linearly independent ([[lem-independent-list-is-injective]], claim 7).

[L5] $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$; and $T \subseteq T'$ implies $\operatorname{span}(T) \subseteq \operatorname{span}(T')$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[def-linear-subspace]]).

[L6] Inclusion is a partial order, and $m$ is maximal in a poset when no element is strictly above it, minimal when no element is strictly below it ([[def-partial-order]], [[def-maximal-element]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b). Let $B$ be a basis, so $B$ is linearly independent and $\operatorname{span}(B) = V$. Suppose some linearly independent $A$ satisfies $B \subsetneq A$, and pick $w \in A \setminus B$. Then $B \cup \{w\} \subseteq A$, so $B \cup \{w\}$ is linearly independent. On the other hand $w \in V = \operatorname{span}(B)$, and $B = (B \cup \{w\}) \setminus \{w\}$ because $w \notin B$, so $B \cup \{w\}$ is linearly dependent. These contradict each other, so no such $A$ exists and $B$ is maximal in the inclusion order on the linearly independent subsets. [L1, L2, L4, L6]

1.2 (b) implies (a). Let $B$ be maximal among the linearly independent subsets of $V$. If some $w \in V$ had $w \notin \operatorname{span}(B)$, then $B \cup \{w\}$ would be linearly independent with $w \notin B$, so $B \subsetneq B \cup \{w\}$, contradicting maximality. Hence $V \subseteq \operatorname{span}(B)$, and $\operatorname{span}(B) \subseteq V$ always, so $\operatorname{span}(B) = V$ and $B$ is a basis. [L1, L3, L5, L6]

1.3 (a) implies (c). Let $B$ be a basis, so $B$ spans $V$. Suppose some spanning $A$ satisfies $A \subsetneq B$, and pick $b \in B \setminus A$. Then $A \subseteq B \setminus \{b\}$, so $V = \operatorname{span}(A) \subseteq \operatorname{span}(B \setminus \{b\})$ by monotonicity, and in particular $b \in \operatorname{span}(B \setminus \{b\})$. That makes $B$ linearly dependent, contradicting the assumption that $B$ is a basis. So $B$ is minimal among the spanning subsets. [L1, L2, L5, L6]

1.4 (c) implies (a). Let $B$ be minimal among the spanning subsets of $V$, so $\operatorname{span}(B) = V$. If $B$ were linearly dependent, there would be $b \in B$ with $b \in \operatorname{span}(B \setminus \{b\})$; then $\operatorname{span}(B \setminus \{b\})$ is a linear subspace of $V$ containing $B \setminus \{b\}$ and also containing $b$, hence containing $B$, hence containing $\operatorname{span}(B) = V$ by minimality of the span. So $B \setminus \{b\}$ spans $V$ while $B \setminus \{b\} \subsetneq B$, contradicting minimality of $B$. Hence $B$ is linearly independent and is a basis. [L1, L2, L5, L6]

2.1 Steps 1.1 and 1.2 give the equivalence of (a) and (b), and steps 1.3 and 1.4 give the equivalence of (a) and (c); so all three conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

- **Maximal and minimal, never greatest and least.** There is in general no largest independent subset and no smallest spanning subset: a space usually has many bases, pairwise incomparable under inclusion, and [[def-maximal-element]] is explicit that maximality does not imply greatestness. The companion page exhibits a three-element spanning set of $F^{2}$ containing three different bases.

- **This is the lemma that converts an existence problem into an order problem.** Producing a basis becomes producing a maximal element of a poset, which is what Zorn's lemma does ([[thm-zorn]]); producing one inside a given spanning set becomes the same problem in a smaller poset. Both are carried out in [[thm-every-independent-set-extends-to-a-basis]], whose poset is the one named in (b) above, cut down to the subsets lying between a given independent set and a given spanning set.

- **The two orders are the same order on different families.** Nothing above compares an independent set with a spanning set; the maximality of (b) is taken inside $\mathcal{I}$ and the minimality of (c) inside $\mathcal{S}$, and a basis is exactly a set that is extreme in both families at once.
