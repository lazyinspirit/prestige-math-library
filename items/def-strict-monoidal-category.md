---
id: def-strict-monoidal-category
kind: definition
title: "Strict monoidal category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.8.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

A **strict monoidal category** is a monoidal category
$(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$
([[def-monoidal-category]]) in which

$$((X\otimes Y)\otimes Z)=X\otimes(Y\otimes Z),\qquad \mathbf 1\otimes X=X,\qquad X\otimes\mathbf 1=X$$

as literal equalities of objects, and the constraint isomorphisms are identities:

$$\alpha_{X,Y,Z}=1_{X\otimes(Y\otimes Z)},\qquad \lambda_X=1_X,\qquad \rho_X=1_X.$$

Thus a strict monoidal category does not merely identify the two bracketings up
to a specified isomorphism; it makes them equal on the nose.
