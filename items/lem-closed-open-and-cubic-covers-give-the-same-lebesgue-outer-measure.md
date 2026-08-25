---
id: lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure
kind: lemma
title: "Countable covers by closed boxes, by open boxes and by closed cubes all compute Lebesgue outer measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lebesgue-outer-measure, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes, lem-dyadic-cubes-of-one-generation-partition-rn, def-dyadic-cube-in-rn, def-multidimensional-rectangle-and-volume, def-half-open-box, def-elementary-set-in-rn, thm-elementary-volume-is-well-defined, def-nonnegative-extended-series, def-measure, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-geometric-series, lem-finite-sum-laws, def-finite-sum, def-integer-power, def-countable, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "closed, open and cubic covers agree"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). For $u,v \in \mathbb{R}^n$ with $u_i \le v_i$ for
every $i<n$ write $[u,v]$ for the closed rectangle and
$V(u,v) := \{\, x \in \mathbb{R}^n : u_i<x_i<v_i \text{ for every } i<n \,\}$ for
the open box, both of size $\prod_{i<n}(v_i-u_i)$
([[def-multidimensional-rectangle-and-volume]]); a **closed cube** of side
$\ell \ge 0$ is a set $\prod_{i<n}[c_i,c_i+\ell]$, of size $\ell^{\,n}$. For
$E \subseteq \mathbb{R}^n$ put

$$\lambda^{\mathrm{cl}}(E) := \inf\Big\{\sum_{k=0}^{\infty}\operatorname{vol}[u^k,v^k] \;:\; E \subseteq \bigcup_{k}[u^k,v^k]\Big\},\qquad \lambda^{\mathrm{op}}(E) := \inf\Big\{\sum_{k=0}^{\infty}\prod_{i<n}(v^k_i-u^k_i) \;:\; E \subseteq \bigcup_{k}V(u^k,v^k)\Big\},$$

$$\lambda^{\mathrm{cb}}(E) := \inf\Big\{\sum_{k=0}^{\infty}\ell_k^{\,n} \;:\; E \subseteq \bigcup_{k}\prod_{i<n}[c^k_i,\,c^k_i+\ell_k]\Big\},$$

infima over countable covers of the stated kind, which exist because
$\mathbb{R}^n$ is covered by the rectangles $[-k\mathbf{1},k\mathbf{1}]$, by the
open boxes $V(-k\mathbf{1},k\mathbf{1})$ and by the cubes
$\prod_i[-k,-k+2k]$. Then

$$\lambda^{\mathrm{cl}}(E) \;=\; \lambda^{\mathrm{op}}(E) \;=\; \lambda^{\mathrm{cb}}(E) \;=\; \lambda_n^*(E).$$

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a subset $E \subseteq \mathbb{R}^n$, and the three infima displayed in the Statement.

[L1] $\lambda_n^*(E) := \inf\{\sum_{k=0}^{\infty}\mu_0(A_k) : A_k \in \mathcal{E}_n$ for every $k$ and $E \subseteq \bigcup_k A_k\}$ ([[def-lebesgue-outer-measure]], [[def-elementary-set-in-rn]]).

[L2] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$; a box is nonempty exactly when $a_i<b_i$ for every $i<n$; $\operatorname{vol}(\varnothing) := 0$; and for a nonempty box with real parameters $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ ([[def-half-open-box]]).

[L3] Assuming countable choice, $\lambda_n^*(A)=\mu_0(A)$ for every elementary set $A$, and $\lambda_n^*$ is an outer measure ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]), $\mu_0$ being the elementary volume of [[thm-elementary-volume-is-well-defined]].

[L4] Assuming countable choice, $\lambda_n^*(E) = \inf\{\lambda_n(U) : U$ open and $E \subseteq U\}$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L5] Every open $U \subseteq \mathbb{R}^n$ is the union of an at most countable family of pairwise disjoint dyadic cubes ([[thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes]]), each of the form $Q_{k,m} = \{\, x : m_i 2^{-k} < x_i \le (m_i+1)2^{-k}\ (i<n) \,\}$ ([[def-dyadic-cube-in-rn]], [[def-integer-power]]).

[L6] $\operatorname{vol}(Q_{k,m}) = 2^{-kn}$ ([[lem-dyadic-cubes-of-one-generation-partition-rn]]).

[L7] Assuming countable choice, $\lambda_n$ is a measure on the sigma-algebra $\mathcal{L}(\mathbb{R}^n)$ with $\lambda_n(B)=\operatorname{vol}(B)$ for every half-open box ([[thm-lebesgue-measure-is-a-complete-measure]]), so it is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[F1] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ and $\operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j)$ ([[def-multidimensional-rectangle-and-volume]]).

[F2] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

[F3] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F4] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F5] If $|r| < 1$ then $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$ ([[thm-geometric-series]]).

[F6] For sequences of reals, $\sum_{k<n}(a_k+b_k) = \sum_{k<n}a_k+\sum_{k<n}b_k$; $\sum_{k<n}\lambda a_k=\lambda\sum_{k<n}a_k$; if $a_k \le b_k$ whenever $0\le k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$; and $\prod_{k<n}(a_kb_k)=(\prod_{k<n}a_k)(\prod_{k<n}b_k)$ ([[lem-finite-sum-laws]], claims 1, 2, 4 and 6; [[def-finite-sum]]).

