---
id: cor-unconditional-iff-absolute-in-r
kind: corollary
title: "For a series of real numbers, unconditional convergence and absolute convergence are the same property"
status: published
origin: session
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-divergence-to-infinity, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. The following are equivalent.

1. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]).
2. $\sum a_k$ converges unconditionally
   ([[def-rearrangement-and-unconditional-convergence]]).
3. $\sum a_k$ converges and every rearrangement of it converges, with no
   requirement that the sums agree.

So over $\mathbb{R}$ there is nothing between absolute and conditional
convergence: a convergent series either may be reordered freely, sum and all, or
else has a rearrangement that fails to converge at all.

**This is a statement about $\mathbb{R}$, and nothing here says how much of it
survives elsewhere.** Whether the equivalence of 1 and 2 holds for series of
vectors is a question this library cannot pose at this point in the reading
order, since it has no notion of a convergent series of vectors; it is raised,
and left open, in [[rem-rearrangement-in-higher-dimensions]]. No claim about any
space other than $\mathbb{R}$ is made or used here.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals.

[L1] An absolutely convergent series converges unconditionally: every rearrangement converges, to the same sum ([[thm-dirichlet-rearrangement]]).

[L2] If $\sum a_k$ converges conditionally then for every $\alpha \le \beta$ in the extended reals there is a rearrangement whose partial sums have those as limit inferior and limit superior; in particular there is one whose partial sums diverge to $+\infty$ ([[thm-riemann-series-theorem]]).

[L3] Unconditional convergence means: the series converges, and every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

[L4] A series converges absolutely when $\sum |a_k|$ converges, and conditionally when it converges while $\sum |a_k|$ does not; a convergent series is exactly one of the two ([[def-absolute-and-conditional-convergence]]).

[L5] A sequence diverging to $+\infty$ does not converge: if $x_n \to +\infty$ and also $x_n \to L$, then eventually $x_n > L + 1$ and eventually $|x_n - L| < 1$, which are incompatible ([[def-divergence-to-infinity]], [[def-real-limit]], [[def-series]]).

## Proof

**Proof technique:** direct.

1.1 Assume 1. Then by [L1] the series converges and every rearrangement converges to the same sum, which is 2. [L1, L3]

1.2 Assume 2. Then in particular the series converges and every rearrangement converges, which is 3. [L3]

1.3 Assume 3, and suppose $\sum a_k$ did not converge absolutely. Since it converges, it would then converge conditionally. [L4]

2.1 In that situation [L2] supplies a bijection $\sigma$ of $\mathbb{N}$ for which the partial sums of $\sum a_{\sigma(k)}$ diverge to $+\infty$, and such a series does not converge; this contradicts the assumption that every rearrangement converges. [step 1.3, L2, L5]

3.1 Hence under 3 the series converges absolutely, which is 1. [step 1.3, step 2.1, L4]

4.1 The implications 1 to 2, 2 to 3 and 3 to 1 close the cycle, so the three statements are equivalent. [step 1.1, step 1.2, step 3.1] ∎

## Remarks

- **Statement 3 is the reason the corollary is worth recording.** It says that merely *asking* every rearrangement to converge already forces absolute convergence, so the apparently weaker demand is not weaker at all. What makes that work is the strength of [[thm-riemann-series-theorem]]: it produces not only rearrangements with prescribed sums but rearrangements with no sum.

- **Two of the three implications are cheap.** The content is in 3 implies 1, and its only ingredient is the Riemann series theorem. The implication 1 implies 2 is [[thm-dirichlet-rearrangement]] verbatim, and 2 implies 3 is a weakening.

- **Where the dividing line sits.** By [[def-absolute-and-conditional-convergence]] a convergent series is absolutely or conditionally convergent and not both, so the corollary may be read as: the conditionally convergent series are exactly the convergent series that are not unconditionally convergent. The alternating harmonic series is the standard inhabitant of that class; see [[fs-rearrangement-preserves-the-sum]].
