---
id: def-subrepresentation-and-irreducible-representation
kind: definition
title: "Subrepresentations, direct sums of representations, and irreducibility"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-linear-subspace]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $\rho:G \to \operatorname{GL}(V)$ be a finite-dimensional representation of
$G$ over a field $k$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

A **subrepresentation** is a linear subspace $W \le V$
([[def-linear-subspace]]) such that $\rho(g)(W) \subseteq W$ for every
$g \in G$. Equivalently, $g \cdot w \in W$ for all $g \in G$ and $w \in W$.

If $\sigma:G \to \operatorname{GL}(W)$ is another representation, the
**direct sum representation** $\rho \oplus \sigma$ on $V \oplus W$ is defined by
$$g \cdot (v,w):=(\rho(g)v,\sigma(g)w).$$

The representation $\rho$ is **irreducible** when $V \ne 0$ and its only
subrepresentations are $0$ and $V$ itself.

## Remarks

- The zero representation on the zero vector space is not irreducible, by the
  explicit nonzero requirement.

- A decomposition $V=U \oplus W$ into nonzero subrepresentations is exactly a
  nontrivial decomposition of the representation as a direct sum.
