---
id: cor-coordinate-random-elements-on-a-countable-product-are-independent
kind: corollary
title: "Coordinate random elements of a countable product are independent"
status: published
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, def-coordinate-maps-and-cylinder-sigma-algebra, def-independent-random-elements]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, Proposition 3.67"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

Under the measure of [[thm-countable-product-of-probability-spaces]], the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

## Facts & Assumptions

**Given:** The canonical countable product probability space and finitely many
distinct indices $n_1,\ldots,n_k$.

[F1] The product measure has every prescribed finite product marginal. ([[thm-countable-product-of-probability-spaces]])

[F2] Independence of random elements means the finite intersection formula for their measurable inverse images. ([[def-independent-random-elements]])

## Proof

1.1 For $A_j\in\mathcal E_{n_j}$ and the distinct indices fixed above, [F1]
gives $\mathbb P(\bigcap_j\{X_{n_j}\in A_j\})=\prod_j\mu_{n_j}(A_j)$;
taking one coordinate gives the asserted law. [F1]

2.1 The right side is $\prod_j\mathbb P(X_{n_j}\in A_j)$, which is exactly [F2]. Since the finite family was arbitrary, all coordinates are independent. [F2] ∎
