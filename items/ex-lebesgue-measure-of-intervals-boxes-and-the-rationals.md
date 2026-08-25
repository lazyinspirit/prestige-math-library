---
id: ex-lebesgue-measure-of-intervals-boxes-and-the-rationals
kind: example
title: "The Lebesgue measure of an interval, of a box, of $\\mathbb{Q}$ and of the irrationals in $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-of-a-box-of-every-kind,
       prop-countable-subsets-of-rn-are-lebesgue-null,
       thm-lebesgue-measure-is-a-complete-measure]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

## Example

Assume the Axiom of Countable Choice. Then every bounded interval in
$\mathbb{R}$ has Lebesgue measure equal to its length, every box in
$\mathbb{R}^n$ has Lebesgue measure equal to the product of its side lengths,
$\lambda_1(\mathbb{Q}) = 0$, and

$$\lambda_1\big([0,1] \setminus \mathbb{Q}\big) = 1.$$

In particular a degenerate interval and the empty box both have measure $0$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L2] Every at most countable subset of $\mathbb R^n$ is Lebesgue null; in particular $\lambda_1(\mathbb Q)=0$ ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[L3] Assuming countable choice, $\lambda_n$ is a complete measure ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], every interval with endpoints $a \le b$ and every box with real side parameters has Lebesgue measure equal to its geometric length or volume, whatever choice of open and closed faces is made. [L1]

1.2 The rationals form a Lebesgue null subset of $\mathbb{R}$, so $\lambda_1(\mathbb Q)=0$. [L2]

2.1 Since $[0,1] = (\mathbb Q \cap [0,1]) \sqcup ([0,1] \setminus \mathbb Q)$ and $\lambda_1([0,1]) = 1$ by step 1.1, step 1.2 and [L3] give $\lambda_1([0,1] \setminus \mathbb Q)=1$. [step 1.1, step 1.2, L3, algebra]

3.1 Step 1.1 also covers the boundary cases: if $a=b$ then the interval has measure $0$, and the empty box has measure $0$. [step 1.1] ∎
