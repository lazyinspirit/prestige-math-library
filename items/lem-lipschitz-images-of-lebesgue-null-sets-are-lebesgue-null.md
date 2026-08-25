---
id: lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null
kind: lemma
title: "A Lipschitz self-map of $\\mathbb{R}^n$ carries Lebesgue null sets to Lebesgue null sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-null-agrees-with-elementary-nullity-in-rn, thm-lipschitz-images-of-null-sets-in-rn-are-null, def-lipschitz-holder-contraction, thm-lebesgue-measure-is-a-complete-measure, def-null-and-content-zero-in-rn, lem-metrics-on-rn, def-countable-choice]
justified_by: []
aliases: []
landmark: false
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
([[def-countable-choice]]). Let $T : \mathbb{R}^n \to \mathbb{R}^n$ be Lipschitz
for the Euclidean metric ([[def-lipschitz-holder-contraction]],
[[lem-metrics-on-rn]]) and let $E \subseteq \mathbb{R}^n$ satisfy
$\lambda_n^*(E) = 0$. Then $T[E]$ is Lebesgue measurable and

$$\lambda_n\big(T[E]\big) \;=\; 0 .$$

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a Lipschitz map $T$ of $\mathbb{R}^n$ into itself, and a set $E$ with $\lambda_n^*(E)=0$.

[L1] Assuming countable choice, $\lambda_n^*(S) = 0$ if and only if $S$ is null in the covering sense of closed-cube covers ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], [[def-null-and-content-zero-in-rn]]).

[L2] Assuming countable choice, every $S \subseteq \mathbb{R}^n$ with $\lambda_n^*(S)=0$ is Lebesgue measurable with $\lambda_n(S)=0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] If $T:\mathbb R^m\to\mathbb R^m$ is Lipschitz and $E$ is null, then $T[E]$ is null ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

[F2] $f$ is **Lipschitz** with constant $L \ge 0$ if $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x'$ ([[def-lipschitz-holder-contraction]]).

## Proof

**Proof technique:** direct.

1.1 By the agreement theorem, $\lambda_n^*(E)=0$ says exactly that $E$ is null in the covering sense of closed-cube covers. [L1]

2.1 The published theorem on Lipschitz images therefore applies and gives that $T[E]$ is null in that same covering sense, so the agreement theorem read the other way gives $\lambda_n^*(T[E]) = 0$; completeness then makes $T[E]$ Lebesgue measurable with $\lambda_n(T[E])=0$. [step 1.1, L1, L2, F1, F2] ∎
