---
id: lem-vanishing-tail-control-implies-small-truncated-second-moment
title: "Vanishing tail control bounds truncated second moments"
kind: lemma
status: draft
origin: pipeline
deps: ["def-truncation-at-a-fixed-level", "thm-layer-cake-formula-for-l-p-powers"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 2.2.12 proof with Lemma 2.2.13, pp. 63\u201364"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Use the integer part and monotonicity of tail probabilities. The layer-cake bound E[X^2 1_{|X|<=n}]<=2 integral_0^n t P(|X|>t)dt and a fixed-prefix/vanishing-tail split prove the limit. For 0<p<1, apply layer cake and bound the large-t integrand by a constant times t^(p-2)."
---

## Statement

Let $X$ be a real random variable with $n\mathbb P(|X|>n)\to0$ as positive integers $n\to\infty$. Then $x\mathbb P(|X|>x)\to0$ for real $x\to\infty$, and
$$\frac{\mathbb E[X^2\mathbf1_{\{|X|\le n\}}]}n\longrightarrow0.$$
Moreover $\mathbb E|X|^p<\infty$ for every $0<p<1$.

## Facts & Assumptions

[F1] [[def-truncation-at-a-fixed-level]]: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is $X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$ The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by thm-arithmetic-and-lattice-operations-preserve-measurability. Thus $X^{(A)}$ is a real random variable as in def-random-element-and-real-random-variable. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

[F2] [[thm-layer-cake-formula-for-l-p-powers]]: Let $(X,\mathcal A,\mu)$ be a measure space, let $f : X \to \mathbb C$ be measurable, and let $0<p<\infty$. Then $\int_X |f|^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{|f|>t\})\,dt = p\int_0^\infty t^{p-1}A_f(t)\,dt,$ where either side may be $+\infty$.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 For $x\ge1$, put $m=\lfloor x\rfloor$. Monotonicity of the tail gives $x\mathbb P(|X|>x)\le(m+1)\mathbb P(|X|>m)$, which tends to zero. Consequently $h(t)=t\mathbb P(|X|>t)$ is bounded on $[0,\infty)$ and tends to zero. [given, algebra]

2.1 Apply layer cake with exponent $2$ to $X\mathbf1_{\{|X|\le n\}}$. Its tail is at most that of $|X|$ for $t<n$ and is zero for $t\ge n$. Thus its second moment is at most $2\int_0^n h(t)\,dt$. If $h(t)\le\varepsilon$ for $t\ge M$, division by $n$ bounds this by $2n^{-1}\int_0^M h(t)\,dt+2\varepsilon$ for $n\ge M$. Let $n\to\infty$ then $\varepsilon\downarrow0$. No moment assumption on the untruncated square was used. [F1, F2, step 1.1, algebra]

3.1 For $0<p<1$, layer cake gives $\mathbb E|X|^p=p\int_0^\infty t^{p-1}\mathbb P(|X|>t)\,dt$. On $(0,1)$ this is at most $p\int_0^1t^{p-1}\,dt=1$. If $h\le K$, the remaining integral is at most $pK\int_1^\infty t^{p-2}\,dt=pK/(1-p)<\infty$. This also covers $X=0$ and bounded laws. Neither endpoint p=0 nor p=1 is asserted. [F2, step 1.1, algebra] ∎
