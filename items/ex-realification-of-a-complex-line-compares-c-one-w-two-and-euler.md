---
id: ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler
kind: example
title: Realification of a complex line compares c-one, w-two, and Euler
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, thm-mod-two-reduction-of-chern-classes, prop-first-stiefel-whitney-class-classifies-orientability, lem-complex-orientation-of-underlying-real-bundles, def-chern-classes-from-the-projective-bundle-relation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes, sections 14-15"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Complex line bundles and their underlying real bundles, printed pp.167-175"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $L\to B$ be a numerable complex line over a path-connected CW
base, and let $\rho_2$ denote reduction mod two. Then
$$e(L_{\mathbb R})=c_1(L),\qquad w_1(L_{\mathbb R})=0,\qquad w_2(L_{\mathbb R})=\rho_2c_1(L).$$

## Facts & Assumptions

**Given:** AC and a numerable complex line $L$ over a path-connected CW base.

[A1] The Axiom of Choice is assumed, exactly as inherited from the characteristic-class suppliers ([[def-axiom-of-choice]]).

[F1] For a complex rank-$n$ bundle one has $c_n(E)=e(E_{\mathbb R})$ in the complex orientation ([[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]).

[F2] For a complex bundle $w_{2i+1}(E_{\mathbb R})=0$ and $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$ ([[thm-mod-two-reduction-of-chern-classes]]).

[F3] An orientable real bundle has $w_1=0$ ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F4] The underlying real bundle of a complex line carries the complex orientation ([[lem-complex-orientation-of-underlying-real-bundles]]).

[F5] $c_0=1$, $c_1=e$ on a line, and $c_i=0$ for $i\geq2$ on a line ([[def-chern-classes-from-the-projective-bundle-relation]]).

## Verification

**Proof technique:** direct.

1.1 The Euler comparison: [F4] supplies the complex orientation of $L_{\mathbb R}$, so [F1] with $n=1$ gives $e(L_{\mathbb R})=c_1(L)$. [F1, F4]

1.2 Orientation: $L_{\mathbb R}$ is oriented by [F4], hence orientable, so $w_1(L_{\mathbb R})=0$ by [F3]. [F3, F4]

1.3 The mod-two comparison: [F2] with $i=1$ gives $w_2(L_{\mathbb R})=\rho_2c_1(L)$ and $w_3(L_{\mathbb R})=0$; by [F5] all higher Chern classes of $L$ vanish, so $w_k(L_{\mathbb R})=0$ for $k\geq3$ as well. [F2, F5]

2.1 Boundary cases. The trivial line $L=\varepsilon^1$ has $c_1=0$, $e=0$ and $w_1=w_2=0$; the restriction to rank one is the exact range in which [F5] applies, and the general-rank versions are the cited theorems. The coefficient field $\mathbb F_2$ is nonzero, so $\rho_2$ is the standard reduction. AC is used only through [A1]. [A1, F1, F2, step 1.1] ∎

## Source notes

The comparison $e(L_{\mathbb R})=c_1(L)$, $w_1=0$, $w_2=\rho_2c_1$ for a complex line is the rank-one case of Milnor-Stasheff sections 14-15; it is used on the companion page to identify the two-torsion class of the complexified universal real line.
