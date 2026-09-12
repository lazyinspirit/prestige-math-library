---
id: thm-lindeberg-levy-iid-central-limit-theorem
kind: theorem
title: Lindeberg-Levy iid central limit theorem
deps: ["lem-second-order-characteristic-function-expansion", "lem-product-of-near-one-characteristic-factors", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "lem-characteristic-function-of-a-normal-law", "cor-characteristic-function-criterion-for-weak-convergence", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-identically-distributed-and-iid-random-variables", "def-partial-sums-and-sample-means", "def-moments-variance-and-covariance", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Theorem 3.4.1'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Theorem 5.2
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Let $(X_k)_{k\ge1}$ be iid real random variables with mean $m$ and variance $0<\sigma^2<\infty$. Then $$\frac{\sum_{k=1}^nX_k-nm}{\sigma\sqrt n}\ \Rightarrow\ N(0,1).$$

## Facts & Assumptions

[F1] Centered variance-one variables have characteristic function 1-t^2/2+o(t^2). [[lem-second-order-characteristic-function-expansion]].

[F2] Near-one rows with bounded absolute sum and vanishing square sum admit exponential comparison. [[lem-product-of-near-one-characteristic-factors]].

[F3] Affine transformations and finite independent sums have the stated transform identities. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F4] Under AC the standard normal has transform exp(-t^2/2). [[lem-characteristic-function-of-a-normal-law]].

[F5] Under AC convergence to the transform of a specified law gives weak convergence. [[cor-characteristic-function-criterion-for-weak-convergence]].

[F6] Linearity permits centering and variance calculations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** Assume AC. Let $(X_k)_{k\ge1}$ be iid real random variables with mean $m$ and variance $0<\sigma^2<\infty$. Then $$\frac{\sum_{k=1}^nX_k-nm}{\sigma\sqrt n}\ \Rightarrow\ N(0,1).$$

1.1 Set $Y_k=(X_k-m)/\sigma$. The affine functions are Borel; independence is preserved because an event concerning Y_k is the corresponding inverse-image event concerning X_k. Their laws agree, and linearity gives $\mathbb EY_k=0$, $\mathbb EY_k^2=1$. The normalized sum in the statement is $n^{-1/2}\sum_{k=1}^nY_k$. The positive finite variance makes every division well defined. [F6, given]

2.1 Fix a nonzero real t and write $w_n=\varphi_{Y_1}(t/\sqrt n)-1$. By [F1], $nw_n\to-t^2/2$. Therefore $w_n\to0$, $n|w_n|$ is bounded, and $n|w_n|^2=(n|w_n|)|w_n|\to0$. The bounds extend to the finitely many early n since their values are finite. Apply [F2] to the row with n copies of $1+w_n$. Its product differs from $e^{nw_n}$ by a quantity tending to zero. Continuity of the exponential yields the limit $e^{-t^2/2}$. At t=0 each factor is exactly one. [step 1.1, F1, F2]

3.1 By [F3], row independence identifies that product with the characteristic function of the normalized sum. By [F4] its limit is the standard-normal transform, continuous at zero and equal to one there. Thus [F5] proves the claimed convergence of laws. AC is inherited only through the normal-law and Levy-criterion suppliers; the iid sequence is given and no new copies are constructed. This theorem excludes sigma=0 because its displayed normalization divides by sigma. [step 2.1, F3, F4, F5] ∎

