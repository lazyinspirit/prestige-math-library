---
id: lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes
kind: lemma
title: "A finite-measure measurable set in $\\mathbb{R}^n$ is approximable in measure by a finite union of boxes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes, thm-continuity-from-below-for-measures, prop-measure-monotonicity, prop-measure-of-a-set-difference]
landmark: false
proof_strategy: "Use outer regularity to enlarge the set by an open set of small excess, decompose that open set into countably many disjoint dyadic cubes, and truncate the sum by continuity from below to a finite union. This is the exact regularity step the box-step density argument needs."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Assume the Axiom of Countable Choice.

Let $E \subseteq \mathbb{R}^n$ be Lebesgue measurable with
$\lambda_n(E) < \infty$. For every $\varepsilon > 0$ there is a finite union of
boxes $B$ such that

$$
\lambda_n(E \triangle B) < \varepsilon.
$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a natural number $n \ge 1$, a Lebesgue measurable set $E \subseteq \mathbb{R}^n$ with finite measure, and $\varepsilon > 0$.

[L1] Outer regularity gives an open set $U \supseteq E$ with $\lambda_n(U \setminus E) < \varepsilon/2$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L2] Every open subset of $\mathbb{R}^n$ is a countable disjoint union of dyadic cubes ([[thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes]]).

[L3] Continuity from below applies to increasing unions of measurable sets ([[thm-continuity-from-below-for-measures]]).

[L4] Measure is monotone and $\lambda_n(U \setminus F) = \lambda_n(U) - \lambda_n(F)$ when $F \subseteq U$ and $\lambda_n(U) < \infty$ ([[prop-measure-monotonicity]], [[prop-measure-of-a-set-difference]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose an open set $U \supseteq E$ with [L1, L4, given, choose] $\lambda_n(U \setminus E) < \varepsilon/2$. Because $\lambda_n(E) < \infty$, monotonicity gives $$ \lambda_n(U) \le \lambda_n(E) + \lambda_n(U \setminus E) < \infty. $$ [L1, L4, given, choose]

1.2 Write $U = \bigsqcup_{k \ge 1} Q_k$ as a countable pairwise disjoint union [L2, L3, L4, choose] of dyadic cubes by [L2], and set $B_m := \bigcup_{k=1}^m Q_k$. Then $B_m \uparrow U$, so [L3] gives $\lambda_n(B_m) \to \lambda_n(U)$. Hence for some $m$, $$ \lambda_n(U \setminus B_m) = \lambda_n(U) - \lambda_n(B_m) < \varepsilon/2. $$ [L2, L3, L4, choose]

2.1 Put $B := B_m$. Since $E \subseteq U$ and $B \subseteq U$, [step 1.1, step 1.2, L4, algebra] $$ E \triangle B \subseteq (U \setminus E) \cup (U \setminus B), $$ so $$ \lambda_n(E \triangle B) \le \lambda_n(U \setminus E) + \lambda_n(U \setminus B) < \varepsilon. $$ The set $B$ is a finite union of boxes because each dyadic cube is a box. [step 1.1, step 1.2, L4, algebra] ∎
