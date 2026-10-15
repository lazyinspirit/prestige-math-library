---
id: thm-lebesgue-measure-of-a-box-of-every-kind
kind: theorem
title: "A box in $\\mathbb{R}^n$ with parameters $a_i\\le b_i$ is Lebesgue measurable of measure $\\prod_{i<n}(b_i-a_i)$, whichever of its faces are included"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, def-multidimensional-rectangle-and-volume, def-half-open-box, def-interval, def-measure, def-finite-sum, lem-finite-sum-laws, cor-archimedean-reciprocal, def-metric-topology, def-lebesgue-outer-measure, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "measure of a box"
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Proposition 2.7"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

([[def-multidimensional-rectangle-and-volume]]). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of [[def-half-open-box]], and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, reals $a_i \le b_i$ for $i<n$, and the sets $R^\circ$, $\overline{R}$ displayed in the Statement.

[L1] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra, $\lambda_n$ is a complete measure on it, every set of Lebesgue outer measure zero is Lebesgue measurable of measure zero, and $\lambda_n(B) = \operatorname{vol}(B)$ for every half-open box $B$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L2] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L3] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]), so it is monotone and countably subadditive ([[def-outer-measure]], [[def-lebesgue-outer-measure]]).

[L4] For a nonempty box $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real, and a box is nonempty exactly when $a_i < b_i$ for every $i < n$ ([[def-half-open-box]]).

[F1] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ and $\operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j)$ ([[def-multidimensional-rectangle-and-volume]]).

[F2] A **measure** on $(X,\mathcal A)$ is a function $\mu:\mathcal A\to[0,+\infty]$ with $\mu(\varnothing)=0$ that is countably additive on pairwise disjoint sequences ([[def-measure]]).

[F3] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F4] $\prod_{k<n}(a_kb_k) = (\prod_{k<n}a_k)(\prod_{k<n}b_k)$; if $a_k \ge 0$ for all $k<n$ then $\prod_{k<n} a_k \ge 0$, with $\prod_{k<n}a_k>0$ when every $a_k>0$; and finite products are defined by the recursion $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$ ([[lem-finite-sum-laws]], claim 6; [[def-finite-sum]]).

[F5] A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a real $r > 0$ with $B(x,r) \subseteq U$; a subset $F$ is **closed** if its complement is open ([[def-metric-topology]]).

[F6] The forms $[a,b)$ and $(a,b]$ are **half-open**, and an interval is **open** when both of its written endpoints are excluded, **closed** when both are included ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 $R^{\circ}$ is open and $\overline{R}$ is closed in $(\mathbb{R}^n,d_2)$, by the same coordinatewise estimate in each case, so both are Borel and hence Lebesgue measurable. [L2, F1, F5, F6]

1.2 A closed rectangle with a degenerate side is Lebesgue null: let $u_i \le v_i$ be reals with $u_{i_0} = v_{i_0} = c$ for some $i_0 < n$, and let $\eta$ be a positive real; the half-open box with parameter pairs $(u_i-1, v_i]$ for $i \ne i_0$ and $(c-\eta, c]$ in coordinate $i_0$ is nonempty, contains $[u,v]$, and has volume $\eta\,C$ where $C := \prod_{i<n}w_i > 0$ with $w_{i_0} := 1$ and $w_i := v_i-u_i+1$ otherwise, so monotonicity of the outer measure gives $\lambda_n^*([u,v]) \le \eta C$ for every positive real $\eta$ and hence $\lambda_n^*([u,v]) = 0$. [L1, L3, L4, F1, F3, F4]

2.1 The difference $\overline{R} \setminus R^{\circ}$ is contained in the union of the $2n$ closed rectangles obtained from $[a,b]$ by replacing the $i$-th side by the degenerate side $[a_i,a_i]$ or by $[b_i,b_i]$, each of which is Lebesgue null by step 1.2, so countable subadditivity of the outer measure, applied to that finite list padded with empty sets, gives $\lambda_n^*(\overline{R}\setminus R^{\circ}) = 0$; every subset of $\overline{R}\setminus R^{\circ}$ is therefore Lebesgue measurable of measure $0$. [step 1.2, L1, L3]

2.2 Suppose instead $a_{i_0} = b_{i_0}$ for some $i_0<n$. Then $R^{\circ} = \varnothing$, the rectangle $\overline{R}$ is Lebesgue null by step 1.2, every $R$ between them is a subset of it and so is measurable of measure $0$, and the product $\prod_{i<n}(b_i-a_i)$ has the factor $0$ and is therefore $0$ as well. [step 1.2, L1, F4]

3.1 Suppose first that $a_i < b_i$ for every $i<n$. Then $B(a,b)$ is a nonempty half-open box with $R^{\circ} \subseteq B(a,b) \subseteq \overline{R}$ and $\lambda_n(B(a,b)) = \operatorname{vol}(B(a,b)) = \prod_{i<n}(b_i-a_i)$. For $R$ with $R^{\circ}\subseteq R\subseteq\overline{R}$, both $R \setminus B(a,b)$ and $B(a,b)\setminus R$ are contained in $\overline{R}\setminus R^{\circ}$, hence are measurable of measure $0$ by step 2.1, so $R = \big(B(a,b)\setminus(B(a,b)\setminus R)\big)\cup\big(R\setminus B(a,b)\big)$ is measurable, and additivity on the two disjoint decompositions $R = (R\cap B(a,b)) \sqcup (R\setminus B(a,b))$ and $B(a,b) = (R\cap B(a,b)) \sqcup (B(a,b)\setminus R)$ gives $\lambda_n(R) = \lambda_n(R\cap B(a,b)) = \lambda_n(B(a,b))$. [step 2.1, L1, L4, F2]

4.1 Steps 3.1 and 2.2 exhaust the two cases and give the displayed value in each, and step 1.1 supplies the Borel and measurability clauses for $R^{\circ}$ and $\overline{R}$. [step 1.1, step 2.2, step 3.1] ∎
