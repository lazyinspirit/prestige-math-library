---
id: cex-feller-negligibility-cannot-be-removed-from-the-converse
kind: counterexample
title: Feller negligibility cannot be removed from the converse
deps: ["lem-characteristic-function-of-a-normal-law", "def-total-row-variance-and-lindeberg-condition", "thm-integration-against-a-density", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-exponential-is-strictly-increasing", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-row-wise-independent-centered-triangular-array", "def-standard-normal-and-normal-laws", "def-moments-variance-and-covariance", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, discussion after Theorem 3.4.14'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Example 28.4
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Assume AC. A centered row-wise independent triangular array can have total row variance one and row-sum law N(0,1) for every n, while its maximum summand variance stays one and Lindeberg fails. Thus Feller negligibility cannot be omitted from the converse theorem.

## Facts & Assumptions

[F1] A variable with standard normal law has mean zero and variance one. [[lem-characteristic-function-of-a-normal-law]].

[F2] Normalized Lindeberg quantities are the summed tail second moments. [[def-total-row-variance-and-lindeberg-condition]].

[F3] The normal tail second moment is an integral against its positive density. [[thm-integration-against-a-density]].

[F4] An interval of length one has Lebesgue measure one. [[thm-lebesgue-measure-of-a-box-of-every-kind]].

[F5] The exponential is positive and increasing on the real line. [[thm-exponential-is-strictly-increasing]].

[F6] A positive pointwise lower bound gives a positive integral lower bound. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F7] Under AC, the standard normal density defines a probability measure $N(0,1)$ on $\mathbb R$. [[def-standard-normal-and-normal-laws]].

## Counterexample

**Given:** Assume AC. A centered row-wise independent triangular array can have total row variance one and row-sum law N(0,1) for every n, while its maximum summand variance stays one and Lindeberg fails. Thus Feller negligibility cannot be omitted from the converse theorem.

1.1 On the standard-normal probability space supplied by [F7], let Z be its coordinate and define $X_{n,1}=Z$, $X_{n,k}=0$ for $2\le k\le n$. By [F1], every entry is centered and the total variance is one. Each row is independent: if an event for a zero coordinate excludes zero, both the intersection probability and the product are zero; otherwise all those events are the full space and the identity reduces to the event for Z. Thus the row sum is exactly Z for every n, its law is N(0,1), and the maximum summand variance equals one. Independence between rows is not required. [F1, F7]

2.1 For each fixed epsilon>0, [F2] gives the Lindeberg quantity $\mathbb E[Z^2\mathbf1_{\{|Z|>\varepsilon\}}]$, independent of n. On $[\varepsilon+1,\varepsilon+2]$, the integrand against the normal density is at least $(\varepsilon+1)^2 e^{-(\varepsilon+2)^2/2}/\sqrt{2\pi}>0$, by [F3] and [F5]. Integrating this bound over the length-one interval with [F4]–[F6] proves strict positivity. Hence the Lindeberg limit is not zero for any epsilon>0, despite exact normality of all row sums. The example works for n=1 as well. AC is inherited solely through construction of the normal law and its Lebesgue density; one Z is reused and no independent sequence across rows is constructed. [step 1.1, F2, F3, F4, F5, F6] ∎
