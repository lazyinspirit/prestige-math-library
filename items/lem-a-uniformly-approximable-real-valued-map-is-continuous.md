---
id: lem-a-uniformly-approximable-real-valued-map-is-continuous
kind: lemma
title: "If for every $\\varepsilon > 0$ some continuous $g : X \\to \\mathbb{R}$ satisfies $\\lvert f(x) - g(x)\\rvert < \\varepsilon$ for all $x$, then $f$ is continuous; in particular a uniformly convergent series of continuous real functions has a continuous sum"
status: draft
origin: session
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-metric-topology, def-series, thm-direct-comparison-test,
       lem-absolute-convergence-implies-convergence, def-ordered-field, lem-of-abs-value,
       lem-of-triangle-inequality, thm-nonnegative-series-bounded-partial-sums,
       lem-of-sequence-basics]
justified_by: []
aliases: [lem-uniform-limit-real-valued]
landmark: true
short: "uniform approximation by continuous functions"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "Weierstrass M-test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_M-test"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$f : X \to \mathbb{R}$. If for every real $\varepsilon > 0$ there is a
continuous $g_\varepsilon : X \to \mathbb{R}$ ([[def-continuous-map-top]]) with

$$|f(x) - g_\varepsilon(x)| < \varepsilon \qquad \text{for every } x \in X,$$

then $f$ is continuous.

**In particular**, if $(g_n)_{n \in \mathbb{N}}$ are continuous real-valued
functions on $X$ and $(M_n)_{n \in \mathbb{N}}$ are nonnegative reals with
$|g_n(x)| \le M_n$ for every $x \in X$ and every $n$, and the series
$\sum M_n$ converges ([[def-series]]), then for every $x \in X$ the series
$\sum g_n(x)$ converges, and

$$F(x) \;:=\; \sum_{n=0}^{\infty} g_n(x)$$

defines a continuous function $F$ on $X$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and $f : X \to \mathbb{R}$ such that for every real $\varepsilon>0$ there is a continuous $g_\varepsilon : X \to \mathbb{R}$ with $|f(x)-g_\varepsilon(x)| < \varepsilon$ for every $x \in X$; and, for the second clause, continuous $g_n : X \to \mathbb{R}$ and nonnegative reals $M_n$, $n \in \mathbb{N}$, with $|g_n(x)| \le M_n$ for every $x \in X, n \in \mathbb{N}$, and $\sum M_n$ convergent.

[A1] The main hypothesis: for every real $\varepsilon>0$ there is continuous $g_\varepsilon$ with $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x \in X$.

[L1] $f$ is continuous at $x_0$ iff for every open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$ there is open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[L2] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b)).

[L3] The bounded open intervals $(a-r,a+r)$, $r>0$, are a basis for the usual topology of $\mathbb{R}$, so for open $V \ni y_0$ there is real $r>0$ with $(y_0-r,y_0+r) \subseteq V$ ([[lem-real-line-is-a-metric-space]], claim 2 and 3, [[def-metrizable-space]], [[def-metric-topology]], [[def-topology-basis-subbasis]]).

[L4] Triangle inequality: $|u+v| \le |u|+|v|$, hence $|u-w| \le |u-v|+|v-w|$ for reals $u,v,w$ ([[lem-of-triangle-inequality]]).

[L5] Absolute value: $|u|<c$ iff $-c<u<c$, for real $c>0$; and $-c \le u \le c$ iff $|u| \le c$, for real $c \ge 0$ ([[lem-of-abs-value]]).

[L6] Finite triangle inequality along a finite index set, iterating [L4]: $\big|\sum_{k} u_k\big| \le \sum_k |u_k|$ ([[lem-of-abs-value]], [[def-ordered-field]]).

