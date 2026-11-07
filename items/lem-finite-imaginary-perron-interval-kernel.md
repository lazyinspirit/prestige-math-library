---
dependency_level: 0
id: lem-finite-imaginary-perron-interval-kernel
kind: lemma
title: Finite imaginary Perron interval kernel, including endpoints
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- thm-integration-by-parts-with-interior-derivatives
- thm-newton-leibniz-with-interior-derivative
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

For real $0<A<B$, integer $n\ge1$, and $D\ge2$, put

$$J_D(n)=\frac1{2\pi}\int_{-D}^D\frac{(B/n)^{iu}-(A/n)^{iu}}{iu}\,du.$$

The apparent singularity at zero has its continuous value $\log(B/A)$. Write $b_D(v)=\min(1,(D|v|)^{-1})$ for $v\ne0$ and $b_D(0)=1$. Then

$$|1_{[A,B]}(n)-J_D(n)|\ll b_D(\log(n/A))+b_D(\log(n/B)).$$


If $A=X$, $B=3X$, $2\le D\le X$, and $n$ is restricted to $[X/4,4eX]$, the sum over those integers of the square of the displayed error bound is $O(X/D)$.

## Statement references

[[thm-integration-by-parts-with-interior-derivatives]]

[[thm-newton-leibniz-with-interior-derivative]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[thm-integration-by-parts-with-interior-derivatives]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-newton-leibniz-with-interior-derivative]] gives its stated result under its stated hypotheses.

## Proof

1.1 Symmetry gives $J_D(n)=\pi^{-1}\int_0^D(\sin(u\log(B/n))-\sin(u\log(A/n)))\,du/u$. For $v\ne0$, $\int_0^\infty\sin(uv)\,du/u=(\pi/2)\operatorname{sgn}(v)$, and the tail from $D$ has absolute value at most $2/(D|v|)$, by integration by parts. The full sine integral is proved directly by first inserting $e^{-\varepsilon u}$: differentiating in $v$ gives $\int_0^\infty e^{-\varepsilon u}\cos(uv)\,du=\varepsilon/(\varepsilon^2+v^2)$, as follows by integrating the exponential; its integral from $0$ to $v$ is $\arctan(v/\varepsilon)$. Exponential-tail estimates justify the finite differentiation. Integration by parts bounds the undamped oscillatory tail uniformly, which both proves convergence and shows its Abel limit equals the improper integral. Letting $\varepsilon\downarrow0$ gives the claimed value. Rescaling $uv$ also bounds all partial sine integrals absolutely, so the error is bounded by a constant even when $D|v|<1$. At $v=0$ the sine integral is zero, and the indicator differs from its half endpoint convention by at most $1/2$. Apply these bounds to the two terms. This proves the estimate for closed intervals and arbitrary real endpoints, without assuming that either endpoint misses an integer. [given, F1, F2, algebra]

2.1 If $A=X$, $B=3X$, $2\le D\le X$, and $n$ is restricted to $[X/4,4eX]$, the sum of squares of the right side is $O(X/D)$. Indeed $|\log(n/A)|\gg|n-A|/X$ on that fixed compact ratio range. There are $O(1+X/D)$ integers with $|n-A|\le X/D$, and grouping the remainder by integer distance, or comparing $\sum_{k>K}k^{-2}\le1/(K-1)$, bounds its contribution by $O(X/D)$. The same argument applies at $B$, and $(a+b)^2\le2a^2+2b^2$. [given, F1, F2, step 1.1, algebra] ∎
