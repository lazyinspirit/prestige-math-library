---
id: lem-open-mapping-ball-closure-step
kind: lemma
title: "The closure of a bounded image contains a ball"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-metric-interior-closure-boundary, thm-baire-category-for-complete-metric-spaces]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Lemma 2.9", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---

## Statement

Assume DC. If $T:X\to Y$ is a surjective bounded linear map between Banach spaces, then for some $r>0$,

$$B_Y(0,r)\subseteq\overline{T(B_X(0,1))}.$$

## Facts & Assumptions

**Given:** DC and a surjective bounded linear map $T:X\to Y$ with $X,Y$ Banach.

## Proof

**Proof technique:** direct.

1.1 Surjectivity gives $Y=\bigcup_{n\ge1}\overline{T(B_X(0,n))}$. Baire applied to $Y$ gives $n$, $y_0$, and $\rho>0$ with $B(y_0,\rho)$ inside this closure. [given]

2.1 Subtracting two points in this ball shows $B(0,\rho)\subseteq\overline{T(B(0,2n))}$. [step 1.1, algebra]

3.1 Scaling by $2n$ gives $B(0,\rho/(2n))\subseteq\overline{T(B(0,1))}$, as required. [step 2.1, algebra] ∎
