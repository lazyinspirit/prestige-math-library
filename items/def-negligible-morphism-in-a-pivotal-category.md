---
id: def-negligible-morphism-in-a-pivotal-category
kind: definition
title: "Negligible morphisms for a pivotal trace"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-pivotal-structure
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
  - def-rigid-object-and-rigid-monoidal-category
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - def-temperley-lieb-closure-trace-and-partial-trace
  - def-temperley-lieb-diagram-category
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§5.2, Definition 5.2.1, PDF p. 47: negligible morphisms in a spherical category." 
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.18.2, printed pp. 235–236: negligible morphisms and their quotient; see also §4.7 for pivotal traces." 
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\mathcal C$ be an additive $\mathbb C$-linear rigid monoidal category with $\operatorname{End}_{\mathcal C}(\mathbf1)=\mathbb C$, and fix a pivotal structure $j_X:X\to X^{\vee\vee}$ as in [[def-pivotal-structure]]. For $f:X\to Y$, call $f$ **negligible** if

$$\operatorname{Tr}_L(j_X\circ g\circ f)=0\qquad\text{for every }g:Y\to X,$$

where the left trace is [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. The negligible morphisms form the intersection of the kernels of these linear functionals; this definition alone does not assert tensor-ideal closure.

For the complex Temperley–Lieb diagram category, use its cup/cap pivotal structure. The resulting trace is exactly the unnormalized planar closure of [[def-temperley-lieb-closure-trace-and-partial-trace]]. The same definition applies to the complex type-1 tilting category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]] when its stated ribbon pivotal structure is used.
