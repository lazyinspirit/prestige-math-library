---
id: def-well-order
kind: definition
title: "Well-order and well-ordered set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-order, def-chain, thm-well-ordering-principle, thm-nat-linear-order]
justified_by: []
aliases: [def-well-ordered-set, def-well-ordering]
landmark: false
short: "total order in which every nonempty subset has a least element"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Well-order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-order"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
pipeline_run: null
---

## Definition

Let $W$ be a set. A **well-order** on $W$ is a total order $\le$ on $W$
([[def-partial-order]]) with the property that

$$\text{every nonempty } S \subseteq W \text{ has a least element, i.e. an } \ell \in S \text{ with } \ell \le s \text{ for all } s \in S.$$

The pair $(W, \le)$ is then a **well-ordered set**, and $W$ is **well-ordered**
by $\le$.

A least element of $S$ is unique when it exists: two of them are below each
other, hence equal by antisymmetry ([[def-partial-order]]). We may therefore
write $\min S$ for it.

**Strict form.** Everything on this page is more convenient in terms of the
associated strict order $x < y :\iff (x \le y \text{ and } x \ne y)$
([[def-partial-order]]). Spelled out strictly, a well-order on $W$ is a relation
$<$ that is

- **irreflexive**: $x < x$ holds for no $x \in W$;
- **transitive**: $x < y$ and $y < z$ imply $x < z$;
- **trichotomous**: for all $x, y \in W$ exactly one of $x < y$, $x = y$,
  $y < x$ holds;
- and such that every nonempty $S \subseteq W$ has an element $\ell$ with no
  $s \in S$ satisfying $s < \ell$.

The two presentations determine each other by $x \le y \iff (x < y$ or
$x = y)$, and we write $(W, <)$ or $(W, \le)$ as convenient.

## Remarks

- **Totality is not an extra hypothesis.** If $\le$ is a partial order on $W$ in
  which every nonempty subset has a least element, then $\le$ is already total:
  apply the hypothesis to the two element subset $\{x, y\}$, whose least element
  is below the other. Totality is nevertheless stated, because in the strict
  presentation trichotomy has to be written down explicitly.
- A well-order is total, so **every subset of a well-ordered set is a chain**
  ([[def-chain]]), and $W$ itself is one. Chains are therefore not the
  interesting invariant here; the least element property is.
- **The model case is $(\mathbb{N}, \le)$**, which is a linear order
  ([[thm-nat-linear-order]]) in which every nonempty subset has a least element
  ([[thm-well-ordering-principle]]). Ordinals, defined later on this page, are
  the exact generalisation of that picture.
- $(\mathbb{Z}, \le)$ and $(\mathbb{R}, \le)$ are total orders but not
  well-orders: $\mathbb{Z}$ has no least element at all, and the bounded set
  $\{x \in \mathbb{R} : 0 < x < 1\}$ has none either. Being bounded below does
  not help, which is exactly why well-ordering is a strong condition.
- The empty set carries exactly one well-order, the empty relation, vacuously.
  Every one element set carries exactly one.
- A well-order admits no infinite strictly decreasing sequence
  $x_0 > x_1 > x_2 > \cdots$, since the set of its terms would have no least
  element. This direction follows directly from the definition; no converse is
  used here.
