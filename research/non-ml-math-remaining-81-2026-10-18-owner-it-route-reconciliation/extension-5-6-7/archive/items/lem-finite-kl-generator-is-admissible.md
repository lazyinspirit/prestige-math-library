---
id: lem-finite-kl-generator-is-admissible
kind: lemma
title: The finite KL generator has the required convex boundary extension
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - cor-second-derivative-characterises-convexity
  - thm-logarithm-slower-than-every-positive-power
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, equations (43)–(45)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Statement

For $f(t)=t\log t$ on $t>0$, one has $f(1)=0$, $f$ is convex on
$(0,\infty)$, $\lim_{t\downarrow0}f(t)=0$, and
$\lim_{t\to\infty}f(t)/t=+\infty$.

## Facts & Assumptions

**Given:** The function $f:(0,\infty)\to\mathbb R$ defined by
$f(t)=t\log t$.

[F1] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]:
$\log$ is defined on $(0,\infty)$, is strictly increasing and onto
$\mathbb R$, satisfies $\log1=0$, and $\log(1/t)=-\log t$.

[F2] [[thm-logarithm-derivative-and-integral]] and
[[thm-algebra-of-derivatives]]: $\log'(t)=1/t$, and the product rule holds.

[F3] [[cor-second-derivative-characterises-convexity]] and
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a twice
differentiable function on an open interval is convex when its second
derivative is nonnegative there.

[F4] [[thm-logarithm-slower-than-every-positive-power]]:
$\log s/s\to0$ as $s\to+\infty$.

## Proof

1.1 By [F1], $f(1)=\log1=0$. By [F2], $f'(t)=\log t+1$ and
$f''(t)=1/t>0$ for every $t>0$. Thus [F3] gives convexity on
$(0,\infty)$. [F1, F2, F3, given, algebra]

2.1 Put $s=1/t$. As $t\downarrow0$, $s\to+\infty$ and [F1] gives
$t\log t=-\log(s)/s$. Its limit is zero by [F4], so
$\lim_{t\downarrow0}f(t)=0$. [F1, F4, given, algebra]

3.1 For $t>0$, $f(t)/t=\log t$. Since $\log$ is increasing and onto
$\mathbb R$ by [F1], for each real $M$ there exists $a>0$ with
$\log a>M$, and every $t>a$ has $\log t\ge\log a>M$. Thus
$\lim_{t\to\infty}f(t)/t=+\infty$. [F1, given, choose, algebra] ∎
