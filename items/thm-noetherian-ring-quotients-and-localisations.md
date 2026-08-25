---
id: thm-noetherian-ring-quotients-and-localisations
kind: theorem
title: "Every quotient and every localisation of a Noetherian ring is Noetherian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-ideal-characterisations, lem-localised-ideal-generated-by-contracted-numerators, thm-correspondence-theorem-ideals, prop-canonical-quotient-ring-map, def-quotient-ring, def-multiplicative-subset-and-localisation, thm-generated-ideal-description-in-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.7)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "B. Totaro, Commutative Algebra (Michaelmas 2011), notes by Z. Norwood, §8 (8.2), (8.5)"
      url: "https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf"
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Ch. 5"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring. Then

1. $R/I$ is Noetherian for every ideal $I$ of $R$
   ([[def-quotient-ring]]), and
2. $S^{-1}R$ is Noetherian for every multiplicative subset $S\subseteq R$
   ([[def-multiplicative-subset-and-localisation]]).

Both cases include their degenerate instances: $I=R$ makes $R/I$ the zero ring,
and $0\in S$ makes $S^{-1}R$ the zero ring, and the zero ring is Noetherian.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I$ of $R$ with canonical projection $\pi\colon R\to R/I$, and a multiplicative subset $S\subseteq R$ with localisation map $\lambda_S\colon R\to S^{-1}R$.

[L1] For $I\trianglelefteq R$, the maps $J\mapsto J/I$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between the ideals $J$ of $R$ containing $I$ and the ideals $K$ of $R/I$ ([[thm-correspondence-theorem-ideals]]).

[L2] The canonical projection $R\to R/I$ is a surjective ring homomorphism with kernel $I$ ([[prop-canonical-quotient-ring-map]]).

[L3] The quotient ring $R/I$ has underlying set the additive cosets of $I$ and multiplication $(r+I)(s+I)=rs+I$ ([[def-quotient-ring]]).

[L4] In a commutative ring, $(S)$ consists of finite sums $\sum r_is_i$, and $(a)=Ra$; the empty sum is included and equals $0$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[L5] For a commutative ring, being Noetherian is equivalent to every ideal being finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[L6] For an ideal $J$ of $S^{-1}R$ the contraction $\mathfrak a=\lambda_S^{-1}(J)$ is an ideal of $R$, and whenever $\mathfrak a=(a_1,\ldots,a_n)$ one has $J=(a_1/1,\ldots,a_n/1)$ ([[lem-localised-ideal-generated-by-contracted-numerators]]).

## Proof

**Proof technique:** direct.

1.1 Every ideal of $R/I$ is of the form $J/I=\pi(J)$ for an ideal $J$ of $R$ containing $I$, by the correspondence between the ideals of $R/I$ and the ideals of $R$ containing $I$. [L1, L3, given]

1.2 Since $R$ is Noetherian, every ideal of $R$ is finitely generated; in particular the ideal $J$ of the previous sentence is, and so is the contraction of any ideal of $S^{-1}R$. [L5, given]

2.1 Fix an ideal of $R/I$ and write it as $J/I$ with $J=(x_1,\ldots,x_n)$, $n\in\mathbb N$. Then $J/I$ is generated in $R/I$ by $\pi(x_1),\ldots,\pi(x_n)$: an element of $J/I$ is $\pi(y)$ with $y=\sum_{i}c_ix_i$, so it equals $\sum_i\pi(c_i)\pi(x_i)$; conversely a finite sum $\sum_i\bar c_i\pi(x_i)$ has each $\bar c_i=\pi(c_i)$ by surjectivity of $\pi$, hence equals $\pi(\sum_ic_ix_i)\in\pi(J)$. So every ideal of $R/I$ is finitely generated. [L2, L4, step 1.1, step 1.2]

2.2 Fix an ideal $J'$ of $S^{-1}R$ and let $\mathfrak a=\lambda_S^{-1}(J')$ be its contraction, an ideal of $R$. By step 1.2 there are $a_1,\ldots,a_n\in R$, with $n\in\mathbb N$, such that $\mathfrak a=(a_1,\ldots,a_n)$, and then $J'=(a_1/1,\ldots,a_n/1)$. So every ideal of $S^{-1}R$ is finitely generated. [L6, step 1.2, given]

3.1 A commutative ring all of whose ideals are finitely generated is Noetherian, so $R/I$ is Noetherian by step 2.1 and $S^{-1}R$ is Noetherian by step 2.2. [L5, step 2.1, step 2.2] ∎

## Remarks

- **The converse of neither half holds.** A quotient or a localisation of a non-Noetherian ring can be Noetherian: the fraction field of a non-Noetherian integral domain is a field, and a field is Noetherian. The theorem is therefore stated in one direction only.

- **Where the Noetherian hypothesis is spent.** It is used exactly twice, both times in step 1.2, to produce a finite generating list: once for an ideal of $R$ containing $I$, and once for the contraction of an ideal of $S^{-1}R$. Neither half needs the ascending chain condition or the maximal condition, so neither half uses a choice principle beyond what [[thm-noetherian-ring-ideal-characterisations]] already records.

- **The quotient half uses only surjectivity of the projection.** Step 2.1 appeals to no other property of $\pi$, so the same argument shows that the image of a finitely generated ideal under any surjective homomorphism of commutative rings is finitely generated.
