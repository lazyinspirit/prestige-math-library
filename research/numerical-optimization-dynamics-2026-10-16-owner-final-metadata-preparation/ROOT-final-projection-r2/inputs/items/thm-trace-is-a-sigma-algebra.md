---
id: thm-trace-is-a-sigma-algebra
kind: theorem
title: "The trace of a sigma-algebra is a sigma-algebra on the traced subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-trace-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

If $\mathcal A$ is a sigma-algebra on $X$ and $Y\subseteq X$, then the trace
$\mathcal A|_Y$ is a sigma-algebra on $Y$.

## Facts & Assumptions

**Given:** A sigma-algebra $\mathcal A$ on $X$, a subset $Y\subseteq X$, and the trace $\mathcal A|_Y=\{A\cap Y:A\in\mathcal A\}$ of [[def-trace-sigma-algebra]].

## Proof

**Proof technique:** direct.

1.1 Since $\varnothing=\varnothing\cap Y$, the empty set lies in the trace. If $A\cap Y$ lies in the trace, then $Y\setminus(A\cap Y)=(X\setminus A)\cap Y$ lies in it. [given, algebra]

2.1 For a sequence of traced sets, $\bigcup_n(A_n\cap Y)=(\bigcup_nA_n)\cap Y$ lies in the trace. Together with step 1.1 these are exactly the sigma-algebra axioms on $Y$. [step 1.1, given, algebra] ∎
