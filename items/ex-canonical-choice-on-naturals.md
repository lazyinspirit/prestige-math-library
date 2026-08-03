---
id: ex-canonical-choice-on-naturals
kind: example
title: "$\\min$ is a choice function on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-choice-function, thm-well-ordering-principle, thm-nat-linear-order, def-nat-order]
justified_by: []
forward_refs: [thm-well-ordering-theorem, lem-pigeonhole]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
pipeline_run: null
---

## Example

Every nonempty subset of $\mathbb{N}$ has a least element
([[thm-well-ordering-principle]]), and that least element is unique, so

$$\min : \mathcal{P}(\mathbb{N}) \setminus \{\emptyset\} \longrightarrow \mathbb{N}, \qquad \min S = \text{the least element of } S,$$

is a well defined function, and $\min S \in S$ by construction. It is therefore a
choice function on $\mathbb{N}$ ([[def-choice-function]]), given by a single rule
and produced with no appeal to the Axiom of Choice.

What makes the choice free here is the structure of the order
([[def-nat-order]]), not the size of the family. The order well-orders
$\mathbb{N}$, and a well-order names a canonical element of every nonempty
subset; how large the family of nonempty subsets is then does not matter.

## Facts & Assumptions

**Given:** The family $\mathcal{F} = \mathcal{P}(\mathbb{N}) \setminus \{\emptyset\}$ of nonempty subsets of $\mathbb{N}$, with $\mathbb{N}$ carrying its usual order ([[def-nat-order]]).

[L1] Every nonempty $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for every $s \in S$ ([[thm-well-ordering-principle]]).

[L2] The order on $\mathbb{N}$ is antisymmetric: $m \le n$ and $n \le m$ imply $m = n$ ([[thm-nat-linear-order]]).

[L3] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$, and a choice function on $\mathbb{N}$ is one for $\mathcal{P}(\mathbb{N}) \setminus \{\emptyset\}$ ([[def-choice-function]]).

## Verification

**Proof technique:** direct.

1.1 Let $S \in \mathcal{F}$, so $S \subseteq \mathbb{N}$ and $S \ne \emptyset$. [given]

2.1 $S$ has a least element: some $\ell \in S$ satisfies $\ell \le s$ for every $s \in S$. [step 1.1, L1]

2.2 That least element is unique: if $\ell$ and $\ell'$ are both least elements of $S$ then $\ell \le \ell'$ and $\ell' \le \ell$, hence $\ell = \ell'$. [step 1.1, L2]

3.1 So "the least element of $S$" is a definite description, and $\min = \{(S, \ell) \in \mathcal{F} \times \mathbb{N} : \ell \in S \text{ and } \ell \le s \text{ for all } s \in S\}$ is a set by Separation, single valued by step 2.2 and total on $\mathcal{F}$ by step 2.1, hence a function with domain $\mathcal{F}$. [step 2.1, step 2.2, construct]

4.1 Its values lie where they must: $\min S$ is a least element of $S$, and a least element of $S$ belongs to $S$, so $\min S \in S$ for every $S \in \mathcal{F}$. [step 3.1, step 2.1]

5.1 Therefore $\min$ is a choice function for $\mathcal{F}$, that is a choice function on $\mathbb{N}$, and it was obtained from a rule rather than from any axiom asserting that choices can be made. [step 4.1, L3] ∎

## Remarks

- **The rule, not the existence, is the point.** [L1] gives a least element of each nonempty $S$ separately. Turning a family of separate existence statements into one function is exactly what the Axiom of Choice does in general, and it is exactly what is avoided here: uniqueness of the least element makes "the least element of $S$" a formula in $S$, so the graph of $\min$ is carved out by Separation from $\mathcal{F} \times \mathbb{N}$ with no further axiom.

- **[[lem-finite-choice]] does not apply**, and not for the reason usually given. That lemma carries no finiteness hypothesis at all, and it refuses that reading explicitly: it is stated over an *indexed* family, a natural number $n$ and a function $F$ with domain $n$ all of whose values are nonempty, and it gives a choice function for the family $F[n]$ of the values of $F$. What disqualifies $\mathcal{F} = \mathcal{P}(\mathbb{N}) \setminus \{\emptyset\}$ is that it is not $F[n]$ for any such $F$: sending each member of $F[n]$ to the least index at which $F$ takes it as a value injects $F[n]$ into $n$, the least index existing by [L1], whereas $\mathcal{F}$ already contains the $n + 1$ pairwise distinct singletons $\{0\}, \{1\}, \dots, \{n\}$, and no injection $\sigma(n) \to n$ exists ([[lem-pigeonhole]], which this library proves on a later page). Size is not what is at stake here, structure is, and [[ex-russells-socks]] is the contrasting case: a family of two element sets, with no listing of this kind and no rule either.

- The same construction works verbatim on any set carrying a well-order, with "least element" read in that order. Whether every *arbitrary* set carries a well-order is a different question, and answering it affirmatively is again a form of the Axiom of Choice. The library does prove it, but only from that axiom and only on a later page ([[thm-well-ordering-theorem]]); nothing in this example uses it, and no item on this page lists it as a dependency.

- Antisymmetry does the whole of the uniqueness work, and it is the only order axiom needed for it. This is the same one-line argument that makes $\sup$ legitimate notation in a poset ([[def-upper-bound]]).
