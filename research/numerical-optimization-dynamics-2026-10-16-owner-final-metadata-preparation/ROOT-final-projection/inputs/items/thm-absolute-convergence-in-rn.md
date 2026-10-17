---
id: thm-absolute-convergence-in-rn
kind: theorem
title: "An absolutely convergent series in $\\mathbb{R}^n$ converges, and every rearrangement converges to the same sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-vectors-and-rearrangement, thm-componentwise-convergence-and-completeness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, thm-direct-comparison-test, thm-dirichlet-rearrangement, lem-absolute-convergence-implies-convergence, def-absolute-and-conditional-convergence, def-series, def-cauchy-in-metric, def-complete-metric-space, lem-metric-convergent-implies-cauchy, lem-real-line-is-a-metric-space, lem-metrics-on-rn, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-injection-surjection-bijection, def-metric-convergence, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges absolutely
([[def-series-of-vectors-and-rearrangement]]). Then:

1. $\sum x_k$ converges; write $s := \sum_{k=0}^{\infty}x_k$.
2. For every bijection $\sigma : \mathbb{N} \to \mathbb{N}$
   ([[def-injection-surjection-bijection]]) the rearranged series
   $\sum x_{\sigma(k)}$ converges absolutely, with
   $\sum_{k=0}^{\infty}x_{\sigma(k)} = s$.
3. Consequently $\mathcal{S}(x) = \{s\}$: the set of rearrangement sums is a
   single point.

**This is the $\mathbb{R}^{n}$ analogue of the published one-dimensional
statements, not a generalisation of their proofs.**
[[lem-absolute-convergence-implies-convergence]] and
[[thm-dirichlet-rearrangement]] are proved on the real line; everything below
reduces to them coordinatewise, or to completeness of $(\mathbb{R}^{n},d_2)$.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum \lVert x_k\rVert_2$ convergent; the vector partial sums $s_N = \sum_{k<N}x_k$ and the real partial sums $T_N = \sum_{k<N}\lVert x_k\rVert_2$; a bijection $\sigma$ of $\mathbb{N}$; a rational $\varepsilon > 0$.

[L1] Series of vectors, absolute convergence, rearrangement and $\mathcal{S}(x)$ ([[def-series-of-vectors-and-rearrangement]]); partial sums are computed pointwise, $(s_N)(j) = \sum_{k<N}(x_k)_j$ ([[lem-standard-basis-of-f-n]] clause 1, [[def-finite-sum]]).

[L2] The finite triangle inequality for a norm, $N(\sum_{k<p}u_k) \le \sum_{k<p}N(u_k)$, and the coordinate bound $|y_j| \le \lVert y\rVert_2$ for $j<n$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1 and 3, [[def-norm-and-normed-space]], [[def-p-norms-on-rn]]).

[L3] Splitting of finite sums: for $L \le N$, $\sum_{k<N}a_k = \sum_{k<L}a_k + \sum_{k=L}^{N-1}a_k$, and the same identity in $\mathbb{R}^{n}$ read pointwise ([[lem-finite-sum-laws]] clause 3, [[def-finite-sum]], [[lem-standard-basis-of-f-n]] clause 1).

[L4] $(\mathbb{R}^{n},d_2)$ is complete for $n \ge 1$, $d_2(u,v) = \lVert u-v\rVert_2$, and a sequence converging in a metric space is Cauchy ([[thm-componentwise-convergence-and-completeness]] clause 3, [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-metrics-on-rn]], [[def-complete-metric-space]], [[def-cauchy-in-metric]], [[lem-metric-convergent-implies-cauchy]], [[lem-real-line-is-a-metric-space]]).

[L5] Componentwise convergence in $\mathbb{R}^{n}$ for $n \ge 1$ ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[def-real-limit]]).

[L6] The direct comparison test: if $0 \le a_k \le b_k$ from some index on and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] Dirichlet's rearrangement theorem: if $\sum a_k$ converges absolutely then for every bijection $\sigma$ of $\mathbb{N}$ the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum|a_k|$, and $\sum a_{\sigma(k)}$ converges with the same sum as $\sum a_k$ ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L8] Absolute convergence implies convergence for real series, and a convergent series of nonnegative terms is absolutely convergent, its terms being their own absolute values ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For $L \le N$: $s_N - s_L = \sum_{k=L}^{N-1}x_k$ and $T_N - T_L = \sum_{k=L}^{N-1}\lVert x_k\rVert_2$, both by splitting, the vector identity being the pointwise reading of the real one. [L1, L3]

