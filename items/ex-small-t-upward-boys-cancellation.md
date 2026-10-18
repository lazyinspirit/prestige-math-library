---
id: ex-small-t-upward-boys-cancellation
kind: example
title: Small-argument cancellation in the upward Boys recurrence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [alg-certified-boys-finite-budget-branch-evaluation, thm-boys-branch-evaluation-enclosures-are-sound, lem-boys-small-taylor-remainder, lem-boys-upward-downward-recurrence-error-amplification, def-real-exponential-function-and-e, thm-boys-integral-identities-series-and-incomplete-gamma]
proof_strategy: direct
axiom_use: None. This is a scalar recurrence and power-series estimate.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; the upward recurrence and its small-$T$ numerical warning are on p. 20."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18, recurrence directions and small-$T$ loss warning."
---

## Example

For $0<T\le\tfrac14$, the upward formula for the first two Boys orders is
$$F_1(T)=\frac{F_0(T)-e^{-T}}{2T}.$$
Both subtracted quantities are close to one, while their difference is of order $T$. If the input intervals for them have radii $r_0,r_e$, the exact upward affine image has radius $(r_0+r_e)/(2T)$. If its endpoints are converted outward once with finite errors $\delta_-,\delta_+$, the stored radius is $(r_0+r_e)/(2T)+(\delta_-+\delta_+)/2$. Rounding at intermediate nodes requires propagating their contributions as well. Thus fixed input radii can be strongly amplified as $T\downarrow0$. The direct Taylor branch has the certified remainder $T^2/10$ for $F_0$ after its linear term, so it avoids this division by a small $T$.

## Facts & Assumptions

**Given:** $0<T\le1/4$, the Boys integral and recurrence, and finite certified intervals for $F_0(T)$ and $e^{-T}$.

[F1] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F_1=(F_0-e^{-T})/(2T)$ and $F_0(T)=1-T/3+\cdots$.

[F2] [[def-real-exponential-function-and-e]]: $e^{-T}=\sum_{k=0}^\infty(-T)^k/k!$.

[F3] [[lem-boys-small-taylor-remainder]]: after $1-T/3$, the $F_0$ remainder has absolute value at most $T^2/10$ for $T\le1$.

[F4] [[lem-boys-upward-downward-recurrence-error-amplification]]: the exact upward image has radius $(r_0+r_e)/(2T)$; one finite outward conversion of each full-image endpoint adds the mean endpoint error. Intermediate-node errors must instead be propagated through all subsequent affine coefficients.

[F5] [[thm-boys-branch-evaluation-enclosures-are-sound]] and [[alg-certified-boys-finite-budget-branch-evaluation]]: the evaluator offers a small-$T$ Taylor enclosure and makes no success claim when a finite recurrence candidate misses tolerance.

## Verification

1.1 The exact identity in [F1] divides a difference of two terms. By [F1] and [F3], $F_0(T)=1-T/3+R_F$ with $|R_F|\le T^2/10$. By [F2], $e^{-T}=1-T+R_e$ with $|R_e|\le T^2$ for $T\le1$: for $k\ge2$, $k!\ge2^{k-1}$, so $\sum_{k\ge2}1/k!\le\sum_{k\ge2}2^{1-k}=1$. Therefore $$\left|(F_0(T)-e^{-T})-\frac{2T}{3}\right|\le\frac{11}{10}T^2,$$ so for $T\le1/4$ the positive difference is at least $T/4$. The two terms being subtracted each tend to one as $T\downarrow0$. [given, F1, F2, F3, algebra]

2.1 Applying [F4] with $m=0$ gives a factor $1/(2T)$ on both seed radii, which diverges as $T\downarrow0$ for fixed nonzero radii. The stated stored-radius formula follows only for a full affine image with one finite conversion per endpoint; a primitive subtraction error must also be divided by $2T$ before adding the final division error. In contrast, [F3] gives a direct Taylor enclosure with error $T^2/10$. The algorithm [F5] can therefore select the direct small-argument branch and return only a certified interval; the example makes no claim that every requested tolerance succeeds under every finite cap. [given, F3, F4, F5, algebra] ∎
