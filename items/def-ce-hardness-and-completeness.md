---
id: def-ce-hardness-and-completeness
kind: definition
title: "Computably enumerable hardness and completeness under computable many-one reductions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computable-many-one-reduction, def-decidable-and-recognizable-language]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Definition

Let $C$ be a language over a finite alphabet.

- $C$ is **c.e.-hard** when every recognizable language $L$ satisfies
  $$ L\le_m C. $$
- $C$ is **c.e.-complete** when $C$ is recognizable and c.e.-hard.

Here "c.e." means "computably enumerable," which on this page is synonymous
with "recognizable."

