---
id: thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
kind: theorem
title: "On Borel subsets of R^{m+n}, the product lambda_m times lambda_n agrees with lambda_{m+n}"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-lebesgue-measure-of-a-box-of-every-kind, thm-measure-uniqueness-on-a-sigma-finite-pi-system, def-pi-system, def-countable-choice]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Corollary 1.7.19"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$m,n \ge 1$. Under the identification
$$\mathbb R^{m+n}=\mathbb R^m \times \mathbb R^n,$$
the product measure $\lambda_m \times \lambda_n$ and the Euclidean Lebesgue
measure $\lambda_{m+n}$ agree on every Borel subset of $\mathbb R^{m+n}$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, positive integers $m,n$, and the identification $\mathbb R^{m+n}=\mathbb R^m \times \mathbb R^n$.

[L1] The Borel sigma-algebra on $\mathbb R^{m+n}$ is $\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)$. ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]])

[L2] The product measure on sigma-finite spaces exists and satisfies the rectangle formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[L3] Assuming countable choice, Lebesgue measure of a box is the product of its side lengths. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L5] Two measures that agree on a sigma-finite generating pi-system agree on the generated sigma-algebra. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[A1] Rational half-open boxes, together with the empty set, form a generating pi-system for $\mathcal B(\mathbb R^{m+n})$. The increasing boxes $Q_N=(-N,N]^{m+n}$ exhaust the space and have finite measure for both measures in the Statement.

## Proof

**Proof technique:** direct.

1.1 For $d=m,n$, the cubes $(-N,N]^d$ exhaust $\mathbb R^d$ and have finite measure by [L3], so the sigma-finite product theorem [L2] applies. Let $Q=\prod_{i<m+n}(a_i,b_i]$ be a rational half-open box. Split it as $Q=A \times B$ with $A \subseteq \mathbb R^m$ and $B \subseteq \mathbb R^n$. Then the rectangle formula of [L2] and [L3] give $$ (\lambda_m \times \lambda_n)(Q) = \lambda_m(A)\lambda_n(B) = \prod_{i<m+n}(b_i-a_i) = \lambda_{m+n}(Q). $$ [L2, L3]

2.1 Each $Q_N$ from [A1] has finite $\lambda_{m+n}$-measure by [L3], and finite product measure by [L2] and [L3]; step 1.1 shows these values agree. The same step gives agreement on the whole generating pi-system, while [L1] identifies its generated sigma-algebra with $\mathcal B(\mathbb R^{m+n})$. Therefore [L5] implies $\lambda_m \times \lambda_n=\lambda_{m+n}$ on every Borel set. [A1, L1, L2, L3, L5, step 1.1] ∎
