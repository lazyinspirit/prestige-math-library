---
id: lem-finite-renyi-generators-are-convex
kind: lemma
title: The finite Rényi generators are convex with stated boundary values
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
  - cor-second-derivative-characterises-convexity
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-limits-and-range
  - cor-exponential-reciprocal-and-positivity
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
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1 and 7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-A"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Statement

For $\alpha>1$, the generator $h_\alpha(t)=t^\alpha-1$ is convex on
$(0,\infty)$, satisfies $h_\alpha(1)=0$, has
$h_\alpha(0+)=-1$, and has recession limit
$\lim_{t\to\infty}h_\alpha(t)/t=+\infty$. For $0<\alpha<1$, the generator
$g_\alpha(t)=1-t^\alpha$ is convex on $(0,\infty)$, satisfies
$g_\alpha(1)=0$, has $g_\alpha(0+)=1$, and has recession limit
$\lim_{t\to\infty}g_\alpha(t)/t=0$.

## Facts & Assumptions

**Given:** The positive-base power functions in the Statement and the
corresponding exponent range.

[F1] [[def-real-power]]: for $t>0$, $t^\gamma=\exp(\gamma\log t)$.

[F2] [[thm-real-power-continuity-and-derivatives]] and
[[thm-algebra-of-derivatives]]: $(t^\gamma)'=\gamma t^{\gamma-1}$ and
the derivative algebra rules hold for real $\gamma$.

[F3] [[cor-second-derivative-characterises-convexity]] and
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a twice
differentiable function on an open interval is convex when its second
derivative is nonnegative there.

[F4] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]:
$\log$ is an increasing surjection onto $\mathbb R$ and
$\log(1/t)=-\log t$.

[F5] [[thm-exponential-limits-and-range]]:
$\exp u\to+\infty$ as $u\to+\infty$, and $\exp u>0$.

[F6] [[cor-exponential-reciprocal-and-positivity]]:
$\exp(-u)=1/\exp(u)$ for every real $u$.

## Proof

1.1 Let $\gamma>0$. As $t\to+\infty$, $\log t\to+\infty$ because [F4] is increasing and onto. Hence $\gamma\log t\to+\infty$, so $t^\gamma=\exp(\gamma\log t)\to+\infty$ by [F1, F5]. [F1, F4, F5, given, algebra]

1.2 Let $\gamma>0$ and put $s=1/t$. As $t\downarrow0$, $s\to+\infty$. By [F1], [F4], and [F6], $t^\gamma=\exp(-\gamma\log s)=1/\exp(\gamma\log s)\to0$ by [F5]. [F1, F4, F5, F6, given, algebra]

2.1 For $\alpha>1$, [F2] gives $h_\alpha''(t)=\alpha(\alpha-1)t^{\alpha-2}>0$, so [F3] proves convexity; also $h_\alpha(1)=0$. By step 1.2, $h_\alpha(0+)=0^\alpha-1=-1$. By step 1.1 with $\gamma=\alpha-1$, $t^{\alpha-1}\to+\infty$, and $1/t\le1$ for $t\ge1$, so $h_\alpha(t)/t=t^{\alpha-1}-1/t\to+\infty$. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 For $0<\alpha<1$, [F2] gives $g_\alpha''(t)=\alpha(1-\alpha)t^{\alpha-2}>0$, so [F3] proves convexity; also $g_\alpha(1)=0$. By step 1.2, $g_\alpha(0+)=1$. Put $u=1/t$. As $t\to+\infty$, $u\downarrow0$, and step 1.2 with $\gamma=1-\alpha$ gives $u^{1-\alpha}\to0$, that is, $t^{-(1-\alpha)}\to0$. For $t\ge1$, $0\le |g_\alpha(t)/t|=t^{-(1-\alpha)}-1/t\le t^{-(1-\alpha)}$. Therefore $g_\alpha(t)/t\to0$. [F1, F2, F3, step 1.2, construct, algebra] ∎
