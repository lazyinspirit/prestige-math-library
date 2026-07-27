---
id: thm-compact-null-is-content-zero
kind: theorem
title: "For a compact subset of $\\mathbb{R}$, measure zero and content zero coincide"
status: published
origin: session
deps: [def-measure-zero-and-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-interval, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "compact: null $\\Leftrightarrow$ content zero"
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
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]), equivalently
closed and bounded ([[thm-heine-borel-characterisation-r]]). Then

$$K \text{ has measure zero} \quad \Longleftrightarrow \quad K \text{ has content zero}$$

([[def-measure-zero-and-content-zero]]).

The implication from content zero to measure zero is
[[lem-content-zero-implies-null]] and needs no hypothesis on $K$. The other
direction is the one that uses compactness, and it uses it exactly as
[[lem-nondegenerate-interval-is-not-null]] does: a countable cover is enlarged to
an open cover at an arbitrarily small cost in total length, and compactness
reduces the open cover to a finite one.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \eta$ for every $i$; $A$ has content zero when the same holds with a finite list ([[def-measure-zero-and-content-zero]]).

[L2] A set of content zero is null ([[lem-content-zero-implies-null]]).

[L3] $[c,d]$ has length $d - c \ge 0$ for $c \le d$; $(c,d)$ is the open interval with the same endpoints and is contained in $[c,d]$ ([[def-interval]]).

[L4] Every open interval is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L5] $K$ is compact: from every family of open sets whose union contains $K$ one can extract $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family with $K \subseteq U_0 \cup \dots \cup U_m$; compactness is equivalent to being closed and bounded ([[def-open-cover-r]], [[thm-heine-borel-characterisation-r]]).

[L6] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling, splitting and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$, $8 > 0$ and $t \cdot 8^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 One direction is immediate: if $K$ has content zero then $K$ is null by [L2], with no hypothesis on $K$ used. It remains to prove the converse for compact $K$. [L2, suffices: only the forward direction remains]

2.1 Assume $K$ is null and let the real $\varepsilon > 0$ be given. By [L1] applied with $\eta := \varepsilon \cdot 2^{-1} > 0$ fix sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $K \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon \cdot 2^{-1}$ for every $i \in \mathbb{N}$. [step 1.1, given, L1, L9, choose]

3.1 Put $\delta_k := \varepsilon \cdot 8^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$, an open set by [L4] containing $[a_k,b_k]$ by [L3] and [L9]. Hence $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $K$, and the closed interval $[a_k - \delta_k,\ b_k + \delta_k]$ has length $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 4^{-1} \cdot \theta^{k}$ by [L3] and [L9]. [step 2.1, L3, L4, L6, L9]

4.1 By [L5] there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of that family covering $K$, and by [L8] there is $N \in \mathbb{N}$ with $k_t \le N$ for every $t \le m$; then $K \subseteq \bigcup_{k \le N} J_k \subseteq \bigcup_{k \le N}[a_k - \delta_k,\ b_k + \delta_k]$ by [L3]. [step 3.1, L3, L5, L8, choose]

5.1 The total length of that finite list is $\sum_{k \le N}\big((b_k - a_k) + \varepsilon \cdot 4^{-1}\theta^{k}\big) = \sum_{k<N+1}(b_k - a_k) + \varepsilon \cdot 4^{-1}\sum_{k<N+1}\theta^{k} \le \varepsilon \cdot 2^{-1} + \varepsilon \cdot 4^{-1} \cdot 2 = \varepsilon$, by [L7], step 2.1, [L6] and [L9]. [step 2.1, step 3.1, step 4.1, L6, L7, L9]

6.1 So for every real $\varepsilon > 0$ the finite list of step 4.1 covers $K$ with total length at most $\varepsilon$, which by [L1] is exactly the statement that $K$ has content zero; together with step 1.1 the two notions coincide on compact sets. [step 1.1, step 4.1, step 5.1, L1] ∎

## Remarks

- **Compactness, not boundedness, is what does the work.**
  $\mathbb{Q} \cap [0,1]$ is bounded and null and does not have content zero
  ([[cex-null-set-not-of-content-zero]]); it fails to be closed, and the finite
  subcover step is exactly what it cannot supply.

- **The theorem is what makes content zero usable at all.** Every set to which
  content zero is applied on this page is compact: the Cantor set
  ([[thm-cantor-set-properties]]) and the Smith-Volterra-Cantor set
  ([[def-fat-cantor-set]]) are both closed and bounded, so for them the two
  notions may be used interchangeably, and the finite form is the one that
  combines with [[lem-finite-interval-cover-total-length]].

- **The cost of opening up the cover is $\varepsilon \cdot 2^{-1}$, chosen in
  advance.** Splitting the budget in half before the enlargement, rather than
  after, is what keeps the final total at $\varepsilon$ exactly; the same
  bookkeeping appears in [[lem-nondegenerate-interval-is-not-null]] and in
  [[thm-countable-union-of-null-is-null]].
