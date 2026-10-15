---
id: ex-dot-product-roundoff-and-conditioning
kind: example
title: "Dot-product cancellation under normal-range rounding"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-statistical-and-computational-error-ledger
  - thm-pathwise-error-ledger-decomposition
  - def-standard-relative-floating-point-model-and-unit-roundoff
  - thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems, lecture of 2025-09-10, full lecture"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
---

## Example

In radix-two binary64 arithmetic with precision $53$ and round-to-nearest, ties-to-even, compute the left-to-right dot product of $x=(10^{16},1,-9999999999999998)$ and $y=(1,1,1)$. The unit roundoff is $u=2^{-53}$. All three products and all intermediate sums are in the normal range. Define the dot-product condition ratio for this nonzero exact result by
$$
\kappa:=\frac{\sum_{j=1}^{3}|x_jy_j|}{|x\cdot y|}.
$$
This example checks an absolute roundoff bound and illustrates why a bound small relative to the sum of term magnitudes need not mean small relative error in the result when cancellation makes $\kappa$ large.

## Facts & Assumptions

**Given:** The vectors, binary64 round-to-nearest ties-to-even arithmetic, unit roundoff $u=2^{-53}$, and the left-to-right evaluation order. Check the exact result, computed result, normal-range hypotheses, and gamma bound.

[F1] If $nu<1$ and products and intermediate sums lie in the normal range, the computed left-to-right dot product satisfies $|\operatorname{fl}(x\cdot y)-x\cdot y|\le\gamma_n\sum_j|x_jy_j|$, where $\gamma_n=nu/(1-nu)$. ([[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]])

[F2] The floating-point model uses relative error at most $u$ only on its stated normal-range operation domain; exact zero is handled separately. ([[def-standard-relative-floating-point-model-and-unit-roundoff]])

[F3] The final numerical error is $e_{\mathrm{fp}}=\widetilde r-r_m$ for the error ledger. ([[def-statistical-and-computational-error-ledger]])

[F4] The total error along a finite scalar reference chain is the sum of its signed adjacent-stage errors. ([[thm-pathwise-error-ledger-decomposition]])

[A1] In the binade $[2^{53},2^{54})$, a radix-two format with precision $53$ has spacing $2$. Since $2^{53}<10^{16}<2^{54}$, $10^{16}$ and $10^{16}+2$ are adjacent representable values. The lower significand is $10^{16}/2=5000000000000000$, an even integer, whereas the upper significand is odd; therefore the exact midpoint $10^{16}+1$ rounds to $10^{16}$ under ties-to-even.

## Verification

1.1 The exact dot product is $10^{16}+1-(10^{16}-2)=3$, and each product by a component of $y$ is exact. [given, algebra]

1.2 By [A1], the first rounded partial sum is $\operatorname{fl}(10^{16}+1)=10^{16}$; the next exact sum is $10^{16}-(10^{16}-2)=2$, which is represented exactly. The exact intermediate sums are $10^{16}+1$ and $2$, and the rounded partial sums are $10^{16}$ and $2$. Together with the exact products of magnitudes $10^{16},1,10^{16}-2$, all lie between the binary64 smallest and largest normal magnitudes stated in [F2]. [given, A1, F2, algebra]

2.1 Here $3u<1$, $\gamma_3=3/(2^{53}-3)$, and $\sum_j|x_jy_j|=19999999999999999$. The bound is $3(19999999999999999)/(2^{53}-3)>1$, since its numerator exceeds its denominator; this is consistent with the computed error $|2-3|=1$. [given, F1, step 1.1, step 1.2, algebra]

3.1 The condition ratio is $19999999999999999/3$, while the relative forward error is $1/3$. In the ledger take $m=0$, $\theta=3$, and $\widetilde r=2$; [F3] gives the sole error $e_{\mathrm{fp}}=-1$, and [F4] identifies it with the total error. No sampling or simulation stage occurs. [F3, F4, step 1.1, step 1.2, algebra] ∎
