---
id: "def-finite-delta-system"
kind: "definition"
title: "Delta systems and roots"
status: published
origin: "pipeline"
deps: ["def-intersection-of-a-set-and-binary-intersection"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), delta-system definition immediately before Theorem 9.20, printed pp77–78; indexed convention supplied locally"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
---

## Definition

A family $\mathcal F$ of sets is a **delta system with root $r$** if $a\cap b=r$ for all distinct $a,b\in\mathcal F$, using intersection as in [[def-intersection-of-a-set-and-binary-intersection]]. A **finite-set delta system** additionally requires each member to be finite; the family itself may be infinite.

For a family indexed by a set $I$, the **indexed delta-system condition with root $r$** is $a_i\cap a_j=r$ for all distinct $i,j\in I$. Repetition of sets is permitted in this indexed convention. In particular if two distinct indices have the same value $a$, their intersection condition forces $r=a$.

No additional containment condition on $r$ is imposed for families with fewer than two members: their pairwise condition is vacuous, so they may be assigned any root. For a family with at least two members the root is their common pairwise intersection and is unique. Pairwise disjoint members have root $\varnothing$. None of these definitions asserts that a large delta subsystem exists.
