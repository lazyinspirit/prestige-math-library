---
title: The low-dimensional quotient follows from the stage sequence
status: published
research_item: lem-author-e216acade157-low-dimensional-quotient
dependency_level: 26
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [lem-author-e216acade157-perfect-image-formula](item-lem-author-e216acade157-perfect-image-formula)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing)
- [def-filtration-projections](item-def-filtration-projections)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. Let $k$ be algebraically closed and $X$ a normal finite-type $k$-scheme. If $d=\dim X\leq3$, the actual projection induces an isomorphism
$$F^2_{\rm mot}K_0(X)/F^3_{\rm mot}K_0(X)\xrightarrow{\ \overline p_2\ }H^{4,2}_{\rm mot}(X,\mathbb Z),\qquad\overline p_2=-\overline c_2.$$
If $d\leq2$, the third image subgroup itself is zero.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. Choice and the existing size bounds are inherited from the stage-vanishing and stage-to-image premises in [F2] at steps 1.1–2.1 and the perfect-image comparison in [F3] at step 2.1.

[F1] [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the exact sequence ending in $H^{4,2}_{\rm mot}(X,\mathbb Z)\to\pi_{-1}\operatorname{Fil}^3K(X)$.

[F2] [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) says $\pi_j\operatorname{Fil}^iK=0$ for $j<0$ and $i\geq d$, and $\pi_0\operatorname{Fil}^iK=0$ for $i>d$. [def-filtration-projections](item-def-filtration-projections) identifies the second stage with its image under the present normal hypotheses.

[F3] [lem-author-e216acade157-perfect-image-formula](item-lem-author-e216acade157-perfect-image-formula) identifies the actual transported map with $-c_2$ and its kernel with the third image subgroup under the stated Choice and site/universe size hypotheses.

## Proof
**Given:** $X$ in the stated normal finite-type algebraically closed scope, of dimension at most three, with Choice and the fixed site and universe bounds as in [A1].

**Goal:** Obtain the quotient without a later surjectivity consumer.

1.1 Since $3\geq d$, [F2] makes the final obstruction group $\pi_{-1}\operatorname{Fil}^3K(X)$ zero. Exactness of [F1] makes the second-stage projection surjective. Transfer this assertion to $F^2$ using its stage-image isomorphism in [F2]. [A1, F1, F2]

2.1 Its kernel is $F^3$ and its value is $-c_2$ by [F3]. The first isomorphism theorem proves the displayed quotient identification with that exact sign. If $d\leq2$, then $3>d$ and [F2] makes the third stage's $\pi_0$, hence its image subgroup, zero. No later second-Chern-surjectivity proposition is used. [A1, F2, F3, step 1.1] ∎
