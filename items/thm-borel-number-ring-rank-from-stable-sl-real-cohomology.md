---
id: thm-borel-number-ring-rank-from-stable-sl-real-cohomology
kind: theorem
title: Number-ring K-ranks from the stable special-linear cohomology algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-number-ring-quillen-k-rational-primitive-special-linear-homology
  - thm-countably-enumerated-group-bar-cohomology-primitive-duality
  - thm-ring-of-integers-free-of-rank-degree
sources:
  references:
    - title: Armand Borel, Stable real cohomology of arithmetic groups
      url: https://numdam.org/item/10.24033/asens.1269.pdf
      locator: Sections 10.6, 11.1–11.4 and 12.1–12.2, printed pages 265–271; the real cohomology algebra is an explicit hypothesis here, not imported as a proof.
---

## Statement

Let $K$ be a number field with signature $(r_1,r_2)$ and $R=\mathcal O_K$. Suppose the normalized real bar cohomology algebra of $G=\operatorname{SL}_\infty(R)$ is a graded exterior algebra having one generator in every degree $4j+1$ for each real place and one in every degree $2j+1$ for each pair of nonreal complex places, with $j\ge1$. Then for every $m\ge1$,
$$\dim_{\mathbb Q}\bigl(K_{2m+1}(R)\otimes\mathbb Q\bigr)=\begin{cases}r_1+r_2,&m\text{ even},\\r_2,&m\text{ odd}.\end{cases}$$
This result assumes the displayed stable cohomology algebra; it does not assert that arithmetic input or finite generation of the integral K-groups. No axiom of choice is used.

## Statement references

[[thm-number-ring-quillen-k-rational-primitive-special-linear-homology]]

[[thm-countably-enumerated-group-bar-cohomology-primitive-duality]]

[[thm-ring-of-integers-free-of-rank-degree]]

## Facts & Assumptions

**Given:** The number field, its signature and the stable real bar-cohomology algebra explicitly assumed in the Statement.

[F1] Finite-dimensional rational stable special-linear homology identifies rational Quillen K_n for n≥2 with its diagonal primitives. [[thm-number-ring-quillen-k-rational-primitive-special-linear-homology]]

[F2] For a group with supplied enumeration, finite-dimensional real bar cohomology implies finite-dimensional rational homology and equality between primitive-homology and cohomology-indecomposable dimensions. [[thm-countably-enumerated-group-bar-cohomology-primitive-duality]]

[F3] The integer ring has a finite integral basis of degree [K:Q]. [[thm-ring-of-integers-free-of-rank-degree]]

## Proof

**Proof technique:** Explicit enumeration, bar duality and exterior-algebra indecomposables.

1.1 Choose one finite integral basis for R using [F3]. Its integer coordinate tuples are enumerated by a fixed enumeration of Z^d; enumerate finite matrices by matrix size and their finite coordinate lists, and retain exactly those whose determinant is 1. Stabilizing by identity blocks gives a supplied enumeration of G=SL∞(R). One basis and finitely many enumeration formulas suffice; no basis is chosen for a family of rings. [F3, given, construct, algebra]

2.1 The assumed exterior algebra has only finitely many generators of degree at most any fixed n, so each real cohomology group is finite-dimensional. Apply [F2] to the enumeration in step 1.1. It follows that each H_j(BG;Q) is finite-dimensional, and the dimension of P H_n(BG;Q) is the dimension of the indecomposable quotient of H^n(G;R). The normalized bar chain complex computes the homology of the nerve BG by the explicit simplicial-cell boundary and degeneracy contraction, so this is the same rational homology as in [F1]. [F1, F2, step 1.1, given, algebra]

3.1 In an exterior algebra on homogeneous positive-degree generators, the quotient by products of positive-degree elements is the span of the generators themselves: its monomial basis splits by exterior length, and length at least two is exactly the decomposable ideal. In degree n=2m+1≥3, each complex place contributes one generator, while a real place contributes one exactly if 2m+1≡1 modulo 4, equivalently if m is even. Thus the indecomposable dimension is r₁+r₂ for m even and r₂ for m odd. This uses only the explicitly assumed generator degrees. [given, step 2.1, algebra, cases]

4.1 Apply [F1] to the finite-dimensional rational homology obtained in step 2.1. Taking dimensions of its isomorphism and using steps 2.1–3.1 gives the displayed formula. The argument neither proves the assumed stable cohomology algebra nor infers that the integral K-group is finitely generated. [F1, step 2.1, step 3.1, algebra] ∎
