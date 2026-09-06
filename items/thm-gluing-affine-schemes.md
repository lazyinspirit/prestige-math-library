---
id: thm-gluing-affine-schemes
kind: theorem
title: "Gluing affine schemes along compatible open isomorphisms"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme, def-gluing-datum-sheaves, thm-gluing-ringed-and-locally-ringed-spaces]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 14"
      url: "https://stacks.math.columbia.edu/tag/01JB"
---
## Statement

Affine schemes equipped with open subschemes and isomorphisms on overlaps
satisfying the identity and cocycle conditions glue to a scheme, uniquely up to
unique isomorphism; the given affine schemes become an open affine cover.

## Facts & Assumptions

**Given:** Affine schemes, open overlap subschemes, and compatible cocycle isomorphisms.

## Proof

**Proof technique:** direct.

1.1 The data are gluing data for locally ringed spaces, so the gluing theorem produces a locally ringed space $X$ covered by open subspaces identified with the given affine schemes. [given, construct]

2.1 Since every point of $X$ lies in one of those affine open subspaces, $X$ is a scheme by definition. [step 1.1]

3.1 Let $X'$ be another gluing with the same chart identifications. On every affine chart, compose the identification into $X$ with the inverse of the corresponding identification into $X'$. The cocycle condition says these chartwise locally ringed-space isomorphisms agree on overlaps, so their underlying maps and sheaf maps glue to an isomorphism $X\to X'$. The inverse is obtained by reversing the chart maps. Any isomorphism respecting all chart identifications has these restrictions and is therefore equal to this one. Thus the gluing is unique up to a unique chart-compatible isomorphism. [step 1.1, step 2.1] ∎
