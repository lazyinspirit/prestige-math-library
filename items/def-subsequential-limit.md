---
id: def-subsequential-limit
kind: definition
title: "Subsequential limit of a real sequence, and the subsequential limit set"
status: draft
origin: session
deps: [def-sequence, def-real-limit, lem-index-map-grows]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.5, subsequential limits)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$.
Then $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$
converges to $L$: that is, when there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that

$$x_{n_j} \longrightarrow L \qquad (j \to \infty)$$

in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is

$$\operatorname{SL}(x) \;:=\; \{\, L \in \mathbb{R} : L \text{ is a subsequential limit of } (x_k) \,\} \subseteq \mathbb{R}.$$

Both pieces of the definition are already fixed elsewhere and are only combined
here: *strictly increasing* and *subsequence* are [[def-sequence]], and
*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in
particular $(x_k)$ is not assumed to converge, and $\operatorname{SL}(x)$ may be
empty, a single point, or larger.

**A subsequence looks arbitrarily far out.** A strictly increasing index map
satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices
$n_j$ are cofinal in $\mathbb{N}$ and a subsequential limit is determined by the
behaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite
initial segment of $(x_k)$ affects $\operatorname{SL}(x)$: a sequence and each of
its tails have the same subsequential limits.

**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation
value* of the sequence for the same notion. This library says *subsequential
limit* throughout, reserving *limit point* for the topological notion of a limit
point of a set, which is a different thing: the set $\{x_k\}$ of values of the
constant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential
limit of that sequence.

## Remarks

- **A convergent sequence has exactly one subsequential limit, its limit.** If
  $x_k \to x$ then every subsequence converges to $x$
  ([[lem-subsequence-inherits-limit]]), so every subsequential limit equals $x$
  by uniqueness of limits ([[lem-limit-unique]]); and $x$ itself is one, taking
  $n_j = j$, which is strictly increasing. So $\operatorname{SL}(x) = \{x\}$. The
  converse fails: $\operatorname{SL}$ being a single point does not force
  convergence, as the unbounded sequence of
  [[cex-unbounded-with-convergent-subsequence]] shows.

- **The subsequential limit set can be empty.** The sequence $x_k = k$ has no
  subsequential limit at all, since every subsequence is unbounded and an
  unbounded sequence does not converge ([[lem-convergent-implies-bounded]]).
  Bolzano-Weierstrass ([[thm-bolzano-weierstrass]]) says exactly that
  boundedness is what rules this out: for a bounded sequence,
  $\operatorname{SL}(x) \ne \emptyset$.

- **It can also be large.** The alternating sequence of
  [[lem-alternating-sequence]] has subsequential limit set $\{-1, 1\}$, and
  [[ex-two-subsequential-limits]] carries out that computation for a sequence
  that converges to neither. The systematic study of $\operatorname{SL}(x)$, in
  particular that it has a greatest and a least element for a bounded sequence,
  belongs to the $\limsup$ page and is not begun here.
