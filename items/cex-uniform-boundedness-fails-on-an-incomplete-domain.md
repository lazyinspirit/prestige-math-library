---
id: cex-uniform-boundedness-fails-on-an-incomplete-domain
kind: counterexample
title: "Uniform boundedness fails on the incomplete space c_00"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-operator-norm]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Example 2.6", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement refuted
Pointwise bounded families on arbitrary normed spaces need not be uniformly operator-norm bounded.
## Facts & Assumptions
**Given:** $c_{00}$ with the supremum norm and $f_n(x)=n x_n$.
## Counterexample
**Proof technique:** direct.

1.1 Every $f_n$ is bounded and $\|f_n\|=n$ by testing the $n$th unit vector. [given]

1.2 For fixed finitely supported $x$, $f_n(x)=0$ for all sufficiently large $n$, so $\sup_n|f_n(x)|<\infty$. [given]

2.1 The partial sums of $(2^{-k})_{k\ge1}$ lie in $c_{00}$ and are Cauchy in the sup norm but converge in its completion to a non-finitely-supported sequence. Thus the domain is incomplete and steps 1.1--1.2 refute the claim. [step 1.1, step 1.2] ∎
