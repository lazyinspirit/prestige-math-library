---
id: def-integral-third-stiefel-whitney-class
kind: definition
title: "Integral Third Stiefel–Whitney Class"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
physical_scope: null
deps:
  - def-singular-cohomology-with-coefficients
  - def-bockstein-connecting-operation
  - lem-the-bockstein-is-independent-of-lift-and-cocycle-representative
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-axiom-of-choice
dependency_roles:
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-bockstein-connecting-operation: mathematical-premise
  lem-the-bockstein-is-independent-of-lift-and-cocycle-representative: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory, Version 2.2"
      url: "https://pi.math.cornell.edu/~Hatcher/VBKT/VB.pdf"
      locator: "Chapter 3 §3.1, printed pp. 77–81, for real Stiefel–Whitney classes and their coefficient conventions."
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 33.6 and Lectures 34–36, printed pp. 123–135, for Stiefel–Whitney classes, splitting, and the Whitney sum formula."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X$ be a paracompact Hausdorff compactly generated weak Hausdorff space of CW homotopy type, let $E\to X$ be a numerable real vector bundle of finite rank, and use singular cohomology with the coefficient groups indicated. Assume the full Axiom of Choice required by [[def-bockstein-connecting-operation]], [[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]], and [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]. Let
$$
0\longrightarrow \mathbb Z \xrightarrow{\times 2}\mathbb Z \longrightarrow \mathbb Z/2\longrightarrow 0
$$
be the coefficient sequence defining the integral Bockstein
$\widetilde\beta_2:H^2(X;\mathbb Z/2)\to H^3(X;\mathbb Z)$. Define the integral third Stiefel–Whitney class by
$$
W_3(E):=\widetilde\beta_2\bigl(w_2(E)\bigr)\in H^3(X;\mathbb Z),
$$
where $w_2(E)\in H^2(X;\mathbb Z/2)$ is the second Stiefel–Whitney class of [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]. This is an integral class; the definition does not replace it by its real image, so torsion information is retained.

## Definition references

[[def-singular-cohomology-with-coefficients]]

[[def-bockstein-connecting-operation]]

[[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]

[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]

[[def-axiom-of-choice]]

[Hatcher, *Vector Bundles & K-Theory*, Chapter 3 §3.1](https://pi.math.cornell.edu/~Hatcher/VBKT/VB.pdf)

[Miller, *Algebraic Topology II*, Lectures 34–36](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf)
