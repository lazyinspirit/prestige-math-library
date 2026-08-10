---
id: prop-monoids-and-groups-as-one-object-categories
kind: proposition
title: "A monoid is a one-object category, and a group is a one-object category in which every morphism is invertible"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-semigroup-and-monoid, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Every monoid is a one-object category. Under this identification, the monoid is
a group exactly when every morphism is invertible.

## Facts & Assumptions

**Given:** A monoid $(M,\cdot,e)$.

[L1] A monoid has associative multiplication and a two-sided identity ([[def-semigroup-and-monoid]]), exactly the composition and identity laws required by [[def-category]].

[L2] A group is a monoid in which every element has a two-sided inverse ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 Take one object $*$, put $\operatorname{Hom}(*,*)=M$, define composition by $y\circ x=y\cdot x$, and take $1_*=e$; [L1] verifies the category axioms. [given, L1]

2.1 A morphism $x:*\to *$ is an isomorphism precisely when some $y$ satisfies $yx=e=xy$. [step 1.1, L1]

3.1 By [L2], every morphism in this one-object category is invertible exactly when $M$ is a group. [step 2.1, L2] ∎

