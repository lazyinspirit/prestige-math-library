---
id: ex-dyadic-simple-approximations-to-x-squared-on-zero-two
kind: example
title: "The dyadic simple approximants for $x^2$ on $[0,2]$ at $k=1$ and $k=2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Theorem 2.89"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

For $f(x)=x^2$ on $[0,2]$, the explicit dyadic truncations are:

$$s_1(x)=\begin{cases} 0,&0 \le x < 1/\sqrt2,\\ 1/2,&1/\sqrt2 \le x < 1,\\ 1,&1 \le x \le 2, \end{cases}$$

and

$$s_2(x)=\begin{cases} 0,&0 \le x < 1/2,\\ 1/4,&1/2 \le x < \sqrt2/2,\\ 1/2,&\sqrt2/2 \le x < \sqrt3/2,\\ 3/4,&\sqrt3/2 \le x < 1,\\ 1,&1 \le x < \sqrt5/2,\\ 5/4,&\sqrt5/2 \le x < \sqrt6/2,\\ 3/2,&\sqrt6/2 \le x < \sqrt7/2,\\ 7/4,&\sqrt7/2 \le x < \sqrt2,\\ 2,&\sqrt2 \le x \le 2. \end{cases}$$

## Facts & Assumptions

**Given:** The nonnegative measurable function $f(x)=x^2$ on $[0,2]$ and the explicit dyadic truncations from the simple-approximation theorem.

[L1] For a nonnegative measurable function, the approximants are

$$s_k = \sum_{j<k2^k} j2^{-k}\,\mathbf{1}_{\{j2^{-k} \le f < (j+1)2^{-k}\}} + k\,\mathbf{1}_{\{f \ge k\}}.$$

([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

## Verification

**Proof technique:** direct.

1.1 For $k=1$, the two dyadic cells are [L1, algebra] $0 \le x^2 < 1/2$ and $1/2 \le x^2 < 1$, while the truncation cell is $x^2 \ge 1$. On $[0,2]$ these become exactly the three intervals displayed in the first formula. [L1, algebra]

2.1 For $k=2$, the eight nontrivial dyadic cells are [step 1.1, L1, algebra] $j/4 \le x^2 < (j+1)/4$ for $j=0,\dots,7$, together with the truncation cell $x^2 \ge 2$. On $[0,2]$ these become $[0,1/2)$, $[1/2,\sqrt2/2)$, $[\sqrt2/2,\sqrt3/2)$, $[\sqrt3/2,1)$, $[1,\sqrt5/2)$, $[\sqrt5/2,\sqrt6/2)$, $[\sqrt6/2,\sqrt7/2)$, $[\sqrt7/2,\sqrt2)$, and $[\sqrt2,2]$, exactly as displayed. [step 1.1, L1, algebra] ∎
