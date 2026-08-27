---
id: def-trivial-regular-and-permutation-representations
kind: definition
title: "The trivial representation, the regular representation, and permutation representations from finite $G$-sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-free-module-on-a-set-and-standard-basis, def-group-action, def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Examples 1.1.1 and 4.3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $k$ be a field and let $G$ be a finite group.

The **trivial representation** of $G$ over $k$ is the one-dimensional
representation on the vector space $k$ in which every $g \in G$ acts as the
identity map.

The **regular representation** of $G$ over $k$ is the representation on the
vector space $k[G]$ ([[def-group-ring]]) given by left multiplication by the
basis units:
$$g \cdot x:=[g]x\qquad(g \in G,\ x \in k[G]).$$
Equivalently, on the basis vectors of $k[G]$,
$$g \cdot [h]=[gh].$$
This uses the ring structure and unit property proved in
[[thm-group-ring-is-a-unital-algebra-with-basis-g]].

More generally, if $X$ is a finite left $G$-set ([[def-group-action]]), the
free $k$-module $k^{(X)}$ on $X$ ([[def-free-module-on-a-set-and-standard-basis]])
becomes a representation by
$$g \cdot e_x:=e_{g \cdot x}\qquad(g \in G,\ x \in X).$$
This is the **permutation representation** attached to the action of $G$ on $X$.

## Remarks

- The regular representation is the permutation representation of $G$ acting on
  itself by left translation.

- Because $G$ and $X$ are finite, these constructions are finite-dimensional.
