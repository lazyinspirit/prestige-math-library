---
id: def-total-row-variance-and-lindeberg-condition
kind: definition
title: Total row variance and the Lindeberg condition
deps: ["def-row-wise-independent-centered-triangular-array", "def-moments-variance-and-covariance", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "thm-arithmetic-and-lattice-operations-preserve-measurability", "prop-order-and-scalar-rules-for-the-nonnegative-integral"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Theorem 3.4.10'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Section 27
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: published
origin: pipeline
---

## Definition

For a centered triangular array as in [[def-row-wise-independent-centered-triangular-array]], suppose every entry has finite second moment. Write $$v_{n,k}=\mathbb E_nX_{n,k}^2=\operatorname{Var}_n(X_{n,k}),\qquad s_n^2=\sum_{k=1}^{k_n}v_{n,k}.$$ Variance is defined in [[def-moments-variance-and-covariance]]. Every term is finite and nonnegative, so the finite sum and its nonnegative square root s_n exist. Whenever $s_n>0$, define $$L_n(\varepsilon)=s_n^{-2}\sum_{k=1}^{k_n}\mathbb E_n\!\left[X_{n,k}^2\mathbf1_{\{|X_{n,k}|>\varepsilon s_n\}}\right]\quad(\varepsilon>0).$$ The **Lindeberg condition** is $L_n(\varepsilon)\to0$ for every fixed $\varepsilon>0$, with $s_n>0$ for all n under consideration. The event is measurable because absolute value is continuous and the entries are measurable; products are measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]]. Its nonnegative integrand is bounded by $X_{n,k}^2$, so its expectation exists and is finite by [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. In particular $0\le L_n(\varepsilon)\le1$.

For $Y_{n,k}=X_{n,k}/s_n$, scalar homogeneity gives $\sum_k\mathbb E_nY_{n,k}^2=1$. The equality $|Y_{n,k}|>\varepsilon\Longleftrightarrow |X_{n,k}|>\varepsilon s_n$ gives $$L_n(\varepsilon)=\sum_k\mathbb E_n[Y_{n,k}^2\mathbf1_{\{|Y_{n,k}|>\varepsilon\}}].$$ Thus the normalized and unnormalized conditions are exactly equivalent, not merely asymptotic. The cutoff uses strict inequality; equality at the threshold is excluded. A zero-variance row is allowed in the initial variance definition, but its normalization and Lindeberg expression above are undefined. No independence or choice is needed to define these quantities.
