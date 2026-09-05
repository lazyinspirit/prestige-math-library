---
id: lem-decomposition-numbers-are-nonnegative-integers
kind: lemma
title: "Decomposition numbers are nonnegative integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-decomposition-numbers-and-decomposition-matrix]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Every decomposition number $d_{\chi\varphi}$ is a nonnegative integer.

## Facts & Assumptions

**Given:** An ordinary irreducible character $\chi$ and an irreducible Brauer
character $\varphi$.

[F1] The decomposition numbers are the coefficients of the simple-module
expansion of the reduction of a stable lattice
([[def-decomposition-numbers-and-decomposition-matrix]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $d_{\chi\varphi}$ is the multiplicity of the simple module $S_\varphi$ among the composition factors of the reduced lattice representing $\chi$. [F1, given]

2.1 A composition multiplicity counts how many times a simple factor occurs, so it is an integer and cannot be negative. Hence $d_{\chi\varphi}\in\mathbb Z_{\ge0}$. [step 1.1, algebra]

3.1 Therefore all decomposition numbers are nonnegative integers. [step 2.1] ∎
