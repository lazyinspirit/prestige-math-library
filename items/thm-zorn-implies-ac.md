---
id: thm-zorn-implies-ac
kind: theorem
title: "Zorn's lemma implies the Axiom of Choice"
status: draft
origin: session
deps: [thm-zorn, def-choice-function, def-maximal-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
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

Assume Zorn's lemma ([[thm-zorn]]). Then every family of nonempty sets has a
choice function ([[def-choice-function]]); that is, the Axiom of Choice holds.

## Facts & Assumptions

**Given:** A family $\mathcal{F}$ all of whose members are nonempty, and Zorn's lemma.

[A1] Every member of $\mathcal{F}$ is nonempty.

[L1] A nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A choice function for a family $\mathcal{G}$ is a function $h$ with domain $\mathcal{G}$ such that $h(S) \in S$ for every $S \in \mathcal{G}$ ([[def-choice-function]]).

[L3] $m$ is maximal when there is no element strictly above it ([[def-maximal-element]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $\mathcal{F}$ has no choice function. [assume-contra]

1.2 Let $P$ be the set of partial choice functions: pairs $(\mathcal{G}, h)$ with $\mathcal{G} \subseteq \mathcal{F}$ and $h$ a choice function for $\mathcal{G}$, ordered by $(\mathcal{G}, h) \le (\mathcal{G}', h')$ when $\mathcal{G} \subseteq \mathcal{G}'$ and $h'$ restricted to $\mathcal{G}$ equals $h$. [L2, construct]

2.1 $P$ is nonempty, since the empty function is a choice function for the empty subfamily, so $(\emptyset, \emptyset) \in P$. [step 1.2, L2]

2.2 Every chain in $P$ has an upper bound: given a chain, take the union of the domains and the union of the functions, which is a function because any two of its members are compatible, being comparable in the chain, and which is a choice function for the union of the domains. [step 1.2, L2]

3.1 By Zorn's lemma $P$ has a maximal element $(\mathcal{G}, h)$. [step 2.1, step 2.2, L1]

4.1 If $\mathcal{G} = \mathcal{F}$ then $h$ is a choice function for $\mathcal{F}$, contrary to the assumption; so there exists $S \in \mathcal{F}$ with $S \notin \mathcal{G}$. [step 3.1, step 1.1, L2, choose]

5.1 The set $S$ is nonempty, so there exists an element of $S$; fix one and call it $a$. [step 4.1, A1, choose]

6.1 Then $(\mathcal{G} \cup \{S\}, h \cup \{(S, a)\})$ lies in $P$ and is strictly above $(\mathcal{G}, h)$, since $S \notin \mathcal{G}$. [step 4.1, step 5.1, step 1.2, L2]

7.1 This contradicts maximality of $(\mathcal{G}, h)$, so the assumption fails and $\mathcal{F}$ has a choice function. [step 6.1, step 3.1, L3, discharge-contradiction] ∎

## Remarks

- Step 5.1 makes a single existential instantiation, exactly as in
  [[lem-finite-choice]], and is not a use of choice. The work of choosing across
  all of $\mathcal{F}$ at once has already been done by Zorn's lemma at step 3.1.
- The poset of partial choice functions is the standard vehicle for this
  direction, and it illustrates the usual shape of a Zorn argument: order the
  partial solutions by extension, check that a chain of them unions to a partial
  solution, and observe that a maximal partial solution cannot be partial.
- Together with [[thm-zorn]] this gives the equivalence recorded in
  [[cor-ac-iff-zorn]].
