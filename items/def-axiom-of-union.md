---
id: def-axiom-of-union
kind: definition
title: "The Axiom of Union: $\\forall x\\,\\exists y\\,\\forall z\\,(z \\in y \\leftrightarrow \\exists s\\,(s \\in x \\wedge z \\in s))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: []
landmark: false
short: "Union"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 4"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of union (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_union"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Union** is the sentence

$$\forall x\,\exists y\,\forall z\,\bigl(z \in y \leftrightarrow \exists s\,(s \in x \wedge z \in s)\bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): for any set $x$
there is a set $y$ whose elements are exactly the sets $z$ belonging to some
member $s$ of $x$.

The axiom removes one layer of membership: it collects the members of the members
of $x$, not the members of $x$.

## Remarks

- **The weak form is equivalent, given Separation.** Some presentations assume
  only $\forall x\,\exists y\,\forall s\,\forall z\,((s \in x \wedge z \in s) \to z \in y)$
  and then cut $y$ down with [[def-axiom-schema-of-separation]]. The set obtained
  is the one asserted here.

- **Nothing is assumed about the members of $x$.** They need not be nonempty,
  need not be distinct, and need not be related to one another. When $x$ itself
  has no members the right-hand side fails for every $z$, and the axiom yields a
  set with no members; this is computed at
  [[lem-unions-and-intersections-of-small-families]].
