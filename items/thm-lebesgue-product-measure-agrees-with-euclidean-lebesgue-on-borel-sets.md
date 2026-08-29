---
id: thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
kind: theorem
title: "On Borel subsets of R^{m+n}, the product lambda_m times lambda_n agrees with lambda_{m+n}"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure, thm-lebesgue-measure-of-a-box-of-every-kind, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-measure-uniqueness-on-a-sigma-finite-pi-system, def-pi-system, def-countable-choice]
proof_strategy: direct
verification:
  precheck: pass
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

**Given:** The Axiom of Countable Choice, positive integers $m,n$, and the
identification $\mathbb R^{m+n}=\mathbb R^m \times \mathbb R^n$.

[L1] The Borel sigma-algebra on $\mathbb R^{m+n}$ is $\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)$. ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]])

[L2] The product measure on sigma-finite spaces exists and satisfies the rectangle formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[L3] Assuming countable choice, Lebesgue measure of a box is the product of its
side lengths. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L4] Assuming countable choice, Lebesgue measure is sigma-finite and finite on
bounded sets.
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L5] Two measures that agree on a sigma-finite generating pi-system agree on the generated sigma-algebra. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[A1] Rational half-open boxes in $\mathbb R^{m+n}$ form a sigma-finite generating pi-system for $\mathcal B(\mathbb R^{m+n})$.

## Proof

**Proof technique:** direct.

1.1 Let $Q=\prod_{i<m+n}(a_i,b_i]$ be a rational half-open box. Split it as $Q=A \times B$ with $A \subseteq \mathbb R^m$ and $B \subseteq \mathbb R^n$. Then step 2 of [L2] and [L3] give $$ (\lambda_m \times \lambda_n)(Q) = \lambda_m(A)\lambda_n(B) = \prod_{i<m+n}(b_i-a_i) = \lambda_{m+n}(Q). $$ [L2, L3]

2.1 By [L4], both measures are sigma-finite on the pi-system of [A1]. Step 1.1 shows that they agree there, and [L1] identifies the generated sigma-algebra with $\mathcal B(\mathbb R^{m+n})$. Therefore [L5] implies $\lambda_m \times \lambda_n=\lambda_{m+n}$ on every Borel set. [A1, L4, L5, step 1.1] ∎
