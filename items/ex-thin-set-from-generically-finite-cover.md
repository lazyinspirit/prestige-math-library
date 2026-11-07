---
id: ex-thin-set-from-generically-finite-cover
kind: example
title: "A degree-two cover gives a thin subset of the projective line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-thin-set-of-rational-points
  - def-projective-variety-classical
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Serre, Topics in Galois Theory, 2nd ed., Chapter 3, §3.1.1"
      url: "https://indico.math.cnrs.fr/event/11410/attachments/4760/7351/SerreTopicsGaloisTheory.pdf"
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §1"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
verification: {}
---

## Example

The image of the morphism $f:\mathbb P^1_{\mathbb Q}\to\mathbb P^1_{\mathbb Q}$ defined by $f([u:v])=[u^2:v^2]$ on rational points is a thin subset of $\mathbb P^1(\mathbb Q)$.

## Example references

[[def-thin-set-of-rational-points]]

## Facts & Assumptions

**Given:** The map $f([u:v])=[u^2:v^2]$ over $\mathbb Q$ and the definition of thinness.

[F1] A type-II thin set is the image on rational points of a dominant generically finite map of degree at least two with no rational section. ([[def-thin-set-of-rational-points]])

## Verification

1.1 The homogeneous coordinate functions $u^2,v^2$ have no common projective zero, so $f$ is a morphism. On the affine coordinate $z=u/v$ it is $z\mapsto z^2$, and the function-field extension $\mathbb Q(z)/\mathbb Q(z^2)$ has degree two: $T^2-t$ is irreducible over $\mathbb Q(t)$ because the order at $t=0$ of a square is even while $\operatorname{ord}_0(t)=1$. Thus $f$ is dominant and generically finite of degree two. [given, construct, algebra]

1.2 If a rational section existed, its affine coordinate would be a rational function $r(t)\in\mathbb Q(t)$ satisfying $r(t)^2=t$ on a dense open, hence as a rational-function identity. Taking orders at $t=0$ gives $2\operatorname{ord}_0(r)=1$, impossible because the left side is even. Thus $f$ has no rational section; its rational-point image is type II in [F1], and therefore thin. [given, F1, step 1.1, algebra] ∎
