---
id: lem-w3-tangent-normal-equality-in-spin-ambient
kind: lemma
title: "Third Stiefel–Whitney Classes of Tangent and Normal Bundles"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
physical_scope: null
deps:
  - def-integral-third-stiefel-whitney-class
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-singular-cohomology-with-coefficients
  - def-bockstein-connecting-operation
  - lem-the-bockstein-is-independent-of-lift-and-cocycle-representative
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - def-axiom-of-choice
dependency_roles:
  def-integral-third-stiefel-whitney-class: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-bockstein-connecting-operation: mathematical-premise
  lem-the-bockstein-is-independent-of-lift-and-cocycle-representative: mathematical-premise
  thm-whitney-sum-formula-for-stiefel-whitney-classes: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory, Version 2.2"
      url: "https://pi.math.cornell.edu/~Hatcher/VBKT/VB.pdf"
      locator: "Chapter 3 §3.1, printed pp. 77–81, for Stiefel–Whitney classes; the identity below is proved locally from the pinned Whitney formula."
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 33.6 and Lectures 34–36, printed pp. 123–135, for Stiefel–Whitney classes, splitting, and the Whitney sum formula."
verification:
  precheck: pass
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

## Statement

Let $X$ be a paracompact Hausdorff compactly generated weak Hausdorff space of CW homotopy type, and let $E,F\to X$ be numerable finite-rank real vector bundles. Assume full AC as required by the imported characteristic-class and Bockstein suppliers. If
$$
w_1(E)=w_1(F)=0,\qquad w_2(E\oplus F)=0
$$
in mod-two singular cohomology, then
$$
W_3(E)=W_3(F)\quad\text{and}\quad 2W_3(E)=0
$$
in $H^3(X;\mathbb Z)$. In particular, the equality applies to an oriented tangent bundle and its oriented normal bundle when their direct sum has vanishing $w_2$.

## Statement references

[[def-integral-third-stiefel-whitney-class]]

[[thm-whitney-sum-formula-for-stiefel-whitney-classes]]

[Hatcher, *Vector Bundles & K-Theory*, Chapter 3 §3.1](https://pi.math.cornell.edu/~Hatcher/VBKT/VB.pdf)

[Miller, *Algebraic Topology II*, Lectures 34–36](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf)

## Facts & Assumptions

**Given:** Full AC; numerable finite-rank real bundles $E,F\to X$ over the stated base, with $w_1(E)=w_1(F)=0$ and $w_2(E\oplus F)=0$.

[F1] [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]: $w_j(G)\in H^j(X;\mathbb Z/2)$ are the Stiefel–Whitney classes of a numerable finite-rank real bundle $G$.

[F2] [[thm-whitney-sum-formula-for-stiefel-whitney-classes]]: $w(E\oplus F)=w(E)\smile w(F)$.

[F3] [[def-integral-third-stiefel-whitney-class]] and [[def-bockstein-connecting-operation]]: $W_3(G)=\widetilde\beta_2(w_2(G))$, with $\widetilde\beta_2$ the integral connecting operation for $0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\to0$.

[F4] [[def-bockstein-connecting-operation]] and [[def-singular-cohomology-with-coefficients]]: the connecting homomorphism is computed by lifting a mod-two singular cocycle to an integral cochain and dividing its integral coboundary by $2$.

[F5] [[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]: this operation gives a well-defined cohomology class, independent of the cochain lift and cocycle representative.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is the full choice hypothesis of the imported Bockstein and characteristic-class suppliers.

## Proof

1.1 The degree-two part of [F2] gives
$w_2(E\oplus F)=w_2(E)+w_1(E)\smile w_1(F)+w_2(F)$.
The two degree-one classes vanish by the Given clause, and the left side vanishes by the Given clause, so $w_2(E)+w_2(F)=0$. Since these classes have coefficients in $\mathbb Z/2$, this says $w_2(E)=w_2(F)$. [given, F1, F2, A1, algebra]

2.1 Apply the well-defined operation $\widetilde\beta_2$ to the equality in step 1.1 and use [F3]. This gives $W_3(E)=W_3(F)$. [F3, F5, A1, step 1.1, algebra]

3.1 Represent $w_2(E)$ by a mod-two singular 2-cocycle $c$. Lift each value of $c$ to its unique representative $0$ or $1$, obtaining an integral 2-cochain $\widetilde c$. Because $c$ is a cocycle, every value of $\delta\widetilde c$ is even, so $d=(\delta\widetilde c)/2$ is an integral 3-cochain. By [F4] and the lift-independence in [F5], $W_3(E)=[d]$. Therefore $2W_3(E)=[2d]=[\delta\widetilde c]=0$, since $\delta\widetilde c$ is a coboundary. [given, F3, F4, F5, A1, algebra] ∎

## Remarks

The equality uses the integral Bockstein, so torsion is retained. The proof does not assume a classification theorem for spin structures; its input is the explicit vanishing of $w_2(E\oplus F)$.
