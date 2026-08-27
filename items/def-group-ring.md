---
id: def-group-ring
kind: definition
title: "The group ring $R[G]$ of finitely supported formal $R$-linear combinations of group elements"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-commutative-ring, def-free-module-on-a-set-and-standard-basis, def-group]
justified_by: []
aliases: []
landmark: true
verification:
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

Let $R$ be a commutative ring ([[def-commutative-ring]]) and let $G$ be a group
([[def-group]]). The **group ring** $R[G]$ is the free left $R$-module on the
set $G$ ([[def-free-module-on-a-set-and-standard-basis]]).

For each $g \in G$, write $[g] \in R[G]$ for the standard basis vector indexed
by $g$. Thus every element of $R[G]$ has a unique expression
$$\sum_{g \in F} r_g [g]$$
with $F \subseteq G$ finite and $r_g \in R$.

The notation is deliberately that of **formal** finite sums: at this stage
$R[G]$ is only the underlying free $R$-module with its distinguished basis. The
multiplication satisfying
$$[g][h]=[gh]$$
and the resulting $R$-algebra structure are constructed in
[[thm-group-ring-is-a-unital-algebra-with-basis-g]].

## Remarks

- The support is finite by definition because $R[G]$ is the direct sum, not the
  full product, of copies of $R$ indexed by $G$.

- The basis vectors are written $[g]$ to keep the group element $g$ distinct
  from its basis image in the free module.
