---
id: thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
kind: theorem
title: "Lebesgue outer measure is at most Jordan outer content, and a bounded Jordan measurable set is Lebesgue measurable with Lebesgue measure equal to its Jordan content"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure, thm-lebesgue-null-agrees-with-elementary-nullity-in-rn, def-jordan-inner-and-outer-content, thm-jordan-boundary-criterion, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-of-a-box-of-every-kind, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, def-multidimensional-rectangle-and-volume, def-metric-interior-closure-boundary, def-metric-bounded-diameter, def-metric-topology, def-null-and-content-zero-in-rn, def-measure, prop-measure-monotonicity, thm-finite-and-countable-subadditivity-of-measures, def-nonnegative-extended-series, lem-finite-sum-laws, def-finite-sum, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "Jordan content and Lebesgue measure"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Write $c^*(E)$ and $c_*(E)$ for the Jordan outer and
inner content of a bounded $E \subseteq \mathbb{R}^m$
([[def-jordan-inner-and-outer-content]]). Then:

1. $\lambda_m^*(E) \le c^*(E)$ for **every** bounded $E \subseteq \mathbb{R}^m$,
   Jordan measurable or not;
2. if $E$ is bounded and Jordan measurable, with Jordan content
   $\operatorname{cont}(E) = c_*(E) = c^*(E)$, then $E$ is Lebesgue measurable
   and
   $$\lambda_m(E) \;=\; \operatorname{cont}(E).$$

## Facts & Assumptions

**Given:** A natural number $m \ge 1$, the Axiom of Countable Choice, and a bounded set $E \subseteq \mathbb{R}^m$.

[L1] Assuming countable choice, $\lambda^{\mathrm{cl}}(E) = \lambda_m^*(E)$, the infimum of $\sum_{k=0}^{\infty}\operatorname{vol}[u^k,v^k]$ over countable covers of $E$ by closed rectangles ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]]).

[L2] Assuming countable choice, $\lambda_m^*(E)=0$ if and only if $E$ is null in the covering sense of closed-cube covers ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], [[def-null-and-content-zero-in-rn]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^m)$ is a sigma-algebra, $\lambda_m$ is a complete measure on it and is the restriction of $\lambda_m^*$, and every set of Lebesgue outer measure zero is Lebesgue measurable of measure zero ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}^m$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_m(R) = \prod_{i<m}(b_i-a_i)$, and it gives measure $0$ to all of them whenever $a_i = b_i$ for some $i<m$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L6] A box with a degenerate side is Lebesgue measurable of measure $0$ ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F1] For bounded $E\subseteq\mathbb R^m$ its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$, its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint, and the set is **Jordan measurable** when the contents agree ([[def-jordan-inner-and-outer-content]], [[def-metric-bounded-diameter]]).

[F2] A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its boundary $\partial E$ is null, equivalently has content zero ([[thm-jordan-boundary-criterion]]).

[F3] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ and $\operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j)$ ([[def-multidimensional-rectangle-and-volume]]).

[F4] The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$, the interior is open and contained in $A$, and $A \subseteq \overline{A}$ ([[def-metric-interior-closure-boundary]], [[def-metric-topology]]).

[F5] A **measure** is countably additive on pairwise disjoint measurable sequences ([[def-measure]]), it is monotone ([[prop-measure-monotonicity]]), and it is finitely and countably subadditive ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F6] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]), and for real sequences $\sum_{k<n}a_k \le \sum_{k<n}b_k$ whenever $a_k \le b_k$ throughout ([[lem-finite-sum-laws]], claim 4; [[def-finite-sum]]).

## Proof

**Proof technique:** direct.

1.1 A finite cover of $E$ by axis-parallel rectangles $R_0,\dots,R_{q-1}$ becomes a countable cover by closed rectangles once it is padded with copies of the degenerate rectangle $[0,0]$, whose volume is $0$, and the padded series has the same value, so $\lambda_m^*(E) = \lambda^{\mathrm{cl}}(E) \le \sum_{r<q}\operatorname{vol}(R_r)$; taking the infimum over all finite rectangle covers gives claim 1. [L1, F1, F3, F6]

1.2 Two closed rectangles $R$ and $R'$ with disjoint interiors meet in a set with empty interior, and that intersection is either empty or the closed rectangle whose $i$-th side is $[\max\{a_i,a'_i\},\min\{b_i,b'_i\}]$; a nonempty closed rectangle with empty interior has $\max\{a_i,a'_i\} = \min\{b_i,b'_i\}$ for some $i$, so it is Lebesgue measurable of measure $0$. [L5, L6, F3, F4]

1.3 If $E$ is bounded and Jordan measurable, then $\partial E$ is null in the covering sense, hence $\lambda_m^*(\partial E)=0$ and $E \cap \partial E$ is Lebesgue measurable of measure $0$; $\operatorname{int}(E)$ is open, hence Borel and Lebesgue measurable; and $E = \operatorname{int}(E) \cup (E\cap\partial E)$ because $\operatorname{int}(E) \subseteq E \subseteq \overline{E} = \operatorname{int}(E)\cup\partial E$, so $E$ is Lebesgue measurable. [L2, L3, L4, F2, F4]

2.1 Let $R_0,\dots,R_{q-1}$ be closed rectangles contained in $E$ with pairwise disjoint interiors and put $D_r := R_r \setminus \bigcup_{s<r}R_s$; each $R_r \cap \bigcup_{s<r}R_s$ is a finite union of sets of measure $0$ by step 1.2, hence of measure $0$, so additivity on the decomposition $R_r = D_r \sqcup \big(R_r\cap\bigcup_{s<r}R_s\big)$ gives $\lambda_m(D_r) = \lambda_m(R_r) = \operatorname{vol}(R_r)$, and the $D_r$ are pairwise disjoint measurable sets with union $\bigcup_{r<q}R_r$, so $\lambda_m\big(\bigcup_{r<q}R_r\big) = \sum_{r<q}\operatorname{vol}(R_r)$. [step 1.2, L3, L5, F3, F5]

3.1 For $E$ bounded and Jordan measurable, step 1.3 makes $E$ measurable, step 1.1 gives $\lambda_m(E) = \lambda_m^*(E) \le c^*(E)$, and step 2.1 with monotonicity gives $\sum_{r<q}\operatorname{vol}(R_r) = \lambda_m\big(\bigcup_{r<q}R_r\big) \le \lambda_m(E)$ for every admissible inner family, hence $c_*(E) \le \lambda_m(E)$; since $c_*(E) = c^*(E) = \operatorname{cont}(E)$, the two bounds force $\lambda_m(E) = \operatorname{cont}(E)$. [step 1.1, step 1.3, step 2.1, L3, F1, F5] ∎
