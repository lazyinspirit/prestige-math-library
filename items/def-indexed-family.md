---
id: def-indexed-family
kind: definition
title: "An indexed family $(A_i)_{i \\in I}$ is a function with domain $I$; $\\{A_i : i \\in I\\}$ is its range"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-relation-domain-range-and-field]
justified_by: []
aliases: [def-family, def-indexed-set]
landmark: false
short: "indexed family"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.13"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $I$ be a set. An **indexed family** with **index set** $I$ is a function $A$
([[def-function]]) with $\operatorname{dom} A = I$. It is written
$(A_i)_{i \in I}$, and $A_i$ abbreviates the value $A(i)$.

The set of its members is its range
([[def-relation-domain-range-and-field]]):

$$\{A_i : i \in I\} \;:=\; \operatorname{ran} A .$$

## Remarks

- **An indexed family is not the set of its members.** Two different indices may
  carry the same member, and the family records that while the set
  $\{A_i : i \in I\}$ does not. The family with $I = \{a,b\}$ and
  $A_a = A_b = X$ has $\{A_i : i \in I\} = \{X\}$, and it is a different function
  from the family indexed by $\{a\}$ alone.

- **Every set is the range of some family.** For a set $F$, the identity relation
  $\Delta_F$ is a function with domain $F$ and range $F$, so $F$ is the set of
  members of the family it indexes. This is why the family forms of the
  distributive and De Morgan laws below say no less than the unindexed ones.
