---
id: "thm-stokes-theorem-for-smooth-singular-chains"
kind: "theorem"
title: "Stokes theorem for smooth singular chains"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-stokes-theorem-for-the-standard-simplex","def-smooth-singular-chain-and-cochain-complexes","def-integral-of-a-form-over-a-smooth-singular-simplex","lem-simplex-integrals-are-independent-of-affine-coordinate-identification","thm-the-exterior-derivative-commutes-with-pullback","prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a smooth manifold, possibly with boundary. For $k\ge1$, $c\in C_k^\infty(M;\mathbb R)$ and $\omega\in\Omega^{k-1}(M)$, define integration over a chain by the finite linear sum of its simplex integrals. Then
$$\int_c d\omega=\int_{\partial c}\omega.$$
The zero chain has integral zero. In degree zero the boundary is zero; no degree-minus-one form is required by this statement.

## Facts & Assumptions

[F1] [[lem-stokes-theorem-for-the-standard-simplex]] proves the alternating face formula for a smooth form on a neighbourhood of the affine simplex.

[F2] [[def-smooth-singular-chain-and-cochain-complexes]] specifies finite formal sums of smooth simplices, the signed face differential and its degree-zero convention.

[F3] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines simplex integration, including point evaluation. [[lem-simplex-integrals-are-independent-of-affine-coordinate-identification]] supplies independence of the chosen neighbourhood extension.

[F4] [[thm-the-exterior-derivative-commutes-with-pullback]] gives $d\bar\sigma^*\omega=\bar\sigma^*d\omega$ on an extension domain.

[F5] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]] identifies face pullbacks with pullbacks along the composite face simplex.

## Proof

**Given:** A manifold $M$, an integer $k\ge1$, a finite smooth singular $k$-chain $c$ and a smooth $(k-1)$-form $\omega$.

1.1 For one smooth simplex $\sigma$, take a neighbourhood extension $\bar\sigma$ as required in [F2]. The smooth form $\eta=\bar\sigma^*\omega$ is defined on that whole neighbourhood in the affine span, so [F1] applies. By [F4] its derivative is $\bar\sigma^*d\omega$. By [F5], its pullback to face $i$ is $(\bar\sigma\circ\delta_i)^*\omega$, which extends the face simplex smoothly. Definition [F3] consequently gives $$\int_\sigma d\omega=\sum_{i=0}^k(-1)^i\int_{\sigma\circ\delta_i}\omega.$$ The values do not depend on the selected extension. [F1, F2, F3, F4, F5, given]

1.2 A chain is a finitely supported coefficient function on the supplied simplex set. Define $\int_c\omega=\sum_{\sigma\in\operatorname{supp}c}c(\sigma)\int_\sigma\omega$. This is independent of a written expression for $c$: combining repetitions adds their coefficients, and inserting a zero coefficient changes nothing. Finite distributivity gives additivity and real homogeneity in $c$. No basis selection or simultaneous choice of extensions is involved, because [F3] already assigns a unique value to each simplex. [F2, F3, given]

2.1 Multiply step 1.1 by $c(\sigma)$ and sum over its finite support. The boundary from [F2] is the same finite double sum of face simplices with coefficients $c(\sigma)(-1)^i$. When identical faces occur, step 1.2 combines their coefficients in exactly the same way in its integral. Therefore $$\int_c d\omega=\sum_{\sigma,i}c(\sigma)(-1)^i\int_{\sigma\delta_i}\omega=\int_{\partial c}\omega.$$ [F2, step 1.1, step 1.2]

3.1 For $k=1$, [F1] uses the terminal-minus-initial endpoint evaluations, so the formula includes every smooth path, constant or otherwise. Degenerate higher simplices remain generators, and step 1.1 applies to their smooth extensions without a rank assumption. If $c=0$ or $M=\varnothing$, the relevant sums are empty and both integrals vanish. A zero form has zero pullback and zero integral. The assertion involves only positive chain degrees and finite sums, so no negative degree or choice assumption is hidden. [F1, F2, F3, step 2.1] ∎
