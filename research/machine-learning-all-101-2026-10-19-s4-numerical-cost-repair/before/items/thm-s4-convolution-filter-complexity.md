---
id: thm-s4-convolution-filter-complexity
kind: theorem
title: S4 convolution-filter arithmetic and numerical cost
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-s4-dplr-parameterization, alg-s4-state-space-recurrence-and-convolution, thm-hippo-leg-matrices-have-low-rank-structure, lem-roots-of-unity-fft-complexity, thm-cauchy-matvec-at-roots-of-unity-exact-cost, lem-s4-convolution-root-of-unity-reduction]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Theorem 3 and Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §§3.3, 6.1–6.4, 7.1"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Statement

Let $N,r,L\ge1$, let $r$ be fixed, and let $A=\Lambda-PQ^*$ with diagonal $\Lambda\in\mathbb C^{N\times N}$, $P,Q\in\mathbb C^{N\times r}$, and $B,C\in\mathbb C^N$, where $^*$ denotes conjugate transpose. Let $\Delta>0$, assume $I-\Delta A/2$ is invertible, and choose $M$ to be the least power of two with $M\ge L$. For the length-$M$ filter procedure, take the transformed output vector $\widetilde C_M=(I-\bar A^M)^*C$ as supplied input, where $\bar A=(I-\Delta A/2)^{-1}(I+\Delta A/2)$. Assume that every root-grid diagonal resolvent and low-rank correction used by the procedure is invertible. In the exact complex arithmetic model, each scalar addition, multiplication, division, and zero test has unit cost. The length-$L$ filter is $K_L=(C^*\bar A^j\bar B)_{j=0}^{L-1}$. The procedure returns the first $L$ coefficients of this filter using at most $(r+1)^2$ roots-of-unity Cauchy products, $O((N+L)\log^2(2+N+L))$ operations, and $O(N+L)$ working space. The operation count is for filter evaluation from $\widetilde C_M$; it does not include forming that vector from $C$. This bound applies in particular to the equivalent DPLR state coordinates of the stated HiPPO generators.

The S4 source also reports that numerical evaluation to precision $0<\varepsilon\le1/2$ uses $O((N+L)\log(2+N+L)\log(1/\varepsilon))$ operations and $O(N+L)$ space. The accuracy norm, finite-precision arithmetic model, conditioning margins for the root resolvents and low-rank corrections, and resulting error propagation needed to make this a theorem are not supplied by the local numerical Cauchy results; that numerical clause remains unresolved and is not proved below. The exact operation bounds concern filter evaluation only and imply no bound for training cost, numerical conditioning, or long-context accuracy.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Theorem 3 and Appendix C.3](https://arxiv.org/pdf/2111.00396)

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §§3.3, 6.1–6.4, 7.1](https://arxiv.org/pdf/1506.02285)

[[thm-hippo-leg-matrices-have-low-rank-structure]]

[[lem-s4-convolution-root-of-unity-reduction]]

[[thm-cauchy-matvec-at-roots-of-unity-exact-cost]]

[[lem-roots-of-unity-fft-complexity]]

## Facts & Assumptions

**Given:** The finite DPLR parameters, fixed rank, $L\ge1$, $M$ the least power of two at least $L$, the supplied transformed output vector, and the bilinear and root-grid invertibility hypotheses in the Statement.

[F1] [[alg-s4-state-space-recurrence-and-convolution]]: with supplied $\widetilde C_M$, the filter procedure evaluates the truncated generating function at the $M$th roots, handles $z=-1$ by its finite value, applies the inverse radix-two transform, and returns the first $L$ coefficients.

[F2] [[lem-s4-convolution-root-of-unity-reduction]]: each root value is given by the DPLR resolvent formula, the $z=-1$ value is $(\Delta/2)\widetilde C_M^*B$, and the four matrix-vector families reduce to $(r+1)^2$ scalar Cauchy products.

[F3] [[thm-cauchy-matvec-at-roots-of-unity-exact-cost]]: for $n\ge1$ poles and an $M$-root grid with no collisions, the exact Cauchy product costs $O((n+M)\log^2(2+n+M))$ operations and $O(n+M)$ space.

[F4] [[lem-roots-of-unity-fft-complexity]]: the radix-two DFT and inverse cost $O(M\log(2+M))$ operations and $O(M)$ space, and inverse transformation recovers the polynomial coefficients exactly.

[F5] [[thm-hippo-leg-matrices-have-low-rank-structure]]: the stated LegS, LegT, and LagT generators, after the specified state-coordinate changes, admit DPLR form with rank at most two.

## Proof

**This proof establishes the exact-arithmetic clause only. The numerical clause in the Statement is explicitly unresolved.**

1.1 The fixed-rank DPLR input is valid for the equivalent HiPPO state-space coordinates by [F5]; the operation argument also applies to any supplied DPLR matrices of the same dimensions. By [F2], each required root value has the stated Cauchy-product expression, including the direct value at $-1$. Under the noncollision and correction-invertibility assumptions, the filter procedure in [F1] therefore computes all $M$ generating values exactly. [given, F1, F2, F5]

2.1 Each scalar product has at most $N$ poles and is evaluated on $M$ roots. If it has at least one pole, [F3] bounds its cost by $O((N+M)\log^2(2+N+M))$ operations and $O(N+M)$ space; if it has no poles, its constant value is formed by a single finite sum in $O(N+M)$ operations and space. There are at most $(r+1)^2$ such products by [F2], a constant number because $r$ is fixed. The per-root correction matrix products and inversions cost $O(M(r+1)^3)$ operations by finite-dimensional elimination, which is $O(M)$ for fixed $r$. [given, F2, F3, step 1.1, algebra]

2.2 The generating values are the DFT of the $M$ coefficients $C^*\bar A^j\bar B$ for $0\le j<M$. By [F4], the inverse radix-two transform recovers these coefficients exactly; [F1] then returns their first $L$ entries, which are precisely the length-$L$ filter. [F1, F4, step 1.1, algebra]

3.1 Since $M$ is the least power of two at least $L$, $M<2L$ for every integer $L\ge1$. Combining the Cauchy products, per-root corrections, and inverse transform gives $O((N+L)\log^2(2+N+L))$ exact complex arithmetic operations. Processing the Cauchy products sequentially uses $O(N)$ product-tree workspace; their $(r+1)^2$ root-value arrays, the correction matrices, and the inverse transform use $O(M(r+1)^2)$ additional space. Fixed $r$ and $M<2L$ give total $O(N+L)$ working space. The proof counts the supplied $\widetilde C_M$ as input and does not count its formation from $C$. [given, F1, F2, F3, F4, step 2.1, step 2.2, algebra] ∎

## Numerical accuracy status

The stated approximate-Cauchy operation count is retained as a source-reported claim, but no local proof establishes its output norm, arithmetic model, dependence on root separation or correction conditioning, or propagation through the small matrix inversions and inverse FFT. Pan's inspected exact-arithmetic and approximate-arithmetic sections do not furnish all of these hypotheses for the S4 root grid. Required supplier proposed for the A page: `thm-cauchy-root-grid-matvec-numerical-cost`, with a declared accuracy norm, finite-precision model, nonresonance/conditioning hypotheses, and a complete error bound. This item and its dependent cost example must remain escalated until that supplier is supplied and checked.