[L7] Comparison and absolute convergence: if $0 \le a_k \le b_k$ eventually and $\sum b_k$ converges then $\sum a_k$ converges ([[thm-direct-comparison-test]]); if $\sum |a_k|$ converges then $\sum a_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing, bounded above by the sum when the series converges, and converge to the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L9] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \le c$ for all $k$ beyond some index, then $a \le c$ ([[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in X$ and an open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$; by [L3] fix a real $r>0$ with $(f(x_0)-r, f(x_0)+r) \subseteq V$. [given, L3, choose]

1.2 Let $g, h : X \to \mathbb{R}$ be continuous, let $x_1 \in X$ and let real $\eta>0$; arguing directly from continuity of $g$ and of $h$ at $x_1$ (via [L1] and [L2]) separately, fix open $U_1, U_2 \ni x_1$ with $|g(x)-g(x_1)| < \eta/2$ on $U_1$ and $|h(x)-h(x_1)|<\eta/2$ on $U_2$. [given, L1, L2, choose]

1.3 Fix $x \in X$. The real sequence $(g_n(x))_{n \in \mathbb{N}}$ satisfies $0 \le |g_n(x)| \le M_n$ for every $n$, and $\sum M_n$ converges by hypothesis, so [L7] gives that $\sum |g_n(x)|$ converges, and hence $\sum g_n(x)$ converges; define $F(x) := \sum_{n=0}^{\infty} g_n(x)$ and $s_N(x) := \sum_{n<N} g_n(x)$, so $s_N(x) \to F(x)$ as $N \to \infty$. [given, L7, construct]

1.4 Write $\sigma_N := \sum_{n<N} M_n$ and $S := \sum_{n=0}^{\infty} M_n$; since $M_n \ge 0$ for every $n$, [L8] gives that $(\sigma_N)$ is nondecreasing with $\sigma_N \le S$ for every $N$, and $\sigma_N \to S$. So $S - \sigma_N \ge 0$ for every $N$ and $S-\sigma_N \to 0$; given a real $\varepsilon>0$, fix $N \in \mathbb{N}$ with $S - \sigma_N < \varepsilon$. [given, L8, choose]

2.1 By [A1] applied with $\varepsilon := r/3 > 0$, fix a continuous $g : X \to \mathbb{R}$ with $|f(x)-g(x)| < r/3$ for every $x \in X$. [step 1.1, A1, choose]

2.2 $U_1 \cap U_2$ is open, contains $x_1$, and for $x \in U_1 \cap U_2$: $|(g+h)(x)-(g+h)(x_1)| \le |g(x)-g(x_1)| + |h(x)-h(x_1)| < \eta$ by [L4]. [step 1.2, L4, algebra]

2.3 For every $x \in X$ and every $K > N$: $|s_K(x)-s_N(x)| = \big|\textstyle\sum_{N \le n < K} g_n(x)\big| \le \sum_{N \le n < K} |g_n(x)| \le \sum_{N \le n < K} M_n = \sigma_K - \sigma_N \le S - \sigma_N$, by [L6], the hypothesis $|g_n(x)| \le M_n$, and $\sigma_K \le S$ from step 1.4. [step 1.4, step 1.3, L6, algebra]

3.1 $U := g^{-1}\big[(g(x_0)-r/3,\, g(x_0)+r/3)\big]$ is open by [L2], since $g$ is continuous by step 2.1, and $x_0 \in U$, since $|g(x_0)-g(x_0)| = 0 < r/3$. [step 2.1, L2]

3.2 Since $x_1 \in X$ and real $\eta>0$ were arbitrary, $g+h$ is continuous on $X$; iterating this over finitely many further sums, any finite sum $g_0+\cdots+g_{N-1}$ of continuous real-valued functions on $X$ is continuous, for every $N \ge 1$, with the case $N=0$ (the zero function) continuous as a constant. [step 2.2]

3.3 By step 2.3, $|s_K(x)-s_N(x)| \le S-\sigma_N$ for every $K > N$; as $K \to \infty$, $s_K(x) \to F(x)$ by step 1.3, so [L9] applied to the two non-strict bounds $-(S-\sigma_N) \le s_K(x)-s_N(x) \le S-\sigma_N$ (equivalent to step 2.3 by [L5]) gives $-(S-\sigma_N) \le F(x)-s_N(x) \le S-\sigma_N$, that is $|F(x)-s_N(x)| \le S-\sigma_N < \varepsilon$ by [L5] and step 1.4, for every $x \in X$, with $N$ independent of $x$. [step 2.3, step 1.4, step 1.3, L5, L9]

4.1 For $x \in U$: $|f(x)-f(x_0)| \le |f(x)-g(x)| + |g(x)-g(x_0)| + |g(x_0)-f(x_0)| < r/3+r/3+r/3 = r$, by [L4] (twice), step 2.1 (the first and third terms) and the defining property of $U$ (step 3.1, the middle term). [step 2.1, step 3.1, L4, algebra]

4.2 For $N \in \mathbb{N}$, $s_N = g_0 + \cdots + g_{N-1}$ is a finite sum of continuous functions, hence continuous on $X$, by step 3.2. [step 3.2]

5.1 By step 4.1, $f(x) \in (f(x_0)-r,f(x_0)+r) \subseteq V$ for every $x \in U$ (step 1.1), so $f[U] \subseteq V$; with $U$ open and $x_0 \in U$ (step 3.1), and $V$ an arbitrary open set containing $f(x_0)$ (step 1.1), $f$ is continuous at $x_0$ by [L1]. [step 4.1, step 3.1, step 1.1, L1]

6.1 Since $x_0 \in X$ was arbitrary, $f$ is continuous on $X$; this proves the main clause. [step 5.1]

7.1 Since $s_N$ is continuous by step 4.2 and real $\varepsilon>0$ was arbitrary, the hypothesis of the main clause (steps 1.1–6.1) is met by $F$, taking $g_\varepsilon := s_N$; hence $F$ is continuous on $X$. This, with step 1.3, proves the second clause. [step 3.3, step 4.2, step 6.1, discharge-construct] ∎

## Remarks

- **The $\varepsilon/3$ split is the whole mechanism**, and it is exactly the triangle inequality read three ways: once to compare $f$ with an approximant, once to use continuity of that approximant, and once to compare back. Nothing about $X$ is used beyond the definition of continuity; the hypothesis never mentions a metric on $X$, only on the common target $\mathbb{R}$.

- **The second clause is the Weierstrass $M$-test, stated only as far as this page needs it.** It is not stated for a general metric or normed target, and it produces no rate of convergence beyond what step 1.4 already gives: a single $N$, working uniformly in $x$, for every tolerance $\varepsilon$.

- **No choice principle beyond what a single real number requires is used anywhere above.** Steps 1.1, 2.1 and 1.4 each fix one witness from a nonempty set of reals or a single continuous function, and no step selects simultaneously from an infinite family.
