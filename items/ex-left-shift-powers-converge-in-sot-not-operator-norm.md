---
id: "ex-left-shift-powers-converge-in-sot-not-operator-norm"
kind: "example"
title: "Left shift powers converge in sot not operator norm"
deps: ["def-strong-and-weak-operator-topologies", "def-operator-norm"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

On real or complex $\ell^2$ indexed by $k\ge0$, let $L(x_0,x_1,\ldots)=(x_1,x_2,\ldots)$. Then $L^n\to0$ in SOT, while $\|L^n\|=1$ for every $n\ge0$.

## Facts & Assumptions

[F1] SOT is convergence in norm on each fixed vector ([[def-strong-and-weak-operator-topologies]]).

[F2] The operator norm is the supremum of image norms on the unit ball ([[def-operator-norm]]).

## Verification

**Given:** $\ell^2=\{x:\sum_{k\ge0}|x_k|^2<\infty\}$ with square-sum norm and the left shift $L$.

1.1 The shift and its powers are scalar-linear and $\|L^nx\|_2^2=\sum_{k\ge0}|x_{k+n}|^2=\sum_{j\ge n}|x_j|^2\le\|x\|_2^2$. These tails tend to zero for every fixed $x$ by convergence of its nonnegative series. Therefore each $L^n$ is bounded and $L^n\to0$ in SOT. [given, F1]

2.1 Step 1.1 gives $\|L^n\|\le1$. But $L^ne_n=e_0$ and both coordinate vectors have norm one, so F2 gives $\|L^n\|\ge1$. Thus the operator norms remain exactly one and cannot converge to zero. The witness varies with $n$, which is compatible with convergence on every fixed vector. $\square$ [step 1.1, F2]
