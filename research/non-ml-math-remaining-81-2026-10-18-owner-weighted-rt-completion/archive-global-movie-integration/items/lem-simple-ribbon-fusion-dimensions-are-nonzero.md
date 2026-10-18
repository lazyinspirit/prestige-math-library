---
id: lem-simple-ribbon-fusion-dimensions-are-nonzero
kind: lemma
title: "Simple ribbon fusion dimensions are nonzero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-modular-ribbon-category-and-hopf-link-data, def-fusion-and-multifusion-category, def-rigid-object-and-rigid-monoidal-category, def-the-categorical-trace-of-a-morphism-into-the-double-dual]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Nikshych, and Ostrik, On Fusion Categories, §2.1"
      url: "https://arxiv.org/pdf/math/0203060"
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §7.21"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

For every simple object $i$ of a complex finite semisimple rigid tensor category with simple unit and pivotal map $j$, its pivotal dimension $d_i=\operatorname{Tr}_L(j_i)$ is nonzero.

## Facts & Assumptions

**Given:** The category, pivotal map, and trace convention of [[def-modular-ribbon-category-and-hopf-link-data]], and a simple object $i$.

[F1] Rigidity gives the adjunction isomorphisms $\operatorname{Hom}(\mathbf1,i\otimes i^\vee)\cong\operatorname{End}(i)$ and $\operatorname{Hom}(i\otimes i^\vee,\mathbf1)\cong\operatorname{End}(i^\vee)$; the evaluation and coevaluation maps are nonzero by the two duality snakes ([[def-rigid-object-and-rigid-monoidal-category]]).

[F2] Semisimplicity decomposes each object as a finite direct sum of simples; the unit is simple and $\operatorname{End}(\mathbf1)=\mathbb C$ ([[def-fusion-and-multifusion-category]]).

[F3] The pivotal trace is the composite $\mathbf1\xrightarrow{\operatorname{coev}_i}i\otimes i^\vee\xrightarrow{j_i\otimes1}i^{\vee\vee}\otimes i^\vee\xrightarrow{\operatorname{ev}_{i^\vee}}\mathbf1$ ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

## Proof

**Given:** The data in the Statement.

1.1 By [F1], $\operatorname{Hom}(\mathbf1,i\otimes i^\vee)$ is one-dimensional, so the simple unit occurs exactly once in the semisimple decomposition of $i\otimes i^\vee$. The coevaluation is nonzero, hence its image is that unique unit summand. The map $\operatorname{ev}_{i^\vee}(j_i\otimes1_{i^\vee})$ is nonzero: $j_i$ is an isomorphism and evaluation is nonzero. As a map from a semisimple object to the simple unit, it can be nonzero only on a unit summand; because there is exactly one such summand, its restriction to the coevaluation image is nonzero. [F1, F2, algebra]

1.2 The composite in [F3] is precisely that nonzero restriction followed by the unit inclusion, so it is a nonzero endomorphism of $\mathbf1$. Since $\operatorname{End}(\mathbf1)=\mathbb C$, this endomorphism is the scalar $d_i\ne0$. [F2, F3, step 1.1, algebra] ∎
