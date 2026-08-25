---
id: cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere
kind: corollary
title: "A property holding outside a set of elementary measure zero is exactly a property holding $\\lambda$-almost everywhere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-lebesgue-null-agrees-with-elementary-nullity-in-rn, def-measure-null-set-and-almost-everywhere, thm-lebesgue-measure-is-a-complete-measure, def-measure-zero-and-content-zero, def-null-and-content-zero-in-rn, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, def-countable-choice]
justified_by: []
aliases: []
landmark: false
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
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then:

1. A subset of $\mathbb{R}$ has measure zero in the covering sense of
   [[def-measure-zero-and-content-zero]] if and only if it is Lebesgue
   measurable with $\lambda_1$-measure $0$; and a subset of $\mathbb{R}^m$ is
   null in the covering sense of [[def-null-and-content-zero-in-rn]] if and only
   if it is Lebesgue measurable with $\lambda_m$-measure $0$.
2. For a property $P$ of points of $\mathbb{R}^m$, the exceptional set
   $\{\, x \in \mathbb{R}^m : P(x) \text{ fails} \,\}$ is null in the covering
   sense if and only if $P$ holds $\lambda_m$-almost everywhere
   ([[def-measure-null-set-and-almost-everywhere]]).

## Facts & Assumptions

**Given:** A natural number $m \ge 1$, the Axiom of Countable Choice, and a property $P$ of points of $\mathbb{R}^m$ with exceptional set $N_0$.

[L1] Assuming countable choice, $\lambda_1^*(A)=0$ if and only if $A \subseteq \mathbb{R}$ has measure zero in the covering sense ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[def-measure-zero-and-content-zero]]).

[L2] Assuming countable choice, $\lambda_m^*(E)=0$ if and only if $E \subseteq \mathbb{R}^m$ is null in the covering sense ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], [[def-null-and-content-zero-in-rn]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^m)$ is a sigma-algebra, $\lambda_m$ is a complete measure on it and is the restriction of $\lambda_m^*$, and every $S$ with $\lambda_m^*(S)=0$ is Lebesgue measurable of measure $0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L4] Assuming countable choice, $\lambda_m^*$ is an outer measure on $\mathbb{R}^m$, hence monotone ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[F1] A property $P(x)$ holds **$\mu$-almost everywhere** if its exceptional set is contained in a measurable $\mu$-null set: there is $N\in\mathcal A$ with $\mu(N)=0$ such that $P(x)$ holds for every $x\in X\setminus N$ ([[def-measure-null-set-and-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 A set with Lebesgue outer measure $0$ is Lebesgue measurable of measure $0$, and conversely a Lebesgue measurable set of measure $0$ has outer measure $0$, since $\lambda_m$ is the restriction of $\lambda_m^*$. [L3]

2.1 Combining step 1.1 with the two agreement theorems gives claim 1 in both dimensions: covering nullity and Lebesgue nullity name the same class of sets. [step 1.1, L1, L2]

3.1 If $N_0$ is null in the covering sense then $\lambda_m^*(N_0)=0$, so $N_0$ itself is a measurable null set containing the exceptional set and $P$ holds $\lambda_m$-almost everywhere; conversely if $P$ holds $\lambda_m$-almost everywhere, with $N_0 \subseteq N$ measurable and $\lambda_m(N)=0$, then monotonicity gives $\lambda_m^*(N_0) \le \lambda_m^*(N) = 0$ and $N_0$ is null in the covering sense. [step 1.1, step 2.1, L2, L4, F1] ∎
