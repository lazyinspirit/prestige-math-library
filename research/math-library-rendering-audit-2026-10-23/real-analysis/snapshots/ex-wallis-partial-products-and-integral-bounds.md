---
id: ex-wallis-partial-products-and-integral-bounds
kind: example
title: "Wallis partial products are trapped by adjacent sine-power integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-wallis-integrals-recurrence-and-squeeze, thm-wallis-product-for-pi]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Imperial College London, History of Mathematics, Problems VI solutions"
      url: "https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf"
pipeline_run: null
---

## Example

For $m\geq1$, let

$$W_m:=\prod_{k=1}^{m}\frac{4k^2}{4k^2-1}.$$

The first three products are

$$W_1=\frac43,\qquad W_2=\frac{64}{45},\qquad W_3=\frac{256}{175}.$$

## Facts & Assumptions
**Given:** A positive natural number $m$ and $I_n:=\int_0^{\pi/2}\sin^n x\,dx$.

[L1] The Wallis integrals satisfy $$I_{2m+1}\leq I_{2m}\leq I_{2m-1},$$ $$I_{2m}=\frac\pi2\prod_{k=1}^{m}\frac{2k-1}{2k},\qquad I_{2m+1}=\prod_{k=1}^{m}\frac{2k}{2k+1}$$ ([[lem-wallis-integrals-recurrence-and-squeeze]]).

[L2] The products $W_m$ converge to $\pi/2$ ([[thm-wallis-product-for-pi]]).



## Verification

**Proof technique:** direct.

1.1 Dividing $I_{2m+1}\leq I_{2m}$ in [L1] by the positive odd-over-even product gives $W_m\leq\pi/2$. [given, L1, algebra]

1.2 Using the formula for $I_{2m-1}$ obtained from [L1] with $m-1$, the other inequality $I_{2m}\leq I_{2m-1}$ gives $$\frac\pi2\frac{2m}{2m+1}\leq W_m.$$ [given, L1, algebra]

2.1 Thus $$\frac\pi2\frac{2m}{2m+1}\leq W_m\leq\frac\pi2,$$ which is the exact finite trap coming from the adjacent integrals. [step 1.1, step 1.2]

3.1 Multiplication gives the three displayed values; for $m=1,2,3$, step 2.1 respectively places them in $$\frac\pi3\leq\frac43\leq\frac\pi2,\qquad \frac{2\pi}{5}\leq\frac{64}{45}\leq\frac\pi2,\qquad \frac{3\pi}{7}\leq\frac{256}{175}\leq\frac\pi2.$$ [step 2.1, algebra]

4.1 The exact bounds in step 2.1 certify every finite product without decimal approximations, while [L2] supplies their limit $\pi/2$. [step 2.1, L2] ∎
