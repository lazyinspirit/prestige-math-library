---
id: thm-littlewood-characterisations-of-lebesgue-measurability
kind: theorem
title: "Assuming countable choice, four equivalent descriptions of a Lebesgue measurable subset of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-lebesgue-measurable-sets-have-small-open-excess, lem-small-open-excess-implies-lebesgue-measurable, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, def-g-delta-and-f-sigma-in-a-topological-space, thm-lebesgue-outer-regularity-for-arbitrary-subsets, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-metric-topology, cor-heine-borel-in-the-product-topology, cor-archimedean-reciprocal, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "Littlewood characterisations"
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercises 1.2.7 and 1.2.19"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorems 2.24, 2.25 and 2.27"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 1.6"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]) and let $E \subseteq \mathbb{R}^n$. Then $E$ is
Lebesgue measurable ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]) if
and only if each of the following four conditions holds, and the four are
equivalent to one another.

1. **Open excess.** For every real $\varepsilon > 0$ there is an open
   $U \supseteq E$ with $\lambda_n^*(U\setminus E) < \varepsilon$.
2. **$G_\delta$ minus null.** There are a $G_\delta$ set $G$ and a set $Z$ with
   $\lambda_n^*(Z) = 0$ and $E = G\setminus Z$
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]).
3. **Closed deficit.** For every real $\varepsilon > 0$ there is a closed
   $F \subseteq E$ with $\lambda_n^*(E\setminus F) < \varepsilon$.
4. **$F_\sigma$ plus null.** There are an $F_\sigma$ set $H$ and a set $W$ with
   $\lambda_n^*(W) = 0$ and $E = H\cup W$.

Each condition is stated for sets of infinite measure as well as finite ones,
which is why the excess and the deficit are measured by the outer measure of a
difference rather than by a difference of measures.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a subset $E \subseteq \mathbb{R}^n$.

[L1] Assuming countable choice, for every Lebesgue measurable $E$ and every real $\varepsilon>0$ there is an open $U$ with $E \subseteq U$ and $\lambda_n^*(U \setminus E) < \varepsilon$ ([[lem-lebesgue-measurable-sets-have-small-open-excess]]).

[L2] Assuming countable choice, a set admitting open supersets of arbitrarily small outer excess is $G\setminus Z$ with $G$ a $G_\delta$ containing it and $\lambda_n^*(Z)=0$, and is Lebesgue measurable ([[lem-small-open-excess-implies-lebesgue-measurable]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra, $\lambda_n$ is a complete measure on it, and every $S$ with $\lambda_n^*(S)=0$ is Lebesgue measurable of measure $0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[L6] Assuming countable choice, $\lambda_n^*(E) = \inf\{\lambda_n(U) : U$ open and $E \subseteq U\}$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[F1] $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with $A = \bigcap_{n \in \mathbb{N}} V_n$, and an **$F_\sigma$ set of $X$** when there is a sequence $(F_n)_{n \in \mathbb{N}}$ of closed subsets with $A = \bigcup_{n \in \mathbb{N}} F_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F2] A subset $F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is open ([[def-metric-topology]]), and the product topology on $\mathbb{R}^n$ is the metric topology of $d_2$ ([[cor-heine-borel-in-the-product-topology]], claim 1).

[F3] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F4] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Measurability implies condition 1, which is the cited lemma on the open excess of a measurable set. [L1]

1.2 Condition 1 implies condition 2, which is the first clause of the cited lemma on small open excess. [L2]

1.3 Condition 2 implies measurability: $G$ is a countable intersection of open sets, hence Borel and measurable; $Z$ has outer measure $0$, hence is measurable; so $E = G\setminus Z$ is measurable. [L3, L4, F1]

1.4 Condition 4 implies measurability, by the same argument read for unions: $H$ is a countable union of closed sets, hence Borel and measurable, $W$ is measurable because $\lambda_n^*(W)=0$, and $E = H\cup W$ is measurable. [L3, L4, F1]

2.1 Measurability implies condition 3: the complement $\mathbb{R}^n\setminus E$ is measurable, so for a real $\varepsilon>0$ step 1.1 supplies an open $U \supseteq \mathbb{R}^n\setminus E$ with $\lambda_n^*\big(U\setminus(\mathbb{R}^n\setminus E)\big)<\varepsilon$; then $F := \mathbb{R}^n\setminus U$ is closed, $F \subseteq E$, and $E\setminus F = E\cap U = U\setminus(\mathbb{R}^n\setminus E)$, so $\lambda_n^*(E\setminus F)<\varepsilon$. [step 1.1, L3, F2]

3.1 Condition 3 implies condition 4: for each $m \in \mathbb{N}$ the family of closed $F \subseteq E$ with $\lambda_n^*(E\setminus F)<1/(m+1)$ is nonempty, so countable choice selects such an $F_m$; then $H := \bigcup_m F_m$ is an $F_\sigma$ set with $H \subseteq E$, and $W := E\setminus H \subseteq E\setminus F_m$ gives $\lambda_n^*(W)\le 1/(m+1)$ for every $m$, hence $\lambda_n^*(W)=0$ and $E = H\cup W$. [step 2.1, L5, F1, F3, F4]

4.1 The implications of steps 1.1, 1.2 and 1.3 close the cycle between measurability and conditions 1 and 2, and those of steps 2.1, 3.1 and 1.4 close the cycle between measurability and conditions 3 and 4; so all five statements are equivalent, and outer regularity is what stands behind the open sets produced in step 1.1. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, L6] ∎
