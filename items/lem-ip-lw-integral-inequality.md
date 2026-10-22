---
id: lem-ip-lw-integral-inequality
kind: lemma
title: Loomis–Whitney integral inequality
status: published
origin: pipeline
deps:
  - def-countable-choice
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-holder-inequality-for-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice. Let $n\ge2$. For each $i\in\{1,\ldots,n\}$ let $g_i:\mathbb R^{n-1}\to[0,\infty)$ be Lebesgue-measurable and integrable, with its arguments identified with all coordinates except $x_i$. Then $$\int_{\mathbb R^n}\prod_{i=1}^n g_i(x_1,\ldots,\widehat{x_i},\ldots,x_n)^{1/(n-1)}\,dx\le\prod_{i=1}^n\left(\int_{\mathbb R^{n-1}}g_i\right)^{1/(n-1)}.$$

## Statement references

[[thm-holder-inequality-for-integrals|Hölder's inequality for integrals.]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces|Tonelli's theorem for nonnegative product integrals.]]

## Facts & Assumptions

**Given:** Countable Choice and an integer $n\ge2$ and nonnegative integrable functions $g_i$ on the coordinate hyperplanes.

[F1] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces. Under Countable Choice, Euclidean Lebesgue measure is the completion of each product of its coordinate factors. In particular Borel functions on a Euclidean product are product-measurable and their product integrals equal their Euclidean integrals. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]])

[F3] Under Countable Choice, Lebesgue measure is the completion of its Borel restriction, and every completion-measurable function has a base-measurable representative. Thus each nonnegative finite Lebesgue-measurable $g_i$ has a nonnegative finite Borel representative equal almost everywhere. ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]])

[A2] Countable Choice is used in the Borel-representative and Euclidean-product identification suppliers. No unqualified choice-free Lebesgue product identity is asserted. ([[def-countable-choice]])

[F2] For nonnegative integrable functions, Hölder's inequality bounds the integral of a product by the product of the corresponding norms. ([[thm-holder-inequality-for-integrals]])

[A1] For the induction step in dimension $n\ge3$, assume the inequality in dimension $n-1$.

## Proof

**Given:** Countable Choice, the integer $n$ and nonnegative integrable coordinate functions $g_i$.

1.1 First replace the $g_i$ by their Borel representatives from [F3], setting each representative to zero on its Borel set of nonfinite or negative values. The exceptional sets lie in Borel null sets $N_i$. Their coordinate lifts are null in $\mathbb R^n$: intersect $N_i\times\mathbb R$ with slabs $N_i\times[-k,k]$, $k\ge1$, and apply the product rectangle formula in [F1], then take their countable union and permute coordinates. Completeness in [F1] therefore makes the original product Lebesgue-measurable with the same integral as the Borel product; the right-hand integrals are unchanged as well. We may henceforth assume all inputs Borel. For $n=2$, Tonelli [F1] factors the left side as $(\int_{\mathbb R}g_1)(\int_{\mathbb R}g_2)$, which is the right side. [A2, F1, F3, given, base]

2.1 For $n\ge3$, assume [A1]. For $i<n$ define $h_i(x_1,\ldots,\widehat{x_i},\ldots,x_{n-1}):=\int_\mathbb R g_i(x_1,\ldots,\widehat{x_i},\ldots,x_{n-1},x_n)\,dx_n$. Apply Tonelli [F1] using the Borel sigma-algebras: each $h_i$ is Borel and integrable, possibly infinite on a Borel null set. Set it to zero there. The lifted exceptional sets in $\mathbb R^{n-1}$ are null by the slab argument of step 1.1. Consequently all the following sectional inequalities hold almost everywhere, and the modified $h_i$ are admissible finite inputs for [A1]. Applying Hölder [F2] in $x_n$ to the first $n-1$ factors and then Tonelli gives an upper bound for the left side of $\int_{\mathbb R^{n-1}}g_n(x')^{1/(n-1)}\prod_{i<n}h_i(\widehat{x_i}')^{1/(n-1)}\,dx'$. Set $H(x'):=\prod_{i<n}h_i(\widehat{x_i}')^{1/(n-2)}$. Hölder in $x'$ with exponents $(n-1)/(n-2)$ and $n-1$ bounds this by $(\int H)^{(n-2)/(n-1)}(\int g_n)^{1/(n-1)}$. The induction hypothesis [A1] bounds $\int H\le\prod_{i<n}(\int h_i)^{1/(n-2)}$, while Tonelli gives $\int h_i=\int g_i$. Substitution yields the claimed product bound in dimension $n$. [A1, F1, F2, step 1.1, given, IH]

3.1 Induction from the base case [step 1.1] through step 2.1 proves the inequality for every integer $n\ge2$. [step 1.1, step 2.1, discharge-induction: step 2.1] ∎
