---
id: def-twist-and-ribbon-structure
kind: definition
title: "Twist and ribbon structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-braiding, def-rigid-object-and-rigid-monoidal-category, def-the-dual-of-a-morphism]
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 8.10.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $\mathcal C$ be a braided rigid monoidal category with braiding $c$, and
fix left duals $X^\vee$ for all objects together with the dual-morphism
operation of [[def-the-dual-of-a-morphism]].

A **twist** on $\mathcal C$ is a natural automorphism
$\theta\in\operatorname{Aut}(\operatorname{id}_{\mathcal C})$ such that

$$\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)\circ c_{Y,X}\circ c_{X,Y}$$

for all objects $X,Y$ and $\theta_{\mathbf 1}=1_{\mathbf 1}$.

A **ribbon structure** is a twist satisfying the dual-compatibility condition

$$(\theta_X)^\vee=\theta_{X^\vee}.$$
