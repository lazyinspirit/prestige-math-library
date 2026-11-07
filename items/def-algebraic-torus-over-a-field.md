---
id: def-algebraic-torus-over-a-field
kind: definition
title: "Algebraic torus over a field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-field
  - def-scheme
  - def-group-of-multiplicative-type-and-torus
  - def-group-scheme-over-a-field
  - def-group-scheme-over-a-scheme
  - def-fpqc-morphism-schemes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "SGA 3, *Schémas en groupes*, Exposé IX, Definition 1.3"
      url: "https://grothendiecksga.com/read/sga3/fr/IX-1.html"
      locator: "Definition 1.3; locally fpqc-isomorphic to $\\mathbb G_m^r$, with locally constant rank."
verification:
  precheck: pending
---

## Definition

Let $k$ be a field and write $\mathbb G_{m,k}=\operatorname{Spec}k[t,t^{-1}]$ for the multiplicative group scheme, with multiplication induced by $t\mapsto t\otimes t$. An **algebraic torus over $k$** is a finite-type $k$-group scheme that becomes isomorphic to $\mathbb G_{m,k}^r$ after an fpqc covering morphism; the integer $r\ge0$ is its rank, and rank zero is the trivial group scheme. This is the field case of a torus in the sense of the supplied multiplicative-type definition. For a general base scheme $S$, put $\mathbb G_{m,S}:=\operatorname{Spec}_S(\mathcal O_S[t,t^{-1}])$ with multiplication induced by $t\mapsto t\otimes t$. An **$S$-torus** is an $S$-group scheme that is fpqc-locally isomorphic to $\mathbb G_{m,S}^r$ for a finite integer $r\ge0$, with $r$ locally constant, meaning constant on some open neighbourhood of each point of $S$.

## Definition references

[[def-group-scheme-over-a-field]]

[[def-group-scheme-over-a-scheme]]

[[def-field]]

[[def-scheme]]

[[def-group-of-multiplicative-type-and-torus]]

[[def-fpqc-morphism-schemes]]

[SGA 3, Exposé IX, Definition 1.3](https://grothendiecksga.com/read/sga3/fr/IX-1.html)

## Facts & Assumptions

**Given:** A field $k$, a base scheme $S$, and the group-scheme structures over those bases.

[F1] [[def-group-of-multiplicative-type-and-torus]]: a torus over a field is a finite-type group scheme fpqc-locally isomorphic to a power of $\mathbb G_m$; rank zero is allowed.

[F2] [[def-fpqc-morphism-schemes]]: an fpqc covering morphism is flat, surjective, and quasi-compact.

[F3] [[def-group-scheme-over-a-field]]: a group scheme over a field is a group object among schemes over that field.

[F4] [[def-group-scheme-over-a-scheme]]: over a scheme, a group scheme is a group object in schemes over that base.

[F5] [[def-field]] and [[def-scheme]]: $k$ is a field and $S$ is a scheme, so the two indicated base categories are defined.
