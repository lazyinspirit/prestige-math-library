---
id: ex-field-cohomology-of-an-infinite-wedge-of-circles
kind: example
title: Field cohomology of an infinite wedge of circles
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, singular cohomology and unrestricted cochains, printed pages197–202; explicit CW and dual calculation
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Example

Assume AC. Let $X=\bigvee_{j\ge1}S^1_j$ have the CW weak topology, with all circle vertices identified. For every field $k$,
$$H^0(X;k)=k,\qquad H^1(X;k)\cong\prod_{j\ge1}k,\qquad H^n(X;k)=0\quad(n>1),$$
whereas $H_1(X;k)\cong\bigoplus_{j\ge1}k$. The cohomology group is the full product, not a finite-support subgroup. For $k=\mathbb F_2$ the product and direct sum are not even isomorphic as sets.

## Facts & Assumptions

[F1] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] gives endpoint differences for oriented edges. [[thm-cellular-homology-computes-singular-homology]] applies to arbitrary CW complexes and every coefficient group, using direct-sum cellular chain groups.

[F2] Under [[def-axiom-of-choice]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] identifies cohomology with the unrestricted linear dual of homology.

## Proof

**Given:** The indicated CW wedge $X$ and a field $k$, assuming AC.

1.1 This CW structure has one zero-cell $v$, one oriented one-cell $e_j$ for each $j\ge1$, and no higher cells. Every edge has terminal and initial endpoint $v$, so its cellular boundary is $v-v=0$ by [F1]. With coefficients in $k$ the same endpoint calculation gives $C_0^{\mathrm{cell}}=k$, $C_1^{\mathrm{cell}}=\bigoplus_{j\ge1}ke_j$ and zero differential. Thus its homology is $k$ in degree zero, the displayed direct sum in degree one, and zero in higher degrees. The arbitrary-CW comparison of [F1] transfers these actual groups to singular homology. The prescribed weak topology is essential to that CW application. [F1, given]

2.1 For each sequence $a=(a_j)\in\prod_{j\ge1}k$, define $\lambda_a(\sum_j c_je_j)=\sum_jc_ja_j$. Every input sum has finite support, so this is a well-defined linear functional with no restriction on the support of $a$. Conversely a linear functional $\lambda$ is determined by the sequence $a_j=\lambda(e_j)$; linearity gives $\lambda=\lambda_a$. These maps are inverse and linear. Applying [F2] and step 1.1 yields the claimed $H^1$ product. The dual of $k$ is $k$ by evaluation at $1$, and the dual of zero is zero, giving the degree-zero and higher-degree cohomology groups. [F2, step 1.1]

3.1 For $k=\mathbb F_2$, a finite-support sequence $c$ maps injectively to the nonnegative integer $\sum_{j\ge1}c_j2^{j-1}$ by uniqueness of binary expansion, and every such integer comes from its finite binary expansion. Thus the direct sum is countable. The full product cannot be enumerated as $a^{(1)},a^{(2)},\ldots$: the sequence $b_j=1-a^{(j)}_j$ differs from the $j$th proposed sequence at coordinate $j$. It is therefore uncountable and cannot be isomorphic to the direct sum. The all-one sequence also explicitly represents a functional outside the canonical finite-support subgroup: it sends every $e_j$ to $1$. [step 2.1]

4.1 The zero sequence corresponds to the zero functional; a sequence supported at one coordinate is evaluation of that coordinate. The single vertex gives $H^0=k$ even though there are infinitely many edges. There is no degree-two cell, so no unmentioned differential changes the degree-one direct sum. The diagonal argument in step 3.1 uses the explicitly given enumeration indices and requires no choices; AC is inherited from field duality in [F2] and is also available for the arbitrary-CW comparison's compactness argument. This is the CW wedge, whose topology is not being replaced by a shrinking-circle subspace topology. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
