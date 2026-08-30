---
id: def-monoidal-category
kind: definition
title: "Monoidal category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-category, def-functor-and-contravariant-functor, def-natural-isomorphism]
landmark: true
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.1.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

A **monoidal category** is a category $\mathcal C$ equipped with:

- a bifunctor $\otimes:\mathcal C\times\mathcal C\to\mathcal C$
  ([[def-product-category]], [[def-functor-and-contravariant-functor]]);
- an object $\mathbf 1$ of $\mathcal C$;
- natural isomorphisms ([[def-natural-isomorphism]])
  $$\alpha_{X,Y,Z}:((X\otimes Y)\otimes Z)\longrightarrow X\otimes(Y\otimes Z),$$
  $$\lambda_X:(\mathbf 1\otimes X)\longrightarrow X,\qquad \rho_X:(X\otimes\mathbf 1)\longrightarrow X,$$

such that the following two equations hold for all objects
$W,X,Y,Z\in\mathcal C$.

The **pentagon axiom** is

$$\alpha_{W,X,Y\otimes Z}\circ\alpha_{W\otimes X,Y,Z}=(1_W\otimes\alpha_{X,Y,Z})\circ\alpha_{W,X\otimes Y,Z}\circ(\alpha_{W,X,Y}\otimes1_Z).$$

The **triangle axiom** is

$$(1_X\otimes\lambda_Y)\circ\alpha_{X,\mathbf 1,Y}=\rho_X\otimes1_Y.$$

This page imposes no further axiom. In particular, the equality
$\lambda_{\mathbf 1}=\rho_{\mathbf 1}$ is not built into the definition; it is
derived later on this page.
