---
id: ex-explicit-equivalence-constants-for-standard-norms-on-kn
kind: example
title: "Explicit comparison constants for the standard norms on K^n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-norms-on-rn, thm-all-norms-on-rn-are-equivalent,
       thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
pipeline_run: frontier-29
---

## Example

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $x=(x_0,\dots,x_{n-1})\in
\mathbb K^n$ with $n\ge1$. Define

$$\|x\|_\infty:=\max_{j<n}|x_j|,\qquad \|x\|_2:=\left(\sum_{j<n}|x_j|^2\right)^{1/2},\qquad \|x\|_1:=\sum_{j<n}|x_j|.$$

Then

$$\|x\|_\infty\le \|x\|_2\le \|x\|_1\le \sqrt n\,\|x\|_2\le n\|x\|_\infty.$$

In particular, the abstract norm-equivalence theorems on the A page can be read
with explicit constants on these three standard coordinate norms.

## Facts & Assumptions

**Given:** A field $\mathbb K\in\{\mathbb R,\mathbb C\}$, an integer $n\ge1$,
and a vector $x\in\mathbb K^n$.

[L1] On $\mathbb R^n$, the displayed $\ell^1$, Euclidean, and max formulas are
the standard norms of [[def-p-norms-on-rn]], and every norm on $\mathbb R^n$ is
equivalent to every other ([[thm-all-norms-on-rn-are-equivalent]]).

[L2] On finite-dimensional complex spaces every two norms are equivalent
([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]]).

## Verification

**Proof technique:** direct.

1.1 Since every summand $|x_j|^2$ is nonnegative and one of them equals $\|x\|_\infty^2$, one has $\|x\|_\infty^2\le \sum_{j<n}|x_j|^2=\|x\|_2^2$, hence $\|x\|_\infty\le\|x\|_2$. Also $$\|x\|_2^2=\sum_{j<n}|x_j|^2\le \left(\sum_{j<n}|x_j|\right)^2=\|x\|_1^2,$$ so $\|x\|_2\le\|x\|_1$. [L1, algebra]

2.1 By Cauchy-Schwarz for the vectors $(|x_j|)_{j<n}$ and $(1,\dots,1)$, $$\|x\|_1=\sum_{j<n}|x_j| \le \left(\sum_{j<n}|x_j|^2\right)^{1/2}\left(\sum_{j<n}1^2\right)^{1/2} =\sqrt n\,\|x\|_2.$$ Also $|x_j|\le\|x\|_\infty$ for every $j$, so $\|x\|_1\le n\|x\|_\infty$. [step 1.1, algebra]

3.1 Combining steps 1.1 and 2.1 yields the displayed chain. Thus [L1] and [L2] become concrete on these coordinate norms. [L1, L2, step 1.1, step 2.1] ∎

## Remarks

- The constants are sharp in the standard basis: $x=(1,\dots,1)$ makes
  $\|x\|_1=n\|x\|_\infty$ and $\|x\|_1=\sqrt n\,\|x\|_2$.
