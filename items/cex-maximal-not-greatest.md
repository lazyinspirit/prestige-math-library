---
id: cex-maximal-not-greatest
kind: counterexample
title: "Two maximal elements and no greatest element"
status: draft
origin: session
deps: [def-maximal-element, fs-maximal-is-greatest, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maximal and minimal elements (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximal_and_minimal_elements"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every poset a maximal element is a greatest element, so
that having nothing strictly above it forces an element to lie above everything
([[fs-maximal-is-greatest]], [[def-maximal-element]]).

The witness is

$$P = \mathcal{P}(\{1,2\}) \setminus \{\{1,2\}\} = \{\, \emptyset,\ \{1\},\ \{2\} \,\},$$

ordered by inclusion ([[def-partial-order]]). Both $\{1\}$ and $\{2\}$ are
maximal in $P$, neither is greatest, and $P$ has no greatest element at all.

## Facts & Assumptions

**Given:** $P = \mathcal{P}(\{1,2\}) \setminus \{\{1,2\}\} = \{\emptyset, \{1\}, \{2\}\}$, ordered by inclusion; every member of $P$ is a subset of $\{1,2\}$, and $\{1,2\} \notin P$.

[L1] $m$ is maximal in $P$ when no $x \in P$ satisfies $m < x$, and greatest when $x \le m$ for every $x \in P$ ([[def-maximal-element]]).

[L2] A partial order is reflexive, antisymmetric and transitive, and it need not make every two elements comparable; $x < y$ abbreviates $x \le y$ together with $x \ne y$ ([[def-partial-order]]).

## Counterexample

**Proof technique:** direct.

1.1 Inclusion is reflexive, antisymmetric and transitive on any collection of sets, so $(P, \subseteq)$ is a poset, and it has the three elements $\emptyset$, $\{1\}$, $\{2\}$, which are pairwise distinct. [given, L2]

1.2 $\{1\}$ and $\{2\}$ are incomparable: $1 \notin \{2\}$ gives $\{1\} \not\subseteq \{2\}$, and $2 \notin \{1\}$ gives $\{2\} \not\subseteq \{1\}$. [given, L2]

2.1 $\{1\}$ is maximal: if $x \in P$ and $\{1\} \subseteq x$ then $1 \in x$, and of the three members of $P$ only $\{1\}$ contains $1$, so $x = \{1\}$; hence no $x \in P$ satisfies $\{1\} \subsetneq x$. [step 1.1, L1]

2.2 $\{2\}$ is maximal, by the same argument with $2$ in place of $1$: the only member of $P$ containing $2$ is $\{2\}$. [step 1.1, L1]

2.3 Neither of them is greatest: $\{2\} \not\subseteq \{1\}$, so $\{1\}$ fails to dominate $\{2\}$, and symmetrically $\{2\}$ fails to dominate $\{1\}$. [step 1.2, L1]

2.4 $P$ has no greatest element at all: a greatest $M \in P$ would satisfy $\{1\} \subseteq M$ and $\{2\} \subseteq M$, hence $\{1,2\} \subseteq M$; but $M \subseteq \{1,2\}$, so $M = \{1,2\}$, which is not a member of $P$. [step 1.1, given, L1]

3.1 So $(P, \subseteq)$ is a poset with two maximal elements and no greatest element, which refutes the claim: maximality and greatestness are different properties, and only the first is what Zorn's lemma delivers. [step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **This witness is not the smallest one.** The refutation in
  [[fs-maximal-is-greatest]] uses a two element antichain, which is minimal, but
  not for the reason one might expect: only the *empty* poset satisfies the claim
  vacuously, having no maximal element at all, while a *one element* poset
  satisfies it **outright**, since its single element is maximal and is greatest
  by reflexivity. Two elements is therefore the least size at which the claim can
  fail, and it does fail there. The witness
  here adds a least element $\emptyset$ below both maximal elements, which
  matters because it shows the failure is not caused by the poset splitting into
  unrelated pieces. Even a poset with a bottom, in which every element is
  comparable to something, can carry several maximal elements.

- **The general pattern.** Order the proper subsets of a set $X$ with at least
  two elements by inclusion. The maximal elements are exactly the sets
  $X \setminus \{x\}$ for $x \in X$: any proper $A \subsetneq X$ sits inside
  $X \setminus \{x\}$ for any $x \in X \setminus A$, and nothing lies strictly
  between $X \setminus \{x\}$ and $X$. Distinct points give distinct maximal
  elements, so there is one for each point of $X$, and there is no greatest
  element. The poset above is the case $X = \{1,2\}$.

- **What would rescue the claim** is totality. In a totally ordered set a maximal
  element is greatest, since every other element is comparable to it and cannot
  be strictly above it, which is why the confusion survives in intuition trained
  on $\mathbb{R}$.

- Maximality says nothing about comparability: here each maximal element is
  incomparable to the other, and both are above only $\emptyset$. Applications of
  [[thm-zorn]] must therefore be arranged so that "nothing is strictly above it"
  already means "it cannot be extended", since nothing stronger is available.
