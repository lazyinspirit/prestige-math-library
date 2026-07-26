---
id: thm-compact-iff-sequentially-compact-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact iff it is sequentially compact"
status: published
origin: session
deps: [thm-heine-borel-characterisation-r, thm-bolzano-weierstrass, def-open-cover-r, lem-sequential-characterisation-of-closure-r, def-subsequential-limit, def-bounded-set, def-countable-choice, def-open-and-closed-in-r, def-interior-closure-boundary-r, def-sequence, def-real-limit, lem-convergent-implies-bounded, lem-subsequence-inherits-limit, lem-limit-unique, lem-index-map-grows, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "compact $\\iff$ sequentially compact"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact if and only if $K$ is
sequentially compact ([[def-open-cover-r]]).

Neither implication is formal. Both are routed through the characterisation of
compactness by closed and bounded ([[thm-heine-borel-characterisation-r]]), and
the forward implication additionally uses Bolzano-Weierstrass
([[thm-bolzano-weierstrass]]). **The backward implication uses the axiom of
countable choice** ([[def-countable-choice]]): twice, once inside
[[lem-sequential-characterisation-of-closure-r]] when a point of the closure is
turned into a sequence, and once directly in step 2.3, where an unbounded set
supplies one point beyond each natural bound.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$. Sequences are indexed by $\mathbb{N}$, which contains $0$ ([[def-sequence]]).

[L1] $K$ is compact when every open cover has a finite subcover, and sequentially compact when every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[def-open-cover-r]], [[def-subsequential-limit]], [[def-real-limit]]).

[L2] $K$ is compact exactly when $K$ is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] Bolzano-Weierstrass: a sequence $(x_k)$ of reals for which some $M$ satisfies $|x_k| \le M$ at every index has a subsequence converging to some real ([[thm-bolzano-weierstrass]]).

[L4] A point lies in $\overline{K}$ exactly when some sequence with all terms in $K$ converges to it, and $K$ is closed exactly when $\overline{K} = K$, exactly when $K$ is sequentially closed ([[lem-sequential-characterisation-of-closure-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u$ with $\ell \le y \le u$ for all $y \in K$ ([[def-bounded-set]]).

[L6] Countable choice: for a family $(Y_k)_{k \in \mathbb{N}}$ of nonempty sets there is $f$ with domain $\mathbb{N}$ and $f(k) \in Y_k$ for every $k$ ([[def-countable-choice]]).

[L7] A convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]); every subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]); a sequence has at most one limit ([[lem-limit-unique]]); a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L8] Archimedean property: for every real $z$ there is a natural $j \ge 1$ with $z < j$; canonical naturals satisfy $k \cdot 1_{\mathbb{R}} \ge 0$ and are increasing in $k$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]]).

[L9] Absolute value: $|z| \ge z$, $|z| \ge -z$, $|z| \ge 0$, and $|z| = z$ for $z \ge 0$ while $|z| = -z$ for $z < 0$ ([[lem-of-abs-value]]).

[L10] Every nonempty finite set of reals has a maximum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $K$ is compact; then $K$ is closed and bounded by [L2], so [L5] supplies $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Let $(x_k)$ be any sequence with $x_k \in K$ for every $k \in \mathbb{N}$. [assume-hyp, L2, L5]

1.2 For the backward implication assume $K$ is sequentially compact. [assume-hyp, L1]

2.1 The sequence of step 1.1 is bounded: put $M := \max\{|\ell|, |u|\}$ by [L10]; for each $k$, from $\ell \le x_k \le u$ we get $x_k \le u \le |u| \le M$ and $-x_k \le -\ell \le |\ell| \le M$, so $|x_k| \le M$ by [L9]. By [L3] there are a strictly increasing $n$ and a real $L$ with $x_{n_j} \to L$; every term $x_{n_j}$ lies in $K$ and $K$ is closed, so $L \in K$ by [L4]. Hence every sequence in $K$ has a subsequence converging in $K$, that is, $K$ is sequentially compact. [step 1.1, L1, L3, L4, L9, L10]

2.2 A sequentially compact $K$ is closed: let $y \in \overline{K}$; by [L4] there is a sequence $(a_k)$ with $a_k \in K$ for all $k$ and $a_k \to y$; by sequential compactness some subsequence $(a_{n_j})$ converges to a point $z \in K$; but that subsequence also converges to $y$ by [L7], and limits are unique by [L7], so $z = y$ and $y \in K$. Hence $\overline{K} \subseteq K$, so $\overline{K} = K$ and $K$ is closed by [L4]. [step 1.2, L1, L4, L7]

2.3 A sequentially compact $K$ is bounded: suppose it is not. Then for every $k \in \mathbb{N}$ the set $Y_k := \{\, y \in K : y > k \text{ or } y < -k \,\}$ is nonempty, since $Y_k = \varnothing$ would mean $-k \le y \le k$ for every $y \in K$ and make $K$ bounded by [L5]. Use [L6] to fix $f$ with $f(k) \in Y_k$ and put $x_k := f(k)$; then $x_k \in K$, and $|x_k| > k$ for every $k$, because $x_k > k \ge 0$ gives $|x_k| = x_k > k$ while $x_k < -k \le 0$ gives $|x_k| = -x_k > k$ by [L9] and [L8]. By sequential compactness some subsequence $(x_{n_j})$ converges, hence is bounded by some real $M$ with $|x_{n_j}| \le M$ for all $j$ by [L7]; by [L8] fix a natural $j \ge 1$ with $M < j$, and then $|x_{n_j}| > n_j \ge j > M$ by [L7] and [L8], which contradicts $|x_{n_j}| \le M$. So $K$ is bounded. [step 1.2, L1, L5, L6, L7, L8, L9]

3.1 A sequentially compact $K$ is therefore closed by step 2.2 and bounded by step 2.3, hence compact by [L2]. [step 2.2, step 2.3, L2]

4.1 Step 2.1 is the forward implication and step 3.1 the backward one, so for subsets of $\mathbb{R}$ compactness and sequential compactness coincide. [step 2.1, step 3.1] ∎

## Remarks

- **The equivalence is proved, not defined, and it is proved through the order.**
  Both directions pass through [[thm-heine-borel-characterisation-r]], whose
  backward half needs the completeness of $\mathbb{R}$, and the forward
  direction adds [[thm-bolzano-weierstrass]], whose proof spends completeness
  again. Nothing here transfers to a setting where those are unavailable; see
  [[rem-r-native-topology-scope]].

- **Where the choices are spent, and whether they can be avoided.** Step 2.3
  selects one point of $K$ outside $[-k,k]$ for each $k$, and
  [[lem-sequential-characterisation-of-closure-r]] selects one point of $K$ in
  each shrinking neighbourhood. Both are countably many independent selections
  from subsets of $\mathbb{R}$, for which this library has no canonical rule, so
  [[def-countable-choice]] is invoked rather than worked around. The forward
  implication, step 2.1, makes no such selection: the subsequence comes from
  [[thm-bolzano-weierstrass]] as a single object.

- **Sequential compactness is the form used in analysis; compactness is the form
  that is stated without sequences.** The extraction of a convergent subsequence
  is what proofs about continuous functions on $[a,b]$ actually use, while the
  covering definition mentions no sequence and no limit. This theorem is what
  lets a reader move between them for subsets of $\mathbb{R}$, and it is proved
  only there.
