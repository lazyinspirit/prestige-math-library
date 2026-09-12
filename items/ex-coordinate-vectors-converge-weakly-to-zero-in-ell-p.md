---
id: "ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p"
kind: "example"
title: "Coordinate vectors converge weakly to zero in ell p"
deps: ["def-conjugate-exponents", "rem-ell-p-is-l-p-of-counting-measure", "thm-holder-finite-real-exponents", "thm-real-power-laws", "lem-complex-conjugation-and-modulus-laws", "def-weak-convergence-of-nets-and-sequences"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In real or complex $\ell^p$, $1<p<\infty$, the coordinate vectors $e_n$ converge weakly to zero, although $\|e_n\|_p=1$.

## Facts & Assumptions

[F1] Put $q=p/(p-1)$, so $1/p+1/q=1$ ([[def-conjugate-exponents]]). The sequence norm is $\|x\|_p=(\sum_k|x_k|^p)^{1/p}$ ([[rem-ell-p-is-l-p-of-counting-measure]]); for complex sequences apply this to their real nonnegative moduli.

[F2] Positive real powers obey exponent laws ([[thm-real-power-laws]]), and finite Hölder applies to nonnegative real moduli ([[thm-holder-finite-real-exponents]]). For a nonzero complex $b$, $b\overline b=|b|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] Weak convergence tests every bounded scalar-linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

## Verification

**Given:** $1<p<\infty$ and a bounded scalar-linear $F$ on $\ell^p$.

1.1 Put $b_k=F(e_k)$. For a finite initial segment let $v_k=\overline b_k|b_k|^{q-2}$ if $b_k\ne0$, and $v_k=0$ if $b_k=0$; set other coordinates zero. For real scalars conjugation fixes $b_k$. Then $b_kv_k=|b_k|^q$ and $|v_k|^p=|b_k|^{(q-1)p}=|b_k|^q$. If $A_N=\sum_{k<N}|b_k|^q$, linearity and boundedness give $A_N=F(v)\le\|F\|A_N^{1/p}$. If $A_N=0$ there is nothing to divide; otherwise $A_N^{1/q}\le\|F\|$. [given, F1, F2, algebra]

2.1 The nondecreasing partial sums $A_N$ are bounded by $\|F\|^q$, so their nonnegative series converges and $b_k\to0$. Indeed infinitely many $|b_k|\ge\varepsilon>0$ would make arbitrarily large finite sums exceed that bound. For completeness finite Hölder bounds $\sum_{k<N}|x_kb_k|\le\|x\|_p\|b\|_q$, so the coefficient pairing is absolutely convergent, consistently over both fields. In particular $F(e_n)=b_n\to0$ for every $F$, giving weak convergence. Directly $\|e_n\|_p=(1^p)^{1/p}=1$, so there is no norm convergence to zero. $\square$ [step 1.1, F1, F2, F3]
