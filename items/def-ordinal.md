---
id: def-ordinal
kind: definition
title: "Ordinal (von Neumann)"
status: draft
origin: session
deps: [def-well-order, def-natural-numbers, lem-nat-transitive-irreflexive]
justified_by: []
aliases: [def-ordinal-number, def-von-neumann-ordinal]
landmark: true
short: "transitive set strictly well ordered by $\\in$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
pipeline_run: null
---

## Definition

A set $\alpha$ is an **ordinal** when both of the following hold.

1. $\alpha$ is a **transitive set**: every element of $\alpha$ is also a subset
   of $\alpha$, that is $x \in \alpha \Rightarrow x \subseteq \alpha$.
2. The membership relation restricted to $\alpha$, namely
   $\{(x, y) \in \alpha \times \alpha : x \in y\}$, is a **strict well-order**
   of $\alpha$ ([[def-well-order]]): it is irreflexive, transitive as a
   relation, trichotomous on $\alpha$, and every nonempty subset of $\alpha$ has
   an $\in$-least element.

Ordinals are written with lowercase Greek letters, and for ordinals we set

$$\alpha < \beta :\iff \alpha \in \beta, \qquad \alpha \le \beta :\iff (\alpha \in \beta \text{ or } \alpha = \beta).$$

Write $0 := \emptyset$, which is an ordinal because both clauses hold vacuously,
and write $\alpha^{+} := \alpha \cup \{\alpha\}$ for the **successor** of
$\alpha$.

## Remarks

- **Two different transitivities.** Clause 1 is about the *set* $\alpha$: it
  contains all members of its members. Clause 2 asks in part that the *relation*
  $\in$ be transitive on $\alpha$. If every element of $\alpha$ is itself a
  transitive set then the relation $\in$ is transitive on $\alpha$; the converse
  holds *given clause 1*, and fails without it. For
  $\alpha = \{\{\{\emptyset\}\}\}$ the relation
  $\{(x, y) \in \alpha \times \alpha : x \in y\}$ is empty, hence vacuously
  transitive, yet the sole element $\{\{\emptyset\}\}$ of $\alpha$ is not a
  transitive set, since $\{\emptyset\} \in \{\{\emptyset\}\}$ while
  $\emptyset \notin \{\{\emptyset\}\}$. Under clause 1 the two readings do
  coincide, because then every member of a member of $\alpha$ again lies in
  $\alpha$, where the relation has something to say. Neither clause implies the
  other, and both are needed.
- **Every ordinal is literally the set of all smaller ordinals.** By clause 1 and
  the notation above, $\alpha = \{\beta : \beta < \alpha\}$, so the ordinals
  carry their own order relation as membership. This is von Neumann's device,
  and it is what makes it unnecessary to define an order type as an equivalence
  class of well-orders: such a class is never a set, whereas the representative
  chosen here is.
- **The natural numbers are ordinals, and so is $\omega$.** Each natural number
  is a transitive set ([[lem-nat-transitive-irreflexive]]), and on $\mathbb{N}$
  membership coincides with the usual strict order, so each natural number and
  $\mathbb{N} = \omega$ itself ([[def-natural-numbers]]) satisfy both clauses.
  Both facts are proved in [[lem-omega-least-limit-ordinal]], where they are
  needed; they are recorded here because they are the intended picture.
- **The Axiom of Foundation is not used.** Some treatments define an ordinal as a
  transitive set *linearly* ordered by $\in$, which is equivalent to the
  definition above only in the presence of Foundation, since Foundation is what
  supplies the least element. This library does not assume Foundation anywhere,
  so the least element property is written into the definition instead.
- The definition is absolute in a strong sense: whether a set is an ordinal
  depends only on its members and the membership relation among them, with no
  reference to any ambient construction. That is why ordinals can be used to
  index constructions in any model of ZF without further hypotheses.
