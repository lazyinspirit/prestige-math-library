---
id: thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes
kind: theorem
title: "Every open subset of $\\mathbb{R}^n$ is the union of a countable pairwise disjoint family of dyadic cubes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dyadic-cube-in-rn, lem-dyadic-cubes-of-one-generation-partition-rn, lem-two-dyadic-cubes-are-nested-or-disjoint, def-metric-topology, lem-metrics-on-rn, def-metric-ball, def-countable, thm-rational-points-and-boxes-in-rn, thm-product-of-countable, lem-subset-of-countable, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, def-half-open-box, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-integer-power]
justified_by: []
aliases: []
landmark: true
short: "dyadic decomposition of an open set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Lemma 1.2.11"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Proposition 2.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let $U \subseteq \mathbb{R}^n$ be open in the metric topology
of $(\mathbb{R}^n,d_2)$ ([[def-metric-topology]], [[lem-metrics-on-rn]]). Then
there is an at most countable family $\mathcal{M}$ of pairwise disjoint dyadic
cubes ([[def-dyadic-cube-in-rn]], [[def-countable]]) with

$$U \;=\; \bigcup \mathcal{M} .$$

For $U = \varnothing$ the family is empty. No choice principle is used: the cube
attached to a point is the one of least generation that fits inside $U$, and
least is a definition.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$ and an open subset $U \subseteq \mathbb{R}^n$.

[L1] Every $x \in \mathbb{R}^n$ lies in exactly one dyadic cube of generation $k$ ([[lem-dyadic-cubes-of-one-generation-partition-rn]]).

[L2] If $Q$ and $Q'$ are dyadic cubes of generations $k \le k'$ and $Q \cap Q' \ne \varnothing$, then $Q' \subseteq Q$ ([[lem-two-dyadic-cubes-are-nested-or-disjoint]]).

[L3] $Q_{k,m} = \{\, x \in \mathbb{R}^n : m_i 2^{-k} < x_i \le (m_i+1)2^{-k} \text{ for every } i<n \,\}$, and every dyadic cube is nonempty ([[def-dyadic-cube-in-rn]], [[def-integer-power]]).

[L4] A nonempty box determines its parameter pair, since $B$ determines $a_i$ and $b_i$ for every $i$ ([[def-half-open-box]]).

[F1] A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a real $r > 0$ with $B(x,r) \subseteq U$, where $B(x,r) := \{\, y \in X : d(x,y) < r \,\}$ ([[def-metric-topology]], [[def-metric-ball]]).

[F2] $d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }$ and $d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}$ are metrics on $\mathbb{R}^n$ for $n \ge 1$ ([[lem-metrics-on-rn]]).

[F3] For every $x \in \mathbb{R}^{n}$, $\lVert x\rVert_2 \le \lVert x\rVert_1$ and $\lVert x\rVert_1 \le n\,\lVert x\rVert_\infty$, $n$ being the canonical natural of $\mathbb{R}$; and $\lVert x-y\rVert_2 = d_2(x,y)$, $\lVert x-y\rVert_\infty = d_\infty(x,y)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], claim 3; [[lem-p-norms-are-norms-and-induce-the-published-metrics]], claim 3; [[def-p-norms-on-rn]]).

[F4] If $|r| < 1$ then $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]], claim 1; [[def-real-limit]]).

[F5] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F6] The set $\mathbb Q^n$ is countable and dense in $\mathbb R^n$ ([[thm-rational-points-and-boxes-in-rn]]).

[F7] If $A$ and $B$ are at most countable then so is $A \times B$ ([[thm-product-of-countable]]); and if $A$ is at most countable and $B \subseteq A$ then $B$ is at most countable ([[lem-subset-of-countable]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 The set $\mathcal{D}$ of all dyadic cubes is at most countable: each of its members is nonempty and so determines its parameter pair, whose entries $m_i2^{-k}$ and $(m_i+1)2^{-k}$ are rational, so the assignment of a cube to that pair is an injection of $\mathcal{D}$ into $\mathbb{Q}^n \times \mathbb{Q}^n$, a countable set, and $\mathcal{D}$ is therefore equinumerous with an at most countable subset of it. [L3, L4, F6, F7]

1.2 For every $x \in U$ there is a natural number $k$ such that the generation-$k$ dyadic cube containing $x$ is a subset of $U$: openness supplies a real $r>0$ with $B(x,r) \subseteq U$; since $(2^{-k})_{k \in \mathbb{N}}$ is null there is $k$ with $2^{-k} < r/n$; and every $y$ in the generation-$k$ cube containing $x$ has $|y_i-x_i| < 2^{-k}$ in each coordinate, because $x_i$ and $y_i$ lie in one parameter interval of length $2^{-k}$, so $d_\infty(x,y) < 2^{-k}$ and $d_2(x,y) \le n\,d_\infty(x,y) < r$. [L1, L3, F1, F2, F3, F4]

2.1 For $x \in U$ let $k(x)$ be the least natural number provided by step 1.2 and let $Q_x$ be the generation-$k(x)$ dyadic cube containing $x$, which is unique; then $x \in Q_x \subseteq U$, and $Q_x$ is maximal among the dyadic cubes contained in $U$, for if $Q_x \subseteq Q' \subseteq U$ with $Q'$ of generation $k'$, then $Q'$ contains $x$ and is therefore the generation-$k'$ cube containing $x$, so $k' \ge k(x)$ by minimality, and then $Q_x \cap Q' \ne \varnothing$ with $k(x) \le k'$ gives $Q' \subseteq Q_x$ and hence $Q' = Q_x$. [step 1.2, L1, L2, L3, F5]

3.1 Put $\mathcal{M} := \{\, Q_x : x \in U \,\}$: its members are dyadic cubes contained in $U$ and every $x \in U$ lies in one of them, so $\bigcup\mathcal{M} = U$; two members meeting each other are nested by [L2], and each being maximal in $U$ they are equal, so the members are pairwise disjoint; and $\mathcal{M} \subseteq \mathcal{D}$ is at most countable by step 1.1. [step 1.1, step 2.1, L2, F7] ∎
