---
id: cex-open-mapping-fails-without-completeness
kind: counterexample
title: "A bounded bijection of incomplete normed spaces need not be open"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-uniform-boundedness-fails-on-an-incomplete-domain, def-bounded-linear-operator]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Example 2.13", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement refuted
A bounded bijective linear map between arbitrary normed spaces need not be open.
## Facts & Assumptions
**Given:** The identity $I:(c_{00},\|\cdot\|_1)\to(c_{00},\|\cdot\|_\infty)$.
## Counterexample
**Proof technique:** direct.

1.1 Since $\|x\|_\infty\le\|x\|_1$, $I$ is bounded and bijective. [given]

1.2 Its inverse is unbounded: for $x^{(m)}=(1/m,\ldots,1/m,0,\ldots)$, $\|x^{(m)}\|_\infty=1/m$ but $\|x^{(m)}\|_1=1$. [given]

1.3 The target is incomplete by [[cex-uniform-boundedness-fails-on-an-incomplete-domain]]. The partial sums of $(2^{-k})_{k\ge1}$ are also Cauchy in the $\ell^1$ norm but have no limit in $c_{00}$, so the domain is incomplete as well. [given]

2.1 If $I$ were open, its inverse would be continuous at $0$, hence bounded by linearity, contradicting step 1.2. [step 1.2] ∎
