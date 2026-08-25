---
id: cor-riemann-integrability-and-lebesgue-null-discontinuity-sets
kind: corollary
title: "A bounded function on a closed bounded interval, or on a closed nondegenerate rectangle, is Riemann integrable exactly when its discontinuity set has Lebesgue measure zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-lebesgue-null-agrees-with-elementary-nullity-in-rn, thm-lebesgue-criterion, thm-lebesgue-criterion-in-rn, def-measure-null-set-and-almost-everywhere, thm-lebesgue-measure-is-a-complete-measure, def-measure-zero-and-content-zero, def-null-and-content-zero-in-rn, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "Riemann integrability and Lebesgue nullity"
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

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]).

1. Let $a<b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded, with
   discontinuity set $D$. Then $f$ is Riemann integrable on $[a,b]$ if and only
   if $D$ is Lebesgue measurable with $\lambda_1(D) = 0$.
2. Let $m \ge 1$ and let $f$ be a bounded real function on a closed
   nondegenerate rectangle in $\mathbb{R}^m$, with discontinuity set $D$. Then
   $f$ is Riemann integrable if and only if $D$ is Lebesgue measurable with
   $\lambda_m(D) = 0$.

**The choice ledger of the cited criteria is inherited, not discharged.** In
[[thm-lebesgue-criterion]] the implication from integrability to nullity of $D$
uses countable choice and the converse implication is a theorem of ZF; the
translation performed here rests on the construction of $\lambda$, which uses
countable choice in both directions, so the statement above carries the
hypothesis throughout.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a bounded real function on a closed bounded interval or on a closed nondegenerate rectangle, and its discontinuity set $D$.

[L1] Assuming countable choice, $\lambda_1^*(A)=0$ if and only if $A \subseteq \mathbb{R}$ has measure zero in the covering sense, and a set of Lebesgue outer measure zero is measurable of measure zero ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[L2] Assuming countable choice, $\lambda_m^*(E)=0$ if and only if $E \subseteq \mathbb{R}^m$ is null in the covering sense ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]]).

[F1] Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded and let $D$ be its set of discontinuities; then $f$ is Riemann integrable on $[a,b]$ if and only if $D$ has measure zero ([[thm-lebesgue-criterion]], [[def-measure-zero-and-content-zero]]).

[F2] A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null ([[thm-lebesgue-criterion-in-rn]], [[def-null-and-content-zero-in-rn]]).

[F3] A measurable set $N\in\mathcal A$ is **$\mu$-null** if $\mu(N)=0$ ([[def-measure-null-set-and-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 On the line, "$D$ has measure zero" in the covering sense of the cited criterion is equivalent to $\lambda_1^*(D)=0$, and a set of Lebesgue outer measure zero is Lebesgue measurable of measure zero, while conversely $\lambda_1(D)=0$ for a measurable $D$ says $\lambda_1^*(D)=0$. [L1, F3]

1.2 In $\mathbb{R}^m$, "the discontinuity set is null" in the covering sense of the cited criterion is likewise equivalent to $\lambda_m^*(D)=0$, hence to $D$ being Lebesgue measurable with $\lambda_m(D)=0$. [L1, L2, F3]

2.1 Substituting these equivalences into the two published criteria gives claims 1 and 2. [step 1.1, step 1.2, F1, F2] ∎
