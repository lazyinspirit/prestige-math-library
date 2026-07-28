---
id: fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space
kind: false-statement
title: "FALSE: if a convergent series in $\\mathbb{R}^{n}$ does not converge absolutely, then every point of $\\mathbb{R}^{n}$ is the sum of some rearrangement of it"
status: draft
origin: session
deps: [thm-rearrangement-sums-lie-in-an-affine-subspace, ex-gamma-and-its-complement-computed-for-a-plane-series, def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-componentwise-convergence-and-completeness, thm-riemann-series-theorem, thm-absolute-convergence-in-rn, def-absolute-and-conditional-convergence, thm-p-series-rational, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, def-linear-subspace, def-injection-surjection-bijection, lem-standard-basis-of-f-n, def-series, lem-metric-limits-unique, def-metric-convergence, lem-finite-sum-laws, def-finite-sum, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## Statement

**False claim:** let $n \ge 1$ and let $(x_k)$ be a sequence in $\mathbb{R}^{n}$
whose series converges but does not converge absolutely
([[def-series-of-vectors-and-rearrangement]]). Then every point of
$\mathbb{R}^{n}$ is the sum of some rearrangement of $\sum x_k$; that is,
$\mathcal{S}(x) = \mathbb{R}^{n}$.

**Where the claim comes from.** For $n = 1$ it is true, and it is the published
[[thm-riemann-series-theorem]]: a conditionally convergent real series can be
rearranged to any prescribed sum. The claim above is the naive transfer of that
theorem to $\mathbb{R}^{n}$ by analogy, and the analogy fails at $n = 2$
already.

**The witness** is the series of
[[ex-gamma-and-its-complement-computed-for-a-plane-series]]:
$x_k = \bigl(\varepsilon_k/\iota(k+1),\ 0\bigr)$ in $\mathbb{R}^{2}$, which
converges, does not converge absolutely, and has **no** rearrangement sum off the
horizontal axis. In particular $(0,1)$ is not a rearrangement sum.

## Facts & Assumptions

**Given:** The sequence $(x_k)$ in $\mathbb{R}^{2}$ of [[ex-gamma-and-its-complement-computed-for-a-plane-series]], with $x_k = (c_k, 0)$ and $c_k = \varepsilon_k/\iota(k+1)$.

[A1] The refuted claim, instantiated at $n = 2$ and this $(x_k)$: every point of $\mathbb{R}^{2}$, in particular $(0,1)$, is the sum of some rearrangement of $\sum x_k$.

[L1] The series $\sum x_k$ converges, with sum $s = (S,0)$, and does not converge absolutely, its norms being $1/\iota(k+1)$ and the harmonic series divergent ([[ex-gamma-and-its-complement-computed-for-a-plane-series]] clauses 1 and 2, [[thm-p-series-rational]], [[def-absolute-and-conditional-convergence]], [[def-canonical-natural]]).

[L2] A rearrangement of $\sum x_k$ is $\sum x_{\sigma(k)}$ for a bijection $\sigma$ of $\mathbb{N}$, and $\mathcal{S}(x)$ is the set of its sums ([[def-series-of-vectors-and-rearrangement]], [[def-injection-surjection-bijection]]).

[L3] Convergence in $\mathbb{R}^{2}$ is componentwise, partial sums are computed coordinatewise, and a limit in a metric space is unique ([[thm-componentwise-convergence-and-completeness]] clause 1, [[lem-standard-basis-of-f-n]] clause 1, [[lem-metric-limits-unique]], [[def-metric-convergence]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L4] The containment theorem: $\mathcal{S}(x) \subseteq s + \Gamma^{\perp}$, and for this series $\Gamma^{\perp}$ is the set of multiples of $e_0$ ([[thm-rearrangement-sums-lie-in-an-affine-subspace]], [[def-the-space-of-summing-directions]], [[ex-gamma-and-its-complement-computed-for-a-plane-series]] clause 3, [[def-linear-subspace]], [[def-euclidean-inner-product]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L5] An absolutely convergent series in $\mathbb{R}^{n}$ has exactly one rearrangement sum ([[thm-absolute-convergence-in-rn]]).

## Refutation

**Proof technique:** direct.

1.1 The second coordinate of every term $x_k$ is $0$, so for every bijection $\sigma$ of $\mathbb{N}$ the second coordinate of every partial sum $\sum_{j<N}x_{\sigma(j)}$ is the finite sum of zeros, namely $0$. [L2, L3]

1.2 The hypotheses of the refuted claim are met by this series: it converges and does not converge absolutely. [L1]

2.1 If a rearrangement $\sum x_{\sigma(k)}$ converges to a point $t \in \mathbb{R}^{2}$, then by componentwise convergence its second coordinate sequence, constantly $0$ by step 1.1, converges to $t_1$; a constant sequence converges to its value and limits are unique, so $t_1 = 0$. [step 1.1, L3]

3.1 Hence every element of $\mathcal{S}(x)$ has second coordinate $0$, and $(0,1)$, whose second coordinate is $1 \ne 0$, is not a rearrangement sum. [step 2.1, L2]

4.1 So [A1] fails for a series satisfying the hypotheses of the refuted claim, and the claim is false. [step 1.2, step 3.1, A1]

5.1 The failure is structural rather than accidental: by the containment theorem every rearrangement sum lies in $s + \Gamma^{\perp}$, and here $\Gamma^{\perp}$ is a line in $\mathbb{R}^{2}$, hence a proper subset, so $\mathcal{S}(x)$ cannot be all of $\mathbb{R}^{2}$ whatever else is true of it. [step 3.1, L4] ∎

## Remarks

- **The refutation uses only the containment half.** Step 2.1 is an elementary argument about the second coordinate and needs nothing beyond componentwise convergence; step 5.1 explains it through [[thm-rearrangement-sums-lie-in-an-affine-subspace]], which proves $\mathcal{S}(x) \subseteq s+\Gamma^{\perp}$ and nothing more. **No statement about the reverse inclusion is used here, and none is asserted.**

- **Why $n = 1$ is genuinely different.** For a conditionally convergent real series $\Gamma = \{0\}$, so $\Gamma^{\perp}$ is the whole line and the containment says nothing; the space simply has no proper subspace for the rearrangement sums to be trapped in other than $\{0\}$. From $n = 2$ on there is room, and this witness uses it.

- **What a correct general statement would have to look like.** The affine subspace $s + \Gamma^{\perp}$ is an upper bound for $\mathcal{S}(x)$, and the two extremes are both realised: it is a single point when the series converges absolutely ([[thm-absolute-convergence-in-rn]]), and it is the whole line in the one-dimensional conditionally convergent case ([[thm-riemann-series-theorem]]). What happens between those extremes for $n \ge 2$ is **not settled in this library**, and the present item settles only that "everything" is the wrong answer.
