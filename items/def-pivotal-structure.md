---
id: def-pivotal-structure
kind: definition
title: "Pivotal structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-double-dual-is-a-monoidal-functor]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definitions 4.7.7-4.7.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $(-)^{\vee\vee}$ be the monoidal endofunctor of
[[thm-the-double-dual-is-a-monoidal-functor]].

A **pivotal structure** on a rigid monoidal category is an isomorphism of
monoidal functors

$$a:\operatorname{id}_{\mathcal C}\xrightarrow{\sim}(-)^{\vee\vee}.$$

Equivalently, it is a natural family of isomorphisms
$a_X:X\xrightarrow{\sim}X^{\vee\vee}$ such that

$$a_{X\otimes Y}=a_X\otimes a_Y,\qquad a_{\mathbf 1}=1_{\mathbf 1}$$

after transporting along the monoidal structure of the double-dual functor.
