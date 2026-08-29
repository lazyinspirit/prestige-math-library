---
id: def-g-fixed-subspace-of-a-representation
kind: definition
title: "The fixed subspace $V^G$ of a representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-linear-subspace]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $\rho:G\to\operatorname{GL}(V)$ be a representation of a group $G$ over a
field $k$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).
The **fixed subspace** of $V$ is

$$V^{G}:=\bigl\{\,v\in V\;:\;g\cdot v=v\text{ for every }g\in G\,\bigr\}.$$

The set $V^{G}$ is a linear subspace of $V$
([[def-linear-subspace]]): it contains $0_V$ because every operator
$\rho(g)$ is linear, it is closed under addition and scalar multiplication
for the same reason, and the defining equations are the required pointwise
identities. When $G$ is finite and $k=\mathbb C$,
[[lem-averaging-operator-projects-onto-the-fixed-subspace]] shows that an
explicit projection of $V$ has image exactly $V^{G}$.
