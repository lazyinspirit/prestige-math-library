---
id: prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable
kind: proposition
title: "Injective-resolution Ext has the stated bifunctor variance"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice. Let $I$ be supplied injective resolution
data on a class $\mathcal D$ in an abelian category.
For every $q$, injective-resolution Ext is contravariant in $M$ and covariant in $N$: $a:M'\to M$ and $b:N\to N'$ induce $\operatorname{Ext}^q_I(M,N)\to\operatorname{Ext}^q_I(M',N)$ and $\operatorname{Ext}^q_I(M,N)\to\operatorname{Ext}^q_I(M,N')$.

## Facts & Assumptions

**Given:** Objects $N,N'\in\mathcal D$, objects $M,M'$, and maps $a,b$ as stated.

## Proof

**Proof technique:** direct.

1.1 Precomposition by $a$ is a cochain map $\operatorname{Hom}(M,I^\bullet)\to\operatorname{Hom}(M',I^\bullet)$.  A comparison extension of $b$ is a cochain map $I^\bullet\to I'^\bullet$, hence postcomposition gives the second cochain map. [given, construct]

2.1 Homotopic comparison extensions induce the same cohomology map, so the second map is choice-independent.  Identity and composition of the comparison maps give the functor laws, with $a$ reversing arrows. [step 1.1, algebra] ∎
