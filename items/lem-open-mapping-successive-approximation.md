---
id: lem-open-mapping-successive-approximation
kind: lemma
title: "Successive approximation turns a closure-ball inclusion into an actual preimage"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-mapping-ball-closure-step, thm-banach-series-criterion, thm-bounded-linear-operator-equivalences]
proof_strategy: constructive
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Lemma 2.10", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---

## Statement

Assume DC. Let $T:X\to Y$ be bounded linear, with $X$ Banach. If $B_Y(0,r)\subseteq\overline{T(B_X(0,1))}$ for some $r>0$, then

$$B_Y(0,r/2)\subseteq T(B_X(0,1)).$$

## Facts & Assumptions

**Given:** DC and $T,X,Y,r$ with the displayed closure inclusion.

## Proof

**Proof technique:** constructive.

1.1 Given $y$ with $\|y\|<r/2$, repeatedly use the closure inclusion, after scaling, to choose $x_n$ with $\|x_n\|<2^{-n-1}$ and residual $y-T\sum_{k\le n}x_k$ of norm $<r2^{-n-2}$. DC licenses this dependent recursive selection. [given, construct]

2.1 The series $\sum_nx_n$ converges in $X$ by [[thm-banach-series-criterion]], and its sum $x$ has $\|x\|<1$. [step 1.1]

3.1 Boundedness makes $T$ continuous by [[thm-bounded-linear-operator-equivalences]], so $Tx=\lim_nT\sum_{k\le n}x_k=y$ as the residuals vanish. [step 1.1, step 2.1, discharge-construct] ∎
