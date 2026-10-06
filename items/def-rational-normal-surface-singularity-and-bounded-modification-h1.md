---
id: def-rational-normal-surface-singularity-and-bounded-modification-h1
kind: definition
title: "Rational normal surface singularities and bounded modification cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-normalized-point-blowups-dominate-local-normal-surface-modifications]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. In both definitions it suffices to test projective modifications, or terminal schemes of finite normalized point-blowup sequences.

## Remarks

- Rationality is tested on all normal integral proper modifications, and the definition records that projective modifications and finite normalized point-blowup models suffice.
- Boundedness is a statement about the family of all modifications, not about a single one.
- The equivalence of the tests is supplied by the normalized-point domination lemma
  ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]]): a projective
  normalized point-blowup model dominating a given normal proper modification exists, the Leray
  injection of [[lem-normal-surface-modification-leray-short-exact-sequence]] embeds the
  cohomology of the given modification into that of the model, and the model has finite
  $A$-length by proper coherent finiteness and the codimension-one isomorphism. The restricted
  test classes are themselves normal proper modifications, so the reverse implication is
  immediate.
