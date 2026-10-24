---
id: thm-lindeberg-feller-central-limit-theorem-sufficiency
kind: theorem
title: 'Lindeberg-Feller central limit theorem: sufficiency'
deps: ["def-total-row-variance-and-lindeberg-condition", "lem-second-order-characteristic-function-expansion", "lem-lindeberg-condition-implies-feller-negligibility", "lem-product-of-near-one-characteristic-factors", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "lem-characteristic-function-of-a-normal-law", "cor-characteristic-function-criterion-for-weak-convergence", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "def-axiom-of-choice"]
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
    - title: 'Durrett, Probability: Theory and Examples, Theorem 3.4.10'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Theorem 27.2
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. If a centered row-wise independent triangular array has finite second moments, $s_n>0$ and the Lindeberg condition, then $$s_n^{-1}\sum_{k=1}^{k_n}X_{n,k}\Rightarrow N(0,1).$$

## Facts & Assumptions

[F1] Normalization makes total variance one and preserves the Lindeberg quantity. [[def-total-row-variance-and-lindeberg-condition]].

[F2] The scalar remainder obeys min(|u|^3/3,4u^2), and the centered exponential increment is bounded by u^2. [[lem-second-order-characteristic-function-expansion]].

[F3] Lindeberg implies maximal entry variance tends to zero. [[lem-lindeberg-condition-implies-feller-negligibility]].

[F4] The near-one product estimate controls the full growing row. [[lem-product-of-near-one-characteristic-factors]].

[F5] Finite row independence identifies the product transform. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F6] The standard-normal transform is exp(-t^2/2). [[lem-characteristic-function-of-a-normal-law]].

[F7] Under AC pointwise convergence to a specified characteristic function implies weak convergence. [[cor-characteristic-function-criterion-for-weak-convergence]].

[F8] Finite sums and centered integrable terms may be integrated linearly. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F9] The modulus of a complex integral is bounded by the integral of the modulus. [[thm-integral-triangle-inequality]].

## Proof

**Given:** Assume AC. If a centered row-wise independent triangular array has finite second moments, $s_n>0$ and the Lindeberg condition, then $$s_n^{-1}\sum_{k=1}^{k_n}X_{n,k}\Rightarrow N(0,1).$$

1.1 Put $Y_{n,k}=X_{n,k}/s_n$ and $v_{n,k}=\mathbb EY_{n,k}^2$. By [F1], the normalized row has total variance one, remains centered and independent, and its tail sum $L_n(\varepsilon)$ tends to zero. Fix real t and write $w_{n,k}=\varphi_{Y_{n,k}}(t)-1$. The centering and scalar bound in [F2] give $|w_{n,k}|=|\mathbb E(e^{itY_{n,k}}-1-itY_{n,k})|\le t^2v_{n,k}$, using [F8]–[F9]. Consequently $\sum_k|w_{n,k}|\le t^2$, $\max_k|w_{n,k}|\le t^2\max_kv_{n,k}\to0$, and $\sum_k|w_{n,k}|^2\le t^4\max_kv_{n,k}\to0$ by [F3]. [F1, F2, F3, F8, F9]

2.1 With r as in [F2], linearity gives $\sum_k w_{n,k}=-t^2/2+\sum_k\mathbb E r(tY_{n,k})$. On $|Y_{n,k}|\le\varepsilon$ the cubic bound gives $|r(tY_{n,k})|\le |t|^3\varepsilon Y_{n,k}^2/3$; on the complement the quadratic bound gives $|r(tY_{n,k})|\le4t^2Y_{n,k}^2$. Therefore $|\sum_k\mathbb E r(tY_{n,k})|\le |t|^3\varepsilon/3+4t^2L_n(\varepsilon)$. First take limsup in n, then let the arbitrary positive epsilon decrease to zero. This proves $\sum_k w_{n,k}\to-t^2/2$, without interchanging an unbounded number of unquantified little-o terms. [step 1.1, F2, F8, F9]

3.1 All hypotheses of [F4] were verified in step 1.1, so $\prod_k(1+w_{n,k})-\exp(\sum_k w_{n,k})\to0$. Step 2.1 makes its limit $e^{-t^2/2}$. By [F5] this product is the row-sum transform, and by [F6] its limit is the transform of N(0,1), continuous at zero. [F7] proves the result. At t=0 all factors and the limit are exactly one. AC is inherited in [F6]–[F7]; rows on different probability spaces cause no difficulty because only their laws are compared. [step 1.1, step 2.1, F4, F5, F6, F7] ∎

