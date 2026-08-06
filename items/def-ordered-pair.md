---
id: def-ordered-pair
kind: definition
title: "The Kuratowski ordered pair $(a,b) := \\{\\{a\\},\\{a,b\\}\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unordered-pair-and-singleton, def-axiom-of-pairing]
justified_by: []
aliases: [def-kuratowski-pair]
landmark: true
short: "ordered pair"
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
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.6"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

For sets $a$ and $b$, the **ordered pair** $(a,b)$ is the set

$$(a,b) := \{\{a\},\{a,b\}\},$$

formed from the unordered pairs and singletons of
[[def-unordered-pair-and-singleton]]; three applications of
[[def-axiom-of-pairing]] produce it. The first coordinate is $a$ and the second
is $b$.

When $a = b$ the two members coincide, since $\{a,b\} = \{a,a\} = \{a\}$, and the
pair degenerates to $(a,a) = \{\{a\}\}$.

## Remarks

- **Why this set and not another.** An ordered pair is required to satisfy one
  property, that $(a,b) = (c,d)$ exactly when $a = c$ and $b = d$; that is
  [[thm-the-characterising-property-of-ordered-pairs]], and it is the only thing
  any later construction uses. Other definitions with the same property exist,
  and nothing below distinguishes them from this one.

- **The degenerate case is where a careless proof fails.** An argument that
  treats $\{\{a\},\{a,b\}\}$ as a set with two distinct members breaks at
  $a = b$, and that case has to be handled separately in the proof of the
  characterising property.
