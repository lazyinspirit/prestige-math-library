---
id: def-axiom-of-power-set
kind: definition
title: "The Axiom of Power Set: $\\forall x\\,\\exists y\\,\\forall z\\,(\\forall t\\,(t \\in z \\to t \\in x) \\to z \\in y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
external_refs: [rem-independence-of-ch-and-gch]
aliases: []
landmark: true
short: "Power Set"
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
    - title: "Axiom of power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_power_set"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The **Axiom of Power Set** is the sentence

$$\forall x\,\exists y\,\forall z\,\bigl(\forall t\,(t \in z \to t \in x) \to z \in y\bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): for every set $x$
there is a set $y$ that contains every $z$ all of whose elements belong to $x$.

The axiom is assumed here in this implication form. It says that some set
collects all such $z$; it does not say that $y$ contains nothing else, and
trimming $y$ down to exactly those $z$ is a separate step, carried out at
[[lem-the-power-set-of-a-set-is-a-set]] using
[[def-axiom-schema-of-separation]].

## Remarks

- **Why the weak form.** Some presentations assume the biconditional
  $\forall t\,(t \in z \to t \in x) \leftrightarrow z \in y$ outright. The
  implication form assumed here is the weaker assumption, and it keeps the
  Separation step visible: the ledger at
  [[rem-which-axiom-each-construction-uses]] then records honestly that the power
  set costs Power Set *and* Separation.

- **The axiom says nothing about size.** It asserts that a set collecting the
  subsets of $x$ exists, and nothing about how many members that set has. How
  large the power set of an infinite set is, is exactly the question the
  continuum hypothesis asks, and that question is settled by neither ZF nor ZFC
  ([[rem-independence-of-ch-and-gch]]).
