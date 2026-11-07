---
id: ex-automorphic-category-equivalence-does-not-supply-spectral-parameters
kind: example
title: "Why automorphic-category equivalence alone is not spectral local Langlands"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-schematic-and-analytic-local-langlands-categories
  - thm-gleason-et-al-schematic-analytic-automorphic-categories-equivalent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gleason, Hamann, Ivanov, Lourenço, and Zou, On the Schematic and Analytic Constructions of the Local Langlands Category, Theorem 1.2.3"
      url: "https://arxiv.org/pdf/2606.02799v1"
---

## Example

An equivalence between two automorphic-side categories alone does not identify
either category with a spectral parameter category. The logical distinction
is witnessed by the terminal category $\mathcal T$ and the discrete category
$\mathcal D$ with exactly two nonisomorphic objects: the identity gives an
equivalence $\mathcal T\simeq\mathcal T$, but there is no equivalence
$\mathcal T\simeq\mathcal D$. This is a countermodel to the inference from
one category equivalence to an equivalence with an unrelated third category;
it makes no claim that the actual spectral category is inequivalent to the
automorphic categories.

## Example references

[[def-schematic-and-analytic-local-langlands-categories]]

[[thm-gleason-et-al-schematic-analytic-automorphic-categories-equivalent]]

## Facts & Assumptions

**Given:** $\mathcal T$ has one object and only its identity morphism, while
$\mathcal D$ has two objects, only identity morphisms, and no isomorphism
between its distinct objects.

[F1] [[def-schematic-and-analytic-local-langlands-categories]]: the two categories compared in the cited theorem are both defined as automorphic-side categories.

[F2] [[thm-gleason-et-al-schematic-analytic-automorphic-categories-equivalent]]: its statement equates the schematic and analytic automorphic categories.

## Verification

1.1 The unique functor $\mathcal T\to\mathcal T$ is bijective on objects and on morphisms, so it is an equivalence. [given, construct]

2.1 Any equivalence $F:\mathcal T\to\mathcal D$ would be essentially surjective. Its image contains one object of $\mathcal D$, and the other object is not isomorphic to that image, contradicting essential surjectivity. Thus $\mathcal T\not\simeq\mathcal D$, although $\mathcal T\simeq\mathcal T$. The stated equivalence of the two automorphic categories therefore supplies no logical implication to an equivalence with an arbitrary third, spectral category. [given, step 1.1, algebra] ∎
