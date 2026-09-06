---
id: ex-nonpermutable-regular-sequence
kind: example
title: "Nonpermutable Regular Sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-sequence-on-a-module, thm-regularity-notions-and-permutation-invariance-local]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Example

In $R=k[x,y,z]/((x-1)z)$, $x,(x-1)y$ is regular, whereas the reverse order is not: $(x-1)yz=0$ with $z\ne0$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]], [[thm-regularity-notions-and-permutation-invariance-local]].

## Proof

**Proof technique:** direct.

1.1 Modulo $x$, the relation becomes $z=0$, leaving $k[y]$ where $(x-1)y$ becomes $-y$; also $x$ is a non-zero-divisor. [given, algebra]

2.1 In reverse order $z\ne0$ is killed by $x-1$, so the first regularity condition fails; the ring is not local. [step 1.1, algebra] ∎
