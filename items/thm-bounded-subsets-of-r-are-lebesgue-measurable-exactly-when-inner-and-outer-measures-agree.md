---
id: thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree
kind: theorem
title: "For bounded subsets of $\\mathbb{R}$, Lebesgue measurability is equivalent to equality of inner and outer measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-inner-measure-on-r,
       thm-littlewood-characterisations-of-lebesgue-measurability,
       thm-lebesgue-outer-regularity-for-arbitrary-subsets,
       thm-heine-borel-characterisation-r,
       thm-borel-sets-are-lebesgue-measurable,
       thm-lebesgue-measure-is-a-complete-measure,
       def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.18"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorems 2.24, 2.25 and 2.27"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $E \subseteq \mathbb{R}$ be bounded.
Then $E$ is Lebesgue measurable if and only if

$$\lambda_*(E)=\lambda^*(E),$$

where $\lambda_*(E)$ is the inner measure of [[def-lebesgue-inner-measure-on-r]]
and $\lambda^*(E)$ is the Lebesgue outer measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a bounded set $E \subseteq \mathbb{R}$.

[F1] $\lambda_*(E)=\sup\{\, \lambda(K) : K \subseteq E \text{ and } K \text{ is compact} \,\}$ ([[def-lebesgue-inner-measure-on-r]]).

[L1] Assuming countable choice, a subset of $\mathbb{R}$ is Lebesgue measurable if and only if for every real $\varepsilon > 0$ there is an open $U \supseteq E$ with $\lambda^*(U \setminus E) < \varepsilon$, and if and only if for every real $\varepsilon > 0$ there is a closed $F \subseteq E$ with $\lambda^*(E \setminus F) < \varepsilon$ ([[thm-littlewood-characterisations-of-lebesgue-measurability]], clauses 1 and 3).

[L2] Assuming countable choice, $\lambda^*(E)=\inf\{\, \lambda(U) : U \subseteq \mathbb{R} \text{ open and } E \subseteq U \,\}$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L3] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] Assuming countable choice, $(\mathbb{R},\mathcal{L}(\mathbb{R}),\lambda)$ is a complete measure space ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, assume $E$ is Lebesgue measurable and fix a real $\varepsilon > 0$. By [L1] choose a closed $F \subseteq E$ with $\lambda^*(E \setminus F) < \varepsilon$; since $E$ is bounded, so is $F$, hence [L3] makes $F$ compact. The set $F$ is Borel and therefore measurable by [L4], so $\lambda(F) \le \lambda_*(E) \le \lambda^*(E)$ by [F1]; and $E = F \sqcup (E \setminus F)$ with both pieces measurable by [L4] and [L5], so $\lambda^*(E) = \lambda(E) = \lambda(F) + \lambda(E \setminus F) < \lambda_*(E) + \varepsilon$. As $\varepsilon > 0$ was arbitrary, $\lambda^*(E) \le \lambda_*(E)$; together with $\lambda_*(E) \le \lambda^*(E)$ from [F1], this gives $\lambda_*(E)=\lambda^*(E)$. [F1, L1, L3, L4, L5]

1.2 For the converse implication, assume $\lambda_*(E)=\lambda^*(E)$ and fix a real $\varepsilon > 0$. By [F1] choose a compact $K \subseteq E$ with $\lambda(K) > \lambda_*(E) - \varepsilon/2$, and by [L2] choose an open $U \supseteq E$ with $\lambda(U) < \lambda^*(E) + \varepsilon/2$. The compact set $K$ is Borel by [L3], hence measurable by [L4], and $K \subseteq E \subseteq U$; therefore $U \setminus E \subseteq U \setminus K$, so [L5] gives $\lambda^*(U \setminus E) \le \lambda(U \setminus K) = \lambda(U) - \lambda(K) < \lambda^*(E) - \lambda_*(E) + \varepsilon = \varepsilon$. [F1, L2, L3, L4, L5, choose]

2.1 Step 1.2 gives open supersets of arbitrarily small outer excess, so [L1] makes $E$ Lebesgue measurable. This is the reverse implication. [step 1.2, L1] ∎

## Remarks

- The boundedness hypothesis is used only to turn the closed set $F$ of step 1.1 into a compact set, which is what allows the inner measure to see it.

- On an unbounded measurable set the equality $\lambda_*(E)=\lambda^*(E)$ can be vacuous, since both sides may be $+\infty$.
