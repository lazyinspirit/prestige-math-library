---
id: ex-finite-choice-by-induction
kind: example
title: "Finite choice written out: a choice function for three sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-finite-choice, def-choice-function, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
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
The induction of [[lem-finite-choice]] is exactly this process stated in general.
That lemma indexes the family by a natural number rather than counting its
members: writing the three sets as the values $F(0), F(1), F(2)$ of a function
$F$ with domain $3 = \{0,1,2\}$ ([[def-natural-numbers]]), the successor step restricts $F$ to the shorter
index set, takes a choice function for those values, and overwrites it with one
further pair.

## Facts & Assumptions

**Given:** The family $\mathcal{F} = \{\{0,1\}, \{1,2\}, \{2,3\}\}$, whose members are sets of natural numbers, together with the function $F$ with domain the von Neumann natural number $3 = \{0,1,2\}$ ([[def-natural-numbers]]) given by $F(0) = \{0,1\}$, $F(1) = \{1,2\}$, $F(2) = \{2,3\}$, so that $\mathcal{F} = F[3]$.

[L1] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L2] For every natural number $n$ and every function $F$ with domain $n$ all of whose values are nonempty, the family of values $F[n]$ has a choice function; the proof is an induction on $n$ whose successor step restricts $F$ to $n \subseteq \sigma(n)$, takes a choice function for $F[n]$, and overwrites it with the single pair $(F(n), a)$ for some $a \in F(n)$ ([[lem-finite-choice]]).

## Verification

**Proof technique:** direct.

1.1 The three members are pairwise distinct: $0$ belongs to $\{0,1\}$ and to neither of the others, $1$ belongs to $\{1,2\}$ but not to $\{2,3\}$, and $\{0,1\} \ne \{2,3\}$ since $0 \notin \{2,3\}$; so $\mathcal{F}$ has exactly three members. [given]

1.2 Every member is nonempty: $0 \in \{0,1\}$, $1 \in \{1,2\}$ and $2 \in \{2,3\}$. [given]

2.1 Let $g = \{\, (\{0,1\}, 0),\ (\{1,2\}, 1),\ (\{2,3\}, 2) \,\}$, the set whose three elements are those ordered pairs; it is a relation with domain $\mathcal{F}$, and since the three members of $\mathcal{F}$ are pairwise distinct its three first coordinates are pairwise distinct, so it is single valued: $g$ is a function on $\mathcal{F}$. [step 1.1, construct]

3.1 Its values lie where they must: $g(\{0,1\}) = 0 \in \{0,1\}$, $g(\{1,2\}) = 1 \in \{1,2\}$ and $g(\{2,3\}) = 2 \in \{2,3\}$, so $g(S) \in S$ for every $S \in \mathcal{F}$ and $g$ is a choice function for $\mathcal{F}$. [step 2.1, step 1.2, L1]

4.1 A function of this shape is what the induction of [L2] returns when run on the listing $F$: since $F$ has domain $3$ and each value is nonempty by step 1.2, [L2] applies with $n = 3$ and yields a choice function for $F[3] = \mathcal{F}$, obtained in three stages, one pick at each index, so no choice principle is invoked and none is needed. Nothing here rests on counting the members of $\mathcal{F}$, only on the listing exhibited in the Given. [step 3.1, step 1.2, given, L2] ∎

## Remarks

- **Where an axiom would have been needed, and why it was not.** Each pick is a single existential instantiation from a single nonempty set, licensed by first-order logic alone. Three of them are made, one at a time, and three is a natural number, so the process stops. What ZF does not supply is a choice function for every arbitrary family of nonempty sets. An infinite family can still have a choice function given by a defining rule — such as the minimum rule below — so the gap filled by the Axiom of Choice is arbitrary families, not mere infinitude.

- **Choice functions are not unique.** Taking the larger element of each pair gives another one, with values $1, 2, 3$; since each member has two elements there are $2 \cdot 2 \cdot 2 = 8$ choice functions for $\mathcal{F}$ in all. Nothing in the definition prefers one of them.

- The particular $g$ displayed above is the rule $S \mapsto \min S$, which happens to work for every nonempty set of natural numbers at once ([[ex-canonical-choice-on-naturals]]). That is a feature of $\mathbb{N}$, not of finiteness. The two ingredients come apart in [[ex-russells-socks]], where the family is infinite and carries no such rule.
