---
id: prop-first-chern-class-of-tensor-dual-and-conjugate-lines
kind: proposition
title: First Chern class of tensor, dual, and conjugate lines
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-first-chern-class-classifies-complex-line-bundles, def-chern-classes-from-the-projective-bundle-relation, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, thm-numerable-vector-bundles-admit-bundle-metrics, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the classification theorem and the metric supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 4"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Tensor and dual formulas for c_1, printed pp.211-212"
---

## Statement

Assume AC. Let $L,M$ be numerable complex line bundles over a path-connected
CW complex with a vertex basepoint, or over a path-connected paracompact
Hausdorff CGWH space of CW homotopy type. Then
$$c_1(L\otimes M)=c_1(L)+c_1(M),\qquad c_1(L^*)=-c_1(L),\qquad c_1(\overline L)=-c_1(L),$$
where $L^*$ is the dual line and $\overline L$ the conjugate line.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classification and metric suppliers ([[def-axiom-of-choice]]).

[F1] $c_1:\operatorname{Pic}_{\mathrm{top}}(X)\to H^2(X;\mathbb Z)$ is a natural group isomorphism, tensor product corresponding to addition ([[thm-first-chern-class-classifies-complex-line-bundles]]).

[F2] Tensor products, duals and conjugates of complex line bundles are formed by the corresponding transition functions, and evaluation $v\otimes\lambda\mapsto\lambda(v)$ is an isomorphism of line bundles (in a local line frame it is multiplication of the two scalar coordinates) ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F3] Every numerable complex bundle admits a Hermitian metric ([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

[F4] For a complex line $L$ the first Chern class equals the Euler class of its underlying real rank-two bundle, $c_1(L)=e(L_{\mathbb R})$ ([[def-chern-classes-from-the-projective-bundle-relation]]).

## Proof

**Proof technique:** direct.

**Given:** AC and numerable complex lines $L,M$ over either of the bases in the statement.

1.1 The tensor formula is the additivity clause of the group isomorphism of [F1]: linearity of $c_1$ under the group structure of $\operatorname{Pic}_{\mathrm{top}}$ is exactly $c_1(L\otimes M)=c_1(L)+c_1(M)$. [F1]

2.1 The dual formula: the evaluation pairing of [F2] shows $L\otimes L^*\cong\varepsilon^1$, so by step 1.1 and $c_1(\varepsilon^1)=0$ one has $c_1(L^*)=-c_1(L)$. [F2, step 1.1]

3.1 The conjugate formula: write a Hermitian metric from [F3] as $h$, conjugate-linear in its first argument and linear in its second (transpose the arguments if using the opposite convention). It provides, for each $x$, the conjugate-linear isomorphism $L_x\to L_x^*$, $v\mapsto h(v,-)$, which is complex-linear on the conjugate line; in a local frame $e$, the functional sends $we$ to $\overline z w h(e,e)$ for $v=ze$, so it is continuous with nonzero coefficient $h(e,e)>0$. Hence the maps define an isomorphism $\overline L\cong L^*$. Hence $c_1(\overline L)=c_1(L^*)=-c_1(L)$ by step 2.1. [F2, F3, step 2.1]

3.2 Specialization to underlying real bundles: for a complex line with $c_1(L)=e(L_{\mathbb R})$ by [F4], the dual identity reads $e((L^*)_{\mathbb R})=-e(L_{\mathbb R})$, consistent with the orientation-reversal sign. [F4, step 2.1]

4.1 Boundary cases. For the trivial line $L=\varepsilon^1$ the formulas read $c_1(M)=0+c_1(M)$ and $0=0$; for a point base both sides vanish. The empty base is excluded by the path-connected hypothesis; the group $\operatorname{Pic}_{\mathrm{top}}(X)$ is abelian and $H^2(X;\mathbb Z)$ is nonzero as a group in general but may be zero, in which case all three identities still hold. AC is used only through [A1] in the classification and metric suppliers. [A1, F1, F2, step 1.1, step 3.1] ∎

## Source notes

May, Chapter 24 section 4, printed pp. 211-212, obtains the tensor and dual formulas from the Picard group description; the conjugate formula is the same identity composed with the metric isomorphism $\overline L\cong L^*$. The underlying real-bundle reading of the dual formula is the orientation-reversal sign for Euler classes.
