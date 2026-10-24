---
id: "ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star"
kind: "example"
title: "Coordinate evaluations converge weak star to zero in ell one star"
deps: ["thm-complex-dual-of-ell-one-is-ell-infinity", "rem-ell-p-is-l-p-of-counting-measure", "def-weak-star-convergence"]
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

For real or complex scalars, the coordinate functionals $E_n(x)=x_n$ on $\ell^1$ are weak-star null and satisfy $\|E_n\|=1$. Under $(\ell^1)^*=\ell^\infty$, these are the coordinate unit sequences.

## Facts & Assumptions

[F1] The complex identification is the bilinear isometry $b\mapsto(x\mapsto\sum_kb_kx_k)$ ([[thm-complex-dual-of-ell-one-is-ell-infinity]]).

[F2] The sequence norm is $\sum_k|x_k|$ ([[rem-ell-p-is-l-p-of-counting-measure]]).

[F3] Weak-star convergence means convergence on each fixed primal vector ([[def-weak-star-convergence]]).

## Verification

**Given:** the coordinate functionals on real or complex $\ell^1$.

1.1 The complex coefficient identification is F1. For real scalars, a bounded sequence $b$ defines $h_b(x)=\sum_kb_kx_k$ with $|h_b(x)|\le\|b\|_\infty\|x\|_1$. Conversely if $h$ is bounded, $b_k=h(e_k)$ satisfies $|b_k|\le\|h\|$; finite truncations of $x$ converge in norm because their error is the absolute series tail, so $h(x)=\sum_kb_kx_k$. Testing $e_k$ gives $\|h_b\|\ge\sup_k|b_k|$, proving isometry and uniqueness. Thus the identification holds over either field. [given, F1, F2]

2.1 For every $x\in\ell^1$, convergence of $\sum_k|x_k|$ forces $x_n\to0$. Hence $E_n(x)\to0$ for each fixed $x$, proving weak-star convergence. The inequality $|E_n(x)|\le\|x\|_1$ and equality $E_n(e_n)=1$ give $\|E_n\|=1$ exactly. $\square$ [step 1.1, F2, F3]
