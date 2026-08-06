---
id: def-inductive-set
kind: definition
title: "Inductive set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-pairing, def-axiom-of-union, def-unordered-pair-and-singleton]
aliases: []
landmark: false
short: "$\\varnothing \\in I$, closed under $x \\mapsto x \\cup \\{x\\}$"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

Working in ZFC, for a set $x$ write $x^{+} := x \cup \{x\}$ for its **successor**
(a set, by the axioms of Pairing and Union, [[def-axiom-of-pairing]] and
[[def-axiom-of-union]]). A set $I$ is **inductive** when

$$\varnothing \in I \quad\text{and}\quad \bigl(x \in I \implies x^{+} \in I\bigr)\ \text{for every } x.$$

That is, $I$ contains the empty set and is closed under the successor operation.

## Remarks

The **Axiom of Infinity** ([[def-axiom-of-infinity]]) is precisely the assertion
that an inductive set exists. Inductive sets can be large and are far from unique (if $I$ is inductive
so is $I \cup \{\text{anything}\}$ once closed off), so an inductive set is not
yet a good definition of $\mathbb{N}$. The natural numbers are carved out as the
**smallest** inductive set, the intersection of all of them
([[lem-omega-smallest-inductive]], [[def-natural-numbers]]); minimality is what
delivers the induction principle.

Here $0 := \varnothing$ and the successor of $n$ is $\sigma(n) := n^{+} = n \cup \{n\}$,
so $1 = \{0\}$, $2 = \{0,1\}$, $3 = \{0,1,2\}$: each natural number is the set of
all smaller natural numbers.
