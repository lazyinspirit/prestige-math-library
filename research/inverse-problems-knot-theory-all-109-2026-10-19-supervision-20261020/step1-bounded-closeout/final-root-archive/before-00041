---
id: cex-ip-oscillatory-sequence-unbounded-tv
kind: counterexample
title: An oscillatory L1-bounded sequence with unbounded spatial TV
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement refuted

Assume Countable Choice. The assertion that every sequence $(u_N)_{N\ge1}$ in $BV((0,1))$ with bounded $L^1(0,1)$ norms has uniformly bounded total variations is false. For $k\ge1$ let $I_k=(2^{-(k+1)},2^{-k})$ and define $u_N:=\sum_{k=1}^N(-1)^k\chi_{I_k}$. Then $\|u_N\|_{L^1(0,1)}=\sum_{k=1}^N|I_k|<1/2$, while the adjacent jumps have total magnitude $2N$.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The definitions of spatial BV and total variation.]]

[[lem-ip-bv-test-field-characterization-and-lsc|Finite-test-field characterization of total variation detects the growing jump variation.]]

## Facts & Assumptions

**Given:** Countable Choice, the interval $\Omega=(0,1)$, and the sequence of step functions $u_N$ defined above.

[A1] Countable Choice is used to identify interval Lebesgue integrals with their Riemann values and to use countably additive Lebesgue measure. ([[def-countable-choice]])

[F1] Distributional derivatives use the negative-transpose test convention, and BV total variation is the mass of the derivative measure. ([[def-ip-spatial-bv-and-distributional-tv]])

[F2] For BV functions, total variation is the supremum over compactly supported smooth unit-bounded scalar test fields in one dimension; this clause is choice-free. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F3] Smooth cutoffs supported in small intervals can be chosen equal to one at a prescribed interior point. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F4] Under Countable Choice, Lebesgue measure of a bounded interval is its length. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]])

[F5] A bounded Riemann-integrable function on a compact interval has the same Lebesgue and Riemann integrals. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F6] The integral of a continuous derivative over an interval is the endpoint difference. ([[thm-continuous-implies-integrable]], [[thm-ftc-second-part]])

## Counterexample

**Given:** The step functions $u_N$ and their pointwise limit $u$ on $(0,1)$.

1.1 The intervals are disjoint and have Lebesgue measure $2^{-(k+1)}$ by [F4], so $\|u_N\|_1=\sum_{k=1}^N2^{-(k+1)}<1/2$. Integration by parts on each interval, justified by [F5] and [F6], shows that $Du_N$ is an atomic signed measure: its jump at $1/2$ has magnitude $1$, its $N-1$ interior jumps at $2^{-2},\ldots,2^{-N}$ have magnitude $2$, and its jump at $2^{-(N+1)}$ has magnitude $1$. These are all jumps in $(0,1)$, so $u_N\in BV((0,1))$ and $TV(u_N;(0,1))=1+2(N-1)+1=2N$. [A1, F1, F4, F5, F6, given, algebra]

2.1 The sequence converges in $L^1$ to $u=(-1)^k$ on each $I_k$ and $u=0$ on $(1/2,1)$, since $|u_N-u|\le1$ and its support lies in $(0,2^{-(N+1)})$, whose measure tends to zero by [F4]. For each $M$, choose disjoint small intervals around $x_j=2^{-j}$, $1\le j\le M$, avoiding every other dyadic jump, and smooth bumps equal to one at these points, with signs chosen opposite to the jumps of $u$. Their sum is a compactly supported smooth test function $\phi_M$ with $|\phi_M|\le1$. Its support is bounded away from zero, so only finitely many intervals $I_k$ meet it; integration by parts on those intervals, using [F5] and [F6], gives $$\int_0^1u\,\phi_M'\,dx=1+2(M-1)=2M-1.$$ Thus the test-field supremum for $u$ is infinite. If $u$ were in $BV((0,1))$, [F2] would make that supremum equal its finite total variation, a contradiction. This proves the refuted assertion fails despite the uniform $L^1$ bound. [A1, F2, F3, F4, F5, F6, step 1.1, given, construct] ∎
