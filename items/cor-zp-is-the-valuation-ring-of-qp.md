---
id: cor-zp-is-the-valuation-ring-of-qp
kind: corollary
title: "Z_p is the valuation ring of Q_p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Remark 8.2"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Under the comparison of
[[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]], the $(p)$-adic
completion $\mathbb Z_p$ of $\mathbb Z$ identifies with

$$\{x \in \mathbb Q_p : |x|_p \le 1\}.$$

## Facts & Assumptions

**Given:** The canonical embedding $\mathbb Z_p \hookrightarrow \mathbb Q_p$.

[L1] The comparison theorem identifies $\mathbb Q_p$ with the fraction field of
$\mathbb Z_p$ and identifies the embedded copy of $\mathbb Z_p$ with the closed
unit ball ([[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], an element of $\mathbb Q_p$ lies in the image of $\mathbb Z_p$ exactly when its $p$-adic absolute value is at most $1$. [L1, given]

2.1 Thus the image is exactly $\{x\in\mathbb Q_p:|x|_p\le1\}$, which is the valuation ring of the valued field $\mathbb Q_p$. [step 1.1] ∎
