---
id: "ex-right-shift-powers-converge-in-wot-not-sot"
kind: "example"
title: "Right shift powers converge in wot not sot"
deps: ["def-strong-and-weak-operator-topologies", "rem-ell-p-is-l-p-of-counting-measure", "thm-cauchy-schwarz-finite", "lem-complex-conjugation-and-modulus-laws"]
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

On real or complex $\ell^2$ indexed by $k\ge0$, let $R(x_0,x_1,\ldots)=(0,x_0,x_1,\ldots)$. Then $R^n\to0$ in WOT but not in SOT.

## Facts & Assumptions

[F1] SOT tests pointwise norm convergence; WOT tests each bounded scalar functional on each fixed vector ([[def-strong-and-weak-operator-topologies]]).

[F2] Sequence norms use square sums ([[rem-ell-p-is-l-p-of-counting-measure]]). Finite real Cauchy–Schwarz bounds sums of products of nonnegative coordinate moduli ([[thm-cauchy-schwarz-finite]]).

[F3] Conjugation satisfies $b\overline b=|b|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Given:** the right shift $R$ and a bounded scalar-linear $F$ on $\ell^2$.

1.1 Put $b_k=F(e_k)$ and test $F$ on $v=\sum_{k<N}\overline b_ke_k$. By F3, $B_N=F(v)=\sum_{k<N}|b_k|^2\le\|F\|\sqrt{B_N}$, giving $B_N\le\|F\|^2$, also when $B_N=0$. Thus $b\in\ell^2$. Truncations converge in the square-sum norm, so $F(x)=\lim_N\sum_{k<N}x_kb_k=\sum_kx_kb_k$, with absolute convergence: F2 bounds every finite sum $\sum_{k<N}|x_kb_k|$ by $\|x\|_2\|b\|_2$, and the nonnegative partial sums converge to their finite supremum. The same finite inequality applied to tails gives the infinite tail bound used below. [given, F2, F3]

2.1 Consequently $F(R^nx)=\sum_{k\ge0}x_kb_{k+n}$ and $|F(R^nx)|\le\|x\|_2(\sum_{j\ge n}|b_j|^2)^{1/2}\to0$. This proves WOT convergence. But $\|R^nx\|_2^2=\sum_k|x_k|^2=\|x\|_2^2$, so at $x=e_0$ the norms remain one. Thus SOT convergence to zero fails. $\square$ [step 1.1, F1, F2]
