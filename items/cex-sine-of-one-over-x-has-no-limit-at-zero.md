---
id: cex-sine-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "sin(1/x) has no limit as x tends to zero"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sequential-criterion-for-function-limits, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Statement refuted

The function $x\mapsto\sin(1/x)$, defined for $x\ne0$, has a limit at $0$.

## Facts & Assumptions

**Given:** The punctured real line.

[L1] $\sin(\pi/2+2m\pi)=1$ and $\sin(3\pi/2+2m\pi)=-1$ for integers $m$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L2] A function limit implies convergence along every sequence in its punctured domain approaching the point ([[thm-sequential-criterion-for-function-limits]]).

[L3] Reciprocal natural-number sequences tend to zero ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n\in\mathbb N$, put $x_n=1/(\pi/2+2\pi(n+1))$ and $y_n=1/(3\pi/2+2\pi(n+1))$. Both sequences are nonzero and tend to $0$. [L3, algebra]

1.2 Their image values are $\sin(1/x_n)=1$ and $\sin(1/y_n)=-1$. [L1]

2.1 A common function limit at zero would force both image sequences to converge to it, which is impossible. [step 1.1, step 1.2, L2] ∎
