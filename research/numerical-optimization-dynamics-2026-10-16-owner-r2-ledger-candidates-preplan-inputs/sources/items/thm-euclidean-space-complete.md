---
id: thm-euclidean-space-complete
kind: theorem
title: "$\\mathbb{R}$ and $\\mathbb{R}^n$ for $n \\ge 1$ with the Euclidean metric are complete, componentwise from the Cauchy criterion in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, thm-cauchy-criterion-via-lub, def-cauchy-in-metric,
       def-metric-space, def-metric-convergence, def-finite-sum, thm-of-square-roots,
       lem-metrics-on-rn, lem-real-line-is-a-metric-space, lem-finite-set-has-max,
       def-max-min, lem-finite-sum-laws, def-real-limit, lem-of-square-monotone,
       lem-of-abs-value, lem-of-inverse-positive, thm-well-ordering-principle, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}$ and $\\mathbb{R}^n$ are complete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

1. $(\mathbb{R}, d_{\mathbb{R}})$ with the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]) is a complete metric space
   ([[def-complete-metric-space]]).
2. Let $n \in \mathbb{N}$ with $n \ge 1$ and let $d_2$ be the Euclidean metric on
   $\mathbb{R}^n$ ([[lem-metrics-on-rn]]). Then $(\mathbb{R}^n, d_2)$ is complete.

**The hypothesis $n \ge 1$ is inherited and is not decoration.**
[[lem-metrics-on-rn]] defines $\mathbb{R}^n$ and its three metrics only for
$n \ge 1$, because at $n = 0$ the metric $d_\infty$ would be a maximum over the
empty index set. Every statement about $\mathbb{R}^n$ in this library carries the
hypothesis, and this one does too.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ with $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$; a real $\varepsilon > 0$.

[A1] Cauchy criterion in $\mathbb{R}$: every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]], [[def-real-limit]]).

[L1] The usual metric of $\mathbb{R}$ is $d_{\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]).

[L2] Convergence in a metric space: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$; Cauchyness means $d(x_m,x_n) < \varepsilon$ for $m,n$ beyond an index ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-metric-space]]).

[L3] $d_2$ is a metric on $\mathbb{R}^n$ for $n \ge 1$, its defining sum is a finite sum, and the sum of squares is nonnegative with a unique nonnegative square root ([[lem-metrics-on-rn]], [[def-finite-sum]], [[thm-of-square-roots]]).

[L4] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} \lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] For $a, b \ge 0$: $a \le b \iff a^2 \le b^2$ and $a < b \iff a^2 < b^2$ ([[lem-of-square-monotone]]); and $|t|^2 = t^2$ for every real $t$ ([[lem-of-abs-value]]).

[L6] A nonempty finite set of naturals has a maximum, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

[L7] $n \ge 1$ gives $0 < 1/n \le 1$ and $0 < \varepsilon/(2n)$ ([[lem-of-inverse-positive]]).

[L8] Limits of real sequences are unique, which is what licenses writing $\lim_k x_k$ for a sequence already known to converge ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] a sequence $(x_k)$ of reals is Cauchy in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_m - x_n| < \varepsilon$ for all $m,n$ beyond an index and every rational $\varepsilon > 0$, which is verbatim the Cauchy condition of [[def-real-limit]]; and $x_k \to p$ in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_k - p| \to 0$, which is verbatim convergence to $p$ there. [L1, L2]

1.2 Let $x, y \in \mathbb{R}^n$ and $j < n$. The terms $(x_k - y_k)^2$ are nonnegative, so $(x_j - y_j)^2 \le \sum_{k<n}(x_k-y_k)^2 = d_2(x,y)^2$; both $|x_j - y_j|$ and $d_2(x,y)$ are nonnegative and $|x_j-y_j|^2 = (x_j-y_j)^2$, so $|x_j - y_j| \le d_2(x,y)$. [L3, L4, L5]

1.3 Let $x, y \in \mathbb{R}^n$ satisfy $|x_j - y_j| < \varepsilon/(2n)$ for every $j < n$. Then $(x_j-y_j)^2 \le (\varepsilon/(2n))^2$ for every $j < n$, so $d_2(x,y)^2 \le n \cdot \varepsilon^2/(4n^2) = \varepsilon^2/(4n) \le \varepsilon^2/4 < \varepsilon^2$, and therefore $d_2(x,y) < \varepsilon$. [L3, L4, L5, L7]

