---
id: def-axiom-of-pairing
kind: definition
title: "The Axiom of Pairing: $\\forall x\\,\\forall y\\,\\exists z\\,\\forall t\\,(t \\in z \\leftrightarrow (t = x \\vee t = y))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: []
landmark: false
short: "Pairing"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of pairing (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_pairing"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Pairing** is the sentence

$$\forall x\,\forall y\,\exists z\,\forall t\,\bigl(t \in z \leftrightarrow (t = x \vee t = y)\bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): for any $x$ and
$y$ there is a set $z$ whose elements are exactly $x$ and $y$.

## Remarks

- **The weak form is equivalent, given Separation.** Several presentations assume
  only $\forall x\,\forall y\,\exists z\,(x \in z \wedge y \in z)$, a set
  containing $x$ and $y$ and possibly more, and then cut it down with
  [[def-axiom-schema-of-separation]] applied to the formula
  $t = x \vee t = y$. The result is the set asserted here, so the two forms yield
  the same theorems. The same choice arises for
  [[def-axiom-of-power-set]], where the weak form *is* the one assumed, so that
  the trimming step is visible in the ledger.

- **Order and repetition are invisible.** Taking $y := x$ gives a set whose only
  element is $x$. Because $t = x \vee t = y$ and $t = y \vee t = x$ are the same
  condition, the axiom does not distinguish the pair formed from $x$ then $y$
  from the pair formed from $y$ then $x$; recovering an order from a set is the
  problem [[def-ordered-pair]] solves.
