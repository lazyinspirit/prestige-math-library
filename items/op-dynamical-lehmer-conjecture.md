---
id: op-dynamical-lehmer-conjecture
kind: open-problem
title: Dynamical Lehmer lower bound for non-preperiodic points
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-dynamical-canonical-height-limit-and-functional-equation
  - def-preperiodic-point-of-a-self-map
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, Conjecture 21, printed p. 17"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
    - title: "Philipp Habegger and Harry Schmidt, Dynamical Canonical Heights and Finite Trees, arXiv:2608.00774v1, Introduction and Theorems 1.1–1.2"
      url: "https://arxiv.org/pdf/2608.00774"
---

## Open problem

Assume the Axiom of Choice. Let $K/\mathbb Q$ be a number field and let $\phi$ be a degree-$d$ self-map of the projective line over $K$, represented by a pair of homogeneous degree-$d$ forms with no common projective zero, where $d\ge2$. For an algebraic point $P$ whose forward orbit under $\phi$ is infinite, write $K(P)$ for the field generated over $K$ by its projective coordinate ratio, with $K(P)=K$ for the point at infinity. Does there exist a constant $C(K,\phi)>0$ such that

$$\widehat h_\phi(P)\ge \frac{C(K,\phi)}{[K(P):K]}$$

for every such $P$?

## Open problem references

[[def-canonical-height-of-a-morphism-on-projective-line|Canonical height and degree-$d$ map convention]]

[[thm-dynamical-canonical-height-limit-and-functional-equation|Existence of the canonical-height limit]]

[[def-preperiodic-point-of-a-self-map|Wandering means infinite forward orbit]]

[[def-axiom-of-choice|Axiom of Choice]]

[Silverman, Conjecture 21, printed p. 17](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

[Habegger–Schmidt, Introduction and Theorems 1.1–1.2, arXiv:2608.00774v1](https://arxiv.org/pdf/2608.00774)

## Status

Status reviewed 2026-10-26. Habegger and Schmidt identify the inverse-linear inequality above as the Dynamical Lehmer Conjecture and state that it remains open. Their August 2026 paper proves inverse-square lower bounds for specified centered postcritically finite hyperbolic polynomials of prime-power degree, including a theorem for maps of the form $T^{p^e}+b$ when zero is periodic. Those restricted inverse-square bounds provide partial evidence and do not establish the inverse-linear bound for a fixed arbitrary rational map.
