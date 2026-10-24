---
id: def-the-categorical-trace-of-a-morphism-into-the-double-dual
kind: definition
title: "The categorical trace of a morphism into the double dual"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-double-dual-is-a-monoidal-functor]
landmark: true
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Fix a rigid monoidal category with chosen left duals. For a morphism
$a:X\to X^{\vee\vee}$, the **left categorical trace** of $a$ is the endomorphism
of the unit

$$\operatorname{Tr}_L(a):\mathbf 1\xrightarrow{\operatorname{coev}_X}X\otimes X^\vee\xrightarrow{a\otimes1_{X^\vee}}X^{\vee\vee}\otimes X^\vee\xrightarrow{\operatorname{ev}_{X^\vee}}\mathbf 1.$$

For a morphism $b:X^{\vee\vee}\to X$, the **right categorical trace** of $b$ is

$$\operatorname{Tr}_R(b):\mathbf 1\xrightarrow{\operatorname{coev}_{X^\vee}}X^\vee\otimes X^{\vee\vee}\xrightarrow{1_{X^\vee}\otimes b}X^\vee\otimes X\xrightarrow{\operatorname{ev}_X}\mathbf 1.$$

So a bare endomorphism $X\to X$ is not yet an input to categorical trace; one
first needs a comparison between $X$ and a double dual.
