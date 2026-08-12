---
id: ex-gregory-leibniz-partial-sums-with-certified-error
kind: example
title: "Gregory-Leibniz partial sums bracket pi with an explicit remainder bound"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 11.4.11"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Example

Set

$$S_N:=\sum_{k=0}^{N}\frac{(-1)^k}{2k+1}.$$

Then $4S_N$ is an upper bound for $\pi$ when $N$ is even, a lower bound when $N$ is odd, and in every case

$$\left|\pi-4S_N\right|\leq\frac4{2N+3}.$$

## Facts & Assumptions
**Given:** A natural number $N$ and the partial sum $S_N$.

[L1] The finite-remainder identity gives $$\frac\pi4=S_N+(-1)^{N+1}\int_0^1\frac{t^{2N+2}}{1+t^2}\,dt,$$ where the integral is nonnegative and at most $1/(2N+3)$ ([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).



## Verification

**Proof technique:** direct.

1.1 Multiplying [L1] by $4$ gives $|\pi-4S_N|\leq4/(2N+3)$. [L1, algebra]

1.2 If $N$ is even, the remainder in [L1] has negative sign, so $\pi\leq4S_N$; if $N$ is odd, it has positive sign, so $4S_N\leq\pi$. [L1, cases]

1.3 Direct summation gives $$S_0=1,\qquad S_1=\frac23,\qquad S_2=\frac{13}{15},\qquad S_3=\frac{76}{105}.$$ [given, algebra]

2.1 Hence the first certified brackets include $$\frac83<\frac{304}{105}\leq\pi\leq\frac{52}{15}<4,$$ with the weak inequalities adjacent to $\pi$ supplied by step 1.2. [step 1.2, step 1.3, algebra]

3.1 The error bound decreases only on the scale $1/N$, so the certification also records the slow convergence of these partial sums. [step 1.1, algebra] ∎
