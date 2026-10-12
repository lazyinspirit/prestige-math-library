---
id: def-g-module-over-a-commutative-ring
kind: definition
title: "An $R$-linear action of $G$ on a left $R$-module, and a $G$-module over $R$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-group, def-group-action, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]), let $G$ be a group
([[def-group]]), and let $M$ be a left $R$-module
([[def-left-and-right-modules]]).

A **left $G$-action on $M$ by $R$-linear maps** is a left group action
$G \times M \to M$, $(g,m) \mapsto g \cdot m$, in the sense of
[[def-group-action]], such that for every $g \in G$ the map
$$m \longmapsto g \cdot m$$
is an $R$-module homomorphism $M \to M$
([[def-module-homomorphism-kernel-image-and-cokernel]]).

Equivalently, the action satisfies
$$g \cdot (m+m')=g \cdot m+g \cdot m',\qquad g \cdot (rm)=r(g \cdot m)$$
for all $g \in G$, $m,m' \in M$, and $r \in R$.

An **$R$-linear $G$-module**, or simply a **$G$-module over $R$**, is a left
$R$-module together with such an action.

## Remarks

- Because $g^{-1}$ acts as an inverse in the group-action sense, each map
  $m \mapsto g \cdot m$ is automatically an $R$-module automorphism.

- When $R$ is a field, this is the module-language form of a representation.
