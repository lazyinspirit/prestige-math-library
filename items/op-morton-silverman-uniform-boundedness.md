---
id: op-morton-silverman-uniform-boundedness
kind: open-problem
title: Morton–Silverman uniform boundedness for preperiodic points on projective space over bounded-degree number fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-preperiodic-point-of-a-self-map
  - def-number-field
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, Conjecture 20, printed p. 16"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
    - title: "Benjamin Hutz, A Genetic Algorithm for Generating Extreme Examples in Arithmetic Dynamics, arXiv:2601.11482v2, §1.2"
      url: "https://arxiv.org/pdf/2601.11482"
    - title: "Isaac Rajagopal and Robin Zhang, Uniform bounds on periodic points of polynomials with good reduction, arXiv:2510.26119v2, §1.1 and Theorem 3"
      url: "https://arxiv.org/pdf/2510.26119"
---

## Open problem

Let $n\ge1$, $d\ge2$, and $D\ge1$ be integers. For a number field $K$ with $[K:\mathbb Q]\le D$, represent a self-map $\phi$ of $\mathbb P^n(K)$ by $n+1$ homogeneous forms of common degree $d$ over $K$ that have no common nonzero zero over any finite extension of $K$. Let $\mathbb P^n(K)$ be the set of nonzero vectors in $K^{n+1}$ modulo common scaling by $K^\times$. A point is preperiodic when its forward orbit under $\phi$ is finite. Is there a constant $C(n,d,D)$, independent of $K$ and $\phi$, such that

$$\#\{P\in\mathbb P^n(K):P\text{ is preperiodic under }\phi\}\le C(n,d,D)$$

for every such $K$ and $\phi$?

## Open problem references

[[def-number-field|Number field]]

[[def-preperiodic-point-of-a-self-map|Preperiodic point means finite forward orbit]]

[Silverman, Conjecture 20, printed p. 16](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

[Hutz, §1.2, current status discussion, arXiv:2601.11482v2](https://arxiv.org/pdf/2601.11482)

[Rajagopal–Zhang, §1.1 and Theorem 3, arXiv:2510.26119v2](https://arxiv.org/pdf/2510.26119)

## Status

Status reviewed 2026-10-26. The full uniform bound remains open in the reviewed sources. Hutz's May 2026 version states that even the quadratic-polynomial case remains open. Rajagopal and Zhang's July 2026 version says the periodic-point form is not known unconditionally for any parameter tuple, including dimension one, degree two, and the rational field; their explicit bound applies only under an inseparable-good-reduction hypothesis for polynomials. Such restricted periodic-point bounds do not establish the uniform count of all preperiodic points for arbitrary projective morphisms and bounded-degree number fields. This is a bounded source review, not an exhaustive absence claim.
