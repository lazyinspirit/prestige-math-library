---
id: ex-finite-choice-by-induction
kind: example
title: "Finite choice written out: a choice function for three sets"
status: draft
origin: session
deps: [lem-finite-choice, def-choice-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Example

Let

$$\mathcal{F} = \{\, \{0,1\},\ \{1,2\},\ \{2,3\} \,\},$$

a family of three nonempty sets of natural numbers. A choice function for
$\mathcal{F}$ ([[def-choice-function]]) can be written down outright, by listing
its three values:

$$g(\{0,1\}) = 0, \qquad g(\{1,2\}) = 1, \qquad g(\{2,3\}) = 2.$$

Nothing was assumed to produce it. Each value is one element taken from one set
already known to be nonempty, and three such picks are made one after another.
The induction of [[lem-finite-choice]] is exactly this process stated in general:
remove one member from the family, pick an element of it, and glue that single
pair onto a choice function for the remaining members.

## Facts & Assumptions

**Given:** The family $\mathcal{F} = \{\{0,1\}, \{1,2\}, \{2,3\}\}$, whose members are sets of natural numbers.

[L1] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L2] Every family of exactly $n$ nonempty sets has a choice function, for every natural number $n$, and the proof is an induction whose successor step removes one member, picks one element of it, and extends a choice function for the rest ([[lem-finite-choice]]).

## Verification

**Proof technique:** direct.

1.1 The three members are pairwise distinct: $0$ belongs to $\{0,1\}$ and to neither of the others, $1$ belongs to $\{1,2\}$ but not to $\{2,3\}$, and $\{0,1\} \ne \{2,3\}$ since $0 \notin \{2,3\}$; so $\mathcal{F}$ has exactly three members. [given]

1.2 Every member is nonempty: $0 \in \{0,1\}$, $1 \in \{1,2\}$ and $2 \in \{2,3\}$. [given]

2.1 Let $g = \{\, (\{0,1\}, 0),\ (\{1,2\}, 1),\ (\{2,3\}, 2) \,\}$, the set whose three elements are those ordered pairs; it is a relation with domain $\mathcal{F}$, and since the three members of $\mathcal{F}$ are pairwise distinct its three first coordinates are pairwise distinct, so it is single valued: $g$ is a function on $\mathcal{F}$. [step 1.1, construct]

3.1 Its values lie where they must: $g(\{0,1\}) = 0 \in \{0,1\}$, $g(\{1,2\}) = 1 \in \{1,2\}$ and $g(\{2,3\}) = 2 \in \{2,3\}$, so $g(S) \in S$ for every $S \in \mathcal{F}$ and $g$ is a choice function for $\mathcal{F}$. [step 2.1, step 1.2, L1]

4.1 A function of this shape is what the induction of [L2] returns when run on $\mathcal{F}$: three stages, one member removed and one element picked at each, the three picks then glued together, so no choice principle is invoked and none is needed. [step 3.1, L2] ∎

## Remarks

- **Where an axiom would have been needed, and why it was not.** Each pick is a
  single existential instantiation from a single nonempty set, licensed by
  first-order logic alone. Three of them are made, one at a time, and three is a
  natural number, so the process stops. What ZF cannot do is make infinitely
  many such instantiations at once, and that is the whole of the gap that the
  Axiom of Choice fills.

- **Choice functions are not unique.** Taking the larger element of each pair
  gives another one, with values $1, 2, 3$; since each member has two elements
  there are $2 \cdot 2 \cdot 2 = 8$ choice functions for $\mathcal{F}$ in all.
  Nothing in the definition prefers one of them.

- The particular $g$ displayed above is the rule $S \mapsto \min S$, which
  happens to work for every nonempty set of natural numbers at once
  ([[ex-canonical-choice-on-naturals]]). That is a feature of $\mathbb{N}$, not
  of finiteness. The two ingredients come apart in [[ex-russells-socks]], where
  the family is infinite and carries no such rule.
