---
id: thm-graph-closed-for-classical-variety-morphism
kind: theorem
title: Graphs of morphisms to a projective classical variety are closed
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-projective-variety-product-exists, thm-segre-image-rank-one-minors]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Corollaries 5.27 and 5.28
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, separatedness
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $f:X\to Y$ be a classical variety morphism for which a classical product
$P=X\times Y$ has been constructed, and suppose $Y$ is projective. Define
$\Gamma_f$ as the image of the product morphism
$\langle\operatorname{id}_X,f\rangle:X\to P$. Then $\Gamma_f$ is closed in
$P$. No assertion is made for unconstructed products or arbitrary
nonseparated prevarieties.

## Facts & Assumptions

**Given:** $f:X\to Y$ and a constructed product $X\times Y$, with $Y$ projective.

## Proof

1.1 The diagonal $\Delta_Y\subseteq Y\times Y$ is closed: embed $Y$ projectively and use the Segre/projective coordinate model, where equality of two projective points is cut out on the standard charts by coordinate differences. [given]

2.1 Let $p_X:P\to X$ and $p_Y:P\to Y$ be the structure maps. The morphism $$F=\langle f\circ p_X,p_Y\rangle:P\longrightarrow Y\times Y$$ is defined by the two product universal properties, without choosing a pair-set realization of $P$. Its inverse image of $\Delta_Y$ is exactly the image of $\langle\operatorname{id}_X,f\rangle$. [step 1.1]

3.1 Since inverse images of closed algebraic sets under a morphism are closed, $F^{-1}(\Delta_Y)=\Gamma_f$ is closed. This is precisely Milne's projective-target graph criterion under the stated construction hypothesis. [step 2.1] ∎
