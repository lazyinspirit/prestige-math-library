---
id: thm-exact-c1-vector-fields-are-closed
kind: theorem
title: "Every exact C1 vector field is closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-and-exact-c1-vector-fields, lem-clairaut-for-c2-potentials-by-rectangular-differences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, section 1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open. Every exact $C^1$ vector field $F:U\to\mathbb R^n$ is closed.

## Facts & Assumptions

**Given:** The open set and exact $C^1$ field in the Statement.

[L1] Exactness means $F_i=\partial_i\phi$ for a $C^2$ scalar function $\phi$, while closedness means $\partial_jF_i=\partial_iF_j$ for all indices $i,j$ ([[def-closed-and-exact-c1-vector-fields]]).

[L2] Continuous second partials commute: $\partial_j\partial_i\phi=\partial_i\partial_j\phi$ ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

## Proof

**Proof technique:** direct.

1.1 Choose the $C^2$ potential $\phi$ from [L1]. For every $i,j$, $$\partial_jF_i=\partial_j\partial_i\phi =\partial_i\partial_j\phi =\partial_iF_j,$$ where the middle equality is [L2]. [given, L1, L2, algebra]

2.1 The equalities in step 1.1 are precisely the closedness condition in [L1], so $F$ is closed. [step 1.1, L1] ∎
