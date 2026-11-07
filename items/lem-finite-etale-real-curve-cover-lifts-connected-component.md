---
id: lem-finite-etale-real-curve-cover-lifts-connected-component
kind: lemma
title: "Real connected components lift through finite étale covers of projective curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-etale-locally-standard-etale
  - thm-jacobian-criterion-smooth-morphism
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the declared algebraic smooth and étale chart suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.6, finite étale covers in the real component argument; the covering-space proof is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $C$ be a smooth projective curve over $\mathbb R$, and let $p:C'\to C$ be a finite étale morphism. The induced map $C'(\mathbb R)\to C(\mathbb R)$ is a finite covering of its image, and that image is a union of connected components. If a connected component $D$ of $C'(\mathbb R)$ contains a point above $c\in C(\mathbb R)$, then $p(D)$ is the entire connected component of $C(\mathbb R)$ containing $c$.

## Facts & Assumptions

**Given:** The smooth projective real curve and finite étale morphism in the Statement, with real points carrying their usual Euclidean topology.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Étale morphisms have local standard étale charts with invertible derivative. [[thm-etale-locally-standard-etale]]

[F2] Smooth morphisms have local full-rank Jacobian charts. [[thm-jacobian-criterion-smooth-morphism]]

[F3] An invertible real Jacobian gives a local inverse without a choice principle. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

[F4] A compact subset of a Hausdorff space is closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]]

## Proof

**Proof technique:** use local real inverses and compactness to obtain a proper finite covering, then apply connectedness.

1.1 The finite morphism makes $C'$ projective over $\mathbb R$, and étaleness over the smooth curve makes it smooth of dimension one. At each real point, the real implicit-function construction from [F2] gives a one-dimensional smooth manifold chart; [F1] makes the derivative of $p$ invertible there, so [F3] gives a local homeomorphism. Both real loci are Hausdorff. A projective embedding identifies each with a closed subset of a finite real projective space, the image of a sphere under the quotient map; Heine–Borel and continuity make both loci compact. [A1, F1, F2, F3, given, construct, algebra]

2.1 Every real fibre is finite because $p$ is finite and each of its real points is isolated by step 1.1. Fix $y\in C(\mathbb R)$ with real fibre $\{x_1,\dots,x_m\}$. Choose pairwise disjoint local inverse neighborhoods of these finitely many points. The complement of their union in the compact source is compact, and its image is closed by [F4]. It omits $y$, so a neighborhood of $y$ avoids this image. Intersecting with the finitely many target neighborhoods gives an evenly covered neighborhood. When the fibre is empty, the compact image itself is closed and excludes a neighborhood of $y$. Thus $p$ is a finite covering of its image, and the image is both open by local homeomorphism and closed by compactness. [F4, step 1.1, choose, construct, algebra]

3.1 Each real locus is a one-dimensional manifold, hence locally connected; its connected components are therefore open. Components are always closed, so a source component $D$ is compact. Its image is open in the target by the local homeomorphism and is closed by [F4]. If $D$ contains a point over $c$, its connected image lies in the connected component of $c$ and is nonempty, open and closed there. Connectedness forces it to be that entire component. The empty real source and an empty component claim are covered by step 2.1. [F4, step 1.1, step 2.1, algebra] ∎
