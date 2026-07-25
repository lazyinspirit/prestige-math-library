---
id: def-choice-function
kind: definition
title: "Choice function"
status: draft
origin: session
deps: []
justified_by: []
forward_refs: [ex-canonical-choice-on-naturals, ex-russells-socks]
aliases: []
landmark: false
short: "choice function"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function
$$g : \mathcal{F} \to \bigcup \mathcal{F} \qquad \text{such that} \qquad g(S) \in S \ \text{ for every } S \in \mathcal{F}.$$

Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ of nonempty subsets of $X$.

## Remarks

- The requirement is only that $g$ pick *some* element of each member. Nothing
  requires the choices to be coherent, definable, or computable, and this is
  exactly where the difficulty lies: for a single nonempty set $S$ the existence
  of an element to pick is immediate, and for finitely many sets the picks can be
  made one after another ([[lem-finite-choice]]). What is not available in ZF is
  a *simultaneous* choice across an arbitrary family.
- A choice function often exists for a concrete family with no appeal to any
  axiom, because the family carries extra structure that names a canonical
  element. Every nonempty set of natural numbers has a least element, so
  $S \mapsto \min S$ is an explicit choice function on $\mathbb{N}$
  ([[ex-canonical-choice-on-naturals]]). The contrast with families that admit no
  such rule is the content of [[ex-russells-socks]].
- Members of $\mathcal{F}$ must be nonempty: no function can select an element of
  $\emptyset$. The family $\mathcal{F}$ itself is allowed to be empty, and the
  empty function is then a choice function for it.
