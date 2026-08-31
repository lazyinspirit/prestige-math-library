---
id: ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value
kind: example
title: "A constant map has a large critical locus and one critical value"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-critical-locus-and-critical-value-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Example

Let $M$ be a nonempty smooth manifold, let $N$ be positive-dimensional, and let
$F:M\to N$ be constant with value $q$. Then every point of $M$ is critical and
the critical value set is $\{q\}$.

## Facts & Assumptions

**Given:** A constant smooth map $F:M\to N$ with value $q$, where $M$ is nonempty and $\dim N>0$.

[F1] The critical locus and critical value set record the critical points and their images ([[def-critical-locus-and-critical-value-set]]).

## Verification
**Proof technique:** direct.

1.1 The differential of a constant map is zero at every point. Because $T_qN$ is nonzero, this differential is not surjective, so every point of $M$ is critical. [given, algebra]
2.1 Hence the critical locus from [F1] is all of $M$, and because $M$ is nonempty, its image is the singleton $\{q\}$. [F1, step 1.1]
3.1 Therefore a constant map has a large critical locus and one critical value. [step 2.1] ∎
