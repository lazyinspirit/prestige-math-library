---
id: thm-countable-union-of-null-is-null
kind: theorem
title: "A countable union of measure-zero sets has measure zero, by countable choice"
status: published
origin: session
deps: [def-measure-zero-and-content-zero, def-countable, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-injection-surjection-bijection, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable union of null sets is null"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each of
measure zero ([[def-measure-zero-and-content-zero]]). Then

$$\bigcup_{n \in \mathbb{N}} A_n \quad \text{has measure zero.}$$

By the padding convention of [[def-measure-zero-and-content-zero]] and
[[def-countable]] the same conclusion covers the union of an at most countable
family of null sets, a finite family being extended by copies of $\varnothing$.

**The hypothesis $\mathrm{AC}_\omega$ is spent at exactly one step, step 2.1
below**, where one covering sequence is selected for every $A_n$ at once. Each
$A_n$ has many such covers and nullity provides no rule for singling one out.
Nothing else in the proof selects anything: the diagonal enumeration and the
estimate are formulas.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n \in \mathbb{N}}$ of null subsets of $\mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[A1] The Axiom of Countable Choice: every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets has a function $f$ on $\mathbb{N}$ with $f(n) \in X_n$ for every $n$ ([[def-countable-choice]]).

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<n}(b_k - a_k) \le \eta$ for every $n$ ([[def-measure-zero-and-content-zero]]).

[L2] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, with inverse $J^{-1}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L3] Powers and the geometric series: $\theta^0 = 1$, $\theta^{m+1} = \theta^m \theta$, $\theta^m > 0$, and $\sum_{m=0}^{\infty}\theta^m = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L4] Finite sums: additivity, scaling, splitting and monotonicity in the terms; a sum of nonnegative terms is nonnegative and does not decrease when further nonnegative terms are adjoined, so a sum of finitely many nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the whole rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $t \cdot 2^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given and put $\varepsilon_n := \varepsilon \cdot \theta^{n+1}$ for $n \in \mathbb{N}$, a positive real by [L3] and [L6]. Let $X_n$ be the set of all pairs of sequences $\big((a_k),(b_k)\big)$ with $a_k \le b_k$ for every $k$, $A_n \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon_n$ for every $i \in \mathbb{N}$. Each $A_n$ is null, so each $X_n$ is nonempty by [L1]. [given, L1, L3, L6]

2.1 By [A1] fix $f$ with $f(n) \in X_n$ for every $n$, and write $f(n) = \big((a^n_k)_k, (b^n_k)_k\big)$. This is the one and only application of countable choice in the proof. [step 1.1, A1, choose]

3.1 By [L2] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define sequences $(c_j)$ and $(d_j)$ by $c_{J(m,k)} := a^m_k$ and $d_{J(m,k)} := b^m_k$, which is a total definition because $J$ is a bijection; then $c_j \le d_j$ for every $j$. Every $x \in \bigcup_n A_n$ lies in some $A_m$, hence in some $[a^m_k, b^m_k] = [c_{J(m,k)}, d_{J(m,k)}]$ by step 2.1, so $\bigcup_n A_n \subseteq \bigcup_j [c_j, d_j]$. [step 2.1, L2]

4.1 Fix $i \in \mathbb{N}$. The pairs $J^{-1}(j)$ for $j < i$ are finitely many and pairwise distinct, so by [L5] there is $N \in \mathbb{N}$ with both coordinates of each of them at most $N$; since all the terms $d_j - c_j$ are nonnegative, [L4] gives $\sum_{j<i}(d_j - c_j) \le \sum_{m \le N}\Big(\sum_{k \le N}(b^m_k - a^m_k)\Big)$. For each $m \le N$ the inner sum is $\sum_{k < N+1}(b^m_k - a^m_k) \le \varepsilon_m$ by step 2.1, so the whole is at most $\sum_{m \le N} \varepsilon \cdot \theta^{m+1} = \varepsilon \cdot \theta \sum_{m<N+1}\theta^{m} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, by [L3], [L4] and [L6]. [step 3.1, L3, L4, L5, L6]

5.1 Steps 3.1 and 4.1 exhibit, for the given $\varepsilon > 0$, sequences of closed intervals covering $\bigcup_n A_n$ with every partial total length at most $\varepsilon$; since $\varepsilon > 0$ was arbitrary, [L1] gives that $\bigcup_n A_n$ has measure zero. [step 1.1, step 3.1, step 4.1, L1] ∎

## Remarks

- **Why the slack is geometric.** The $n$-th set is covered to within
  $\varepsilon \cdot 2^{-n-1}$ and the budgets sum to $\varepsilon$, exactly as in
  [[lem-countable-sets-are-null]], of which this theorem is the abstract form:
  applying it to the singletons $\{x_n\}$ of a listing recovers that lemma, at
  the cost of an appeal to $\mathrm{AC}_\omega$ that the direct proof avoids.
  The expenditure is the same one, and made for the same reason, as in
  [[thm-countable-union-of-countable]].

- **No rearrangement theorem is used, and none is available here.** The estimate
  is made on finite partial sums only, and every finite partial sum of the
  doubly-indexed family is compared with a sum over a finite rectangle, which is a
  finite rearrangement. The theory of rearranging infinite series is not in the
  reading order at this point, and the proof is arranged so as not to need it.

- **The bound is on the total length, not on the number of intervals.** The
  combined cover is countable even when each $A_n$ is covered by infinitely many
  intervals, which is exactly what [[thm-n-cross-n-countable]] supplies. Nothing
  analogous holds for content zero: a countable union of sets of content zero
  need not have content zero, since $\mathbb{Q} \cap [0,1]$ is such a union
  ([[cex-null-set-not-of-content-zero]]).

- **This is where the two smallness notions of the page separate cleanly.** A
  countable union of null sets is null, whereas a countable union of nowhere
  dense sets is meager and, by [[thm-baire-category-r]], never all of
  $\mathbb{R}$; and yet $\mathbb{R}$ is the union of a meager set and a null set
  ([[cex-meager-set-of-full-measure]]).