2.1 Claim 1: let $(x_k)$ be a Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$. By step 1.1 it is a Cauchy sequence of reals, so by [A1] it converges to some $x \in \mathbb{R}$, and by step 1.1 again $x_k \to x$ in $(\mathbb{R}, d_{\mathbb{R}})$. Hence every Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$ converges in it. [step 1.1, A1, L2]

2.2 Now let $(x^{(k)})$ be a Cauchy sequence in $(\mathbb{R}^n, d_2)$ and fix $j < n$. By step 1.2, $|x^{(m)}_j - x^{(l)}_j| \le d_2(x^{(m)}, x^{(l)})$ for all $m, l$, so the real sequence $(x^{(k)}_j)_{k}$ is Cauchy, and by [A1] it converges; its limit is unique, so the notation $y_j := \lim_{k} x^{(k)}_j$ denotes a single real. [step 1.2, A1, L2, L8]

3.1 The assignment $j \mapsto y_j$ is a function $n \to \mathbb{R}$, hence an element $y \in \mathbb{R}^n$; no choice is used, because $y_j$ is the unique limit of the $j$-th coordinate sequence. [step 2.2, L3, construct]

3.2 For each $j < n$ let $K_j$ be the least natural such that $|x^{(k)}_j - y_j| < \varepsilon/(2n)$ for all $k \ge K_j$, which exists because the coordinate sequence converges to $y_j$ and every nonempty set of naturals has a least element; and put $K := \max\{K_j : j < n\}$, a maximum of a nonempty finite set of naturals since $n \ge 1$. [step 2.2, L6, L7, choose]

4.1 For every $k \ge K$ and every $j < n$ we have $k \ge K_j$, hence $|x^{(k)}_j - y_j| < \varepsilon/(2n)$, and therefore $d_2(x^{(k)}, y) < \varepsilon$ by step 1.3. [step 1.3, step 3.1, step 3.2]

5.1 Since $\varepsilon > 0$ was an arbitrary real, $x^{(k)} \to y$ in $(\mathbb{R}^n, d_2)$ with $y \in \mathbb{R}^n$; so every Cauchy sequence in $(\mathbb{R}^n, d_2)$ converges in it, which with step 2.1 gives claims 1 and 2. [step 2.1, step 4.1, L2] ∎

## Remarks

- **The proof is the Cauchy criterion plus two inequalities.** Step 1.2 says a coordinate difference is at most the Euclidean distance, which turns a Cauchy sequence of points into $n$ Cauchy sequences of reals; step 1.3 says that coordinates uniformly below $\varepsilon/(2n)$ force the Euclidean distance below $\varepsilon$, which turns $n$ convergent coordinate sequences back into one convergent sequence of points. Nothing else about $\mathbb{R}^n$ is used, and in particular the Cauchy-Schwarz inequality is not needed here.
- **The same two inequalities hold for $d_1$ and $d_\infty$**, with the same proof of completeness. For $d_1(x,y) = \sum_{k<n}|x_k-y_k|$: each term is at most the sum ([[lem-finite-sum-laws]]), so $|x_j-y_j| \le d_1(x,y)$; and $|x_j-y_j| < \varepsilon/(2n)$ for all $j < n$ gives $d_1(x,y) \le n\varepsilon/(2n) = \varepsilon/2 < \varepsilon$. For $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$: the maximum dominates each entry and is one of them ([[lem-finite-set-has-max]]), so $|x_j-y_j| \le d_\infty(x,y)$, and entries all below $\varepsilon/2$ make the maximum at most $\varepsilon/2$. Substituting either pair of inequalities for steps 1.2 and 1.3 leaves the rest of the proof unchanged, so $(\mathbb{R}^n, d_1)$ and $(\mathbb{R}^n, d_\infty)$ are complete as well. Nothing later on this page uses that.
- **No choice is spent.** The limit point $y$ is assembled coordinatewise in step 3.1 from limits that are unique, and the finitely many indices $K_j$ of step 3.2 are made canonical by taking the least one. This matters because completeness proofs elsewhere on this page do spend $\mathrm{AC}_\omega$, and the contrast is worth keeping visible.
- **Where the least-upper-bound property is.** Entirely inside [[thm-cauchy-criterion-via-lub]]. This theorem is a transfer result: it moves completeness from $\mathbb{R}$ to $\mathbb{R}^n$ and adds no new content about the reals.
