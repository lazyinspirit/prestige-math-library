---
id: def-splitting-field-for-a-finite-group
kind: definition
title: "A splitting field for a finite group: every irreducible representation has scalar endomorphism ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-intertwiner-equivalent-and-faithful-representations]
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 9 Sections 9.1-9.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite group and let $k$ be a field. The field $k$ is a
**splitting field for $G$** when every irreducible representation $V$ of $G$
over $k$ satisfies
$$\operatorname{End}_G(V)=k,$$
meaning that every $G$-endomorphism of $V$ is a scalar operator
$\lambda\operatorname{id}_V$ with $\lambda \in k$
([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-intertwiner-equivalent-and-faithful-representations]]).

## Remarks

- This is the representation-theoretic condition used on the next pages. It is
  weaker than algebraic closedness, and Brauer's theorem records one
  sufficient roots-of-unity criterion for it without making that criterion the
  definition.

- The definition quantifies only over irreducible representations of the fixed
  finite group $G$.
