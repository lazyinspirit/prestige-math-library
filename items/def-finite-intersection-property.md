---
id: def-finite-intersection-property
kind: definition
title: "Finite intersection property"
status: published
origin: session
deps: [def-natural-numbers]
justified_by: []
aliases: [def-fip]
landmark: false
short: "FIP"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Finite intersection property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_intersection_property"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
pipeline_run: null
---

## Definition

Let $X$ be a set and $\mathcal{A} \subseteq \mathcal{P}(X)$ a family of subsets of
$X$. A **finite list** in $\mathcal{A}$ is a function $s : n \to \mathcal{A}$ for
some $n \in \mathbb{N}$, where $n = \{0, 1, \dots, n-1\}$ is its own set of
predecessors in the von Neumann encoding ([[def-natural-numbers]]). Its
**intersection** is the subset of $X$

$$\textstyle\bigcap_{i \in n} s(i) := \{\, x \in X \;:\; x \in s(i) \text{ for every } i \in n \,\},$$

a definition by Separation alone, with no recursion involved. For $n = 0$, that is
$n = \emptyset$, the condition is vacuous and the **empty intersection** is $X$.

The family $\mathcal{A}$ has the **finite intersection property**, abbreviated
**FIP**, when

$$\textstyle\bigcap_{i \in n} s(i) \neq \emptyset \quad \text{for every } n \in \mathbb{N} \text{ and every finite list } s : n \to \mathcal{A}.$$

Equivalently: no finitely many members of $\mathcal{A}$ have empty intersection.

## Remarks

- **The empty intersection is $X$, and it is included above**, so a family with
  the FIP forces $X \neq \emptyset$ (take $n = 0$). Many texts state the condition
  only for $n \geq 1$ and add "$X \neq \emptyset$" or
  "$\mathcal{A} \neq \emptyset$" as a separate standing hypothesis. The two
  readings agree except when $\mathcal{A} = \emptyset$, where the $n \geq 1$
  reading is vacuous and this one still asks that $X$ be nonempty. Including
  $n = 0$ is what makes [[lem-fip-generates-filter]] hold with no side condition,
  since the empty intersection is exactly the member $X$ that every filter must
  contain.
- **Lists may repeat**, and this is harmless: repeating a member does not change
  an intersection, so quantifying over lists is the same as quantifying over
  finite subfamilies. Lists are used rather than "finite subfamilies" because a
  function out of a natural number is available immediately from
  [[def-natural-numbers]], whereas a general theory of finite sets is not needed
  anywhere here.
- The FIP is exactly the condition for a family to sit inside some filter
  ([[lem-fip-generates-filter]]): the finite intersections of $\mathcal{A}$ form a
  filter base ([[def-filter-base]]) precisely when none of them is empty, and
  conversely every family inside a filter inherits the property from properness
  ([[def-filter]]).
- The property is about *finite* intersections only. The family
  $\{\,\{n \in \mathbb{N} : N \leq n\} : N \in \mathbb{N}\,\}$ of tails of
  $\mathbb{N}$ has the FIP, since the intersection of finitely many tails is the
  one with the largest starting index and no tail is empty, yet the intersection
  of all of them is empty, because no $n$ lies in the tail starting at
  $\sigma(n)$. That gap between finite and infinite intersections is the whole
  reason filters are worth having.
