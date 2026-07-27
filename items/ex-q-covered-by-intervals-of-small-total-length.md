---
id: ex-q-covered-by-intervals-of-small-total-length
kind: example
title: "$\\mathbb{Q}$ is covered by open intervals of total length $\\varepsilon$, for every $\\varepsilon > 0$"
status: published
origin: session
deps: [lem-countable-sets-are-null, def-measure-zero-and-content-zero, thm-rationals-countable, lem-countable-iff-surjection-from-n, thm-geometric-series, def-series, def-interval, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-open-and-closed-in-r, lem-rat-embeds-dense, def-countable, def-equinumerous, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ be the set of rationals
([[lem-rat-embeds-dense]]) and let $\varepsilon > 0$ be real. Then there is a
sequence $(V_k)_{k \in \mathbb{N}}$ of **open** intervals ([[def-interval]]) with

$$\mathbb{Q}_{\mathbb{R}} \subseteq \bigcup_{k \in \mathbb{N}} V_k \qquad \text{and} \qquad \sum_{k=0}^{\infty} \operatorname{length}(V_k) = \varepsilon .$$

Explicitly, if $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ is a bijection, one may
take $V_k := \big(e(k) - \varepsilon 2^{-k-2},\ e(k) + \varepsilon 2^{-k-2}\big)$,
of length $\varepsilon 2^{-k-1}$.

This is [[lem-countable-sets-are-null]] made concrete for the most familiar
countable set, and it is the computation that makes measure zero look
paradoxical: a set that meets every interval of $\mathbb{R}$ is nonetheless
covered by open intervals whose lengths add up to a millionth.

## Facts & Assumptions

**Given:** A real $\varepsilon > 0$ and the set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$.

[L1] $\mathbb{Q} \approx \mathbb{N}$ and $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, so there is a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[def-equinumerous]], [[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L2] $(c,d)$ is an open interval of length $d - c$, and it is an open set ([[def-interval]], [[def-open-and-closed-in-r]]).

[L3] $\sum_{k=0}^{\infty} 2^{-k} = 2$, powers satisfy $2^{-k-1} = 2^{-1}2^{-k}$, and a convergent series of nonnegative terms has sum the supremum of its partial sums ([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L4] Finite sums scale by a constant ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Every at most countable subset of $\mathbb{R}$ has measure zero, and nullity means a cover by closed intervals whose partial total lengths stay below $\varepsilon$ ([[lem-countable-sets-are-null]], [[def-measure-zero-and-content-zero]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$ and $\varepsilon 2^{-k-2} > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 By [L1] fix a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ and put $\delta_k := \varepsilon \cdot 2^{-k-2}$, a positive real by [L3] and [L6], and $V_k := (e(k) - \delta_k,\ e(k) + \delta_k)$, an open interval of length $2\delta_k = \varepsilon 2^{-k-1}$ by [L2], [L3] and [L6]. [given, L1, L2, L3, L6, choose]

1.2 The family covers $\mathbb{Q}_{\mathbb{R}}$: every rational is $e(k)$ for some $k$, and $e(k) \in V_k$ because $e(k) - \delta_k < e(k) < e(k) + \delta_k$ by [L6]. [L1, L2, L6]

2.1 The lengths sum to $\varepsilon$: by [L4] the partial sums are $\sum_{k<n}\varepsilon 2^{-k-1} = \varepsilon 2^{-1}\sum_{k<n}2^{-k}$, and by [L3] the series $\sum_k 2^{-k}$ converges to $2$, so by [L3] and [L4] the series $\sum_k \varepsilon 2^{-k-1}$ converges with sum $\varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$. [step 1.1, L3, L4, L6]

3.1 So the open intervals $V_k$ cover $\mathbb{Q}_{\mathbb{R}}$ with total length exactly $\varepsilon$, as claimed; since $\varepsilon > 0$ was arbitrary, this also re-exhibits the nullity of $\mathbb{Q}_{\mathbb{R}}$ given by [L5], the closed intervals $[e(k) - \delta_k, e(k) + \delta_k]$ having the same lengths. [step 1.1, step 1.2, step 2.1, L5] ∎

## Remarks

- **The union is a dense open set of arbitrarily small total length.** Each $V_k$
  is open, so $\bigcup_k V_k$ is an open set containing every rational, hence
  dense; and its covering intervals have total length $\varepsilon$. Iterating
  this over a sequence of shrinking $\varepsilon$ is exactly the construction of
  [[cex-meager-set-of-full-measure]], where the intersection of countably many
  such open sets turns out to be null and residual at the same time.

- **Indexing.** The first interval has length $\varepsilon \cdot 2^{-1}$, not
  $\varepsilon$: sequences here start at $k = 0$ and the total
  $\varepsilon 2^{-1} \sum_{k \ge 0} 2^{-k}$ is exactly $\varepsilon$. Copying the
  classical $\varepsilon 2^{-k}$ from a $1$-indexed source would give total
  $2\varepsilon$.

- **What this does not show.** It does not show that the union of the $V_k$ is
  small: that union is an open set containing a dense set, and one may not
  conclude anything about its own total length from the lengths of the $V_k$,
  since they overlap heavily. The correct statement is about the cover, not the
  union, and that is why [[def-measure-zero-and-content-zero]] is phrased in terms
  of covers throughout.
