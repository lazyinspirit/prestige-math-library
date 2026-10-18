---
id: thm-green-hall-coproduct-is-a-twisted-bialgebra-map
kind: theorem
title: "Green’s coproduct is an algebra map into the twisted tensor completion"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-green-hall-completion-and-coproduct
  - lem-green-hall-coproduct-is-coassociative
  - lem-green-coproduct-products-converge
  - lem-green-cross-square-counting-identity
  - lem-euler-twisted-hall-product-is-associative-and-unital
  - lem-hall-euler-form-is-additive
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5, PDF pp. 11–16, Green’s theorem and the full cross–square fiber proof."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§§1–2, printed pp. 585–588: composition-algebra flag counts and Serre relations (background only). Green compatibility is proved locally following Schiffmann §1.5, cited above."
verification:
  precheck: pending
---

## Statement

For a finite-field hereditary Hall category, products of Green images converge
coefficientwise and
$$ \Delta'([M]\star[N])=\Delta'([M])\cdot\Delta'([N]) $$
in the completion of [[def-green-hall-completion-and-coproduct]], where the
target multiplication is the stated Euler-twisted tensor multiplication. The
coproduct is coassociative and counital by
[[lem-green-hall-coproduct-is-coassociative]]. It is not asserted that the
whole completion is an algebra.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and basis objects $M,N$.

[F1] The basis formulas for $\Delta'$, the twisted Hall product and twisted tensor multiplication are those of [[def-green-hall-completion-and-coproduct]].

[F2] Products $\Delta'([M])\cdot\Delta'([N])$ have finite coefficient sums ([[lem-green-coproduct-products-converge]]).

[F3] The cross–square identity holds for the four external objects ([[lem-green-cross-square-counting-identity]]).

[F4] The Euler form is additive on $K_0$ ([[lem-hall-euler-form-is-additive]]).

[F5] Endpoint-labelled exact-sequence counts and Hall numbers satisfy $P^R_{A,B}=a_Aa_Bg^R_{A,B}$ ([[lem-hall-sequence-count-equals-aut-weighted-subobject-count]]).

## Proof



**Proof technique:** direct coefficient comparison.

1.1 Fix output objects $K,L$. From [F1], the coefficient of $[K]\otimes[L]$ in $\Delta'([M]\star[N])$ is $\frac{\nu^{\langle M,N\rangle+\langle K,L\rangle}}{a_Ma_N} \sum_{[J]}\frac{P^J_{M,N}P^J_{K,L}}{a_J}.$ The sum is finite because only middle terms of extensions of $M$ by $N$ occur. [F1, given]

1.2 In $\Delta'([M])\cdot\Delta'([N])$, denote the decompositions of $M$ by $(K_2,L_2)$ and those of $N$ by $(K_1,L_1)$. The Hall products in the two tensor factors contribute $P^K_{K_2,K_1}$ and $P^L_{L_2,L_1}$. Consequently the coefficient of $[K]\otimes[L]$ is $\frac1{a_Ma_N}\sum_{K_1, K_2, L_1, L_2} \nu^{E} \frac{P^M_{K_2, L_2}P^N_{K_1, L_1}P^K_{K_2, K_1}P^L_{L_2, L_1}} {a_{K_1}a_{K_2}a_{L_1}a_{L_2}},$ where $E=\langle K_2, L_2\rangle+\langle K_1, L_1\rangle +(L_2, K_1)+\langle K_2, K_1\rangle+\langle L_2, L_1\rangle.$ The summation is finite by [F2]. Converting each Hall coefficient to the endpoint-labelled sequence normalization uses [F5]. [F1, F2, F5, algebra]

2.1 Each nonzero summand in step 1.2 has $[M]=[K_2]+[L_2]$, $[N]=[K_1]+[L_1]$, $[K]=[K_2]+[K_1]$ and $[L]=[L_2]+[L_1]$. Expanding the two desired Euler exponents by [F4] gives $\langle M, N\rangle+\langle K, L\rangle =E+2\langle K_2, L_1\rangle.$ All terms in the expansion occur once in $E$ except the two displayed copies of $\langle K_2,L_1\rangle$. [F4, step 1.2, algebra]

3.1 By [F3], the weighted square count in step 1.2 with factor $|\operatorname{YExt}^1(K_2,L_1)|/|\operatorname{Hom}(K_2,L_1)|$ equals the cross count in step 1.1. By [F4] and finite-dimensionality, $\frac{|\operatorname{YExt}^1(K_2, L_1)|} {|\operatorname{Hom}(K_2, L_1)|} =q^{-\langle K_2, L_1\rangle} =\nu^{-2\langle K_2, L_1\rangle}.$ Thus the exponent $E$ in step 1.2 contributes exactly $\nu^{\langle M,N\rangle+\langle K,L\rangle}$ times the required Ext/Hom ratio. Substitution of the identity [F3] makes the coefficients in steps 1.1 and 1.2 equal. [F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 Equality holds at every output basis pair, proving multiplicativity on basis elements. Bilinearity and finite support of Hall products extend it to all finite Hall vectors. Coefficientwise convergence is [F2], and coassociativity and the counit are supplied by the flag proof in [[lem-green-hall-coproduct-is-coassociative]]. [F2, step 3.1, algebra] ∎

