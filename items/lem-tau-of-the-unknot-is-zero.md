---
id: lem-tau-of-the-unknot-is-zero
kind: lemma
title: "The tau level of the standard unknot is zero"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-standard-unknot-hat-diagram-rank-one
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The one-pointed genus-zero computation and its normalized filtration are finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§2.1, Example 2.1, and §3.1; the hat homology of S3 and the tau threshold"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "§3.5; the genus-zero one-pointed diagram of the unknot"
---

## Statement

For the standard oriented unknot $U$ and its standard genus-zero one-pointed Heegaard diagram, the normalized Alexander-filtered hat complex has total homology $\mathbb F_2$ generated at filtration level $0$. Consequently the diagramwise threshold is $\tau_{\mathcal H,F}(U)=0$.

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized Alexander filtration and its first nonzero homology level]]

[[lem-standard-unknot-hat-diagram-rank-one|The one-generator genus-zero unknot diagram]]

[Hom, *A survey on Heegaard Floer homology and concordance*, §§2.1 and 3.1](https://arxiv.org/pdf/1512.00383v3)

[Manolescu, *An Introduction to Knot Floer Homology*, §3.5](https://web.stanford.edu/~cm5/hfk.pdf)

## Facts & Assumptions

**Given:** The standard oriented unknot and its standard genus-zero one-pointed diagram.

[F1] [[def-knot-floer-filtration-and-tau]] fixes the absolute Alexander normalization with the one-generator standard unknot diagram at filtration zero.

[F2] [[lem-standard-unknot-hat-diagram-rank-one]] proves that this genus-zero one-pointed diagram has one generator and zero differential, so its total homology is $\mathbb F_2$.

## Proof

1.1 By [F2], the total complex has one generator and zero differential, so its only nonzero homology class is represented by that generator. [F2, given, construct]

2.1 By [F1] the generator has Alexander level $0$. For every $s<0$ its filtered subcomplex is zero, while at $s=0$ the inclusion is the identity on the one-dimensional homology. Thus the first level with nonzero image is $0$, which is the asserted value. [F1, step 1.1, algebra] ∎