1.2 The real sequence $(T_N)$ converges by hypothesis, hence is Cauchy in $(\mathbb{R},d_{\mathbb{R}})$: for every rational $\varepsilon>0$ there is $K$ with $|T_N - T_L| < \varepsilon$ for all $N,L \ge K$. [L4, L8]

1.3 For every $j<n$ and every $k$: $0 \le |(x_k)_j| \le \lVert x_k\rVert_2$. [L2]

1.4 Likewise $k \mapsto \lVert x_{\sigma(k)}\rVert_2$ is the rearrangement along $\sigma$ of $k \mapsto \lVert x_k\rVert_2$, a convergent series of nonnegative terms and therefore absolutely convergent, so $\sum_k\lVert x_{\sigma(k)}\rVert_2$ converges; that is, $\sum x_{\sigma(k)}$ converges absolutely. [L7, L8, L1]

2.1 Hence $\lVert s_N - s_L\rVert_2 \le \sum_{k=L}^{N-1}\lVert x_k\rVert_2 = T_N - T_L$ by the finite triangle inequality. [step 1.1, L2]

2.2 By step 1.3 and the comparison test, the real series $\sum_k |(x_k)_j|$ converges for every $j<n$; so each coordinate series $\sum_k (x_k)_j$ converges absolutely. [step 1.3, L6, L8]

3.1 By steps 2.1 and 1.2, for $N \ge L \ge K$ we get $d_2(s_N,s_L) = \lVert s_N-s_L\rVert_2 \le |T_N-T_L| < \varepsilon$, and the same bound with $N$ and $L$ exchanged; so $(s_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$. [step 2.1, step 1.2, L4]

3.2 Fix a bijection $\sigma$. For every $j<n$ the sequence $k \mapsto (x_{\sigma(k)})_j$ is the rearrangement along $\sigma$ of the sequence $k \mapsto (x_k)_j$; by step 2.2 the latter series converges absolutely, so Dirichlet's theorem gives that $\sum_k (x_{\sigma(k)})_j$ converges with the same sum as $\sum_k (x_k)_j$. [step 2.2, L7]

4.1 Since $(\mathbb{R}^{n},d_2)$ is complete, the Cauchy sequence $(s_N)$ converges; that is, $\sum x_k$ converges, which is clause 1. Write $s$ for its sum. [step 3.1, L4]

5.1 By clause 1 applied to the sequence $k \mapsto x_{\sigma(k)}$, which converges absolutely by step 1.4, the series $\sum x_{\sigma(k)}$ converges; and by step 3.2 each coordinate of its sum equals the corresponding coordinate of $s$, so its sum is $s$. This is clause 2. [step 4.1, step 3.2, step 1.4, L5]

6.1 By clause 2 every rearrangement of $\sum x_k$ converges to $s$, and the identity bijection shows $s \in \mathcal{S}(x)$; so $\mathcal{S}(x) = \{s\}$, which is clause 3. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Two independent routes to clause 1 are available and only one is used.** The proof above uses completeness of $(\mathbb{R}^{n},d_2)$ together with the finite triangle inequality. The alternative is to run step 2.2 first and reassemble by [[thm-componentwise-convergence-and-completeness]] clause 1, using [[lem-absolute-convergence-implies-convergence]] on each coordinate. The two give the same theorem; mixing them would prove clause 1 twice.

- **The published Cauchy criterion for series** ([[thm-series-cauchy-criterion]]) is the standard packaging of step 1.2 and would serve in its place; the proof uses the plainer statement that a convergent real sequence is Cauchy, so that the index bookkeeping stays visible.

- **Clause 3 is the half of the rearrangement question this theorem settles.** For an absolutely convergent series the set of rearrangement sums is as small as it can be. What $\mathcal{S}(x)$ looks like when the series converges **without** converging absolutely is taken up in [[thm-rearrangement-sums-lie-in-an-affine-subspace]], which proves a containment and no more; see [[rem-rn-conventions-and-scope]] for exactly what this page does and does not settle.
