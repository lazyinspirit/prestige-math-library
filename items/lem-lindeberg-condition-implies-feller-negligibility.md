---
id: lem-lindeberg-condition-implies-feller-negligibility
kind: lemma
title: The Lindeberg condition implies Feller negligibility
deps: ["def-total-row-variance-and-lindeberg-condition", "thm-linearity-of-the-lebesgue-integral-on-l-one", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-moments-variance-and-covariance"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Section 3.4.2'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Section 27
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a centered triangular array with $\sum_k\mathbb EX_{n,k}^2=1$, the Lindeberg condition implies **Feller negligibility**: $\max_k\operatorname{Var}(X_{n,k})\to0$. Independence is not needed.

## Facts & Assumptions

[F1] In normalized rows the Lindeberg quantity is the sum of the truncated second moments. [[def-total-row-variance-and-lindeberg-condition]].

[F2] An integrable function splits into its two complementary restrictions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F3] Nonnegative integrals preserve pointwise inequalities. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

## Proof

**Given:** For a centered triangular array with $\sum_k\mathbb EX_{n,k}^2=1$, the Lindeberg condition implies **Feller negligibility**: $\max_k\operatorname{Var}(X_{n,k})\to0$. Independence is not needed.

1.1 Fix $\varepsilon>0$. For each entry split its square on $|X_{n,k}|\le\varepsilon$ and its complement. The first integral is at most $\varepsilon^2\mathbb P(|X_{n,k}|\le\varepsilon)\le\varepsilon^2$. The second is one nonnegative term of $L_n(\varepsilon)$. Centering identifies variance with second moment, hence $0\le\max_k\operatorname{Var}(X_{n,k})\le\varepsilon^2+L_n(\varepsilon)$. The maximum exists because the row is finite and nonempty. [F1, F2, F3]

2.1 For any $\eta>0$, take $0<\varepsilon<\sqrt{\eta/2}$. Lindeberg gives an index after which $L_n(\varepsilon)<\eta/2$. The preceding bound is then less than eta, proving convergence to zero. Values at the cutoff stay in the small part, zero entries satisfy the bound, and a single variance-one summand in every row would contradict this conclusion and hence could not satisfy Lindeberg. The proof uses only given finite rows and explicit inequalities, not independence or choice. [step 1.1, F1] ∎