[F7] An at most countable family may always be presented as a sequence ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 For a natural number $r$, reals $0 \le p_i \le q_i$ $(i<r)$ and a real $V \ge 1$ with $q_i \le V$ for every $i<r$, one has $\prod_{i<r}q_i - \prod_{i<r}p_i \le V^{\,r}\sum_{i<r}(q_i-p_i)$: at $r=0$ both products are $1$ and both sides are $0$, and the passage from $r$ to $r+1$ uses $\prod_{i<r+1}q_i-\prod_{i<r+1}p_i = q_r\big(\prod_{i<r}q_i-\prod_{i<r}p_i\big)+(q_r-p_r)\prod_{i<r}p_i$ with $\prod_{i<r}p_i \le V^{\,r}$, so the estimate follows by induction on $r$. [F1, F6]

1.2 For real $u_i \le v_i$ one has $V(u,v) \subseteq B(u,v) \subseteq [u,v]$ and $\operatorname{vol}B(u,v)=\operatorname{vol}[u,v]=\prod_{i<n}(v_i-u_i)$, the box being empty and the product zero together when some $u_i=v_i$; moreover $[u,v] \subseteq V(u-\theta\mathbf{1},\,v+\theta\mathbf{1})$ for every real $\theta>0$, whose size is $\prod_{i<n}(v_i-u_i+2\theta)$, and a closed cube of side $\ell$ is the closed rectangle $[c,c+\ell\mathbf{1}]$ of size $\ell^{\,n}$. [L2, F1, F6]

2.1 $\lambda^{\mathrm{cl}}(E) \le \lambda^{\mathrm{cb}}(E)$, because every closed-cube cover is a closed-rectangle cover with the same terms. [step 1.2, F1]

2.2 $\lambda_n^*(E) \le \lambda^{\mathrm{op}}(E)$, because an open-box cover $E \subseteq \bigcup_kV(u^k,v^k)$ gives the elementary cover $E \subseteq \bigcup_kB(u^k,v^k)$ whose covering cost $\sum_k\mu_0(B(u^k,v^k))$ has exactly the same terms. [step 1.2, L1, L2, L3]

2.3 $\lambda^{\mathrm{op}}(E) \le \lambda^{\mathrm{cl}}(E)$: given a closed-rectangle cover and a real $\varepsilon>0$, let $m_k$ be the least natural number with $\prod_{i<n}\big(v^k_i-u^k_i+2/(m_k+1)\big) \le \operatorname{vol}[u^k,v^k]+\varepsilon 2^{-k}$, which exists by step 1.1 with $V$ a real at least $1$ bounding all $v^k_i-u^k_i+2$ and by the Archimedean property; the open boxes $V\big(u^k-\theta_k\mathbf{1},v^k+\theta_k\mathbf{1}\big)$ with $\theta_k := 1/(m_k+1)$ cover $E$, and each partial sum of their sizes is at most $\sum_{k<N}\operatorname{vol}[u^k,v^k]+\varepsilon\sum_{k<N}2^{-k} \le \sum_{k=0}^{\infty}\operatorname{vol}[u^k,v^k]+2\varepsilon$, so $\lambda^{\mathrm{op}}(E)$ is at most that closed cover's total plus $2\varepsilon$, for every positive real $\varepsilon$. [step 1.1, step 1.2, F2, F3, F4, F5, F6]

2.4 $\lambda^{\mathrm{cb}}(E) \le \lambda_n^*(E)$: the inequality is trivial when $\lambda_n^*(E)=+\infty$, and otherwise, given a real $\varepsilon>0$, outer regularity supplies an open $U \supseteq E$ with $\lambda_n(U) \le \lambda_n^*(E)+\varepsilon$, the dyadic decomposition writes $U$ as a disjoint union of an at most countable family of dyadic cubes, presented as a sequence $(Q_{k_j,m^j})_{j}$ and padded with copies of $\varnothing$ if it is finite, countable additivity gives $\sum_j\lambda_n(Q_{k_j,m^j}) = \lambda_n(U)$, and each $Q_{k_j,m^j}$ is contained in the closed cube $\prod_{i<n}\big[m^j_i2^{-k_j},\,m^j_i2^{-k_j}+2^{-k_j}\big]$ of side $2^{-k_j}$ and size $2^{-k_jn} = \lambda_n(Q_{k_j,m^j})$, a padding term contributing the degenerate cube of side $0$. [step 1.2, L4, L5, L6, L7, F1, F7]

3.1 The four quantities therefore satisfy $\lambda^{\mathrm{cl}}(E) \le \lambda^{\mathrm{cb}}(E) \le \lambda_n^*(E) \le \lambda^{\mathrm{op}}(E) \le \lambda^{\mathrm{cl}}(E)$, so all four are equal. [step 2.1, step 2.2, step 2.3, step 2.4] ∎
